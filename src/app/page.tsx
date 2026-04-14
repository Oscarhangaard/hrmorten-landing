import { Calendar, Bell, MessageSquare, Zap, Star, ArrowRight, Check } from "lucide-react";
import DemoSection from "@/components/DemoSection";

const FEATURES = [
  {
    icon: Calendar,
    title: "Kender din kalender",
    desc: "Hr Morten har adgang til din Google Kalender. Han briefer dig om dagen, minder dig om møder og booker nye aftaler for dig.",
  },
  {
    icon: Bell,
    title: "Proaktive reminders",
    desc: "Glem aldrig en deadline igen. Hr Morten sender dig påmindelser på det rigtige tidspunkt — tilpasset din hverdag.",
  },
  {
    icon: MessageSquare,
    title: "Altid på Telegram",
    desc: "Ingen ny app at lære. Hr Morten lever i Telegram, som du allerede bruger. Skriv til ham som du ville skrive til en kollega.",
  },
  {
    icon: Zap,
    title: "Lynhurtige svar",
    desc: "Stil spørgsmål, bed om hjælp, få Hr Morten til at skrive en email. Han er klar 24/7 og svarer på sekunder.",
  },
];

const TESTIMONIALS = [
  {
    name: "Yonis A.",
    role: "Iværksætter",
    text: "Hr Morten har overtaget min kalender helt. Jeg behøver aldrig selv tjekke den mere — han siger mig hvad jeg skal vide.",
    stars: 5,
  },
  {
    name: "Tina H.",
    role: "Jobsøger",
    text: "Jeg bruger ham til at holde styr på mine jobsamtaler og ansøgningsdeadlines. Det er som at have en personlig assistent.",
    stars: 5,
  },
  {
    name: "Oscar H.",
    role: "Founder, Serviceakademiet",
    text: "Jeg byggede Hr Morten til mig selv. Nu kan jeg ikke leve uden ham.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span>🎩</span>
          <span>Hr Morten</span>
        </div>
        <a
          href="/signup"
          className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
          style={{ background: "#2e9ae0", color: "white" }}
        >
          Kom i gang →
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-16 pb-12 max-w-4xl mx-auto w-full">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6"
          style={{
            background: "rgba(46, 154, 224, 0.15)",
            color: "#2e9ae0",
            border: "1px solid rgba(46, 154, 224, 0.3)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block"></span>
          Nu tilgængelig · 299 kr/måned
        </div>

        <h1
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{ letterSpacing: "-0.02em" }}
        >
          Din personlige
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #2e9ae0, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI-assistent
          </span>
          <br />
          på Telegram
        </h1>

        <p className="text-lg mb-10 max-w-xl leading-relaxed" style={{ color: "#8ea8be" }}>
          Hr Morten kender din kalender, sender dig daglige briefings og hjælper dig med din
          hverdag — direkte i Telegram. Som at have en personlig assistent i lommen.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <a
            href="/signup"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #2e9ae0, #1a6fa8)",
              fontSize: "1rem",
            }}
          >
            Prøv Hr Morten
            <ArrowRight size={18} />
          </a>
          <a
            href="#demo"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "#e0e0e0",
              fontSize: "1rem",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Se demo
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 text-sm" style={{ color: "#5a7a8a" }}>
          {["Ingen binding", "Opsætning på 5 min", "Annuller når som helst"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <Check size={13} className="text-green-400" />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Demo */}
      <DemoSection />

      {/* Features */}
      <section className="px-6 py-16 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Hvad gør Hr Morten?</h2>
          <p style={{ color: "#8ea8be" }}>Alt det en personlig assistent normalt ville gøre</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl transition-all hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(46, 154, 224, 0.15)" }}
              >
                <f.icon size={20} style={{ color: "#2e9ae0" }} />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8ea8be" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="px-6 py-16 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Folk elsker Hr Morten</h2>
          <p style={{ color: "#8ea8be" }}>Fra folk der allerede bruger ham hver dag</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} fill="#facc15" style={{ color: "#facc15" }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#c0c0c0" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs" style={{ color: "#5a7a8a" }}>
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center max-w-2xl mx-auto w-full">
        <div
          className="p-10 rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(46,154,224,0.15), rgba(167,139,250,0.1))",
            border: "1px solid rgba(46,154,224,0.2)",
          }}
        >
          <div className="text-4xl mb-4">🎩</div>
          <h2 className="text-3xl font-bold mb-3">Klar til din egen Hr Morten?</h2>
          <p className="mb-8" style={{ color: "#8ea8be" }}>
            Kom i gang på 5 minutter. Forbind din kalender og Hr Morten er klar til at hjælpe.
          </p>

          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-3xl font-bold">299 kr</span>
            <span style={{ color: "#8ea8be" }}>/måned</span>
          </div>

          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90 mb-6"
            style={{
              background: "linear-gradient(135deg, #2e9ae0, #1a6fa8)",
              fontSize: "1rem",
            }}
          >
            Kom i gang nu
            <ArrowRight size={18} />
          </a>

          <div className="flex flex-wrap justify-center gap-5 text-sm" style={{ color: "#5a7a8a" }}>
            {["Ingen binding", "Annuller når som helst", "Fuld opsætning inkluderet"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <Check size={13} className="text-green-400" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-8 text-center text-sm border-t"
        style={{ color: "#5a7a8a", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center justify-center gap-6 mb-3">
          <a href="/privacy" className="hover:text-white transition-colors">
            Privatlivspolitik
          </a>
        </div>
        <p>© 2026 Hr Morten</p>
      </footer>
    </main>
  );
}
