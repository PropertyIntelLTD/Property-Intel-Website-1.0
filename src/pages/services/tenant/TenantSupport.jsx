
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  Headphones, 
  MessageSquare, 
  Clock, 
  Shield, 
  LifeBuoy, 
  Lightbulb, 
  FileQuestion, 
  Wrench, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle,
  HeartHandshake
} from 'lucide-react';

const features = [
  "24/7 emergency assistance",
  "Multiple communication channels",
  "Fast response to support requests",
  "Tenant rights guidance",
  "Housing advice and assistance",
  "Issue resolution tracking"
];

const benefits = [
  {
    title: "Peace of Mind",
    description: "Know that professional support is always available when you need it.",
  },
  {
    title: "Problem Resolution",
    description: "Quick resolution of maintenance issues and tenancy concerns.",
  },
  {
    title: "Clear Communication",
    description: "Direct and transparent communication with property management.",
  },
  {
    title: "Tenancy Protection",
    description: "Guidance on rights and responsibilities to protect your tenancy.",
  },
  {
    title: "Comfortable Living",
    description: "Support services that ensure a comfortable and stress-free living experience.",
  },
  {
    title: "Community Connection",
    description: "Access to resources, information, and local community connections.",
  },
];

const faqItems = [
  {
    question: "What support services are available to tenants?",
    answer: "Our comprehensive tenant support services include 24/7 emergency assistance, maintenance request management, tenancy advice and guidance, dispute resolution, community resources and referrals, neighborhood information, lease renewal support, move-in/move-out assistance, utility connection help, and online tenant portal technical support. All services are available through multiple channels including phone, email, online chat, and our tenant portal, with priority handling for urgent matters. Our dedicated tenant success team is trained to address diverse tenant needs and ensure your rental experience is positive and hassle-free."
  },
  {
    question: "How quickly can I expect a response to my support request?",
    answer: "Our response times vary based on the nature and urgency of your request. Emergency issues (those affecting health, safety, or property integrity) receive immediate attention, with initial response typically within 30 minutes and on-site assistance dispatched as needed. Urgent but non-emergency matters (significant inconveniences like appliance failures) receive responses within 2-4 hours during business hours. Routine inquiries and requests are addressed within 24 business hours. All requests submitted through our tenant portal receive automatic confirmation, and you can track the status of your request in real-time. We also provide estimated resolution timeframes when we respond to your initial request."
  },
  {
    question: "What should I do in case of a property emergency?",
    answer: "In case of a property emergency, your safety is the priority. For life-threatening emergencies, always call emergency services (911) first. For property emergencies like major water leaks, gas leaks, electrical failures, or security breaches, contact our 24/7 emergency hotline at the number provided in your tenant welcome package and posted in the tenant portal. Our emergency response team will provide immediate guidance and dispatch appropriate assistance. While waiting for help, take reasonable safety measures if it's safe to do so (e.g., turning off water main for flooding). Document the emergency with photos when possible, and follow up with a formal report through the tenant portal once the immediate situation is addressed."
  },
  {
    question: "How do I submit a maintenance request?",
    answer: "Submitting a maintenance request is simple through our user-friendly tenant portal. After logging in, navigate to 'Maintenance Requests' and click 'Submit New Request.' Complete the form with details about the issue, including the location, description, and priority level. You can upload photos or videos to help illustrate the problem. For urgent issues, you can mark the request as high priority. Once submitted, you'll receive a confirmation email with a tracking number and estimated response time. If you cannot access the portal, alternative submission methods include calling our maintenance line, emailing our support team, or using our mobile app. For emergency maintenance issues, please call our emergency hotline rather than using the online submission form."
  },
  {
    question: "What tenant resources do you provide?",
    answer: "We provide a wealth of resources to support you throughout your tenancy. Our tenant welcome package includes essential information about your property, local amenities, and important contacts. Our online resource library contains guides on tenant rights, property maintenance tips, energy-saving advice, and community information. We offer regular workshops and webinars on topics like renter's insurance, financial planning, and home maintenance. Our community bulletin board connects tenants with local services, events, and opportunities. For specific needs, we maintain partnerships with local service providers offering discounted rates to our tenants. Additionally, our tenant support team can provide personalized referrals to legal resources, financial assistance programs, and community support services when needed."
  }
];

const supportServices = [
  {
    title: "24/7 Emergency Support",
    description: "Round-the-clock assistance for urgent property issues and emergencies",
    icon: <Headphones className="w-6 h-6 text-primary" />,
  },
  {
    title: "Maintenance Assistance",
    description: "Help with maintenance requests, tracking, and follow-up",
    icon: <Wrench className="w-6 h-6 text-primary" />,
  },
  {
    title: "Tenancy Guidance",
    description: "Advice on lease terms, rights, and responsibilities as a tenant",
    icon: <FileQuestion className="w-6 h-6 text-primary" />,
  },
  {
    title: "Community Resources",
    description: "Access to local resources, amenities, and community information",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
  },
];

