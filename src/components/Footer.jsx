import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" aria-label="Site Footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white">Property Intel</h3>
            <p className="mt-4 text-sm">
              Your trusted partner in property management and real estate services.
            </p>
            <nav className="mt-6 flex space-x-4" aria-label="Social media">
              <a
                href="https://www.facebook.com/profile.php?id=61560227601040"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Property_intel_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/property_intel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/property-intel-ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2" aria-label="Quick Links">
              <li>
                <Link
                  to="/"
                  className="text-sm transition-colors hover:text-white focus:outline-none focus:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-sm transition-colors hover:text-white focus:outline-none focus:underline"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm transition-colors hover:text-white focus:outline-none focus:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm transition-colors hover:text-white focus:outline-none focus:underline"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/services/landlord/property-management"
                  className="text-sm transition-colors hover:text-white"
                >
                  Property Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/tenant"
                  className="text-sm transition-colors hover:text-white"
                >
                  Rental Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/landlord/maintenance"
                  className="text-sm transition-colors hover:text-white"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/landlord/legal-compliance"
                  className="text-sm transition-colors hover:text-white"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm">Phone: 075 8647 9847</li>
              <li className="text-sm">Email: Contact@property-intel.co.uk</li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
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
