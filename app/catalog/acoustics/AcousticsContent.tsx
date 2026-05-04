"use client";

import Link from "next/link";
import InnerHero from "@/components/ui/InnerHero";
import HoverZoomGallery from "@/components/ui/HoverZoomGallery";
import SanityImage from "@/components/ui/SanityImage";
import { useInView } from "@/hooks/useInView";
import type { SanityImage as SanityImageType } from "@/sanity/lib/types";

const advantages = [
  { title: "Высокое звукопоглощение", desc: "Коэффициент NRC до 0,7. Эффективно снижает уровень реверберации — идеально для опен-спейсов, переговорных и коридоров." },
  { title: "Экологичность и безопасность", desc: "100% полиэфирное волокно (ПЭТ), без клея и формальдегида. Класс эмиссии E1. Нетоксично, безопасно, пригодно для вторичной переработки." },
  { title: "Пожарная безопасность", desc: "Класс B1 (трудновоспламеняемые) по стандарту ASTM-E84. Допускается применение в общественных и коммерческих зданиях." },
  { title: "Гибкость дизайна", desc: "Легко режутся и принимают нужную форму без потери акустических свойств. Широкая палитра цветов для интеграции в любой интерьер." },
  { title: "Простой монтаж", desc: "Фиксируются на универсальный спрей-клей или двусторонний скотч 3M. Не требуют специальных инструментов." },
  { title: "Производство под заказ", desc: "Срок изготовления 15–25 дней. Бесплатные образцы, разработка раскроя, нестандартные формы и фрезеровка." },
];

const solutions = [
  { title: "Настенные панели", desc: "Ровные плиты большого формата или нарезанная плитка для геометрических узоров." },
  { title: "Потолочные острова", desc: "Лёгкие подвесные конструкции, добавляющие интерьеру объём и ритм." },
  { title: "Панно с фрезеровкой", desc: "Объёмные декоративные элементы с фрезерованными рисунками или логотипами." },
  { title: "Акустические перегородки", desc: "Мобильные или стационарные конструкции для зонирования без потери света." },
  { title: "Мебель со встроенной акустикой", desc: "Облицовка тумб, стоек ресепшн и шкафов акустическими панелями." },
  { title: "Акустические картины", desc: "Декоративные элементы в рамах — как картины, но работающие на звукопоглощение." },
];

const specs = [
  ["Материал", "100% полиэфирное волокно (ПЭТ, полиэстер)"],
  ["Стандартные размеры", "2440 × 1220 мм"],
  ["Толщина", "9 мм / 12 мм (нестандартная — под заказ)"],
  ["Коэффициент NRC", "до 0,7"],
  ["Пожарная безопасность", "Класс B1 (ASTM-E84)"],
  ["Экологичность", "Класс E1 (без формальдегида)"],
  ["Срок производства", "15–25 рабочих дней"],
];

export default function AcousticsContent({ images }: { images: SanityImageType[] }) {
  const overviewRef = useInView();
  const galleryRef = useInView();
  const solutionsRef = useInView();
  const advRef = useInView();
  const specsRef = useInView();
  const ctaRef = useInView();
  const heroImage = images[0];
  const galleryImages = images.slice(1);

  return (
    <div>
      <InnerHero
        tag="Акустические решения"
        title="FOMAT | Acoustics"
        subtitle="Эффективные и экологичные акустические панели из 100% полиэфирного волокна (ПЭТ) для улучшения звукового комфорта в офисах."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Продукция", href: "/catalog" },
          { label: "Акустические решения" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-[#fafaf8]">
        <div ref={overviewRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${overviewRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-4">О продукте</p>
              <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
                Акустика — это не компромисс между функцией и дизайном
              </h2>
              <p className="text-[#22333b]/65 leading-relaxed mb-4">
                FOMAT | Acoustics — панели из 100% полиэфирного волокна с уникальной пористой структурой, которая создаётся в процессе переплетения, пробивки и термообработки волокон.
              </p>
              <p className="text-[#22333b]/65 leading-relaxed mb-8">
                Мы не просто поставляем материал — изготавливаем готовые акустические решения под ваш проект: от стандартных настенных панелей до сложных подвесных конструкций и панно с фрезеровкой.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Офисы", "Переговорные", "Конференц-залы", "Образование", "Медицина"].map((tag) => (
                  <span key={tag} className="text-xs text-[#22333b] border border-[#e6e4d8] px-3 py-1.5 rounded-sm">{tag}</span>
                ))}
              </div>
            </div>
            <div className="h-80 lg:h-96 bg-[#2d4a54] rounded-sm relative overflow-hidden">
              {heroImage ? (
                <SanityImage
                  image={heroImage}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-[#e6e4d8]/30 text-xs tracking-widest uppercase">Фото будут добавлены</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-20 bg-[#fafaf8] border-t border-[#e6e4d8]">
          <div ref={galleryRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`mb-10 transition-all duration-700 ${galleryRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Галерея</p>
              <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
                Реализованные решения
              </h2>
            </div>
            <div className={`transition-all duration-700 ${galleryRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <HoverZoomGallery images={galleryImages} columns={3} fallbackBg="#2d4a54" />
            </div>
          </div>
        </section>
      )}

      {/* Solutions */}
      <section className="py-20 bg-[#22333b]">
        <div ref={solutionsRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-700 ${solutionsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Что мы делаем</p>
            <h2 className="text-3xl font-semibold text-[#e6e4d8] tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
              Готовые акустические решения
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s, i) => (
              <div
                key={s.title}
                className={`border border-[#e6e4d8]/10 rounded-sm p-7 transition-all duration-700 ${solutionsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-8 h-px bg-[#8c6d51] mb-5" />
                <h3 className="text-[#e6e4d8] font-semibold mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>{s.title}</h3>
                <p className="text-[#e6e4d8]/45 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-[#e6e4d8]">
        <div ref={advRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-700 ${advRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Преимущества</p>
            <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>Характеристики панелей</h2>
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
          <h2 className="text-3xl font-semibold text-[#e6e4d8] tracking-tight mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Нужна акустика для вашего офиса?</h2>
          <p className="text-[#e6e4d8]/45 mb-8">Подберём решение, предоставим бесплатные образцы и рассчитаем раскрой под ваш проект.</p>
          <Link href="/contacts" className="inline-flex items-center gap-3 px-8 py-4 bg-[#8c6d51] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#7a5d43] transition-colors duration-200 rounded-sm">
            Запросить коммерческое предложение
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
