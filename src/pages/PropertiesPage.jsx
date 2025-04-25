import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Construction, Hammer, AlertTriangle } from "lucide-react";

function PropertiesPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 text-center border border-primary/10"
      >
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/5">
          <Construction className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Property Listings Page is Currently Under Construction
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We're working hard to bring you a comprehensive property search experience. 
          Our team is developing advanced filtering, real-time updates, and 
          integrated booking systems to make finding your ideal property easier than ever.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button size="lg" className="px-6">
              Return to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="px-6">
              Contact Us
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-2 bg-amber-50 p-4 rounded-lg border border-amber-200 text-amber-800">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <p className="text-sm">Expected completion: Q3 2025</p>
        </div>
      </motion.div>
    </div>
  );
}

export default PropertiesPage;