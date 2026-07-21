import { motion } from "framer-motion";
import beetposLogo from "../assets/BEETPOS-B5eREQlo.png";
import dashboardImg from "../assets/Frame-Bc0RF92k.png";

const features = [
  {
    title: "Fast Transactions",
    text: "Process sales quickly and efficiently to keep your lines moving.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
  },
  {
    title: "Multi-Payment Support",
    text: "Accept cash, credit/debit cards, and QR code payments seamlessly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    title: "Real-time Inventory",
    text: "Track stock levels automatically with every sale and purchase order.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
        <path d="M12 22V12" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <path d="m7.5 4.27 9 5.15" />
      </svg>
    ),
  },
  {
    title: "Customer Loyalty",
    text: "Build and manage loyalty programs to reward your repeat customers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Sales & Revenue Reports",
    text: "Gain insights with detailed reports on sales, profits, and trends.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 21v-6" />
        <path d="M12 21V3" />
        <path d="M19 21V9" />
      </svg>
    ),
  },
  {
    title: "Secure Role-based Access",
    text: "Control what your staff can see and do with customizable permissions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Setup",
    text: "Easily configure your store, import products, and set up hardware in minutes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Sell",
    text: "Start making sales with our intuitive interface on any device, online or offline.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 10a4 4 0 0 1-8 0" />
        <path d="M3.103 6.034h17.794" />
        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
      </svg>
    ),
  },
  {
    title: "Grow",
    text: "Use powerful analytics and reports to make data-driven decisions and scale your business.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
      </svg>
    ),
  },
];

const testimonials = [
  { i: "A", name: "ahmad safii.", role: "Developer", text: "BeetPOS has transformed our business operations. The speed and efficiency of transactions have significantly improved, and the customer support is top-notch." },
  { i: "Y", name: "Yoga", role: "Developer", text: "The user interface is incredibly intuitive. Our staff adapted quickly, and our customers love the seamless payment options." },
  { i: "A", name: "Ade", role: "Developer", text: "BeetPOS has been a game-changer for our retail store. The real-time inventory tracking and sales reports have helped us make better business decisions." },
];

