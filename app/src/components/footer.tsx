import { Hammer } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-orange-500/10 px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
            <Hammer size={14} className="text-white" />
          </div>

          <span
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="font-bold text-white text-sm"
          >
            Forge<span className="text-orange-400">Path</span>
          </span>
        </div>

        {/* Copyright */}
        <span className="text-xs text-white/35 text-center">
          © {new Date().getFullYear()} ForgePath. All rights reserved.
        </span>

        {/* Links */}
        <div className="flex items-center gap-5 text-xs">
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/35 hover:text-orange-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;