"use client";

import Link from "next/link";
import InnerHero from "@/components/ui/InnerHero";
import { useInView } from "@/hooks/useInView";

const advantages = [
  { title: "Магнитные трековые системы", desc: "Легко менять конфигурацию при перепланировке офиса. Перемещайте споты и линейные модули по треку без инструментов и электрика." },
  { title: "Полный спектр технического света", desc: "Споты, линейные светильники и декоративные модули на одном треке. Антибликовые экраны с UGR < 19 для работы за компьютерами." },
  { title: "Декоративный свет под заказ", desc: "Подвесы и люстры для ресепшн, нестандартные световые конструкции, светильники в фирменных цветах компании." },
  { title: "Архитектурный свет", desc: "Скрытая подсветка ниш и стен, световые линии для зонирования и визуального расширения пространства." },
  { title: "Световые сценарии и управление", desc: "Интеграция с DALI, Casambi, DMX. Рабочий, презентационный и атмосферный режимы. Энергосбережение с автоматическим диммированием." },
  { title: "Качество света CRI > 90", desc: "Высокий индекс цветопередачи. Tunable White от 2700K до 5000K — настройте освещение под биоритмы сотрудников." },
];

const specs = [
  ["Тип систем", "Магнитные трековые, линейные, встраиваемые, накладные, подвесные"],
  ["Напряжение", "24В, 48В (магнитные), 220В"],
  ["Цветовая температура", "2700K, 3000K, 4000K, 5000K, Tunable White"],
  ["Индекс цветопередачи (CRI)", "> 90 (Ra)"],
  ["Антибликовый коэффициент", "UGR < 19 (модели для рабочих мест с ПК)"],
  ["Управление", "DALI, Casambi, DMX, Push Dim, пульт / приложение"],
  ["Цвет корпусов", "Чёрный, белый, серебро, золото, любой RAL"],
];

export default function LightsPage() {
  const overviewRef = useInView();
  const advRef = useInView();
  const specsRef = useInView();
  const ctaRef = useInView();

  return (
    <div>
      <InnerHero
        tag="Решения по освещению"
        title="FOMAT | Lights"
        subtitle="Комплексные решения по освещению офисных пространств: от магнитных трековых систем до декоративных светильников под индивидуальный заказ."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Продукция", href: "/catalog" },
          { label: "Решения по освещению" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-[#fafaf8]">
        <div ref={overviewRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${overviewRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-4">О продукте</p>
              <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
                Освещение — это часть бренда вашей компании
              </h2>
              <p className="text-[#22333b]/65 leading-relaxed mb-4">
                FOMAT | Lights объединяет функциональность технического света и гибкость декоративных сценариев. Современные модульные системы позволяют создавать комфортную, безопасную и визуально выразительную среду для работы.
              </p>
              <p className="text-[#22333b]/65 leading-relaxed mb-8">
                Все элементы системы выполнены в минималистичном дизайне и доступны в различных цветах — от классического чёрного до индивидуальной окраски по шкале RAL.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Опен-спейс", "Кабинеты", "Переговорные", "Ресепшн", "Коридоры"].map((tag) => (
                  <span key={tag} className="text-xs text-[#22333b] border border-[#e6e4d8] px-3 py-1.5 rounded-sm">{tag}</span>
                ))}
              </div>
            </div>
            <div className="h-80 lg:h-96 bg-[#1a2830] rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a2830] to-[#0a1520]" />
              {/* Decorative light effect */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-[#8c6d51]/60 to-transparent" />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#8c6d51]/10 blur-2xl" />
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
            <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>Возможности системы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#22333b]/10">
            {advantages.map((adv, i) => (
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
              {specs.map(([key, value], i) => (
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
          <h2 className="text-3xl font-semibold text-[#e6e4d8] tracking-tight mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Создадим освещение для вашего офиса</h2>
          <p className="text-[#e6e4d8]/45 mb-8">Разработаем световой сценарий, подберём систему и рассчитаем стоимость под ваш проект.</p>
          <Link href="/contacts" className="inline-flex items-center gap-3 px-8 py-4 bg-[#8c6d51] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#7a5d43] transition-colors duration-200 rounded-sm">
            Запросить коммерческое предложение
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
