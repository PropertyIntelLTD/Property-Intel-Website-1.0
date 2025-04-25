
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Wrench, 
  Clock, 
  Shield, 
  Hammer, 
  Paintbrush, 
  ThermometerSnowflake, 
  Droplets, 
  Home, 
  Users,
  BarChart,
  Calendar,
  FileText,
  PanelTop,
  Settings
} from 'lucide-react';

const features = [
  "24/7 emergency response",
  "Preventive maintenance programs",
  "Qualified and vetted contractors",
  "Regular property inspections", 
  "Detailed maintenance reporting",
  "Cost effective solutions"
];

const benefits = [
  {
    title: "Property Value Protection",
    description: "Regular maintenance prevents deterioration and maintains your property's market value.",
  },
  {
    title: "Tenant Satisfaction",
    description: "Quick resolution of maintenance issues leads to happier, longer term tenants.",
  },
  {
    title: "Reduced Long term Costs",
    description: "Preventive maintenance helps avoid expensive emergency repairs and replacements.",
  },
  {
    title: "Legal Compliance",
    description: "Our services ensure your property meets all safety and habitability requirements.",
  },
  {
    title: "Time Savings",
    description: "We handle all aspects of maintenance so you don't have to worry about it.",
  },
  {
    title: "Peace of Mind",
    description: "Know your property is being properly maintained by experienced professionals.",
  },
];

const faqItems = [
  {
    question: "What maintenance services do you provide for landlords?",
    answer: "Our comprehensive maintenance services cover everything property owners need to keep their investments in optimal condition. We provide routine preventive maintenance, emergency repairs (24/7 response), seasonal maintenance (HVAC servicing, winterization), cosmetic improvements, major renovations and upgrades, appliance repair and replacement, plumbing and electrical services, landscaping and exterior maintenance, pest control, and property inspections. All work is performed by licensed, insured professionals who are thoroughly vetted and held to strict quality standards. We can create customised maintenance plans tailored to your property's specific needs and budget."
  },
  {
    question: "How do you handle emergency maintenance situations?",
    answer: "Our emergency maintenance service operates 24/7, 365 days a year. When an emergency is reported, our dedicated emergency response team assesses the situation immediately. Depending on severity, we dispatch appropriate contractors within 1-4 hours. For critical emergencies like major flooding, gas leaks, or complete power outages, we aim for under 60-minute response times. Property owners receive immediate notification and regular updates throughout the emergency resolution process. All emergency work is documented with before and after photos, detailed reports, and clear cost breakdowns. We maintain relationships with multiple emergency service providers to ensure coverage even during widespread emergencies or natural disasters."
  },
  {
    question: "What does your preventive maintenance program include?",
    answer: "Our preventive maintenance program is designed to identify and address potential issues before they become costly problems. The program includes quarterly property inspections covering structural elements, plumbing, electrical systems, HVAC, appliances, safety features, and exterior components. We conduct seasonal HVAC system servicing, gutter cleaning, roof inspections, and weather preparation. Key systems receive regular maintenance according to manufacturer recommendations, and we perform water heater flushes, dryer vent cleaning, and smoke/CO detector testing. All preventive services are documented with detailed reports and photos, and our data driven approach allows us to identify recurrent issues and implement systematic solutions, ultimately minimising emergency incidents by up to 70%."
  },
  {
    question: "How do you select and vet maintenance contractors?",
    answer: "Our contractor selection process is rigorous and comprehensive to ensure only the most qualified professionals work on your property. Initial screening includes verification of proper licensing, insurance (liability and workers' compensation), bonding, and business credentials. We review at least 5 years of work history and check multiple references from both property managers and individual property owners. All contractors undergo background checks for all technicians entering properties. We evaluate technical certifications, workmanship through sample work inspections, and require adherence to our quality standards and code of conduct. Only contractors with above 90% satisfaction ratings in our ongoing performance reviews remain in our network. We maintain relationships with multiple service providers in each specialty to ensure availability and competitive pricing."
  },
  {
    question: "How do you determine whether to repair or replace items?",
    answer: "Our repair vs replace analysis follows a structured decision framework that balances immediate costs against long term value. When an item requires attention, we consider multiple factors: current age vs. expected lifespan, repair history (frequency and cost of previous repairs), repair cost as a percentage of replacement cost (generally, if repair exceeds 50% of replacement, we recommend replacement), energy efficiency improvements with new models, availability of parts, warranty coverage, impact on property value, tenant satisfaction, and potential for future issues. We present property owners with clear options, including cost benefit analysis for each scenario, allowing you to make informed decisions that align with your investment strategy. Our goal is to maximise your property's value while minimising unnecessary expenses."
  },
  {
    question: "How do you track and report maintenance activities?",
    answer: "Our maintenance tracking and reporting system provides complete transparency and detailed documentation of all work performed on your property. Property owners receive comprehensive reports including work order details, issue diagnosis with photos, work performed, materials used, labor hours, itemised costs, before and after photos, contractor information, warranties, and follow up recommendations. Our client portal offers 24/7 access to all historical maintenance records, scheduled maintenance activities, and real time status updates. Customisable reports allow you to analyze maintenance patterns, track expenses by category, and monitor contractor performance. All maintenance data feeds into property performance analytics, helping identify trends and optimise your maintenance strategy to reduce costs and improve property performance over time."
  }
];

