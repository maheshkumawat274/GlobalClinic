
import ServicesHome from "../../components/services/ServicesHome"
import { Helmet } from "react-helmet";

const ServicePage = () => {
  return (
    <>
    <Helmet>
    <title>Cardiac & Preventive Services – Global Heart Clinic | Noida</title>
        <meta
          name="description"
          content="Global Clinic offers advanced heart care services including Preventive Heart Checkups, ECG, ECHO, TMT (Stress Test), Hypertension and Cholesterol Management, Emergency Cardiac Care, Post-Heart Attack Recovery, and specialized Diabetic Heart Care. "
        />
        <meta
          name="keywords"
          content="Preventive Heart Checkups, ECG, ECHO, Stress Test, TMT, Hypertension treatment, Cholesterol management, Emergency Cardiac Care, Post heart attack recovery, Diabetic heart care, Noida heart clinic, Global Clinic services, Dr. Ajeet Kumar"
        />
        <meta property="og:title" content="Heart & Health Services - Global Clinic" />
        <meta
          property="og:description"
          content="Preventive and emergency heart care services including ECG, ECHO, TMT, cholesterol management, and post-heart attack care in Noida."
        />
        <meta property="og:image" content="https://globalclinic.netlify.app/imgs/thumbnail.jpg" />
        <meta property="og:url" content="https://globalclinic.netlify.app/services" />
        <meta property="og:type" content="website" />
      </Helmet>
     <ServicesHome/>
    </>
  )
}

export default ServicePage