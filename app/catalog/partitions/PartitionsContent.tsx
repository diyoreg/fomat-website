"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import InnerHero from "@/components/ui/InnerHero";
import AutoSlider from "@/components/ui/AutoSlider";
import { useInView } from "@/hooks/useInView";
import type { PartitionImageDoc, PartitionSlot } from "@/sanity/lib/types";

type Props = {
  jebImages: PartitionImageDoc[];
  fomatImages: PartitionImageDoc[];
};

const SLOT_LABELS: Record<PartitionSlot, string> = {
  partitions: "Перегородки",
  doors: "Двери",
  pods: "PODS",
};

const jebAdvantages = [
  { title: "Эталонная акустика", desc: "Уровень звукоизоляции STC 30–45 дБ в сертифицированных ISO-лабораториях. Настоящая приватность в самом активном опен-спейсе." },
  { title: "Ультратонкие профили 38 мм", desc: "Флагманская система SUMMIT. Минималистичные алюминиевые рамы, максимальное наполнение светом, соответствие современным архитектурным трендам." },
  { title: "Герметичность по периметру", desc: "Специальные акустические уплотнители и плотное прилегание по четырём сторонам (4-side seals). Гарантированные акустические характеристики." },
  { title: "Гибкость остекления", desc: "Однокамерное и двухкамерное остекление. Switchable Glass (изменяемая прозрачность), Feature Glass, жалюзи внутри стеклопакета." },
  { title: "Широкая кастомизация", desc: "Десятки вариантов анодирования и порошковой окраски, включая цвета RAL и декор под дерево." },
  { title: "Полная линейка дверей", desc: "Акустические раздвижные и распашные двери, идеально сочетающиеся с перегородками как единое стильное решение." },
];

const fomatAdvantages = [
  { title: "Экономичное решение", desc: "Оптимизированный конструктив для эффективных офисных пространств без излишеств и переплат. Идеально для масштабных проектов с бюджетом." },
  { title: "Алюминий с остеклением", desc: "Лёгкий и прочный алюминиевый профиль, не подверженный коррозии. Однокамерный или двухкамерный стеклопакет на выбор." },
  { title: "Звукоизоляция Rw 32–38 дБ", desc: "Конструкция профиля с уплотнителями обеспечивает комфортное шумоподавление для приватности в переговорных и кабинетах." },
  { title: "Наличие на складе", desc: "Базовые профили, стекло и фурнитура для типовых проектов — в наличии. Монтаж сразу после утверждения проекта." },
  { title: "Варианты наполнения", desc: "Прозрачное, сатинированное стекло, глухие сэндвич-панели, комбинированные варианты (низ глухой, верх стекло)." },
  { title: "Быстрый монтаж", desc: "Отработанная технология и наличие готовых компонентов позволяют устанавливать перегородки в минимальные сроки." },
];

const jebSpecs = [
  ["Тип системы", "Алюминиевые каркасные перегородки с остеклением"],
  ["Система", "SUMMIT (флагманская)"],
  ["Ширина профиля", "38 мм (ультратонкий)"],
  ["Материал рам", "Алюминий"],
  ["Акустика (STC)", "30 – 45 дБ"],
  ["Варианты дверей", "Акустические раздвижные и распашные"],
  ["Отделка рам", "Анодирование, порошковая окраска (RAL)"],
];

const fomatSpecs = [
  ["Тип системы", "Алюминиевые каркасные перегородки (стоечно-ригельная)"],
  ["Материал профиля", "Алюминиевый сплав с анодированной обработкой"],
  ["Звукоизоляция (Rw)", "32 – 38 дБ"],
  ["Высота перегородок", "До 3 метров (стандартная)"],
  ["Остекление", "Однокамерный / Двухкамерный стеклопакет"],
  ["Отделка профиля", "Порошковая окраска"],
  ["Наличие на складе", "Да (базовые позиции)"],
];

export default function PartitionsContent(props: Props) {
  return (
    <Suspense fallback={null}>
      <PartitionsPageContent {...props} />
    </Suspense>
  );
}

