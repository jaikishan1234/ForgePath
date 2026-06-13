import { ArrowRight, ChevronRight, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppData } from "../context/AppContext";

function Hero() {
  const { isAuth } = useAppData();

  return (
    <section className="relative pt-36 pb-28 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background Orbs */}
      <div
        className="orb w-[600px] h-[600px] bg-orange-500 -top-40 left-1/2 -translate-x-1/2"
        style={{ opacity: 0.12 }}
      />

      <div
        className="orb w-80 h-80 bg-amber-500 bottom-0 right-10"
        style={{ opacity: 0.1 }}
      />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 feature-pill mb-6 animate-fade-in">
        <Hammer size={11} className="text-orange-400" />
        <span>AI-Powered Career Growth Platform</span>
      </div>

      {/* Heading */}
      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight max-w-5xl mb-6 animate-slide-up"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Forge Your Career Path
        <br />
        <span className="text-gradient">
          With AI-Powered Guidance
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 animate-slide-up"
        style={{ animationDelay: "0.1s" }}
      >
        Analyze your resume, discover matching opportunities,
        build stronger applications, and prepare for interviews —
        all from one intelligent platform.
      </p>

      {/* CTA */}
      <div
        className="flex flex-col sm:flex-row items-center gap-3 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        <Link
          to={isAuth ? "/jobmatcher" : "/login"}
          className="btn-primary px-7 py-3.5 rounded-xl text-base font-semibold"
        >
          {isAuth ? (
            <span className="flex items-center gap-2">
              Find Matching Jobs <ArrowRight size={16} />
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Start for Free <ArrowRight size={16} />
            </span>
          )}
        </Link>

        <a
          href="#features"
          className="text-sm text-white/45 hover:text-orange-400 transition-colors flex items-center gap-1.5"
        >
          See how it works <ChevronRight size={14} />
        </a>
      </div>

      {/* Small text */}
      <p className="text-white/25 text-xs mt-6">
        First 3 analyses free • No credit card required
      </p>

      {/* Demo ATS Card */}
      <div
        className="mt-16 glass-card px-8 py-5 flex items-center gap-6 animate-slide-up"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="flex flex-col items-center">
          <span
            className="text-4xl font-black text-orange-400"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            87
          </span>

          <span className="text-[10px] text-white/35 uppercase tracking-widest">
            ATS Score
          </span>
        </div>

        <div className="h-10 w-px bg-white/10" />

        <div className="flex flex-col gap-1 text-left">
          <span className="text-xs text-orange-400 font-medium">
            ✓ Strong keywords detected
          </span>

          <span className="text-xs text-yellow-400 font-medium">
            ⚠ Missing quantified impact
          </span>

          <span className="text-xs text-white/40 font-medium">
            3 job matches found
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;