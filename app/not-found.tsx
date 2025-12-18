'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020E46] overflow-hidden ">
      <div className="text-center">
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold mb-4 tracking-tighter">
            <span className="neon-text-404 animate-pulse-slow">404</span>
          </h1>

          <div className="absolute inset-0 blur-3xl opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full animate-ping-slow"></div>
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-gray-200 mb-6">
          <span className="neon-subtitle">Page Not Found</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-md mx-auto text-lg">
          The page you're looking for doesn't exist or has been removed.
        </p>

        <Link href="/" className="relative inline-block group">
          <span className="relative z-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
            Back to Home
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 7}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes neon-flicker {
          0%,
          19%,
          21%,
          23%,
          25%,
          54%,
          56%,
          100% {
            text-shadow:
              0 0 10px #00b7ff,
              0 0 20px #00b7ff,
              0 0 30px #00b7ff,
              0 0 40px #0088ff,
              0 0 70px #0088ff,
              0 0 80px #0088ff,
              0 0 100px #0088ff,
              0 0 150px #0088ff;
          }
          20%,
          24%,
          55% {
            text-shadow: none;
          }
        }

        @keyframes slow-pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          66% {
            transform: translateY(10px) translateX(-10px);
            opacity: 0.6;
          }
        }

        .neon-text-404 {
          background: linear-gradient(90deg, #00d4ff, #0088ff, #0066ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: neon-flicker 4s infinite alternate;
        }

        .neon-subtitle {
          text-shadow:
            0 0 5px rgba(0, 180, 255, 0.7),
            0 0 15px rgba(0, 180, 255, 0.5);
          color: #e0f7ff;
        }

        .animate-pulse-slow {
          animation: slow-pulse 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
