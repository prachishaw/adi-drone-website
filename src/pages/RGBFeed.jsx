// src/pages/RGBFeed.jsx
import React, { useEffect, useRef } from "react";

export default function RGBFeed() {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    };
    startCamera();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4 animate-pulse">
        🎥 RGB Live Feed
      </h1>

      <div className="rounded-xl overflow-hidden shadow-xl border-4 border-cyan-400 animate-glow">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full max-w-3xl rounded-xl"
        />
      </div>

      <p className="mt-4 text-sm text-gray-400">This is your live RGB feed captured via webcam.</p>
    </div>
  );
}
