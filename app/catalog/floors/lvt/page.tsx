"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import InnerHero from "@/components/ui/InnerHero";
import { useInView } from "@/hooks/useInView";

const shawAdvantages = [
  { title: "Exoguard+® защитный слой", desc: "Запатентованное покрытие обеспечивает непревзойдённую устойчивость к царапинам, истиранию и химическим веществам даже в зонах с экстремальными нагрузками." },
  { title: "Широкий выбор дизайнов", desc: "Имитация натурального дерева, камня и бетона. Различные форматы плитки и планок для любой дизайнерской концепции." },
  { title: "Экологичность и сертификация", desc: "Cradle to Cradle Certified®, FloorScore®. Низкий углеродный след, безопасность для здоровья и окружающей среды." },
  { title: "Длительная гарантия", desc: "От 10 до 20 лет коммерческой ограниченной гарантии производителя — подтверждение высокого качества и надёжности." },
];

const fomatAdvantages = [
  { title: "Те же технологии, ниже цена", desc: "Защитный слой Exoguard+® толщиной 0,5 мм — идентичная устойчивость к царапинам и истиранию при значительно более доступной стоимости." },
  { title: "Производство под ваш проект", desc: "Без ограничения складскими остатками. Изготавливаем плитку с заданными параметрами в необходимом объёме под конкретный объект." },
  { title: "Эстетика премиального уровня", desc: "Матовая поверхность и аккуратный micro-bevel по краям. Формат 18\"×18\" соответствует международным стандартам." },
  { title: "Практичность в уходе", desc: "Защитное покрытие Exoguard+® облегчает влажную уборку. Гигиенично и устойчиво к загрязнениям." },
];

const shawSpecs = [
  ["Тип продукта", "Коммерческая LVT плитка / планки"],
  ["Финишное покрытие", "Exoguard+®"],
  ["Форматы", "Плитка 46×46 см, планки различных размеров"],
  ["Общая толщина", "2,0 – 4,5 мм"],
  ["Защитный слой", "0,3 мм (12 mil) – 0,7 мм (28 mil)"],
  ["Способ укладки", "Прямая приклейка (Direct Glue)"],
  ["Гарантия", "10 – 20 лет коммерческая"],
];

const fomatSpecs = [
  ["Тип продукта", "Коммерческая LVT плитка"],
  ["Размер плитки", "18\"×18\" (45,72 × 45,72 см)"],
  ["Общая толщина", "2,5 мм"],
  ["Защитный слой", "0,5 мм (Exoguard+®)"],
  ["Поверхность", "Матовая"],
  ["Класс применения", "34–43 (коммерческий/промышленный)"],
  ["Способ укладки", "Прямая приклейка (Direct Glue)"],
];

export default function LVTPage() {
  return (
    <Suspense fallback={null}>
      <LVTPageContent />
    </Suspense>
  );
}

function LVTPageContent() {
  const params = useSearchParams();
  const initialBrand = params.get("brand") === "fomat" ? "fomat" : "shaw";
  const [active, setActive] = useState<"shaw" | "fomat">(initialBrand);
  const overviewRef = useInView();
  const advRef = useInView();
  const specsRef = useInView();
  const ctaRef = useInView();
  const isShaw = active === "shaw";

  return (
    <div>
      <InnerHero
        tag="LVT — Люкс-Винил"
        title="Luxury Vinyl Tile"
        subtitle="Премиальное коммерческое LVT-покрытие с защитным слоем Exoguard+® — от мирового бренда Shaw Contract и собственного производства FOMAT."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Продукция", href: "/catalog" },
          { label: "Напольные покрытия", href: "/catalog/floors" },
          { label: "LVT" },
        ]}
      />

      {/* Tabs */}
      <div className="bg-[#fafaf8] border-b border-[#e6e4d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex gap-0">
          {(["shaw", "fomat"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-8 py-5 text-sm font-medium tracking-wide border-b-2 transition-all duration-200 ${
                active === tab ? "border-[#8c6d51] text-[#22333b]" : "border-transparent text-[#22333b]/40 hover:text-[#22333b]/70"
              }`}
            >
              {tab === "shaw" ? "Shaw Contract" : "FOMAT | Luxury Vinyl"}
            </button>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 bg-[#fafaf8]">
        <div ref={overviewRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${overviewRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                {isShaw ? "Shaw Contract" : "FOMAT | Luxury Vinyl"}
              </p>
              <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
                {isShaw ? "Эталон качества для коммерческих полов" : "Премиальные характеристики по доступной цене"}
              </h2>
              <p className="text-[#22333b]/65 leading-relaxed mb-8">
                {isShaw
                  ? "LVT плитка Shaw Contract — эталон качества для коммерческих напольных покрытий. Сочетая передовые технологии, безупречный дизайн и исключительную износостойкость, продукция задаёт стандарты для самых требовательных проектов по всему миру."
                  : "FOMAT | Luxury Vinyl — это высококачественное коммерческое LVT-покрытие, предлагающее те же премиальные характеристики, что и ведущие мировые бренды, но по более доступной цене. Собственное производство под заказ позволяет контролировать каждый этап создания продукта."}
              </p>
              <div className="flex flex-wrap gap-2">
                {["Офисы", "Ресепшн", "Коридоры", "Торговые площади"].map((tag) => (
                  <span key={tag} className="text-xs text-[#22333b] border border-[#e6e4d8] px-3 py-1.5 rounded-sm">{tag}</span>
                ))}
              </div>
            </div>
            <div className="h-80 lg:h-96 rounded-sm relative overflow-hidden" style={{ backgroundColor: isShaw ? "#4a3728" : "#22333b" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[#e6e4d8]/30 text-xs tracking-widest uppercase">Фото продукции</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-[#e6e4d8]">
        <div ref={advRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-700 ${advRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Преимущества</p>
            <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>Ключевые характеристики</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#22333b]/10">
            {(isShaw ? shawAdvantages : fomatAdvantages).map((adv, i) => (
              <div key={adv.title} className={`bg-[#e6e4d8] p-8 transition-all duration-700 ${advRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-8 h-px bg-[#8c6d51] mb-5" />
                <h3 className="text-[#22333b] font-semibold mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>{adv.title}</h3>
                <p className="text-[#22333b]/55 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-[#fafaf8]">
        <div ref={specsRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`transition-all duration-700 ${specsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Характеристики</p>
            <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-10" style={{ fontFamily: "var(--font-montserrat)" }}>Технические параметры</h2>
            <div className="max-w-2xl border border-[#e6e4d8] rounded-sm overflow-hidden">
              {(isShaw ? shawSpecs : fomatSpecs).map(([key, value], i) => (
                <div key={key} className={`flex flex-col sm:flex-row ${i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"} border-b border-[#e6e4d8] last:border-0`}>
                  <div className="sm:w-56 px-6 py-4 text-sm font-medium text-[#22333b] border-b sm:border-b-0 sm:border-r border-[#e6e4d8]">{key}</div>
                  <div className="flex-1 px-6 py-4 text-sm text-[#22333b]/60">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#22333b]">
        <div ref={ctaRef.ref} className={`max-w-3xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl font-semibold text-[#e6e4d8] tracking-tight mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Готовы обсудить ваш проект?</h2>
          <p className="text-[#e6e4d8]/45 mb-8">Рассчитаем стоимость, предоставим образцы и подготовим спецификацию.</p>
          <Link href="/contacts" className="inline-flex items-center gap-3 px-8 py-4 bg-[#8c6d51] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#7a5d43] transition-colors duration-200 rounded-sm">
            Запросить коммерческое предложение
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
