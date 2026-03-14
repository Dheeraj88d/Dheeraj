import React, { useState } from "react";

// Import images for all projects
// Project 1
import P1 from "../../assets/images/p1/P1.png";
import P2 from "../../assets/images/p1/P2.png";
import P3 from "../../assets/images/p1/P3.png";
import P4 from "../../assets/images/p1/P4.png";
import P5 from "../../assets/images/p1/P5.png";

// Project 2
import EMARALD1 from "../../assets/images/ERK/EMARALD1.png";
import EMARALD2 from "../../assets/images/ERK/EMARALD2.png";
import EMARALD3 from "../../assets/images/ERK/EMARALD3.png";
import EMARALD4 from "../../assets/images/ERK/EMARALD4.png";
import EMARALD5 from "../../assets/images/ERK/EMARALD5.png";
import EMARALD6 from "../../assets/images/ERK/EMARALD6.png";

// Project 3
import VILLA1 from "../../assets/images/VLB/VILLA1.png";
import VILLA2 from "../../assets/images/VLB/VILLA2.png";
import VILLA3 from "../../assets/images/VLB/VILLA3.png";
import VILLA4 from "../../assets/images/VLB/VILLA4.png";
import VILLA5 from "../../assets/images/VLB/VILLA5.png";
import VILLA6 from "../../assets/images/VLB/VILLA6.png";

//project4
import MYHOME1 from "../../assets/images/MHA/MYHOME1.png";
import MYHOME2 from "../../assets/images/MHA/MYHOME2.png";
import MYHOME3 from "../../assets/images/MHA/MYHOME3.png";
import MYHOME4 from "../../assets/images/MHA/MYHOME4.png";
import MYHOME5 from "../../assets/images/MHA/MYHOME5.png";
import MYHOME6 from "../../assets/images/MHA/MYHOME6.png";

//PROJECT5
import CASHMERE1 from "../../assets/images/CCM/CASHMERE1.png";
import CASHMERE2 from "../../assets/images/CCM/CASHMERE2.png";
import CASHMERE3 from "../../assets/images/CCM/CASHMERE3.png";
import CASHMERE4 from "../../assets/images/CCM/CASHMERE4.png";
import CASHMERE5 from "../../assets/images/CCM/CASHMERE5.png";
import CASHMERE6 from "../../assets/images/CCM/CASHMERE6.png";


//PROJECT6

import SAINIKPURI1 from "../../assets/images/SAINIK/SAINIKPURI1.png";
import SAINIKPURI2 from "../../assets/images/SAINIK/SAINIKPURI2.png";
import SAINIKPURI3 from "../../assets/images/SAINIK/SAINIKPURI3.png";
import SAINIKPURI4 from "../../assets/images/SAINIK/SAINIKPURI4.png";
import SAINIKPURI5 from "../../assets/images/SAINIK/SAINIKPURI5.png";
import SAINIKPURI6 from "../../assets/images/SAINIK/SAINIKPURI6.png";


//PROJECT7

import RAJAPUSHPA1 from "../../assets/images/RG/RAJAPUSHPA1.png";
import RAJAPUSHPA2 from "../../assets/images/RG/RAJAPUSHPA2.png";
import RAJAPUSHPA3 from "../../assets/images/RG/RAJAPUSHPA3.png";
import RAJAPUSHPA4 from "../../assets/images/RG/RAJAPUSHPA4.png";
import RAJAPUSHPA5 from "../../assets/images/RG/RAJAPUSHPA5.png";
import RAJAPUSHPA6 from "../../assets/images/RG/RAJAPUSHPA6.png";









// Strip Image
import StripImage from "../../assets/images/strip.png"; // Update the path to your strip image


const projects2 = [
  {
    title: "SUBISHI POLAM",
    subtitle: "@Kompally",
    image: P1,
  },
  {
    title: "MY HOME ANKURA",
    subtitle: "@Kompally",
    image: P2,
  },
  {
    title: "CASHMERE COURT-MOKILA",
    subtitle: "@Kompally",
    image: P3,
  },
  {
    title: "4BHK VILLA",
    subtitle: "@LB Nagar",
    image: P4,
  },
  {
    title: "4BHK PENTHOUSE",
    subtitle: "@Kokapet",
    image: P5,
  },
];





