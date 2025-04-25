
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
          <p className="mt-4 text-lg text-gray-500">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Button
            className="mt-8"
            onClick={() => navigate("/")}
          >
            Go Back Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
