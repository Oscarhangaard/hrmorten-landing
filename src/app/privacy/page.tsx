export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-2xl mx-auto" style={{ background: "#0a0a0f" }}>
      <a href="/" className="flex items-center gap-2 font-bold text-lg mb-10">
        <span>🎩</span>
        <span className="text-white">Hr Morten</span>
      </a>

      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy / Privatlivspolitik</h1>
      <p className="text-sm mb-10" style={{ color: "#5a7a8a" }}>Sidst opdateret: April 14, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#c0c0c0" }}>
        <p>
          This privacy policy explains how Hr Morten collects, uses, and protects your data when you use our Google Calendar integration.
        </p>

        <section>
          <h2 className="text-white font-semibold text-base mb-3">1. What data we collect</h2>
          <p>When you connect your Google account, we collect:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li><strong className="text-white">Google account email address</strong> — used to identify your account</li>
            <li><strong className="text-white">Google Calendar events</strong> — read and written on your behalf via the Google Calendar API (<code className="text-blue-400">calendar.events</code> scope)</li>
            <li><strong className="text-white">OAuth refresh token</strong> — stored securely to maintain calendar access</li>
          </ul>
          <p className="mt-2">We also collect the information you provide in our onboarding form: name, Telegram username, location, job title, and preferences.</p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-base mb-3">2. How we use your data</h2>
          <p>We use your Google Calendar access exclusively to:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Read your upcoming calendar events to provide daily briefings via Telegram</li>
            <li>Create and delete calendar events on your request</li>
          </ul>
          <p className="mt-2">We do <strong className="text-white">not</strong> use your data for analytics, advertising, or any other purpose.</p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-base mb-3">3. Google API scopes used</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li><code className="text-blue-400">calendar.events</code> — to read, create, and delete calendar events</li>
            <li><code className="text-blue-400">userinfo.email</code> — to identify your Google account</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-semibold text-base mb-3">4. Data storage and security</h2>
          <p>Your OAuth refresh token is stored on a private, encrypted server. It is never shared with third parties.</p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-base mb-3">5. Data sharing</h2>
          <p>We never sell, share, or transfer your data to any third parties.</p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-base mb-3">6. Revoking access and deletion</h2>
          <p>
            You can revoke access at any time via{" "}
            <a href="https://myaccount.google.com/permissions" className="text-blue-400 underline">
              Google Account Permissions
            </a>
            . Contact us to have all your data deleted within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-base mb-3">7. Contact</h2>
          <p>Questions? Contact us on Telegram or at hrmorten.dk.</p>
        </section>
      </div>

      <div className="mt-12">
        <a href="/" className="text-sm underline" style={{ color: "#5a7a8a" }}>← Tilbage til forsiden</a>
      </div>
    </main>
  );
}
