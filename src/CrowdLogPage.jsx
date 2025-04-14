import React, { useState } from "react";

// 🔹 Mock database of crowd logs
const mockCrowdLog = [
  { time: "12:00 PM", count: 42, status: "normal" },
  { time: "12:05 PM", count: 56, status: "alert" },
  { time: "12:10 PM", count: 81, status: "panic" },
];

export default function CrowdLogPage() {
  const [logs, setLogs] = useState(mockCrowdLog);

  // 🔁 Simulate logging
  const logCrowd = () => {
    const newEntry = {
      time: new Date().toLocaleTimeString(),
      count: Math.floor(Math.random() * 100),
      status: ["normal", "alert", "panic"][Math.floor(Math.random() * 3)],
    };
    setLogs([newEntry, ...logs]);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
        📊 ADI Drone – Crowd Detection Logs
      </h1>

      <div className="flex justify-center">
        <button
          onClick={logCrowd}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-xl shadow-md transition"
        >
          ➕ Log Simulated Crowd Entry
        </button>
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-800 text-cyan-300">
              <th className="px-4 py-2 border-r border-gray-700">Time</th>
              <th className="px-4 py-2 border-r border-gray-700">Crowd Count</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr
                key={index}
                className={`text-center border-t border-gray-700 ${
                  log.status === "panic"
                    ? "bg-red-900 text-red-300"
                    : log.status === "alert"
                    ? "bg-yellow-900 text-yellow-300"
                    : "bg-gray-900 text-gray-300"
                }`}
              >
                <td className="px-4 py-2 border-r border-gray-700">{log.time}</td>
                <td className="px-4 py-2 border-r border-gray-700">{log.count}</td>
                <td className="px-4 py-2 capitalize">{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
