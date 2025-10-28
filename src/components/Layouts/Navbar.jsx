'use client';

import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const navItems = [
  { title: 'Home', url: '/' },
  {
    title: 'About Us',
    url: '/about',
    dropdown: [
      { title: 'Overview', url: '/about/overview' },
      { title: 'Mission & Vision', url: '/about/mission-vision' },
      { title: 'Management', url: '/about/management' },
      { title: 'Our Infrastructure', url: '/about/infrastructure' },
      { title: 'Certifications', url: '/about/certifications' },
      { title: 'Our Journey', url: '/about/journey' },
    ],
  },
  {
    title: 'Group',
    url: '/group',
    dropdown: [
      { title: 'JetTech', url: '/group/jettech' },
      { title: 'Global Metallurgy', url: '/group/global-metallurgy' },
    ],
  },
  {
    title: 'Services',
    url: '/services',
    dropdown: [
      { title: 'Air Pollution Control', url: '/services/air-control' },
      { title: 'Material Handling', url: '/services/material-handling' },
      { title: 'HVAC', url: '/services/hvac' },
      { title: 'EPC Power', url: '/services/epc-power' },
    ],
  },
  { title: 'Projects', url: '/projects' },
  { title: 'Our Clients', url: '/clients' },
  { title: 'News and Events', url: '/news' },
  { title: 'Careers', url: '/#' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // Add shadow only when scrolling down
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
  const secondaryBlue = '#386FC1';

  return (
    <header
      className={`w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'fixed bg-white/90 backdrop-blur-md shadow-lg'
          : 'relative bg-white'
      }`}
    >
      {/* --- Top White Bar (hidden after scroll) --- */}
      {!isScrolled && (
        <div className="flex justify-between items-center px-6 lg:px-20 py-2 border-b border-gray-200 bg-white transition-all">
          <div className="flex flex-col items-start">
            <a href="/" className="leading-none">
              <img
                src="/assets/images/group-logo.png"
                alt="Global Enviro Logo"
                className="h-[70px] w-auto"
              />
            </a>
          </div>

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

      {/* --- Main Navigation Bar --- */}
      <nav
        aria-label="Main Navigation"
        className={`flex items-center justify-between px-6 lg:px-20 transition-all duration-300`}
        style={{
          backgroundColor: primaryBlue,
          height: isScrolled ? '45px' : '60px',
        }}
      >
        {/* Logo (Visible on small screens only) */}
        <a href="/" className="block lg:hidden">
          <img
            src="/assets/images/group-logo.png"
            alt="Global Enviro"
            className={`transition-all duration-300 ${
              isScrolled ? 'h-6' : 'h-8'
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 xl:gap-10 text-[14px] font-semibold uppercase relative">
          {navItems.map((item) => {
            const isActive = pathname === item.url;

            return (
              <li
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.url}
                  className={`px-2 py-1 transition-colors rounded-md ${
                    isActive
                      ? 'bg-[#386FC1]'
                      : 'hover:bg-[#386FC1] hover:shadow-sm'
                  }`}
                >
                  {item.title} {item.dropdown && <span>▼</span>}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <ul
                    aria-label={`${item.title} submenu`}
                    className={`absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md min-w-[200px] transform transition-all duration-300 ${
                      activeDropdown === item.title
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-2 invisible'
                    }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.title}>
                        <a
                          href={subItem.url}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Contact Us Button */}
        <div className="hidden lg:flex items-center justify-center bg-black text-white px-5 py-2 font-bold uppercase cursor-pointer rounded-md hover:bg-gray-900 transition-all">
          CONTACT US
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
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
                        <a
                          href={subItem.url}
                          className="block px-7 py-2 text-sm hover:bg-gray-200"
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="p-4 text-center">
              <a
                href="#"
                className="block bg-[#3877d4] text-white py-2 rounded-md font-semibold hover:bg-[#2f5fb8]"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
