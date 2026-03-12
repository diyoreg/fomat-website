import Link from "next/link";

type Crumb = { label: string; href?: string };

type InnerHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  tag?: string;
};

export default function InnerHero({ title, subtitle, breadcrumbs, tag }: InnerHeroProps) {
  return (
    <section className="pt-28 pb-16 bg-[#22333b] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#e6e4d8 1px, transparent 1px), linear-gradient(90deg, #e6e4d8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute right-0 top-0 w-[40vw] h-[40vw] rounded-full bg-[#8c6d51]/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[#e6e4d8]/35 mb-8">
          {breadcrumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <span>/</span>}
              {c.href ? (
                <Link href={c.href} className="hover:text-[#8c6d51] transition-colors duration-200">
                  {c.label}
                </Link>
              ) : (
                <span className="text-[#e6e4d8]/70">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {tag && (
          <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-4">{tag}</p>
        )}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#e6e4d8] tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-[#e6e4d8]/50 text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
