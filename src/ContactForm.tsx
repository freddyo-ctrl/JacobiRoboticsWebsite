import React, { useState } from "react";
import countryData from "./countryCodes"; // Import country codes

export default function ContactForm() {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]); // Default to first country

  return (
    <form className="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-4">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">First Name</label>
          <input
            type="text"
            placeholder="First name"
            className="border p-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            className="border p-2 rounded-md"
            required
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 font-medium">Company Name</label>
        <input
          type="text"
          placeholder="Company name"
          className="border p-2 rounded-md"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium">Work Email</label>
        <input
          type="email"
          placeholder="Work email"
          className="border p-2 rounded-md"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium">Country</label>
        <input
          type="text"
          placeholder="Country"
          className="border p-2 rounded-md"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 font-medium">Phone Number</label>
        <div className="flex items-center space-x-2">
          <div className="relative w-24">
            <select
              value={selectedCountry.code}
              onChange={(e) => {
                const country = countryData.find(
                  (c) => c.code === e.target.value
                );
                if (country) setSelectedCountry(country);
              }}
              className="border p-2 rounded-md bg-gray-100 text-sm w-full"
            >
              {countryData.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.dialCode}
                </option>
              ))}
            </select>
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-2 rounded-md flex-grow"
            required
          />
        </div>
      </div>

      {/* Description Field */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium">
          Describe the project you need help with
        </label>
        <textarea
          placeholder="Describe the project you need help with..."
          className="border p-2 rounded-md"
          rows={4}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-black text-white py-2 rounded-md hover:bg-gray-800"
      >
        SUBMIT
      </button>
    </form>
  );
}
