import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg flex flex-col space-y-4">
      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <div className="flex items-center space-x-3">
        <FaEnvelope />
        <span>contact@jacobirobotics.com</span>
      </div>
      <div className="flex items-center space-x-3">
        <FaPhone />
        <span>+1-222-555-2222</span>
      </div>
      <div className="flex items-center space-x-3">
        <FaMapMarkerAlt />
        <span>4071 Emery St, Emeryville, CA 94608</span>
      </div>
      <hr className="border-gray-700" />
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-500">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-blue-700">
          <FaLinkedin />
        </a>
        <a href="#" className="hover:text-pink-500">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
