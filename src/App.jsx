import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/About/AboutUs";
import FounderAndCeo from "./pages/About/FounderAndCeo";

import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import WebDevelopment from "./pages/Services/WebDevelopment";
import SEO from "./pages/Services/SEO";
import ORM from "./pages/Services/ORM";
import PPC from "./pages/Services/PPC";
import SMM from "./pages/Services/SMM";
import GraphicDesign from "./pages/Services/GraphicDesign";
import YoutubeMarketing from "./pages/Services/YoutubeMarketing";
import VideoProduction from "./pages/Services/VideoProduction";


const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/founder-and-ceo" element={<FounderAndCeo />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/search-engine-optimization" element={<SEO />} />
          <Route path="/online-reputation-management" element={<ORM />} />
          <Route path="/pay-per-click-marketing" element={<PPC />} />
          <Route path="/social-media-marketing" element={<SMM />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/youtube-marketing" element={<YoutubeMarketing />} />
          <Route
            path="/video-production-service"
            element={<VideoProduction />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
