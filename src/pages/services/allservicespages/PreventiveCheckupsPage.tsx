import { Helmet } from "react-helmet";
import HeroPreventiveCheckups from "../../../components/services/allservices/preventivecheckups/HeroPreventiveCheckups";
import PreventiveCheckups from "../../../components/services/allservices/preventivecheckups/PreventiveCheckups";

const PreventiveCheckupsPage = () => {
  return (
    <>
      <Helmet>
        <title>Preventive Heart Checkups in Greater Noida | Global Heart Clinic</title>
        <meta
          name="description"
          content="Stay ahead of heart disease with comprehensive preventive heart checkups at Global Heart Clinic, Greater Noida. Our screenings include blood pressure monitoring, ECG, cholesterol tests, and risk profiling to detect heart issues early. Trust our expert cardiologists to help you maintain a healthy heart and prevent cardiac complications through timely diagnosis and personalized care."
        />
        <meta
          name="keywords"
          content="Preventive heart checkups Greater Noida, heart screening, ECG test, cholesterol test, blood pressure monitoring, cardiac risk profiling, Global Heart Clinic, Dr. Ajeet Kumar"
        />
        <meta
          property="og:title"
          content="Preventive Heart Checkups in Greater Noida | Global Heart Clinic"
        />
        <meta
          property="og:description"
          content="Early detection of heart issues with preventive screenings at Global Heart Clinic in Greater Noida. Book your checkup today."
        />
        <meta
          property="og:image"
          content="https://globalclinic.netlify.app/imgs/thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://globalclinic.netlify.app/services/preventive-checkups"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroPreventiveCheckups />
      <PreventiveCheckups />
    </>
  );
};

export default PreventiveCheckupsPage;
