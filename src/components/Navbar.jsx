import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "../assets/logo-C7x2HOp7.svg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Product", href: "#product" },
  { label: "Services", href: "#services" },
  { label: "BeetPOS", href: "#beetpos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ mode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const accent = mode === "blue" ? "text-bp-blue-700" : "text-lt-green-700";
  const btn =
    mode === "blue"
      ? "bg-bp-blue-600 hover:bg-bp-blue-700"
      : "bg-lt-green-600 hover:bg-lt-green-700";

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={
        "fixed top-0 inset-x-0 z-40 transition-all duration-500 " +
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
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 hover:text-ink transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-black/5"
          >
            <ul className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a onClick={() => setOpen(false)} href={l.href} className="block py-2 text-ink/80">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
