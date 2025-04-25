
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Property Intel</h3>
            <p className="mt-4 text-sm">
              Your trusted partner in property management and real estate services.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-sm transition-colors hover:text-white"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-sm transition-colors hover:text-white"
                >
                  Property Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm transition-colors hover:text-white"
                >
                  Rental Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm transition-colors hover:text-white"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm transition-colors hover:text-white"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm">123 London Road</li>
              <li className="text-sm">London, EC1A 1BB</li>
              <li className="text-sm">Phone: 020 7123 4567</li>
              <li className="text-sm">Email: info@propertyintel.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link
              to="/privacy-policy"
              className="text-sm transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-sm transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/contact"
              className="text-sm transition-colors hover:text-white"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Property Intel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
