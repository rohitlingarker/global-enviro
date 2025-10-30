"use client";
import Image from "next/image";
import React from "react";

export default function GlobalMetallurgicalsPage() {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen text-gray-800 font-sans">
      {/* ---------- HEADER ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-wide text-accent">
          GLOBAL <span className="font-normal text-accent">Metallurgicals</span>
        </h1>

        <h2 className="text-2xl font-semibold text-sky-800 mt-4">
          Global Metallurgical
        </h2>

        <p className="text-base mt-4 leading-relaxed text-gray-700 max-w-4xl">
          The company specialises in manufacturing Manganese Steel Castings and
          Hi-Chrome Castings. Cast iron items mainly include Rotary airlock
          valves, Dust collector cones, Bearing housings, Liners and beaters,
          hammers for crushers with induction furnace capacity of 500 Kgs, Heat
          treatment facility, and In-house machining.
        </p>
      </section>

      {/* ---------- IMAGE GRID ---------- */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Castings", img: "/assets/images/castings.png" },
          { title: "Carbon", img: "/assets/images/carbon.png" },
          { title: "Guidevan", img: "/assets/images/guidevan.png" },
          { title: "MDC Cones", img: "/assets/images/MDC cones.png" },
          { title: "Rotary Airlock Valve", img: "/assets/images/rotary airlock valve.png" },
          { title: "Core Shop", img: "/assets/images/core shop.png" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="aspect-[4/3] bg-gray-200 relative clip-hex">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center py-3 bg-sky-900 text-white font-semibold">
              {item.title}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
