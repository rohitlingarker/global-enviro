"use client";

import Image from "next/image";

export default function CentrifugalFans() {
  return (
    <main className="bg-gray-50 text-gray-800">

     
    {/* FULL-WIDTH HEADER WITH COLOR */}
     <section className="max-w-6xl mx-auto md:px-12 lg:px-20 px-6 py-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Centrifugal Fans
        </h1>
        <p>
          Centrifugal fans are engineered to move air efficiently across a wide range of industrial processes.
Their robust design ensures reliable operation even in demanding environments.
With high airflow capacity and low noise levels, they deliver optimal performance and energy savings.
Ideal for ventilation, dust extraction, and fume handling applications across multiple industries.
        </p>
        
      </section>


      {/* ABOUT SECTION – 2 COLUMN */}
      <section className="px-6 md:px-12 lg:px-20 py-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT: TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              About Global Enviro Centrifugal Fans
            </h2>
            <p className="mb-4 leading-relaxed">
              Centrifugal Blowers from Global Enviro are among the most efficient and versatile
              air-moving systems used in modern industries. These fans are built to deliver
              consistent airflow, low vibration, and quiet operation, making them ideal for a
              variety of air handling and process applications.
            </p>
            <p className="leading-relaxed">
              Our centrifugal fans are precision-engineered with aerodynamic designs that enhance
              airflow efficiency while minimizing energy consumption. Each fan is fabricated with
              robust materials and high-quality components, ensuring long life and reliability
              even in challenging operating environments.
            </p>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-[320px]">
              <Image
                src="/assets/images/centrifugal fans.png"
                alt="Centrifugal Fans"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="px-6 md:px-12 lg:px-20 py-10 bg-blue-50">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Applications</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Induced Draft (ID) and Forced Draft (FD) Systems</li>
          <li>Primary Air (PA) Systems in Boilers</li>
          <li>Dust Extraction Systems</li>
          <li>Fume Exhaust Systems</li>
          <li>Pneumatic Conveying Systems</li>
          <li>Industrial Ventilation and Air Circulation</li>
        </ul>
      </section>

      {/* KEY FEATURES */}
      <section className="px-6 md:px-12 lg:px-20 py-10 bg-white">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>High Efficiency:</strong> Designed for maximum airflow with minimal power usage.
          </li>
          <li>
            <strong>Low Noise Operation:</strong> Engineered blades ensure smooth, quiet performance.
          </li>
          <li>
            <strong>Durable Construction:</strong> Built with SS316, SS304, or IS2062 materials.
          </li>
          <li>
            <strong>Wide Temperature Range:</strong> Performs reliably up to 400°C.
          </li>
          <li>
            <strong>Flexible Design Options:</strong> Forward, Backward, Radial, and Aerofoil blades.
          </li>
          <li>
            <strong>Easy Maintenance:</strong> Simple design for quick servicing.
          </li>
        </ul>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 md:px-12 lg:px-20 py-10 bg-blue-50">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Why Choose Global Enviro Centrifugal Fans?
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Advanced aerodynamic design for reduced resistance.</li>
          <li>Energy efficient — lower operating costs.</li>
          <li>Custom-built solutions for your needs.</li>
          <li>Proven reliability under tough conditions.</li>
        </ul>
      </section>

      {/* PERFORMANCE */}
      <section className="px-6 md:px-12 lg:px-20 py-10 bg-white">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Performance You Can Rely On
        </h3>
        <p className="leading-relaxed">
          With a reputation for quality engineering and dependable performance, Global Enviro
          Centrifugal Fans are the preferred choice for industries seeking efficient air movement,
          long-lasting durability, and energy savings across multiple applications.
        </p>
      </section>
    </main>
  );
}
