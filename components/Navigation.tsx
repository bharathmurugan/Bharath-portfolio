"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ---------------- Scroll Effects ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress(height > 0 ? (scrollY / height) * 100 : 0);
      setIsScrolled(scrollY > 50);

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Magnetic Effect ---------------- */
  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    target.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border shadow-lg"
            : ""
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent"
          >
            BM<span className="text-primary">.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="relative group transition-transform duration-200"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`text-sm transition-colors duration-300 ${
                    activeSection === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>

                {/* Animated Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                    activeSection === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Mobile Dropdown */}
          <div
            className={`absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden transition-all duration-500 ${
              isMobileMenuOpen ? "max-h-[400px] py-6" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col px-6 gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block transition-colors ${
                      activeSection === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 z-[60] transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
}
