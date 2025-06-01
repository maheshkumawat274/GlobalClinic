import AboutDrAjeet from "../../components/aboutus/AboutDrAjeet"
import HeroAbout from "../../components/aboutus/HeroAbout"
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
     <Helmet>
        <title>About Dr. Ajeet Kumar - Global Heart Clinic</title>
        <meta
          name="description"
          content="Dr. Ajeet Singh is a highly experienced cardiologist with over 15 years of service in the field. He specializes in non-invasive cardiac care, preventive cardiology, and complex diagnosis."
        />
         <meta
          name="keywords"
          content="Dr. Ajeet Kumar, cardiologist Greater Noida, heart specialist, preventive cardiology expert, non-invasive cardiac care, Global Heart Clinic doctor, experienced cardiologist"
        />
        <meta property="og:title" content="About Dr. Ajeet Kumar - Global Heart Clinic" />
        <meta
          property="og:description"
          content="Meet Dr. Ajeet Kumar, the experienced and compassionate doctor behind Global Heart Clinic's trusted care. Learn more about his medical journey."
        />
        <meta property="og:image" content="https://globalclinic.netlify.app/imgs/thumbnail.jpg" />
        <meta property="og:url" content="https://globalclinic.netlify.app/about" />
        <meta property="og:type" content="profile" />
      </Helmet>
     <HeroAbout/>
     <AboutDrAjeet/>
    </>
  )
}

export default AboutPage
