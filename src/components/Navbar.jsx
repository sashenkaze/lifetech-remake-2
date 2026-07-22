import { useEffect, useState } from "react";
import logoSvg from "../assets/logo-C7x2HOp7.svg";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Product", href: "#product", id: "product" },
  { label: "Services", href: "#services", id: "services" },
  // { label: "BeetPOS", href: "#beetpos", id: "beetpos" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar({ mode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll state for navbar background
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const observers = [];

    // Track which sections are currently visible
    const visible = new Map();

    const pick = () => {
      // Pick the topmost visible section
      let top = null;
      for (const id of sectionIds) {
        if (visible.get(id)) {
          top = id;
          break;
        }
      }
      if (top) setActive(top);
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visible.set(id, entry.isIntersecting);
          pick();
        },
        { rootMargin: "-72px 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

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
        <a href="#home" className="flex items-center gap-2 group">
          <img src={logoSvg} alt="Logo Lifetech" className="h-9 w-auto transition-transform group-hover:scale-105" />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={
                    "relative py-1 transition-colors " +
                    "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:transition-all after:duration-300 " +
                    activeUnderline + " " +
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
          className={"hidden md:inline-flex text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 " + btn}
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
                  onClick={() => setOpen(false)}
                  href={l.href}
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
