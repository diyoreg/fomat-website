import Link from "next/link";
import InnerHero from "@/components/ui/InnerHero";

export default function WallsPage() {
  return (
    <div>
      <InnerHero
        title="Решения для стен"
        subtitle="FOMAT | Walls"
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Продукция", href: "/catalog" },
          { label: "Решения для стен" },
        ]}
      />

      <section className="py-32 bg-[#fafaf8]">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          {/* Decorative element */}
          <div className="w-16 h-px bg-[#8c6d51] mx-auto mb-10" />

          <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
            В разработке
          </p>
          <h2
            className="text-4xl font-semibold text-[#22333b] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Скоро будет
          </h2>
          <p className="text-[#22333b]/55 text-lg leading-relaxed mb-12">
            Мы готовим подробное описание наших решений для стен. Если вас интересует эта продукция — свяжитесь с нами, мы ответим на все вопросы.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#22333b] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#8c6d51] transition-colors duration-200 rounded-sm"
          >
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
