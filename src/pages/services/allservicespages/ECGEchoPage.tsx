import { Helmet } from "react-helmet";
import ECGEcho from '../../../components/services/allservices/ecgecho/ECGEcho';
import HeroECGEcho from '../../../components/services/allservices/ecgecho/HeroECGEcho';

const ECGEchoPage = () => {
  return (
    <>
      <Helmet>
        <title>ECG and ECHO Test in Greater Noida | Global Heart Clinic</title>
        <meta
          name="description"
          content="Get accurate ECG and ECHO testing at Global Heart Clinic in Greater Noida. We offer advanced Electrocardiogram (ECG) and Echocardiography (ECHO) services to assess heart rhythm, chamber size, and function. Our expert cardiology team ensures quick and precise cardiac diagnosis using non-invasive, patient-friendly methods. Whether for routine screening or follow-up care, our heart testing facilities help detect early signs of heart disease and guide effective treatment. Book your heart test today at our trusted diagnostic center in Greater Noida."
        />
        <meta
          name="keywords"
          content="ECG test Greater Noida, ECHO test Greater Noida, Electrocardiogram Greater Noida, Echocardiography Greater Noida, heart test clinic, cardiac diagnosis, Global Heart Clinic Greater Noida, Dr. Ajeet Kumar"
        />
        <meta property="og:title" content="ECG and ECHO Test in Greater Noida | Global Heart Clinic" />
        <meta
          property="og:description"
          content="Advanced ECG and ECHO testing by expert cardiologists in Greater Noida. Accurate diagnosis and fast results at Global Heart Clinic."
        />
        <meta
          property="og:image"
          content="https://globalclinic.netlify.app/imgs/thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://globalclinic.netlify.app/services/ecg-echo"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroECGEcho />
      <ECGEcho />
    </>
  );
};

export default ECGEchoPage;
