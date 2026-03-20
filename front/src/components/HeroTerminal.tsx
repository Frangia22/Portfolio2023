import { useEffect, useState } from "react";

export function HeroTerminal() {
  const FULL = `import React from "react";
  // Producto en producción ✓
  export function buildProduct(idea: string) {
    return new FGDevTools({
      frontend: "React + Next.js",
      backend: "Express + PostgreSQL",
      ai: { model: "Sonnet o Opus", rag: true },
      deploy: { provider: "AWS", region: "us-east-1" },
    }).ship(); // → usuarios reales
  }`;
  // Producto en producción ✓
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(FULL.slice(0, i));
      if (i >= FULL.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 18);
    return () => clearInterval(id);
  }, []);

  const lines = displayed.split("\n");
  return (
    <div
      className="font-jetbrains-mono"
      style={{
        background: "#111118",
        borderRadius: 12,
        border: "1px solid #334155",
        overflow: "hidden",
        fontSize: 12,
        boxShadow: "0 0 60px rgba(0,229,255,0.08)",
        animation: "float 3s ease-in-out infinite",
      }}
    >
      <div className="bg-quinary p-4 flex items-center gap-2 border-b border-tertiary">
        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
        <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
        <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
        <span className="font-space-grotesk text-sm text-secondary">
          devfg/index.ts
        </span>
      </div>
      <div className="px-4 py-5 min-h-55">
        {lines.map((line, i) => (
          <div key={i} className="flex leading-[1.7]">
            <span className="min-w-6 text-right text-tertiary user-select-none mr-3">
              {i + 1}
            </span>
            <span className="text-[#E2E8F0] whitespace-pre">
              {line
                .replace(/(".*?")/g, "§$1§")
                .split("§")
                .map((seg, j) =>
                  seg.startsWith('"') ? (
                    <span key={j} className="text-green-500">
                      {seg}
                    </span>
                  ) : (
                    seg
                      .replace(
                        /(import|export|const|return|new|true|false)/g,
                        "§§$1§§",
                      )
                      .split("§§")
                      .map((s, k) =>
                        [
                          "import",
                          "export",
                          "const",
                          "return",
                          "new",
                          "true",
                          "false",
                        ].includes(s) ? (
                          <span key={k} className="text-primary">
                            {s}
                          </span>
                        ) : (
                          <span key={k}>{s}</span>
                        ),
                      )
                  ),
                )}
              {i === lines.length - 1 && !done && (
                <span
                  style={{
                    animation: "blink 1s step-end infinite",
                    color: "#00E5FF",
                  }}
                >
                  ▋
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
