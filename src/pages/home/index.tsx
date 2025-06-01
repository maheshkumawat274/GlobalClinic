
import ContactHome from "../../components/contact/ContactHome"
import HeroSection from "../../components/home/Hero"
import IntroSection from "../../components/home/IntroSection"
import WorkingProcess from "../../components/home/Process"
import TestimonialsCarousel from "../../components/home/Testamonials"
import WhyChooseUs from "../../components/home/WhyChooseSection"
import ServicesHome from "../../components/services/ServicesHome"
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
    <Helmet>
        <title>Global Heart Clinic - Your Trusted Healthcare Partner</title>
        <meta
          name="description"
          content="Global Heart Clinic is a multi-specialty healthcare center offering modern medical services, expert consultation, and compassionate care. From general checkups to advanced diagnostics and treatments, we ensure our patients receive personalized attention and high-quality care. Our dedicated team of professionals and well-equipped facility make us a one-stop solution for families seeking reliable healthcare. We are committed to promoting wellness, preventive care, and long-term health outcomes. Visit Global Heart Clinic today and experience healthcare that puts your needs first. Book your appointment now and take the first step toward better health."
        />
        <meta property="og:title" content="Global Heart Clinic - Your Trusted Healthcare Partner" />
        <meta
          property="og:description"
          content="Experience expert healthcare at Global Heart Clinic with personalized services, advanced treatments, and a caring team. Your wellness is our top priority."
        />
        <meta
          name="keywords"
          content="Global Heart Clinic, healthcare in Greater Noida, multi-specialty clinic, expert doctors, heart care, preventive checkups, cardiac treatments, diagnostic services, patient care, health services Greater Noida"
        />
        <meta property="og:image" content="https://globalclinic.netlify.app/imgs/thumbnail.jpg" />
        <meta property="og:url" content="https://globalclinic.netlify.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
    <HeroSection/>
    <IntroSection/>
    <ServicesHome/>
    <WhyChooseUs/>
    <WorkingProcess/>
    <ContactHome/>
    
    <TestimonialsCarousel/>
    
    </>
  )
}

export default Homepage