import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd, FaClinicMedical, FaFileMedicalAlt, FaMoneyBillWave } from 'react-icons/fa';
import { usePopup } from '../context/UsePop';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaHeartbeat className="w-8 h-8" />,
      title: "15+ Years of Experience",
      description: "Decades of combined expertise in cardiac care"
    },
    {
      icon: <FaUserMd className="w-8 h-8" />,
      title: "3000+ Successful Heart Cases",
      description: "Proven track record in complex cardiac procedures"
    },
    {
      icon: <FaClinicMedical className="w-8 h-8" />,
      title: "Latest Equipment",
      description: "State-of-the-art diagnostic and treatment technology"
    },
    {
      icon: <FaFileMedicalAlt className="w-8 h-8" />,
      title: "Personalized Care Plans",
      description: "Tailored treatment for each patient's unique needs"
    },
    {
      icon: <FaMoneyBillWave className="w-8 h-8" />,
      title: "Affordable & Transparent Pricing",
      description: "No hidden costs, quality care within reach"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
   const { openPopup } = usePopup();
    const handleClick = () => {
    openPopup();
  };

  return (
    <section className="py-16 px-2 md:px-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-[#046381] ">Global Heart Clinic</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Excellence in cardiac care with patient-centered approach
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 p-4 rounded-full text-[#046381]  mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated pulse effect */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
          }}
          className="text-center mt-12"
        >
          <button onClick={handleClick}  className="bg-[#046381]  hover:bg-blue-700 cursor-pointer text-white px-4 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
            Schedule Your Consultation Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;