import ContactSection from "../../components/contact/ContactSection"
import HeroContact from "../../components/contact/HeroContact"
import MapSection from "../../components/contact/MapSection"
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
    <Helmet>
        <title>Contact Us - Global Heart Clinic | Book Your Appointment Today</title>
        <meta
          name="description"
          content="Contact Global Heart Clinic for expert healthcare. Book appointments, ask questions, or visit us. Call, email, or use our contact form. Your wellness is our priority."
        />
        <meta
          name="keywords"
          content="contact Global Heart Clinic, book appointment Global Heart Clinic, healthcare support Greater Noida, medical consultation, Global Heart Clinic phone number, clinic location Greater Noida, health services contact"
        />

        <meta property="og:title" content="Contact Us - Global Heart Clinic" />
        <meta
          property="og:description"
          content="Reach out to Global Heart Clinic for expert healthcare support, appointment booking, and personalized guidance. We're just a message away."
        />
        <meta property="og:image" content="https://globalclinic.netlify.app/imgs/thumbnail.jpg" />
        <meta property="og:url" content="https://globalclinic.netlify.app/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
    <HeroContact/>
    <MapSection/>
    <ContactSection/>
    </>
  )
}

export default ContactPage