import { useEffect, useState } from "react";

export function AboutTerminal({ visible }) {
  const FULL_ABOUT = `const frandev = {\n  name: "Francisco Giachero",\n  role: "Senior Frontend Developer",\n  company: "Sinergy Stack",\n  location: "Argentina 🇦🇷",\n  available: true,\n  stack: {\n    frontend: ["React", "Next.js", "TypeScript"],\n    backend: ["Express", "Node.js", "PostgreSQL"],\n    mobile: ["React Native", "Expo"],\n    automation: ["N8N"],\n    ai: ["LangChain", "RAG", "OpenAI", "Claude"],\n    devops: ["Docker", "Dokploy", "GitHub Actions"],\n    },\n  openTo: ["freelance", "full-time", "consulting"],\n};`;
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (visible && !started) {
      setStarted(true);
      let i = 0;
      const id = setInterval(() => {
        i++;
        setDisplayed(FULL_ABOUT.slice(0, i));
        if (i >= FULL_ABOUT.length) clearInterval(id);
      }, 22);
      return () => clearInterval(id);
    }
  }, [visible]);
  const lines = displayed.split("\n");
  return (
    <div className="font-jetbrains-mono bg-senary rounded-xl text-[12.5px] overflow-hidden border border-tertiary">
      <div className="bg-quinary py-2.5 px-4 flex items-center gap-2 border-b border-tertiary">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
        <span className="ml-2 font-space-grotesk text-sm text-secondary">
          about.frandev.ts
        </span>
      </div>
      <div className="py-5 px-4">
        {lines.map((line, i) => (
          <div key={i} className="flex leading-[1.75]">
            <span className="min-w-5.5 text-tertiary user-select-none mr-3">
              {i + 1}
            </span>
            <span className="text-[#E2E8F0] whitespace-pre">
              {line.split(/(true|const|"[^"]*")/g).map((seg, j) =>
                seg === "true" || seg === "const" ? (
                  <span key={j} className="text-primary">
                    {seg}
                  </span>
                ) : seg.startsWith('"') ? (
                  <span key={j} style={{ color: "#a8ff78" }}>
                    {seg}
                  </span>
                ) : (
                  <span
                    key={j}
                    style={{
                      color: /^\s+\w+:/.test(seg) ? "#94A3B8" : "#E2E8F0",
                    }}
                  >
                    {seg}
                  </span>
                ),
              )}
            </span>
          </div>
        ))}
        {displayed.length < FULL_ABOUT.length && (
          <span
            className="text-primary"
            style={{
              animation: "blink 1s step-end infinite",
            }}
          >
            ▋
          </span>
        )}
      </div>
    </div>
  );
}
