import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import SymptomChecker from './assets/components/SymptomChecker';
//import About from './assets/components/About'; // Import About component
import Contact from './assets/components/Contact'; // Import Contact component
import History from './assets/components/History'; // Import History component
import Footer from './assets/components/Footer'; // Import Footer component
import Login from './assets/components/Login';
import Signup from './assets/components/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
           {/*<Route path="/about" element={<About />} / {/* Route for About page */}
          <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
          <Route path="/history" element={<History />} /> {/* Route for History page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;