
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME, COMPANY_DESCRIPTION } from "@/lib/constants";
import { Building, Users, Award, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building, label: "Properties Managed", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "1000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Target, label: "Success Rate", value: "98%" },
  ];

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          About {COMPANY_NAME}
        </h1>
        <p className="mt-4 text-lg text-gray-500">{COMPANY_DESCRIPTION}</p>
      </motion.div>

      <div className="mt-16">
        <div className="relative overflow-hidden rounded-lg">
          <img  className="h-96 w-full object-cover" alt="Our office building" src="https://images.unsplash.com/photo-1612396970400-2f359e5c5bb3" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-500">
              To provide exceptional property management services that exceed our
              clients' expectations, while maintaining the highest standards of
              professionalism and integrity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-500">
              To be the leading property management company, recognized for our
              innovative solutions, exceptional service, and commitment to creating
              value for our clients.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-24 bg-primary/5 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to rent, let, or invest in property, we're here to help you achieve your goals.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="default">Contact Us</Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">Our Services</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
