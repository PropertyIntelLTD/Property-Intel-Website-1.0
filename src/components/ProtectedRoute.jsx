
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();
  const { toast } = useToast();

  // Check if user is authenticated
  if (!user) {
    toast({
      variant: "destructive",
      title: "Access Denied",
      description: "Please login to access this page",
    });
    return <Navigate to="/login" replace />;
  }

  // Check if user has required role
  if (role && user.role !== role) {
    // Special handling for admin access
    if (role === 'admin' && user.role === 'agent') {
      // Allow agents to access some admin routes
      return children;
    }

    toast({
      variant: "destructive",
      title: "Access Denied",
      description: "You don't have permission to access this page",
    });
    return <Navigate to={`/${user.role}`} replace />;
  }

  // Check for specific role permissions
  const checkRolePermissions = () => {
    switch (user.role) {
      case 'admin':
        return true; // Admins have access to everything
      case 'agent':
        // Agents can access property management and some admin features
        return ['properties', 'blogs', 'analytics'].includes(role);
      case 'landlord':
        // Landlords can only access their dashboard and properties
        return ['properties'].includes(role);
      case 'tenant':
        // Tenants can only access their dashboard
        return false;
      default:
        return false;
    }
  };

  if (role && !checkRolePermissions()) {
    toast({
      variant: "destructive",
      title: "Access Denied",
      description: "You don't have permission to access this feature",
    });
    return <Navigate to={`/${user.role}`} replace />;
  }

  return children;
};

export default ProtectedRoute;
