"use client";
import React, { useState } from "react";

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    companyName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Your request has been submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-3xl border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Request a Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Product Selection */}
          <div>
            <label className="block text-gray-600 mb-2">
              Select Product of Interest
            </label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            >
              <option value="">Select</option>
              <option value="Air Pollution Control">Air Pollution Control</option>
              <option value="Material Handling">Material Handling</option>
              <option value="HVAC System">HVAC System</option>
              <option value="Clean Room">Clean Room</option>
            </select>
          </div>

          {/* Name + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
                required
              />
            </div>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-600 mb-2">Company Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
              rows="2"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#3877d4] text-white font-semibold px-8 py-2 rounded-full hover:bg-[#2f5fb8] transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
