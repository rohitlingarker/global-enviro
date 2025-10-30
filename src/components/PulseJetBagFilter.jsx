'use client';
import Image from 'next/image';
import React from 'react';

export default function PulseJetBagFilterPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* -------- Hero / Intro Section -------- */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Pulse Jet Bag Filter / Pulse Jet Hose Bag Type Filters
        </h1>
        <p>
          Global Enviro offers advanced Pulse Jet Bag Filters — also known as
          conventional de-dusting filters — designed with next-generation
          de-dusting technology to deliver superior performance, longer filter
          life, and minimal maintenance.
        </p>
        <p className="mt-3">
          We provide customized bag filters tailored to meet specific industrial
          applications where airflows are large, operating temperatures are
          elevated, or dust characteristics are challenging to handle.
        </p>
      </section>

      {/* -------- Combined Section: Our Innovation + About Fabric Filtration -------- */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 items-start">
          {/* Left Side: Two text sections stacked with less gap */}
          <div className="flex flex-col justify-start space-y-8">
            {/* Our Innovative Designs */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                Our Innovative Designs Ensure:
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Lower emission levels</li>
                <li>Reduced pressure drop and power consumption</li>
                <li>Higher air-to-cloth ratios</li>
                <li>Optimized space utilization</li>
                <li>Extended filter bag life</li>
              </ul>
            </div>

            {/* About Fabric Filtration Technology */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                About Fabric Filtration Technology
              </h2>
              <p>
                The concept of fabric filtration began over a century ago and
                remains one of the most effective and practical methods for
                separating solid particles from air or gas streams.
              </p>
              <p className="mt-2">
                In this system, tubular filter fabrics (woven or non-woven) are
                placed vertically inside a housing. Each filter bag is supported
                by a metal cage fitted with a venture to prevent collapse under
                pressure or vacuum conditions.
              </p>
            </div>
          </div>

          {/* Right Side: Image (reduced height) */}
          <div className="relative w-full h-[480px]">
            <Image
              src="/assets/images/pulsejet.png"
              alt="Pulse Jet Bag Filter System"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* -------- Cleaning Mechanism -------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Cleaning Mechanism
        </h2>
        <p>
          The accumulated dust is cleaned row-by-row — online or offline — using
          short bursts of compressed air. This air is blown in the reverse
          direction from a clean air plenum, dislodging dust from the filter
          bags.
        </p>
        <p className="mt-2">
          Cracked dust cake and loose particles fall into the bottom hopper,
          where they are continuously or periodically discharged through the
          removal system.
        </p>
      </section>

      {/* -------- Air Pollution Control Device -------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Air Pollution Control Device
        </h2>
        <p>
          An Air Pollution Control Device (APCD) is equipment that extracts
          contaminated air containing dust, fumes, or particulates from
          industrial processes and filters it to release clean, breathable air
          into the atmosphere.
        </p>
        <p className="mt-2">
          These systems are known by various names such as Bag Filter, Pulse Jet
          Dust Collector, De-dusting System, and more.
        </p>
      </section>

      {/* -------- Key Components -------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Key Components
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Filter Bags (woven / non-woven)</li>
          <li>Filter Cages</li>
          <li>Pulse Cleaning Valves</li>
          <li>Sequential Timer Units</li>
          <li>Centrifugal Blowers</li>
          <li>Rotary Airlock Valves (RAV)</li>
          <li>Filter Cartridges</li>
        </ul>
      </section>

      {/* -------- Applications -------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Applications
        </h2>
        <ul className="list-disc pl-6 space-y-1">
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
