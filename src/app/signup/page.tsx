export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12" style={{ background: "#0a0a0f" }}>
      <a href="/" className="flex items-center gap-2 font-bold text-lg mb-10 self-start max-w-lg w-full mx-auto">
        <span>🎩</span>
        <span className="text-white">Hr Morten</span>
      </a>

      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-white mb-2">Lad os lære dig at kende</h1>
        <p className="mb-8" style={{ color: "#8ea8be" }}>
          Så Hr Morten kan hjælpe dig bedst muligt fra dag ét.
        </p>

        <form action="/api/auth" method="POST" className="flex flex-col gap-5">

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Fulde navn <span style={{ color: "#e05252" }}>*</span>
            </label>
            <input type="text" name="fullname" placeholder="f.eks. Tina Hansen" required
              className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none"
              style={{ background: "#141420", border: "1.5px solid #2a2a40", color: "white" }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Gmail <span style={{ color: "#e05252" }}>*</span>
            </label>
            <input type="email" name="gmail" placeholder="din@gmail.com" required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ background: "#141420", border: "1.5px solid #2a2a40", color: "white" }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Telegram-brugernavn <span style={{ color: "#e05252" }}>*</span>
            </label>
            <input type="text" name="telegram" placeholder="@ditbrugernavn" required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ background: "#141420", border: "1.5px solid #2a2a40", color: "white" }}
            />
            <p className="text-xs mt-1.5" style={{ color: "#5a7a8a" }}>Dit @brugernavn på Telegram</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              By/region <span style={{ color: "#e05252" }}>*</span>
            </label>
            <input type="text" name="location" placeholder="f.eks. København, Aarhus..." required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ background: "#141420", border: "1.5px solid #2a2a40", color: "white" }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Hvad laver du? <span style={{ color: "#e05252" }}>*</span>
            </label>
            <input type="text" name="job" placeholder="Titel, erhverv eller kort beskrivelse" required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ background: "#141420", border: "1.5px solid #2a2a40", color: "white" }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">Aktive projekter</label>
            <textarea name="projects" placeholder="Hvad arbejder du på lige nu? (1-3 projekter)" rows={3}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
              style={{ background: "#141420", border: "1.5px solid #2a2a40", color: "white" }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">Kommunikationsstil</label>
            {["Direkte og uformel", "Professionel men varm", "Formel"].map((s) => (
              <label key={s} className="flex items-center gap-3 mb-2 cursor-pointer">
                <input type="radio" name="style" value={s} required className="accent-blue-400" />
                <span className="text-sm" style={{ color: "#c0c0c0" }}>{s}</span>
              </label>
            ))}
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">Hvor detaljerede svar foretrækker du?</label>
            {["Korte og actionable", "Detaljerede med forklaringer", "Kommer an på situationen"].map((s) => (
              <label key={s} className="flex items-center gap-3 mb-2 cursor-pointer">
                <input type="radio" name="detail" value={s} required className="accent-blue-400" />
                <span className="text-sm" style={{ color: "#c0c0c0" }}>{s}</span>
              </label>
            ))}
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">Vil du have daglige briefings?</label>
            {["Morgen-briefing", "Middags check-in", "Aften-opsummering", "Nej tak"].map((s) => (
              <label key={s} className="flex items-center gap-3 mb-2 cursor-pointer">
                <input type="checkbox" name="briefings" value={s} className="accent-blue-400" />
                <span className="text-sm" style={{ color: "#c0c0c0" }}>{s}</span>
              </label>
            ))}
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Hvornår vil du have reminders? <span style={{ color: "#e05252" }}>*</span>
            </label>
            <input type="text" name="reminders" placeholder="f.eks. 09:00, 14:00, 19:00" required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ background: "#141420", border: "1.5px solid #2a2a40", color: "white" }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">Andet jeg skal vide?</label>
            <textarea name="notes" placeholder="Særlige præferencer, vigtige kontakter, eller andet" rows={3}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
              style={{ background: "#141420", border: "1.5px solid #2a2a40", color: "white" }}
            />
          </div>

          <button type="submit"
            className="w-full py-4 rounded-xl font-semibold text-white text-base transition-all hover:opacity-90 mt-2"
            style={{ background: "linear-gradient(135deg, #2e9ae0, #1a6fa8)" }}>
            Forbind Google Kalender →
          </button>

          <p className="text-center text-xs" style={{ color: "#5a7a8a" }}>
            Vi bruger kun din kalender til at vise og oprette begivenheder på dine vegne.{" "}
            <a href="/privacy" className="underline hover:text-white">Privatlivspolitik</a>
          </p>
        </form>
      </div>
    </main>
  );
}
