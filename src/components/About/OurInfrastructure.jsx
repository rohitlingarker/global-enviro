import React from "react";
import Image from "next/image";

const OurInfrastructure = () => {
  const infrastructureImages = [
    "/assets/images/Infrastructure1.jpg",
    "/assets/images/Infrastructure4.jpg",
    "/assets/images/Infrastructure6.jpg",
    "/assets/images/Infrastructure8.jpg",
  ];

  return (
    <section
      className="relative overflow-hidden text-gray-800 py-20"
      style={{ backgroundColor: "#E6F0FF" }} // Light blue background
    >
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 gap-12">
        
        {/* Left Content */}
        <div className="max-w-md lg:max-w-lg">
          <h2 className="text-5xl font-extrabold mb-6 text-black">
            Our Infrastructure
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-black">
              Global Enviro Air Systems Pvt. Ltd.
            </span>, our state-of-the-art infrastructure blends innovation and 
            precision. With advanced machinery, skilled professionals, and modern 
            manufacturing facilities, we ensure that every product meets 
            international quality standards and exceeds client expectations.
          </p>
        </div>

        {/* Right: Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 flex-1">
          {infrastructureImages.map((image, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-500"
            >
              <Image
                src={image}
                alt={`Infrastructure ${index + 1}`}
                width={500}
                height={350}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurInfrastructure;
