import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "Напольные покрытия", href: "/catalog/floors" },
  { label: "Решения для стен", href: "/catalog/walls" },
  { label: "Акустические решения", href: "/catalog/acoustics" },
  { label: "Перегородки и двери", href: "/catalog/partitions" },
  { label: "Решения по освещению", href: "/catalog/lights" },
];

const companyLinks = [
  { label: "Наши партнёры", href: "/partners" },
  { label: "Наши клиенты", href: "/projects" },
  { label: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-[#22333b] text-[#e6e4d8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/Fit-Out-Photoroom-1.png"
                alt="FOMAT"
                width={110}
                height={36}
                className="h-8 w-auto object-contain brightness-0 invert mb-5"
              />
            </Link>
            <p className="text-sm text-[#e6e4d8]/70 leading-relaxed mb-6">
              Премиальные fit-out материалы для создания стильных и функциональных офисных пространств.
            </p>
            {/* Social links placeholder */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Telegram"
                className="w-9 h-9 rounded-sm border border-[#e6e4d8]/20 flex items-center justify-center text-[#e6e4d8]/60 hover:text-[#e6e4d8] hover:border-[#8c6d51] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.4l-2.95-.924c-.64-.203-.652-.64.136-.953l11.527-4.444c.533-.194 1.001.13.589 1.169z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-sm border border-[#e6e4d8]/20 flex items-center justify-center text-[#e6e4d8]/60 hover:text-[#e6e4d8] hover:border-[#8c6d51] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#8c6d51] mb-5">
              Продукция
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e6e4d8]/70 hover:text-[#e6e4d8] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#8c6d51] mb-5">
              Компания
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e6e4d8]/70 hover:text-[#e6e4d8] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#8c6d51] mb-5">
              Контакты
            </h4>
            <ul className="space-y-3 text-sm text-[#e6e4d8]/70">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#8c6d51]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span>Ташкент, Узбекистан</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#8c6d51]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <a href="tel:+998000000000" className="hover:text-[#e6e4d8] transition-colors">+998 00 000-00-00</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#8c6d51]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <a href="mailto:info@fomat.uz" className="hover:text-[#e6e4d8] transition-colors">info@fomat.uz</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#e6e4d8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e6e4d8]/40">
          <span>© {new Date().getFullYear()} FOMAT. Все права защищены.</span>
          <span>Ташкент, Узбекистан</span>
        </div>
      </div>
    </footer>
  );
}
