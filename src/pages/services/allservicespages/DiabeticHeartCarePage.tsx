import { Helmet } from "react-helmet";
import DiabeticHeartCare from "../../../components/services/allservices/diabeticheart/DiabeticHeartCare";
import HeroDiabetic from "../../../components/services/allservices/diabeticheart/HeroDiabetic";

const DiabeticHeartCarePage = () => {
  return (
    <>
      <Helmet>
        <title>Diabetic Heart Care – Specialized Cardiac Treatment | Global Heart Clinic</title>
        <meta
          name="description"
          content="Global Heart Clinic in Greater Noida offers expert Diabetic Heart Care for patients with diabetes who are at high risk of heart complications."
        />
        <meta
          name="keywords"
          content="Diabetic Heart Care, heart disease in diabetes, diabetes cardiology, diabetes and heart risk, diabetic heart clinic Greater Noida, cardiac care for diabetics, Global Heart Clinic Greater Noida, Dr. Ajeet Kumar"
        />
        <meta property="og:title" content="Diabetic Heart Care – Global Heart Clinic" />
        <meta
          property="og:description"
          content="Expert heart care for diabetic patients. Specialized cardiology, lifestyle plans, and regular monitoring at Global Heart Clinic, Greater Noida."
        />
        <meta
          property="og:image"
          content="https://globalclinic.netlify.app/imgs/thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://globalclinic.netlify.app/services/diabetic-heart"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroDiabetic />
      <DiabeticHeartCare />
    </>
  );
};

export default DiabeticHeartCarePage;
