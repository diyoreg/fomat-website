"use client";

import InnerHero from "@/components/ui/InnerHero";
import { useInView } from "@/hooks/useInView";

const projects = [
  { id: 1, title: "Бизнес-центр «Центр»", type: "Ковровая плитка Shaw Contract", year: "2024", color: "#22333b" },
  { id: 2, title: "Офис технологической компании", type: "LVT + Акустические панели", year: "2024", color: "#2d4a54" },
  { id: 3, title: "Коворкинг «Ташкент Хаб»", type: "Carpet Tiles + Перегородки JEB", year: "2023", color: "#4a3728" },
  { id: 4, title: "Головной офис банка", type: "Фальшполы + LVT Shaw Contract", year: "2023", color: "#3a5566" },
  { id: 5, title: "Административное здание", type: "Акустика + Освещение", year: "2023", color: "#8c6d51" },
  { id: 6, title: "IT-компания, опен-спейс", type: "Ковровая плитка FOMAT + JEB", year: "2022", color: "#1a2830" },
];

export default function ProjectsPage() {
  const gridRef = useInView();
  const ctaRef = useInView();

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`group rounded-sm overflow-hidden transition-all duration-700 ${gridRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Placeholder image */}
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{ backgroundColor: project.color }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 group-hover:bg-[#8c6d51]/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[#e6e4d8]/50 text-xs tracking-widest uppercase">Фото проекта</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 bg-white border border-t-0 border-[#e6e4d8] rounded-b-sm">
                  <p className="text-[#8c6d51] text-xs font-medium tracking-widest uppercase mb-1">{project.year}</p>
                  <h3 className="text-[#22333b] font-semibold mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>{project.title}</h3>
                  <p className="text-[#22333b]/50 text-sm">{project.type}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <p className="text-[#22333b]/35 text-sm">
              Фотографии реализованных проектов предоставляются клиентом и будут добавлены в ближайшее время.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
