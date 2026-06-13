import { Hammer } from "lucide-react";

export default function Loading() {
  return (
    <div className="bg-page flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-5">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30 animate-pulse">
          <Hammer size={24} className="text-white" />
        </div>

        <div className="text-center">
          <h2
            className="font-bold text-lg"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Forge<span className="text-orange-400">Path</span>
          </h2>

          <p className="text-white/30 text-xs tracking-widest uppercase mt-2 animate-pulse">
            Forging your career path...
          </p>
        </div>
      </div>
    </div>
  );
}