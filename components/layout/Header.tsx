"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Продукция", href: "/catalog" },
  { label: "Наши партнёры", href: "/partners" },
  { label: "Наши клиенты", href: "/projects" },
  { label: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/studio")) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafaf8]/95 backdrop-blur-md shadow-sm"
          : "bg-[#fafaf8]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/Fit-Out-Photoroom-2.png"
              alt="FOMAT"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#8c6d51] ${
                  pathname.startsWith(link.href)
                    ? "text-[#8c6d51]"
                    : "text-[#22333b]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacts"
              className="ml-4 px-5 py-2.5 bg-[#22333b] text-[#e6e4d8] text-sm font-medium tracking-wide rounded-sm hover:bg-[#8c6d51] transition-colors duration-200"
            >
              Запросить КП
            </Link>
          </nav>

          {/* Burger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
          >
            <span
              className={`block w-6 h-0.5 bg-[#22333b] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#22333b] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#22333b] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-[#e6e4d8]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 bg-[#fafaf8] gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-2 border-b border-[#e6e4d8] transition-colors duration-200 hover:text-[#8c6d51] ${
                pathname.startsWith(link.href)
                  ? "text-[#8c6d51]"
                  : "text-[#22333b]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacts"
            className="mt-2 px-5 py-3 bg-[#22333b] text-[#e6e4d8] text-sm font-medium text-center tracking-wide rounded-sm hover:bg-[#8c6d51] transition-colors duration-200"
          >
            Запросить КП
          </Link>
        </nav>
      </div>
    </header>
  );
}
