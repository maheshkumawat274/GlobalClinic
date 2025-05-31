
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import Homepage from './pages/home';
import AboutPage from './pages/aboutus';
import ContactPage from './pages/contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicePage from './pages/services';

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
