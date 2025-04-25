
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Briefcase, Building, Users } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Property Security",
    description: "Advanced security solutions for your properties",
    path: "/services/custom/security"
  },
  {
    icon: Briefcase,
    title: "Business Integration",
    description: "Seamless integration with your existing business processes",
    path: "/services/custom/business"
  },
  {
    icon: Building,
    title: "Custom Property Management",
    description: "Tailored property management solutions",
    path: "/services/custom/management"
  },
  {
    icon: Users,
    title: "Tenant Relations",
    description: "Specialised tenant relationship management",
    path: "/services/custom/relations"
  }
];

const CustomSolutions = () => {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Custom Solutions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Tailored solutions designed to meet your specific needs and requirements.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <motion.div
              key={solution.title}
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
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                  <Link to={solution.path}>
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
        <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can create a tailored solution that perfectly matches your requirements.
        </p>
        <Link to="/contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CustomSolutions;
