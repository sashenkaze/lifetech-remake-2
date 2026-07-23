import { useNavigate } from "react-router-dom";
import Footer, { WhatsAppFab } from "../sections/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import dashboardImg from "../assets/lms.png"

const modules = [
  {
    category: "Dashboard",
    items: ["Summary Data"],
  },
  {
    category: "Operational",
    items: ["Registration", "Record Student Attendance", "Value Input"],
  },
  {
    category: "Masters",
    items: [
      "Subject Master",
      "Material Master",
      "Class Master",
      "Payment Master",
      "Competition Master",
      "Report Weight",
      "Employee",
      "Teacher Data",
      "Student Data"
    ],
  },
  {
    category: "Scheduling",
    items: [
      "Study Schedule",
      "Exam Schedule",
      "Teacher Schedule",
      "Study Schedule",
      "Exam Schedule",
      "Teacher Schedule",
      "Student Report",
      "Clock Setting",
      "Feedback",
      "User",
      "Role"
    ],
  },
];

const whyChoose = [
  {
    title: "Seamless Content Management",
    desc: "Centralized platform to upload, organize, and update materials easily.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m3 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Customized",
    desc: "Flexible features tailored to your school's unique needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support & Training",
    desc: "Full support and training for students, teachers, and administrators.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72" />
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
        <path d="M12 14c-5.33 0-8 2.67-8 4v1h8.5" />
        <path d="m17 17 2 2 4-4" />
      </svg>
    ),
  },
];

const whatWeOffer = [
  {
    title: "Easy-to-Use",
    desc: "Designed with a simple and intuitive interface for everyday use.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M21.18 8.02c-1-2.3-2.85-4.17-5.16-5.18" />
      </svg>
    ),
  },
  {
    title: "Collaboration App",
    desc: "Supports collaboration between students, teachers, and administrators.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Single-App Platform",
    desc: "Access all essential features through one integrated platform.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    ),
  },
  {
    title: "Class Management",
    desc: "Manage classes and academic activities in one centralized system.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
];

export default function LMSPage() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <Navbar mode="green" />

      {/* Back button */}
      <div className="fixed top-20 left-6 z-30">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-lt-green-700 bg-white/80 backdrop-blur border border-lt-green-100 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          ← Back
        </button>
      </div>

      <main>
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-lt-green-50 to-white flex flex-col justify-center pt-24 pb-20">
          <div className="absolute -top-40 -right-40 w-xl h-144 rounded-full bg-lt-green-100 blur-3xl opacity-60" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-emerald-200/50 blur-3xl opacity-50" />
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-lt-green-100 px-4 py-1.5 text-sm text-lt-green-700 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-lt-green-500 animate-pulse" />
                Education Technology
              </div>
              <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Platform</div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 leading-[1.05]">
                Learning <span className="text-lt-green-600">Management</span> System
              </h1>
              <p className="mt-6 text-lg text-ink-soft max-w-lg leading-relaxed">
                Our LMS offers a wide range of features that empower you to deliver effective and interactive learning content — from customizable course creation tools to multimedia support and interactive assessments.
              </p>
            </div>
            <div className="lg:col-span-6">
              {/* Placeholder hero image */}
                <div className="relative rounded-3xl overflow-hidden border border-black/5 shadow-2xl shadow-lt-green-900/10 bg-white">
                  <img src={dashboardImg} alt="CRMTrack Dashboard" className="w-full h-auto" />
                </div>
            </div>
          </div>
        </section>

        {/* System Functionality Overview */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Overview</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
                System Functionality <span className="text-lt-green-600">Overview</span>
              </h2>
              <div className="mt-3 h-0.5 w-12 bg-lt-green-600" />
              <p className="mt-8 text-lg text-ink-soft leading-relaxed">
                Our LMS platform enables you to develop engaging and impactful learning modules tailored to your organization's unique needs. Whether you're training employees, partners, or customers, our LMS provides a versatile platform for delivering educational content in a variety of formats — videos, presentations, quizzes, and simulations.
              </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Video Lessons", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" /></svg> },
                { label: "Presentations", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20" /><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" /><path d="m7 21 5-5 5 5" /></svg> },
                { label: "Quizzes", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
                { label: "Simulations", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> },
              ].map((item) => (
                <div key={item.label} className="group flex flex-col items-center text-center p-6 rounded-2xl border border-black/5 bg-white hover:border-lt-green-200 hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-xl bg-lt-green-50 text-lt-green-600 flex items-center justify-center mb-4 group-hover:bg-lt-green-600 group-hover:text-white transition-all duration-200">
                    {item.icon}
                  </div>
                  <span className="font-display font-semibold text-ink">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Modules */}
        <section className="relative py-20 bg-lt-green-50/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Modules</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
                Our <span className="text-lt-green-600">Modules</span>
              </h2>
              <div className="mt-3 h-0.5 w-12 bg-lt-green-600" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
              {modules.map((mod) => (
                <div key={mod.category} className="rounded-2xl bg-white border border-black/5 p-5 hover:border-lt-green-200 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-lt-green-500" />
                    <h3 className="font-display font-semibold text-ink">{mod.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-lt-green-500 shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us + What We Offer */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Left — Why Choose Us */}
              <div>
                <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Advantages</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                  Why <span className="text-lt-green-600">Choose Us?</span>
                </h2>
                <div className="mt-3 h-0.5 w-10 bg-lt-green-500" />

                <div className="mt-10 space-y-5">
                  {whyChoose.map((item, i) => (
                    <div key={item.title} className="group flex gap-4 items-start p-4 rounded-2xl border border-black/5 hover:border-lt-green-200 hover:shadow-md transition-all bg-white">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-lt-green-50 text-lt-green-600 flex items-center justify-center group-hover:bg-lt-green-600 group-hover:text-white transition-all duration-200">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-display font-semibold text-ink">{item.title}</div>
                        <div className="text-sm text-ink-soft mt-1 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — What We Offer */}
              <div>
                <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Features</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                  What We <span className="text-lt-green-600">Offer</span>
                </h2>
                <div className="mt-3 h-0.5 w-10 bg-lt-green-500" />

                <div className="mt-10 grid sm:grid-cols-2 gap-5">
                  {whatWeOffer.map((item) => (
                    <div key={item.title} className="group rounded-2xl p-5 border border-black/5 bg-lt-green-50/60 hover:border-lt-green-300 hover:shadow-md transition-all">
                      <div className="w-11 h-11 rounded-xl bg-white text-lt-green-600 flex items-center justify-center mb-4 shadow-sm group-hover:bg-lt-green-600 group-hover:text-white transition-all duration-200">
                        {item.icon}
                      </div>
                      <div className="font-display font-semibold text-ink text-sm">{item.title}</div>
                      <p className="mt-1.5 text-xs text-ink-soft leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
