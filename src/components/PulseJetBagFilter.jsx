'use client';
import React from 'react';
import Image from 'next/image';

export default function PulseJetBagFilterPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* -------- HERO / INTRO SECTION -------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* ---- TEXT CONTENT ---- */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-[#1A3B7A]">
            Pulse Jet Bag Filter / Pulse Jet Hose Bag Type Filters
          </h1>
          <p className="mb-4">
            <span className="font-semibold">Global Enviro</span> offers advanced Pulse Jet Bag Filters — 
            also known as conventional de-dusting filters — designed with next-generation de-dusting 
            technology to deliver superior performance, longer filter life, and minimal maintenance.
          </p>
          <p className="mb-4">
            Our innovative designs ensure:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Lower emission levels</li>
            <li>Reduced pressure drop and power consumption</li>
            <li>Higher air-to-cloth ratios</li>
            <li>Optimized space utilization</li>
            <li>Extended filter bag life</li>
          </ul>
          <p className="mt-4">
            We provide customized bag filters tailored for specific industrial applications where 
            airflows are large, operating temperatures are elevated, or dust characteristics are 
            challenging to handle.
          </p>
        </div>

        {/* ---- IMAGE ---- */}
        <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-md">
          <div
            className="absolute top-0 left-0 h-full bg-[#c7d9f8] opacity-60"
            style={{
              width: '35%',
              clipPath: 'polygon(0 0, 80% 0, 100% 100%, 20% 100%)',
            }}
          ></div>
          <Image
            src="/assets/images/pulsejet.png" 
            alt="Pulse Jet Bag Filter"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* -------- FABRIC FILTRATION TECHNOLOGY -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-3">
          About Fabric Filtration Technology
        </h2>
        <p className="mb-4">
          Fabric filtration, developed over a century ago, remains one of the most effective and 
          practical methods for separating solid particles from air or gas streams.
        </p>
        <p className="mb-4">
          In this system, tubular filter fabrics (woven or non-woven) are placed vertically inside 
          a housing. Each filter bag is supported by a metal cage fitted with a venture to prevent 
          collapse under pressure or vacuum conditions.
        </p>
        <p>
          Dust-laden air passes through the fabric, and particulate matter is captured on the outer 
          surface of the bags, forming a dust cake.
        </p>
      </section>

      {/* -------- CLEANING MECHANISM -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-3">
          Cleaning Mechanism
        </h2>
        <p className="mb-4">
          The accumulated dust is cleaned row-by-row — online or offline — using short bursts of 
          compressed air. This air is blown in the reverse direction from a clean air plenum, 
          dislodging dust from the filter bags.
        </p>
        <p className="mb-4">
          The built-in venture enhances pulse efficiency by drawing additional air, ensuring thorough 
          cleaning. Cracked dust cake and loose particles fall into the bottom hopper, where they are 
          continuously or periodically discharged.
        </p>
        <p className="font-medium">
          Typical Air Volume Range: 5,000 to 500,000 m³/hr (single or modular design)
        </p>
      </section>

      {/* -------- AIR POLLUTION CONTROL DEVICE -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-3">
          Air Pollution Control Device
        </h2>
        <p className="mb-4">
          An Air Pollution Control Device (APCD) extracts contaminated air containing dust, fumes, 
          or particulates from industrial processes and filters it to release clean, breathable air.
        </p>
        <p className="mb-2 font-medium">These systems are also known as:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Bag Filter / Bag House</li>
          <li>Pulse Jet Dust Collector</li>
          <li>De-dusting System</li>
          <li>Silo Vent Filter</li>
          <li>Reverse Air Cleaned Bag Filter</li>
          <li>Fabric Filter</li>
          <li>Fume Extraction System</li>
          <li>Dust Recovery System</li>
        </ul>
      </section>

      {/* -------- KEY COMPONENTS -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-3">Key Components</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Filter Bags (woven / non-woven)</li>
          <li>Filter Cages</li>
          <li>Pulse Cleaning Valves</li>
          <li>Sequential Timer Units</li>
          <li>Centrifugal Blowers</li>
          <li>Rotary Airlock Valves (RAV)</li>
          <li>Filter Cartridges</li>
        </ul>
      </section>

      {/* -------- FILTRATION EFFICIENCY -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-3">Filtration Efficiency</h2>
        <p className="mb-4">
          Global Enviro’s Air Pollution Control Devices or Pulse Jet Bag Filters achieve filtration 
          levels as low as <span className="font-semibold">2 mg/Nm³</span>, depending on application 
          and regulatory standards.
        </p>
        <p>
          Systems are custom-designed to comply with local pollution control board norms while 
          maintaining maximum operational efficiency.
        </p>
      </section>

      {/* -------- OPERATION -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-3">
          Pulse Jet Bag Filter – Operation
        </h2>
        <p className="mb-4">
          The Pulse Jet Bag Filter removes fine dust particles from air or gas streams released from 
          various industrial processes such as boilers, furnaces, cement units, and foundries. It ensures 
          a collection efficiency up to <span className="font-semibold">99.9%</span> and operates 
          effectively at temperatures up to <span className="font-semibold">260°C</span>.
        </p>
      </section>

      {/* -------- WORKING PRINCIPLE -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-3">
          Working Principle
        </h2>
        <p className="mb-4">
          Each filter bag is supported by a metal cage and mounted on a tube sheet at the top of the 
          bag house. Dirty air enters from the bottom or middle section and flows outside to inside 
          through the bags. Dust accumulates on the outer surface while clean air exits from the top.
        </p>
        <p>
          Bags are cleaned using short, high-pressure pulses of compressed air through a common manifold, 
          aided by a venture nozzle to enhance cleaning efficiency.
        </p>
      </section>

      {/* -------- TYPES OF CLEANING -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-3">
          Types of Cleaning Mechanisms
        </h2>
        <h3 className="font-semibold text-lg mt-2">Online Cleaning</h3>
        <p className="mb-3">
          In this method, bag house compartments remain operational during cleaning. A short pulse of 
          compressed air briefly interrupts filtration to dislodge dust from the bags.
        </p>

        <h3 className="font-semibold text-lg mt-4">Offline Cleaning</h3>
        <p>
          The bag house consists of multiple compartments. Each section is periodically isolated, cleaned, 
          and brought back online while others continue filtering. Ideal for large air volumes and 
          low-density dust applications.
        </p>
      </section>

      {/* -------- APPLICATIONS -------- */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold text-[#1A3B7A] mb-3">Applications</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Process & Power Boilers</li>
          <li>Steel Melting Induction Furnaces</li>
          <li>Cement and Mineral Processing Plants</li>
          <li>Food & Pharmaceutical Industries</li>
          <li>Lead Smelting and Foundry Operations</li>
        </ul>
      </section>
    </div>
  );
}
