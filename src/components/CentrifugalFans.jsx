'use client';
import React from 'react';
import Image from 'next/image';

export default function CentrifugalFansPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* -------- About Section with Image -------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* ---- Text Content ---- */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-[#1A3B7A]">
            About Global Enviro Centrifugal Fans
          </h1>
          <p className="mb-4">
            Centrifugal Blowers from <span className="font-semibold">Global Enviro</span> are among
            the most efficient and versatile air-moving systems used in modern industries. These fans
            are built to deliver consistent airflow, low vibration, and quiet operation, making them
            ideal for a variety of air handling and process applications.
          </p>
          <p>
            Our centrifugal fans are precision-engineered with aerodynamic designs that enhance airflow
            efficiency while minimizing energy consumption. Each fan is fabricated with robust materials
            and high-quality components, ensuring long life and reliability even in challenging operating
            environments.
          </p>
        </div>

        {/* ---- Image beside text ---- */}
        <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-md">
          <div
            className="absolute top-0 left-0 h-full bg-[#c7d9f8] opacity-60"
            style={{
              width: '35%',
              clipPath: 'polygon(0 0, 80% 0, 100% 100%, 20% 100%)',
            }}
          ></div>
          <Image
            src="/assets/images/centrifugal fans.png" 
            alt="Global Enviro Centrifugal Fan"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* -------- Applications Section -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-4">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Induced Draft (ID) and Forced Draft (FD) Systems</li>
          <li>Primary Air (PA) Systems in Boilers</li>
          <li>Dust Extraction Systems</li>
          <li>Fume Exhaust Systems</li>
          <li>Pneumatic Conveying Systems</li>
          <li>Industrial Ventilation and Air Circulation</li>
        </ul>
      </section>

      {/* -------- Key Features Section -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">High Efficiency:</span> Designed for maximum airflow with
            minimal power usage.
          </li>
          <li>
            <span className="font-semibold">Low Noise Operation:</span> Engineered blades ensure
            smooth, quiet performance.
          </li>
          <li>
            <span className="font-semibold">Durable Construction:</span> Built with high-grade SS316,
            SS304, or IS2062 materials.
          </li>
          <li>
            <span className="font-semibold">Wide Temperature Range:</span> Performs reliably in
            environments up to 400°C.
          </li>
          <li>
            <span className="font-semibold">Flexible Design Options:</span> Available in multiple
            blade types — Forward, Backward, Radial, and Aerofoil.
          </li>
          <li>
            <span className="font-semibold">Easy Maintenance:</span> Simple design for quick assembly,
            disassembly, and servicing.
          </li>
        </ul>
      </section>

      {/* -------- Why Choose Section -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-4">
          Why Choose Global Enviro Centrifugal Fans?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Advanced Aerodynamic Design:</span> Optimized for enhanced
            airflow and reduced resistance.
          </li>
          <li>
            <span className="font-semibold">Energy Efficient:</span> Low operating costs through
            efficient power utilization.
          </li>
          <li>
            <span className="font-semibold">Custom-Built Solutions:</span> Tailored to match your
            specific process and performance needs.
          </li>
          <li>
            <span className="font-semibold">Proven Reliability:</span> Designed to perform continuously
            under tough industrial conditions.
          </li>
        </ul>
      </section>

      {/* -------- Performance Section -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-4">Performance You Can Rely On</h2>
        <p>
          With a reputation for quality engineering and dependable performance, Global Enviro
          Centrifugal Fans are the preferred choice for industries seeking efficient air movement,
          long-lasting durability, and energy savings across multiple applications.
        </p>
      </section>
    </div>
  );
}




// 'use client';
// import React from 'react';

// export default function CentrifugalFansPage() {
//   return (
//     <div className="bg-white text-gray-800 leading-relaxed">
//       {/* -------- Hero / Intro Section -------- */}
//       <section className="max-w-6xl mx-auto px-6 py-12">
//         <h1 className="text-4xl font-bold mb-6 text-[#1A3B7A]">
//           About Global Enviro Centrifugal Fans
//         </h1>
//         <p className="mb-4">
//           Centrifugal Blowers from <span className="font-semibold">Global Enviro</span> are among
//           the most efficient and versatile air-moving systems used in modern industries. These fans
//           are built to deliver consistent airflow, low vibration, and quiet operation, making them
//           ideal for a variety of air handling and process applications.
//         </p>
//         <p className="mb-4">
//           Our centrifugal fans are precision-engineered with aerodynamic designs that enhance airflow
//           efficiency while minimizing energy consumption. Each fan is fabricated with robust materials
//           and high-quality components, ensuring long life and reliability even in challenging operating
//           environments.
//         </p>
//       </section>

//       {/* -------- Applications Section -------- */}
//       <section className="max-w-6xl mx-auto px-6 pb-10">
//         <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-4">Applications</h2>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Induced Draft (ID) and Forced Draft (FD) Systems</li>
//           <li>Primary Air (PA) Systems in Boilers</li>
//           <li>Dust Extraction Systems</li>
//           <li>Fume Exhaust Systems</li>
//           <li>Pneumatic Conveying Systems</li>
//           <li>Industrial Ventilation and Air Circulation</li>
//         </ul>
//       </section>

//       {/* -------- Key Features Section -------- */}
//       <section className="max-w-6xl mx-auto px-6 pb-10">
//         <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-4">Key Features</h2>
//         <ul className="list-disc list-inside space-y-2">
//           <li>
//             <span className="font-semibold">High Efficiency:</span> Designed for maximum airflow with
//             minimal power usage.
//           </li>
//           <li>
//             <span className="font-semibold">Low Noise Operation:</span> Engineered blades ensure
//             smooth, quiet performance.
//           </li>
//           <li>
//             <span className="font-semibold">Durable Construction:</span> Built with high-grade SS316,
//             SS304, or IS2062 materials.
//           </li>
//           <li>
//             <span className="font-semibold">Wide Temperature Range:</span> Performs reliably in
//             environments up to 400°C.
//           </li>
//           <li>
//             <span className="font-semibold">Flexible Design Options:</span> Available in multiple
//             blade types — Forward, Backward, Radial, and Aerofoil.
//           </li>
//           <li>
//             <span className="font-semibold">Easy Maintenance:</span> Simple design for quick assembly,
//             disassembly, and servicing.
//           </li>
//         </ul>
//       </section>

//       {/* -------- Why Choose Section -------- */}
//       <section className="max-w-6xl mx-auto px-6 pb-10">
//         <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-4">
//           Why Choose Global Enviro Centrifugal Fans?
//         </h2>
//         <ul className="list-disc list-inside space-y-2">
//           <li>
//             <span className="font-semibold">Advanced Aerodynamic Design:</span> Optimized for enhanced
//             airflow and reduced resistance.
//           </li>
//           <li>
//             <span className="font-semibold">Energy Efficient:</span> Low operating costs through
//             efficient power utilization.
//           </li>
//           <li>
//             <span className="font-semibold">Custom-Built Solutions:</span> Tailored to match your
//             specific process and performance needs.
//           </li>
//           <li>
//             <span className="font-semibold">Proven Reliability:</span> Designed to perform continuously
//             under tough industrial conditions.
//           </li>
//         </ul>
//       </section>

//       {/* -------- Performance Section -------- */}
//       <section className="max-w-6xl mx-auto px-6 pb-16">
//         <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-4">Performance You Can Rely On</h2>
//         <p>
//           With a reputation for quality engineering and dependable performance, Global Enviro
//           Centrifugal Fans are the preferred choice for industries seeking efficient air movement,
//           long-lasting durability, and energy savings across multiple applications.
//         </p>
//       </section>
//     </div>
//   );
// }
