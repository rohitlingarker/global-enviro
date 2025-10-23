import React from "react";

const AboutSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row w-full bg-white overflow-hidden">
      {/* Left Content Section */}
      <div className="relative z-10 md:w-1/2 bg-white px-8 md:px-16 py-12 md:py-20">
        <h2 className="text-blue-600 text-3xl font-bold mb-2 uppercase tracking-wide">
          About
        </h2>
        <h3 className="text-blue-800 text-2xl md:text-3xl font-bold mb-6 uppercase leading-snug">
          Global Enviro Group
        </h3>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
          tortor sed ipsum convallis pharetra. Suspendisse facilisis, velit vel
          finibus congue, sem neque tincidunt lacus, vitae volutpat justo nisi
          non felis. Vestibulum mattis metus et arcu blandit, sed pulvinar
          libero commodo. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Quisque non tortor sed ipsum convallis pharetra. Suspendisse
          facilisis, velit vel finibus congue, sem neque tincidunt lacus, vitae
          volutpat justo nisi non felis. Vestibulum mattis metus et arcu
          blandit, sed pulvinar libero commodo.
        </p>
      </div>

      {/* Decorative angled divider */}
      <div className="hidden md:block absolute top-0 left-1/2 transform -skew-x-12 w-1/6 h-full bg-gray-100 z-0"></div>

      {/* Right Image Section */}
      <div className="md:w-1/2 relative z-10">
        <img
          src="/assets/images/enviro.png"
          alt="Global Enviro Group"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