const contactChannels = [
  {
    title: "Phone Support",
    description: "Speak directly with our support team for immediate assistance",
    icon: <Phone className="w-6 h-6 text-primary" />,
    hours: "Mon-Fri: 8am-8pm, Sat: 9am-5pm",
    contact: "(555) 123-4567",
  },
  {
    title: "Email Support",
    description: "Send detailed inquiries and receive written responses",
    icon: <Mail className="w-6 h-6 text-primary" />,
    hours: "Responses within 24 hours",
    contact: "support@propertyname.com",
  },
  {
    title: "Live Chat",
    description: "Real-time chat support through our website and tenant portal",
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    hours: "Mon-Fri: 9am-6pm",
    contact: "Available on website",
  },
  {
    title: "Emergency Line",
    description: "24/7 dedicated line for urgent property emergencies",
    icon: <LifeBuoy className="w-6 h-6 text-primary" />,
    hours: "24/7/365",
    contact: "(555) 987-6543",
  },
];

const TenantSupport = () => {
  return (
    <ServicePageTemplate
      title="Tenant Support Services"
      description="Comprehensive support services to ensure a comfortable living experience"
      heroImage="https://images.unsplash.com/photo-1573497620053-ea5300f94f21"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Need Assistance?"
      ctaText="Our support team is here to help. Contact us for any questions or concerns."
      ctaButtonText="Contact Support"
      ctaButtonLink="/contact"
    >
      {/* Support Services Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Support Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {supportServices.map((service, index) => (
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
      
      {/* Communication Channels Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Communication Channels</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Multiple ways to reach our support team when you need assistance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-muted"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="mt-auto">
                  <div className="text-sm text-primary font-medium">{channel.hours}</div>
                  <div className="text-sm font-semibold mt-1">{channel.contact}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Support Process */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Support Process</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold border-4 border-white">
                    1
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                      1
                    </div>
                    <h3 className="text-xl font-semibold">Contact Support</h3>
                  </div>
                  <h3 className="hidden md:block text-xl font-semibold mb-2">Contact Support</h3>
                  <p className="text-gray-600">
                    Reach out through your preferred communication channel with your inquiry or issue.
                  </p>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-muted">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <span className="font-medium">Multiple contact options:</span>
                    </div>
                    <ul className="space-y-2 ml-8">
                      <li className="list-disc text-gray-600">Phone support</li>
                      <li className="list-disc text-gray-600">Email inquiries</li>
                      <li className="list-disc text-gray-600">Live chat assistance</li>
                      <li className="list-disc text-gray-600">Tenant portal submission</li>
                    </ul>
                  </div>
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
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold border-4 border-white">
                    2
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 order-1 md:order-none">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-muted md:ml-auto">
                    <div className="flex md:flex-row-reverse items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium">Response timeframes:</span>
                    </div>
                    <ul className="space-y-2 md:ml-0 ml-8">
                      <li className="md:text-right list-disc text-gray-600">Emergencies: Within 30 minutes</li>
                      <li className="md:text-right list-disc text-gray-600">Urgent matters: 2-4 hours</li>
                      <li className="md:text-right list-disc text-gray-600">General inquiries: 24 hours</li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-first md:order-1">
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                      2
                    </div>
                    <h3 className="text-xl font-semibold">Quick Response</h3>
                  </div>
                  <h3 className="hidden md:block text-xl font-semibold mb-2">Quick Response</h3>
                  <p className="text-gray-600">
                    Our team reviews and responds to your request based on priority and type of issue.
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
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold border-4 border-white">
                    3
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                      3
                    </div>
                    <h3 className="text-xl font-semibold">Issue Resolution</h3>
                  </div>
                  <h3 className="hidden md:block text-xl font-semibold mb-2">Issue Resolution</h3>
                  <p className="text-gray-600">
                    We work with you to understand and resolve your issue or answer your inquiry.
                  </p>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-muted">
                    <div className="flex items-center gap-3 mb-3">
                      <HeartHandshake className="w-5 h-5 text-primary" />
                      <span className="font-medium">Resolution approach:</span>
                    </div>
                    <ul className="space-y-2 ml-8">
                      <li className="list-disc text-gray-600">Personalized attention</li>
                      <li className="list-disc text-gray-600">Clear communication</li>
                      <li className="list-disc text-gray-600">Expert guidance</li>
                      <li className="list-disc text-gray-600">Resource coordination</li>
                    </ul>
                  </div>
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
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold border-4 border-white">
                    4
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 order-1 md:order-none">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-muted md:ml-auto">
                    <div className="flex md:flex-row-reverse items-center gap-3 mb-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-medium">Follow-up process:</span>
                    </div>
                    <ul className="space-y-2 md:ml-0 ml-8">
                      <li className="md:text-right list-disc text-gray-600">Satisfaction verification</li>
                      <li className="md:text-right list-disc text-gray-600">Resolution documentation</li>
                      <li className="md:text-right list-disc text-gray-600">Feedback collection</li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-first md:order-1">
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                      4
                    </div>
                    <h3 className="text-xl font-semibold">Follow-up & Confirmation</h3>
                  </div>
                  <h3 className="hidden md:block text-xl font-semibold mb-2">Follow-up & Confirmation</h3>
                  <p className="text-gray-600">
                    We ensure your issue is fully resolved and follow up to confirm your satisfaction.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Support Guarantee */}
      <div className="my-20 bg-white p-8 rounded-lg shadow-md border border-muted">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Tenant Support Guarantee</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional support to all our tenants. Our service guarantee ensures you'll always receive:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Responsive Service</h3>
            <p className="text-gray-600">Guaranteed response times for all inquiries and issues</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Tenant Advocacy</h3>
            <p className="text-gray-600">Support and guidance on all tenant rights and responsibilities</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <HeartHandshake className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Satisfaction Promise</h3>
            <p className="text-gray-600">We're not satisfied until you're satisfied with the resolution</p>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default TenantSupport;
