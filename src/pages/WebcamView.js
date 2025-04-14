// src/pages/WebcamView.js
import React, { useEffect, useRef } from "react";

export default function WebcamView({ title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">{title}</h1>
      <video ref={videoRef} autoPlay playsInline className="rounded-lg border-4 border-cyan-500 w-[80vw] max-w-4xl" />
    </div>
  );
}
