import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { SectionLabel } from "../components/SectionLabel";

const STACK = [
  {
    cat: "Frontend",
    items: [
      "React",
      "Next.js",
      "Astro.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    cat: "Design",
    items: ["Figma", "Pencil", "DaisyUI", "Penpot", "Tailwind CSS"],
  },
  {
    cat: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Sequelize", "Python"],
  },
  {
    cat: "AI / LLM",
    items: [
      "LangChain",
      "RAG",
      "OpenAI",
      "Claude",
      "n8n",
      "v0",
      "Lovable",
      "Stitch",
      "Bolt",
      "Nano Banana",
    ],
  },
  {
    cat: "DevOps / Infra",
    items: ["AWS", "Docker", "Dokploy", "GitHub Actions", "Turborepo"],
  },
];

function Chip({ label, delay = 0, visible }) {
  return (
    <span
      className={`inline-block bg-quinary border border-tertiary rounded-lg px-3.5 py-[7px] m-1 font-space-grotesk font-medium text-[#E2E8F0] text-sm cursor-default transform ${visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} transition-all duration-[${delay}ms] ease-out hover:border-primary/60 hover:bg-primary/40`}
    >
      {label}
    </span>
  );
}

export function Stack() {
  const stackRef = useRef(null);
  const stackVis = useInView(stackRef);

  return (
    <section ref={stackRef} className="bg-background py-25 px-10 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,229,255,0.05) 0%, transparent 65%)",
        }}
      />
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div
          style={{
            textAlign: "center",
            marginBottom: 56,
            opacity: stackVis ? 1 : 0,
            transform: stackVis ? "translateY(0)" : "translateY(20px)",
            transition: "all 500ms ease-out",
          }}
        >
          <SectionLabel label="// 03. stack" />
          <h2 className="font-space-grotesk font-bold text-[38px] text-white mb-6 tracking-[-1px] leading-1.15">
            Las herramientas del oficio
          </h2>
          <p className="text-secondary text-[17px]">
            El stack que uso en producción, no en tutoriales.
          </p>
        </div>
        <div className="flex flex-col gap-7">
          {STACK.map((cat, ci) => (
            <div key={cat.cat}>
              <div className="font-jetbrains-mono text-xs text-tertiary tracking-widest mb-2.5">
                {cat.cat}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {cat.items.map((item, ii) => (
                  <Chip
                    key={item}
                    label={item}
                    delay={ci * 60 + ii * 30}
                    visible={stackVis}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            textAlign: "center",
            color: "#94A3B8",
            fontSize: 15,
            maxWidth: 600,
            margin: "48px auto 0",
            lineHeight: 1.7,
            opacity: stackVis ? 1 : 0,
            transition: "opacity 600ms 400ms",
          }}
        >
          Elijo las herramientas por el problema, no por la tendencia. Cada
          tecnología en este stack la he usado en proyectos con usuarios reales.
        </p>
      </div>
    </section>
  );
}
