"use client";
import React, { useState, useEffect } from "react";

const slideImages = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80", // new solar panels
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
];



const heading = "About Jet Tech Group";
const aboutText = `
Jet Tech is a multi-disciplinary Group with diversified interest in Energy, Power and other Process Industries providing a wide range of Engineering, Procurement and Construction (EPC), Operation & Maintenance Services and Products including Balance of Power Plant packages, Materials & Ash Handling, Pneumatic Conveying and Auxiliary Systems of Thermal Power Plants and other Process Industries on Oil & fats industries. 

Its flagship Company Jet Tech Group offers EPC Services for complete Power Plants and is one of the leading engineering & manufacturing companies in Philippines. Group has also ventured into developing Renewable Energy based Power Plants as part of its expanded portfolio.Jet Tech is a multi-disciplinary Group with diversified interest in Energy, Power and other Process Industries providing a wide range of Engineering.

`;

export default function AboutPage() {
  const [idx, setIdx] = useState(0);

  // Simple timed switch, no animation
  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % slideImages.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white px-8 py-8 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-12">{heading}</h1>
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-10">
        {/* Left: 1/3 slideshow */}
        <div className="md:max-w-1/3 w-full flex justify-center mb-10 md:mb-0 px-8 ml-2 py-4">
          <div className="relative w-full max-w-4xl h-[320px] rounded-md  overflow-hidden bg-gray-100">
            {slideImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Jet Tech Group Facility #${i + 1}`}
                className={`absolute w-full h-full object-cover ${i === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              />
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {slideImages.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === idx ? "bg-green-600" : "bg-gray-300"}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Right: 2/3 text */}
        <div className="md:max-w-2x1 w-full max-w-2xl flex flex-col Jet Tech is a multi-disciplinary Group with diversified interest in Energy, Power and other Process Industries providing a wide range of Engineering, Procurement and Construction (EPC), Operation & Maintenance Services and Products including Balance of Power Plant packages, Materials & Ash Handling, Pneumatic Conveying and Auxiliary Systems of Thermal Power Plants and other Process Industries on Oil & fats industries. Its flagship Company Jet Tech Group offers EPC Services for complete Power Plants and is one of the leading engineering & manufacturing companies in Philippines. Group has also ventured into developing Renewable Energy based Power Plants as part of its expanded portfolio. justify-items-normal md:pl-8">
          <p className="text-neutral-950 text-gray-600 leading-relaxed whitespace-pre-line">{aboutText}</p>
        </div>
      </div>
    </div>
  );
}
