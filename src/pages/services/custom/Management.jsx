import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  ClipboardList, 
  BarChart2, 
  BarChart3,
  Users, 
  Briefcase, 
  Home,
  Workflow,
  Calendar,
  MessageSquare,
  HelpCircle,
  User,
  Building
} from "lucide-react";

const features = [
  "Custom property management workflows",
  "Tenant relationship management",
  "Integrated maintenance coordination",
  "Comprehensive financial oversight",
  "Performance analytics and reporting",
  "Team collaboration and task management"
];

const benefits = [
  {
    title: "Streamlined Operations",
    description: "Optimize your management processes to reduce overhead and administrative burden.",
  },
  {
    title: "Enhanced Tenant Satisfaction",
    description: "Improve tenant experience through responsive and efficient property management.",
  },
  {
    title: "Financial Clarity",
    description: "Gain better visibility into property financials with detailed reporting and analysis.",
  },
  {
    title: "Improved Communication",
    description: "Facilitate better communication between staff, vendors, and tenants.",
  },
  {
    title: "Risk Reduction",
    description: "Minimize risks with standardized processes and comprehensive documentation.",
  },
  {
    title: "Data-Driven Decisions",
    description: "Make informed management decisions based on real-time performance metrics.",
  },
];

const faqItems = [
  {
    question: "How customizable are your management solutions?",
    answer: "Our management solutions are entirely customizable to meet the specific needs of your property portfolio. We start with a thorough assessment of your current management processes, challenges, and goals. From there, we develop tailored workflows, reporting structures, and system configurations. You can choose from various modules including tenant management, maintenance coordination, financial oversight, and more. We also offer ongoing customization options as your business evolves, ensuring the solution continues to meet your changing needs."
  },
  {
    question: "Can your management system integrate with our existing software?",
    answer: "Yes, our management system is designed with integration capabilities at its core. We support direct integrations with major property management software, accounting platforms, CRM systems, maintenance management tools, and payment processors. For specialized or legacy systems, we develop custom API connectors. Our integration approach ensures data flows seamlessly between systems, eliminating manual data entry and providing a unified view of your operations while allowing you to preserve your investment in existing software."
  },
  {
    question: "How does your system handle maintenance requests?",
    answer: "Our maintenance management module offers a comprehensive solution for the entire maintenance lifecycle. Tenants can submit requests through a user-friendly portal with photo/video attachments. Requests are automatically routed based on priority, property, and type. Property managers can assign work to internal teams or external vendors, who receive notifications with detailed information. The system tracks progress, sends status updates to tenants, manages vendor communications, and maintains a complete audit trail of all activities, including final tenant satisfaction ratings."
  },
  {
    question: "What kind of reporting capabilities are included?",
    answer: "Our reporting system features both standard and customizable reports covering all aspects of property management. You'll have access to financial reporting (revenue, expenses, NOI by property/portfolio), occupancy analytics, maintenance performance metrics, tenant satisfaction scores, and lease expiration forecasting. Reports can be scheduled for automatic distribution to stakeholders, exported in multiple formats, and visualized through interactive dashboards. Additionally, our analytics engine can identify trends and provide predictive insights to help guide strategic decisions."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation timelines vary based on the complexity of your portfolio and the extent of customization required. For standard implementations, the process typically takes 4-8 weeks from initial assessment to full deployment. We follow a phased approach that includes system configuration, data migration, integration setup, testing, and staff training. Throughout the process, a dedicated implementation manager coordinates all activities and provides regular progress updates. We also offer an expedited implementation option for clients with urgent needs, which can reduce the timeline to 2-4 weeks for core functionality."
  }
];

const managementFeatures = [
  {
    title: "Process Automation",
    description: "Streamline workflows and automate routine tasks across your organization",
    icon: <Workflow className="w-6 h-6 text-primary" />,
  },
  {
    title: "Tenant Management",
    description: "Comprehensive tools for managing tenant relationships and communications",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Maintenance Coordination",
    description: "Efficient system for handling maintenance requests and vendor management",
    icon: <ClipboardList className="w-6 h-6 text-primary" />,
  },
  {
    title: "Financial Management",
    description: "Detailed financial tracking, reporting, and analysis for property performance",
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
  },
];

