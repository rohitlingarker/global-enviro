"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Home,
  Info,
  Settings,
  FolderOpen,
  Phone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

function CustomLink({ to, icon: Icon, label, dropdownItems, onClick }) {
  const router = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        onClick={() => {
          if (!dropdownItems) router.push(to);
          if (onClick) onClick();
        }}
        className={`flex items-center gap-1 cursor-pointer hover:text-orange-500 transition 
        ${pathName === to ? "text-orange-500 underline" : "text-gray-800"}`}
      >
        {Icon && <Icon size={18} />}
        <span>{label}</span>
        {dropdownItems && <ChevronDown size={14} />}
      </div>

      {dropdownItems && isOpen && (
        <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-md w-52 border border-gray-200 z-50">
          {dropdownItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                router.push(item.to);
                if (onClick) onClick();
              }}
              className="px-4 py-2 hover:bg-orange-100 cursor-pointer text-gray-700"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const aboutDropdown = [
    { label: "Overview", to: "/about/overview" },
    { label: "Management", to: "/about/management" },
    { label: "Infrastructure", to: "/about/infrastructure" },
    { label: "Certifications", to: "/about/certifications" },
    { label: "Careers", to: "/about/careers" },
  ];

  const servicesDropdown = [
    { label: "Air Pollution Control", to: "/services/air-pollution" },
    { label: "Cleanroom & HVAC", to: "/services/cleanroom" },
    { label: "Material Handling", to: "/services/material-handling" },
    { label: "Industrial Cranes", to: "/services/cranes" },
    { label: "Metal Castings", to: "/services/metal-castings" },
  ];

  const projectsDropdown = [
    { label: "Case Studies", to: "/projects/case-studies" },
    { label: "Gallery", to: "/projects/gallery" },
    { label: "Industries Served", to: "/projects/industries" },
    { label: "Clients & Testimonials", to: "/projects/clients" },
  ];

  const contactDropdown = [
    { label: "Contact Info", to: "/contact/info" },
    { label: "Enquiry Form", to: "/contact/enquiry" },
    { label: "Get a Quote", to: "/contact/quote" },
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
        {/* Logo Section with hover animation */}
        <div className="flex items-center group relative cursor-pointer">
          {/* Logo image - hidden on hover */}
          <Image
            src="/assets/images/group-logo.png"
            alt="Global Enviro Logo"
            width={80}
            height={80}
            className="rounded-full transition-all duration-300 group-hover:opacity-0"
          />

          {/* Text appears on hover */}
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap font-extrabold text-gray-800 
            opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-105 
            translate-x-0 group-hover:translate-x-0 transition-all duration-300 text-2xl
            hover:text-orange-500 hover:drop-shadow-xl hover:shadow-orange-300/50"
          >
            <span className="text-orange-500">G</span>lobal{" "}
            <span className="text-orange-500">E</span>nviro
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <CustomLink to="/" icon={Home} label="Home" />
          <CustomLink icon={Info} label="About Us" dropdownItems={aboutDropdown} />
          <CustomLink
            icon={Settings}
            label="Services"
            dropdownItems={servicesDropdown}
          />
          <CustomLink
            icon={FolderOpen}
            label="Projects"
            dropdownItems={projectsDropdown}
          />
          <CustomLink
            icon={Phone}
            label="Contact"
            dropdownItems={contactDropdown}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 w-full">
          <div className="flex flex-col gap-2 py-4 px-4">
            <CustomLink to="/" icon={Home} label="Home" onClick={() => setMobileOpen(false)} />
            <CustomLink
              icon={Info}
              label="About Us"
              dropdownItems={aboutDropdown}
              onClick={() => setMobileOpen(false)}
            />
            <CustomLink
              icon={Settings}
              label="Services"
              dropdownItems={servicesDropdown}
              onClick={() => setMobileOpen(false)}
            />
            <CustomLink
              icon={FolderOpen}
              label="Projects"
              dropdownItems={projectsDropdown}
              onClick={() => setMobileOpen(false)}
            />
            <CustomLink
              icon={Phone}
              label="Contact"
              dropdownItems={contactDropdown}
              onClick={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
