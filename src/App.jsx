
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy-loaded components
const Home = lazy(() => import("@/pages/Home"));
const PropertiesPage = lazy(() => import("@/pages/PropertiesPage"));
const PropertyDetail = lazy(() => import("@/pages/PropertyDetail"));
const BlogsPage = lazy(() => import("@/pages/BlogsPage"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const BlogManagement = lazy(() => import("@/pages/BlogManagement"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Services = lazy(() => import("@/pages/Services"));
const LandlordServices = lazy(() => import("@/pages/services/LandlordServices"));
const TenantServices = lazy(() => import("@/pages/services/TenantServices"));
const InvestorServices = lazy(() => import("@/pages/services/InvestorServices"));
const CustomSolutions = lazy(() => import("@/pages/services/CustomSolutions"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));

// Lazy-loaded service sub-pages
const EndOfTenancy = lazy(() => import("@/pages/services/landlord/EndOfTenancy"));
const Maintenance = lazy(() => import("@/pages/services/landlord/Maintenance"));
const PropertyManagement = lazy(() => import("@/pages/services/landlord/PropertyManagement"));
const RentCollection = lazy(() => import("@/pages/services/landlord/RentCollection"));
const TenantSourcing = lazy(() => import("@/pages/services/landlord/TenantSourcing"));
const LegalCompliance = lazy(() => import("@/pages/services/landlord/LegalCompliance"));

// Tenant service pages
const TenantEndOfTenancy = lazy(() => import("@/pages/services/tenant/EndOfTenancy"));
const TenantRentPayment = lazy(() => import("@/pages/services/tenant/RentPayment"));
const TenantServiceAccommodation = lazy(() => import("@/pages/services/tenant/ServiceAccommodation"));
const TenantSupport = lazy(() => import("@/pages/services/tenant/TenantSupport"));
const MaintenanceRequests = lazy(() => import("@/pages/services/tenant/MaintenanceRequests"));
const PropertySearch = lazy(() => import("@/pages/services/tenant/PropertySearch"));

// Investor service pages
const FinancialPlanning = lazy(() => import("@/pages/services/investor/FinancialPlanning"));
const InvestmentManagement = lazy(() => import("@/pages/services/investor/InvestmentManagement"));
const InvestmentStrategy = lazy(() => import("@/pages/services/investor/InvestmentStrategy"));
const MarketAnalysis = lazy(() => import("@/pages/services/investor/MarketAnalysis"));
const PortfolioManagement = lazy(() => import("@/pages/services/investor/PortfolioManagement"));
const PropertyAcquisition = lazy(() => import("@/pages/services/investor/PropertyAcquisition"));

// Custom solution pages
const Security = lazy(() => import("@/pages/services/custom/Security"));
const Business = lazy(() => import("@/pages/services/custom/Business"));
const Management = lazy(() => import("@/pages/services/custom/Management"));
const Relations = lazy(() => import("@/pages/services/custom/Relations"));

// Admin components
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));
const UserManagement = lazy(() => import("@/pages/admin/UserManagement"));
const PropertyManagementAdmin = lazy(() => import("@/pages/admin/PropertyManagement"));
const BlogManagementAdmin = lazy(() => import("@/pages/admin/BlogManagement"));
const AnalyticsDashboard = lazy(() => import("@/pages/admin/AnalyticsDashboard"));
const PaymentManagement = lazy(() => import("@/pages/admin/PaymentManagement"));
const SupportTickets = lazy(() => import("@/pages/admin/SupportTickets"));
const SystemLogs = lazy(() => import("@/pages/admin/SystemLogs"));

// Support components
const SupportDashboard = lazy(() => import("@/pages/support/SupportDashboard"));
const TicketList = lazy(() => import("@/pages/support/TicketList"));
const TicketDetail = lazy(() => import("@/pages/support/TicketDetail"));
const CreateTicket = lazy(() => import("@/pages/support/CreateTicket"));

// Dashboard components
const LandlordDashboard = lazy(() => import("@/pages/LandlordDashboard"));
const TenantDashboard = lazy(() => import("@/pages/TenantDashboard"));
const AgentDashboard = lazy(() => import("@/pages/AgentDashboard"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
              <Route path="/login" element={<Login />} />

              <Route path="/properties" element={<Suspense fallback={<div>Loading properties...</div>}><PropertiesPage /></Suspense>} />
              <Route path="/properties/:id" element={<Suspense fallback={<div>Loading property details...</div>}><PropertyDetail /></Suspense>} />

              <Route path="/blogs" element={<Suspense fallback={<div>Loading blogs...</div>}><BlogsPage /></Suspense>} />
              <Route path="/blogs/:id" element={<Suspense fallback={<div>Loading blog post...</div>}><BlogDetail /></Suspense>} />

              <Route path="/about" element={<Suspense fallback={<div>Loading about page...</div>}><About /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<div>Loading contact page...</div>}><Contact /></Suspense>} />
              
              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<Suspense fallback={<div>Loading privacy policy...</div>}><PrivacyPolicy /></Suspense>} />
              <Route path="/terms-and-conditions" element={<Suspense fallback={<div>Loading terms and conditions...</div>}><TermsAndConditions /></Suspense>} />

              {/* Services Routes */}
              <Route path="/services" element={<Suspense fallback={<div>Loading services...</div>}><Services /></Suspense>} />
              <Route path="/services/landlord" element={<Suspense fallback={<div>Loading...</div>}><LandlordServices /></Suspense>} />
              <Route path="/services/tenant" element={<Suspense fallback={<div>Loading...</div>}><TenantServices /></Suspense>} />
              <Route path="/services/investor" element={<Suspense fallback={<div>Loading...</div>}><InvestorServices /></Suspense>} />
              <Route path="/services/custom" element={<Suspense fallback={<div>Loading...</div>}><CustomSolutions /></Suspense>} />

              {/* Landlord Service Sub-pages */}
              <Route path="/services/landlord/end-of-tenancy" element={<Suspense fallback={<div>Loading...</div>}><EndOfTenancy /></Suspense>} />
              <Route path="/services/landlord/maintenance" element={<Suspense fallback={<div>Loading...</div>}><Maintenance /></Suspense>} />
              <Route path="/services/landlord/property-management" element={<Suspense fallback={<div>Loading...</div>}><PropertyManagement /></Suspense>} />
              <Route path="/services/landlord/rent-collection" element={<Suspense fallback={<div>Loading...</div>}><RentCollection /></Suspense>} />
              <Route path="/services/landlord/tenant-sourcing" element={<Suspense fallback={<div>Loading...</div>}><TenantSourcing /></Suspense>} />
              <Route path="/services/landlord/legal-compliance" element={<Suspense fallback={<div>Loading...</div>}><LegalCompliance /></Suspense>} />

              {/* Tenant Service Sub-pages */}
              <Route path="/services/tenant/end-of-tenancy" element={<Suspense fallback={<div>Loading...</div>}><TenantEndOfTenancy /></Suspense>} />
              <Route path="/services/tenant/rent-payment" element={<Suspense fallback={<div>Loading...</div>}><TenantRentPayment /></Suspense>} />
              <Route path="/services/tenant/service-accommodation" element={<Suspense fallback={<div>Loading...</div>}><TenantServiceAccommodation /></Suspense>} />
              <Route path="/services/tenant/tenant-support" element={<Suspense fallback={<div>Loading...</div>}><TenantSupport /></Suspense>} />
              <Route path="/services/tenant/maintenance-requests" element={<Suspense fallback={<div>Loading...</div>}><MaintenanceRequests /></Suspense>} />
              <Route path="/services/tenant/property-search" element={<Suspense fallback={<div>Loading...</div>}><PropertySearch /></Suspense>} />

              {/* Investor Service Sub-pages */}
              <Route path="/services/investor/financial-planning" element={<Suspense fallback={<div>Loading...</div>}><FinancialPlanning /></Suspense>} />
              <Route path="/services/investor/investment-management" element={<Suspense fallback={<div>Loading...</div>}><InvestmentManagement /></Suspense>} />
              <Route path="/services/investor/investment-strategy" element={<Suspense fallback={<div>Loading...</div>}><InvestmentStrategy /></Suspense>} />
              <Route path="/services/investor/market-analysis" element={<Suspense fallback={<div>Loading...</div>}><MarketAnalysis /></Suspense>} />
              <Route path="/services/investor/portfolio-management" element={<Suspense fallback={<div>Loading...</div>}><PortfolioManagement /></Suspense>} />
              <Route path="/services/investor/property-acquisition" element={<Suspense fallback={<div>Loading...</div>}><PropertyAcquisition /></Suspense>} />

              {/* Custom Solution Sub-pages */}
              <Route path="/services/custom/security" element={<Suspense fallback={<div>Loading...</div>}><Security /></Suspense>} />
              <Route path="/services/custom/business" element={<Suspense fallback={<div>Loading...</div>}><Business /></Suspense>} />
              <Route path="/services/custom/management" element={<Suspense fallback={<div>Loading...</div>}><Management /></Suspense>} />
              <Route path="/services/custom/relations" element={<Suspense fallback={<div>Loading...</div>}><Relations /></Suspense>} />

              {/* Support System Routes */}
              <Route path="/support/*" element={<ProtectedRoute><Routes>
                <Route index element={<SupportDashboard />} />
                <Route path="tickets" element={<TicketList />} />
                <Route path="tickets/create" element={<CreateTicket />} />
                <Route path="tickets/:id" element={<TicketDetail />} />
              </Routes></ProtectedRoute>} />

              {/* Protected Routes */}
              <Route path="/landlord" element={<ProtectedRoute role="landlord"><Suspense fallback={<div>Loading dashboard...</div>}><LandlordDashboard /></Suspense></ProtectedRoute>} />
              <Route path="/tenant" element={<ProtectedRoute role="tenant"><Suspense fallback={<div>Loading dashboard...</div>}><TenantDashboard /></Suspense></ProtectedRoute>} />

              {/* Agent and Admin Routes */}
              <Route path="/agent/*" element={<ProtectedRoute role="agent"><Routes>
                <Route index element={<Suspense fallback={<div>Loading agent dashboard...</div>}><AgentDashboard /></Suspense>} />
                <Route path="properties" element={<PropertyManagementAdmin />} />
                <Route path="blogs" element={<BlogManagementAdmin />} />
                <Route path="analytics" element={<AnalyticsDashboard />} />
                <Route path="support" element={<SupportTickets />} />
              </Routes></ProtectedRoute>} />

              {/* Admin Routes */}
              <Route path="/admin/*" element={<ProtectedRoute role="admin"><Routes>
                <Route index element={<Suspense fallback={<div>Loading admin dashboard...</div>}><AdminDashboard /></Suspense>} />
                <Route path="users" element={<UserManagement />} />
                <Route path="properties" element={<PropertyManagementAdmin />} />
                <Route path="blogs" element={<BlogManagementAdmin />} />
                <Route path="analytics" element={<AnalyticsDashboard />} />
                <Route path="payments" element={<PaymentManagement />} />
                <Route path="support" element={<SupportTickets />} />
                <Route path="logs" element={<SystemLogs />} />
              </Routes></ProtectedRoute>} />
              
              {/* Temporary direct access to blog management (remove in production) */}
              <Route path="/blog-management" element={<Suspense fallback={<div>Loading blog management...</div>}>
                <BlogManagement />
              </Suspense>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </div>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
