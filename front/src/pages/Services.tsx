import { useRef, useState } from "react";
import { useInView } from "../hooks/useInView";
import { SectionLabel } from "../components/SectionLabel";

/*
  {
    icon: "📱",
    title: "Desarrollo Mobile",
    desc: "Apps iOS y Android con React Native y Expo. Arquitectura offline-first y experiencia nativa.",
    tags: ["React Native", "Expo", "WatermelonDB"],
  },
{
    icon: "🤖",
    title: "Integraciones de IA",
    desc: "Chatbots, RAG sobre documentos, automatizaciones con n8n y flujos LLM para tu negocio.",
    tags: ["LangChain", "OpenAI", "n8n"],
  },
*/

const SERVICES = [
  {
    icon: "🌐",
    title: "Desarrollo Web a medida",
    desc: "Sitios y aplicaciones web con React, Next.js o Astro. Desde landing pages hasta plataformas SaaS completas.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Astro.js",
    ],
  },
  {
    icon: "⚙️",
    title: "Backend & APIs",
    desc: "APIs REST robustas con Express o Node.js. Diseño de base de datos, autenticación y escalabilidad.",
    tags: ["Node.js", "Express", "PostgreSQL", "Sequelize", "Python"],
  },
  {
    icon: "☁️",
    title: "DevOps & Deploy",
    desc: "Configuración de infraestructura, monitoreo, CI/CD, Docker, AWS y deployments confiables.",
    tags: ["AWS", "Docker", "Dokploy", "GitHub Actions", "Grafana", "Tianji"],
  },
  {
    icon: "🔍",
    title: "Consultoría Técnica",
    desc: "Revisión de arquitectura, code reviews, definición de stack y acompañamiento en decisiones técnicas.",
    tags: [
      "Arquitectura",
      "Code Review",
      "SEO",
      "Performance",
      "Accessibility",
      "Security",
    ],
  },
];

function ServiceCard({ s, delay, visible }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rounded-xl px-8 py-7 transition-all duration-200 ease-out"
      style={{
        background: hov ? "rgba(0,229,255,0.02)" : "#18181F",
        border: `1px solid ${hov ? "rgba(0,229,255,0.5)" : "#334155"}`,
        borderLeft: `${hov ? "2px" : "1px"} solid ${hov ? "#00E5FF" : "#334155"}`,
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? "0 8px 32px rgba(0,229,255,0.08)" : "none",
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-[28px] mb-3.5">{s.icon}</div>
      <div className="font-space-grotesk font-semibold text-white mb-2.5">
        {s.title}
      </div>
      <div className="font-space-grotesk text-secondary text-sm mb-3.5 leading-relaxed">
        {s.desc}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {s.tags.map((t) => (
          <span
            key={t}
            className="font-jetbrains-mono text-secondary text-xs bg-background border border-tertiary rounded-md px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const svcRef = useRef(null);
  const svcVis = useInView(svcRef);

  return (
    <section ref={svcRef} className="bg-senary py-25 px-10">
      <div className="max-w-7xl mx-auto">
        <div
          style={{
            textAlign: "center",
            marginBottom: 56,
            opacity: svcVis ? 1 : 0,
            transform: svcVis ? "translateY(0)" : "translateY(20px)",
            transition: "all 500ms ease-out",
          }}
        >
          <SectionLabel label="// 05. servicios" />
          <h2 className="font-space-grotesk font-bold text-5xl text-white mb-4 tracking-tight leading-1.15">
            ¿En qué puedo ayudarte?
          </h2>
          <p className="text-secondary text-lg">
            Trabajo con empresas y startups que necesitan más que código.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} delay={i * 80} visible={svcVis} />
          ))}
        </div>
        <div
          className={`text-center mt-10 opacity-${svcVis ? 1 : 0} transition-opacity duration-500`}
        >
          <a
            href="#contact"
            className="font-space-grotesk text-primary cursor-pointer"
          >
            ¿No sabés cuál te conviene? Hablemos →
          </a>
        </div>
      </div>
    </section>
  );
}
