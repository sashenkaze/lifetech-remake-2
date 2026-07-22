import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { setLenis, scrollToHash } from "./lenis.js";

import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Hero, About } from "./sections/HeroAbout.jsx";
import Products from "./sections/Products.jsx";
import Services from "./sections/Services.jsx";
import Clients from "./sections/Clients.jsx";
import Transition from "./sections/Transition.jsx";
import Footer, { WhatsAppFab } from "./sections/Footer.jsx";
import BeetPOSPage from "./pages/BeetPOSPage.jsx";

function HomePage() {
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
    // Handle hash on mount and when coming from another route
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => scrollToHash(hash), 300);
    }
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
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );

}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/beetpos" element={<BeetPOSPage />} />
      </Routes>
    </>
  );
}
