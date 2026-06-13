import { CheckCircle2, Star } from "lucide-react";
import { Features as features } from "../utils";

function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="feature-pill inline-flex mb-4">
          <Star size={11} className="text-orange-400" />
          Everything you need
        </span>

        <h2
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Everything You Need To
          <br />
          <span className="text-gradient">
            Forge Your Career Path
          </span>
        </h2>

        <p className="text-white/45 mt-4 max-w-2xl mx-auto leading-relaxed">
          Analyze your resume, discover matching opportunities,
          prepare for interviews, and confidently navigate your
          next career move with AI-powered guidance.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map(
          ({ icon: Icon, color, glow, title, desc, bullets }) => (
            <div
              key={title}
              className="
                glass-card
                p-8
                flex
                flex-col
                gap-5
                group
                hover:border-orange-500/20
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div
                className={`
                  w-12 h-12 rounded-xl
                  bg-gradient-to-br
                  ${color}
                  flex items-center justify-center
                  shadow-xl
                  ${glow}
                `}
              >
                <Icon size={20} className="text-white" />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {title}
                </h3>

                <p className="text-white/45 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-sm text-white/60"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-orange-400 shrink-0"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Features;