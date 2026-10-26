import { useEffect, useState } from "react";

interface Tab {
  id: string;
  label: string;
  code: string;
}

interface Props {
  tabs: Tab[];
  visible?: boolean;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AboutTerminal({ tabs, visible = true }: Props) {
  const [active, setActive] = useState(tabs[0]?.id ?? "about");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];
  const [displayed, setDisplayed] = useState(current?.code ?? "");

  useEffect(() => {
    if (!visible || !current) return;

    if (prefersReducedMotion()) {
      setDisplayed(current.code);
      return;
    }

    setDisplayed("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setDisplayed(current.code.slice(0, i));
      if (i >= current.code.length) window.clearInterval(id);
    }, 18);

    return () => window.clearInterval(id);
  }, [active, visible, current?.code]);

  if (!current) return null;

  const lines = displayed.split("\n");
  const isTyping = displayed.length < current.code.length;

  return (
    <div className="font-jetbrains-mono bg-senary rounded-xl text-[12.5px] overflow-hidden border border-tertiary">
      <div
        role="tablist"
        aria-label="About terminal tabs"
        className="bg-quinary py-2 px-2 flex items-center gap-1 border-b border-tertiary overflow-x-auto"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={tab.id === active}
            aria-controls={`panel-${tab.id}`}
            tabIndex={tab.id === active ? 0 : -1}
            onClick={() => setActive(tab.id)}
            className={`font-space-grotesk text-xs px-3 py-1.5 rounded-md border-0 cursor-pointer transition-colors ${
              tab.id === active
                ? "bg-background text-primary"
                : "bg-transparent text-secondary hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <pre className="sr-only">{current.code}</pre>
      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        aria-hidden="true"
        className="py-5 px-4 overflow-x-auto min-h-55"
      >
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
        {isTyping && (
          <span
            className="text-primary"
            style={{ animation: "blink 1s step-end infinite" }}
          >
            ▋
          </span>
        )}
      </div>
    </div>
  );
}
