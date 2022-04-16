import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage           from './pages/HomePage';
import PersonalPage       from './pages/PersonalPage';
import Webflow            from './pages/Webflow';
import AboutPage          from './pages/AboutPage';
import ServicesPage       from './pages/ServicesPage';
import PortfolioPage      from './pages/PortfolioPage';
import ProjectPage        from './pages/ProjectPage';
import BlogPage           from './pages/BlogPage';


import ContactPage from './pages/ContactPage';
import PostPage from './pages/PostPage';
import WorkMediaPage from './pages/WorkMediaPage';
import AboutPersonalPage from './pages/AboutPersonalPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/personal' element={<PersonalPage />}/>
        <Route path='/webflow' element={<Webflow />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-personal" element={<AboutPersonalPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/contact" element={<ContactPage />} />



        <Route path="/work" element={<WorkMediaPage />} />
      </Routes>
    </BrowserRouter>

  )
};

export default App