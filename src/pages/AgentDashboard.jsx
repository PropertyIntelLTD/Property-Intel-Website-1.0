
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import UserManagement from "@/components/admin/UserManagement";
import PropertyManagement from "@/components/admin/PropertyManagement";
import BlogManagement from "@/components/admin/BlogManagement";
import { Building, Users, FileText, BarChart } from "lucide-react";

function AgentDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("properties");

  const tabs = [
    { id: "properties", label: "Properties", icon: Building },
    { id: "users", label: "Users", icon: Users },
    { id: "blogs", label: "Blog Posts", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "users":
        return <UserManagement />;
      case "properties":
        return <PropertyManagement />;
      case "blogs":
        return <BlogManagement />;
      case "analytics":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
            <p className="text-gray-600">Agent Dashboard</p>
          </div>
          <Button onClick={logout} variant="outline">
            Logout
          </Button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <Building className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-lg font-semibold">Properties</h3>
            <p className="text-2xl font-bold">24</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <Users className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-lg font-semibold">Users</h3>
            <p className="text-2xl font-bold">156</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <FileText className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-lg font-semibold">Blog Posts</h3>
            <p className="text-2xl font-bold">12</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <BarChart className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-lg font-semibold">Total Views</h3>
            <p className="text-2xl font-bold">2.4k</p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b">
            <nav className="flex space-x-4 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center px-3 py-4 text-sm font-medium border-b-2 
                      ${activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentDashboard;
