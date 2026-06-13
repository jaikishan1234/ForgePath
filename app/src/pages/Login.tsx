import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppData } from "../context/AppContext";
import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { Hammer } from "lucide-react";
import { features } from "../utils";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setIsAuth } = useAppData();

  const handleGoogleLogin = async (authResult: any) => {
    setLoading(true);

    try {
      const result = await axios.post(`${server}/api/user/login`, {
        code: authResult["code"],
      });

      localStorage.setItem("token", result.data.token);

      toast.success(result.data.message);

      setUser(result.data.user);
      setIsAuth(true);

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Problem while login");
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleLogin,
    onError: handleGoogleLogin,
    flow: "auth-code",
  });

  return (
    <div className="bg-page min-h-screen flex items-center justify-center p-4">
      {/* Background Orbs */}
      <div className="orb w-96 h-96 bg-orange-500 -top-20 -left-20" />
      <div className="orb w-80 h-80 bg-amber-500 bottom-10 right-0" />
      <div className="orb w-64 h-64 bg-yellow-500 top-1/2 left-1/2 -translate-x-1/2" />

      {/* Login Card */}
      <div className="glass-card w-full max-w-md p-10 flex flex-col items-center gap-8 z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
            <Hammer size={26} className="text-white" />
          </div>

          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Forge<span className="text-orange-400">Path</span>
          </h1>

          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            Forge your career path with AI-powered resume analysis, job
            matching, and interview preparation.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-2">
          {features.map(({ icon: Icon, label }) => (
            <span key={label} className="feature-pill">
              <Icon size={11} className="text-orange-400" />
              {label}
            </span>
          ))}
        </div>

        <div className="divider-subtle"></div>

        {/* Login */}
        <div className="w-full flex flex-col gap-3">
          <p className="text-center text-xs text-white/30 uppercase tracking-widest font-medium">
            Continue with
          </p>

          <button
            className="btn-google"
            onClick={googleLogin}
            disabled={loading}
          >
            {loading ? (
              <p className="text-gray-400 animate-pulse">
                Please Wait...
              </p>
            ) : (
              <>
                <img
                  src="/google.svg"
                  alt="Google"
                  className="w-4 h-4"
                />
                Sign in with Google
              </>
            )}
          </button>
        </div>

        {/* Footer Text */}
        <div className="text-[11px] text-white/25 text-center leading-relaxed">
          By signing in you agree to our{" "}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-orange-400 transition-colors"
          >
            Terms
          </a>{" "}
          &{" "}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-orange-400 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;