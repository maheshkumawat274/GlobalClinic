import { Helmet } from "react-helmet";
import HeroTMTTest from '../../../components/services/allservices/tmttest/HeroTMTTest';
import TMTTest from '../../../components/services/allservices/tmttest/TMTTest';

const TMTTestPage = () => {
  return (
    <>
      <Helmet>
        <title>TMT (Stress Test) in Greater Noida | Global Heart Clinic</title>
        <meta
          name="description"
          content="Assess your heart’s performance under physical stress with the TMT (Treadmill Test) at Global Heart Clinic, Greater Noida."
        />
        <meta
          name="keywords"
          content="TMT test Greater Noida, stress test heart, treadmill test cardiology, cardiac stress test, Global Heart Clinic, Dr. Ajeet Kumar"
        />
        <meta
          property="og:title"
          content="TMT (Stress Test) in Greater Noida | Global Heart Clinic"
        />
        <meta
          property="og:description"
          content="Get expert TMT stress testing for heart health at Global Heart Clinic in Greater Noida. Early detection of heart issues with advanced treadmill testing."
        />
        <meta
          property="og:image"
          content="https://globalclinic.netlify.app/imgs/thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://globalclinic.netlify.app/services/tmt-test"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroTMTTest/>
      <TMTTest/>
    </>
  );
};

export default TMTTestPage;
