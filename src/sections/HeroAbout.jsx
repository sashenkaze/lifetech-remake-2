import { motion } from "framer-motion";
import logoSvg from "../assets/logo-C7x2HOp7.svg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-lt-green-50 via-white to-white" />
      <div className="absolute -top-40 -left-40 w-xl h-xl rounded-full bg-lt-green-100 blur-3xl opacity-70 -z-10" />
      <div className="absolute top-1/3 -right-40 w-120 h-120 rounded-full bg-emerald-200/50 blur-3xl -z-10" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #064e3b 1px, transparent 1px), linear-gradient(to bottom, #064e3b 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-lt-green-100 px-4 py-1.5 text-sm text-lt-green-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-lt-green-500 animate-pulse" />
            IT Solutions & Development
          </div>
          <h1 className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-ink">
            Futuristic Living
            <br />
            <span className="text-lt-green-600">With</span>
            <br />
            The Future
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ink-soft leading-relaxed">
            Whether a mobile, desktop or web application, we will design, build and maintain everything according to your <span className="text-lt-green-700 font-medium">vision</span>.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="group inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Our Services
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#about" className="inline-flex items-center gap-2 bg-white border border-black/10 px-7 py-3.5 rounded-full font-medium hover:border-lt-green-600 hover:text-lt-green-700 transition-all">
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div style={{ position: "relative", width: 380, height: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="ring-outer" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(74,222,128,.3)" }} />
            <div className="ring-inner" style={{ position: "absolute", inset: 24, borderRadius: "50%", border: "1.5px solid rgba(52,211,153,.4)" }} />
            <div className="ring-glow" style={{ position: "absolute", inset: 32, borderRadius: "50%", background: "radial-gradient(circle, rgba(187,247,208,.6), transparent 70%)", filter: "blur(20px)" }} />
            <div className="logo-circle" style={{ position: "relative", width: 290, height: 290, background: "linear-gradient(145deg, #fff, #f8fafc)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 60px rgba(22,163,74,.18), 0 4px 16px rgba(0,0,0,.06)", border: "1px solid rgba(187,247,208,.7)" }}>
              <img src={logoSvg} alt="Lifetech" style={{ width: 170, height: 170, objectFit: "contain" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative rounded-4xl bg-linear-to-br from-lt-green-50 to-emerald-100/60 p-12 border border-lt-green-100">
            <img src={logoSvg} alt="About Lifetech" className="w-full max-w-sm mx-auto" />
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">About Us</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
            LIFETECH
          </h2>
          <div className="mt-8 space-y-6 text-lg text-ink-soft leading-relaxed">
            <p>
              Lifetech is an information technology solution company focusing on application development, mobile app development, and system integration.
            </p>
            <p>
              We provide services and solutions that will help your company grow, such as Human Resource & Payroll Systems, Artificial Intelligence Implementation, SEO, and many more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
