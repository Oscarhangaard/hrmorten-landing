import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const SCOPES = [
  "https://www.googleapis.com/auth/calendar.events",
  "https://www.googleapis.com/auth/userinfo.email",
];

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const data = {
    fullname: formData.get("fullname") as string,
    gmail: formData.get("gmail") as string,
    telegram: formData.get("telegram") as string,
    location: formData.get("location") as string,
    job: formData.get("job") as string,
    projects: formData.get("projects") as string,
    style: formData.get("style") as string,
    detail: formData.get("detail") as string,
    reminders: formData.get("reminders") as string,
    notes: formData.get("notes") as string,
    briefings: formData.getAll("briefings").join(", ") || "Ikke valgt",
  };

  const state = Buffer.from(JSON.stringify(data)).toString("base64");

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
    state,
  });

  return NextResponse.redirect(url);
}
