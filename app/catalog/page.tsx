"use client";

import Link from "next/link";
import InnerHero from "@/components/ui/InnerHero";
import { useInView } from "@/hooks/useInView";

const categories = [
  {
    title: "Напольные покрытия",
    desc: "Фальшполы, ковровая плитка и LVT от мировых брендов",
    href: "/catalog/floors",
    bg: "#22333b",
    items: ["Raised Floors", "Carpet Tiles", "LVT"],
  },
  {
    title: "Решения для стен",
    desc: "Скоро будет — следите за обновлениями",
    href: "/catalog/walls",
    bg: "#8c6d51",
    items: ["FOMAT | Walls"],
  },
  {
    title: "Акустические решения",
    desc: "Панели и конструкции для снижения шума в офисах",
    href: "/catalog/acoustics",
    bg: "#2d4a54",
    items: ["FOMAT | Acoustics"],
  },
  {
    title: "Перегородки и двери",
    desc: "Алюминиевые системы с остеклением от JEB и FOMAT",
    href: "/catalog/partitions",
    bg: "#4a3728",
    items: ["JEB", "FOMAT | Partitions and Doors"],
  },
  {
    title: "Решения по освещению",
    desc: "Технические и декоративные системы освещения",
    href: "/catalog/lights",
    bg: "#1a2830",
    items: ["FOMAT | Lights"],
  },
];

export default function CatalogPage() {
  const grid = useInView();

  return (
    <div>
      <InnerHero
        title="Продукция"
        subtitle="Полный спектр материалов для отделки офисных пространств — напольные покрытия, стеновые решения, акустика, перегородки и освещение."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Продукция" },
        ]}
      />

      <section className="py-20 bg-[#fafaf8]">
        <div ref={grid.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group relative overflow-hidden rounded-sm flex flex-col justify-between p-8 min-h-[300px] transition-all duration-700 ${
                  grid.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                style={{ transitionDelay: `${i * 80}ms`, backgroundColor: cat.bg }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-white" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#8c6d51]/0 group-hover:bg-[#8c6d51]/8 transition-colors duration-300" />

                <div className="relative z-10 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] text-[#e6e4d8]/50 tracking-widest uppercase border border-[#e6e4d8]/15 px-2 py-1 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="relative z-10">
                  <h2
                    className="text-[#e6e4d8] text-2xl font-semibold tracking-tight mb-2 group-hover:-translate-y-1 transition-transform duration-300"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {cat.title}
                  </h2>
                  <p className="text-[#e6e4d8]/50 text-sm leading-relaxed group-hover:-translate-y-1 transition-transform duration-300">
                    {cat.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-[#8c6d51] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
    </div>
  );
}
