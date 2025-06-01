
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import Homepage from './pages/home';
import AboutPage from './pages/aboutus';
import ContactPage from './pages/contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicePage from './pages/services';
import PreventiveCheckupsPage from './pages/services/allservicespages/PreventiveCheckupsPage';
import ECGEchoPage from './pages/services/allservicespages/ECGEchoPage';
import TMTTestPage from './pages/services/allservicespages/TMTTestPage';
import HypertensionPage from './pages/services/allservicespages/HypertensionPage';
import EmergencyCardiacPage from './pages/services/allservicespages/EmergencyCardiacPage';
import PostHeartAttackPage from './pages/services/allservicespages/PostHeartAttackPage';
import DiabeticHeartCarePage from './pages/services/allservicespages/DiabeticHeartCarePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Popup from './components/context/Popup';
import { PopupProvider } from './components/context/PopupProvider';
import SupportSection from './components/contact/SupportSection';
import BlogsPage from './pages/blogs';
import WhatsAppBtn from './components/WhatssappBtn';

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <PopupProvider>
    <Router>
      <Header/>
      <ScrollTop/>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route>
          <Route path="/services" element={<ServicePage />} />
        <Route path="/services/preventive-checkups" element={<PreventiveCheckupsPage />} />
        <Route path="/services/ecg-echo" element={<ECGEchoPage />} />
        <Route path="/services/tmt-test" element={<TMTTestPage />} />
        <Route path="/services/hypertension" element={<HypertensionPage />} />
        <Route path="/services/emergency-cardiac" element={<EmergencyCardiacPage />} />
        <Route path="/services/post-heart-attack" element={<PostHeartAttackPage/>} />
        <Route path="/services/diabetic-heart" element={<DiabeticHeartCarePage />} />
        </Route>

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage/>} />
        
        


      </Routes>
      <Popup/>
      <SupportSection/>
      <Footer/>
      <WhatsAppBtn/>
    </Router>
    </PopupProvider>
  );
}

export default App;
