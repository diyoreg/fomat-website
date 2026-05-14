"use client";

import Link from "next/link";
import AutoSlider from "@/components/ui/AutoSlider";
import SanityImage from "@/components/ui/SanityImage";
import { useInView } from "@/hooks/useInView";
import type { ClientLogoDoc, ProjectDoc } from "@/sanity/lib/types";

const fallbackProjects = [
  { _id: "f1", title: "Бизнес-центр «Центр»", color: "#22333b" },
  { _id: "f2", title: "Офис технологической компании", color: "#2d4a54" },
  { _id: "f3", title: "Коворкинг «Ташкент Хаб»", color: "#4a3728" },
  { _id: "f4", title: "Головной офис банка", color: "#3a5566" },
  { _id: "f5", title: "Административное здание", color: "#8c6d51" },
  { _id: "f6", title: "IT-компания, опен-спейс", color: "#1a2830" },
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
  const heroImages = projects
    .map((p) => p.images?.[0])
    .filter((img): img is NonNullable<typeof img> => Boolean(img));

  return (
    <div>
      <section className="pt-28 pb-16 bg-[#22333b] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#e6e4d8 1px, transparent 1px), linear-gradient(90deg, #e6e4d8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-0 w-[40vw] h-[40vw] rounded-full bg-[#8c6d51]/5 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[#e6e4d8]/35 mb-8">
            <Link href="/" className="hover:text-[#8c6d51] transition-colors duration-200">
              Главная
            </Link>
            <span>/</span>
            <span className="text-[#e6e4d8]/70">Наши клиенты</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#e6e4d8] tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Наши клиенты
              </h1>
              <p className="mt-5 text-[#e6e4d8]/50 text-base md:text-lg max-w-2xl leading-relaxed">
                Портфолио реализованных проектов — офисы, бизнес-центры и коворкинги, где использованы материалы FOMAT.
              </p>
            </div>
            {heroImages.length > 0 && (
              <div>
                <AutoSlider images={heroImages} aspect="aspect-[4/3]" delay={5000} priority />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fafaf8]">
        <div ref={gridRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          {hasProjects ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, i) => (
                <div
                  key={project._id}
                  className={`rounded-sm overflow-hidden transition-all duration-700 ${gridRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <AutoSlider
                    images={project.images ?? []}
                    aspect="aspect-[4/3]"
                    delay={5500}
                    showDots
                  />
                  <div className="p-5 bg-white border border-t-0 border-[#e6e4d8] rounded-b-sm">
                    <h3
                      className="text-[#22333b] font-semibold"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {project.title}
                    </h3>
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
                    className={`rounded-sm overflow-hidden transition-all duration-700 ${gridRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
                      <h3
                        className="text-[#22333b] font-semibold"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {project.title}
                      </h3>
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
