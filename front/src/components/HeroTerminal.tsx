import { useEffect, useMemo, useState } from "react";

interface Props {
  filename?: string;
  profile?: {
    company: string;
    jobTitle: string;
    location: string;
  };
}

export function HeroTerminal({
  filename = "devfg/index.ts",
  profile = {
    company: "VystoAI",
    jobTitle: "Senior Software Engineer",
    location: "Córdoba, Argentina",
  },
}: Props) {
  const FULL = useMemo(
    () => `import React from "react";
  // Shipping at ${profile.company} ✓
  export function buildProduct(idea: string) {
    return new FGDevTools({
      role: "${profile.jobTitle}",
      frontend: "React + Next.js",
      backend: "Node.js + Python",
      ai: { model: "LLMs", rag: true, agents: true },
      deploy: { provider: "AWS", region: "us-east-1" },
      from: "${profile.location}",
    }).ship(); // → real users
  }`,
    [profile],
  );

  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduceMotion) {
      setDisplayed(FULL);
      setDone(true);
      return;
    }
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
  }, [FULL, reduceMotion]);

  const lines = displayed.split("\n");

  return (
    <>
      <pre className="sr-only">{FULL}</pre>
      <div
        className="font-jetbrains-mono"
        aria-hidden="true"
        style={{
          background: "#111118",
          borderRadius: 12,
          border: "1px solid #334155",
          overflow: "hidden",
          fontSize: 12,
          boxShadow: "0 0 60px rgba(0,229,255,0.08)",
          animation: reduceMotion ? undefined : "float 3s ease-in-out infinite",
        }}
      >
        <div className="bg-quinary p-4 flex items-center gap-2 border-b border-tertiary">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
          <span className="font-space-grotesk text-sm text-secondary">
            {filename}
          </span>
        </div>
        <div className="px-4 py-5 min-h-55 overflow-x-auto">
          {lines.map((line, i) => (
            <div key={i} className="flex leading-[1.7] w-full">
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
    </>
  );
}
