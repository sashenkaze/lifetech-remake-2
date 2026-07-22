import { Link } from "react-router-dom";
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
import antimoneyImg from "../assets/antimoney-DBkmEdCb.svg";
import swiftImg from "../assets/swift-D6gxFjFg.svg";
import financialImg from "../assets/financial-DJ0L8Pdw.svg";
import beetposLogoImg from "../assets/BEETPOS-B5eREQlo.png";

const allProducts = [
  { title: "Human Resources & Payroll System", img: humanImg },
  { title: "Customer Bootstramble Management (CRM)", img: customerImg },
  { title: "Search Engine Optimization (SEO)", img: searchImg },
  { title: "Document Management System", img: documentImg },
  { title: "Information System Product", img: informationImg },
  { title: "Card Management System", img: cardImg },
  { title: "Switching", img: switchingImg },
  { title: "Multi-Vendor System", img: multiImg },
  { title: "Risk Management", img: riskImg },
  { title: "Fraud Detection System", img: artificalImg },
  { title: "Digital Engagement", img: digitalImg },
  { title: "Core Banking System", img: coreImg },
  { title: "Anti Money Laundering System", img: antimoneyImg },
  { title: "SWIFT Messaging System", img: swiftImg },
  { title: "Financial Technology Solutions", img: financialImg },
];

// Card biasa tanpa link
function Card({ title, img }) {
  return (
    <div className="group relative rounded-2xl bg-white border border-black/5 p-6 hover:border-lt-green-200 hover:shadow-xl hover:shadow-lt-green-900/5 transition-all">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-lt-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      <div className="w-16 h-16 rounded-xl bg-lt-green-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <img src={img} alt={title} className="w-10 h-10" />
      </div>
      <h3 className="font-display font-semibold text-lg text-ink leading-snug">{title}</h3>
      <div className="mt-4 h-0.5 w-8 bg-lt-green-600 group-hover:w-full transition-all duration-500" />
    </div>
  );
}

// Card produk dengan halaman tersendiri — klik diarahkan ke route
function ProductPageCard({ title, img, href, accent = "blue", tag }) {
  return (
    <Link
      to={href}
      className={
        "group relative rounded-2xl border p-6 transition-all block " +
        (accent === "blue"
          ? "bg-bp-blue-50 border-bp-blue-100 hover:border-bp-blue-300 hover:shadow-xl hover:shadow-bp-blue-900/5"
          : "bg-lt-green-50 border-lt-green-100 hover:border-lt-green-300 hover:shadow-xl hover:shadow-lt-green-900/5")
      }
    >
      {tag && (
        <div className={
          "absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full " +
          (accent === "blue" ? "bg-bp-blue-600 text-white" : "bg-lt-green-600 text-white")
        }>
          {tag}
        </div>
      )}
      <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform bg-white shadow-sm">
        <img src={img} alt={title} className="w-12 h-auto object-contain" />
      </div>
      <h3 className="font-display font-semibold text-lg text-ink leading-snug">{title}</h3>
      <div className={
        "mt-3 text-sm font-medium flex items-center gap-1 " +
        (accent === "blue" ? "text-bp-blue-600" : "text-lt-green-600")
      }>
        Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
      <div className={
        "mt-3 h-0.5 w-8 group-hover:w-full transition-all duration-500 " +
        (accent === "blue" ? "bg-bp-blue-500" : "bg-lt-green-600")
      } />
    </Link>
  );
}

export default function Products() {
  return (
    <section id="product" className="relative min-h-screen py-20 bg-linear-to-b from-white to-lt-green-50/50 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-14">
          <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Our Product</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Our Solutions
          </h2>
        </div>

        {/* Featured products dengan halaman tersendiri */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          <ProductPageCard
            title="BeetPOS"
            img={beetposLogoImg}
            href="/product/beetpos"
            accent="blue"
            tag="POS System"
          />
          {/* Template produk kedua — salin dan sesuaikan */}
          <ProductPageCard
            title="Product Name Here"
            img={beetposLogoImg}
            href="/product/template"
            accent="green"
            tag="Coming Soon"
          />
        </div>

        {/* Solutions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {allProducts.map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
