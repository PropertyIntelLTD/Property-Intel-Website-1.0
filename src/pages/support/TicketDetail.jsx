
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import { MessageSquare, Clock, CheckCircle, XCircle, ArrowLeft } from "lucide-react";

const TicketDetail = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadTicket();
    loadComments();
  }, [id]);

  const loadTicket = async () => {
    try {
      const { data, error } = await supabase
        .from('support_tickets')
        .select(`
          *,
          user:user_id(name, email)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      setTicket(data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load ticket details",
      });
      setLoading(false);
    }
  };

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('support_ticket_comments')
        .select(`
          *,
          user:user_id(name)
        `)
        .eq('ticket_id', id)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setComments(data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load comments",
      });
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const { data, error } = await supabase
        .from('support_ticket_comments')
        .insert([
          {
            ticket_id: id,
            user_id: ticket.user_id,
            comment: newComment
          }
        ])
        .select(`
          *,
          user:user_id(name)
        `)
        .single();

      if (error) throw error;

      setComments([...comments, data]);
      setNewComment("");
      toast({
        title: "Success",
        description: "Comment added successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add comment",
      });
    }
  };

  const updateTicketStatus = async (status) => {
    try {
      const { data, error } = await supabase
        .from('support_tickets')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setTicket({ ...ticket, status: data.status });
      toast({
        title: "Success",
        description: "Ticket status updated successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update ticket status",
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

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading ticket details...</div>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ticket not found</h2>
          <Link to="/support/tickets">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tickets
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/support/tickets">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tickets
          </Button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm p-6 mb-8"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{ticket.subject}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Created by: {ticket.user.name}</span>
              <span>•</span>
              <span>{format(new Date(ticket.created_at), "MMM d, yyyy 'at' h:mm a")}</span>
              <span>•</span>
              <span className={`px-3 py-1 rounded-full ${getStatusColor(ticket.status)}`}>
                {ticket.status.replace('_', ' ')}
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            {ticket.status !== 'resolved' && (
              <Button
                variant="outline"
                onClick={() => updateTicketStatus('in_progress')}
              >
                <Clock className="h-4 w-4 mr-2" />
                Mark In Progress
              </Button>
            )}
            {ticket.status !== 'closed' && (
              <Button
                variant="outline"
                onClick={() => updateTicketStatus('resolved')}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark Resolved
              </Button>
            )}
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-gray-600">{ticket.message}</p>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-xl font-semibold mb-6">Comments</h2>
          <div className="space-y-6 mb-8">
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{comment.user.name}</p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(comment.created_at), "MMM d, yyyy 'at' h:mm a")}
                    </p>
                  </div>
                </div>
                <p className="mt-2">{comment.comment}</p>
              </motion.div>
            ))}
          </div>

          <form onSubmit={addComment} className="space-y-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-3 border rounded-lg"
              rows={4}
              required
            />
            <Button type="submit">Add Comment</Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default TicketDetail;
