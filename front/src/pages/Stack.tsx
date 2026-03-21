import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { SectionLabel } from "../components/SectionLabel";

const STACK = [
  {
    cat: "Frontend",
    items: ["React", "Next.js", "Astro.js", "TypeScript", "Tailwind CSS"],
  },
  {
    cat: "Mobile",
    items: ["React Native", "Expo", "WatermelonDB", "Gluestack UI"],
  },
  {
    cat: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Prisma", "PostgreSQL", "Redis"],
  },
  {
    cat: "AI / LLM",
    items: ["LangChain", "RAG", "OpenAI", "Replicate", "n8n"],
  },
  {
    cat: "DevOps / Infra",
    items: ["AWS", "Docker", "Dokploy", "GitHub Actions", "Turborepo"],
  },
];

function Chip({ label, delay = 0, visible }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: "#18181F",
        border: "1px solid #334155",
        borderRadius: 8,
        padding: "7px 14px",
        fontSize: 13,
        fontFamily: "'Space Grotesk',sans-serif",
        fontWeight: 500,
        color: "#E2E8F0",
        margin: "4px",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,229,255,0.6)";
        e.currentTarget.style.background = "rgba(0,229,255,0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#334155";
        e.currentTarget.style.background = "#18181F";
      }}
    >
      {label}
    </span>
  );
}

export function Stack() {
  const stackRef = useRef(null);
  const stackVis = useInView(stackRef);

  return (
    <section
      ref={stackRef}
      style={{
        background: "#0A0A0F",
        padding: "100px 40px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(0,229,255,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
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
          <h2
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700,
              fontSize: 38,
              color: "#fff",
              marginBottom: 12,
              letterSpacing: -1,
            }}
          >
            Las herramientas del oficio
          </h2>
          <p style={{ color: "#94A3B8", fontSize: 17 }}>
            El stack que uso en producción, no en tutoriales.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {STACK.map((cat, ci) => (
            <div key={cat.cat}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 11,
                  color: "#334155",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
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
