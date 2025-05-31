import { motion } from "framer-motion";

const steps = [
  {
    img: "./imgs/appointment.jpg", // Place your image paths in public/images
    title: "Appointment",
    desc: "Book your appointment easily and connect with healthcare professionals.",
  },
  {
    img: "./imgs/checkup.jpg",
    title: "Doctor Checkup",
    desc: "Get a comprehensive checkup by experienced cardiologists.",
  },
  {
    img: "./imgs/treatment.webp",
    title: "Manage Treatment",
    desc: "Our experts manage treatment plans tailored for each patient.",
  },
  {
    img: "./imgs/life.webp",
    title: "Enjoy The Life",
    desc: "Experience better health and a happy life with our care.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-white py-16 px-2 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#046381] font-semibold tracking-wide uppercase"
      >
        Working Process
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 mb-4"
      >
        How We Work?
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-2xl mx-auto text-gray-600 mb-12"
      >
        We offer world-class healthcare for heart patients of all ages. Discover our smooth process designed for your wellness.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-2xl px-6 py-8 border-t-4 border-[#046381]  hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#046381] ">
              <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
