'use client';
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6 flex flex-col items-center">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-blue-800 mb-10 tracking-wide">
        CONTACT US
      </h1>

      {/* Get in Touch Section - Centered */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full mb-12 flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="flex items-center">
          <Phone className="text-blue-600 mr-3" />
          <span className="font-medium text-lg text-gray-800">+91 98765 24576</span>
        </div>
        <div className="flex items-center">
          <Mail className="text-blue-600 mr-3" />
          <span className="font-medium text-lg text-gray-800">info@global.com</span>
        </div>
      </div>

      {/* Addresses Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* Global Enviro Air Systems */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            M/s. Global Enviro Air Systems (P) Ltd
          </h3>
          <p className="flex items-start text-gray-700">
            <MapPin className="text-blue-600 mr-2 mt-1" />Corporate Office & Unit - I<br/>
            Survey No: 163/A (Part), Gagillapur (Vill.)<br/>
            Quthbullapur (Mdl), R.R. Dist, Hyderabad – 500 043, Telangana.<br/><br/>
            Unit - II<br/>
            Survey No: 163/A, Gagillapur (Vill.),<br/>
            Quthbullapur (Mdl), R.R. Dist, Hyderabad – 500 043, Telangana.
          </p>
        </div>

        {/* Global Metallurgicals */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            M/s. Global Metallurgicals
          </h3>
          <p className="flex items-start text-gray-700">
            <MapPin className="text-blue-600 mr-2 mt-1" />Plot No: 89, Aleap Industrial Estate,<br/>
            Surampalli Village, Gannavaram Mandal,<br/>
            Krishna District – 521212, Andhra Pradesh.
          </p>
        </div>

        {/* Global Enviro Group C/O Jet Tech */}
        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            M/s. Global Enviro Group C/O Jet Tech
          </h3>
          <p className="flex items-start text-gray-700">
            <MapPin className="text-blue-600 mr-2 mt-1" />m/s. Jet Tech Process Development Co., Inc.<br/>
            3rd Floor, Vitra Building, P. Alcantara Street,<br/>
            San Pablo City, Laguna, Philippines – 4000.
          </p>
        </div>

      </div>

      <footer className="mt-16 text-sm text-gray-600">
        © {new Date().getFullYear()} Global Enviro Group. All rights reserved.
      </footer>
    </div>
  );
}
