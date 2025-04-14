import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ADIDroneHomePage from "./ADIHomePage";
import LiveDemoPage from "./LiveDemoPage"; // ✅ make sure this is imported
import ProjectOverviewPage from "./ProjectOverviewPage";
import CrowdLogPage from './CrowdLogPage';
import RGBFeed from "./pages/RGBFeed";
import WebcamView from "./pages/WebcamView";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ADIDroneHomePage />} />
        <Route path="/live-demo" element={<LiveDemoPage />} />
        <Route path="/project" element={<ProjectOverviewPage />} />
        <Route path="/features/crowd" element={<div className="text-white p-10">Crowd Monitoring</div>} />
        <Route path="/features/thermal" element={<div className="text-white p-10">Thermal Vision</div>} />
        <Route path="/features/panic" element={<div className="text-white p-10">Panic Detection</div>} />
        <Route path="/features/night" element={<div className="text-white p-10">Night Vision</div>} />
        <Route path="/crowd" element={<CrowdLogPage />} />
        <Route path="/feeds/rgb" element={<RGBFeed />} />
        <Route path="/feeds/rgb" element={<WebcamView title="Normal Cam View (RGB)" />} />
        <Route path="/feeds/thermal" element={<WebcamView title="Thermal Cam View" />} />
        <Route path="/feeds/depth" element={<WebcamView title="Depth Cam View" />} />
        <Route path="/feeds/crowd" element={<WebcamView title="Crowd Control View" />} />
        <Route path="/feeds/night" element={<WebcamView title="Night Vision" />} />
        <Route path="/feeds/illegal" element={<WebcamView title="Illegal Items View" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
