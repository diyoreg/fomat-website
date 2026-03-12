"use client";

import Link from "next/link";
import { useState } from "react";
import InnerHero from "@/components/ui/InnerHero";
import { useInView } from "@/hooks/useInView";

const shawAdvantages = [
  {
    title: "Выдающаяся износостойкость",
    desc: "100% Eco Solution Q® (Полиамид 6) — класс применения 33 по BS EN 1307. Устойчивость к нагрузкам от кресел на роликах ≥2.4 по EN 985.",
  },
  {
    title: "Премиальная акустика",
    desc: "Звукоизоляция ударного шума 24–26 дБ. Создаёт комфортную и продуктивную атмосферу в открытых пространствах и переговорных.",
  },
  {
    title: "Инновационная основа EcoWorx®",
    desc: "На 25% легче традиционной ПВХ-основы, снижает углеродный след при транспортировке. Беспрецедентная долговечность продукта.",
  },
  {
    title: "Сертификация и экология",
    desc: "Cradle to Cradle Certified® (бронза/серебро), класс M1 / A+, Green Label Plus. Безопасность для здоровья и окружающей среды.",
  },
];

const fomatAdvantages = [
  {
    title: "Оптимальное соотношение цены и качества",
    desc: "Надёжная альтернатива дорогим мировым брендам. Прогнозируемые характеристики износостойкости при значительно более низкой цене.",
  },
  {
    title: "Практичный материал",
    desc: "Лицевой слой из 100% полипропилена устойчив к истиранию, влаге и загрязнениям. Легко чистится сухим и влажным способом.",
  },
  {
    title: "Стабильная ПВХ-основа",
    desc: "Идеальная геометрия 50×50 см. Плитки не деформируются со временем и плотно прилегают после укладки.",
  },
  {
    title: "Два типа ворса",
    desc: "Level Loop — для высокой нагрузки. Multi-Level Loop — для переговорных и кабинетов, где важна текстура.",
  },
];

const shawSpecs = [
  ["Состав ворса", "100% Eco Solution Q® Polyamide 6"],
  ["Общая толщина", "6,0 – 7,6 мм"],
  ["Основа", "EcoWorx® или TaskWorx®"],
  ["Класс применения", "33 (высшая коммерческая нагрузка)"],
  ["Размер", "60×60 см / планки 25×100 см"],
  ["Пожарная безопасность", "Bfl-S1 (EN 13501-1)"],
  ["Светостойкость", ">6 (шкала 1–8)"],
];

const fomatSpecs = [
  ["Лицевое волокно", "100% Полипропилен (ПП)"],
  ["Основа", "ПВХ (стабилизирующий слой)"],
  ["Размер плитки", "50 × 50 см"],
  ["Высота ворса (Level Loop)", "3,0 мм (±0,5 мм)"],
  ["Высота ворса (Multi-Level Loop)", "4/3/2 мм (±0,5 мм)"],
  ["Вес ворса", "420 – 500 г/м² (±20 г/м²)"],
  ["Уход", "Сухая и влажная чистка"],
];

export default function CarpetTilesPage() {
  const [active, setActive] = useState<"shaw" | "fomat">("shaw");
  const overviewRef = useInView();
  const advRef = useInView();
  const specsRef = useInView();
  const ctaRef = useInView();

  const isShaw = active === "shaw";

  return (
    <div>
      <InnerHero
        tag="Ковровая плитка"
        title="Carpet Tiles"
        subtitle="Модульное ковровое покрытие для коммерческих пространств — от премиального Shaw Contract до экономичного FOMAT."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Продукция", href: "/catalog" },
          { label: "Напольные покрытия", href: "/catalog/floors" },
          { label: "Ковровая плитка" },
        ]}
      />

      {/* Brand tabs */}
      <div className="bg-[#fafaf8] border-b border-[#e6e4d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-0">
            {(["shaw", "fomat"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-8 py-5 text-sm font-medium tracking-wide border-b-2 transition-all duration-200 ${
                  active === tab
                    ? "border-[#8c6d51] text-[#22333b]"
                    : "border-transparent text-[#22333b]/40 hover:text-[#22333b]/70"
                }`}
              >
                {tab === "shaw" ? "Shaw Contract" : "FOMAT | Carpet Tiles"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 bg-[#fafaf8]">
        <div ref={overviewRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              overviewRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                {isShaw ? "Shaw Contract" : "FOMAT | Carpet Tiles"}
              </p>
              <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
                {isShaw ? "Инновационные покрытия мирового уровня" : "Качество с контролируемым бюджетом"}
              </h2>
              <p className="text-[#22333b]/65 leading-relaxed mb-4">
                {isShaw
                  ? "Ковролиновая плитка от Shaw Contract — инновационное модульное покрытие, сочетающее исключительную долговечность, передовой дизайн и простоту укладки. Идеально для современных офисов, где важны акустический комфорт, эстетика и функциональность."
                  : "FOMAT | Carpet Tiles — функциональное и экономически эффективное модульное покрытие для коммерческих пространств. Собственное производство под заказ позволяет предлагать продукт с достойными характеристиками по доступной цене."}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Офисы", "Опен-спейс", "Переговорные", "Коворкинги"].map((tag) => (
                  <span key={tag} className="text-xs text-[#22333b] border border-[#e6e4d8] px-3 py-1.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="h-80 lg:h-96 rounded-sm relative overflow-hidden"
              style={{ backgroundColor: isShaw ? "#22333b" : "#2d4a54" }}
            >
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
            <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
              Ключевые характеристики
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#22333b]/10">
            {(isShaw ? shawAdvantages : fomatAdvantages).map((adv, i) => (
              <div
                key={adv.title}
                className={`bg-[#e6e4d8] p-8 transition-all duration-700 ${advRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
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
            <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-10" style={{ fontFamily: "var(--font-montserrat)" }}>
              Технические параметры
            </h2>
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
          <h2 className="text-3xl font-semibold text-[#e6e4d8] tracking-tight mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Нужны образцы или расчёт?
          </h2>
          <p className="text-[#e6e4d8]/45 mb-8">Предоставим бесплатные образцы, рассчитаем количество и стоимость для вашего проекта.</p>
          <Link href="/contacts" className="inline-flex items-center gap-3 px-8 py-4 bg-[#8c6d51] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#7a5d43] transition-colors duration-200 rounded-sm">
            Запросить коммерческое предложение
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
