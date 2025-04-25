import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ClipboardCheck,
  Sparkles,
  Key,
  Wrench,
  Calendar,
  Search,
  FileText,
  PoundSterling,
  Image,
  MessageSquare,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  "Detailed property inspection and inventory",
  "Professional cleaning services",
  "Maintenance and repair management",
  "Deposit handling and negotiation",
  "Utility transfer and meter readings",
  "Legal compliance and documentation"
];

const benefits = [
  {
    title: "Minimise Vacancy Periods",
    description: "Efficient turnaround to reduce time between tenancies and maximise rental income.",
  },
  {
    title: "Protect Your Investment",
    description: "Thorough inspections and documentation to safeguard against property damage claims.",
  },
  {
    title: "Deposit Protection",
    description: "Expert negotiation and evidence gathering to handle deposit returns fairly.",
  },
  {
    title: "Compliance Assurance",
    description: "Ensure all legal requirements and regulations are met during tenant transitions.",
  },
  {
    title: "Stress-Free Transition",
    description: "Professional management of the entire process from move out to move in.",
  },
  {
    title: "Quality Preparation",
    description: "Thorough property preparation to attract high quality new tenants.",
  },
];

const faqItems = [
  {
    question: "What does your end of tenancy service include?",
    answer: "Our comprehensive end of tenancy service includes detailed property inspection (comparing to check in inventory), professional photography to document property condition, coordination of professional cleaning services (including carpets and upholstery if needed), management of any necessary repairs or maintenance, utility transfer assistance, meter readings, key collection, deposit negotiation and processing, inventory updates, and preparation for new tenancy. We handle all communication with the outgoing tenant, coordinate contractors, and ensure the property is ready for new occupants within the agreed timeframe."
  },
  {
    question: "How do you handle deposit disputes with tenants?",
    answer: "We handle deposit disputes through a systematic, evidence based approach designed to achieve fair resolutions. First, we conduct a thorough check out inspection with detailed photography and documentation comparing to the check in inventory. We provide tenants with a clear, itemised list of any deductions with supporting evidence and cost breakdowns. For disagreements, we engage in mediation directly with tenants, presenting factual evidence while remaining open to reasonable compromise. If necessary, we utilise the deposit protection scheme's dispute resolution service, preparing comprehensive evidence packages. Throughout the process, we maintain detailed records of all communications and adhere strictly to legal requirements regarding timelines and procedures."
  },
  {
    question: "What happens if the property needs repairs before a new tenant moves in?",
    answer: "When repairs are needed between tenancies, we first assess whether they result from tenant damage (potentially covered by the previous tenant's deposit) or normal wear and tear (landlord's responsibility). For necessary repairs, we provide you with a detailed report including photographs, recommended actions, and cost estimates. With your approval, we coordinate with our trusted network of qualified contractors, scheduling and supervising all work. For urgent repairs that might delay re-letting, we prioritise quick resolution while maintaining quality standards. All work is inspected upon completion, and we provide you with documentation of the repairs for your records."
  },
  {
    question: "How long does the end of tenancy process typically take?",
    answer: "The typical timeline for our end of tenancy process is 7-14 days from tenant move out to property being ready for new occupancy. The check out inspection occurs within 24-48 hours of tenant departure. Professional cleaning and minor repairs are usually completed within 3-5 days. Deposit resolution typically takes 5-10 days, though this can vary if disputes arise. More significant repairs or refurbishments may extend this timeline. We work efficiently to minimise vacancy periods while ensuring thorough property preparation. For landlords with tight turnaround requirements, we offer expedited services that can reduce this timeline when pre booked."
  },
  {
    question: "Do I need to be present for the check out inspection?",
    answer: "Landlords do not need to be present for check out inspections, as our professional property managers handle the entire process. We conduct a thorough inspection using a standardised checklist that compares current property condition against the check in inventory and photographs. You'll receive a comprehensive digital report within 48 hours, including detailed notes on condition, cleanliness, and any damage, supported by date stamped photographs. The report includes recommendations for any deposit deductions and estimates for necessary repairs. If you prefer to attend the inspection, we're happy to schedule it at your convenience, but most landlords appreciate the time saving benefit of our trusted inspection service."
  }
];

// Define eotServices array
const eotServices = [
    {
        title: "Inspection Services",
        description: "Detailed property inspection and inventory reporting.",
        icon: <Search className="h-5 w-5 text-primary" />
    },
    {
        title: "Cleaning Services",
        description: "Professional cleaning to prepare the property for new tenants.",
        icon: <Sparkles className="h-5 w-5 text-primary" />
    },
    {
        title: "Maintenance Services",
        description: "Coordination of necessary repairs and maintenance.",
        icon: <Wrench className="h-5 w-5 text-primary" />
    }
];

