import React, { useState } from "react";
import { LogoLinkedin, ChevronDown, LogoInstagram, Person } from "react-ionicons";
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video4 from "../../assets/videos/video4.mp4";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const navItems = [
    { path: "/", title: "Home" },
    { path: "/", title: "About" },
    { path: "/", title: "Service" },
    { path: "/", title: "Projects" },
    { path: "/", title: "Contact us" },
  ];

  const videos = [video1, video2, video4]; // Array of videos
  const [currentVideo, setCurrentVideo] = useState<number>(0);

  // Handle video end
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="w-full h-screen relative flex items-center justify-center">
      {/* Video Background */}
      <video
        key={currentVideo}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videos[currentVideo]}
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd}
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Header Content */}
      <div className="absolute top-0 w-full z-50 flex items-center justify-between px-5 lg:px-[150px] py-5">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Company Logo"
            className="h-[70px] md:h-[200px]" // Responsive logo size
          />
        </div>

        {/* Navigation Items */}
        <div className="hidden lg:flex gap-10">
          {navItems.map((item) => (
            <a
              href={item.path}
              key={item.title}
              className={`text-white font-light hover:underline ${
                item.title === "Contact us"
                  ? "border border-white px-4 py-1 rounded-md" // Styled Contact Us
                  : ""
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <Person color="white" cssClasses={"cursor-pointer"} />
          <LogoLinkedin color="white" cssClasses={"cursor-pointer"} />
          <LogoInstagram color="white" cssClasses={"cursor-pointer"} />
        </div>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col gap-4 items-center text-center">
        {/* <h1 className="text-white lg:text-[60px] text-[40px] font-semibold z-50">
          Build Your Home With Experts
        </h1> */}
        {/* <p className="text-gray-300 text-[15px] lg:max-w-[700px] max-w-[450px] z-50">
          Create stunning and functional spaces with our expertise.
        </p> */}
        {/* <button className="text-[#333] rounded-full bg-white font-medium px-5 py-3 mt-5 z-50">
          Explore Our Designs
        </button> */}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-5 w-full flex items-center justify-center">
        <ChevronDown color="white" width="30px" height="30px" cssClasses="animate-bounce" />
      </div>
    </div>
  );
};

export default Header;
