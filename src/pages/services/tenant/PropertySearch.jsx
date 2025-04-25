
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Search, 
  Home, 
  Filter, 
  Map, 
  Image, 
  Bookmark, 
  Building, 
  Calendar, 
  Bell,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Advanced search filters",
  "High-quality property photos",
  "Detailed property descriptions",
  "Virtual tours available",
  "Instant booking requests",
  "Neighborhood information",
];

const benefits = [
  {
    title: "Save Time",
    description: "Find properties that match your criteria faster with advanced search filters.",
  },
  {
    title: "Make Informed Decisions",
    description: "Access detailed property information and high-quality images before booking viewings.",
  },
  {
    title: "Stay Updated",
    description: "Get alerts for new properties that match your search criteria.",
  },
  {
    title: "Compare Options",
    description: "Easily compare multiple properties side by side to find your perfect match.",
  },
  {
    title: "Local Insights",
    description: "Access neighborhood information and local amenities to evaluate the area.",
  },
  {
    title: "Streamlined Process",
    description: "Request viewings directly through our platform for faster response times.",
  },
];

const faqItems = [
  {
    question: "How do I start my property search?",
    answer: "You can begin your property search by visiting our properties page and using the search filters to narrow down options based on your preferences such as location, price range, number of bedrooms, and amenities."
  },
  {
    question: "Can I save properties to view later?",
    answer: "Yes, you can create a free account and save properties to your favorites list. This allows you to compare options and return to them later without having to search again."
  },
  {
    question: "How do I schedule a property viewing?",
    answer: "Once you've found a property you're interested in, you can request a viewing directly through our platform. Click on the 'Request Viewing' button on the property page, select your preferred date and time, and our team will confirm the appointment."
  },
  {
    question: "Are virtual tours available for all properties?",
    answer: "While we strive to provide virtual tours for as many properties as possible, they may not be available for all listings. The availability of virtual tours is clearly indicated on each property page."
  },
  {
    question: "How often are new properties added to the website?",
    answer: "Our property database is updated daily with new listings. You can set up alerts to be notified when new properties matching your search criteria become available."
  }
];

const searchFeatures = [
  {
    title: "Smart Search",
    description: "Advanced search algorithms to help you find exactly what you're looking for.",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    title: "Property Matching",
    description: "Get matched with properties that fit your specific requirements.",
    icon: <Home className="w-6 h-6 text-primary" />,
  },
  {
    title: "Custom Filters",
    description: "Filter properties by price, location, amenities, and more.",
    icon: <Filter className="w-6 h-6 text-primary" />,
  },
];

const PropertySearch = () => {
  return (
    <ServicePageTemplate
      title="Find Your Perfect Home"
      description="Browse our extensive property listings and find the perfect rental property for you"
      heroImage="https://images.unsplash.com/photo-1497366412874-3415097a27e7"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ready to Find Your New Home?"
      ctaText="Start your property search today and find the perfect place to call home."
      ctaButtonText="Browse Properties"
      ctaButtonLink="/properties"
    >
      {/* Search Features Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Search Platform Features</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {searchFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">How Our Property Search Works</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
            
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-6 mb-12 relative"
            >
              <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center z-10 border-4 border-white">
                  <Filter className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:ml-4 bg-white p-6 rounded-lg shadow-sm border border-muted flex-1">
                <h3 className="text-xl font-semibold mb-2">Define Your Search Criteria</h3>
                <p className="text-gray-600">
                  Start by setting your search parameters - location, budget, property type, number of bedrooms,
                  and any specific amenities you require. The more detailed your criteria, the more tailored your results will be.
                </p>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col md:flex-row gap-6 mb-12 relative"
            >
              <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center z-10 border-4 border-white">
                  <Search className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:ml-4 bg-white p-6 rounded-lg shadow-sm border border-muted flex-1">
                <h3 className="text-xl font-semibold mb-2">Browse Matching Properties</h3>
                <p className="text-gray-600">
                  Our system instantly displays properties that match your criteria. Browse through high-quality photos,
                  floor plans, and detailed descriptions to get a comprehensive view of each property.
                </p>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 mb-12 relative"
            >
              <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center z-10 border-4 border-white">
                  <Bookmark className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:ml-4 bg-white p-6 rounded-lg shadow-sm border border-muted flex-1">
                <h3 className="text-xl font-semibold mb-2">Save Your Favorites</h3>
                <p className="text-gray-600">
                  Found properties you like? Save them to your favorites list so you can easily compare them later
                  or share them with family and friends for their opinion.
                </p>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-6 relative"
            >
              <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center z-10 border-4 border-white">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:ml-4 bg-white p-6 rounded-lg shadow-sm border border-muted flex-1">
                <h3 className="text-xl font-semibold mb-2">Schedule Viewings</h3>
                <p className="text-gray-600">
                  Ready to see a property in person? Schedule a viewing directly through our platform.
                  Choose a date and time that works for you, and our team will confirm the appointment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Get Started Section */}
      <div className="my-20 bg-primary/5 p-8 rounded-lg border border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Start Your Property Search Today</h3>
          <p className="text-gray-700 mb-8">
            Finding your perfect home is just a few clicks away. Our advanced search system makes it easy to discover 
            properties that match all your requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Save Time</h4>
              <p className="text-sm text-gray-600">Find matching properties in minutes, not hours</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-gray-600">Receive alerts for new properties that match your criteria</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Wide Selection</h4>
              <p className="text-sm text-gray-600">Browse hundreds of quality listings across all neighborhoods</p>
            </div>
          </div>
          <Link to="/properties">
            <Button size="lg" className="px-8">Start Searching Now</Button>
          </Link>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default PropertySearch;
