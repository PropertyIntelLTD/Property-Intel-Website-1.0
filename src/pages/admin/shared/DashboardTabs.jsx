
import React from "react";
import { Building, Users, FileText, BarChart } from "lucide-react";

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "properties", label: "Properties", icon: Building },
    { id: "users", label: "Users", icon: Users },
    { id: "blogs", label: "Blog Posts", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart },
  ];

  return (
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
  );
};

export default DashboardTabs;
