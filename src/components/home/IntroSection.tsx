import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const IntroSection
 = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 md:py-24  px-2 md:px-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Content - Text */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Welcome to <span className="text-[#046381]">Global Heart Clinic</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Where compassionate care meets advanced cardiology.
            </motion.p>
            
            <motion.blockquote 
              className="border-l-4 border-[#046381] pl-4 py-2 text-lg italic text-gray-700 bg-blue-50 rounded-r-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              "Led by Dr. Ajeet Singh, we provide preventive, diagnostic, and interventional cardiac care tailored for your needs."
            </motion.blockquote>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <img 
                src="./imgs/intro.jpg"
                alt="Cardiology Care" 
                className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="text-center">
                  <p className="text-[#046381] font-bold text-xl">15+</p>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;