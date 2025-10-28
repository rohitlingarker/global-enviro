import React from "react";

const OurInfrastructure = () => {
  return (
    <section className="bg-background py-16 px-6 md:px-20 min-h-screen flex flex-col justify-center items-center text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-foreground mb-10">
        Our Infrastructure
      </h2>

      {/* Description */}
      <p className="max-w-4xl text-lg text-muted-foreground leading-relaxed mb-12">
        At <span className="text-primary font-semibold">Global Enviro Air Systems Pvt. Ltd.</span>, 
        we take immense pride in our state-of-the-art infrastructure that 
        enables us to deliver high-quality air systems with precision, efficiency, 
        and reliability. Our facilities are equipped with advanced manufacturing 
        technologies, testing laboratories, and R&D units that ensure every product 
        meets international standards.
      </p>

      {/* Infrastructure Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-card rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/images/factory1.jpg"
            alt="Manufacturing Unit"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Advanced Manufacturing Unit
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our modern manufacturing facility is equipped with precision tools 
            and automated machinery to produce efficient air handling and filtration systems.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-card rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/images/lab.jpg"
            alt="Testing Laboratory"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Quality Testing Laboratory
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our in-house testing lab ensures every product undergoes rigorous 
            performance and safety checks before reaching our customers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-card rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/images/team.jpg"
            alt="R&D and Technical Team"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            R&D and Technical Team
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our expert engineers and innovators continuously improve designs, 
            integrate new technologies, and drive sustainable air solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurInfrastructure;
