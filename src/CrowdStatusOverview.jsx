import React, { useEffect, useState } from "react";

export default function CrowdStatusOverview() {
  const [data, setData] = useState({
    panic: 32,
    alert: 45,
    normal: 70,
  });

  // 🔁 Simulate real-time crowd updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        panic: Math.floor(Math.random() * 50),
        alert: Math.floor(Math.random() * 60),
        normal: Math.floor(Math.random() * 80),
      });
    }, 5000); // update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const bars = [
    { label: "Panic", value: data.panic, class: "bg-red-500 text-red-300" },
    { label: "Alert", value: data.alert, class: "bg-yellow-500 text-yellow-300" },
    { label: "Normal", value: data.normal, class: "bg-green-500 text-green-300" },
  ];

  return (
    <section className="py-12 px-4 max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Crowd Status Overview</h2>
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg space-y-4">
        {bars.map((bar, i) => (
          <div key={i} className="text-left">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-semibold text-white">{bar.label}</span>
              <span className={`text-sm font-semibold ${bar.class.split(" ")[1]}`}>
                {bar.value} People
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-4">
              <div
                className={`h-4 rounded-full transition-all duration-700 ease-in-out ${bar.class.split(" ")[0]} drop-shadow-[0_0_8px]`}
                style={{ width: `${Math.min(bar.value, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
