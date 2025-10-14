"use client";

import React from "react";
import { useRouter, usePathname } from 'next/navigation';


function CustomLink({ to, children, className }) {
    const router = useRouter();
    const pathName = usePathname();
  return (
    <div onClick={() => router.push(to)} className={`cursor-pointer hover:text-orange-400 ${pathName === to && "text-orange-400 underline"} ${className}`} >
      {children}
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex justify-between bg-white py-4 px-6 min-w-full  ">
      <h1>
        <span className="text-2xl text-amber-200">Global </span>
        <span className="text-red-600 text-2xl">Enviro</span>
      </h1>
      <div className="flex gap-4 mr-3">
        {/* Home
            About-Us
            Management
            Infrastructure
            Divisions
            Clients
            Gallery
            Contact */}
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/management">Management</CustomLink>
        <CustomLink to="/infrastructure">Infrastructure</CustomLink>
        <CustomLink to="/divisions">Divisions</CustomLink>
        <CustomLink to="/clients">Clients</CustomLink>
        <CustomLink to="/gallery">Gallery</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </div>
    </div>
  );
}

export { Navbar };
