
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ClipboardCheck, 
  Calendar, 
  Home, 
  Sparkles, 
  Key, 
  Camera, 
  Clipboard, 
  ShieldCheck,
  Clock
} from "lucide-react";

const features = [
  "Professional property inspection",
  "Deposit return assistance", 
  "Cleaning and repair guidance",
  "Documentation handling",
  "Final utility readings",
  "Key return management"
];

const benefits = [
  {
    title: "Stress-Free Process",
    description: "Our streamlined process removes the stress of ending your tenancy.",
  },
  {
    title: "Deposit Protection",
    description: "Maximize your deposit return with our detailed inspection and documentation.",
  },
  {
    title: "Time Savings",
    description: "Save time with our efficient coordination of all end-of-tenancy tasks.",
  },
  {
    title: "Prevent Disputes",
    description: "Our thorough documentation helps prevent landlord-tenant disputes.",
  },
  {
    title: "Professional Guidance",
    description: "Expert advice on property condition and necessary remediation.",
  },
  {
    title: "Peace of Mind",
    description: "Complete confidence that all aspects of your tenancy closure are handled correctly.",
  },
];

const faqItems = [
  {
    question: "What's included in your end of tenancy service?",
    answer: "Our comprehensive end of tenancy service includes a detailed pre-move-out inspection with guidance on cleaning and repairs needed, coordination of professional cleaning services if requested, thorough final property inspection with photographic documentation, comprehensive inventory check against your initial inventory report, utility reading collection and notification to providers, deposit return negotiation and assistance, key handover management, and guidance on forwarding mail arrangements. We can also arrange additional services such as moving assistance, storage solutions, and professional repairs as needed."
  },
  {
    question: "How far in advance should I schedule end of tenancy services?",
    answer: "We recommend scheduling our end of tenancy services at least 2-4 weeks before your planned move-out date. This timeline gives you sufficient opportunity to address any issues identified during the pre-move-out inspection and ensures availability of our inspection team. For peak moving periods (summer months and end of month dates), we suggest booking 4-6 weeks in advance. For special circumstances or short-notice moves, we offer expedited services subject to availability, though standard scheduling provides the best opportunity to maximize your deposit return."
  },
  {
    question: "How can I ensure I get my full deposit back?",
    answer: "To maximize your deposit return, begin with our pre-move-out inspection to identify necessary cleaning and repairs. Then thoroughly clean the property (or hire professional cleaners), paying special attention to kitchens, bathrooms, floors, and windows. Address any minor repairs like filling nail holes or replacing broken fixtures. Remove all belongings and dispose of trash properly. Document the condition with dated photos or video. Gather all keys, remotes, and access devices. Pay all outstanding utility bills. Compare the property's condition against your initial inventory report. Our team will guide you through each step and provide detailed documentation to support your deposit claim."
  },
  {
    question: "Do I need to be present for the final inspection?",
    answer: "While not mandatory, we strongly recommend you attend the final inspection. Your presence allows you to respond to any concerns raised during the inspection, provide clarification about property conditions, and sign off on the final inspection report immediately. If you cannot attend, we'll conduct the inspection on your behalf, document everything thoroughly with photographs, and provide you with a detailed report within 24 hours. In cases where you can't attend, you can designate a representative (friend or family member) to attend in your place. For complete peace of mind, our inspection service includes video documentation when tenants cannot be present."
  },
  {
    question: "What if there are disputes about the property condition?",
    answer: "If disputes arise regarding property condition, our detailed documentation serves as crucial evidence. We first attempt to resolve disagreements through direct negotiation with the landlord, presenting our comprehensive inspection reports and photographic evidence. If resolution cannot be reached, we assist with the formal dispute process through the relevant tenancy deposit scheme, preparing all necessary documentation and evidence. For more complex disputes, we can recommend specialized tenancy legal advisors. Our goal is always amicable resolution, and our thorough documentation significantly reduces the likelihood of prolonged disputes."
  }
];

const serviceComponents = [
  {
    title: "Pre-Move Out Inspection",
    description: "Professional inspection to identify potential issues before your final move-out",
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
  },
  {
    title: "Cleaning Guidance",
    description: "Expert advice on cleaning requirements to meet tenancy agreement standards",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
  {
    title: "Inventory Check",
    description: "Thorough inventory verification against your initial property inventory",
    icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Property Documentation",
    description: "Comprehensive documentation of property condition with photographs",
    icon: <Camera className="w-6 h-6 text-primary" />,
  },
];

const EndOfTenancy = () => {
  return (
    <ServicePageTemplate
      title="End of Tenancy Services"
      description="Professional support for a smooth and hassle-free end of tenancy process"
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ready to End Your Tenancy?"
      ctaText="Let us help you ensure a smooth transition with our professional end of tenancy services."
      ctaButtonText="Schedule a Service"
      ctaButtonLink="/contact"
    >
      {/* Service Components Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our End of Tenancy Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {serviceComponents.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Process Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Our End of Tenancy Process</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We've streamlined the end of tenancy process to make your move-out as smooth as possible.
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
          
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
                <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                <p className="text-gray-600">
                  Schedule an initial consultation to discuss your move-out date and requirements.
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
                      <span>Review tenancy agreement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Discuss timelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Identify special requirements</span>
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
                      <span>Identify potential issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Provide cleaning guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Recommend necessary repairs</span>
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
                <h3 className="text-xl font-semibold mb-2">Pre-Move Out Inspection</h3>
                <p className="text-gray-600">
                  We conduct a thorough pre-move out inspection to help you prepare.
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
                <h3 className="text-xl font-semibold mb-2">Final Inspection</h3>
                <p className="text-gray-600">
                  Detailed final inspection with inventory check and photographic documentation.
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
                      <span>Complete inventory check</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Document property condition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Collect utility readings</span>
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
                      <span>Manage key handover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Process deposit return</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Provide final documentation</span>
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
                <h3 className="text-xl font-semibold mb-2">Move-Out Completion</h3>
                <p className="text-gray-600">
                  We finalize all aspects of your tenancy closure including deposit return.
                </p>
              </div>
              
              <div className="md:hidden w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                4
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Additional Services */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted text-center"
          >
            <div className="mx-auto mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Cleaning</h3>
            <p className="text-gray-600">End of tenancy cleaning services to ensure property meets requirements</p>
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
                <Clipboard className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
            <p className="text-gray-600">Expert assistance with any deposit disputes or tenancy issues</p>
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
                <Home className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Moving Services</h3>
            <p className="text-gray-600">Assistance with moving logistics, packing, and transportation</p>
          </motion.div>
        </div>
      </div>
      
      {/* Guarantees Section */}
      <div className="my-20 bg-white p-8 rounded-lg shadow-md border border-muted">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Our End of Tenancy Guarantees</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We stand behind our end of tenancy services with these guarantees to ensure your complete satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Deposit Protection</h3>
              <p className="text-gray-600">Our thorough documentation and inspection process helps maximize your deposit return.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Timely Service</h3>
              <p className="text-gray-600">We guarantee on-time service delivery to meet your move-out schedule.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Key className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Smooth Handover</h3>
              <p className="text-gray-600">We ensure a hassle-free property handover process with proper documentation.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Future Reference</h3>
              <p className="text-gray-600">We provide documentation that can be used for future rental references.</p>
            </div>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default EndOfTenancy;
