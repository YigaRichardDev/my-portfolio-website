import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Add more routes as needed */}
            <Route path='/' element={<Home/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;