import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import Routes and Route
import Header from './components/header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import AdminPanel from './components/Admin';
import Aboutus from './components/Aboutus';
import Projects from './components/Projects';

import Project1 from "./components/Project1"
import Project2 from './components/project2';
import Project3 from './components/project3';
import Project4 from './components/project4';
import ScrollToTop from './components/Scroolontop';
import LoadingSpinner from './components/Loadspinner';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import BlogDetailPage from './blogdetails';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Simulate a short delay (adjust as needed)

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [location]);

  // Conditionally render Header and Footer based on the current route
  const isAdminPanel = location.pathname === '/adminpanel';

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {/* Only show Header and Footer if it's not the /adminpanel route */}
      {!isAdminPanel && <Header />} {/* Always rendered at the top except in /adminpanel */}
      
      <ScrollToTop>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/project1' element={<Project1 />} />
            <Route path='/project2' element={<Project2 />} />
            <Route path='/project3' element={<Project3 />} />
            <Route path='/project4' element={<Project4 />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path='/adminpanel' element={<AdminPanel />} />
          </Routes>
        </main>
      </ScrollToTop>
      
      {/* Only show Footer if it's not the /adminpanel route */}
      {!isAdminPanel && <Footer />}
    </>
  );
}

export default App;
