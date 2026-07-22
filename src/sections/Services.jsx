import serImg from "../assets/ser-DGRl8aWS.svg";
import services1Img from "../assets/services-DgBB8G5S.svg";
import services2Img from "../assets/services2-Czd3Ugej.svg";
import services3Img from "../assets/services3-e_84v2i9.svg";
import services4Img from "../assets/services4-B8RKmz24.svg";

const services = [
  {
    title: "Mobile Development",
    img: serImg,
    text: "We will assist you in building mobile application, including Android, iOS or cross platform application.",
  },
  {
    title: "Application Development",
    img: services1Img,
    text: "We will provide solutions to all your application development and integration, including desktop and website applications.",
  },
  {
    title: "Sistem Integration",
    img: services2Img,
    text: "We will help you integrate the best system for your problems, directly from our company associates.",
  },
  {
    title: "Project Management",
    img: services3Img,
    text: "We will assist you to achieve the objectives of a particular project, according to agreed criteria and parameters.",
  },
  {
    title: "Support & Helpdesk",
    img: services4Img,
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

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl p-8 border overflow-hidden transition-all hover:-translate-y-1 bg-white border-black/5 hover:shadow-xl hover:shadow-lt-green-900/5 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-lt-green-50">
                <img
                  src={s.img}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}