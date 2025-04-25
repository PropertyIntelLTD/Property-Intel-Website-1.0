
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fetchProperties, createProperty, updateProperty } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

function LandlordDashboard() {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalIncome, setTotalIncome] = useState(0);
  const [pendingRequests, setPendingRequests] = useState(0);

  useEffect(() => {
    loadProperties();
  }, [user]);

  const loadProperties = async () => {
    try {
      const data = await fetchProperties(user.id, "landlord");
      setProperties(data);
      
      // Calculate total income
      const income = data.reduce((sum, property) => sum + (property.rent || 0), 0);
      setTotalIncome(income);
      
      // Count pending maintenance requests
      const pending = data.reduce((count, property) => 
        count + (property.maintenance_requests?.length || 0), 0);
      setPendingRequests(pending);
      
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load properties",
      });
      setLoading(false);
    }
  };

  const handleAddProperty = async (propertyData) => {
    try {
      const newProperty = await createProperty({
        ...propertyData,
        landlord_id: user.id,
      });
      setProperties([...properties, newProperty]);
      toast({
        title: "Success",
        description: "Property added successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add property",
      });
    }
  };

  const handleEditProperty = async (id, propertyData) => {
    try {
      const updatedProperty = await updateProperty(id, propertyData);
      setProperties(properties.map(p => 
        p.id === id ? updatedProperty : p
      ));
      toast({
        title: "Success",
        description: "Property updated successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update property",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

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
            <h3 className="text-xl font-semibold mb-2">Total Properties</h3>
            <p className="text-3xl font-bold">{properties.length}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Total Income</h3>
            <p className="text-3xl font-bold">${totalIncome}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Pending Requests</h3>
            <p className="text-3xl font-bold">{pendingRequests}</p>
          </motion.div>
        </div>

        <div className="bg-card rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Your Properties</h2>
            <Button onClick={() => handleAddProperty({
              name: "New Property",
              address: "123 Street",
              rent: 1000,
              status: "available"
            })}>
              Add Property
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {properties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="border p-4 rounded-lg"
              >
                <h3 className="text-xl font-semibold">{property.name}</h3>
                <p className="text-gray-600">{property.address}</p>
                <p className="mt-2">Status: {property.status}</p>
                <p className="mt-2">Rent: ${property.rent}</p>
                <div className="mt-4 flex space-x-2">
                  <Button size="sm">View Details</Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleEditProperty(property.id, {
                      ...property,
                      name: `${property.name} (Updated)`
                    })}
                  >
                    Edit
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandlordDashboard;
