import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MissionLaunchCountdown from "./MissionLaunchCountdown";
import CrowdStatusOverview from "./CrowdStatusOverview";

const whooshSound = new Audio("/whoosh.mp3");

export default function ADIDroneHomePage() {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({ fires: 0, alerts: 0, injured: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showCountdown, setShowCountdown] = useState(false); // ✅ this is now correctly placed

  // 🎯 Scroll detection for navbar whoosh
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 50 && currentY > prevScrollY && !scrolled) {
        setScrolled(true);
        whooshSound.play().catch(() => {});
      } else if (currentY < prevScrollY && scrolled) {
        setScrolled(false);
      }
      setPrevScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, scrolled]);

  // 🔢 Count-up animation
  useEffect(() => {
    const animate = (key, target, delay = 80) => {
      let current = 0;
      const step = () => {
        if (current < target) {
          current++;
          setCounts((prev) => ({ ...prev, [key]: current }));
          setTimeout(step, delay);
        }
      };
      step();
    };
    animate("fires", 5);
    animate("alerts", 34);
    animate("injured", 12);
  }, []);

  // 💫 AOS animations
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* ⏱ Launch countdown overlay */}
      {showCountdown && (
        <MissionLaunchCountdown
          onComplete={() => {
            setShowCountdown(false);
            navigate("/live-demo");
          }}
        />
      )}

      {/* 🌐 Radar sweep */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="radar-container">
          <div className="radar-sweep"></div>
        </div>
      </div>

      {/* 🚁 Floating drone icon */}
      <div className="absolute top-10 right-10 w-16 h-16 z-10 animate-bounce-slow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-full h-full text-cyan-400 drop-shadow-lg animate-fade-trail"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.25 8.25L18.75 12 10.5 3.75 2.25 12z"
          />
        </svg>
      </div>

      {/* 🚀 HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden bg-black text-center px-6 z-10 flex flex-col justify-center items-center">
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <img
            src="/drone-hero.png"
            alt="ADI Drone"
            className="w-[100vw] h-[100vh] object-contain drop-shadow-[0_0_100px_rgba(0,255,255,0.3)] animate-float"
          />
          <div className="absolute inset-0 bg-cyan-400/10 blur-3xl" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2 animate-pulse" data-aos="fade-up">
          ADI – THE THIRD EYE
        </h1>
        <p className="text-xl text-cyan-200 mb-4 uppercase tracking-widest" data-aos="fade-up">
          Vision of the Future
        </p>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-sm md:text-base" data-aos="zoom-in">
          AI-Powered Quadcopter for Crowd Control, Disaster Response, and Surveillance in India.
        </p>

        {/* 🎯 LIVE DEMO & PROJECT BUTTONS */}
        <div className="flex justify-center gap-4" data-aos="zoom-in-up">
          <button
            onClick={() => setShowCountdown(true)}
            className={`bg-cyan-500 hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-400/80 text-white px-6 py-2 rounded-xl shadow-lg transition-all duration-300 animate-glow ${
              counts.alerts > 30 ? "animate-pulse bg-red-600 border-2 border-red-400" : ""
            }`}
          >
            ✨ LIVE DEMO
          </button>
          <button
            onClick={() => navigate("/project")}
            className="bg-gray-800 border border-cyan-500 text-cyan-200 hover:shadow-xl hover:shadow-cyan-300/70 hover:bg-cyan-950 px-6 py-2 rounded-xl transition-all duration-300"
          >
            🚀 VIEW PROJECT
          </button>
        </div>
      </section>

      {/* 🧠 FEATURE CARDS */}
      {/* 🚁 System Modules Buttons Only */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 text-center">
{[
  { label: "Thermal Cam View", link: "/feeds/thermal" },
  { label: "Normal Cam View", link: "/feeds/rgb" },
  { label: "Depth Cam View", link: "/feeds/depth" },
  { label: "Crowd Control", link: "/feeds/crowd" },
  { label: "Night Vision", link: "/feeds/night" },
  { label: "Illegal Items View", link: "/feeds/illegal" },
].map(({ label, link }, i) => (
  <div
    key={i}
    onClick={() => navigate(link)}
    className="bg-gray-800 hover:bg-cyan-950 text-cyan-300 font-semibold py-4 rounded-2xl shadow-md hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300 cursor-pointer"
  >
    {label}
  </div>
))}
</section>


      {/* 🚀 Why ADI is Different */}
<section className="px-6 pb-16" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Why ADI is Different</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      {
        icon: "🚨",
        title: "Autonomous Panic Detection",
        desc: "BlazePose + YOLO based abnormal behavior detection.",
      },
      {
        icon: "🌡️",
        title: "Thermal Human Finder",
        desc: "FLIR-style heatmapping for human presence detection.",
      },
      {
        icon: "🌙",
        title: "Zero-Light Night Vision",
        desc: "Pseudo-night vision with Zero-DCE++ enhancement.",
      },
      {
        icon: "🧠",
        title: "Offline Onboard Intelligence",
        desc: "Fully AI-powered Raspberry Pi 5 system, no internet needed.",
      },
      {
        icon: "🗺️",
        title: "Mapbox GPS Intelligence",
        desc: "Real-time positioning, heading and zone monitoring.",
      },
      {
        icon: "📢",
        title: "Screaming & Panic Audio Alerts",
        desc: "Audio analysis detects panic screams and auto-reacts.",
      }
    ].map((feature, i) => (
      <div key={i} className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-400/30">
        <div className="text-4xl mb-3">{feature.icon}</div>
        <h3 className="text-cyan-300 font-semibold text-lg mb-1">{feature.title}</h3>
        <p className="text-gray-400 text-sm">{feature.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* 📊 LIVE STATS */}
      <section className="text-center pb-12" data-aos="fade-in">
        <h2 className="text-2xl text-cyan-400 mb-6">Live Stats</h2>
        <div className="flex justify-center gap-12 text-lg text-gray-300">
          <div><span className="text-cyan-300 text-3xl block animate-pulse">{counts.fires}</span>Fires</div>
          <div><span className="text-cyan-300 text-3xl block animate-pulse">{counts.alerts}</span>Alerts</div>
          <div><span className="text-cyan-300 text-3xl block animate-pulse">{counts.injured}</span>Injured</div>
        </div>
      </section>

      {/* 💻 TECH STACK */}
      <section className="py-10 px-6" data-aos="zoom-in">
        <div className="flex flex-wrap justify-center gap-6">
          {["YOLOv8", "BlazePose", "MediaPipe", "Raspberry Pi", "Mapbox", "WhisperX", "ThermalSim", "Zero-DCE++"].map(
            (tech, i) => (
              <span
                key={i}
                className="bg-gray-800 text-cyan-200 px-4 py-2 rounded-full text-sm shadow hover:shadow-lg hover:shadow-cyan-400/40 transition-all"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </section>

      {/* 📬 CONTACT */}
      <section className="text-center py-12 px-6" data-aos="fade-up">
        <p className="text-gray-400">Prachi Shaw  | prachishaw1005@gmail.com</p>
        <p className="text-gray-400">Souryodidto Debnath  | souryo1233@gmail.com</p>
        <p className="text-gray-400">Devdipro Bhaduri  | devdiprobhaduri@gmail.com</p>
        <a
          href="/ADI-Drone-Report.pdf"
          download
          className="mt-4 inline-block bg-cyan-500 px-6 py-2 rounded-xl hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-400 transition-all"
        >
          📥 Download Our Presentation 
        </a>
      </section>
    </div>
  );
}
