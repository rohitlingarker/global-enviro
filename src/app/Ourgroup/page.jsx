"use client";
import Link from "next/link";
import React from "react";


const companies = [
  {
    id: 1,
    name: "Global Enviro Air Systems (P) Ltd",
    description:
      "Global Enviro Air Systems Private Limited is a distinguished designer and manufacturer specializing in a diverse range of air pollution control systems. Our systems are meticulously crafted to reduce or eliminate the emission of pollutants into the atmosphere. Additionally, we serve as turnkey solution providers for HVAC Cleanrooms projects, offering a comprehensive range of solutions such as air handling units, Puff Panels, Doors, and Dust collectors tailored for manufacturing areas. We extend our expertise to provide solutions for cement/fly ash unloading systems from silos and racks. Our systems cater to various industries, including cement, power, steel, pharmaceuticals, paper, distilleries, food, and scientific industries.",
    image:
      "/assets/images/global image.jpg",
    shape: "rounded-full", // Circle shape
    link: "/about",
  },
  {
    id: 2,
    name: "Indophil Jettech Energy Private Limited",
    description:
      "Indophil Jettech Energy Pvt. Ltd. is a leading player in Engineering, Procurement, and Construction (EPC) services for Biomass Power Plants, Solar Power Plants, Edible Oil Refineries, and Process Boilers. As a rapidly growing entity in the Philippines Energy Sector, our portfolio boasts over 55 MW (Biomass Power Plants) capacity and 15 MW (Solar Power Plants).",
    image:
      "/assets/images/jettech.jpg",
     link: "https://www.jettechenergy.com/",
  },
  {
    id: 3,
    name: "Global Metallurgicals",
    description:
      "The company specialises in manufacturing Manganese Steel Castings and Hi-Chrome Castings. Cast iron items mainly include Rotary Airlock Valves, Dust Collector Cones, Bearing Housings, Liners, and Beaters, hammers for crushers with induction furnace capacity of 500 kgs, Heat Treatment facility, and in-house machining.",
    image:
      "/assets/images/metallurgy.jpg",
    shape: "rounded-full", // Custom diagonal cut shape
     link: "/Ourgroup/GlobalMetallurgy",
  },
];

export default function GroupPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-8 py-12">
      {/* Heading */}
      <h1 className="text-6xl font-bold text-primary mb-14">Our Group</h1>

      {/* Company Sections */}
      <div className="space-y-20">
        {companies.map((company, index) => (
          <div
            key={company.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            {/* Text Section */}
            <div className="md:w-1/2 space-y-5">
              <h2 className="text-4xl font-semibold text-accent">
                {company.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-justify">
                {company.description}
              </p>
              <Link href={company.link} className="mt-3 bg-primary text-primary-foreground px-5 py-2 rounded-md hover:opacity-90 transition">
                View More
              </Link>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <div
                className={`overflow-hidden w-100 h-100 object-cover ${
                  company.shape
                }`}
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Shapes */}
      <style jsx>{`
        .clip-trapezoid {
          clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
          border-radius: 1rem;
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 10%, 90% 100%, 0% 90%);
          border-radius: 1rem;
        }
      `}</style>
    </div>
  );
}