// Define tenancyProcess array
const tenancyProcess = [
  {
    step: "1",
    title: "Pre Departure Inspection",
    description: "We conduct a preliminary inspection before the tenant leaves to identify any issues that need addressing.",
    icon: <Search className="h-5 w-5 text-primary" />,
    details: [
      "Preliminary condition assessment",
      "Tenant guidance for smooth move out",
      "Early issue identification",
    ],
  },
  {
    step: "2",
    title: "Property Preparation",
    description: "Detailed property inspection & Coordination of cleaning, repairs, and maintenance to prepare the property for new tenants.",
    icon: <Wrench className="h-5 w-5 text-primary" />,
    details: [
      "Detailed property inspection",
      "Photographic documentation",
      "Inventory comparison",
    ],
  },
  {
    step: "3",
    title: "Documentation & Compliance",
    description: "Complete paperwork and legal compliance for the end of tenancy process.",
    icon: <FileText className="h-5 w-5 text-primary" />,
    details: [
      "Tenancy agreement review",
      "Legal notice processing",
      "Compliance checks",
    ],
  },
  {
    step: "4",
    title: "Deposit Resolution",
    description: "Expert negotiation and evidence gathering to handle deposit returns fairly.",
    icon: <PoundSterling className="h-5 w-5 text-primary" />,
    details: [
      "Damage assessment and cost estimation",
      "Negotiation with tenants",
      "Deposit protection scheme adherence",
    ],
  },
  {
    step: "5",
    title: "New Tenancy Preparation",
    description: "Preparation for new tenant move in, including inventory updates and property marketing.",
    icon: <Calendar className="h-5 w-5 text-primary" />,
    details: [
      "Inventory updates",
      "Property marketing coordination",
      "Key handover arrangements",
    ],
  }
];

const EndOfTenancy = () => {
  return (
    <ServicePageTemplate
      title="End of Tenancy Services"
      description="Professional end of tenancy management and property turnaround services"
      heroImage="https://images.unsplash.com/photo-1573492466940-3156e63dc25b"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Need End of Tenancy Services?"
      ctaText="Let us handle your property transition professionally and efficiently."
      ctaButtonText="Contact Us Today"
      ctaButtonLink="/contact"
    >
      {/* Core Services Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our End of Tenancy Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {eotServices.map((service, index) => (
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
      
      {/* Process Timeline Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Our End of Tenancy Process</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-20 md:space-y-24">
            {tenancyProcess.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-5 w-10 h-10 rounded-full bg-primary items-center justify-center text-white font-semibold border-4 border-white shadow-sm">
                  {step.step}
                </div>
                
                {/* Content Layout */}
                <div className={`relative md:grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  {/* Step Description */}
                  <div className={index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}>
                    {/* Mobile Step Header */}
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    
                    {/* Desktop Step Header */}
                    <h3 className="hidden md:block text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  {/* Step Details Card */}
                  <div className={`mt-4 md:mt-0 bg-white p-6 rounded-lg shadow-sm border border-muted ${
                    index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'
                  }`}>
                    <div className="flex gap-4">
                      <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 items-center justify-center">
                        {step.icon}
                      </div>
                      <ul className="space-y-3 flex-grow">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="my-20 bg-white p-8 rounded-lg shadow-md border border-muted">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">What Our Clients Say</h3>
            <div className="flex justify-center">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <blockquote className="italic text-gray-600 text-center text-lg mb-6">
            "Their end of tenancy service saved me countless hours and headaches. The team managed everything professionally, from inspection to deposit resolution, and had my property ready for new tenants in record time. The detailed documentation they provided was invaluable when there was a small dispute over the deposit."
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-3">
              <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Michael Thompson</p>
              <p className="text-sm text-gray-500">Property Owner, London</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Services Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-8">Related Services</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Discover our other landlord services to simplify your property management
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center flex flex-col">
            <div className="mb-4 mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <ClipboardCheck className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Management</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Comprehensive management services for your rental property portfolio.
            </p>
            <Link to="/services/landlord/property-management" className="inline-block">
              <Button variant="outline" size="sm">Learn More</Button>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center flex flex-col">
            <div className="mb-4 mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tenant Sourcing</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Find reliable, quality tenants for your property with our comprehensive screening.
            </p>
            <Link to="/services/landlord/tenant-sourcing" className="inline-block">
              <Button variant="outline" size="sm">Learn More</Button>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center flex flex-col">
            <div className="mb-4 mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Legal Compliance</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Ensure your rental operations comply with all relevant housing regulations.
            </p>
            <Link to="/services/landlord/legal-compliance" className="inline-block">
              <Button variant="outline" size="sm">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default EndOfTenancy;

