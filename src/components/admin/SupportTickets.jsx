
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { MessageSquare, CheckCircle, XCircle, Clock } from "lucide-react";

const SupportTickets = () => {
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
        description: "Failed to load support tickets",
      });
      setLoading(false);
    }
  };

  const updateTicketStatus = async (id, status) => {
    try {
      const { data, error } = await supabase
        .from('support_tickets')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setTickets(tickets.map(ticket => 
        ticket.id === id ? data : ticket
      ));
      toast({
        title: "Success",
        description: "Ticket status updated successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
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
    return <div>Loading support tickets...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Support Tickets</h2>
      </div>

      <div className="grid gap-4">
        {tickets.map((ticket) => {
          const StatusIcon = getStatusIcon(ticket.status);
          return (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-lg">{ticket.subject}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-gray-600">{ticket.message}</p>
                  <div className="text-sm text-gray-500">
                    From: {ticket.user.name} ({ticket.user.email})
                  </div>
                </div>
                <div className="flex space-x-2">
                  {ticket.status !== 'resolved' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateTicketStatus(ticket.id, 'in_progress')}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      In Progress
                    </Button>
                  )}
                  {ticket.status !== 'closed' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateTicketStatus(ticket.id, 'resolved')}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Resolve
                    </Button>
                  )}
                  {ticket.status !== 'closed' && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => updateTicketStatus(ticket.id, 'closed')}
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Close
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SupportTickets;
