"use client";

import Link from "next/link";
import InnerHero from "@/components/ui/InnerHero";
import { useInView } from "@/hooks/useInView";

const partners = [
  {
    name: "Shaw Contract",
    category: "Напольные покрытия",
    desc: "Один из мировых лидеров в производстве коммерческих напольных покрытий. Основанная в 1946 году, компания Shaw Contract создаёт ковровые покрытия и LVT для самых требовательных коммерческих проектов по всему миру.",
    products: [
      { label: "Ковровая плитка", href: "/catalog/floors/carpet-tiles" },
      { label: "LVT — Люкс-Винил", href: "/catalog/floors/lvt" },
    ],
    highlights: [
      "Более 75 лет опыта",
      "Cradle to Cradle Certified®",
      "Продажи в 100+ странах",
      "Инновационные эко-материалы",
    ],
    site: "https://www.shawcontract.com",
    color: "#22333b",
  },
  {
    name: "JEB Group",
    category: "Перегородки и двери",
    desc: "Мировой лидер в разработке и производстве акустических перегородок и дверей для коммерческих интерьеров. Продукция JEB устанавливается в офисах ведущих мировых корпораций, объединяя инновации в звукоизоляции с минималистичным дизайном.",
    products: [
      { label: "Перегородки и двери", href: "/catalog/partitions" },
    ],
    highlights: [
      "Испытания в ISO-лабораториях",
      "Система SUMMIT (профиль 38 мм)",
      "STC до 45 дБ",
      "Проекты по всему миру",
    ],
    site: "https://jebgroup.com",
    color: "#4a3728",
  },
];

export default function PartnersPage() {
  const cardsRef = useInView();
  const ctaRef = useInView();

  return (
    <div>
      <InnerHero
        title="Наши партнёры"
        subtitle="FOMAT является официальным представителем ведущих мировых производителей fit-out материалов на рынке Узбекистана."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Наши партнёры" },
        ]}
      />

      <section className="py-20 bg-[#fafaf8]">
        <div ref={cardsRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className={`bg-white border border-[#e6e4d8] rounded-sm overflow-hidden transition-all duration-700 ${cardsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Brand color panel */}
                <div className="lg:w-72 flex-shrink-0 flex flex-col items-center justify-center p-10 min-h-[200px]" style={{ backgroundColor: partner.color }}>
                  <span className="text-3xl font-semibold text-[#e6e4d8] tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {partner.name}
                  </span>
                  <span className="text-[#e6e4d8]/40 text-xs tracking-widest uppercase mt-2">{partner.category}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10">
                  <p className="text-[#22333b]/65 leading-relaxed mb-6 max-w-2xl">{partner.desc}</p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {partner.highlights.map((h) => (
                      <div key={h} className="bg-[#fafaf8] border border-[#e6e4d8] rounded-sm px-4 py-3">
                        <p className="text-xs text-[#22333b]/60 leading-snug">{h}</p>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {partner.products.map((p) => (
                      <Link
                        key={p.label}
                        href={p.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#22333b] text-[#22333b] text-sm font-medium tracking-wide hover:bg-[#22333b] hover:text-[#e6e4d8] transition-colors duration-200 rounded-sm"
                      >
                        {p.label}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                    <a
                      href={partner.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-[#22333b]/40 text-sm hover:text-[#8c6d51] transition-colors duration-200"
                    >
                      Официальный сайт
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#e6e4d8]">
        <div ref={ctaRef.ref} className={`max-w-3xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Интересует продукция партнёров?</p>
          <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
            Мы — официальный поставщик в Узбекистане
          </h2>
          <p className="text-[#22333b]/55 mb-8">
            Свяжитесь с нами для получения каталогов, образцов и расчёта стоимости под ваш проект.
          </p>
          <Link href="/contacts" className="inline-flex items-center gap-3 px-8 py-4 bg-[#22333b] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#8c6d51] transition-colors duration-200 rounded-sm">
            Связаться с нами
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
