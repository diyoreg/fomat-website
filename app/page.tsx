"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const products = [
  {
    title: "Напольные покрытия",
    subtitle: "Raised Floors · Carpet Tiles · LVT",
    href: "/catalog/floors",
    bg: "#22333b",
    accent: "#3a5566",
  },
  {
    title: "Стеновые решения",
    subtitle: "Скоро будет",
    href: "/catalog/walls",
    bg: "#8c6d51",
    accent: "#a07d60",
  },
  {
    title: "Акустические решения",
    subtitle: "Панели · Перегородки",
    href: "/catalog/acoustics",
    bg: "#2d4a54",
    accent: "#3d6070",
  },
  {
    title: "Перегородки и двери",
    subtitle: "JEB · FOMAT",
    href: "/catalog/partitions",
    bg: "#4a3728",
    accent: "#5e4535",
  },
  {
    title: "Освещение",
    subtitle: "Офисное и архитектурное",
    href: "/catalog/lights",
    bg: "#1a2830",
    accent: "#223540",
  },
];

const advantages = [
  {
    num: "01",
    title: "Премиальные бренды",
    desc: "Официальный партнёр Shaw Contract и JEB — мировых лидеров в сегменте fit-out материалов для коммерческих пространств.",
  },
  {
    num: "02",
    title: "Склад в Ташкенте",
    desc: "Большой ассортимент в наличии. Быстрая поставка без долгого ожидания и таможенных задержек.",
  },
  {
    num: "03",
    title: "Комплексные решения",
    desc: "Полный спектр материалов для отделки офисных пространств — от пола до потолка — в одном месте.",
  },
  {
    num: "04",
    title: "Экспертная поддержка",
    desc: "Помогаем с подбором материалов, расчётом количества и подготовкой спецификации для вашего проекта.",
  },
];

