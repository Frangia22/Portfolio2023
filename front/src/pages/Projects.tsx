import { useEffect, useRef, useState } from "react";
import projects from "../data/projects.json";

function useInView(ref, threshold = 0.15) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return vis;
}

function ProjectCard({
  p,
  delay,
  visible,
}: {
  p: any;
  delay: number;
  visible: boolean;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#18181F",
        borderRadius: 12,
        border: `1px solid ${hov ? "rgba(0,229,255,0.4)" : "#334155"}`,
        boxShadow: hov
          ? "0 8px 40px rgba(0,229,255,0.12)"
          : "0 0 24px rgba(0,229,255,0.04)",
        transform: hov
          ? "translateY(-4px) scale(1.01)"
          : "translateY(0) scale(1)",
        transition: "all 200ms ease-out",
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 120,
          background: `linear-gradient(135deg, #111118 0%, #18181F 50%, rgba(0,229,255,0.06) 100%)`,
          borderBottom: "1px solid #334155",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 36,
          transform: hov ? "scale(1.04)" : "scale(1)",
          transition: "transform 300ms ease",
          overflow: "hidden",
        }}
      >
        <img
          src={p.image}
          alt={p.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          padding: "20px 24px 24px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 600,
            fontSize: 17,
            color: "#fff",
          }}
        >
          {p.title}
        </div>
        <div
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: 13,
            color: "#94A3B8",
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {p.description}
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}
        >
          {p.technologies.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 11,
                background: "#0A0A0F",
                border: "1px solid #334155",
                borderRadius: 6,
                padding: "3px 9px",
                color: "#00E5FF",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 12 }}>
          <span className="font-space-grotesk text-[14px] text-primary cursor-pointer">
            Ver caso →
          </span>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projRef = useRef(null);
  const projVis = useInView(projRef);
  const sec = (label) => (
    <span
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 13,
        color: "#00E5FF",
        display: "block",
        marginBottom: 12,
      }}
    >
      {label}
    </span>
  );
  return (
    <section
      ref={projRef}
      style={{
        background: "#111118",
        padding: "100px 40px",
        clipPath: "polygon(0 3%, 100% 0, 100% 100%, 0 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(0,229,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
          opacity: 0.4,
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: 56,
            opacity: projVis ? 1 : 0,
            transform: projVis ? "translateY(0)" : "translateY(20px)",
            transition: "all 500ms ease-out",
          }}
        >
          {sec("// 02. proyectos")}
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
            Lo que he construido
          </h2>
          <p style={{ color: "#94A3B8", fontSize: 17 }}>
            Productos reales, con usuarios reales.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} delay={i * 80} visible={projVis} />
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: 40,
            opacity: projVis ? 1 : 0,
            transition: "opacity 500ms 600ms",
          }}
        ></div>
      </div>
    </section>
  );
}
