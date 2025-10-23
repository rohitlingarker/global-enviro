// "use client";
// import Image from "next/image";

// export default function AboutSection() {
//   return (
//     <section className="relative bg-white overflow-hidden py-16 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-stretch">
//       {/* LEFT SIDE CONTENT */}
//       <div className="relative z-10 lg:w-1/2 space-y-6 flex flex-col justify-center">
//         <h2 className="text-primary font-extrabold text-3xl uppercase tracking-wide">
//           About
//         </h2>
//         <h1 className="text-4xl md:text-4xl font-extrabold text-[#003366] uppercase">
//           Global Enviro Group
//         </h1>
//         <p className="text-gray-700 leading-relaxed text-lg">
//           With over two and a half decade of phenomenal presence in the Indian air
//           pollution control sector and having serviced hundreds of mega corporates,
//           industries and MNCs, Global Enviro Air Systems is presently diversified
//           into four distinct divisions, each working as an independent unit with
//           parallel infrastructure and the requisite technical setup. The success
//           we witness today has been based on our relentless dedication and the
//           unrivaled excellence that we have demonstrated through our professionalism.
//         </p>
//       </div>

//       {/* RIGHT SIDE IMAGE BLOCK */}
//       <div className="relative lg:w-1/2 mt-10 lg:mt-0 flex items-stretch">
//         {/* IMAGE */}
//         <div className="relative w-full h-full flex-shrink-0">
//           <Image
//             src="/assets/images/enviro.png" // replace with your image
//             alt="Industrial setup"
//             width={800}
//             height={600}
//             className="object-cover w-full h-full shadow-lg"
//             style={{
//               clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             }}
//             priority
//           />

//           {/* SHADED PARALLELOGRAM OVERLAYS */}
//           {/* <div
//             className="absolute top-0 left-0 h-full bg-gray-200 opacity-70"
//             style={{
//               width: "30%",
//               clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
//             }}
//           ></div>

//           <div
//             className="absolute top-0 left-[35%] h-full bg-gray-300 opacity-80"
//             style={{
//               width: "35%",
//               clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0% 100%)",
//             }}
//           ></div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-white overflow-hidden py-18 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-stretch">
      {/* Left Side Content */}
      <div className="relative z-10 lg:w-1/2 flex flex-col justify-center h-full space-y-6">
        <h2 className="text-primary font-extrabold text-3xl uppercase tracking-wide">
          About
        </h2>
        <h1 className="text-4xl md:text-4xl font-extrabold text-[#003366] uppercase">
          Global Enviro Group
        </h1>
        <p className="leading-relaxed text-1xl justify-items-start">
          With over a decade of phenomenal presence in the Indian air pollution control sector 
          and having serviced hundreds of mega corporates, industries and MNCs, Global Enviro  
          The success we witness today has been based on our relentless dedication and the 
          unrivalled excellence that we have demonstrated through our professionalism.</p>

        <p>Global Industries now has an established presence in an array of activities that include 
        Air Pollution Control, Clean Room and HVAC systems, Bulk Material Handling Systems, 
        Industrial Cranes, Metal Castings and Exports and Imports. One of the key components of our
        business culture is the ability to identify and understand our client needs appropriately.
        We work relentlessly while assuring uncompromising quality and post sales support.</p>

<p>As one of the few companies that have reached an unenviable stature, Global Group through its strategic business endeavours, envisions spectacular growth and presence over varied sectors across the sub continent in the forthcoming years.
        </p>
      </div>

      {/* Right Side Image */}
      <div className="relative lg:w-1/2 mt-10 lg:mt-0 flex items-center h-full">
        {/* Trapezium / Tilted Rectangle Image */}
        <Image
          src="/assets/images/enviro.png" // replace with your image path
          alt="Industrial setup"
          width={800}
          height={500}
          className="object-cover w-full h-full shadow-lg"
          style={{
            clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
           
          }}
        />
      </div>
    </section>
  );
}
