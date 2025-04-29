import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Building, FileText, Briefcase, Info, PhoneCall, LogIn, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { COMPANY_NAME } from "@/lib/constants";
// Import company logo
import logoImage from "../../attached_assets/Untitled design-4.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  // Check if a path is active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await logout();
  };

  const getDashboardLink = () => {
    if (!user) return "/login";
    return `/${user.role}`;
  };

  // Add dropdown state for desktop
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    // Remove services from here, will handle separately
    { path: "/properties", label: "Properties", icon: Building },
    { path: "/blogs", label: "Blog", icon: FileText },
    { path: "/contact", label: "Contact", icon: PhoneCall },
  ];

  // Dropdown service links
  const serviceDropdownLinks = [
    { path: "/services/landlord", label: "Landlord Services" },
    { path: "/services/tenant", label: "Tenant Services" },
    { path: "/services/investor", label: "Investor Services" },
    { path: "/services/custom", label: "Custom Solutions" },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm' : 'bg-white/80'} backdrop-blur-md`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logoImage} 
                alt={COMPANY_NAME}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-primary">{COMPANY_NAME}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className={`nav-link relative flex items-center gap-1 rounded-md px-3 py-2 transition-colors ${servicesOpen ? 'bg-gray-100 text-primary' : 'text-gray-700 hover:bg-gray-100'}`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen(false)}
                  style={{ zIndex: 10 }}
                >
                  <span>Services</span>
                  <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                  {/* Animated underline */}
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: servicesOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>

                {/* Dropdown menu with pop-in scale */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-60 rounded-lg bg-white shadow-xl ring-1 ring-black/5 z-50"
                    >
                      <div className="py-2">
                        {serviceDropdownLinks.map((item, index) => (
                          <motion.div
                            key={item.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link
                              to={item.path}
                              className="block px-4 py-2 text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* ...user/login buttons... */}
              {user ? (
                <div className="flex items-center space-x-3 ml-4">
                  <Link to={getDashboardLink()}>
                    <Button variant="outline" size="sm" className="btn-hover-slide">
                      Dashboard
                    </Button>
                  </Link>
                  <Button variant="default" size="sm" onClick={handleLogout} className="btn-hover-slide">
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login" className="ml-4">
                  <Button variant="default" size="sm" className="px-6 flex items-center space-x-2 btn-hover-slide">
                    <LogIn className="h-4 w-4" />
                    <span>Sign In</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="focus:ring-0"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'open' : 'closed'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-gray-100"
          >
            <div className="space-y-2 px-4 py-5 bg-white">
              {/* Mobile nav links */}
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-2 rounded-md px-4 py-3 text-base font-medium ${
                      isActive(link.path) 
                        ? 'bg-primary/5 text-primary' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    } transition-colors duration-200`}
                    onClick={toggleMenu}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              {/* Mobile Services Dropdown */}
              <div>
                <div className="flex items-center px-4 py-3 text-base font-medium text-gray-700">
                  <Briefcase className="h-5 w-5 mr-2" />
                  <span>Services</span>
                </div>
                <div className="pl-8">
                  {serviceDropdownLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 text-gray-700 hover:text-primary"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              {/* ...user/login buttons... */}
              <div className="pt-6 space-y-3">
                {user ? (
                  <>
                    <Link to={getDashboardLink()}>
                      <Button className="w-full mb-2 flex items-center justify-center space-x-2" variant="outline" onClick={toggleMenu}>
                        <span>Dashboard</span>
                      </Button>
                    </Link>
                    <Button className="w-full flex items-center justify-center space-x-2" variant="default" onClick={handleLogout}>
                      <span>Logout</span>
                    </Button>
                  </>
                ) : (
                  <Link to="/login">
                    <Button className="w-full flex items-center justify-center space-x-2" variant="default" onClick={toggleMenu}>
                      <LogIn className="h-4 w-4" />
                      <span>Sign In</span>
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