const Explore = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "SUBISHI POLAM",
      subtitle: "@Kompally",
      images: [P1, P2, P3, P4, P5],
      heading: "3 BHK FLAT @ SUBISHI POLAM-KOMPALLY",
    },
    {
      title: "EMARALD",
      subtitle: "@NAMPALLY",
      images: [EMARALD1, EMARALD2, EMARALD3, EMARALD4, EMARALD5, EMARALD6],
      heading: "3 BHK FLAT @ EMERALD GREEN-KOMPALLY",
    },
    {
      title: "VILLA",
      subtitle: "@LB NAGAR",
      images: [VILLA1, VILLA2, VILLA3, VILLA4, VILLA5, VILLA6],
      heading: "4 BHK VILLA @ LB NAGAR",
    },
    {
      title: "MHA",
      subtitle: "@LB NAGAR",
      images: [MYHOME1, MYHOME2, MYHOME3, MYHOME4, MYHOME5, MYHOME6],
      heading: "MY HOME ANKURA",
    },
    {
      title: "CCM",
      subtitle: "@LB NAGAR",
      images: [CASHMERE1, CASHMERE2, CASHMERE3, CASHMERE4, CASHMERE5, CASHMERE6],
      heading: "CASHMERE COUTR-MOKILA",
    },
    {
      title: "SAINIK",
      subtitle: "@LB NAGAR",
      images: [SAINIKPURI1, SAINIKPURI2, SAINIKPURI3, SAINIKPURI4, SAINIKPURI5, SAINIKPURI6],
      heading: "3 BHK FLAT @ SAINIKPURI",
    },
    {
      title: "RG",
      subtitle: "@LB NAGAR",
      images: [RAJAPUSHPA1, RAJAPUSHPA2, RAJAPUSHPA3,RAJAPUSHPA4, RAJAPUSHPA5, RAJAPUSHPA6],
      heading: "3 BHK FLAT @ SAINIKPURI",
    },
    
    
    // Add more projects here
  ];

  return (
    <div className="w-full lg:px-[10px] px-8 lg:py-10 py-10 bg-black text-white">
      {/* Title Section */}
      <div className="flex items-center mb-8">
        <div className="border-t border-white flex-grow"></div>
        <span className="px-4 text-2xl font-light text-[30px] uppercase">
          Our Projects
        </span>
        <div className="border-t border-white flex-grow"></div>
      </div>

      {/* First Three Projects (3 Columns) */}
      <div className="grid grid-cols-3 gap-4">
        {projects2.slice(0, 3).map((projects2, index) => (
          <div
            key={index}
            className="relative group cursor-pointer hover:scale-105 transition-transform"
          >
            {/* Project Image */}
            <img
              src={projects2.image}
              alt={projects2.title}
              className="object-cover w-full h-[300px]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>

            {/* Project Title and Subtitle */}
            <div className="absolute top-4 left-4 z-10">
              <h3 className="text-white font-bold text-xl">{projects2.title}</h3>
              <p className="text-white text-sm">{projects2.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Last Two Projects (2 Columns) */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {projects2.slice(3).map((projects2, index) => (
          <div
            key={index}
            className="relative group cursor-pointer hover:scale-105 transition-transform"
          >
            {/* Project Image */}
            <img
              src={projects2.image}
              alt={projects2.title}
              className="object-cover w-full h-[300px]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>

            {/* Project Title and Subtitle */}
            <div className="absolute top-4 left-4 z-10">
              <h3 className="text-white font-bold text-xl">{projects2.title}</h3>
              <p className="text-white text-sm">{projects2.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See All Projects Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowAllProjects(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
        >
          SEE ALL PROJECTS
        </button>
      </div>

      {/* Additional Projects */}
      {showAllProjects && (
        <div className="mt-8">
          {/* Strip Image and Title */}
          <div className="relative mb-8">
            <img src={StripImage} alt="Strip" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <h2 className="text-3xl font-bold">Our All Projects</h2> */}
            </div>
          </div>

          {projects.slice(1).map((project, projectIndex) => (
            <div key={projectIndex} className="mb-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light">{project.heading}</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="hover:transition-transform transform hover:scale-105">
                    <img
                      src={image}
                      // alt={${project.title} Project ${index + 1}}
                      className="object-cover w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
