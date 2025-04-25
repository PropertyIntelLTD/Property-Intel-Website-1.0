
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  BarChart, 
  FileText, 
  Settings, 
  Layers, 
  Repeat, 
  Database, 
  Users,
  Workflow,
  Zap,
  Smartphone,
  LineChart,
  PanelRight
} from "lucide-react";

const features = [
  "Seamless integration with existing business systems",
  "Comprehensive reporting and analytics",
  "Digital document management",
  "Process automation for increased efficiency",
  "Centralized data management",
  "Custom workflow development"
];

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Automate routine tasks and streamline processes to save time and resources.",
  },
  {
    title: "Enhanced Decision Making",
    description: "Access real-time analytics and reports for data-driven business decisions.",
  },
  {
    title: "Reduced Operational Costs",
    description: "Minimize manual work, paperwork, and administrative overhead.",
  },
  {
    title: "Improved Tenant Experience",
    description: "Provide better service with faster responses and digital self-service options.",
  },
  {
    title: "Centralized Information",
    description: "Access all critical business data from a single, integrated platform.",
  },
  {
    title: "Scalable Operations",
    description: "Easily scale your property management operations as your portfolio grows.",
  },
];

const faqItems = [
  {
    question: "How do your business solutions integrate with our existing systems?",
    answer: "Our integration approach uses both API connectivity and custom middleware solutions to connect with your existing business systems. We support standard integrations with major property management software, accounting platforms (QuickBooks, Xero, Sage), CRM systems, and maintenance management tools. For custom or legacy systems, we develop tailored connectors that ensure seamless data flow while maintaining the integrity of your existing workflows and minimizing disruption during implementation."
  },
  {
    question: "What kind of reporting capabilities do your solutions offer?",
    answer: "Our reporting suite includes both pre-configured and custom reports covering operational, financial, and performance metrics. You'll have access to real-time dashboards with key performance indicators, detailed financial analysis including cash flow and profitability by property, tenant activity reports, maintenance tracking, and occupancy trends. All reports can be scheduled for automatic distribution, exported in multiple formats (PDF, Excel, CSV), and include visualization tools for easier interpretation of complex data."
  },
  {
    question: "How secure is your document management system?",
    answer: "Our document management system employs bank-level security measures including 256-bit encryption for all stored documents, role-based access controls, multi-factor authentication, and comprehensive audit trails that track all document activities. We maintain SOC 2 compliance, regular security audits, and encrypted transmission protocols. The system also supports automated retention policies, version control, and disaster recovery capabilities with redundant storage across multiple secure data centers."
  },
  {
    question: "Can your system handle the specific workflow needs of our property management business?",
    answer: "Yes, our platform is designed to be highly configurable to match your specific business processes. We start with industry best-practice templates for common property management workflows (tenant onboarding, maintenance requests, lease renewals, etc.) and then customize them to your exact requirements. Our system includes a visual workflow designer that allows for ongoing adjustments without programming knowledge, conditional logic capabilities, automated approval chains, and integration triggers that connect to your other business systems."
  },
  {
    question: "What is the implementation process like, and how long does it typically take?",
    answer: "Our implementation follows a structured methodology beginning with a thorough needs assessment and process mapping phase. For standard implementations, the timeline typically ranges from 4-8 weeks depending on complexity and integration requirements. The process includes configuration, data migration, integration setup, testing, and training phases. We assign a dedicated implementation manager to oversee the entire process, and we utilize a phased rollout approach to minimize business disruption, with comprehensive training and support available throughout the transition."
  }
];

const businessFeatures = [
  {
    title: "System Integration",
    description: "Seamless integration with your existing business systems and workflows",
    icon: <Layers className="w-6 h-6 text-primary" />,
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive reporting and analytics for business insights",
    icon: <BarChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Document Management",
    description: "Digital document handling and automated processing",
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
  {
    title: "Process Automation",
    description: "Streamlined operations through automated business processes",
    icon: <Settings className="w-6 h-6 text-primary" />,
  },
];

const platformModules = [
  {
    title: "Workflow Engine",
    description: "Custom workflow design and automation for your specific business processes",
    icon: <Workflow className="w-6 h-6 text-primary" />
  },
  {
    title: "Data Integration",
    description: "Connect disparate systems to create a unified business platform",
    icon: <Database className="w-6 h-6 text-primary" />
  },
  {
    title: "Mobile Access",
    description: "Fully responsive design with dedicated mobile apps for field staff",
    icon: <Smartphone className="w-6 h-6 text-primary" />
  },
  {
    title: "Business Intelligence",
    description: "Advanced analytics and customizable reporting dashboards",
    icon: <LineChart className="w-6 h-6 text-primary" />
  }
];

const Business = () => {
  return (
    <ServicePageTemplate
      title="Business Integration Solutions"
      description="Streamline your property management operations with our comprehensive business integration solutions"
      heroImage="https://images.unsplash.com/photo-1542744173-05336fcc7ad4"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ready to Integrate?"
      ctaText="Let's discuss how we can integrate our solutions with your business processes to maximize efficiency and productivity."
      ctaButtonText="Contact Us Today"
      ctaButtonLink="/contact"
    >
      {/* Business Features Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Business Solutions</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {businessFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Platform Modules Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Key Platform Modules</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our modular platform can be tailored to meet your specific business requirements.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platformModules.map((module, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={module.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {module.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Integration Process */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Integration Process</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">
                  We analyze your current business processes and systems to identify integration
                  opportunities and potential efficiency gains.
                </p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                  1
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12"></div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0"></div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                  2
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-xl font-semibold mb-2">Solution Design</h3>
                <p className="text-gray-600">
                  Our experts design a customized integration solution that addresses your
                  specific business requirements and objectives.
                </p>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600">
                  We implement the solution with minimal disruption to your ongoing
                  operations, ensuring a smooth transition.
                </p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                  3
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12"></div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0"></div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                  4
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-xl font-semibold mb-2">Optimization & Support</h3>
                <p className="text-gray-600">
                  We provide ongoing optimization and support to ensure your integrated
                  systems continue to deliver maximum value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Success Metrics Section */}
      <div className="my-20 bg-white p-8 rounded-lg border border-muted shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-6">Business Integration Success</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our business integration solutions have delivered measurable results for property management companies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">30%</div>
            <p className="text-gray-700">Average increase in operational efficiency</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <PanelRight className="h-8 w-8 text-primary" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">85%</div>
            <p className="text-gray-700">Reduction in manual data entry</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Repeat className="h-8 w-8 text-primary" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">40%</div>
            <p className="text-gray-700">Faster response to tenant requests</p>
          </motion.div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default Business;