const maintenanceTypes = [
  {
    title: "Emergency Repairs",
    description: "24/7 response to urgent maintenance issues to protect your property",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Routine Maintenance",
    description: "Regular upkeep and preventive maintenance to avoid major issues",
    icon: <Wrench className="w-6 h-6 text-primary" />,
  },
  {
    title: "Property Protection",
    description: "Comprehensive maintenance to preserve your property's value",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Renovations",
    description: "Property upgrades to increase value and attract quality tenants",
    icon: <Hammer className="w-6 h-6 text-primary" />,
  },
];

const keyServices = [
  {
    title: "Electrical Systems",
    description: "Complete electrical system maintenance and repairs by licensed electricians",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
        <path d="M14.5 5.5v13" />
        <path d="M9.5 5.5v13" />
        <path d="M4.5 5.5h15" />
        <path d="M6.5 9.5h11" />
        <path d="M6.5 14.5h11" />
      </svg>
    </span>
  },
  {
    title: "Plumbing",
    description: "Fast, reliable plumbing solutions from minor leaks to major repairs",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Droplets className="w-6 h-6 text-primary" />
    </span>
  },
  {
    title: "HVAC Systems",
    description: "Heating, ventilation, and air conditioning maintenance and service",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <ThermometerSnowflake className="w-6 h-6 text-primary" />
    </span>
  },
  {
    title: "Interior Finishing",
    description: "Painting, flooring, and general interior repairs and upgrades",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Paintbrush className="w-6 h-6 text-primary" />
    </span>
  },
  {
    title: "Structural Repairs",
    description: "Addressing foundation, roof, and other structural maintenance needs",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Home className="w-6 h-6 text-primary" />
    </span>
  },
  {
    title: "Property Inspections",
    description: "Regular thorough inspections to identify and address maintenance needs early",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <FileText className="w-6 h-6 text-primary" />
    </span>
  }
];

const Maintenance = () => {
  return (
    <ServicePageTemplate
      title="Maintenance & Repairs"
      description="Professional maintenance services to keep your properties in optimal condition"
      heroImage="https://images.unsplash.com/photo-1612618731516-e0d01e0b7d22"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Need Maintenance Services?"
      ctaText="Our team of professionals is ready to help maintain your property in perfect condition."
      ctaButtonText="Schedule Service"
      ctaButtonLink="/contact"
    >
      {/* Maintenance Types Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Maintenance Solutions</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {maintenanceTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {type.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Process Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Our Maintenance Process</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We've streamlined our maintenance process to ensure efficient, transparent, and effective resolution of all maintenance issues.
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline connector (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
          
          {/* Process Steps */}
          <div className="space-y-20">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-semibold mb-2">Issue Identification</h3>
                <p className="text-gray-600">
                  Maintenance needs are identified through tenant reports, regular inspections, or preventive maintenance schedules.
                </p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                  1
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-muted">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Multiple reporting channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Detailed issue documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Priority classification</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:hidden w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                1
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-muted md:mr-12">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Cost effective solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Transparent cost estimates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Owner approval process</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                  2
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <h3 className="text-xl font-semibold mb-2">Assessment & Planning</h3>
                <p className="text-gray-600">
                  Our team evaluates the issue, develops a solution, and creates a plan for efficient resolution.
                </p>
              </div>
              
              <div className="md:hidden w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                2
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
                <h3 className="text-xl font-semibold mb-2">Professional Execution</h3>
                <p className="text-gray-600">
                  Vetted contractors execute the maintenance work according to established quality standards.
                </p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                  3
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-muted">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Skilled technicians</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Quality materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Minimal tenant disruption</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:hidden w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                3
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-muted md:mr-12">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Comprehensive documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Before/after photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Satisfaction verification</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                  4
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <h3 className="text-xl font-semibold mb-2">Verification & Reporting</h3>
                <p className="text-gray-600">
                  We verify work quality, document all repairs, and provide detailed reports for your records.
                </p>
              </div>
              
              <div className="md:hidden w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                4
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Service Categories */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Service Categories</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {keyServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Analytics & Reporting */}
      <div className="my-20 bg-white p-8 rounded-lg shadow-md border border-muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Maintenance Analytics & Reporting</h2>
            <p className="text-gray-600 mb-6">
              Our detailed maintenance analytics and reporting system gives you complete visibility into your property's maintenance history and performance.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BarChart className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Cost Tracking & Analysis</h3>
                  <p className="text-sm text-gray-600">Monitor maintenance expenses by category and property</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Maintenance History</h3>
                  <p className="text-sm text-gray-600">Complete record of all maintenance activities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Detailed Documentation</h3>
                  <p className="text-sm text-gray-600">Before and after photos, invoices, warranties</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <PanelTop className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Online Dashboard</h3>
                  <p className="text-sm text-gray-600">24/7 access to maintenance information</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Settings className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Preventive Maintenance Planning</h3>
                  <p className="text-sm text-gray-600">Schedule and track preventive maintenance tasks</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-muted/20 p-6 rounded-lg border border-muted">
              <img 
                className="rounded shadow-md" 
                alt="Maintenance Dashboard" 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default Maintenance;
