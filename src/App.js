import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import PersonalPage from './pages/PersonalPage';

import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import PostPage from './pages/PostPage';
import ServicesPage from './pages/ServicesPage';
import WorkMediaPage from './pages/WorkMediaPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/personal' element={<PersonalPage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/sercvices" element={<ServicesPage />} />
        <Route path="/work" element={<WorkMediaPage />} />
      </Routes>
    </BrowserRouter>

  )
};

export default App