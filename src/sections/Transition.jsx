import { motion } from "framer-motion";

/* Green -> Blue smooth transition band separating Lifetech from BeetPOS */
export default function Transition() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-lt-green-50 via-cyan-50 to-bp-blue-50" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage:
          "radial-gradient(ellipse at 20% 30%, rgba(16,185,129,.35), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(59,130,246,.35), transparent 55%)",
      }} />
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed">
            Whether a mobile, desktop or web application, we will design, build and maintain everything according to your vision.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#beetpos" className="inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 rounded-full font-medium shadow-lg hover:-translate-y-0.5 transition-all">
              Get Started <span>→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-black/10 px-7 py-3.5 rounded-full font-medium hover:border-bp-blue-600 hover:text-bp-blue-700 transition-all">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
