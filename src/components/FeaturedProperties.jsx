
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, MapPin, BedDouble, Bath, ArrowUpRight, Heart } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment with City View",
    location: "Downtown Financial District",
    price: "$2,500/mo",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "Apartment",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 2,
    title: "Modern Villa with Pool",
    location: "Suburban Heights",
    price: "$3,800/mo",
    beds: 4,
    baths: 3, 
    sqft: 2500,
    type: "Villa",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
  },
  {
    id: 3,
    title: "Cozy Studio in Historic Building",
    location: "City Center",
    price: "$1,800/mo",
    beds: 1,
    baths: 1,
    sqft: 600,
    type: "Studio",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
];

const FeaturedProperties = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Featured Properties
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our hand-picked selection of premium properties available for
            rent and purchase in prime locations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="property-card group"
            >
              <div className="img-container aspect-[4/3]">
                <img 
                  src={property.image}
                  alt={`${property.title} property`}
                  className="object-cover"
                />
                <div className="property-badge">{property.status}</div>
                <button className="absolute top-4 left-4 z-10 p-2 bg-white/90 text-gray-700 hover:text-primary rounded-full shadow-sm transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="property-content relative">
                <div className="absolute -top-10 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to={`/properties/${property.id}`}>
                    <Button className="shadow-lg flex items-center space-x-1">
                      <span>View Details</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className="py-2 px-1 mb-1 inline-flex items-center text-sm font-medium text-primary/90 bg-primary/5 rounded">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{property.type}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mt-2 mb-4">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-sm truncate">{property.location}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 py-3 border-t border-gray-100">
                  <div className="flex items-center text-gray-700">
                    <BedDouble className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Bath className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Building className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-xl font-bold text-primary">
                    {property.price}
                  </span>
                  <Link to={`/properties/${property.id}`}>
                    <Button variant="outline" size="sm" className="btn-hover-slide">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link to="/properties">
            <Button size="lg" className="px-8">
              View All Properties
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
