
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadProperty();
  }, [id]);

  const loadProperty = async () => {
    try {
      const { data, error } = await supabase
        .from("properties")
        .select(`
          *,
          landlord:landlord_id(name),
          agent:agent_id(name)
        `)
        .eq("id", id)
        .single();

      if (error) throw error;
      setProperty(data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load property details",
      });
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <p className="text-xl">Loading property details...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Property not found</p>
          <Link to="/properties">
            <Button>Back to Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/properties">
            <Button variant="outline">← Back to Properties</Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-lg shadow-lg overflow-hidden"
        >
          <div className="aspect-video relative">
            <img 
              className="w-full h-full object-cover"
              alt={`${property.name} property view`}
             src="https://images.unsplash.com/photo-1685279053124-f47a436a9c1e" />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
                <p className="text-xl text-gray-600">{property.address}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">${property.rent}/month</p>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {property.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Type:</span> {property.type}</p>
                  <p><span className="font-medium">Size:</span> {property.size} sq ft</p>
                  <p><span className="font-medium">Bedrooms:</span> {property.bedrooms}</p>
                  <p><span className="font-medium">Bathrooms:</span> {property.bathrooms}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-2">
                  {property.agent && (
                    <p><span className="font-medium">Agent:</span> {property.agent.name}</p>
                  )}
                  {property.landlord && (
                    <p><span className="font-medium">Landlord:</span> {property.landlord.name}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
            </div>

            <div className="mt-8 flex space-x-4">
              <Button className="flex-1">Schedule Viewing</Button>
              <Button className="flex-1" variant="outline">Contact Agent</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PropertyDetail;
