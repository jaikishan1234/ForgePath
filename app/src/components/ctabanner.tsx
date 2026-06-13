import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto glass-card p-12 text-center relative overflow-hidden">
        {/* Background Orbs */}
        <div
          className="orb w-64 h-64 bg-orange-500 -top-10 -left-10"
          style={{ opacity: 0.15 }}
        />

        <div
          className="orb w-48 h-48 bg-amber-500 -bottom-10 -right-10"
          style={{ opacity: 0.15 }}
        />

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Ready To Forge Your
          <br />
          <span className="text-gradient">Career Path?</span>
        </h2>

        {/* Description */}
        <p className="text-white/45 mb-8 max-w-xl mx-auto relative z-10">
          Analyze your resume, discover matching opportunities,
          and prepare for interviews with AI-powered guidance
          designed to help you move forward with confidence.
        </p>

        {/* CTA */}
        <Link
          to="/analyse"
          className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold relative z-10"
        >
          Analyze My Resume
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;