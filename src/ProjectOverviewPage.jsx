import React from "react";

export default function ProjectOverviewPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-6">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4 text-center">
        ADI – Project Overview
      </h1>

      <section className="max-w-4xl mx-auto space-y-6">
        <p className="text-gray-300 text-lg">
          <strong>ADI – The Third Eye</strong> is an AI-powered quadcopter designed for real-time
          disaster response, crowd control, and intelligent surveillance in Indian conditions.
        </p>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl text-cyan-300 mb-2">🧠 AI & Computer Vision</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>YOLOv8 – Human & fire detection</li>
            <li>BlazePose – Posture-based injury detection</li>
            <li>WhisperX – Scream/panic audio analysis</li>
            <li>Mask R-CNN – Thermal region segmentation</li>
            <li>Zero-DCE++ – Low-light enhancement</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl text-cyan-300 mb-2">⚙️ Hardware Stack</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Raspberry Pi 5 (4GB) – Offline AI processing</li>
            <li>APM 2.8 Flight Controller + GPS</li>
            <li>DJI Action 3 Camera (HD RGB recording)</li>
            <li>IR Camera – Thermal vision</li>
            <li>Audio mic + speaker – Panic detection + public announcements</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl text-cyan-300 mb-2">🌟 Core Features</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>📍 Real-time GPS tracking with Mapbox</li>
            <li>🔥 Fire detection via RGB & thermal fusion</li>
            <li>🧍 Crowd counting with panic/stampede alerting</li>
            <li>🤕 Fall & injury detection using pose estimation</li>
            <li>🎤 Panic scream detection (WhisperX audio analysis)</li>
            <li>🧠 Offline AI: Full edge computing via Raspberry Pi</li>
            <li>🌙 Night vision powered by Zero-DCE++</li>
          </ul>
        </div>

        <div className="text-center mt-6">
  <a
    href="/ADI-Drone-Report.pdf"
    download
    className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white text-lg transition-all"
  >
    📥 Download Full Project Report
  </a>
</div>

      </section>
    </div>
  );
}
