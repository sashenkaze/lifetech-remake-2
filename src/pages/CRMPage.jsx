import { useNavigate } from "react-router-dom";
import { BeetHero, Features, HowItWorks, Testimonials, Pricing } from "../sections/Beet.jsx";
import Footer, { WhatsAppFab } from "../sections/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function CRMPage() {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <Navbar mode="blue" />

            {/* Back button */}
            <div className="fixed top-20 left-6 z-30">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-bp-blue-700 bg-white/80 backdrop-blur border border-bp-blue-100 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                    ← Back
                </button>
            </div>

            <main>
                <BeetHero />
                <Features />
                <HowItWorks />
                <Testimonials />
                <Pricing />
            </main>
            <Footer />
            <WhatsAppFab />
        </div>
    );
}