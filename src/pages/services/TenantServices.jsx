
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Wrench, DoorClosed, CreditCard, Building, Headphones } from "lucide-react";

const tenantServices = [
  {
    icon: Search,
    title: "Property Search",
    description: "Find your perfect rental property with our extensive listings",
    path: "/services/tenant/property-search"
  },
  {
    icon: Wrench,
    title: "Maintenance Requests",
    description: "Easy maintenance request submission and tracking",
    path: "/services/tenant/maintenance-requests"
  },
  {
    icon: DoorClosed,
    title: "End of Tenancy",
    description: "Guidance and support for end of tenancy procedures",
    path: "/services/tenant/end-of-tenancy"
  },
  {
    icon: CreditCard,
    title: "Rent Payment",
    description: "Convenient and secure rent payment options",
    path: "/services/tenant/rent-payment"
  },
  {
    icon: Building,
    title: "Service Accommodation",
    description: "Short term and serviced accommodation options",
    path: "/services/tenant/service-accommodation"
  },
  {
    icon: Headphones,
    title: "Tenant Support",
    description: "24/7 support for all your tenancy needs",
    path: "/services/tenant/tenant-support"
  }
];

const TenantServices = () => {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Tenant Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Making your rental experience smooth and hassle-free.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tenantServices.map((service, index) => {
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
        <h2 className="text-3xl font-bold mb-6">Looking for Your Next Home?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Browse our available properties and find your perfect match.
        </p>
        <Link to="/properties">
          <Button size="lg">View Properties</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default TenantServices;
