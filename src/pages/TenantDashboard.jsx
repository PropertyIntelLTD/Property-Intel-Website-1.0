
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function TenantDashboard() {
  const { user, logout } = useAuth();

  const rentalInfo = {
    property: "Sunset Apartments",
    unit: "Unit 3B",
    rent: 1200,
    nextPayment: "2025-05-01",
    leaseEnd: "2026-04-30"
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
          <Button onClick={logout} variant="outline">
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Next Rent Due</h3>
            <p className="text-3xl font-bold">${rentalInfo.rent}</p>
            <p className="text-sm text-gray-600">Due on {rentalInfo.nextPayment}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Lease Status</h3>
            <p className="text-3xl font-bold">Active</p>
            <p className="text-sm text-gray-600">Ends {rentalInfo.leaseEnd}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Maintenance Requests</h3>
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm text-gray-600">Open requests</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-lg shadow p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Property Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Property</p>
                <p className="font-semibold">{rentalInfo.property}</p>
              </div>
              <div>
                <p className="text-gray-600">Unit</p>
                <p className="font-semibold">{rentalInfo.unit}</p>
              </div>
              <Button className="w-full">Submit Maintenance Request</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-lg shadow p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Payment History</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">April 2025</p>
                  <p className="text-sm text-gray-600">Paid on Apr 1, 2025</p>
                </div>
                <p className="font-semibold">${rentalInfo.rent}</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">March 2025</p>
                  <p className="text-sm text-gray-600">Paid on Mar 1, 2025</p>
                </div>
                <p className="font-semibold">${rentalInfo.rent}</p>
              </div>
              <Button className="w-full">Make Payment</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TenantDashboard;
