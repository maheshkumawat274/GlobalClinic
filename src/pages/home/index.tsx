
import ContactHome from "../../components/contact/ContactHome"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import HeroSection from "../../components/home/Hero"
import IntroSection from "../../components/home/IntroSection"
import WorkingProcess from "../../components/home/Process"
import TestimonialsCarousel from "../../components/home/Testamonials"
import WhyChooseUs from "../../components/home/WhyChooseSection"
import ServicesHome from "../../components/services/ServicesHome"


const Homepage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <IntroSection/>
    <ServicesHome/>
    <WhyChooseUs/>
    <WorkingProcess/>
    <ContactHome/>
    
    <TestimonialsCarousel/>
    <Footer/>
    </>
  )
}

export default Homepage