"use client";

import Link from "next/link";
import InnerHero from "@/components/ui/InnerHero";
import { useInView } from "@/hooks/useInView";

const advantages = [
  {
    title: "Надёжная защита и стабильность",
    desc: "Полное стальное покрытие из оцинкованной стали обеспечивает превосходную влагостойкость. Точная штамповка гарантирует высокую размерную стабильность.",
  },
  {
    title: "Высокая несущая способность",
    desc: "Класс нагрузки 2 (≥3,0 кН) и класс 3 (≥4,0 кН) с запасом прочности 2:1 — подходит для офисов, серверных и технических помещений.",
  },
  {
    title: "Скрытая прокладка коммуникаций",
    desc: "Конструкция создаёт пространство для кабелей и вентиляции, позволяя быстро менять конфигурацию офиса без капитального ремонта.",
  },
  {
    title: "Лёгкость и экологичность",
    desc: "ДСП-сердечник обеспечивает меньший вес по сравнению с цементными аналогами. Материалы пригодны для вторичной переработки.",
  },
  {
    title: "Пожарная безопасность",
    desc: "Класс Bfl-s1 по EN 13501-1 — низкая дымообразующая способность и отсутствие горящих капель.",
  },
  {
    title: "Гибкие системы монтажа",
    desc: "Corner Lock для быстрого соединения и частой перепланировки. Stringer System для максимальной жёсткости в зонах с особыми требованиями.",
  },
];

const specs = [
  ["Модельный ряд", "FS800 – FS1500"],
  ["Размер панели", "600 × 600 мм"],
  ["Конструкция", "Полностью герметизированный стальной корпус из оцинкованной стали"],
  ["Сердечник", "Высокоплотная древесно-стружечная плита (HDF/ДСП)"],
  ["Пожарная безопасность", "Класс Bfl-s1"],
  ["Система установки", "Corner Lock / Stringer System"],
];

export default function RaisedFloorsPage() {
  const overviewRef = useInView();
  const advRef = useInView();
  const specsRef = useInView();
  const ctaRef = useInView();

  return (
    <div>
      <InnerHero
        tag="Фальшполы"
        title="FOMAT | Access Floors"
        subtitle="Надёжные и технологичные сборные фальшполы для создания гибкого и адаптируемого пространства в современных офисах."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Продукция", href: "/catalog" },
          { label: "Напольные покрытия", href: "/catalog/floors" },
          { label: "FOMAT | Access Floors" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-[#fafaf8]">
        <div ref={overviewRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              overviewRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-4">О продукте</p>
              <h2
                className="text-3xl font-semibold text-[#22333b] tracking-tight mb-5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Технология для современного офиса
              </h2>
              <p className="text-[#22333b]/65 leading-relaxed mb-4">
                FOMAT | Access Floors — это надёжные сборные фальшполы, предназначенные для создания гибкого пространства в современных офисах. Конструкция панели полностью герметично закрыта оцинкованной сталью, а в качестве сердечника используется высокоплотная ДСП.
              </p>
              <p className="text-[#22333b]/65 leading-relaxed mb-8">
                Решение обеспечивает идеальный баланс между несущей способностью, лёгкостью и простотой прокладки коммуникаций — критически важными параметрами при организации современных рабочих пространств.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Офисы", "Серверные", "Диспетчерские", "Чистые помещения"].map((tag) => (
                  <span key={tag} className="text-xs text-[#22333b] border border-[#e6e4d8] px-3 py-1.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Placeholder image */}
            <div className="h-80 lg:h-96 bg-[#22333b] rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#22333b] to-[#1a2830]" />
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
          <div
            className={`mb-12 transition-all duration-700 ${
              advRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Преимущества</p>
            <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
              Почему FOMAT Access Floors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#22333b]/10">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className={`bg-[#e6e4d8] p-8 transition-all duration-700 ${
                  advRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-8 h-px bg-[#8c6d51] mb-5" />
                <h3 className="text-[#22333b] font-semibold mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {adv.title}
                </h3>
                <p className="text-[#22333b]/55 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical specs */}
      <section className="py-20 bg-[#fafaf8]">
        <div ref={specsRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${
              specsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Характеристики</p>
            <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-10" style={{ fontFamily: "var(--font-montserrat)" }}>
              Технические параметры
            </h2>
            <div className="max-w-2xl border border-[#e6e4d8] rounded-sm overflow-hidden">
              {specs.map(([key, value], i) => (
                <div
                  key={key}
                  className={`flex flex-col sm:flex-row ${i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"} border-b border-[#e6e4d8] last:border-0`}
                >
                  <div className="sm:w-56 px-6 py-4 text-sm font-medium text-[#22333b] border-b sm:border-b-0 sm:border-r border-[#e6e4d8]">
                    {key}
                  </div>
                  <div className="flex-1 px-6 py-4 text-sm text-[#22333b]/60">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#22333b]">
        <div
          ref={ctaRef.ref}
          className={`max-w-3xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${
            ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-semibold text-[#e6e4d8] tracking-tight mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Интересует этот продукт?
          </h2>
          <p className="text-[#e6e4d8]/45 mb-8">
            Рассчитаем стоимость под ваш объект, подготовим спецификацию и ответим на технические вопросы.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#8c6d51] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#7a5d43] transition-colors duration-200 rounded-sm"
          >
            Запросить коммерческое предложение
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
