import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Shield, 
  FileText, 
  Scale, 
  AlertTriangle, 
  Clock, 
  Book,
  ClipboardCheck,
  Briefcase,
  Building,
  CalendarClock,
  HeartHandshake
} from 'lucide-react';

const features = [
  "Comprehensive property compliance audits",
  "HMO licensing and management",
  "Safety certification management",
  "Tenant documentation and right to rent checks",
  "Regulatory updates and implementation",
  "Compliance documentation storage"
];

const benefits = [
  {
    title: "Risk Mitigation",
    description: "Avoid costly penalties and legal issues through proactive compliance management.",
  },
  {
    title: "Peace of Mind",
    description: "Rest assured your properties meet all legal requirements and safety standards.",
  },
  {
    title: "Time Savings",
    description: "Let us handle the complex regulatory landscape so you can focus on your investment.",
  },
  {
    title: "Tenant Protection",
    description: "Demonstrate your commitment to tenant safety and legal responsibilities.",
  },
  {
    title: "Liability Reduction",
    description: "Proper compliance management reduces your exposure to potential litigation.",
  },
  {
    title: "Asset Protection",
    description: "Protect your property investment through proper regulatory adherence.",
  },
];

const faqItems = [
  {
    question: "What compliance services do you provide for landlords?",
    answer: "Our comprehensive compliance services cover all aspects of property rental regulations. We conduct thorough property compliance audits to identify any issues, manage all required safety certifications (gas, electrical, EPC, fire safety), handle HMO licensing applications and renewals, perform tenant documentation and right to rent verification, ensure deposit protection compliance, maintain proper record keeping, provide regular regulatory updates, and offer specialised compliance for specific property types such as student or corporate lettings. We also provide documentation templates, dispute resolution support, and can represent landlords in regulatory matters. All services are delivered by experienced compliance specialists who maintain current knowledge of the evolving regulatory landscape."
  },
  {
    question: "How do you stay current with changing property regulations?",
    answer: "We employ a multi layered approach to regulatory monitoring. Our dedicated compliance team includes legal specialists who track legislative changes across all relevant authorities. We maintain active memberships in professional landlord associations, participate in government consultation processes, and subscribe to specialised legal update services. Our team attends regular professional development training and regulatory briefings, and we've established direct communication channels with local housing authorities. We operate a systematic regulatory update protocol that immediately implements changes to our compliance procedures and client communications. This comprehensive approach ensures we maintain current knowledge of regulations at local, regional, and national levels, allowing us to provide timely guidance before new requirements take effect."
  },
  {
    question: "What is involved in your property compliance audit?",
    answer: "Our property compliance audit is a thorough assessment of all regulatory aspects of your rental property. The process begins with a comprehensive on site inspection by our compliance specialists, examining physical safety elements (structural integrity, fire safety measures, electrical systems, gas installations, etc.), property conditions against HHSRS standards, HMO requirements if applicable, and accessibility provisions. We review all documentation including safety certificates, tenancy agreements, deposit arrangements, licensing, and insurance policies. The audit also covers tenant communication protocols and complaint procedures. Following the inspection, you receive a detailed report identifying any compliance gaps, a prioritised action plan for addressing issues, cost estimates for necessary work, and recommended maintenance schedules. We also provide a compliance certification once all requirements are met."
  },
  {
    question: "How do you handle Houses in Multiple Occupation (HMO) licensing?",
    answer: "Our HMO licensing service is comprehensive, beginning with determining whether your property requires mandatory, additional, or selective licensing based on local authority requirements. We conduct a thorough pre application assessment to identify any necessary property modifications, prepare and submit all application documentation, liaise with the local authority throughout the process, and schedule required inspections. We also implement any conditions specified in the license, create management systems to ensure ongoing compliance with HMO regulations, and maintain a calendar for license renewals. We can handle appeals if necessary and offer advisory services for property modifications to meet licensing standards. Our team stays current on all local HMO regulations, which can vary significantly between different local authorities."
  },
  {
    question: "What safety certifications do landlords need and how do you manage them?",
    answer: "Landlords require several essential safety certifications, including Gas Safety Certificates (annual), Electrical Installation Condition Reports (EICR, every 5 years), Energy Performance Certificates (EPC, every 10 years), fire safety assessments, and carbon monoxide detector verification. Our management process includes creating a consolidated certification calendar for all your properties, selecting and scheduling qualified inspectors, ensuring proper certification format and content, maintaining secure digital records, and sending automated renewal reminders. We also handle emergency certification should circumstances require it, and we're prepared for post tenancy inspections. Our tracking system prevents certification lapses, and we provide regular compliance status reports. Additionally, we stay updated on changing certification requirements to ensure your continued compliance."
  },
  {
    question: "How do you ensure compliance with tenant deposit protection regulations?",
    answer: "Our deposit protection compliance service ensures your full adherence to all legal requirements. We register deposits with government approved schemes (either custodial or insurance based according to your preference), provide tenants with all required prescribed information within the statutory 30 day period, and issue compliant deposit receipts. We maintain comprehensive records of all deposit transactions and communications, conduct thorough property check in and check out inventories with photographic evidence, and implement fair wear and tear assessment protocols. Our team handles deposit dispute resolution according to scheme requirements, prepares evidence packages when disputes arise, and ensures timely deposit returns. We also adapt our procedures to reflect any regulatory changes in deposit protection legislation, and provide regular compliance verification so you can demonstrate adherence if ever questioned."
  }
];

