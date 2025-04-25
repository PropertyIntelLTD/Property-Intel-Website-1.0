
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  KeyRound, 
  ShieldCheck, 
  Trophy, 
  Users, 
  Building, 
  TrendingUp,
  CheckCircle,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Service card data
const services = [
  {
    title: "Landlord Services",
    description: "Comprehensive property management solutions for property owners, including tenant screening, rent collection, maintenance coordination, and legal compliance.",
    path: "/services/landlord",
    icon: Building,
    color: "bg-blue-500 text-white",
    features: [
      { text: "Property Listing & Marketing", icon: CheckCircle },
      { text: "Tenant Sourcing & Screening", icon: Users },
      { text: "Rent Collection & Financial Management", icon: TrendingUp },
      { text: "Property Maintenance & Inspections", icon: CheckCircle }
    ]
  },
  {
    title: "Tenant Services",
    description: "Helping tenants find and maintain their ideal properties with professional support from search to end of tenancy.",
    path: "/services/tenant",
    icon: Users,
    color: "bg-green-500 text-white",
    features: [
      { text: "Property Search Assistance", icon: Building },
      { text: "Tenancy Application Support", icon: CheckCircle },
      { text: "Maintenance Request Handling", icon: KeyRound },
      { text: "End of Tenancy Support", icon: Clock }
    ]
  },
  {
    title: "Investor Services",
    description: "Smart investment strategies and portfolio management services to maximize returns and minimize risks in the property market.",
    path: "/services/investor",
    icon: TrendingUp,
    color: "bg-yellow-500 text-white",
    features: [
      { text: "Market Analysis & Reporting", icon: TrendingUp },
      { text: "Portfolio Management", icon: CheckCircle },
      { text: "Investment Strategy Planning", icon: Trophy },
      { text: "Property Acquisition Support", icon: Building }
    ]
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions for unique real estate needs, designed to meet specific requirements of businesses and individual clients.",
    path: "/services/custom",
    icon: ShieldCheck,
    color: "bg-purple-500 text-white",
    features: [
      { text: "Security & Access Management", icon: ShieldCheck },
      { text: "Business Property Solutions", icon: Building },
      { text: "Management Consulting", icon: Users },
      { text: "Relationship Management", icon: CheckCircle }
    ]
  },
];

// Testimonial data
const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Landlord",
    rating: 5,
    text: "Property Intel has transformed how I manage my rental properties. Their professional service has saved me countless hours and increased my rental income."
  },
  {
    name: "James Wilson",
    role: "Investor",
    rating: 5,
    text: "The investment advice and market insights from Property Intel have been invaluable. They helped me build a profitable property portfolio with minimal stress."
  },
  {
    name: "Emily Parker",
    role: "Tenant",
    rating: 4,
    text: "Finding my dream apartment was so easy with Property Intel. Their team was supportive throughout the entire process and still provides excellent service."
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
        </svg>
      ))}
    </div>
  );
};

// Service feature component
const ServiceFeature = ({ feature }) => {
  const FeatureIcon = feature.icon;
  return (
    <li className="flex items-start">
      <span className="mr-2 mt-1 text-primary">
        <FeatureIcon className="h-4 w-4" />
      </span>
      <span className="text-sm text-gray-600">{feature.text}</span>
    </li>
  );
};

// Main Services component
const Services = () => {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          We offer specialized services tailored to landlords, tenants, and investors.
          Choose the category that best fits your needs.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link to={service.path} className="block" key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer h-full"
              >
                <div className={`mb-4 inline-block rounded-full p-3 ${service.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
                
                {/* Features List */}
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <ServiceFeature key={idx} feature={feature} />
                  ))}
                </ul>
                
                <div className="mt-6">
                  <span 
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Learn more
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                
                <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300 group-hover:border-primary/10 pointer-events-none"></div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-24"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-primary/10 rounded-full p-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-24 bg-primary/5 rounded-lg p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're a landlord, tenant, or investor, we have the perfect solution for you.
          Contact us today to discuss your needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" variant="default">Contact Us</Button>
          </Link>
          <Link to="/properties">
            <Button size="lg" variant="outline">View Properties</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
