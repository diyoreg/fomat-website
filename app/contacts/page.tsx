"use client";

import { useState } from "react";
import InnerHero from "@/components/ui/InnerHero";
import { useInView } from "@/hooks/useInView";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactsPage() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formRef = useInView();
  const infoRef = useInView();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      alert("Ошибка отправки. Попробуйте ещё раз или свяжитесь с нами напрямую.");
    } finally {
      setLoading(false);
    }
  };

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

            {/* Form */}
            <div ref={formRef.ref} className={`transition-all duration-700 ${formRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-[#8c6d51] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Напишите нам</p>
              <h2 className="text-3xl font-semibold text-[#22333b] tracking-tight mb-8" style={{ fontFamily: "var(--font-montserrat)" }}>
                Запросить коммерческое предложение
              </h2>

              {submitted ? (
                <div className="bg-[#e6e4d8] rounded-sm p-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#22333b] flex items-center justify-center mx-auto mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e6e4d8" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#22333b] mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Заявка отправлена!
                  </h3>
                  <p className="text-[#22333b]/60">
                    Мы свяжемся с вами в ближайшее время. Обычно отвечаем в течение нескольких часов.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-[#22333b]/50 tracking-wide mb-2 uppercase">Имя *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Ваше имя"
                        className="w-full px-4 py-3 border border-[#e6e4d8] bg-white text-[#22333b] text-sm rounded-sm focus:outline-none focus:border-[#22333b] transition-colors duration-200 placeholder:text-[#22333b]/25"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#22333b]/50 tracking-wide mb-2 uppercase">Телефон *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        type="tel"
                        placeholder="+998 XX XXX-XX-XX"
                        className="w-full px-4 py-3 border border-[#e6e4d8] bg-white text-[#22333b] text-sm rounded-sm focus:outline-none focus:border-[#22333b] transition-colors duration-200 placeholder:text-[#22333b]/25"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[#22333b]/50 tracking-wide mb-2 uppercase">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-[#e6e4d8] bg-white text-[#22333b] text-sm rounded-sm focus:outline-none focus:border-[#22333b] transition-colors duration-200 placeholder:text-[#22333b]/25"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#22333b]/50 tracking-wide mb-2 uppercase">Комментарий</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Опишите ваш проект — тип помещения, площадь, интересующая продукция..."
                      className="w-full px-4 py-3 border border-[#e6e4d8] bg-white text-[#22333b] text-sm rounded-sm focus:outline-none focus:border-[#22333b] transition-colors duration-200 placeholder:text-[#22333b]/25 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#22333b] text-[#e6e4d8] text-sm font-medium tracking-wide hover:bg-[#8c6d51] transition-colors duration-200 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Отправляем..." : "Отправить заявку"}
                  </button>
                  <p className="text-[#22333b]/30 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              )}
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
