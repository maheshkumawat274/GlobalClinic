import { Helmet } from "react-helmet";
import HeroPostheart from '../../../components/services/allservices/postheartattact/HeroPostheart';
import PostHeartAttack from '../../../components/services/allservices/postheartattact/PostHeartAttack';

const PostHeartAttackPage = () => {
  return (
    <>
      <Helmet>
        <title>Post-Heart Attack Care in Greater Noida | Global Heart Clinic</title>
        <meta
          name="description"
          content="Recover safely with expert post-heart attack care at Global Heart Clinic in Greater Noida. Our comprehensive recovery plans include lifestyle counseling, cardiac rehab, and personalized follow-up to prevent recurrence and improve heart strength. "
        />
        <meta
          name="keywords"
          content="Post heart attack care Greater Noida, cardiac rehab, heart recovery, heart attack treatment, Global Heart Clinic, Dr. Ajeet Kumar, cardiologist Greater Noida"
        />
        <meta
          property="og:title"
          content="Post-Heart Attack Care in Greater Noida | Global Heart Clinic"
        />
        <meta
          property="og:description"
          content="Global Heart Clinic offers structured post-heart attack care in Greater Noida with expert guidance and long-term cardiac health support."
        />
        <meta
          property="og:image"
          content="https://globalclinic.netlify.app/imgs/thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="https://globalclinic.netlify.app/services/post-heart-attack"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroPostheart />
      <PostHeartAttack />
    </>
  );
};

export default PostHeartAttackPage;
