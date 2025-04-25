
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { MessageSquare, CheckCircle, XCircle, Clock, Plus } from "lucide-react";

const SupportDashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const { data, error } = await supabase
        .from('support_tickets')
        .select('status');

      if (error) throw error;

      const stats = data.reduce((acc, ticket) => {
        acc.total++;
        switch (ticket.status) {
          case 'open':
            acc.open++;
            break;
          case 'in_progress':
            acc.inProgress++;
            break;
          case 'resolved':
            acc.resolved++;
            break;
          default:
            break;
        }
        return acc;
      }, { total: 0, open: 0, inProgress: 0, resolved: 0 });

      setStats(stats);
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load support statistics",
      });
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Tickets",
      value: stats.total,
      icon: MessageSquare,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Open Tickets",
      value: stats.open,
      icon: Clock,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: MessageSquare,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Resolved",
      value: stats.resolved,
      icon: CheckCircle,
      color: "bg-green-100 text-green-600"
    }
  ];

  if (loading) {
    return <div>Loading support dashboard...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Support Dashboard</h1>
        <Link to="/support/tickets/create">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Ticket
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Tickets</h2>
          <Link to="/support/tickets" className="text-primary hover:underline block mt-4">
            View all tickets →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link to="/support/tickets/create">
              <Button className="w-full" variant="outline">Create New Ticket</Button>
            </Link>
            <Link to="/support/tickets">
              <Button className="w-full" variant="outline">View All Tickets</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportDashboard;