export function BeetHero() {
  return (
    <section id="beetpos" className="relative pt-24 pb-32 overflow-hidden bg-linear-to-b from-bp-blue-50 to-white">
      <div className="absolute -top-40 -right-40 w-xl h-144 rounded-full bg-bp-blue-100 blur-3xl opacity-70" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <img src={beetposLogo} alt="beetPOS" className="h-14 mb-8" />
          <div className="text-sm font-medium text-bp-blue-700 uppercase tracking-widest">Features</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 leading-[1.05]">
            Everything you need to <span className="text-bp-blue-600">run your business</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft max-w-lg">
            BeetPOS is packed with powerful features to streamline your operations and boost your sales.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6"
        >
          <div className="relative rounded-3xl overflow-hidden border border-black/5 shadow-2xl shadow-bp-blue-900/10 bg-white">
            <img src={dashboardImg} alt="Dashboard" className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
            className="group rounded-2xl p-8 bg-white border border-black/5 hover:border-bp-blue-200 hover:shadow-xl hover:shadow-bp-blue-900/5 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-xl bg-bp-blue-600 text-white flex items-center justify-center shadow group-hover:bg-bp-blue-700 group-hover:scale-110 transition-all duration-200">
                {f.icon}
              </div>
              <div className="h-0.5 w-10 bg-bp-blue-100 group-hover:w-16 group-hover:bg-bp-blue-500 transition-all" />
            </div>
            <h3 className="font-display text-xl font-semibold mt-6">{f.title}</h3>
            <p className="mt-3 text-ink-soft leading-relaxed">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="relative py-32 bg-linear-to-b from-white to-bp-blue-50/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-medium text-bp-blue-700 uppercase tracking-widest">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Get started in 3 simple steps</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-linear-to-r from-bp-blue-200 via-bp-blue-500 to-bp-blue-200" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative bg-white rounded-3xl p-8 border border-black/5 text-center shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative mx-auto w-20 h-20 rounded-full bg-bp-blue-100 shadow-lg flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-bp-blue-600 text-white flex items-center justify-center shadow-lg shadow-bp-blue-500/40 hover:bg-bp-blue-700 transition-colors duration-300">
                  {s.icon}
                </div>
              </div>
              <h3 className="font-display text-2xl font-semibold mt-6">{s.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-medium text-bp-blue-700 uppercase tracking-widest">Testimonials</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Loved by businesses worldwide</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl p-8 bg-white border border-black/5 hover:shadow-xl transition-shadow relative"
            >
              <div className="text-lg font-display text-bp-blue-200 leading-none mb-8">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-ink-soft leading-relaxed -mt-4">{t.text}</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-linear-to-br from-bp-blue-500 to-bp-blue-700 text-white font-display font-semibold flex items-center justify-center">
                  {t.i}
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-ink-soft">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const pricing = [
  {
    name: "Lite",
    text: "Perfect for small businesses just getting started",
    features: ["Core POS System", "Inventory Management", "Basic Reporting", "Customer Management", "Email Support"],
    highlight: false,
  },
  {
    name: "Full",
    text: "Most popular choice for growing businesses",
    features: ["All Lite Features", "Advanced Analytics", "Customer Loyalty Program", "E-commerce Integration", "Priority Phone Support"],
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section className="relative py-32 bg-linear-to-b from-bp-blue-50/70 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-medium text-bp-blue-700 uppercase tracking-widest">Pricing Plans</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Pilih Paket Yang Tepat</h2>
          <p className="mt-4 text-ink-soft">Dapatkan solusi POS terbaik dengan harga yang sesuai kebutuhan bisnis Anda</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pricing.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={
                "relative rounded-3xl p-10 border transition-all hover:-translate-y-1 " +
                (p.highlight
                  ? "bg-ink text-white border-ink shadow-2xl shadow-bp-blue-900/20"
                  : "bg-white border-black/5 shadow-sm hover:shadow-xl")
              }
            >
              {p.highlight && (
                <div className="absolute -top-3 right-8 bg-bp-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-3xl font-bold">{p.name}</h3>
              <p className={"mt-2 " + (p.highlight ? "text-white/70" : "text-ink-soft")}>{p.text}</p>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className={"w-5 h-5 rounded-full flex items-center justify-center text-xs " + (p.highlight ? "bg-bp-blue-500 text-white" : "bg-bp-blue-100 text-bp-blue-700")}>
                      ✓
                    </span>
                    <span className={p.highlight ? "text-white/90" : "text-ink"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
  href={
    p.name === "Lite"
      ? "https://api.whatsapp.com/send/?phone=62895617697701&text=Halo%2C+saya+tertarik+dengan+paket+Lite+di+BeetPOS.%0A%0AHarga%3A+Hubungi+kami+untuk+harga%0A%0AFitur%3A%0A1.+Core+POS+System%0A2.+Inventory+Management%0A3.+Basic+Reporting%0A4.+Customer+Management%0A5.+Email+Support%0A%0AMohon+info+lebih+lanjut.&type=phone_number&app_absent=0"
      : "https://api.whatsapp.com/send/?phone=62895617697701&text=Halo%2C+saya+tertarik+dengan+paket+Full+di+BeetPOS.%0A%0AHarga%3A+Hubungi+kami+untuk+harga%0A%0AFitur%3A%0A1.+All+Lite+Features%0A2.+Advanced+Analytics%0A3.+Customer+Loyalty+Program%0A4.+E-commerce+Integration%0A5.+Priority+Phone+Support%0A%0AMohon+info+lebih+lanjut.&type=phone_number&app_absent=0"
  }
  target="_blank"
  rel="noopener noreferrer"
  className={
    "mt-10 block text-center py-3.5 rounded-full font-medium transition-all " +
    (p.highlight
      ? "bg-white text-ink hover:bg-bp-blue-50"
      : "bg-ink text-white hover:bg-bp-blue-700")
  }
>
  Pilih Paket
</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
