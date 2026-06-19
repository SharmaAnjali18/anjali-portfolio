import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experience = [
  {
    id: "1",
    role: "Frontend Developer",
    company:
      "Alobha Technologies Pvt. Ltd. Noida, India",
    period: "2023-2025",
    desc: "Developed and maintained responsive React.js applications using reusable components and React Hooks.Integrated REST APIs and implemented dynamic data rendering for business applications.",
    icon: <FaBriefcase className="text-blue-500 text-xl" />,
    type: "work",
  },
  {
    id: "2",
    role: "Frontend Developer",
    company:
      "Alobha Technologies Pvt. Ltd. Noida, India",
    period: "2023-2025",
    desc: "Developed and maintained responsive React.js applications using reusable components and React Hooks.Integrated REST APIs and implemented dynamic data rendering for business applications.",
    icon: <FaGraduationCap className="text-green-500 text-xl" />,
    type: "education",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-20 px-4 sm:px-8 bg-gray-50/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Professional <span className="text-red-600">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career path and education background
          </p>
        </div>
        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 h-full w-1 bg-red-300 transform -translate-x-1/2"></div>
          <div className="flex flex-col gap-12">
            {experience.map((exp, ind) => (
              <div
                key={exp.id}
                className={`flex flex-col sm:flex-row items-center ${
                  ind % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="sm:w-1/2 p-6 rounded-xl shadow-2xl bg-white border border-red-400">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white shadow-sm">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {exp.role}
                      </h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-gray-500 italic mb-2">{exp.period}</p>
                      <p className="text-gray-700">{exp.desc}</p>
                      <div className="mt-4 px-3 py-1 rounded-full text-sm inline-block bg-blue-100 text-blue-800">
                        {exp.type === "work" ? "Work Experience" : "Education"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
