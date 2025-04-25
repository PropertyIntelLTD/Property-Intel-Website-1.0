import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building, Wrench, Home, Users, Coins, FileText } from "lucide-react";

const landlordServices = [
  {
    icon: Building,
    title: "Property Management",
    description: "Comprehensive property management including tenant screening, rent collection, and maintenance",
    path: "/services/landlord/property-management"
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Full maintenance services and emergency repairs for your properties",
    path: "/services/landlord/maintenance"
  },
  {
    icon: Home,
    title: "End of Tenancy",
    description: "Professional end of tenancy services and property turnaround",
    path: "/services/landlord/end-of-tenancy"
  },
  {
    icon: Users,
    title: "Tenant Sourcing",
    description: "Expert tenant screening and placement services",
    path: "/services/landlord/tenant-sourcing"
  },
  {
    icon: Coins,
    title: "Rent Collection",
    description: "Efficient rent collection and financial management services",
    path: "/services/landlord/rent-collection"
  },
  {
    icon: FileText,
    title: "Legal Compliance",
    description: "Ensuring your properties meet all legal requirements and regulations",
    path: "/services/landlord/legal-compliance"
  }
];

const LandlordServices = () => {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Landlord Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Comprehensive property management solutions designed specifically for property owners.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {landlordServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link to={service.path}>
                    <Button className="mt-4" variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-24 bg-primary/5 rounded-lg p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us handle your property management needs while you focus on what matters most.
        </p>
        <Link to="/contact">
          <Button size="lg">Contact Us Today</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default LandlordServices;
