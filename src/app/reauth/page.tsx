"use client";

import { useState } from "react";

export default function ReauthPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullname", email);
    formData.append("gmail", email);
    formData.append("telegram", "-");
    formData.append("location", "-");
    formData.append("job", "-");
    formData.append("projects", "-");
    formData.append("style", "-");
    formData.append("detail", "-");
    formData.append("reminders", "-");
    formData.append("notes", "RE-AUTH");

    const res = await fetch("/api/auth", { method: "POST", body: formData });
    // The API redirects to Google, but fetch follows redirects
    // So we need to do a form submit instead
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      color: "#f0f0f0",
    }}>
      <div style={{ textAlign: "center", maxWidth: 400, padding: "0 24px" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🎩</div>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
          Opdater Google-adgang
        </h1>
        <p style={{ color: "#888", marginBottom: 32, lineHeight: 1.6 }}>
          Hr Morten har brug for adgang til din Google Kalender.
          Indtast din email og tryk på knappen for at give adgang.
        </p>

        <form action="/api/auth" method="POST" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input type="hidden" name="telegram" value="-" />
          <input type="hidden" name="location" value="-" />
          <input type="hidden" name="job" value="-" />
          <input type="hidden" name="projects" value="-" />
          <input type="hidden" name="style" value="-" />
          <input type="hidden" name="detail" value="-" />
          <input type="hidden" name="reminders" value="-" />
          <input type="hidden" name="notes" value="RE-AUTH" />
          <input
            type="email"
            name="gmail"
            placeholder="Din Gmail-adresse"
            required
            style={{
              padding: "12px 16px",
              borderRadius: 8,
              border: "1px solid #333",
              background: "#1a1a2e",
              color: "#f0f0f0",
              fontSize: 16,
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input type="hidden" name="fullname" value={email} />
          <button
            type="submit"
            style={{
              padding: "14px 24px",
              borderRadius: 8,
              border: "none",
              background: "#4f46e5",
              color: "white",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Forbind Google Kalender
          </button>
        </form>
      </div>
    </div>
  );
}
