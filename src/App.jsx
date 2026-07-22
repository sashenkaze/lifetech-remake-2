import { useEffect, useState } from "react";
import Lenis from "lenis";
import { setLenis, scrollToHash } from "./lenis.js";
import Navbar from "./components/Navbar.jsx";
import { Hero, About } from "./sections/HeroAbout.jsx";
import Products from "./sections/Products.jsx";
import Services from "./sections/Services.jsx";
import Clients from "./sections/Clients.jsx";
import Transition from "./sections/Transition.jsx";
import { BeetHero, Features, HowItWorks, Testimonials, Pricing } from "./sections/Beet.jsx";
import Footer, { WhatsAppFab } from "./sections/Footer.jsx";

export default function App() {
  const [mode, setMode] = useState("green");

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.18 });
    setLenis(lenis);

    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      e.preventDefault();
      scrollToHash(hash);
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) setTimeout(() => scrollToHash(hash), 100);
  }, []);

  useEffect(() => {
    const el = document.getElementById("beetpos");
    const onScroll = () => {
      if (!el) return;
      const y = el.getBoundingClientRect().top;
      setMode(y < window.innerHeight * 0.4 ? "blue" : "green");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar mode={mode} />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Clients />
        <Transition />
        <BeetHero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
