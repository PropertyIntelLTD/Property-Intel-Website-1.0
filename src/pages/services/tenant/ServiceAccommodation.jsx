
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  Home, 
  Key, 
  Coffee, 
  Wifi, 
  Bed, 
  MapPin, 
  ShieldCheck, 
  Utensils,
  Clock,
  Plane,
  Briefcase
} from "lucide-react";

const features = [
  "Fully furnished premium accommodations",
  "Flexible short and long-term options",
  "Housekeeping and maintenance services",
  "High-speed WiFi and modern appliances",
  "All-inclusive billing with no hidden costs",
  "Prime city and suburban locations"
];

const benefits = [
  {
    title: "Convenience and Comfort",
    description: "Move in immediately to a fully-equipped, comfortable home with all amenities.",
  },
  {
    title: "Flexibility",
    description: "Choose from flexible lease terms to suit your specific needs and schedule.",
  },
  {
    title: "No Setup Hassle",
    description: "Skip the hassle of setting up utilities, internet, and furnishing a property.",
  },
  {
    title: "Prime Locations",
    description: "Access premium properties in desirable locations close to amenities.",
  },
  {
    title: "All-Inclusive Living",
    description: "Enjoy predictable costs with all utilities and services included in one payment.",
  },
  {
    title: "Enhanced Security",
    description: "Benefit from additional security features and professional management.",
  },
];

const faqItems = [
  {
    question: "What is included in your serviced accommodations?",
    answer: "Our serviced accommodations come fully furnished with all essential furniture, kitchen appliances, cookware, linens, and towels. All properties include high-speed WiFi, TV services, and utilities (water, electricity, heating). Many locations also offer additional amenities such as gym access, housekeeping services, and on-site laundry facilities. The exact inclusions vary by property but are clearly detailed in each listing."
  },
  {
    question: "What are the minimum and maximum stay periods?",
    answer: "Our minimum stay varies by property, with options starting from as short as one week for some accommodations. Most properties require a minimum 30-day stay, while others offer special rates for extended stays of 3+ months. The maximum stay period is typically flexible, with many guests staying for 6-12 months or longer. We can accommodate both short-term corporate stays and longer residential needs."
  },
  {
    question: "How does the booking and payment process work?",
    answer: "The booking process begins with an inquiry through our website or directly with our team. Once we understand your needs, we'll suggest suitable properties and arrange viewings (in-person or virtual). Upon selection, we require a security deposit (typically equivalent to 1-2 weeks' rent) and the first month's payment to secure the booking. Subsequent payments are made monthly in advance, typically via direct debit or bank transfer."
  },
  {
    question: "What if I need to extend or shorten my stay?",
    answer: "We understand plans can change. For stay extensions, we ask for as much notice as possible (ideally 2-4 weeks) to check availability, though we'll always try to accommodate last-minute requests. For shortening stays, the terms depend on your original agreement, but generally, we require 30 days' notice. Early termination fees may apply for significant reductions in pre-agreed longer stays."
  },
  {
    question: "Do you offer corporate accommodation packages?",
    answer: "Yes, we specialize in corporate accommodation packages for businesses needing housing for employees on assignment, relocating staff, or project-based teams. Our corporate packages include volume discounts, simplified billing options, customized reporting, and dedicated account management. We can also offer tailored furnishing and amenities based on your company's specific requirements."
  }
];

const accommodationTypes = [
  {
    title: "Executive Apartments",
    description: "Premium fully-furnished apartments in prime locations with luxury amenities",
    icon: <Home className="w-6 h-6 text-primary" />,
  },
  {
    title: "Corporate Housing",
    description: "Tailored solutions for business travelers and relocated employees",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
  {
    title: "Short-Term Lets",
    description: "Flexible accommodation options for stays from one week to several months",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Relocation Packages",
    description: "Comprehensive accommodation solutions for individuals and families relocating",
    icon: <Plane className="w-6 h-6 text-primary" />,
  },
];



const ServiceAccommodation = () => {
  return (
    <ServicePageTemplate
      title="Serviced Accommodation"
      description="Premium fully-furnished accommodations with flexible terms and comprehensive services"
      heroImage="https://images.unsplash.com/photo-1493809842364-78817add7ffb"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Find Your Perfect Accommodation"
      ctaText="Discover our range of serviced accommodations tailored to your needs."
      ctaButtonText="Enquire Now"
      ctaButtonLink="/contact"
    >
      {/* Accommodation Types Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Accommodation Options</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {accommodationTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {type.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Key Features Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Premium Amenities</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Bed className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Quality Furnishings</h3>
            <p className="text-sm text-gray-600">Premium furniture and bedding</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Wifi className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">High-Speed WiFi</h3>
            <p className="text-sm text-gray-600">Fast, reliable internet</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Utensils className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Fully Equipped</h3>
            <p className="text-sm text-gray-600">Complete kitchen and amenities</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Housekeeping</h3>
            <p className="text-sm text-gray-600">Optional cleaning services</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Prime Locations</h3>
            <p className="text-sm text-gray-600">Central and convenient areas</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm text-gray-600">Enhanced safety features</p>
          </motion.div>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex md:items-center flex-col md:flex-row"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Enquire</h3>
                <p className="text-gray-600">Tell us your requirements, including location preferences, budget, and stay duration.</p>
              </div>
              
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  1
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex md:items-center flex-col md:flex-row"
            >
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0"></div>
              
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  2
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-xl font-semibold mb-2">Property Selection</h3>
                <p className="text-gray-600">We'll present suitable options and arrange viewings (in-person or virtual).</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex md:items-center flex-col md:flex-row"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Booking Confirmation</h3>
                <p className="text-gray-600">Secure your chosen accommodation with a deposit and complete the simple booking process.</p>
              </div>
              
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  3
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex md:items-center flex-col md:flex-row"
            >
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0"></div>
              
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  4
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-xl font-semibold mb-2">Move In & Enjoy</h3>
                <p className="text-gray-600">Arrive to a fully prepared accommodation with a personal welcome and orientation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default ServiceAccommodation;
