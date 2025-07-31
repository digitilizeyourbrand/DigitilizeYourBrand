import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SEO from './pages/Services/SEO';
import WebDesign from './pages/Services/WebDesign';
import SocialMedia from './pages/Services/SocialMedia';
import Branding from './pages/Services/Branding';

const App = () => {
  return (
    <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services/seo" element={<SEO />} />
                    <Route path="/services/web-design" element={<WebDesign />} />
                    <Route path="/services/social-media" element={<SocialMedia />} />
                    <Route path="/services/branding" element={<Branding />} />
                </Routes>
            </MainLayout>
        </Router>
  );
};

export default App;