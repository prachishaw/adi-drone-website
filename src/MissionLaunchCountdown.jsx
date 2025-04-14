import React, { useEffect, useState } from "react";

const whoosh = new Audio("/whoosh.mp3");
const launch = new Audio("/launch.mp3");

export default function MissionLaunchCountdown({ onComplete }) {
  const [count, setCount] = useState(5);
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount((prev) => prev - 1);
        whoosh.play().catch(() => {});
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setLaunched(true);
      launch.play().catch(() => {});
      if (onComplete) setTimeout(onComplete, 1000);
    }
  }, [count]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-white text-center">
      {!launched ? (
        <h1 className="text-[10rem] font-extrabold text-cyan-400 animate-pulse transition-transform duration-300 scale-110">
          {count}
        </h1>
      ) : (
        <h2 className="text-5xl font-bold text-green-400 animate-pulse animate-bounce">
          🚀 MISSION STARTED
        </h2>
      )}
    </div>
  );
}
