import { useNavigate } from "react-router-dom";
import Footer, { WhatsAppFab } from "../sections/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import dashboardImg from "../assets/crm-dashboard-img.png";
import crmtrackLogo from "../assets/CRMTrack-logo.png";

const features = [
    {
        title: "Multi-Channel & WhatsApp Integration",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
        ),
    },
    {
        title: "Mobile CRM with GPS Tracking",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
        ),
    },
    {
        title: "Fast and Optimized High ROI",
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
        title: "Highly Flexible & Customizable System",
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
        title: "Integrated Platform AI",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 21v-6" />
                <path d="M12 21V3" />
                <path d="M19 21V9" />
            </svg>
        ),
    },
    {
        title: "Compatible & Scalable",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
        ),
    },
    {
        title: "Audit Trail",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
    },
    {
        title: "24/7 Support",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75" />
            </svg>
        ),
    },
];


export default function IotHealthcarePage() {
    const navigate = useNavigate();
    
        return (
            <div className="relative">
                <Navbar mode="green" />
    
                {/* Back button */}
                <div className="fixed top-20 left-6 z-30">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-800 bg-white/80 backdrop-blur border border-lt-green-100 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                        ← Back
                    </button>
                </div>
    
                <main>
                    {/* Hero */}
                    <section className="relative min-h-screen pt-55 pb-55 overflow-hidden bg-linear-to-b from-lt-green-50 to-white flex flex-col justify-center">
                        <div className="absolute -top-40 -right-40 w-xl h-144 rounded-full bg-lt-green-100 blur-3xl opacity-70" />
                        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-emerald-200/50 blur-3xl opacity-60" />
                        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-6">
                                <img src={crmtrackLogo} alt="CRMTrack" className="h-14 mb-8" />
                                <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Features</div>
                                <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 leading-[1.05]">
                                    STILL in development! <span className="text-lt-green-600">i feel like doing another part first ;)</span>
                                </h2>
                                <p className="mt-6 text-lg text-ink-soft max-w-lg">
                                    Built to support companies of all sizes with flexible, scalable, and data-driven technology.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <div className="relative rounded-3xl overflow-hidden border border-black/5 shadow-2xl shadow-lt-green-900/10 bg-white">
                                    <img src={dashboardImg} alt="CRMTrack Dashboard" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </section>
    
                    {/* Why Choose */}
                    <section className="relative py-20">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="mb-12">
                                <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Benefits</div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-[1.05]">
                                    Why Choose <span className="text-lt-green-600">CRMTrack?</span>
                                </h2>
                                <div className="mt-3 h-0.5 w-12 bg-lt-green-600" />
                            </div>
    
                            <div className="relative">
                                <div className="hidden md:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-0.5 bg-linear-to-b from-transparent via-lt-green-300/50 to-transparent pointer-events-none" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                    {features.map((f, i) => (
                                        <div
                                            key={f.title}
                                            className="group flex items-center justify-between rounded-xl p-4 bg-white border border-black/5 hover:border-lt-green-200 hover:shadow-md transition-all"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 bg-lt-green-600/10 text-lt-green-600 group-hover:bg-lt-green-600 group-hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                </div>
                                                <h3 className="font-display text-sm sm:text-base font-medium text-ink">
                                                    {f.title}
                                                </h3>
                                            </div>
                                            <div className="shrink-0 ml-2 h-0.5 w-4 bg-lt-green-100 transition-all group-hover:w-6 group-hover:bg-lt-green-500" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
    
                    {/* Main Feature */}
                    <section className="relative py-20 bg-lt-green-50/40">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="mb-12">
                                <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Platform</div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
                                    Main <span className="text-lt-green-600">Feature</span>
                                </h2>
                                <div className="mt-3 h-0.5 w-12 bg-lt-green-600" />
                            </div>
    
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { label: "Dashboard", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg> },
                                    { label: "Dynamic Workflow", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg> },
                                    { label: "User Management", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
                                    { label: "Master Data", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg> },
                                    { label: "Starting Prospect", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/></svg> },
                                    { label: "Customers", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg> },
                                    { label: "User Location", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> },
                                    { label: "Audit Trail", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
                                    { label: "Activity Sales", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
                                    { label: "Report", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21v-6"/><path d="M12 21V3"/><path d="M19 21V9"/></svg> },
                                    { label: "Task", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
                                    { label: "Lead Management", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="group flex items-center gap-4 p-4 rounded-2xl border border-black/5 bg-white hover:shadow-md hover:border-lt-green-200 transition-all"
                                    >
                                        <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-lt-green-50 text-lt-green-600 group-hover:bg-lt-green-600 group-hover:text-white transition-all duration-200">
                                            {item.icon}
                                        </div>
                                        <span className="font-display font-medium text-ink text-sm sm:text-base">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
    
                    {/* Business Impact + All Sizes */}
                    <section className="relative py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
    
                                {/* Left — Proven Business Impact */}
                                <div>
                                    <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Results</div>
                                    <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                                        Proven Business <span className="text-lt-green-600">Impact</span>
                                    </h2>
                                    <div className="mt-3 h-0.5 w-10 bg-lt-green-500" />
    
                                    <div className="mt-10 grid sm:grid-cols-2 gap-5">
                                        {[
                                            { num: "150%", label: "Improvement in lead conversion rates" },
                                            { num: "35%",  label: "Revenue increase per salesperson" },
                                            { num: "20%",  label: "Improvement in customer retention" },
                                            { num: "18%",  label: "Shorter sales cycles" },
                                        ].map((stat) => (
                                            <div
                                                key={stat.num}
                                                className="rounded-2xl p-6 border border-lt-green-100 bg-lt-green-50/60 hover:shadow-md hover:border-lt-green-200 transition-all"
                                            >
                                                <div className="font-display text-4xl font-bold text-lt-green-600">
                                                    {stat.num}
                                                </div>
                                                <p className="mt-2 text-sm text-ink-soft leading-snug">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
    
                                {/* Right — Built for All Sizes */}
                                <div>
                                    <div className="text-sm font-medium text-lt-green-700 uppercase tracking-widest">Scalability</div>
                                    <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                                        Built for Businesses <span className="text-lt-green-600">of All Sizes</span>
                                    </h2>
                                    <div className="mt-3 h-0.5 w-10 bg-lt-green-500" />
    
                                    <p className="mt-8 text-ink-soft leading-relaxed">
                                        Whether you're an SME looking to engage customers more effectively, or a large enterprise needing a robust CRM ecosystem — our CRM scales with your business.
                                    </p>
    
                                    <div className="mt-8 space-y-4">
                                        {[
                                            { title: "Small & Medium Businesses", desc: "Quick setup, low overhead, immediate ROI from day one." },
                                            { title: "Large Enterprises", desc: "Custom workflows, role-based access, and enterprise-grade integrations." },
                                            { title: "Growing Teams", desc: "Scales seamlessly as your team expands — no re-implementation needed." },
                                        ].map((item, i) => (
                                            <div key={item.title} className="flex gap-4 items-start">
                                                <div className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-lt-green-600 text-white flex items-center justify-center text-xs font-bold font-display">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <div className="font-display font-semibold text-ink text-sm">{item.title}</div>
                                                    <div className="text-sm text-ink-soft mt-0.5">{item.desc}</div>
                                                </div>
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