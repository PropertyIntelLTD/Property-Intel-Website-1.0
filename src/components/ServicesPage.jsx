
import React from "react";
import { motion } from "framer-motion";
import { Home, Key, Tool, FileText } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Management",
    description:
      "Comprehensive property management services for landlords and property owners.",
  },
  {
    icon: Key,
    title: "Rental Services",
    description:
      "Find your perfect rental property with our extensive listing database.",
  },
  {
    icon: Tool,
    title: "Maintenance",
    description:
      "24/7 maintenance support for all your property-related requirements.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Professional handling of all property-related documentation and legal work.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            We offer a wide range of property management services to meet your
            needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 inline-block rounded-full bg-primary/10 p-3 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
