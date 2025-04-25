import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Building, Landmark, Home, Users, BarChart2, Key, Shield, LayoutDashboard } from 'lucide-react';
import { Button } from "@/components/ui/button";

// 3D Building simulation
const BuildingSimulation = () => {
  const containerRef = useRef(null);
  const buildingsRef = useRef([]);
  const [buildings, setBuildings] = useState([]);
  const controls = useAnimation();
  
  // Generate random buildings
  useEffect(() => {
    if (!containerRef.current) return;
    
    const newBuildings = [];
    const numBuildings = 30;
    
    for (let i = 0; i < numBuildings; i++) {
      newBuildings.push({
        id: i,
        x: Math.random() * 100, // Horizontal position %
        z: Math.random() * 50 + 30, // Depth (30-80%)
        width: Math.random() * 5 + 3, // Building width
        height: Math.random() * 15 + 5, // Building height
        color: i % 5 === 0 ? "#6366f1" : "#fff",
        opacity: Math.random() * 0.5 + 0.1,
        delay: Math.random() * 0.7,
      });
    }
    
    // Sort by z-index for proper 3D layering
    newBuildings.sort((a, b) => b.z - a.z);
    setBuildings(newBuildings);
    
    // Start the animation sequence
    controls.start({
      y: [10, 0],
      opacity: [0, 1],
      transition: { 
        duration: 1.5,
        ease: "easeOut",
        staggerChildren: 0.1 
      }
    });
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-full absolute left-0 top-0 perspective-1000 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70" />
      <div 
        className="absolute bottom-0 left-0 w-full h-full transform-style-3d rotate-x-60 scale-y-40 origin-bottom"
        style={{ 
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        {buildings.map((building) => (
          <motion.div
            key={building.id}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ 
              scaleY: 1, 
              opacity: building.opacity,
              transition: { 
                duration: 1.2, 
                delay: building.delay,
                ease: "easeOut"
              } 
            }}
            className="absolute origin-bottom"
            style={{
              left: `${building.x}%`,
              bottom: "0",
              width: `${building.width}%`,
              height: `${building.height}%`,
              backgroundColor: building.color,
              opacity: building.opacity,
              transform: `translateZ(${building.z}px)`,
              boxShadow: building.color === "#6366f1" ? "0 0 15px rgba(99, 102, 241, 0.6)" : "none"
            }}
          >
            {/* Windows */}
            <div className="grid grid-cols-3 h-full p-1 gap-1">
              {Array(9).fill().map((_, i) => (
                <div 
                  key={i}
                  className="bg-white/20 rounded-sm"
                  style={{
                    opacity: Math.random() > 0.3 ? 0.8 : 0.1
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* Ground grid */}
        <div className="absolute bottom-0 left-0 w-full h-full" style={{ transform: "rotateX(90deg) translateZ(0px)" }}>
          <div className="w-full h-full bg-white/5 grid grid-cols-10">
            {Array(100).fill().map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureIcon = ({ icon: Icon, delay }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300, delay }}
    className="bg-gradient-to-br from-primary to-primary/70 p-3 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
  >
    <Icon className="h-7 w-7 text-white" />
  </motion.div>
);

const features = [
  { icon: Home, title: "Property Management", description: "Smart, AI-powered property management solutions" },
  { icon: Users, title: "Tenant Portal", description: "Streamlined communication and payment systems" },
  { icon: Landmark, title: "Portfolio Analytics", description: "Real-time financial insights and forecasting" },
  { icon: LayoutDashboard, title: "Custom Dashboards", description: "Personalized views for agents, landlords and tenants" },
  { icon: Shield, title: "Document Security", description: "Blockchain-verified document management" },
  { icon: BarChart2, title: "Market Intelligence", description: "Data-driven property market analysis" },
];

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-center items-center relative overflow-hidden">
      {/* 3D Building cityscape simulation */}
      <BuildingSimulation />
      
      {/* Content overlay */}
      <div className="max-w-screen-lg w-full z-10 px-6">
        <div className="text-center mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Property<span className="text-primary">Intel</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto"
          >
            The next generation of property management technology
          </motion.p>
        </div>
        
        {/* Features */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-5 flex items-start gap-4 border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <FeatureIcon icon={feature.icon} delay={0.5 + (i * 0.1)} />
              <div>
                <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl max-w-md mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Coming Soon
          </h2>
          <p className="text-gray-300 mb-6">
            Our revolutionary property management platform is currently in development. 
            Join our waitlist for early access.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              Get Early Access
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;