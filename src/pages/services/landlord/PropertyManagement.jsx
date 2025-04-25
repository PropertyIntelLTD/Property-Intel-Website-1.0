
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { Building, Coins, Clock, ShieldCheck, HeartHandshake, LineChart, CheckCircle } from "lucide-react";

const features = [
  "Tenant screening and placement",
  "Rent collection and financial reporting",
  "Property maintenance coordination",
  "24/7 emergency response",
  "Regular property inspections",
  "Legal compliance management",
];

const benefits = [
  {
    title: "Maximise Returns",
    description: "Optimise rental income and reduce expenses through professional management.",
  },
  {
    title: "Save Time",
    description: "Focus on what matters while we handle day to day property operations.",
  },
  {
    title: "Reduce Stress",
    description: "Peace of mind knowing your property is in expert hands.",
  },
  {
    title: "Expert Compliance",
    description: "Stay up to date with changing property laws and regulations.",
  },
  {
    title: "Transparent Reporting",
    description: "Receive detailed financial reports and property performance metrics.",
  },
  {
    title: "Quality Tenants",
    description: "Rigorous tenant screening process to find reliable, long term renters.",
  },
];

const faqItems = [
  {
    question: "What services are included in your property management package?",
    answer: "Our comprehensive property management service includes tenant screening and placement, rent collection, maintenance coordination, regular inspections, financial reporting, and legal compliance management. We handle every aspect of your property's day to day operations."
  },
  {
    question: "How do you screen potential tenants?",
    answer: "We conduct a thorough screening process that includes credit checks, employment verification, income verification, rental history, criminal background checks, and personal references. This comprehensive approach helps us select reliable, financially stable tenants for your property."
  },
  {
    question: "How often will I receive financial reports?",
    answer: "You'll receive detailed monthly financial statements showing rent collections, expenses, and net income. Additionally, we provide annual summaries for tax purposes and can generate custom reports upon request."
  },
  {
    question: "How do you handle maintenance requests?",
    answer: "We have a 24/7 maintenance request system where tenants can report issues. Our team assesses each request, handles emergency situations immediately, and coordinates with trusted contractors for repairs. We seek your approval for any expenses above a predetermined limit."
  },
  {
    question: "What are your management fees?",
    answer: "Our management fees typically range from 5-10% of the monthly rental income, depending on the property size and service level required. Our dynamic pricing ensures you never overpay for services you arent using. We also offer customised packages for property owners with multiple properties. Contact us for a detailed quote tailored to your needs."
  }
];

const PropertyManagement = () => {
  return (
    <ServicePageTemplate
      title="Property Management"
      description="Professional property management services to maximise your investment's potential"
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ready to Maximise Your Property's Potential?"
      ctaText="Let our expert property managers handle everything while you enjoy passive income from your investment."
      ctaButtonText="Get Started Today"
      ctaButtonLink="/contact"
    >
      {/* Additional Content Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">How Our Property Management Works</h2>
        
        <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Initial Property Assessment</h3>
              <p className="text-gray-600">
                We begin with a thorough evaluation of your property, determining its current condition, 
                market value, and rental potential. Our team will identify any necessary repairs or improvements 
                that could increase your property's value and rental income.
              </p>
            </div>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Marketing and Tenant Acquisition</h3>
              <p className="text-gray-600">
                We create professional listings with high quality photography and detailed descriptions, 
                then market your property across multiple platforms to attract quality tenants. Our rigorous 
                screening process ensures we find reliable, responsible tenants who will care for your property.
              </p>
            </div>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Management and Maintenance</h3>
              <p className="text-gray-600">
                Once tenants are placed, we handle all aspects of property management, from rent collection 
                to maintenance coordination. Our team conducts regular inspections, addresses tenant concerns 
                promptly, and ensures your property remains in excellent condition throughout the tenancy.
              </p>
            </div>
          </motion.div>
          
          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">4</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Financial Reporting and Optimization</h3>
              <p className="text-gray-600">
                You'll receive detailed monthly financial reports showing your property's performance. 
                Our team continuously analyzes market trends and looks for opportunities to optimise your 
                rental income and reduce expenses, maximising your return on investment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-muted/30 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-muted relative"
          >
            <div className="text-primary text-6xl font-serif absolute -top-5 -left-2">"</div>
            <p className="text-gray-700 mb-6 mt-4 relative z-10">
              Since working with Property Intel, my rental income has increased by 15% while my time investment has decreased to almost zero. Their team handles everything, and I couldn't be happier with the service.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">JD</div>
              <div className="ml-4">
                <h4 className="font-semibold">James Davidson</h4>
                <p className="text-sm text-gray-600">Property Owner</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-muted relative"
          >
            <div className="text-primary text-6xl font-serif absolute -top-5 -left-2">"</div>
            <p className="text-gray-700 mb-6 mt-4 relative z-10">
              The Property Intel team are managing my portfolio of 5 properties, their attention to detail, proactive communication, and financial transparency have made them an invaluable partner.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">SR</div>
              <div className="ml-4">
                <h4 className="font-semibold">Sarah Reynolds</h4>
                <p className="text-sm text-gray-600">Investment Property Owner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default PropertyManagement;
