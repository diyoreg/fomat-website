// Phase 2: Full homepage content coming in next phase
export default function HomePage() {
  return (
    <div className="pt-[72px]">
      <section className="min-h-screen flex items-center justify-center bg-[#e6e4d8]">
        <div className="text-center px-6">
          <h1
            className="text-5xl font-semibold text-[#22333b] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            FOMAT
          </h1>
          <p className="text-[#22333b]/60 text-lg">
            Премиальные fit-out материалы для офисов
          </p>
          <p className="mt-8 text-sm text-[#8c6d51] font-medium tracking-widest uppercase">
            Phase 1 complete — design system ready
          </p>
        </div>
      </section>
    </div>
  );
}
