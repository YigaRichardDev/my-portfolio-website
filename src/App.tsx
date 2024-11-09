import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';
import Portfolio from './pages/PortfolioPage';
import Blogs from './pages/BlogsPage';
import Contact from './pages/ContactPage';
import Loader from './components/loader/Loader';
import BlogDetails from './components/blogs/BlogDetails';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import ScrollToTop from './components/scroll/ScrollToTop';
const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {loading && <Loader />}
      <Navbar />
      <main className="flex-grow mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogDetails/>}/>
          <Route path="/service/:slug" element={<ServiceDetailsPage/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <ScrollToTop/>
    <AppContent />
  </Router>
);

export default App;
