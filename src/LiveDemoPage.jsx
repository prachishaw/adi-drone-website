import React, { useState, useEffect } from "react";

export default function LiveDemoPage() {
  const [detection, setDetection] = useState({
    rgb: true,
    thermal: false,
    depth: true,
    map: false,
  });

  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "🔥 Fire detected near Zone 3 at 12:05 PM",
    "🧍‍♂️ 6 people detected in Zone 1",
    "🤕 Injured person detected – fall posture confirmed",
    "📍 Drone heading: North-East | Location: 22.5726° N, 88.3639° E",
    "🎤 Screaming detected – potential panic situation",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getFeedClasses = (active, color) => {
    return `aspect-video relative bg-black border-4 rounded-xl flex items-center justify-center shadow-xl transition-all duration-300 group
      ${active
        ? `border-${color}-400 text-${color}-300 animate-pulse shadow-${color}-500/40`
        : "border-gray-700 text-gray-500 hover:border-cyan-400 hover:text-cyan-300"
      }`;
  };

  const toggleDetection = (key) => {
    setDetection((prev) => ({ ...prev, [key]: !prev[key] }));

    const ping = new Audio(
      "data:audio/mp3;base64,//uQxAAADMEGhlbGxvCg==" // tiny ping base64
    );
    ping.play().catch(() => {});
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 overflow-x-hidden">
      {/* Glitchy Title */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-10 text-center tracking-wider hover:tracking-[0.25em] transition-all duration-500 ease-in-out uppercase">
        ADI Drone – Live Demo
      </h1>

      {/* Feeds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          ["rgb", "cyan", "🎥 RGB Feed (People Detection)"],
          ["thermal", "orange", "🔥 Thermal View (Heat Signature)"],
          ["depth", "blue", "🧠 Depth Map View"],
          ["map", "green", "🗺️ GPS Tracking"],
        ].map(([key, color, label]) => (
          <div
            key={key}
            onClick={() => toggleDetection(key)}
            className={`${getFeedClasses(detection[key], color)} cursor-pointer`}
          >
            <span className="text-lg font-mono z-10">{label}</span>
            {detection[key] && (
              <div className="absolute inset-0 border border-dashed border-white/10 animate-ping-slow rounded-xl pointer-events-none" />
            )}
          </div>
        ))}
      </div>

      {/* Alerts Console */}
      <div className="bg-gray-900/60 backdrop-blur border border-cyan-400/30 p-6 rounded-xl max-w-4xl mx-auto text-sm text-gray-300 shadow-lg hover:shadow-cyan-400/10 transition duration-300">
        <h2 className="text-xl text-cyan-300 mb-4 font-bold uppercase">Live Detection Logs</h2>
        <div className="h-24 font-mono text-cyan-200 text-md animate-pulse">
          ▷ {logs[logIndex]}
        </div>
      </div>
    </div>
  );
}
