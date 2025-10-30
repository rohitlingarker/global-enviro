'use client';

import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { title: 'Home', url: '/' },
  {
    title: 'About Us',
    url: '/about',
    dropdown: [
      { title: 'Overview', url: '/about#overview' },
      { title: 'Mission & Vision', url: '/about#mission' },
      { title: 'Management', url: '/about#management' },
      { title: 'Our Infrastructure', url: '/about#infrastructure' },
      { title: 'Certifications', url: '/about#certifications' },
      { title: 'Our Journey', url: '/about#journey' },
    ],
  },
  { title: 'Our Group', url: '/Ourgroup' },
  {
    title: 'Services',
    url: '/service',
    url: '/service',
    dropdown: [
      {
        title: 'Air Pollution Control',
        url: '/service/AirPollutionControl',
        subDropdown: [
          { title: 'Pulse Jet Bag', url: '/service/AirPollutionControl/pulse-jet-bag' },
          { title: 'Dust Extraction', url: '/service/AirPollutionControl/dust-extraction' },
          { title: 'Ash Handling', url: '/service/AirPollutionControl/ash-handling' },
          { title: 'Centrifugal Fans', url: '/service/AirPollutionControl/4' },
          { title: 'HVAC Clean Room', url: '/service/AirPollutionControl/5' },
          { title: 'Clean Room Panel', url: '/service/AirPollutionControl/clean-room-panel' },
        ],
      },
      {
        title: 'Material Handling',
        url: '/service/MaterialHandling',
        subDropdown: [
          { title: 'Conveyors', url: '/service/MaterialHandling/conveyors' },
          { title: 'Bucket Elevators', url: '/service/MaterialHandling/bucket-elevators' },
        ],
      },
      {
        title: 'HVAC',
        url: '/service/HVAC',
        subDropdown: [
          { title: 'HVAC System Components', url: '/service/HVAC/components' },
          { title: 'Clean Room Equipments', url: '/service/HVAC/clean-room-equipments' },
        ],
      },
      {
        title: 'EPC Power',
        url: '/service/EPCPower',
        subDropdown: [
          { title: 'Bag Filters', url: '/service/EPCPower/bag-filters' },
          { title: 'Electrostatic Precipitators', url: '/service/EPCPower/electrostatic-precipitators' },
        ],
      },
    ],
  },
  { title: 'Projects', url: '/projects' },
  { title: 'Our Clients', url: '/clients' },
  { title: 'News and Events', url: '/news' },
  { title: 'Careers', url: '/careers' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 80 && currentScroll > lastScrollTop) {
        setIsScrolled(true);
      } else if (currentScroll < 50) {
        setIsScrolled(false);
      }
      lastScrollTop = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryBlue = '#3877d4';

  return (
    <>
  {/* Spacer div to reserve header height */}
  <div
    style={{
      height: isScrolled ? '60px' : '140px', // adjust based on your top bar + nav height
      transition: 'height 0.4s ease-in-out',
    }}
  />
    <header
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-lg'
        : 'bg-white shadow-none'
    }`}
  >
      {/* --- Top Bar --- */}
      {true && (
        <div
      className={`flex justify-between items-center px-6 lg:px-20 border-b border-gray-200 bg-white transition-all duration-500 ease-in-out overflow-hidden ${
        isScrolled
          ? 'max-h-0 opacity-0 py-0 border-none'
          : 'max-h-[80px] opacity-100 py-2'
      }`}
    >
          <Link href="/" className="leading-none">
            <img
              src="/assets/images/group-logo.png"
              alt="Global Enviro Logo"
              className="h-[70px] w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <FaPhone className="text-[#3877d4]" />
              <span>+91 98765-24576</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-[#3877d4]" />
              <span>info@global.com</span>
            </div>
            <button className="bg-[#3877d4] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#2f5fb8] transition-all">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      )}

      {/* --- Main Nav --- */}
      <nav
        className="flex items-center justify-between px-6 lg:px-20 transition-all duration-300"
        style={{
          backgroundColor: primaryBlue,
          height: isScrolled ? '45px' : '60px',
        }}
      >
        {/* Mobile Logo */}
        <Link href="/" className="block lg:hidden">
          <img
            src="/assets/images/group-logo.png"
            alt="Global Enviro"
            className={`transition-all duration-300 ${
              isScrolled ? 'h-6' : 'h-8'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 xl:gap-10 text-[14px] font-semibold uppercase relative">
          {navItems.map((item) => {
            const isActive = pathname === item.url;
            return (
              <li
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                }}
              >
                <Link
                  href={item.url}
                  className={`px-2 py-1 transition-colors rounded-md flex items-center gap-1 ${
                    isActive
                      ? 'bg-[#386FC1]'
                      : 'hover:bg-[#386FC1] hover:shadow-sm'
                  }`}
                >
                  {item.title} {item.dropdown && <span>▼</span>}
                </Link>

                {/* --- Dropdown --- */}
                {item.dropdown && (
                  <ul
                    className={`absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md min-w-[220px] transition-all duration-300 ${
                      activeDropdown === item.title
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-2 invisible'
                    }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <li
                        key={subItem.title}
                        className="relative group/item"
                        onMouseEnter={() =>
                          subItem.subDropdown &&
                          setActiveSubDropdown(subItem.title)
                        }
                        onMouseLeave={() =>
                          subItem.subDropdown &&
                          setActiveSubDropdown(null)
                        }
                      >
                        <Link
                          href={subItem.url}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex justify-between items-center"
                        >
                          {subItem.title}
                          {subItem.subDropdown && <span>▶</span>}
                        </Link>

                        {/* --- Sub Dropdown --- */}
                        {subItem.subDropdown && (
                          <ul
                            className={`absolute top-0 left-full bg-white shadow-md rounded-md min-w-[200px] transition-all duration-300 ${
                              activeSubDropdown === subItem.title
                                ? 'opacity-100 visible translate-x-0'
                                : 'opacity-0 invisible -translate-x-2'
                            }`}
                          >
                            {subItem.subDropdown.map((deepItem) => (
                              <li key={deepItem.title}>
                                <Link
                                  href={deepItem.url}
                                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                  {deepItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
 
          {/* Contact Button */}
          <Link
            href="/contactUs"
            className="hidden lg:flex items-center justify-center bg-black text-white px-5 py-2 font-bold uppercase cursor-pointer rounded-md hover:bg-gray-900 transition-all"
          >
            Contact Us
          </Link>

        {/* Mobile Toggle */} 
        <button
          className="lg:hidden text-white text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* --- Mobile Menu --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md text-gray-800 shadow-md animate-fadeInDown">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.title} className="border-b border-gray-200">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.title ? null : item.title
                    )
                  }
                  className="w-full text-left px-5 py-3 font-semibold flex justify-between items-center"
                >
                  <span>{item.title}</span>
                  {item.dropdown && <span>▼</span>}
                </button>

                {item.dropdown && activeDropdown === item.title && (
                  <ul className="bg-gray-50 transition-all duration-300">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.title}>
                        <button
                          onClick={() =>
                            setActiveSubDropdown(
                              activeSubDropdown === subItem.title
                                ? null
                                : subItem.title
                            )
                          }
                          className="w-full text-left px-7 py-2 text-sm flex justify-between items-center"
                        >
                          {subItem.title}
                          {subItem.subDropdown && <span>▶</span>}
                        </button>

                        {subItem.subDropdown &&
                          activeSubDropdown === subItem.title && (
                            <ul className="bg-gray-100">
                              {subItem.subDropdown.map((deepItem) => (
                                <li key={deepItem.title}>
                                  <Link
                                    href={deepItem.url}
                                    className="block px-10 py-2 text-sm hover:bg-gray-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {deepItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="p-4 text-center">
              <Link
                href="/contact"
                className="block bg-[#3877d4] text-white py-2 rounded-md font-semibold hover:bg-[#2f5fb8]"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  </>
  );
};

export default Navbar;
