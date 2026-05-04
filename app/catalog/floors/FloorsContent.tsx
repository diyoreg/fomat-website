"use client";

import Link from "next/link";
import InnerHero from "@/components/ui/InnerHero";
import SanityImage from "@/components/ui/SanityImage";
import { useInView } from "@/hooks/useInView";
import type { FloorSlot, FloorSlotMap } from "@/sanity/lib/types";

type Subcategory = {
  tag: string;
  title: string;
  desc: string;
  href: string;
  slot: FloorSlot;
  fallbackBg: string;
  brands: { label: string; href: string }[];
};

const subcategories: Subcategory[] = [
  {
    tag: "Фальшполы",
    title: "FOMAT | Access Floors",
    desc: "Надёжные сборные фальшполы для создания гибкого офисного пространства. Стальной корпус, ДСП-сердечник, скрытая прокладка коммуникаций.",
    href: "/catalog/floors/raised-floors",
    slot: "raisedFloors",
    fallbackBg: "#22333b",
    brands: [{ label: "FOMAT | Raised Floors", href: "/catalog/floors/raised-floors" }],
  },
  {
    tag: "Ковровая плитка",
    title: "Carpet Tiles",
    desc: "Модульное ковровое покрытие для коммерческих пространств. Высокая износостойкость, акустический комфорт, простота замены отдельных элементов.",
    href: "/catalog/floors/carpet-tiles",
    slot: "carpetTiles",
    fallbackBg: "#2d4a54",
    brands: [
      { label: "Shaw Contract", href: "/catalog/floors/carpet-tiles?brand=shaw" },
      { label: "FOMAT | Carpet Tiles", href: "/catalog/floors/carpet-tiles?brand=fomat" },
    ],
  },
  {
    tag: "LVT — Люкс-Винил",
    title: "Luxury Vinyl Tile",
    desc: "Премиальное ПВХ-покрытие с защитным слоем Exoguard+®. Имитация дерева, камня и бетона. Идеально для офисов с высокой нагрузкой.",
    href: "/catalog/floors/lvt",
    slot: "lvt",
    fallbackBg: "#4a3728",
    brands: [
      { label: "Shaw Contract", href: "/catalog/floors/lvt?brand=shaw" },
      { label: "FOMAT | Luxury Vinyl", href: "/catalog/floors/lvt?brand=fomat" },
    ],
  },
];

export default function FloorsContent({ slotImages }: { slotImages: FloorSlotMap }) {
  const section = useInView();

  return (
    <div>
      <InnerHero
        title="Напольные покрытия"
        subtitle="Три линейки продукции для любых офисных задач — от технических фальшполов до премиальных ковровых покрытий и LVT."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Продукция", href: "/catalog" },
          { label: "Напольные покрытия" },
        ]}
      />

      <section className="py-20 bg-[#fafaf8]">
        <div ref={section.ref} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-px">
          {subcategories.map((sub, i) => {
            const img = slotImages[sub.slot];
            return (
            <div
              key={sub.href}
              className={`bg-white border border-[#e6e4d8] rounded-sm overflow-hidden transition-all duration-700 ${
                section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                <div
                  className="lg:w-80 h-52 lg:h-auto flex-shrink-0 relative overflow-hidden"
                  style={{ backgroundColor: sub.fallbackBg }}
                >
                  {img ? (
                    <SanityImage
                      image={img}
                      fill
                      sizes="(min-width:1024px) 320px, 100vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
                {/* Content */}
                <div className="flex-1 p-8 lg:p-10">
                  <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">{sub.tag}</p>
                  <h2
                    className="text-2xl font-semibold text-[#22333b] mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {sub.title}
                  </h2>
                  <p className="text-[#22333b]/60 text-sm leading-relaxed mb-6 max-w-xl">{sub.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {sub.brands.map((brand) => (
                      <Link
                        key={brand.label}
                        href={brand.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#22333b] text-[#22333b] text-sm font-medium tracking-wide hover:bg-[#22333b] hover:text-[#e6e4d8] transition-colors duration-200 rounded-sm"
                      >
                        {brand.label}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
