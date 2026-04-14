import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { notifyTelegram } from "@/lib/telegram";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (!code) {
    return NextResponse.redirect(new URL("/?error=missing_code", req.url));
  }

  let formData: Record<string, string> = {};
  try {
    formData = JSON.parse(Buffer.from(state || "", "base64").toString());
  } catch {}

  const {
    fullname = "Ukendt", gmail = "-", telegram = "-", location = "-",
    job = "-", projects = "-", style = "-", detail = "-",
    briefings = "-", reminders = "-", notes = "-",
  } = formData;

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
    let email = "ukendt";
    try {
      email = (await oauth2.userinfo.get()).data.email || "ukendt";
    } catch {}

    const firstName = fullname.split(" ")[0];
    const calendarEmail = gmail || email;

    const message =
      `🎩 <b>Ny Hr Morten-kunde!</b>\n\n` +
      `👤 <b>Navn:</b> ${fullname}\n` +
      `📧 <b>Google-konto:</b> ${email}\n` +
      `📅 <b>Gmail (kalender):</b> ${calendarEmail}\n` +
      `📱 <b>Telegram:</b> ${telegram}\n` +
      `📍 <b>Lokation:</b> ${location}\n` +
      `💼 <b>Job:</b> ${job}\n` +
      `📋 <b>Projekter:</b> ${projects || "-"}\n` +
      `💬 <b>Stil:</b> ${style}\n` +
      `📏 <b>Svar:</b> ${detail}\n` +
      `⏰ <b>Briefings:</b> ${briefings}\n` +
      `🔔 <b>Reminders:</b> ${reminders}\n` +
      `📝 <b>Noter:</b> ${notes || "-"}\n\n` +
      `🔑 <b>Refresh token:</b>\n<code>${tokens.refresh_token || "(mangler — bed kunden gentage flow)"}</code>\n\n` +
      `<b>Kør:</b> <code>cd /Users/oscar/hrmorten-provision && ./provision.sh</code>`;

    await notifyTelegram(message);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://hrmorten.dk";
    return NextResponse.redirect(`${baseUrl}/success?name=${encodeURIComponent(firstName)}`);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Ukendt fejl";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://hrmorten.dk";
    return NextResponse.redirect(`${baseUrl}/?error=${encodeURIComponent(message)}`);
  }
}
