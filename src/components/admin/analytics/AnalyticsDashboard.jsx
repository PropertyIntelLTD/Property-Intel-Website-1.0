
import React from "react";
import { motion } from "framer-motion";
import { BarChart, TrendingUp, DollarSign, Users, Building, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const AnalyticsDashboard = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$124,500",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Active Properties",
      value: "45",
      change: "+8.1%",
      trend: "up",
      icon: Building
    },
    {
      title: "Total Users",
      value: "2,345",
      change: "+5.2%",
      trend: "up",
      icon: Users
    },
    {
      title: "Viewings Scheduled",
      value: "156",
      change: "+15.3%",
      trend: "up",
      icon: Calendar
    }
  ];

  const revenueData = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [12500, 15000, 18000, 22000, 19500, 24000]
  };

  const userActivityData = {
    categories: ["Tenants", "Landlords", "Agents"],
    values: [1200, 450, 95]
  };

  return (
    <div className="space-y-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mt-4">{metric.value}</h3>
                <p className="text-gray-600 text-sm">{metric.title}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Revenue Overview</h3>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-80">
            <div className="h-full flex items-end justify-between gap-2">
              {revenueData.values.map((value, index) => (
                <div key={index} className="flex-1">
                  <div 
                    className="bg-primary/20 hover:bg-primary/30 transition-all rounded-t"
                    style={{ height: `${(value / Math.max(...revenueData.values)) * 100}%` }}
                  />
                  <p className="text-xs text-center mt-2">{revenueData.months[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* User Activity */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">User Activity</h3>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>This month</option>
              <option>Last month</option>
            </select>
          </div>
          <div className="h-80">
            <div className="h-full flex items-end justify-between gap-4">
              {userActivityData.categories.map((category, index) => (
                <div key={category} className="flex-1 text-center">
                  <div 
                    className="bg-primary/20 hover:bg-primary/30 transition-all rounded-t mx-auto w-24"
                    style={{ height: `${(userActivityData.values[index] / Math.max(...userActivityData.values)) * 100}%` }}
                  />
                  <p className="text-sm mt-2">{category}</p>
                  <p className="text-xs text-gray-600">{userActivityData.values[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
