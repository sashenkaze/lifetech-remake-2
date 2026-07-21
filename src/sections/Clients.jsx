const clients = [
  { name: "Kaixin", img: "kaixin-Bp2sq6h8.png" },
  { name: "Lamak", img: "lamak-4MwW3pAG.png" },
  { name: "Bakti Kasih Anugerah", img: "bakti-CnTfB5tE.png" },
  { name: "Vexue", img: "vexue-CDzUheOS.png" },
  { name: "SARI TEKNOLOGI", img: "sariteknologi-B3QRT4wn.png" },
  { name: "Ultra Voucher", img: "ultra-EOtQDkHq.png" },
  { name: "Plant Culture", img: "plant-ToimtNWt.png" },
];

export default function Clients() {
  const list = [...clients, ...clients];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Our <span className="text-lt-green-600">Clients</span>
        </h2>
        <p className="mt-4 text-ink-soft max-w-2xl mx-auto">
          Trusted by innovative brands from diverse industries that share our passion for technology and design.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />
        <div className="overflow-hidden">
          <div className="flex gap-16 marquee-track w-max items-center">
            {list.map((c, i) => (
              <div key={i} className="shrink-0 h-20 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src={`/assets/${c.img}`} alt={c.name} className="max-h-16 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
