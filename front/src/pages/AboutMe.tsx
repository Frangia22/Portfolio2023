import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { AboutTerminal } from "../components/AboutTerminal";
import { SectionLabel } from "../components/SectionLabel";

export function About() {
  const aboutRef = useRef(null);
  const aboutVis = useInView(aboutRef);
  return (
    <section
      ref={aboutRef}
      className="bg-senary py-25 px-5 md:px-10"
      style={{
        clipPath: "polygon(0 0, 100% 3%, 100% 100%, 0 97%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
        <div
          style={{
            opacity: aboutVis ? 1 : 0,
            transform: aboutVis ? "translateY(0)" : "translateY(20px)",
            transition: "all 500ms ease-out",
          }}
        >
          <SectionLabel label="// 04. sobre mí" />
          <h2 className="font-space-grotesk font-bold text-2xl md:text-4xl text-white mb-6 tracking-[-1px] leading-1.15">
            Del código
            <br />
            al producto.
          </h2>
          <p className="text-[#E2E8F0] line-height-[1.85] mb-8">
            Soy Francisco Giachero, Desarrollador Frontend Senior con más de 4
            años de experiencia creando interfaces de usuario, escalables, bien
            diseñadas, responsivas y con una excelente UI/UX. Mi enfoque está en
            transformar requerimientos en sistemas utilizables, sostenibles y
            listos para crecer, manteniendo lo simple sin complicar lo esencial.
          </p>
          <p className="text-[#E2E8F0] line-height-[1.85] mb-8">
            Prototipo interfaces de usuario sólidas y las conecto con API Rest,
            aplicando los principios SOLID. Mi meta es proporcionar software
            claro, eficiente y fácil de mantener a lo largo del tiempo.
          </p>
          <div className="flex flex-wrap md:grid md:grid-cols-3 gap-3.5">
            {[
              ["4+", "años de experiencia"],
              ["20+", "proyectos entregados"],
              ["Frontend", "full-stack → infra"],
            ].map(([n, l]) => (
              <div
                key={n}
                style={{
                  background: "#18181F",
                  borderRadius: 8,
                  border: "1px solid #334155",
                  padding: "16px 18px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontWeight: 700,
                    fontSize: 26,
                    color: "#00E5FF",
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#94A3B8",
                    marginTop: 4,
                    lineHeight: 1.4,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-full overflow-x-auto"
          style={{
            opacity: aboutVis ? 1 : 0,
            transition: "opacity 500ms 200ms",
          }}
        >
          <AboutTerminal visible={aboutVis} />
        </div>
      </div>
    </section>
  );
}
