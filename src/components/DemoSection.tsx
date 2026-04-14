"use client";

import dynamic from "next/dynamic";

const TelegramDemo = dynamic(() => import("@/components/TelegramDemo"), { ssr: false });

export default function DemoSection() {
  return (
    <section
      id="demo"
      className="flex flex-col items-center px-6 py-16 w-full"
      style={{
        background: "linear-gradient(180deg, transparent, rgba(46,154,224,0.04), transparent)",
      }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">Prøv ham selv</h2>
        <p style={{ color: "#8ea8be" }}>Skriv til Hr Morten herunder — præcis som på Telegram</p>
      </div>

      <div
        className="rounded-2xl overflow-hidden w-full"
        style={{
          boxShadow: "0 0 60px rgba(46, 154, 224, 0.2)",
          maxWidth: "380px",
        }}
      >
        <TelegramDemo />
      </div>

      <p className="mt-6 text-sm" style={{ color: "#5a7a8a" }}>
        Dette er en demo — den rigtige Hr Morten kan meget mere ✨
      </p>
    </section>
  );
}
