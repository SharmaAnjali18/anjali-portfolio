import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import AnjaliCV from "../assets/anjali-resume.pdf";
import heroImage from "../assets/anjali-pic.jpeg";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col justify-center">
      {/* Colorful blurred background shape */}
      <div
        className="absolute top-8 right-56 h-[660px] w-[580px] md:h-[420px] md:w-[340px] bg-gradient-to-r from-red-600 via-blue-600 to-green-400 rounded-full transform rotate-12 shadow-[0_0_100px_rgba(255,165,0,0.7)] z-0"
        aria-hidden="true"
      />

      {/* Content Section */}
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-gray-700 body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center">
          {/* Left: Text & Socials */}
          <div className="flex flex-col md:items-start md:text-left items-center text-center md:w-1/2 lg:pr-24 md:pr-16 mb-16 md:mb-0 relative z-10">
            {/* Social Media Icons */}
            <div data-aos="fade-up"
            data-aos-delay=""
              className="flex space-x-2 mb-4"
              aria-label="Social media links"
            >
              <a href="#" aria-label="Facebook">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
              <a href="#" aria-label="GitHub">
                <img
                  src={github}
                  alt="GitHub"
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
            </div>

            {/* Heading & Description */}
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
              Hi! I'm <span className="text-red-600">Anjali</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-950 mb-4">
              Frontend Web Developer
            </h2>
            <p className="text-black leading-relaxed mb-8 max-w-lg">
              Passionate about crafting responsive and engaging web experiences.
              I specialize in React.js and love turning ideas into real-world
              applications.
            </p>

            {/* Download CV Button */}
            <a
              href={AnjaliCV}
              download="Anjali_Sharma_CV"
              className="inline-flex items-center justify-center text-white bg-red-500 hover:bg-red-700 px-6 py-2 rounded-full text-lg transition-all hover:shadow-[0_0_20px_rgba(225,100,100,0.5)]"
            >
              Download CV
            </a>
          </div>

          {/* Right: Profile Image */}
          <div data-aos="fade-left" data-aos-delay="500" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative z-10">
            <img
              src={heroImage}
              alt="Anjali"
              className="object-cover object-center rounded-full w-80 h-80 border-4 border-white shadow-xl mx-auto"
              width={320}
              height={320}
              loading="eager"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