function PartitionsPageContent({ jebImages, fomatImages }: Props) {
  const params = useSearchParams();
  const initialBrand = params.get("brand") === "fomat" ? "fomat" : "jeb";
  const [active, setActive] = useState<"jeb" | "fomat">(initialBrand);
  const overviewRef = useInView();
  const slotsRef = useInView();
  const activeImages = active === "jeb" ? jebImages : fomatImages;
  // FOMAT shows partitions/doors/pods; JEB only partitions/doors
  const slots: PartitionSlot[] =
    active === "fomat" ? ["partitions", "doors", "pods"] : ["partitions", "doors"];
  const heroImages = slots
    .map((s) => activeImages.find((d) => d.slot === s)?.images?.[0])
    .filter((img): img is NonNullable<typeof img> => Boolean(img));
  const advRef = useInView();
  const specsRef = useInView();
  const ctaRef = useInView();
  const isJeb = active === "jeb";

  return (
    <div>
      <InnerHero
        tag="Перегородки и двери"
        title="Partitions & Doors"
        subtitle="Алюминиевые офисные перегородки и двери с остеклением — от мирового лидера JEB Group и экономичного решения FOMAT."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Продукция", href: "/catalog" },
          { label: "Перегородки и двери" },
        ]}
      />

      {/* Tabs */}
      <div className="bg-[#fafaf8] border-b border-[#e6e4d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex gap-0">
          {(["jeb", "fomat"] as const).map((tab) => (
            <button key={tab} onClick={() => setActive(tab)} className={`px-8 py-5 text-sm font-medium tracking-wide border-b-2 transition-all duration-200 ${active === tab ? "border-[#8c6d51] text-[#22333b]" : "border-transparent text-[#22333b]/40 hover:text-[#22333b]/70"}`}>
              {tab === "jeb" ? "JEB Group" : "FOMAT | Partitions and Doors"}
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
                {isJeb ? "JEB Group" : "FOMAT | Partitions and Doors"}
              </p>
              <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
                {isJeb ? "Мировой лидер в офисных перегородках" : "Функциональное решение с контролируемым бюджетом"}
              </h2>
              <p className="text-[#22333b]/65 leading-relaxed mb-8">
                {isJeb
                  ? "JEB Group — мировой лидер в разработке и производстве акустических перегородок и дверей для коммерческих интерьеров. Продукция сочетает инновационные инженерные решения, бескомпромиссную звукоизоляцию и эстетику минимализма."
                  : "FOMAT | Partitions and Doors — готовое решение для зонирования офисных пространств на основе алюминиевого профиля. Функциональные перегородки с надёжной конструкцией, аккуратным внешним видом и экономичной ценой. Базовые позиции в наличии на складе."}
              </p>
              <div className="flex flex-wrap gap-2">
                {["Переговорные", "Кабинеты", "Опен-спейс", "Конференц-залы"].map((tag) => (
                  <span key={tag} className="text-xs text-[#22333b] border border-[#e6e4d8] px-3 py-1.5 rounded-sm">{tag}</span>
                ))}
              </div>
            </div>
            <div className="h-80 lg:h-96 rounded-sm relative overflow-hidden" style={{ backgroundColor: isJeb ? "#1a2830" : "#4a3728" }}>
              {heroImages.length > 0 ? (
                <AutoSlider
                  images={heroImages}
                  aspect="h-full"
                  className="h-full"
                  showDots={false}
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

      {/* Slots: Перегородки / Двери / PODS */}
      <section className="py-20 bg-[#fafaf8] border-t border-[#e6e4d8]">
        <div ref={slotsRef.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`mb-10 transition-all duration-700 ${slotsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Каталог</p>
            <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
              {isJeb ? "Линейка JEB" : "Линейка FOMAT"}
            </h2>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${slots.length === 3 ? "lg:grid-cols-3" : ""} gap-6`}>
            {slots.map((slot, i) => {
              const doc = activeImages.find((d) => d.slot === slot);
              const slotImages = doc?.images ?? [];
              return (
                <div
                  key={slot}
                  className={`transition-all duration-700 ${slotsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {slotImages.length > 0 ? (
                    <AutoSlider images={slotImages} aspect="aspect-[4/3]" delay={5000} />
                  ) : (
                    <div className="aspect-[4/3] rounded-sm overflow-hidden bg-[#22333b] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-[#e6e4d8]/40 text-xs tracking-wide">Фото будет добавлено</p>
                      </div>
                    </div>
                  )}
                  <p className="mt-3 text-[#22333b] text-base font-medium tracking-wide" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {SLOT_LABELS[slot]}
                  </p>
                </div>
              );
            })}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#22333b]/10">
            {(isJeb ? jebAdvantages : fomatAdvantages).map((adv, i) => (
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
              {(isJeb ? jebSpecs : fomatSpecs).map(([key, value], i) => (
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
          <h2 className="text-3xl font-semibold text-[#e6e4d8] tracking-tight mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Обсудим ваш проект?</h2>
          <p className="text-[#e6e4d8]/45 mb-8">Подготовим спецификацию, рассчитаем стоимость и ответим на все технические вопросы.</p>
          <Link href="/contacts" className="inline-flex items-center gap-3 px-8 py-4 bg-[#8c6d51] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#7a5d43] transition-colors duration-200 rounded-sm">
            Запросить коммерческое предложение
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
