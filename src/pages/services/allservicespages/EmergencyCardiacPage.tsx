import { Helmet } from "react-helmet";
import EmergencyCardiac from '../../../components/services/allservices/emergencycardiac/EmergencyCardiac';
import HeroEmergencyCardiac from '../../../components/services/allservices/emergencycardiac/HeroEmergencyCardiac';

const EmergencyCardiacPage = () => {
  return (
    <>
      <Helmet>
        <title>Emergency Cardiac Care in Greater Noida | Global Heart Clinic</title>
        <meta
          name="description"
          content="Global Heart Clinic in Greater Noida provides 24/7 Emergency Cardiac Care for chest pain, cardiac distress, and heart attack symptoms. Our team of experienced cardiologists and trained emergency responders ensure immediate assessment and rapid intervention during critical heart conditions. We use advanced cardiac support and monitoring equipment to stabilize patients quickly. For reliable emergency heart care near you, trust Global Heart Clinic for professional, life-saving treatment when every second counts."
        />
        <meta
          name="keywords"
          content="Emergency Cardiac Care Greater Noida, heart emergency clinic, chest pain treatment, cardiac distress care, 24x7 heart care Greater Noida, heart attack response, Global Heart Clinic Greater Noida, Dr. Ajeet Kumar"
        />
        <meta property="og:title" content="Emergency Cardiac Care in Greater Noida | Global Heart Clinic" />
        <meta
          property="og:description"
          content="24/7 emergency care for heart issues in Greater Noida. Quick response to chest pain and cardiac emergencies at Global Heart Clinic."
        />
        <meta
          property="og:image"
          content="https://globalclinic.netlify.app/imgs/thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://globalclinic.netlify.app/services/emergency-cardiac"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroEmergencyCardiac />
      <EmergencyCardiac />
    </>
  );
};

export default EmergencyCardiacPage;
