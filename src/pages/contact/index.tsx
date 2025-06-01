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
          content="Get in touch with Global Heart Clinic for expert healthcare support and consultations. Use our contact form to book appointments, ask questions, or locate our clinic using the embedded map. We are here to guide you with personalized medical services. Connect with us via phone, email, or visit our clinic during operating hours. Your health and wellness are our top priority. Reach out now and let us help you take a step towards better care."
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