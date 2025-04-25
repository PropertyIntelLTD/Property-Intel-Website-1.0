
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-section pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Find Your Perfect{" "}
              <span className="text-primary">Property</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-gray-500">
              Discover your dream home with our extensive collection of properties.
              Whether you're looking to rent or buy, we've got you covered.
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg">Browse Properties</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative h-[600px] w-full overflow-hidden rounded-lg">
              <img 
                className="h-full w-full object-cover"
                alt="Modern luxury apartment interior"
               src="https://images.unsplash.com/photo-1509942999-ddab40caad8f" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
