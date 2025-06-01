import { Helmet } from "react-helmet";
import HeroHyper from '../../../components/services/allservices/hypertension/HeroHyper';
import Hypertension from '../../../components/services/allservices/hypertension/Hypertension';

const HypertensionPage = () => {
  return (
    <>
      <Helmet>
        <title>Hypertension & Cholesterol Management in Greater Noida | Global Heart Clinic</title>
        <meta
          name="description"
          content="Global Heart Clinic in Greater Noida offers expert management of hypertension and cholesterol with lifestyle guidance, regular monitoring, and medical care."
        />
        <meta
          name="keywords"
          content="Hypertension treatment Greater Noida, cholesterol management, blood pressure care, heart risk management, lifestyle heart care, Global Heart Clinic Greater Noida, Dr. Ajeet Kumar, high BP doctor"
        />
        <meta
          property="og:title"
          content="Hypertension & Cholesterol Management in Greater Noida | Global Heart Clinic"
        />
        <meta
          property="og:description"
          content="Effective treatment for high BP and cholesterol in Greater Noida. Personalized heart health plans at Global Heart Clinic."
        />
        <meta
          property="og:image"
          content="https://globalclinic.netlify.app/imgs/thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://globalclinic.netlify.app/services/hypertension"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroHyper />
      <Hypertension />
    </>
  );
};

export default HypertensionPage;
