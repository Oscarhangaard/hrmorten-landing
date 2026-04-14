"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessContent() {
  const params = useSearchParams();
  const name = params.get("name") || "der";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center" style={{ background: "#0a0a0f" }}>
      <div className="text-6xl mb-6">✅</div>
      <h1 className="text-3xl font-bold text-white mb-3">Du er forbundet, {name}!</h1>
      <p className="text-lg mb-8 max-w-sm" style={{ color: "#8ea8be" }}>
        Din Hr Morten bliver sat op nu. Du hører fra os på Telegram inden for kort tid. 🎩
      </p>
      <a href="/" className="text-sm underline" style={{ color: "#5a7a8a" }}>
        ← Tilbage til forsiden
      </a>
    </main>
  );
}
