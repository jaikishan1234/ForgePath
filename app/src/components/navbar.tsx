import { useState } from "react";
import { useAppData } from "../context/AppContext";
import { Link } from "react-router-dom";
import { Hammer, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuth, user } = useAppData();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-orange-500/10 bg-[#080b14]/80 backdrop-blur-xl">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/40">
          <Hammer size={18} className="text-white" />
        </div>

        <span
          className="font-bold text-lg tracking-tight text-white"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Forge<span className="text-orange-400">Path</span>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm">
        <Link
          to="/analyse"
          className="whitespace-nowrap relative text-white/60 hover:text-orange-400 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Analyze
        </Link>

        <Link
          to="/jobmatcher"
          className="whitespace-nowrap relative text-white/60 hover:text-orange-400 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Job Matcher
        </Link>

        <Link
          to="/resumebuilder"
          className="whitespace-nowrap relative text-white/60 hover:text-orange-400 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Resume Builder
        </Link>

        <Link
          to="/interviewprep"
          className="whitespace-nowrap relative text-white/60 hover:text-orange-400 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Interview Prep
        </Link>
      </div>

      {/* Desktop Auth */}
      <div className="hidden md:flex items-center gap-3">
        {isAuth ? (
          <Link
            to="/account"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/user.png"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10"
            />
            <span className="text-sm text-white/70">
              {user?.name?.split(" ")[0]}
            </span>
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm text-white/50 hover:text-orange-400 transition-colors px-4 py-2"
            >
              Sign In
            </Link>

            <Link
              to="/login"
              className="btn-primary text-sm px-5 py-2 rounded-lg"
            >
              Get Started Free
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white/60 hover:text-orange-400 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full inset-x-0 bg-[#080b14]/95 backdrop-blur-xl border-b border-orange-500/10 flex flex-col gap-5 px-6 py-6 md:hidden">
          <Link
            to="/analyse"
            className="text-white/60 hover:text-orange-400 transition-colors"
          >
            Analyze
          </Link>

          <Link
            to="/jobmatcher"
            className="text-white/60 hover:text-orange-400 transition-colors"
          >
            Job Matcher
          </Link>

          <Link
            to="/resumebuilder"
            className="text-white/60 hover:text-orange-400 transition-colors"
          >
            Resume Builder
          </Link>

          <Link
            to="/interviewprep"
            className="text-white/60 hover:text-orange-400 transition-colors"
          >
            Interview Prep
          </Link>

          {isAuth ? (
            <Link
              to="/account"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src="/user.png"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10"
              />
              <span className="text-sm text-white/70">
                {user?.name?.split(" ")[0]}
              </span>
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-white/50 hover:text-orange-400 transition-colors px-4 py-2 whitespace-nowrap"
              >
                Sign In
              </Link>

              <Link
                to="/login"
                className="btn-primary text-center text-sm px-5 py-2 rounded-lg"
              >
                Get Started Free
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
