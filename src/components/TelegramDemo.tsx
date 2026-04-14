"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  from: "user" | "morten";
  time: string;
}

function getResponse(input: string): string {
  const msg = input.toLowerCase().trim();

  if (msg.match(/møde|meeting|kalender|calendar|book|tid/)) {
    const times = msg.match(/\d{1,2}[:.]\d{2}|\d{1,2} (om eftermiddagen|om morgenen)/);
    const time = times ? times[0] : "den angivne tid";
    return `Noteret! Jeg har tilføjet mødet kl. ${time} til din kalender. ✅`;
  }
  if (msg.match(/hvad sker|hvad har jeg|i dag|plan|skema|agenda/)) {
    return `Her er din dag:\n\n📅 10:00 — Møde med teamet\n📅 13:00 — Frokost med klient\n📅 15:30 — Opfølgning på projekt\n\nSer fornuftigt ud! Vil du have mig til at gøre noget? 🎩`;
  }
  if (msg.match(/reminder|påmind|husk|remind/)) {
    return `Selvfølgelig! Jeg sender dig en reminder. Du hører fra mig. 🔔`;
  }
  if (msg.match(/vejr|weather/)) {
    return `I København er det i dag 12°C og overskyet. Tag en jakke! 🧥`;
  }
  if (msg.match(/hej|godmorgen|hey|hello|hi/)) {
    return `Godmorgen! ☀️ Klar til at hjælpe dig i dag. Du har 3 møder og en deadline fredag. Skal jeg give dig den fulde oversigt?`;
  }
  if (msg.match(/tak|thanks|tusind tak/)) {
    return `Selv tak! Er der andet jeg kan hjælpe med? 🎩`;
  }
  if (msg.match(/hvem er du|what are you|hvad er du/)) {
    return `Jeg er Hr Morten — din personlige AI-assistent på Telegram. Jeg holder styr på din kalender, sender reminders og hjælper dig med din hverdag. 🎩`;
  }
  if (msg.match(/pris|price|kost|betale|pay|kr|euro/)) {
    return `Hr Morten koster 299 kr/måned. Ingen binding, ingen skjulte gebyrer. Vil du komme i gang? 🎩`;
  }
  if (msg.match(/email|mail/)) {
    return `I den rigtige version kan jeg hjælpe dig med at håndtere vigtige emails og følge op på dem. 📧`;
  }

  return `Forstået! Jeg noterer det og vender tilbage til dig. Er der andet du har brug for? 🎩`;
}

function nowTime(): string {
  return new Date().toLocaleTimeString("da-DK", { hour: "2-digit", minute: "2-digit" });
}

const SUGGESTIONS = [
  "Hvad har jeg i dag?",
  "Book møde kl. 14:00",
  "Hej Morten!",
  "Hvem er du?",
];

export default function TelegramDemo() {
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "morten",
      text: "Hej! Jeg er Hr Morten — din personlige AI-assistent. Prøv at skrive til mig 👇",
      time: "nu",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll only within the messages container, not the whole page
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  function sendMessage(text: string) {
    const userMsg: Message = { id: Date.now(), from: "user", text, time: nowTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getResponse(text);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "morten", text: reply, time: nowTime() },
      ]);
    }, 900 + Math.random() * 600);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
  }

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: "520px", background: "#0d1b27" }}
      >
        <div className="text-2xl animate-pulse">🎩</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col" style={{ height: "520px", width: "100%" }}>
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: "#1c2733", flexShrink: 0 }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #2e9ae0, #1a6fa8)" }}
        >
          🎩
        </div>
        <div>
          <div className="font-semibold text-white text-sm">Hr Morten</div>
          <div className="text-xs" style={{ color: "#8ea8be" }}>
            personlig assistent
          </div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
          <span className="text-xs text-green-400">online</span>
        </div>
      </div>

      {/* Messages — scrolls internally */}
      <div
        ref={messagesRef}
        className="flex-1 overflow-y-auto px-3 py-3 space-y-2"
        style={{
          background: "#0d1b27",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          overscrollBehavior: "contain",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.from === "morten" && (
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 mr-2 mt-1"
                style={{ background: "linear-gradient(135deg, #2e9ae0, #1a6fa8)" }}
              >
                🎩
              </div>
            )}
            <div className="max-w-[78%]">
              <div
                className="px-3 py-2 text-sm leading-relaxed whitespace-pre-line"
                style={{
                  background: msg.from === "user" ? "#2b5278" : "#182533",
                  color: "#e8e8e8",
                  borderRadius:
                    msg.from === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                }}
              >
                {msg.text}
              </div>
              <div
                className={`text-xs mt-0.5 px-1 ${msg.from === "user" ? "text-right" : ""}`}
                style={{ color: "#5a7a8a" }}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 mr-2 mt-1"
              style={{ background: "linear-gradient(135deg, #2e9ae0, #1a6fa8)" }}
            >
              🎩
            </div>
            <div
              className="px-4 py-3"
              style={{ background: "#182533", borderRadius: "18px 18px 18px 4px" }}
            >
              <div className="flex gap-1 items-center">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{ background: "#5a7a8a", animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suggestions */}
      {messages.length <= 2 && (
        <div
          className="flex gap-2 px-3 py-2 overflow-x-auto"
          style={{ background: "#0d1b27", flexShrink: 0 }}
        >
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="text-xs px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0 transition-colors"
              style={{
                background: "#1c2f42",
                color: "#8ea8be",
                border: "1px solid #2a4057",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-3 py-3"
        style={{ background: "#1c2733", flexShrink: 0 }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Skriv til Hr Morten..."
          className="flex-1 px-4 py-2.5 rounded-full text-sm outline-none"
          style={{
            background: "#0d1b27",
            color: "#e8e8e8",
            border: "1px solid #2a4057",
          }}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
          style={{ background: input.trim() ? "#2e9ae0" : "#1c3040" }}
        >
          <Send size={16} className="text-white" style={{ transform: "translateX(1px)" }} />
        </button>
      </form>
    </div>
  );
}
