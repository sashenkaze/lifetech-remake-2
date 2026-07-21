import { motion } from "framer-motion";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background */}
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
        <motion.div variants={stagger} initial="hidden" animate="show" className="lg:col-span-7">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-lt-green-100 px-4 py-1.5 text-sm text-lt-green-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-lt-green-500 animate-pulse" />
            IT Solutions & Development
          </motion.div>
          <motion.h1
            variants={item}
            className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-ink"
          >
            Futuristic Living
            <br />
            <span className="text-lt-green-600">With</span>
            <br />
            The Future <span className="caret text-lt-green-600 font-light">|</span>
          </motion.h1>
          <motion.p variants={item} className="mt-8 max-w-xl text-lg text-ink-soft leading-relaxed">
            Whether a mobile, desktop or web application, we will design, build and maintain everything according to your <span className="text-lt-green-700 font-medium">vision</span>.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="group inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Our Services
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#about" className="inline-flex items-center gap-2 bg-white border border-black/10 px-7 py-3.5 rounded-full font-medium hover:border-lt-green-600 hover:text-lt-green-700 transition-all">
              Learn More
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-lt-green-500 to-emerald-400 opacity-20 blur-2xl"
            />
            <div className="absolute inset-0 rounded-[2.5rem] bg-white border border-black/5 shadow-2xl shadow-lt-green-900/10 overflow-hidden grain">
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <img src="/assets/logo-C7x2HOp7.svg" alt="Lifetech" className="w-3/5" />
              </div>
              {/* <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-6 right-6 bg-white shadow-lg rounded-2xl px-4 py-3 border border-black/5"
              >
                <div className="text-[10px] uppercase tracking-widest text-ink-soft">Uptime</div>
                <div className="font-display text-xl font-semibold text-lt-green-700">99.9%</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-white shadow-lg rounded-2xl px-4 py-3 border border-black/5 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-lt-green-100 flex items-center justify-center text-lt-green-700">✓</div>
                <div>
                  <div className="text-xs text-ink-soft">Enterprise ready</div>
                  <div className="text-sm font-medium">Trusted Partner</div>
                </div>
              </motion.div> */}
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
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-4xl bg-linear-to-br from-lt-green-50 to-emerald-100/60 p-12 border border-lt-green-100">
            <img src="/assets/logo-C7x2HOp7.svg" alt="About Lifetech" className="w-full max-w-sm mx-auto" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-4 border border-black/5">
              <div className="font-display text-3xl font-bold text-lt-green-700">LIFETECH</div>
              {/* <div className="text-xs text-ink-soft uppercase tracking-widest">Since Day One</div> */}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
