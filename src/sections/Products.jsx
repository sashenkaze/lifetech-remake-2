import { Link } from "react-router-dom";
import { usePageTransition } from "../hooks/usePageTransition.js";
import iotHealthcareImg from "../assets/iothealthcare.svg";
import lmsImg from "../assets/lms.svg";
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
import beetposLogoImg from "../assets/beetpos-svg.svg";
import crmtrackLogoImg from "../assets/crmt-logo.svg";
import arqaImg from "../assets/arqa.svg";

const allProducts = [
  { title: "BeetPOS", img: beetposLogoImg, href: "/product/beetpos" },
  { title: "CRMTRACK", img: crmtrackLogoImg, href: "/product/crm" },
  { title: "Testing Tools - ARQA", img: arqaImg, href: "/product/arqa" },
  { title: "Learn Management System", img: lmsImg, href: "/product/lms" },
  // { title: "IoT Healthcare", img: iotHealthcareImg, href: "/product/iothealthcare" },
  { title: "IoT Healthcare", img: iotHealthcareImg, href: "" },
  { title: "Card Management System", img: cardImg, href: "" },
  { title: "Multi-Vendor System", img: multiImg, href: "" },
  { title: "Risk Management", img: riskImg, href: "" },
  { title: "Fraud Detection System", img: artificalImg, href: "" },
  { title: "Digital Engagement", img: digitalImg, href: "" },
  { title: "Core Banking System", img: coreImg, href: "" },
  { title: "SWIFT Messaging System", img: swiftImg, href: "" },
  { title: "Financial Technology Solutions", img: financialImg, href: "" },
  { title: "Document Management System", img: documentImg, href: "" },
  { title: "Information System Product", img: informationImg, href: "" },
  { title: "Anti Money Laundering System", img: antimoneyImg, href: "" },
];

function Card({ title, img, href }) {
  const navigate = usePageTransition();
  const isExternal = href.startsWith("/");
  
  const handleClick = (e) => {
    if (isExternal) {
      e.preventDefault();
      navigate(href);
    }
  };

  const inner = (
    <>
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-lt-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      <div className="w-16 h-16 rounded-xl bg-lt-green-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <img src={img} alt={title} className="w-10 h-10 object-contain" />
      </div>
      <h3 className="font-display font-semibold text-lg text-ink leading-snug">{title}</h3>
      <div className="mt-4 h-0.5 w-8 bg-lt-green-600 group-hover:w-full transition-all duration-500" />
    </>
  );

  const className =
    "group relative rounded-2xl bg-white border border-black/5 p-6 hover:border-lt-green-200 hover:shadow-xl hover:shadow-lt-green-900/5 transition-all block";

  if (isExternal) {
    return (
      <Link to={href} onClick={handleClick} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a className={className}>
      {inner}
    </a>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {allProducts.map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
