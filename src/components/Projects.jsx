import React from "react";
import Slider from "react-slick";
import Portfolio from "../assets/portfolio-project-img.JPG";
import FoodDelivery from "../assets/food-delivery-project-img.JPG";
import { FiExternalLink } from "react-icons/fi";

// Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    title: "My Portfolio",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["react", "html5", "tailwind css", "slick-carousel", "framer motion", "api integration", "python", "django", "restapi", "sqlite"],
    demo: "https://anjali-portfolio-inky.vercel.app/",
    image: Portfolio,
  },
  {
    id: 2,
    title: "Food Delivery Project",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["react", "html5", "tailwind css", "react hooks", "redux toolkit"],
    demo: "https://food-delivery-react-project.vercel.app/",
    image: FoodDelivery,
  },
  {
    id: 3,
    title: "My Portfolio",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["react", "html5", "tailwind css", "slick-carousel", "framer motion", "api integration", "python", "django", "restapi", "sqlite"],
    demo: "https://anjali-portfolio-inky.vercel.app/",
    image: Portfolio,
  },
  {
    id: 4,
    title: "Food Delivery Project",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["React", "NodeJs", "MongoDB", "TailwindCss"],
    demo: "https://food-delivery-react-project.vercel.app/",
    image: FoodDelivery,
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="project"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-20 px-4 sm:px-8 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-300 mb-2">
            My <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="w-full bg-gray-900">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-4 h-full">
                <div className="h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <div className="h-60 bg-gray-200 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-red-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.demo || "#"}
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="mr-2" /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
