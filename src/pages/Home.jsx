import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Building, Shield, ShieldCheck, Star, Trophy, Users, KeyRound, TrendingUp, ArrowRight } from "lucide-react";
import HomeImage from "../Home-Image.jpg";

const Home = () => {
  const services = [
    {
      icon: Building,
      title: "Landlord Services",
      description: "Comprehensive property management solutions for property owners",
      path: "/services/custom",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Tenant Services",
      description: "Find your perfect home and enjoy hassle free renting",
      path: "/services/tenant",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Investor Services",
      description: "Maximise your real estate investment portfolio",
      path: "/services/investor",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: KeyRound,
      title: "Custom Solutions",
      description: "Tailor-made solutions to meet your requirements",
      path: "/services/landlord",
      color: "bg-red-100 text-red-600",
    },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Property Investor", text: "Their professional service helped me grow my portfolio by 40% in just two years." },
    { name: "Michael Chen", role: "Homeowner", text: "The most reliable and transparent real estate service I've ever used." }
  ];


  // Add structured data for the homepage
  React.useEffect(() => {
    const structuredData = createStructuredData();
    addStructuredDataScript(structuredData);

    return () => {
      removeStructuredDataScript();
    };
  }, []);

  const createStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Property Intel",
    "description": "Professional property management services in London. Expert solutions for landlords, tenants, and investors.",
    "url": window.location.origin,
    "areaServed": {
      "@type": "City",
      "name": "London"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Property Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landlord Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tenant Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Investor Services"
          }
        }
      ]
    }
  });

  const addStructuredDataScript = (structuredData) => {
    let script = document.getElementById('home-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'home-structured-data';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(structuredData);
  };

  const removeStructuredDataScript = () => {
    const scriptToRemove = document.getElementById('home-structured-data');
    if (scriptToRemove) {
      scriptToRemove.remove();
    }
  };

  return (
    <main className="home-page" role="main">
      {/* Hero Section with Background Image */}
      <section aria-labelledby="hero-heading" className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background image in place of video */}
        <img 
          src="/src/Home-Image.jpg" 
          alt="Modern city skyline with real estate properties" 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          aria-hidden="true" 
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" aria-hidden="true"></div>
        
        <div className="relative text-center px-6">
          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Your Trusted Real Estate Partner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Unlock new opportunities with our expert real estate solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6"
          >
            <Link to="/services">
              <Button size="lg" variant="solid" className="bg-primary hover:bg-opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section aria-labelledby="services-heading" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
              Comprehensive solutions for all your real estate needs.
            </p>
          </motion.div>

          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.li
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md focus-within:ring-2 focus-within:ring-primary"
                  itemScope
                  itemType="https://schema.org/Service"
                  tabIndex={0}
                  aria-label={service.title}
                >
                  <Link
                    to={service.path}
                    className="absolute inset-0 z-10"
                    aria-label={"View " + service.title}
                  />
                  <div className={"mb-4 inline-block rounded-full p-3 " + service.color}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600" itemProp="description">{service.description}</p>
                  <div className="mt-4 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                    Learn more <span aria-hidden="true">→</span>
                    <span className="sr-only">about {service.title}</span>
                  </div>
                  {/* Structured data: Specifies the provider of the service */}
                  <meta itemProp="provider" content="Property Intel" />
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300 group-hover:border-primary/10 pointer-events-none"></div>
                </motion.li>
              );
            })}
          </ul>

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button size="lg" variant="outline" className="focus:ring-2 focus:ring-primary">
                View All Services
                <span className="sr-only">View all our property services</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <img 
                src="/about-image.jpg" 
                alt="Our team at work in the office" 
                className="h-full w-full object-cover" 
                loading="lazy"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-lg text-gray-700 mb-6">At <strong>Property Intel</strong> we operate with our core principles in mind: Ethical Investments, Transparency & Trust, Fair Profit, Risk Sharing and Avoiding Interest.</p>
              <p className="text-lg text-gray-700 mb-6">At <strong>Property Intel</strong> we operate with our core principles in mind: Ethical Investments, Transparancy & Trust, Fair Profit, Risk Sharing and Avoiding Interest.</p>
              <p className="text-lg text-gray-700 mb-6">We know the London market inside out and have the right tools to maximise your ROI. Our comprehensive management services handle everything, giving you more time to do the things you love.</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center">
                  <Trophy className="h-8 w-8 text-primary mr-4" aria-hidden="true" />
                  <div>
                    <div className="text-xl font-bold">5 Star Rated</div>
                    <div className="text-gray-700">Service Quality</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-primary mr-4" aria-hidden="true" />
                  <div>
                    <div className="text-xl font-bold">100%</div>
                    <div className="text-gray-700">Client Rentention Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-16">
            <Star className="h-12 w-12 text-yellow-400 mx-auto mb-6" aria-hidden="true" />
            <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-gray-900">What Our Clients Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.figure 
                key={testimonial.name} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }} 
                className="p-8 bg-gray-50 rounded-lg"
                tabIndex={0}
                aria-label={`Testimonial from ${testimonial.name}, ${testimonial.role}`}
              >
                <blockquote className="text-gray-700 mb-6">"{testimonial.text}"</blockquote>
                <figcaption>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-primary">{testimonial.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>


      {/* Memberships & Certifications Section */}
      <section className="py-16 bg-gray-100" aria-labelledby="certifications-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 id="certifications-heading" className="text-3xl font-bold mb-4">Memberships & Certifications</h2>
            <p className="text-lg text-gray-700">
              We adhere to the highest standards in property management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Award className="h-10 w-10 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Client Money Protect</h3>
                <p className="text-gray-700">Tenancy deposits held securely.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Shield className="h-10 w-10 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ICO Data Protect</h3>
                <p className="text-gray-700">Storing client data in a safe, responsible and legal manner.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <ShieldCheck className="h-10 w-10 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">The Property Ombudsman</h3>
                <p className="text-gray-700">Member of the Property Ombudsman scheme, providing consumer protection.</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-center"
            >
              {/* Placeholder quote for demonstration purposes. Replace with a verified source or context if needed. */}
              <p className="text-gray-700 italic">
                "We pride ourselves on maintaining the highest industry standards and certifications, 
                ensuring our clients receive professional service that adheres to all regulatory requirements."
              </p>
              <p className="mt-4 font-semibold text-primary">
                — Ali Qayyum, Founder & CEO
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-primary/5 py-24" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="cta-heading" className="text-4xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join thousands of satisfied clients who have found their ideal properties through our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/properties">
                <Button size="lg" className="px-8 focus:ring-2 focus:ring-primary">
                  Browse Properties
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 focus:ring-2 focus:ring-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
