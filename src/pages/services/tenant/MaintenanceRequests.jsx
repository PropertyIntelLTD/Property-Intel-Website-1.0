
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Wrench, 
  Clock, 
  MessageSquare,
  AlertTriangle,
  ClipboardList,
  Camera,
  Star,
  PhoneCall,
  Upload,
  CheckSquare,
  MessageCircle
} from 'lucide-react';

const features = [
  "24/7 emergency maintenance",
  "Online request submission",
  "Real-time status updates",
  "Photo attachment capability",
  "Priority level selection",
  "Communication tracking"
];

const benefits = [
  {
    title: "Quick Resolution",
    description: "Our streamlined system ensures maintenance issues are addressed promptly and efficiently.",
  },
  {
    title: "Convenience",
    description: "Submit and track requests anytime, from anywhere, using our user-friendly online portal.",
  },
  {
    title: "Transparency",
    description: "Get real-time updates on the status of your maintenance requests.",
  },
  {
    title: "Documentation",
    description: "Keep a complete record of all maintenance issues and their resolutions.",
  },
  {
    title: "Communication",
    description: "Direct messaging with maintenance staff for clarification and updates.",
  },
  {
    title: "Priority Handling",
    description: "Emergency issues are flagged for immediate attention and faster resolution.",
  },
];

const faqItems = [
  {
    question: "How do I submit a maintenance request?",
    answer: "You can submit a maintenance request through our online tenant portal, which is accessible 24/7 from any device with internet connection. Simply log in to your account, navigate to the 'Maintenance' section, and click on 'Submit New Request.' Fill in the required information including the issue category, description, priority level, and attach photos if helpful. Once submitted, you'll receive a confirmation email with a tracking number. For emergencies after hours, you can also call our emergency maintenance line provided in the portal."
  },
  {
    question: "What qualifies as an emergency maintenance issue?",
    answer: "Emergency maintenance issues are those that pose immediate risk to tenant safety, health, or significant property damage. These include: uncontrollable water leaks or flooding, complete loss of heat during winter months, gas leaks, complete electrical outages, broken exterior doors or windows that compromise security, sewage backups, and fire or major structural damage. Emergency requests are given highest priority and addressed immediately, including after-hours response. Please note that issues like clogged toilets (when other toilets are available), minor leaks, appliance failures, or HVAC issues in moderate weather are considered urgent but not emergencies."
  },
  {
    question: "How long will it take to resolve my maintenance request?",
    answer: "Resolution times depend on the nature and priority of the issue. Emergency issues are addressed immediately, often within 1-4 hours. Urgent but non-emergency issues (like appliance failures, HVAC issues in moderate weather) are typically resolved within 24-48 hours. Routine maintenance requests are usually completed within 3-5 business days. These timeframes may be affected by parts availability or the need for specialized contractors. You can track the status of your request in real-time through our tenant portal, which includes estimated completion times based on the assessment of your specific issue."
  },
  {
    question: "Can I track the status of my maintenance request?",
    answer: "Yes, you can track the status of your maintenance request in real-time through our tenant portal. Each request receives a unique tracking number and progresses through several stages: Submitted, Assigned, Scheduled, In Progress, and Completed. You'll receive automatic updates via email or in-app notifications when your request changes status. The portal also displays the assigned maintenance technician's name, estimated completion time, and any notes about the repair. If you need additional information, you can send a message to the maintenance team directly through the request details page."
  },
  {
    question: "Will I be charged for maintenance repairs?",
    answer: "Generally, tenants are not charged for routine maintenance or repairs resulting from normal wear and tear. However, charges may apply in cases of tenant-caused damage, misuse of property or fixtures, or requests for non-essential alterations or upgrades. If a maintenance issue is determined to be caused by tenant negligence or misuse (such as drain clogs caused by improper disposal of items, damage from unreported leaks, or broken fixtures due to misuse), the repair costs may be billed to the tenant. We provide detailed documentation, including before and after photos, in cases where tenant charges are applied."
  }
];

const requestTypes = [
  {
    title: "General Repairs",
    description: "Repairs for fixtures, appliances, and general property issues",
    icon: <Wrench className="w-6 h-6 text-primary" />,
  },
  {
    title: "Emergency Issues",
    description: "Urgent issues requiring immediate attention for safety or property protection",
    icon: <AlertTriangle className="w-6 h-6 text-primary" />,
  },
  {
    title: "Routine Maintenance",
    description: "Scheduled maintenance to prevent future problems",
    icon: <ClipboardList className="w-6 h-6 text-primary" />,
  },
  {
    title: "Cosmetic Requests",
    description: "Non-urgent improvements to enhance property appearance",
    icon: <Star className="w-6 h-6 text-primary" />,
  },
];

