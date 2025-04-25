
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import UserManagement from "@/components/admin/UserManagement";
import PropertyManagement from "@/components/admin/PropertyManagement";
import BlogManagement from "@/components/admin/BlogManagement";
import AnalyticsDashboard from "@/components/admin/analytics/AnalyticsDashboard";
import SupportTickets from "@/components/admin/SupportTickets";
import DashboardStats from "@/components/admin/shared/DashboardStats";
import DashboardTabs from "@/components/admin/shared/DashboardTabs";

function AdminDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("analytics");

  const renderTabContent = () => {
    switch (activeTab) {
      case "users":
        return <UserManagement />;
      case "properties":
        return <PropertyManagement />;
      case "blogs":
        return <BlogManagement />;
      case "analytics":
        return <AnalyticsDashboard />;
      case "support":
        return <SupportTickets />;
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
            <p className="text-gray-600">Admin Dashboard</p>
          </div>
          <Button onClick={logout} variant="outline">
            Logout
          </Button>
        </div>

        <DashboardStats />

        <div className="bg-white rounded-lg shadow-sm mb-6">
          <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
