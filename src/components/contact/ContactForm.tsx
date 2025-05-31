import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+91',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      if (value.startsWith('+91') && /^\+?\d*$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }

    if (name === 'name') {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, phone, email, date, time, message } = formData;

    if (!name.trim() || !/^[a-zA-Z\s]+$/.test(name)) {
      setError('Please enter a valid full name.');
      return false;
    }

    if (!/^\+91\d{10}$/.test(phone)) {
      setError('Phone number must start with +91 followed by 10 digits.');
      return false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (!date) {
      setError('Please select an appointment date.');
      return false;
    }

    if (!time) {
      setError('Please select a preferred time.');
      return false;
    }

    if (!message.trim() || message.length < 10) {
      setError('Please enter a message (minimum 10 characters).');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccess(true);
      setFormData({
        name: '',
        phone: '+91',
        email: '',
        date: '',
        time: '',
        message: ''
      });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      setSuccess(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  return (
    <section className="w-full px-2 md:px-6">
      <div className="container mx-auto max-w-4xl">
        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded shadow">
            ✅ Your appointment has been booked successfully!
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded shadow">
            ❌ {error}
          </div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-2 lg:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <motion.div variants={item}>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#046381]">
                  <FaUser className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#046381] focus:border-[#046381] transition-all duration-300 hover:border-blue-400"
                  placeholder="John Doe"
                />
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={item}>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#046381]">
                  <FaPhone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#046381] focus:border-[#046381] transition-all duration-300 hover:border-blue-400"
                  placeholder="+91XXXXXXXXXX"
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={item} className="md:col-span-2">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#046381]">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#046381] focus:border-[#046381] transition-all duration-300 hover:border-blue-400"
                  placeholder="your@email.com"
                />
              </div>
            </motion.div>

            {/* Date */}
            <motion.div variants={item}>
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                Appointment Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#046381]">
                  <FaCalendarAlt className="w-5 h-5" />
                </div>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#046381] focus:border-[#046381] transition-all duration-300 hover:border-blue-400"
                />
              </div>
            </motion.div>

            {/* Time */}
            <motion.div variants={item}>
              <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                Preferred Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#046381]">
                  <FaClock className="w-5 h-5" />
                </div>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#046381] focus:border-[#046381] transition-all duration-300 hover:border-blue-400"
                />
              </div>
            </motion.div>

            {/* Message */}
            <motion.div variants={item} className="md:col-span-2">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#046381] focus:border-[#046381] transition-all duration-300 hover:border-blue-400"
                placeholder="Describe your health concerns..."
              ></textarea>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8"
          >
            <button
              type="submit"
              className="w-full bg-[#046381] hover:bg-[#046381] cursor-pointer text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FaPaperPlane className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
