import { motion } from "framer-motion";

const services = [
  {
    title: "Mobile Development",
    img: "ser-DGRl8aWS.svg",
    text: "We will assist you in building mobile application, including Android, iOS or cross platform application.",
  },
  {
    title: "Application Development",
    img: "services-DgBB8G5S.svg",
    text: "We will provide solutions to all your application development and integration, including desktop and website applications.",
  },
  {
    title: "Sistem Integration",
    img: "services2-Czd3Ugej.svg",
    text: "We will help you integrate the best system for your problems, directly from our company associates.",
  },
  {
    title: "Project Management",
    img: "services3-e_84v2i9.svg",
    text: "We will assist you to achieve the objectives of a particular project, according to agreed criteria and parameters.",
  },
  {
    title: "Support & Helpdesk",
    img: "services4-B8RKmz24.svg",
    text: "We will provide a helpdesk tool that organizes customer communication to help businesses respond to customer and support them more quickly and effectively.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">
            Service
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Services engineered around your ambition.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={
                "group relative rounded-3xl p-8 border overflow-hidden transition-all hover:-translate-y-1 " +
                (i === 0
                  ? "bg-white text-ink border-black/5 hover:shadow-xl hover:shadow-lt-green-900/5 md:row-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2"
                  : "bg-white border-black/5 hover:shadow-xl hover:shadow-lt-green-900/5")
              }
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-lt-green-50">
                <img
                  src={`/assets/${s.img}`}
                  alt={s.title}
                  className="w-9 h-9"
                />
              </div>

              <h3 className="font-display text-2xl font-semibold text-ink">
                {s.title}
              </h3>

              <p className="mt-4 leading-relaxed text-ink-soft">
                {s.text}
              </p>

              <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full blur-3xl transition-opacity bg-lt-green-100 opacity-0 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}