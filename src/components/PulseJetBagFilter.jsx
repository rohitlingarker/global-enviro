'use client';
import Image from 'next/image';
import React from 'react';

export default function CentrifugalFansPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* -------- Hero / Intro Section -------- */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Centrifugal Fans
        </h1>
        <p>
          Centrifugal fans are engineered to move air efficiently across a wide range of industrial processes. 
          Their robust design ensures reliable operation even in demanding environments. 
        </p>
        <p className="mt-3">
          With high airflow capacity and low noise levels, they deliver optimal performance and energy savings — 
          ideal for ventilation, dust extraction, and fume handling applications across multiple industries.
        </p>
      </section>

      {/* -------- Combined Section: About + Image -------- */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 items-start">
          {/* LEFT: TEXT */}
          <div className="flex flex-col justify-start space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                About Global Enviro Centrifugal Fans
              </h2>
              <p className="mb-4">
                Centrifugal Blowers from Global Enviro are among the most efficient and versatile air-moving 
                systems used in modern industries. These fans deliver consistent airflow, low vibration, 
                and quiet operation, making them ideal for a variety of air handling and process applications.
              </p>
              <p>
                Our centrifugal fans are precision-engineered with aerodynamic designs that enhance airflow 
                efficiency while minimizing energy consumption. Each fan is built with robust materials and 
                high-quality components to ensure long life and reliability, even in challenging environments.
              </p>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative w-full h-[420px]">
            <Image
              src="/assets/images/centrifugal fans.png"
              alt="Centrifugal Fan System"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* -------- Key Features -------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Key Features</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>High Efficiency – Maximum airflow with minimal power usage.</li>
          <li>Low Noise Operation – Aerodynamic blades ensure smooth performance.</li>
          <li>Durable Construction – Built with high-grade SS316, SS304, or IS2062 materials.</li>
          <li>Wide Temperature Range – Reliable operation up to 400°C.</li>
          <li>Flexible Design Options – Forward, Backward, Radial, and Aerofoil blade types.</li>
          <li>Easy Maintenance – Simple design for quick servicing and part replacement.</li>
        </ul>
      </section>

      {/* -------- Applications -------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Applications</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Induced Draft (ID) and Forced Draft (FD) Systems</li>
          <li>Primary Air (PA) Systems in Boilers</li>
          <li>Dust Extraction Systems</li>
          <li>Fume Exhaust Systems</li>
          <li>Pneumatic Conveying Systems</li>
          <li>Industrial Ventilation and Air Circulation</li>
        </ul>
      </section>

      {/* -------- Why Choose Us -------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Why Choose Global Enviro Centrifugal Fans?
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Advanced Aerodynamic Design – Optimized for enhanced airflow and reduced resistance.</li>
          <li>Energy Efficient – Low operating costs through efficient power utilization.</li>
          <li>Custom-Built Solutions – Tailored to match your specific process and performance needs.</li>
          <li>Proven Reliability – Designed to perform continuously under tough industrial conditions.</li>
        </ul>
      </section>

      {/* -------- Final Summary -------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Performance You Can Rely On
        </h2>
        <p>
          With a reputation for quality engineering and dependable performance, Global Enviro Centrifugal Fans 
          are the preferred choice for industries seeking efficient air movement, long-lasting durability, 
          and energy savings across multiple applications.
        </p>
      </section>
    </div>
  );
}


