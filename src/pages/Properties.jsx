
import React from "react";
import { motion } from "framer-motion";

const Properties = () => {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Our Properties
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Browse through our extensive collection of properties available for rent
          and sale.
        </p>
      </motion.div>
      
      {/* Property listings will be added here */}
      <div className="mt-12">
        <p className="text-center text-gray-500">Property listings coming soon...</p>
      </div>
    </div>
  );
};

export default Properties;
