"use client";

import InnerHero from "@/components/ui/InnerHero";
import { useInView } from "@/hooks/useInView";

export default function ContactsPage() {
  const cardRef = useInView();
  const infoRef = useInView();

  return (
    <div>
      <InnerHero
        title="Контакты"
        subtitle="Свяжитесь с нами — ответим на вопросы, рассчитаем стоимость и организуем поставку."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Контакты" },
        ]}
      />

      <section className="py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Call CTA */}
            <div ref={cardRef.ref} className={`transition-all duration-700 ${cardRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Связаться напрямую</p>
              <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
                Позвоните нам — ответим сразу
              </h2>
              <p className="text-[#22333b]/65 leading-relaxed mb-8">
                Расскажем про продукцию, рассчитаем стоимость и подберём решение под ваш проект. Звонок в рабочее время — самый быстрый способ связаться.
              </p>
              <a
                href="tel:+998999102910"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#22333b] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#8c6d51] transition-colors duration-200 rounded-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.4 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.6a16 16 0 006.29 6.29l.95-.94a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Позвонить нам
              </a>
              <p className="text-[#22333b]/45 text-sm mt-4">+998 99 910 29 10</p>
            </div>

            {/* Contact info */}
            <div ref={infoRef.ref} className={`space-y-8 transition-all duration-700 delay-200 ${infoRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Контактная информация</p>
                <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-8" style={{ fontFamily: "var(--font-montserrat)" }}>
                  Мы в Ташкенте
                </h2>
              </div>

              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Адрес",
                  value: "Улица Паркент 180, Яшнабадский район, Ташкент, Узбекистан",
                  href: "https://www.google.com/maps?q=41.308665,69.336362",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.4 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.6a16 16 0 006.29 6.29l.95-.94a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  label: "Телефон",
                  value: "+998 99 910 29 10",
                  href: "tel:+998999102910",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.95 5.32 18.74 20.5c-.24 1.07-.88 1.33-1.78.83l-4.92-3.62-2.37 2.28c-.26.26-.49.49-1 .49l.35-5.06 9.21-8.32c.4-.36-.09-.55-.62-.2L6.21 13.55l-4.9-1.53c-1.07-.34-1.09-1.07.23-1.59l19.16-7.39c.89-.34 1.67.2 1.25 2.28z" />
                    </svg>
                  ),
                  label: "Телеграм",
                  value: "@fomat_uz",
                  href: "https://t.me/fomat_uz",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  value: "info@fomat.uz",
                  href: "mailto:info@fomat.uz",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#e6e4d8] flex items-center justify-center text-[#8c6d51] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#22333b]/40 tracking-wide uppercase mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[#22333b] hover:text-[#8c6d51] transition-colors duration-200">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#22333b]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-8 space-y-3">
                <div className="h-64 rounded-sm overflow-hidden border border-[#e6e4d8]">
                  <iframe
                    title="FOMAT на карте"
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5994.018259437632!2d69.336362!3d41.308665000000005!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzMxLjIiTiA2OcKwMjAnMTAuOSJF!5e0!3m2!1sru!2s!4v1778354497422!5m2!1sru!2s"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://www.google.com/maps?q=41.308665,69.336362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#8c6d51] hover:text-[#22333b] transition-colors"
                >
                  Открыть в Google Картах
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </div>

              {/* Working hours */}
              <div className="border border-[#e6e4d8] rounded-sm p-6">
                <p className="text-xs text-[#22333b]/40 tracking-wide uppercase mb-4">Режим работы</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#22333b]/60">Понедельник — Пятница</span>
                    <span className="text-[#22333b] font-medium">09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#22333b]/60">Суббота</span>
                    <span className="text-[#22333b] font-medium">10:00 – 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#22333b]/60">Воскресенье</span>
                    <span className="text-[#22333b]/40">Выходной</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
