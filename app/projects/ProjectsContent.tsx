"use client";

import InnerHero from "@/components/ui/InnerHero";
import SanityImage from "@/components/ui/SanityImage";
import { useInView } from "@/hooks/useInView";
import type { ClientLogoDoc, ProjectDoc } from "@/sanity/lib/types";

const fallbackProjects = [
  { _id: "f1", title: "Бизнес-центр «Центр»", description: "Ковровая плитка Shaw Contract", year: 2024, color: "#22333b" },
  { _id: "f2", title: "Офис технологической компании", description: "LVT + Акустические панели", year: 2024, color: "#2d4a54" },
  { _id: "f3", title: "Коворкинг «Ташкент Хаб»", description: "Carpet Tiles + Перегородки JEB", year: 2023, color: "#4a3728" },
  { _id: "f4", title: "Головной офис банка", description: "Фальшполы + LVT Shaw Contract", year: 2023, color: "#3a5566" },
  { _id: "f5", title: "Административное здание", description: "Акустика + Освещение", year: 2023, color: "#8c6d51" },
  { _id: "f6", title: "IT-компания, опен-спейс", description: "Ковровая плитка FOMAT + JEB", year: 2022, color: "#1a2830" },
];

type Props = {
  projects: ProjectDoc[];
  logos: ClientLogoDoc[];
};

export default function ProjectsContent({ projects, logos }: Props) {
  const gridRef = useInView();
  const logosRef = useInView();
  const ctaRef = useInView();

  const hasProjects = projects.length > 0;

  return (
    <div>
      <InnerHero
        title="Наши клиенты"
        subtitle="Портфолио реализованных проектов — офисы, бизнес-центры и коворкинги, где использованы материалы FOMAT."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Наши клиенты" },
        ]}
      />

      <section className="py-20 bg-[#fafaf8]">
        <div ref={gridRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          {hasProjects ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, i) => (
                <div
                  key={project._id}
                  className={`group rounded-sm overflow-hidden transition-all duration-700 ${gridRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-[#22333b]">
                    {project.image ? (
                      <SanityImage
                        image={project.image}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="p-5 bg-white border border-t-0 border-[#e6e4d8] rounded-b-sm">
                    {project.year && (
                      <p className="text-[#8c6d51] text-xs font-medium tracking-widest uppercase mb-1">{project.year}</p>
                    )}
                    <h3 className="text-[#22333b] font-semibold mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>{project.title}</h3>
                    {project.description && (
                      <p className="text-[#22333b]/50 text-sm">{project.description}</p>
                    )}
                    {project.solutions && project.solutions.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.solutions.map((s) => (
                          <span key={s} className="text-[10px] text-[#22333b]/60 border border-[#e6e4d8] px-2 py-1 rounded-sm tracking-wide">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {fallbackProjects.map((project, i) => (
                  <div
                    key={project._id}
                    className={`group rounded-sm overflow-hidden transition-all duration-700 ${gridRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div
                      className="aspect-[4/3] relative overflow-hidden"
                      style={{ backgroundColor: project.color }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[#e6e4d8]/50 text-xs tracking-widest uppercase">Фото проекта</span>
                      </div>
                    </div>
                    <div className="p-5 bg-white border border-t-0 border-[#e6e4d8] rounded-b-sm">
                      <p className="text-[#8c6d51] text-xs font-medium tracking-widest uppercase mb-1">{project.year}</p>
                      <h3 className="text-[#22333b] font-semibold mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>{project.title}</h3>
                      <p className="text-[#22333b]/50 text-sm">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-[#22333b]/35 text-sm">
                  Фотографии реализованных проектов будут добавлены через CMS.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {logos.length > 0 && (
        <section className="py-20 bg-[#e6e4d8] border-t border-[#22333b]/10">
          <div ref={logosRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center mb-12 transition-all duration-700 ${logosRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">С нами работают</p>
              <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
                Наши клиенты
              </h2>
            </div>
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-all duration-700 ${logosRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {logos.map((logo) => (
                <div
                  key={logo._id}
                  className="aspect-[3/2] bg-white rounded-sm border border-[#22333b]/5 flex items-center justify-center p-6 transition-all duration-300 hover:shadow-sm grayscale hover:grayscale-0"
                  title={logo.name}
                >
                  <div className="relative w-full h-full">
                    <SanityImage
                      image={logo.logo}
                      alt={logo.name}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-[#22333b]">
        <div ref={ctaRef.ref} className={`max-w-3xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Ваш проект здесь</p>
          <h2 className="text-3xl font-semibold text-[#e6e4d8] tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
            Готовы стать нашим следующим клиентом?
          </h2>
          <p className="text-[#e6e4d8]/45 mb-8">Свяжитесь с нами — обсудим ваш проект и подберём оптимальные материалы.</p>
          <a href="/contacts" className="inline-flex items-center gap-3 px-8 py-4 bg-[#8c6d51] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#7a5d43] transition-colors duration-200 rounded-sm">
            Связаться с нами
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
