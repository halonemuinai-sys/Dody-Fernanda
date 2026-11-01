"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";

const NAV_SECTIONS = ["home", "about", "expertise", "projects", "experience", "achievements", "contact"];

export default function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    if (!onHome) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of NAV_SECTIONS) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onHome]);

  return (
    <header className="navbar-floating no-print">
      <div className="navbar-container">
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#home" className={`nav-link ${onHome && activeSection === "home" ? "active" : ""}`}>Home</a>
          <a href="#about" className={`nav-link ${onHome && activeSection === "about" ? "active" : ""}`}>About</a>
          <a href="#expertise" className={`nav-link ${onHome && activeSection === "expertise" ? "active" : ""}`}>Expertise</a>
          <a href="#projects" className={`nav-link ${onHome && activeSection === "projects" ? "active" : ""}`}>Projects</a>
          <a href="#experience" className={`nav-link ${onHome && activeSection === "experience" ? "active" : ""}`}>Experience</a>
          <a href="#achievements" className={`nav-link ${onHome && activeSection === "achievements" ? "active" : ""}`}>Achievements</a>
          <Link href="/blog" className={`nav-link ${pathname?.startsWith("/blog") ? "active" : ""}`}>Case Studies</Link>
          <a href="#contact" className={`nav-link ${onHome && activeSection === "contact" ? "active" : ""}`}>Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/CV-Dody-Fernanda.pdf"
            download="CV DODY FERNANDA 2026.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#023c26] text-white hover:bg-emerald-950 transition-all cursor-pointer font-outfit"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
