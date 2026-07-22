/**
 * TEMPLATE HALAMAN PRODUK
 * Salin file ini untuk produk baru, rename sesuai nama produk.
 * Ganti semua placeholder yang ditandai TODO.
 *
 * Cara pakai:
 * 1. Salin file ini → src/pages/NamaProdukPage.jsx
 * 2. Ganti TODO di bawah
 * 3. Tambah route di App.jsx: <Route path="/product/nama" element={<NamaProdukPage />} />
 * 4. Tambah card di Products.jsx dengan href="/product/nama"
 */

import { useNavigate } from "react-router-dom";
import Footer, { WhatsAppFab } from "../sections/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

// TODO: Ganti dengan logo produk yang sesuai
// import productLogo from "../assets/NAMA-PRODUK.png";

// TODO: Isi fitur produk
const features = [
  {
    title: "Feature 1",
    text: "Description of feature 1.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Feature 2",
    text: "Description of feature 2.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "Feature 3",
    text: "Description of feature 3.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

// TODO: Isi testimonial
const testimonials = [
  { i: "A", name: "User Name", role: "Role", text: "Testimonial text here." },
  { i: "B", name: "User Name", role: "Role", text: "Testimonial text here." },
];

// TODO: Isi pricing
const pricing = [
  {
    name: "Basic",
    text: "Perfect for small businesses",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    highlight: false,
    waLink: "https://api.whatsapp.com/send/?phone=62895617697701&text=Basic+package+inquiry",
  },
  {
    name: "Pro",
    text: "Most popular for growing businesses",
    features: ["All Basic Features", "Feature 4", "Feature 5"],
    highlight: true,
    waLink: "https://api.whatsapp.com/send/?phone=62895617697701&text=Pro+package+inquiry",
  },
];

// TODO: Ganti warna accent — "blue" untuk bp-blue, "green" untuk lt-green
const ACCENT = "blue";

export default function TemplatePage() {
  const navigate = useNavigate();
  const accentText  = ACCENT === "blue" ? "text-bp-blue-600"   : "text-lt-green-600";
  const accentBg    = ACCENT === "blue" ? "bg-bp-blue-600"     : "bg-lt-green-600";
  const accentBg2   = ACCENT === "blue" ? "bg-bp-blue-700"     : "bg-lt-green-700";
  const accentFrom  = ACCENT === "blue" ? "from-bp-blue-50"    : "from-lt-green-50";
  const accentBorder= ACCENT === "blue" ? "border-bp-blue-100" : "border-lt-green-100";
  const accentShadow= ACCENT === "blue" ? "shadow-bp-blue-900/10" : "shadow-lt-green-900/10";

  return (
    <div className="relative">
      <Navbar mode={ACCENT} />

      {/* Back button */}
      <div className="fixed top-20 left-6 z-30">
        <button
          onClick={() => navigate(-1)}
          className={`inline-flex items-center gap-2 text-sm font-medium ${accentText} bg-white/80 backdrop-blur border ${accentBorder} px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all`}
        >
          ← Back
        </button>
      </div>

      <main>
        {/* HERO SECTION */}
        <section className={`relative pt-20 pb-24 overflow-hidden bg-linear-to-b ${accentFrom} to-white`}>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              {/* TODO: Ganti src logo */}
              {/* <img src={productLogo} alt="Product Logo" className="h-14 mb-8" /> */}
              <div className={`text-sm font-medium ${accentText} uppercase tracking-widest`}>Product</div>
              {/* TODO: Ganti judul */}
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 leading-[1.05]">
                Product Name <span className={accentText}>here</span>
              </h2>
              {/* TODO: Ganti deskripsi */}
              <p className="mt-6 text-lg text-ink-soft max-w-lg">
                Short description of what this product does and who it's for.
              </p>
            </div>
            <div className="lg:col-span-6">
              {/* TODO: Ganti dengan gambar dashboard/screenshot produk */}
              <div className={`relative rounded-3xl overflow-hidden border border-black/5 shadow-2xl ${accentShadow} bg-white h-64 flex items-center justify-center`}>
                <p className="text-ink-soft text-sm">Dashboard screenshot here</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className={`group rounded-2xl p-8 bg-white border border-black/5 hover:${accentBorder} hover:shadow-xl transition-all`}>
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-xl ${accentBg} text-white flex items-center justify-center shadow group-hover:${accentBg2} group-hover:scale-110 transition-all duration-200`}>
                    {f.icon}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mt-6">{f.title}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className={`text-sm font-medium ${accentText} uppercase tracking-widest`}>Testimonials</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Loved by users</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <figure key={i} className="rounded-3xl p-8 bg-white border border-black/5 hover:shadow-xl transition-shadow">
                  <blockquote className="text-ink-soft leading-relaxed">{t.text}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${accentBg} text-white font-display font-semibold flex items-center justify-center`}>
                      {t.i}
                    </div>
                    <div>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-sm text-ink-soft">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className={`relative py-20 bg-linear-to-b ${accentFrom}/70 to-white`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className={`text-sm font-medium ${accentText} uppercase tracking-widest`}>Pricing Plans</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Pilih Paket Yang Tepat</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pricing.map((p) => (
                <div key={p.name} className={`relative rounded-3xl p-10 border transition-all hover:-translate-y-1 ${p.highlight ? "bg-ink text-white border-ink shadow-2xl" : "bg-white border-black/5 shadow-sm hover:shadow-xl"}`}>
                  {p.highlight && (
                    <div className={`absolute -top-3 right-8 ${accentBg} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}>
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-3xl font-bold">{p.name}</h3>
                  <p className={`mt-2 ${p.highlight ? "text-white/70" : "text-ink-soft"}`}>{p.text}</p>
                  <ul className="mt-8 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${p.highlight ? `${accentBg} text-white` : `bg-bp-blue-100 text-bp-blue-700`}`}>✓</span>
                        <span className={p.highlight ? "text-white/90" : "text-ink"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 block text-center py-3.5 rounded-full font-medium transition-all ${p.highlight ? "bg-white text-ink hover:bg-gray-50" : `${accentBg} text-white hover:${accentBg2}`}`}
                  >
                    Pilih Paket
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
