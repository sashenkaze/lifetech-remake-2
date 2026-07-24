import { useEffect, useState } from "react";
import { useNavigationType } from "react-router-dom";
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
import CRMPage from "./pages/CRMPage.jsx";
import IotHealthcarePage from "./pages/IotHealthcarePage.jsx";
import LMSPage from "./pages/LMSPage.jsx";
import ARQAPage from "./pages/ARQAPage.jsx";

function HomePage() {
  const [mode, setMode] = useState("green");

  useEffect(() => {
  const lenis = new Lenis({ smoothWheel: true, lerp: 0.18 });
  setLenis(lenis);

  // Fungsi untuk melacak section saat scroll
  const handleScroll = () => {
    // Ambil semua section yang punya ID untuk hash (misal: #home, #about, dll)
    const sections = document.querySelectorAll("main > section[id], main > div[id]");
    const scrollPosition = lenis.scroll; // Posisi scroll vertikal saat ini
    const triggerPoint = window.innerHeight * 0.3; // Trigger saat section melewati 30% layar

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute("id");

      // Cek apakah posisi scroll berada di dalam range section ini
      if (
        scrollPosition >= sectionTop - triggerPoint &&
        scrollPosition < sectionTop + sectionHeight - triggerPoint
      ) {
        const currentHash = `#${id}`;
        // Hanya ganti URL jika hash-nya berbeda agar tidak memicu overhead
        if (window.location.hash !== currentHash) {
          // WAJIB pakai replaceState agar tidak merusak history tombol BACK browser
          window.history.replaceState(null, "", currentHash);
        }
      }
    });
  };

  // Daftarkan event scroll ke Lenis
  lenis.on("scroll", handleScroll);

  let raf;
  const loop = (t) => {
    lenis.raf(t);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(raf);
    lenis.off("scroll", handleScroll); // Bersihkan event
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
// test
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/beetpos" element={<BeetPOSPage />} />
        <Route path="/product/crm" element={<CRMPage />} />
        <Route path="/product/iothealthcare" element={<IotHealthcarePage />} />
        <Route path="/product/lms" element={<LMSPage />} />
        <Route path="/product/arqa" element={<ARQAPage />}/>
      </Routes>
    </>
  );
}
