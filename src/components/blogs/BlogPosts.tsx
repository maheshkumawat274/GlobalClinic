// BlogPosts.tsx
import React from "react";
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Heart Attack Warning Signs You Should Never Ignore",
    category: "HEART CARE",
    date: "27 MAY",
    image: "/imgs/heart-attack.avif",
  },
  {
    id: 2,
    title: "How to Eat Heart-Healthy in Indian Households",
    category: "NUTRITION",
    date: "27 MAY",
    image: "/imgs/treatment.webp",
  },
  {
    id: 3,
    title: "The Link Between Stress & Heart Health",
    category: "MENTAL HEALTH",
    date: "27 MAY",
    image: "/imgs/appointment.jpg",
  },
  {
    id: 4,
    title: "How Lifestyle Affects the Heart in Young Adults",
    category: "LIFESTYLE",
    date: "27 MAY",
    image: "/imgs/life.webp",
  },
];

const BlogPosts: React.FC = () => {
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
    <div className="py-16 px-4 sm:px-16 bg-gray-50">
      <Slider {...settings}>
        {blogPosts.map((post) => {
          const [day, month] = post.date.split(" ");

          return (
            <div key={post.id} className="px-3">
              <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-72 object-cover" />
                  <div className="absolute bottom-0 right-0 m-3 bg-[#046381] text-white text-center rounded">
                    <div className="text-2xl font-bold leading-none px-3 pt-2">{day}</div>
                    <div className="text-xs pb-1 uppercase">{month}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 font-semibold uppercase">{post.category}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mt-1 mb-3">{post.title}</h3>
                  <div className="flex items-center text-[#046381] text-sm font-medium cursor-pointer hover:underline">
                    <FaChevronRight className="mr-2 text-xs" />
                    Read More
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BlogPosts;
