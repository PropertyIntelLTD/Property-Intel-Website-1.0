
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  Wallet, 
  BarChart, 
  Clock, 
  AlertTriangle, 
  FileText, 
  DollarSign,
  PieChart,
  Shield,
  Zap,
  CreditCard
} from "lucide-react";

const features = [
  "Automated rent collection",
  "Monthly financial reporting",
  "Expense tracking and management",
  "Late payment handling",
  "Financial performance analysis",
  "Tax documentation preparation",
];

const benefits = [
  {
    title: "Maximise Cash Flow",
    description: "Reduce payment delays and improve cash flow with our efficient collection system.",
  },
  {
    title: "Reduce Administration",
    description: "Save time and resources with automated payment processing and reminders.",
  },
  {
    title: "Financial Transparency",
    description: "Get complete visibility into your property's financial performance.",
  },
  {
    title: "Minimise Late Payments",
    description: "Our proven system reduces late payments by up to 60% compared to manual collection.",
  },
  {
    title: "Legal Compliance",
    description: "All financial transactions comply with relevant regulations and record keeping requirements.",
  },
  {
    title: "Tax Efficiency",
    description: "Organised financial documentation makes tax season easier and helps identify deductions.",
  },
];

const faqItems = [
  {
    question: "How does your rent collection process work?",
    answer: "Our rent collection system offers multiple payment options for tenants, including online payments, direct deposits, and traditional methods. We send automatic reminders before due dates, track all payments in real time, and provide landlords with instant notifications. For late payments, we follow a systematic approach with reminders and, if necessary, escalation according to the terms of the lease agreement."
  },
  {
    question: "What financial reports will I receive?",
    answer: "Landlords receive comprehensive monthly financial statements that include income collected, expenses paid, maintenance costs, and net operating income. Our quarterly reports provide trend analysis and property performance metrics, while annual statements offer a complete overview for tax purposes. All reports are accessible through our secure online portal."
  },
  {
    question: "How do you handle late payments?",
    answer: "Our late payment process begins with automatic reminders sent to tenants before and on the due date. If payment is not received, we follow up with additional reminders and phone calls. We enforce late fees as specified in the lease agreement and provide documentation of all communication. For persistent issues, we can initiate the legal process according to local regulations and your preferences."
  },
  {
    question: "Can I access my property's financial information online?",
    answer: "Yes, all financial information is available through our secure online portal. Landlords can access real time payment status, download financial reports, view payment histories, and track expenses at any time from any device. The portal provides a comprehensive dashboard with customisable views and reporting options."
  },
  {
    question: "What payment methods do you accept from tenants?",
    answer: "We offer multiple payment options for tenant convenience, including online bank transfers, credit/debit card payments, direct debits, and traditional checks. Our online payment portal is secure, easy to use, and available 24/7, helping to encourage timely payments."
  }
];

const services = [
  {
    title: "Rent Collection",
    description: "Automated and manual rent collection with payment tracking and reminders.",
    icon: <Wallet className="w-6 h-6 text-primary" />,
  },
  {
    title: "Financial Reporting",
    description: "Detailed monthly and annual financial reports and analysis.",
    icon: <BarChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Payment Processing",
    description: "Quick and efficient processing of rent payments and deposits.",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
];

const RentCollection = () => {
  return (
    <ServicePageTemplate
      title="Rent Collection & Financial Management"
      description="Efficient rent collection and comprehensive financial management services"
      heroImage="https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Streamline Your Rental Income"
      ctaText="Let us handle your rent collection and financial management needs while you focus on growing your property portfolio."
      ctaButtonText="Get Started Today"
      ctaButtonLink="/contact"
    >
      {/* Financial Services Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Financial Management Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Process Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Our Rent Collection Process</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Payment Reminders</h3>
              <p className="text-gray-600">
                Tenants receive automated reminders before rent is due to ensure timely payments.
                Multiple notification methods ensure tenants always stay informed.
              </p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-gray-600">
                Multiple payment methods including online transfers, direct deposits, and traditional
                checks, all processed quickly and securely.
              </p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Late Payment Management</h3>
              <p className="text-gray-600">
                Systematic follow up for late payments, including additional reminders and enforcement
                of late fees as specified in the lease agreement.
              </p>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reporting & Documentation</h3>
              <p className="text-gray-600">
                Detailed payment records and financial reports are generated automatically and accessible
                through our secure online portal.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our Financial Management</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our efficient rent collection and financial management services consistently deliver exceptional results for property owners.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-muted text-center"
          >
            <div className="text-primary text-4xl font-bold mb-2">98%</div>
            <p className="text-gray-700 font-medium">On-time payment rate</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-muted text-center"
          >
            <div className="text-primary text-4xl font-bold mb-2">24/7</div>
            <p className="text-gray-700 font-medium">Access to financial data</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-muted text-center"
          >
            <div className="text-primary text-4xl font-bold mb-2">100%</div>
            <p className="text-gray-700 font-medium">Financial transparency</p>
          </motion.div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default RentCollection;