const stats = [
  { num: "5+", label: "Лет на рынке Узбекистана" },
  { num: "200+", label: "Реализованных проектов" },
  { num: "2", label: "Международных партнёра" },
];

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const productsSection = useInView();
  const advantagesSection = useInView();
  const statsSection = useInView();
  const partnersSection = useInView();
  const ctaSection = useInView();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#22333b]">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#22333b] via-[#263e48] to-[#1a2830]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#e6e4d8 1px, transparent 1px), linear-gradient(90deg, #e6e4d8 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Decorative circle */}
        <div className="absolute right-[-10vw] top-[-10vw] w-[60vw] h-[60vw] rounded-full border border-[#e6e4d8]/5" />
        <div className="absolute right-[-5vw] top-[-5vw] w-[40vw] h-[40vw] rounded-full border border-[#8c6d51]/10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 w-full">
          <div className="max-w-3xl">
            <p
              className={`text-[#8c6d51] text-xs font-semibold tracking-[0.25em] uppercase mb-7 transition-all duration-700 delay-200 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Премиальные fit-out материалы · Ташкент
            </p>
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-semibold text-[#e6e4d8] leading-[1.05] tracking-tight mb-8 transition-all duration-700 delay-300 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Пространства,
              <br />
              которые{" "}
              <span className="text-[#8c6d51]">работают</span>
            </h1>
            <p
              className={`text-[#e6e4d8]/55 text-lg md:text-xl leading-relaxed mb-12 max-w-lg transition-all duration-700 delay-500 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Поставляем материалы мировых брендов для отделки офисов: напольные покрытия, перегородки, акустику и освещение.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#8c6d51] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#7a5d43] transition-colors duration-200 rounded-sm"
              >
                Смотреть каталог
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#e6e4d8]/25 text-[#e6e4d8] text-sm font-medium tracking-wide hover:border-[#e6e4d8]/50 hover:bg-[#e6e4d8]/5 transition-all duration-200 rounded-sm"
              >
                Запросить КП
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-700 delay-[1100ms] ${
            heroVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[#e6e4d8]/25 text-[10px] tracking-[0.3em] uppercase">Прокрутите</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#8c6d51]/80 to-transparent" />
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="py-24 bg-[#fafaf8]">
        <div ref={productsSection.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`mb-14 transition-all duration-700 ${
              productsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Продукция</p>
            <h2
              className="text-4xl md:text-5xl font-semibold text-[#22333b] tracking-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Наши решения
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p, i) => (
              <Link
                key={p.href}
                href={p.href}
                className={`group relative overflow-hidden rounded-sm flex flex-col justify-end p-8 min-h-[280px] transition-all duration-700 ${
                  productsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  backgroundColor: p.bg,
                }}
              >
                {/* Background accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-60"
                  style={{ backgroundColor: p.accent }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Hover tint */}
                <div className="absolute inset-0 bg-[#8c6d51]/0 group-hover:bg-[#8c6d51]/8 transition-colors duration-400" />

                <div className="relative z-10">
                  <p className="text-[#e6e4d8]/50 text-xs tracking-widest uppercase mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                    {p.subtitle}
                  </p>
                  <h3
                    className="text-[#e6e4d8] text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {p.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-[#8c6d51] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Подробнее
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <section className="py-24 bg-[#e6e4d8]">
        <div ref={advantagesSection.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`mb-14 transition-all duration-700 ${
              advantagesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Почему FOMAT</p>
            <h2
              className="text-4xl md:text-5xl font-semibold text-[#22333b] tracking-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Наши преимущества
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-x-0 md:divide-y-0 md:divide-x divide-[#22333b]/10">
            {advantages.map((a, i) => (
              <div
                key={a.num}
                className={`p-10 lg:p-12 transition-all duration-700 ${
                  advantagesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${i >= 2 ? "border-t border-[#22333b]/10" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span
                  className="text-5xl font-semibold text-[#8c6d51]/25"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {a.num}
                </span>
                <h3
                  className="text-[#22333b] text-xl font-semibold mt-5 mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {a.title}
                </h3>
                <p className="text-[#22333b]/60 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 bg-[#22333b]">
        <div ref={statsSection.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`transition-all duration-700 ${
                  statsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className="text-6xl md:text-7xl font-semibold text-[#e6e4d8] mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {s.num}
                </div>
                <p className="text-[#e6e4d8]/35 text-sm tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className="py-24 bg-[#fafaf8]">
        <div ref={partnersSection.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              partnersSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Партнёры</p>
            <h2
              className="text-4xl font-semibold text-[#22333b] tracking-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Мировые бренды
            </h2>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-200 ${
              partnersSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { name: "Shaw Contract", desc: "Ковровые покрытия и LVT" },
              { name: "JEB", desc: "Перегородки и двери" },
            ].map((brand) => (
              <Link
                key={brand.name}
                href="/partners"
                className="group flex-1 max-w-xs w-full px-12 py-10 border border-[#e6e4d8] hover:border-[#8c6d51] rounded-sm text-center transition-all duration-300 hover:shadow-sm"
              >
                <span
                  className="block text-2xl font-semibold text-[#22333b]/50 group-hover:text-[#22333b] tracking-tight transition-colors duration-300"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {brand.name}
                </span>
                <span className="block text-xs text-[#22333b]/30 mt-2 tracking-wide group-hover:text-[#8c6d51] transition-colors duration-300">
                  {brand.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-28 bg-[#22333b] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#22333b] to-[#1a2830]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#e6e4d8 1px, transparent 1px), linear-gradient(90deg, #e6e4d8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          ref={ctaSection.ref}
          className={`relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${
            ctaSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-5">Начнём работу</p>
          <h2
            className="text-4xl md:text-5xl font-semibold text-[#e6e4d8] tracking-tight mb-6 leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-[#e6e4d8]/45 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Свяжитесь с нами — подберём материалы, сделаем спецификацию и рассчитаем стоимость.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#8c6d51] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#7a5d43] transition-colors duration-200 rounded-sm"
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
