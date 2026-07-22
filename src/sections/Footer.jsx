import logoSvg from "../assets/logo-C7x2HOp7.svg";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-ink text-white pt-10 pb-6 overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(16,185,129,.25), transparent 40%), radial-gradient(circle at 85% 80%, rgba(59,130,246,.3), transparent 45%)",
      }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 pb-8 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logoSvg} alt="Lifetech" className="h-10 brightness-0 invert" />
            </div>
            <p className="mt-6 text-white/70 max-w-md leading-relaxed">
              PT Lifetech Tanpa Batas
            </p>
            <p className="mt-3 text-white/60 max-w-md leading-relaxed">
              Green Lake City Ruko Food City No.58, Duri Kosambi, Cengkareng, Jakarta Barat 11750
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-white/50">Kontak</div>
            <ul className="mt-5 space-y-3 text-white/85">
              <li>
                <a href="https://wa.me/62895346009572" target="_blank" rel="noreferrer" className="hover:text-lt-green-300 transition-colors">
                  (+62) 895-3460-09572 (BeetPOS)
                </a>
              </li>
              <li>
                <a href="https://wa.me/6285133834350" target="_blank" rel="noreferrer" className="hover:text-lt-green-300 transition-colors">
                  (+62) 851-3383-4350 (Lifetech)
                </a>
              </li>
              <li>
                <a href="mailto:lifetechid@gmail.com" className="hover:text-bp-blue-300 transition-colors">
                  lifetechid@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-white/50">PT Lifetech Tanpa Batas</div>
            <ul className="mt-5 space-y-3 text-white/85">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#product" className="hover:text-white transition">Product</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/50">
          <div>Copyright ©2026, PT Lifetech Tanpa Batas</div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/6285133834350"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-30 h-14 w-14 rounded-full bg-lt-green-600 text-white shadow-2xl shadow-lt-green-900/40 flex items-center justify-center hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9a11.83 11.83 0 0 0-3.45-8.42ZM12.07 21.5h-.01a9.6 9.6 0 0 1-4.88-1.34l-.35-.21-3.75.99 1-3.66-.22-.37a9.58 9.58 0 0 1-1.5-5.11c0-5.31 4.32-9.63 9.63-9.63 2.57 0 4.98 1 6.8 2.82a9.55 9.55 0 0 1 2.81 6.8c0 5.31-4.32 9.63-9.53 9.71Zm5.28-7.19c-.29-.14-1.7-.84-1.97-.93-.26-.1-.45-.14-.65.14-.19.29-.75.93-.92 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.42s1.02 2.8 1.17 3c.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.61.68.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33Z" />
      </svg>
    </a>
  );
}
