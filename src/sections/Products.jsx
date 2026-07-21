import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import semua gambar produk
import humanImg from "../assets/human-Bx1kiDJp.svg";
import customerImg from "../assets/customer-M9LGYp1A.svg";
import searchImg from "../assets/search-DbVPPTzh.svg";
import documentImg from "../assets/document-DQneznOd.svg";
import informationImg from "../assets/information-DUdVVZIc.svg";
import artificalImg from "../assets/artifical-DqrJOi0u.svg";
import cardImg from "../assets/card-1LzaiJGi.svg";
import switchingImg from "../assets/switching-wZ_xB0yE.svg";
import multiImg from "../assets/multi-BY1QT8iF.svg";
import riskImg from "../assets/risk--CJlNFFM.svg";
import digitalImg from "../assets/digital-C32MM46E.svg";
import coreImg from "../assets/core-COObDV3a.svg";
import wealtImg from "../assets/wealt-BFbkBAIX.svg";
import antimoneyImg from "../assets/antimoney-DBkmEdCb.svg";
import forexImg from "../assets/forex-ZkqmSPdB.svg";
import tradeImg from "../assets/trade-DiHlmgJa.svg";
import microImg from "../assets/micro-DpE66LDm.svg";
import swiftImg from "../assets/swift-D6gxFjFg.svg";
import financialImg from "../assets/financial-DJ0L8Pdw.svg";

const solutions = [
  { title: "Human Resources & Payroll System", img: humanImg },
  { title: "Customer Bootstramble Management (CRM)", img: customerImg },
  { title: "Search Engine Optimization (SEO)", img: searchImg },
  { title: "Document Management System", img: documentImg },
  { title: "Information System Product", img: informationImg },
  { title: "Artificial Intelligence Implementation", img: artificalImg },
  { title: "Card Management System", img: cardImg },
  { title: "Switching", img: switchingImg },
  { title: "Multi-Vendor System", img: multiImg },
  { title: "Risk Management", img: riskImg },
  { title: "Fraud Detection System", img: artificalImg },
  { title: "Digital Engagement", img: digitalImg },
];

const banking = [
  { title: "Core Banking System", img: coreImg },
  { title: "Wealth Management System", img: wealtImg },
  { title: "Anti Money Laundering System", img: antimoneyImg },
  { title: "Forex Trading System", img: forexImg },
  { title: "Trade Finance System", img: tradeImg },
  { title: "Micro Finance System", img: microImg },
  { title: "SWIFT Messaging System", img: swiftImg },
  { title: "Financial Technology Solutions", img: financialImg },
];

function Card({ title, img, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-white border border-black/5 p-6 hover:border-lt-green-200 hover:shadow-xl hover:shadow-lt-green-900/5 transition-all"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lt-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      <div className="w-16 h-16 rounded-xl bg-lt-green-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <img src={img} alt={title} className="w-10 h-10" />
      </div>
      <h3 className="font-display font-semibold text-lg text-ink leading-snug">{title}</h3>
      <div className="mt-4 h-[2px] w-8 bg-lt-green-600 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function Products() {
  const [tab, setTab] = useState("solutions");
  const data = tab === "solutions" ? solutions : banking;
  return (
    <section id="product" className="relative py-32 bg-gradient-to-b from-white to-lt-green-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Our Product</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
              {tab === "solutions" ? "Our Solutions" : "Our Banking Solutions"}
            </h2>
          </div>
          <div className="inline-flex rounded-full bg-white border border-black/10 p-1 self-start lg:self-end shadow-sm">
            <button
              onClick={() => setTab("solutions")}
              className={"px-6 py-2.5 rounded-full text-sm font-medium transition-all " + (tab === "solutions" ? "bg-lt-green-600 text-white shadow" : "text-ink-soft hover:text-ink")}
            >
              Our Solutions
            </button>
            <button
              onClick={() => setTab("banking")}
              className={"px-6 py-2.5 rounded-full text-sm font-medium transition-all " + (tab === "banking" ? "bg-lt-green-600 text-white shadow" : "text-ink-soft hover:text-ink")}
            >
              Our Banking Solutions
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {data.map((s, i) => (
              <Card key={s.title} {...s} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
