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
          Soy Francisco Giachero, Software Engineer con más de 5 años de experiencia construyendo y evolucionando aplicaciones web y sistemas de software. Mi experiencia combina frontend, backend, APIs, infraestructura y herramientas de desarrollo, permitiéndome abordar un producto más allá de una única capa tecnológica. 
          </p>
          <p className="text-[#E2E8F0] line-height-[1.85] mb-8">
          Me enfoco en transformar requerimientos y problemas de negocio en soluciones simples, mantenibles y escalables. Trabajo con React, Next.js, TypeScript, Node.js y Python, diseñando interfaces, servicios e integraciones y aplicando principios como SOLID, testing y buenas prácticas de arquitectura.
          </p>
          <p className="text-[#E2E8F0] line-height-[1.85] mb-8">
          Utilizo herramientas de desarrollo asistido por IA como Claude Code y Cursor para acelerar el ciclo de desarrollo, integrándolas dentro de procesos estructurados como TDD y SDD. Mi objetivo es aprovechar la IA para desarrollar mejor y más rápido, sin sacrificar la calidad, mantenibilidad ni evolución del software.
          </p>
          <div className="flex flex-wrap md:grid md:grid-cols-3 gap-3.5">
            {[
              ["5+", "años de experiencia"],
              ["20+", "proyectos entregados"],
              ["Fullstack", "→ infra"],
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
