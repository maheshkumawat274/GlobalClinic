
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    title: 'Preventive Heart Checkups',
    description: 'Regular screening to detect issues early – includes BP monitoring, ECG, cholesterol tests, and risk profiling.'
  },
  {
    title: 'ECG and ECHO',
    description: 'Accurate and fast cardiac testing using Electrocardiogram and Echocardiography to assess heart rhythm and chamber function.'
  },
  {
    title: 'TMT (Stress Test)',
    description: 'Track heart performance under physical exertion – crucial for assessing blocked arteries or angina.'
  },
  {
    title: 'Hypertension & Cholesterol Management',
    description: 'Controlled lifestyle plans and medical intervention to lower heart disease risks.'
  },
  {
    title: 'Emergency Cardiac Care',
    description: 'On-call services for chest pain, cardiac distress – handled with speed, skill, and support.'
  },
  {
    title: 'Post-Heart Attack Care',
    description: 'Structured recovery and lifestyle guidance post-heart event to prevent recurrence.'
  },
  {
    title: 'Diabetic Heart Care',
    description: 'Specialized cardiology for diabetes patients prone to heart disease complications.'
  },
];

const ServicesHome = () => {
  const leftServices = services.slice(0, Math.ceil(services.length / 2));
  const rightServices = services.slice(Math.ceil(services.length / 2));

  return (
    <div className="w-full py-16 px-2 md:px-16 bg-white">
      <div className="text-center mb-12">
        <p className="text-[#046381] font-bold tracking-widest text-sm">_SPECIAL SERVICES_</p>
        <h2 className="text-4xl font-bold text-gray-800">Why you should choose us</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
        <div className="flex flex-col gap-8 w-full lg:w-1/3">
          {leftServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FaCheckCircle className="text-[#046381] font-bold text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-lg text-gray-800">{service.title}</h4>
                <p className="text-gray-500 text-sm mt-1">{service.description}</p>
                <button className="text-[#046381] font-bold mt-2 text-sm hover:underline">Read more</button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="w-full lg:w-1/3"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src='./imgs/contact.jpg' alt="Doctor with heart" className="w-full" />
        </motion.div>

        <div className="flex flex-col gap-8 w-full lg:w-1/3">
          {rightServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FaCheckCircle className="text-[#046381] font-bold text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-lg text-gray-800">{service.title}</h4>
                <p className="text-gray-500 text-sm mt-1">{service.description}</p>
                <button className="text-[#046381] font-bold mt-2 text-sm hover:underline">Read more</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
