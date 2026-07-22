import { useEffect, useRef, useState } from "react";
import logoSvg from "../assets/logo-C7x2HOp7.svg";
import { scrollToHash } from "../lenis.js";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Product", href: "#product", id: "product" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Contact", href: "#contact", id: "contact" },
];

// Get actual navbar height dynamically
function getNavbarHeight() {
  const nav = document.querySelector("nav");
  return nav ? nav.offsetHeight : 72;
}

export default function Navbar({ mode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const suppressRef = useRef(false);

  // Navbar background on scroll
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Active section detection via scroll position
  useEffect(() => {
    const getActive = () => {
      if (suppressRef.current) return;

      const navHeight = getNavbarHeight();
      const sectionIds = links.map((l) => l.id);
      const midpoint = window.scrollY + navHeight + 10;

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= midpoint) {
          current = id;
        }
      }
      setActive(current);
    };

    getActive();
    window.addEventListener("scroll", getActive, { passive: true });
    return () => window.removeEventListener("scroll", getActive);
  }, []);

  const handleNavClick = (e, id, href) => {
    e.preventDefault();
    setActive(id);
    suppressRef.current = true;

    // Pass dynamic navbar height to scrollToHash
    const navHeight = getNavbarHeight();
    scrollToHash(href, navHeight);
    history.pushState(null, "", href);

    setTimeout(() => {
      suppressRef.current = false;
    }, 500);
    setOpen(false);
  };

  const accentColor = mode === "blue" ? "text-bp-blue-700" : "text-lt-green-700";
  const activeUnderline = mode === "blue" ? "after:bg-bp-blue-600" : "after:bg-lt-green-600";
  const btn =
    mode === "blue"
      ? "bg-bp-blue-600 hover:bg-bp-blue-700"
      : "bg-lt-green-600 hover:bg-lt-green-700";

  return (
    <nav
      className={
        "fixed top-0 inset-x-0 z-40 transition-all duration-300 " +
        (scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-3"
          : "bg-transparent py-5")
      }
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home", "#home")}
          className="flex items-center gap-2 group"
        >
          <img
            src={logoSvg}
            alt="Logo Lifetech"
            className="h-9 w-auto transition-transform group-hover:scale-105"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.id, l.href)}
                  className={
                    "relative py-1 transition-colors " +
                    "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:transition-all after:duration-300 " +
                    activeUnderline +
                    " " +
                    (isActive
                      ? "text-ink after:w-full"
                      : "hover:text-ink after:w-0 hover:after:w-full")
                  }
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact", "#contact")}
          className={
            "hidden md:inline-flex text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 " +
            btn
          }
        >
          Get in touch
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden p-2 rounded-lg border border-black/10 bg-white/60"
        >
          <div className="w-5 h-0.5 bg-ink mb-1.5" />
          <div className="w-5 h-0.5 bg-ink mb-1.5" />
          <div className="w-5 h-0.5 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-black/5">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.id, l.href)}
                  className={
                    "block py-2 transition-colors " +
                    (active === l.id ? accentColor + " font-medium" : "text-ink/80")
                  }
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
