
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { AlertCircle, Clock, Search, Filter, Download } from "lucide-react";
import { format } from "date-fns";

const SystemLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    loadLogs();
  }, [filter, searchTerm]);

  const loadLogs = async () => {
    try {
      let query = supabase
        .from('system_logs')
        .select(`
          *,
          user:user_id(name)
        `)
        .order('created_at', { ascending: false });

      if (filter !== "all") {
        query = query.eq('type', filter);
      }

      if (searchTerm) {
        query = query.ilike('description', `%${searchTerm}%`);
      }

      const { data, error } = await query;

      if (error) throw error;
      setLogs(data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load system logs",
      });
      setLoading(false);
    }
  };

  const getLogTypeColor = (type) => {
    switch (type) {
      case 'error':
        return 'bg-red-100 text-red-600';
      case 'warning':
        return 'bg-yellow-100 text-yellow-600';
      case 'info':
        return 'bg-blue-100 text-blue-600';
      case 'success':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const exportLogs = () => {
    const csvContent = logs.map(log => {
      return [
        format(new Date(log.created_at), "yyyy-MM-dd HH:mm:ss"),
        log.type,
        log.user?.name || 'System',
        log.description
      ].join(',');
    });

    const header = ['Timestamp,Type,User,Description'].join(',');
    const csv = [header, ...csvContent].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `system-logs-${format(new Date(), "yyyy-MM-dd")}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div>Loading system logs...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">System Logs</h2>
        <Button onClick={exportLogs}>
          <Download className="h-4 w-4 mr-2" />
          Export Logs
        </Button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search logs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-md px-2 py-2"
          >
            <option value="all">All Types</option>
            <option value="error">Errors</option>
            <option value="warning">Warnings</option>
            <option value="info">Info</option>
            <option value="success">Success</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {logs.map((log) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-full ${getLogTypeColor(log.type)}`}>
                  {log.type === 'error' && <AlertCircle className="h-4 w-4" />}
                  {log.type === 'warning' && <AlertCircle className="h-4 w-4" />}
                  {log.type === 'info' && <Clock className="h-4 w-4" />}
                  {log.type === 'success' && <Clock className="h-4 w-4" />}
                </div>
                <div>
                  <p className="font-medium">{log.description}</p>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                    <span>{log.user?.name || 'System'}</span>
                    <span>•</span>
                    <span>{format(new Date(log.created_at), "MMM d, yyyy 'at' h:mm a")}</span>
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getLogTypeColor(log.type)}`}>
                {log.type}
              </span>
            </div>
          </motion.div>
        ))}

        {logs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <AlertCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">No Logs Found</h3>
            <p className="text-gray-500 mt-2">
              {searchTerm ? "Try adjusting your search terms" : "System logs will appear here"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemLogs;
