import React from "react";

const Certifications = () => {
  return (
    <section className="bg-background py-16 px-6 md:px-20 text-center min-h-screen flex flex-col justify-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-foreground mb-10">
        Our Certifications & Recognitions
      </h2>

      {/* Certificates Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="bg-card rounded-xl shadow-md overflow-hidden w-72 hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/images/Certificate1.jpg"
            alt="ISO Certificate 1"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="bg-card rounded-xl shadow-md overflow-hidden w-72 hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/images/Certificate2.jpg"
            alt="ISO Certificate 2"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
        At{" "}
        <span className="font-semibold text-primary">
          Global Enviro Air Systems Pvt. Ltd.
        </span>
        , our internationally recognized certifications reflect our unwavering
        commitment to excellence, quality, and customer satisfaction. These
        certifications validate our strong quality management systems and
        continual improvement practices that drive innovation and trust in every
        project we deliver.
      </p>
    </section>
  );
};

export default Certifications;
