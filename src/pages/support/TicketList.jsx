
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { MessageSquare, Clock, CheckCircle, XCircle, Plus } from "lucide-react";
import { format } from "date-fns";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    try {
      const { data, error } = await supabase
        .from('support_tickets')
        .select(`
          *,
          user:user_id(name, email)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTickets(data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load tickets",
      });
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'bg-yellow-100 text-yellow-600';
      case 'in_progress':
        return 'bg-blue-100 text-blue-600';
      case 'resolved':
        return 'bg-green-100 text-green-600';
      case 'closed':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'open':
        return Clock;
      case 'in_progress':
        return MessageSquare;
      case 'resolved':
        return CheckCircle;
      case 'closed':
        return XCircle;
      default:
        return MessageSquare;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading tickets...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Support Tickets</h1>
        <Link to="/support/tickets/create">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Ticket
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {tickets.map((ticket) => {
          const StatusIcon = getStatusIcon(ticket.status);
          return (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to={`/support/tickets/${ticket.id}`}>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-semibold">{ticket.subject}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(ticket.status)}`}>
                        {ticket.status.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="text-gray-600 line-clamp-2">{ticket.message}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>
                        Created by: {ticket.user.name}
                      </span>
                      <span>•</span>
                      <span>
                        {format(new Date(ticket.created_at), "MMM d, yyyy 'at' h:mm a")}
                      </span>
                    </div>
                  </div>
                  <StatusIcon className={`h-6 w-6 ${getStatusColor(ticket.status)}`} />
                </div>
              </Link>
            </motion.div>
          );
        })}

        {tickets.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <MessageSquare className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">No Tickets Found</h3>
            <p className="text-gray-500 mt-2">Create a new ticket to get started</p>
            <Link to="/support/tickets/create">
              <Button className="mt-4">Create Ticket</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketList;
