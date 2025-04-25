
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, BarChart3, LineChart, Building, TrendingUp, PiggyBank } from "lucide-react";

const investorServices = [
  {
    icon: Briefcase,
    title: "Investment Management",
    description: "Strategic property investment management and advisory services",
    path: "/services/investor/investment-management"
  },
  {
    icon: BarChart3,
    title: "Portfolio Management",
    description: "Comprehensive portfolio management and optimisation strategies",
    path: "/services/investor/portfolio-management"
  },
  {
    icon: LineChart,
    title: "Market Analysis",
    description: "In depth market research and investment opportunity analysis",
    path: "/services/investor/market-analysis"
  },
  {
    icon: Building,
    title: "Property Acquisition",
    description: "Expert guidance in identifying and acquiring profitable properties",
    path: "/services/investor/property-acquisition"
  },
  {
    icon: TrendingUp,
    title: "Investment Strategy",
    description: "Customised investment strategies to meet your financial goals",
    path: "/services/investor/investment-strategy"
  },
  {
    icon: PiggyBank,
    title: "Financial Planning",
    description: "Comprehensive financial planning and investment analysis",
    path: "/services/investor/financial-planning"
  }
];

const InvestorServices = () => {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Investor Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Maximise your property investment returns with our expert services.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {investorServices.map((service, index) => {
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
        <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Portfolio?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let our investment experts help you maximise your returns.
        </p>
        <Link to="/contact">
          <Button size="lg">Schedule a Consultation</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default InvestorServices;
