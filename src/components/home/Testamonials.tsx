// TestimonialsCarousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";

interface Testimonial {
  name: string;
  location: string;
  image: string;
  title: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Pankaj Mehta",
    location: "Gurgaon",
    image: "/images/p1.jpg",
    title: "Heart Diagnosis",
    message:
      "I had constant chest pain and ignored it. Dr. Ajeet’s timely diagnosis saved my life. Highly recommend him!",
  },
  {
    name: "Nisha Verma",
    location: "Delhi",
    image: "/images/p2.jpg",
    title: "Angioplasty",
    message:
      "Thanks to Dr. Ajeet and his team for successfully performing my angioplasty. The care was exceptional and comforting.",
  },
  {
    name: "Rajeev Sharma",
    location: "Noida",
    image: "/images/p3.jpg",
    title: "Heart Surgery",
    message:
      "My heart surgery was a scary thought. But the professionalism and empathy of the doctors made it smooth and successful.",
  },
  {
    name: "Rekha Singh",
    location: "Lucknow",
    image: "/images/p4.jpg",
    title: "Cardiac Rehab",
    message:
      "Post heart attack recovery became possible due to the rehab program here. I am grateful to the entire team.",
  },
  {
    name: "Ankit Desai",
    location: "Jaipur",
    image: "/images/p5.jpg",
    title: "Pacemaker Implant",
    message:
      "I never thought I’d live a normal life again. The pacemaker surgery was a success and I’m feeling great.",
  },
  {
    name: "Meera Joshi",
    location: "Chandigarh",
    image: "/images/p6.jpg",
    title: "Valve Replacement",
    message:
      "Dr. Ajeet and team gave me a new life after a successful valve replacement. Deeply thankful!",
  },
  {
    name: "Saurabh Yadav",
    location: "Agra",
    image: "/images/p7.jpg",
    title: "Heart Monitoring",
    message:
      "Their 24/7 monitoring system helped me control my heart condition. The dedication is truly amazing.",
  },
  {
    name: "Ritika Dey",
    location: "Kolkata",
    image: "/images/p8.jpg",
    title: "ECG & Diagnosis",
    message:
      "Quick diagnosis through ECG saved me from a major problem. Forever grateful to the doctors here.",
  },
];

const TestimonialsCarousel: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed:500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#f9f9f9] py-16 px-4 sm:px-16">
      <div className="text-center mb-10">
        <p className="uppercase font-bold text-sm tracking-wide text-[#046381]">Testimonials</p>
        <h2 className="text-4xl font-bold text-[#1c2233]">What Patients Say About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Real experiences from patients who trusted us for their cardiology needs.
        </p>
      </div>
      <Slider {...settings}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-md h-72 flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#1c2233]">{t.name}</h4>
                  <p className="text-sm text-[#046381] uppercase tracking-wide">
                    {t.title}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">{t.message}</p>
              <FaQuoteRight className="text-gray-300 text-2xl self-end" />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsCarousel;
