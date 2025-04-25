import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  Book, 
  FileText, 
  HelpCircle, 
  Info, 
  FileCheck, 
  Wrench, 
  Phone, 
  Users,
  ClipboardList,
  Check,
  Home,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Comprehensive tenant guides",
  "Property maintenance request system",
  "Local area information",
  "Lease and policy information",
  "Tenant communication portal",
  "FAQ and troubleshooting resources",
];

const benefits = [
  {
    title: "Always Informed",
    description: "Access important information about your property and lease agreement anytime.",
  },
  {
    title: "Quick Support",
    description: "Submit and track maintenance requests through our online portal for faster resolution.",
  },
  {
    title: "Community Connection",
    description: "Access information about local amenities, services, and community events.",
  },
  {
    title: "Simplified Living",
    description: "Find answers to common questions and guides for everyday rental situations.",
  },
  {
    title: "Transparent Communication",
    description: "Maintain clear communication records with property management for reference.",
  },
  {
    title: "24/7 Accessibility",
    description: "Access resources anytime, anywhere through our mobile-friendly portal.",
  },
];

const faqItems = [
  {
    question: "How do I submit a maintenance request?",
    answer: "You can submit maintenance requests through our online tenant portal. Simply log in, navigate to the 'Maintenance' section, and fill out the request form with details about the issue. You can also attach photos to help our maintenance team better understand the problem. For emergency maintenance issues outside of business hours, please call our 24/7 emergency maintenance line."
  },
  {
    question: "What is included in the tenant welcome pack?",
    answer: "Our tenant welcome pack includes your lease agreement, property guide, emergency contact information, maintenance request instructions, local area guide, utility connection information, trash and recycling schedules, and appliance manuals. You'll also receive information about our tenant portal and how to set up your account for online rent payments and maintenance requests."
  },
  {
    question: "How can I access the tenant portal?",
    answer: "You can access the tenant portal through our website by clicking on the 'Tenant Login' button in the top navigation menu. First-time users will need to set up their account using the email address provided during the application process. The portal allows you to pay rent, submit maintenance requests, communicate with property management, and access important documents related to your tenancy."
  },
  {
    question: "What should I do if I'm locked out of my rental property?",
    answer: "If you're locked out during business hours, contact our office for assistance. After hours, you can call our emergency line, but please note that lockout services may incur a fee as specified in your lease agreement. For this reason, we recommend keeping a spare key with a trusted friend or family member. Some properties also have emergency lockboxes or digital entry systems with backup access methods."
  },
  {
    question: "How do I extend my lease?",
    answer: "To extend your lease, contact your property manager at least 60 days before your current lease expires. We'll discuss renewal terms, any rent adjustments, and provide a lease extension agreement. Once you review and sign the extension, you'll receive a confirmation of your new lease term. Early notification of your intention to renew helps us ensure a smooth transition and prevents your unit from being listed as available."
  }
];

const resourceCategories = [
  {
    title: "Property Guides",
    description: "Detailed information about your property features and amenities.",
    icon: <Home className="w-6 h-6 text-primary" />,
  },
  {
    title: "Maintenance How-Tos",
    description: "Simple guides for basic home maintenance and troubleshooting.",
    icon: <Wrench className="w-6 h-6 text-primary" />,
  },
  {
    title: "Community Resources",
    description: "Information about local services, amenities, and community events.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Tenant Policies",
    description: "Clear explanations of lease terms, policies, and procedures.",
    icon: <ClipboardList className="w-6 h-6 text-primary" />,
  },
];

const downloadResources = [
  {
    title: "Tenant Welcome Guide",
    description: "A comprehensive guide to your new home and neighborhood",
    icon: <Book className="h-6 w-6 text-primary" />
  },
  {
    title: "Maintenance Request Form",
    description: "Form for submitting detailed maintenance requests",
    icon: <FileCheck className="h-6 w-6 text-primary" />
  },
  {
    title: "Renter's Insurance Guide",
    description: "Information about insurance requirements and recommendations",
    icon: <FileText className="h-6 w-6 text-primary" />
  },
  {
    title: "Moving Out Checklist",
    description: "Comprehensive list of tasks when preparing to vacate",
    icon: <Check className="h-6 w-6 text-primary" />
  }
];

const TenantResources = () => {
  return (
    <ServicePageTemplate
      title="Tenant Resources"
      description="Access comprehensive resources and support to enhance your rental experience"
      heroImage="https://images.unsplash.com/photo-1573497491765-dccce02b29df"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Need Additional Assistance?"
      ctaText="Our team is always ready to help with any questions or concerns you may have about your rental property."
      ctaButtonText="Contact Support"
      ctaButtonLink="/contact"
    >
      {/* Resource Categories Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Resource Categories</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {resourceCategories.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {resource.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Downloadable Resources Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Downloadable Resources</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Access these helpful documents to make your tenancy smoother and more enjoyable.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {downloadResources.map((resource, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={resource.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {resource.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{resource.title}</h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Need a specific resource not listed here?</p>
          <Link to="/contact">
            <Button variant="outline" size="sm">Request a Document</Button>
          </Link>
        </div>
      </div>
      
      {/* Support Options Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Support Options</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm border border-muted text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
            <p className="text-gray-600 mb-6">
              Speak directly with our tenant support team for immediate assistance with urgent matters.
            </p>
            <div className="text-lg font-medium text-primary mb-2">Monday - Friday</div>
            <div className="text-gray-700">9:00 AM - 5:00 PM</div>
            <div className="mt-6">
              <Button variant="outline" size="sm">Call (555) 123-4567</Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-muted text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Online Support</h3>
            <p className="text-gray-600 mb-6">
              Submit questions through our tenant portal for non-urgent matters and receive a response within 24 hours.
            </p>
            <div className="text-lg font-medium text-primary mb-2">Online Portal</div>
            <div className="text-gray-700">Available 24/7</div>
            <div className="mt-6">
              <Link to="/tenant-portal">
                <Button variant="outline" size="sm">Access Tenant Portal</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Tenant Testimonials */}
      <div className="my-20 bg-white p-8 rounded-lg shadow-sm border border-muted">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Tenants Say</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Hear from tenants who have benefited from our comprehensive resources and support.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-gray-50"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center mr-3">
                <span className="text-primary font-semibold">JP</span>
              </div>
              <div>
                <div className="font-semibold">James Peterson</div>
                <div className="text-sm text-gray-500">Tenant since 2022</div>
              </div>
            </div>
            <p className="text-gray-700">
              "The maintenance request system has been a game-changer. I had an issue with my heating, submitted 
              a request through the portal, and it was fixed the next day. The entire process was transparent 
              and hassle-free."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-lg bg-gray-50"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center mr-3">
                <span className="text-primary font-semibold">SM</span>
              </div>
              <div>
                <div className="font-semibold">Sarah Miller</div>
                <div className="text-sm text-gray-500">Tenant since 2023</div>
              </div>
            </div>
            <p className="text-gray-700">
              "The tenant welcome guide was incredibly helpful when I moved in. It had all the information I needed 
              about the property and local area. I still reference it regularly for information about trash 
              collection days and local services."
            </p>
          </motion.div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default TenantResources;