const managementApproach = [
  {
    title: "Assessment & Strategy",
    description: "We analyze your current management processes and develop a tailored optimization strategy",
    icon: <BarChart3 className="w-6 h-6 text-primary" />
  },
  {
    title: "Implementation",
    description: "Our experts implement customized solutions with minimal disruption to your operations",
    icon: <Building className="w-6 h-6 text-primary" />
  },
  {
    title: "Training & Adoption",
    description: "Comprehensive training ensures your team fully leverages all system capabilities",
    icon: <User className="w-6 h-6 text-primary" />
  },
  {
    title: "Ongoing Support",
    description: "Dedicated support and continuous optimization to enhance your management practices",
    icon: <HelpCircle className="w-6 h-6 text-primary" />
  }
];

const Management = () => {
  return (
    <ServicePageTemplate
      title="Custom Management Solutions"
      description="Tailored property management systems and processes designed for your specific portfolio needs"
      heroImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Optimize Your Property Management"
      ctaText="Let's discuss how our custom management solutions can help you streamline operations and maximize efficiency."
      ctaButtonText="Schedule a Consultation"
      ctaButtonLink="/contact"
    >
      {/* Management Features Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Management Features</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {managementFeatures.map((feature, index) => (
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
      
      {/* Our Approach Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Our Management Approach</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We deliver tailored management solutions through a systematic, collaborative process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {managementApproach.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={step.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Key Management Components */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Management Components</h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Task Management */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Task Management</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive task tracking and assignment system for property management teams.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Automated task assignment based on role and priority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Progress tracking with real-time status updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Calendar integration with reminders and notifications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Communication Hub */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Communication Hub</h3>
                  <p className="text-gray-600 mb-4">
                    Centralized communication platform for tenants, owners, staff, and vendors.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Multi-channel messaging (email, SMS, portal notifications)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Automated updates for critical property events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Complete communication history for every property</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Property Performance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Property Performance</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed analytics and reporting on individual property performance.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Financial performance metrics and KPI tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Maintenance cost analysis and benchmarking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Occupancy and tenant turnover reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Portfolio Oversight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Portfolio Oversight</h3>
                  <p className="text-gray-600 mb-4">
                    Holistic view of your entire property portfolio with executive dashboards.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Cross-property performance comparisons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Resource allocation optimization across properties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Strategic planning tools for portfolio growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Implementation Process */}
      <div className="my-20 bg-white p-8 rounded-lg border border-muted shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-6">Management Implementation Timeline</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our structured approach ensures smooth transition to your new management system.
        </p>
        
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>
          
          {/* Week 1-2 */}
          <div className="relative flex items-center mb-12">
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
              <h3 className="text-lg font-semibold text-primary mb-1">Weeks 1-2</h3>
              <h4 className="font-medium mb-2">Assessment & Planning</h4>
              <p className="text-sm text-gray-600">
                Analyze current processes, define requirements, and create implementation roadmap
              </p>
            </div>
          </div>
          
          {/* Week 3-4 */}
          <div className="relative flex items-center mb-12">
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
            <div className="ml-12 md:ml-auto md:w-1/2 md:pl-16 md:text-left">
              <h3 className="text-lg font-semibold text-primary mb-1">Weeks 3-4</h3>
              <h4 className="font-medium mb-2">System Configuration</h4>
              <p className="text-sm text-gray-600">
                Configure platform settings, customize workflows, and set up integration points
              </p>
            </div>
          </div>
          
          {/* Week 5-6 */}
          <div className="relative flex items-center mb-12">
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
              <h3 className="text-lg font-semibold text-primary mb-1">Weeks 5-6</h3>
              <h4 className="font-medium mb-2">Data Migration & Testing</h4>
              <p className="text-sm text-gray-600">
                Migrate historical data, perform integration testing, and validate system functionality
              </p>
            </div>
          </div>
          
          {/* Week 7-8 */}
          <div className="relative flex items-center">
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
            <div className="ml-12 md:ml-auto md:w-1/2 md:pl-16 md:text-left">
              <h3 className="text-lg font-semibold text-primary mb-1">Weeks 7-8</h3>
              <h4 className="font-medium mb-2">Training & Go-Live</h4>
              <p className="text-sm text-gray-600">
                Conduct staff training, perform final system checks, and transition to the new management platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default Management;