const complianceAreas = [
  {
    title: "Safety Regulations",
    description: "Ensuring properties meet all safety standards including gas, electrical, and fire safety",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Licensing & Permits",
    description: "Managing HMO licensing and other required property permits",
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
  {
    title: "Tenant Rights",
    description: "Ensuring compliance with all tenant protection regulations",
    icon: <HeartHandshake className="w-6 h-6 text-primary" />,
  },
  {
    title: "Legal Documentation",
    description: "Proper management of all required legal paperwork and records",
    icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
  },
];

const keyServices = [
  {
    title: "Compliance Audits",
    description: "Thorough property assessments to identify and address compliance issues",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <ClipboardCheck className="w-6 h-6 text-primary" />
    </span>
  },
  {
    title: "Safety Certifications",
    description: "Management of all required property safety certificates and inspections",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Shield className="w-6 h-6 text-primary" />
    </span>
  },
  {
    title: "HMO Licensing",
    description: "Complete handling of HMO license applications, renewals and compliance",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Building className="w-6 h-6 text-primary" />
    </span>
  },
  {
    title: "Tenant Verification",
    description: "Right to rent checks and proper tenant documentation",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Briefcase className="w-6 h-6 text-primary" />
    </span>
  },
  {
    title: "Regulatory Updates",
    description: "Keeping you informed of changing regulations affecting your properties",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Book className="w-6 h-6 text-primary" />
    </span>
  },
  {
    title: "Compliance Calendar",
    description: "Proactive management of certification renewal dates and deadlines",
    icon: <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <CalendarClock className="w-6 h-6 text-primary" />
    </span>
  }
];

const LegalCompliance = () => {
  return (
    <ServicePageTemplate
      title="Legal Compliance"
      description="Comprehensive compliance management to protect your property investment"
      heroImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ensure Your Properties Are Fully Compliant"
      ctaText="Let our experts handle the complexities of property compliance so you don't have to."
      ctaButtonText="Get Compliance Support"
      ctaButtonLink="/contact"
    >
      {/* Compliance Areas Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Compliance Areas We Manage</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {complianceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {area.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Compliance Process Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Our Compliance Process</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We take a systematic approach to ensuring your properties meet all legal requirements.
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
                <h3 className="text-xl font-semibold mb-2">Initial Compliance Audit</h3>
                <p className="text-gray-600">
                  Thorough assessment of your property against all current regulatory requirements.
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
                      <span>Physical property inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Documentation review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Gap analysis report</span>
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
                      <span>Prioritised compliance actions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Cost effective solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Implementation timeline</span>
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
                <h3 className="text-xl font-semibold mb-2">Compliance Action Plan</h3>
                <p className="text-gray-600">
                  Development of a strategic plan to address any compliance issues identified.
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
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600">
                  Managing certifications, inspections, licensing, and required modifications.
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
                      <span>Contractor coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Documentation processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Authority liaison</span>
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
                      <span>Regular compliance updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Renewal management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Documentation storage</span>
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
                <h3 className="text-xl font-semibold mb-2">Ongoing Compliance Management</h3>
                <p className="text-gray-600">
                  Continuous monitoring and management of all compliance requirements and deadlines.
                </p>
              </div>
              
              <div className="md:hidden w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                4
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Compliance Services</h2>
        
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
      
      {/* Compliance Dashboard */}
      <div className="my-20 bg-white p-8 rounded-lg shadow-md border border-muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Compliance Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Our proprietary compliance dashboard gives you complete visibility into your property's compliance status.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Compliance Score</h3>
                  <p className="text-sm text-gray-600">Track your property's overall compliance rating</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Certification Calendar</h3>
                  <p className="text-sm text-gray-600">Visual timeline of upcoming certification renewals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Document Repository</h3>
                  <p className="text-sm text-gray-600">Secure storage for all compliance documentation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Risk Alerts</h3>
                  <p className="text-sm text-gray-600">Proactive notifications of compliance issues</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Book className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Regulatory Updates</h3>
                  <p className="text-sm text-gray-600">Latest information on changing requirements</p>
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
                alt="Compliance Dashboard" 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-lg px-4 py-2 shadow-lg">
              <span className="font-semibold">Real-time monitoring</span>
            </div>
          </motion.div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default LegalCompliance;