const MaintenanceRequests = () => {
  return (
    <ServicePageTemplate
      title="Maintenance Request System"
      description="Quick and efficient maintenance request submission and tracking"
      heroImage="https://images.unsplash.com/photo-1612618736568-d0d3888817c0"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Need Maintenance Support?"
      ctaText="Submit your maintenance request now and we'll take care of it promptly."
      ctaButtonText="Submit Request"
      ctaButtonLink="/contact"
    >
      {/* Request Types Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Maintenance Request Categories</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {requestTypes.map((type, index) => (
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
      
      {/* Process Steps Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="md:hidden">
            <div className="space-y-12">
              {/* Mobile Steps */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-muted">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Submit Request</h3>
                  <p className="text-gray-600 mb-3">Easily submit your maintenance request through our online portal.</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Upload className="w-4 h-4" />
                    <span>Upload photos of the issue</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-muted">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                  <p className="text-gray-600 mb-3">Receive prompt confirmation and estimated response time.</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Clock className="w-4 h-4" />
                    <span>Priority-based scheduling</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-muted">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Maintenance Visit</h3>
                  <p className="text-gray-600 mb-3">Professional maintenance staff addresses your issue.</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Wrench className="w-4 h-4" />
                    <span>Skilled technicians</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-muted">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Resolution & Follow-up</h3>
                  <p className="text-gray-600 mb-3">Confirm the issue is resolved to your satisfaction.</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <CheckSquare className="w-4 h-4" />
                    <span>Quality assurance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold border-4 border-white">
                    1
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-16">
                  <div className="text-right">
                    <h3 className="text-xl font-semibold mb-2">Submit Request</h3>
                    <p className="text-gray-600 mb-3">
                      Easily submit your maintenance request through our online portal with full details and urgency level.
                    </p>
                    <div className="flex items-center justify-end gap-2 text-sm text-primary">
                      <span>Upload photos of the issue</span>
                      <Camera className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-muted">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Upload className="w-5 h-5 text-primary" />
                      <span>Request Submission Features</span>
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Detailed description fields</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Photo and document uploads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Priority level selection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold border-4 border-white">
                    2
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-16">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-muted">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>Response Protocol</span>
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Automatic acknowledgment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Priority-based scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>24/7 emergency response</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                    <p className="text-gray-600 mb-3">
                      Receive prompt confirmation and estimated response time based on the priority of your issue.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <PhoneCall className="w-4 h-4" />
                      <span>Emergency contact available</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold border-4 border-white">
                    3
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-16">
                  <div className="text-right">
                    <h3 className="text-xl font-semibold mb-2">Maintenance Visit</h3>
                    <p className="text-gray-600 mb-3">
                      Professional maintenance staff addresses your issue at the scheduled time with proper tools and expertise.
                    </p>
                    <div className="flex items-center justify-end gap-2 text-sm text-primary">
                      <span>Skilled technicians</span>
                      <Wrench className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-muted">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-primary" />
                      <span>Service Excellence</span>
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Professional technicians</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Advance appointment notification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Proper tools and equipment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold border-4 border-white">
                    4
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-16">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-muted">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-primary" />
                      <span>Resolution Process</span>
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Complete repair verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Tenant satisfaction confirmation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>Digital service record</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Resolution & Follow-up</h3>
                    <p className="text-gray-600 mb-3">
                      Confirm the issue is resolved to your satisfaction and provide feedback on the service received.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <MessageCircle className="w-4 h-4" />
                      <span>Service satisfaction survey</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Communication Features */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Stay Informed Throughout the Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted text-center"
          >
            <div className="mx-auto mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Direct Messaging</h3>
            <p className="text-gray-600">Communicate directly with maintenance staff for updates and clarification</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted text-center"
          >
            <div className="mx-auto mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p className="text-gray-600">Track the status of your request with automatic notifications at each stage</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted text-center"
          >
            <div className="mx-auto mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <ClipboardList className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete History</h3>
            <p className="text-gray-600">Access your complete maintenance history with detailed documentation</p>
          </motion.div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default MaintenanceRequests;
