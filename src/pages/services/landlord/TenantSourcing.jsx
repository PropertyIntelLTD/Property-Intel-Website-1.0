
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Search, 
  FileCheck, 
  UserCheck, 
  MessageCircle, 
  ClipboardList, 
  Building,
  ShieldCheck,
  Award,
  Key,
  Users,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  "Comprehensive background checks",
  "Credit history verification",
  "Employment and income verification",
  "Previous landlord references",
  "Professional property marketing",
  "Complete application management"
];

const benefits = [
  {
    title: "Quality Tenants",
    description: "Find reliable tenants who will take care of your property and pay rent on time.",
  },
  {
    title: "Reduced Vacancy Times",
    description: "Professional marketing and streamlined processes minimise vacancy periods.",
  },
  {
    title: "Lower Risk",
    description: "Thorough screening reduces the risk of problematic tenancies and payment issues.",
  },
  {
    title: "Time Savings",
    description: "Let our team handle the entire tenant sourcing process, saving you valuable time.",
  },
  {
    title: "Legal Compliance",
    description: "All screening procedures comply with relevant housing and discrimination laws.",
  },
  {
    title: "Professional Presentation",
    description: "Expert property marketing showcases your property in the best possible light.",
  },
];

const faqItems = [
  {
    question: "What does your tenant screening process include?",
    answer: "Our comprehensive tenant screening process includes verification of employment and income (typically requiring income of at least 2.5-3x the monthly rent), credit history checks (looking for scores above 650 and evaluating payment patterns), criminal background checks at both county and national levels, rental history verification with previous landlords, identity verification, and eviction history searches. We also conduct personal interviews to gauge tenant reliability and compatibility. Each application is evaluated on a consistent scoring system to ensure fair and objective assessment while complying with fair housing laws."
  },
  {
    question: "How do you market rental properties to attract quality tenants?",
    answer: "We employ a multi channel marketing approach to attract high quality tenants. This includes professional photography, targeted listings on premium rental websites and MLS systems, social media marketing campaigns, email notifications to our pre qualified tenant database, signage and local advertising when appropriate, and coordination of open houses and private viewings. Our property descriptions emphasise the most appealing features for your target tenant demographic, and we continuously optimise our marketing approach based on response analytics."
  },
  {
    question: "How long does the tenant sourcing process typically take?",
    answer: "The tenant sourcing timeline varies based on property type, location, and market conditions. On average, marketing begins immediately upon signing our agreement, with property listings going live within 24-48 hours. In typical market conditions, we start generating inquiries within the first week. The screening process for each applicant takes 3-5 business days to complete thorough background checks. From listing to lease signing, the entire process generally takes 2-4 weeks. For premium properties or specialised markets, the timeline may extend slightly longer to ensure we find the optimal tenant."
  },
  {
    question: "What happens if a tenant you place doesn't work out?",
    answer: "We stand behind our tenant screening process with a replacement guarantee. If a tenant we place defaults within the first 1 month of the lease (subject to terms and conditions), we will find a replacement tenant at no additional tenant placement fee. The specifics of our guarantee are detailed in our service agreement. We also offer ongoing tenant management services that include regular property inspections, rent collection monitoring, and early intervention for any issues that arise, significantly reducing the likelihood of major tenancy problems."
  },
  {
    question: "What information do you need from me to start the tenant sourcing process?",
    answer: "To begin the tenant sourcing process, we'll need property details (address, size, number of bedrooms/bathrooms, unique features), rental terms (monthly rent, security deposit, lease duration, pet policy, available date), property access information for showings, high quality photos if available (otherwise we can arrange professional photography), details of any included utilities or amenities, property maintenance history, and your tenant preferences (if any, within fair housing guidelines). We'll also discuss your communication preferences and how involved you'd like to be in the tenant selection process."
  }
];

const screeningProcess = [
  {
    title: "Initial Screening",
    description: "Thorough review of applications and initial qualification checks",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    title: "Background Checks",
    description: "Comprehensive verification of credit, employment, and rental history",
    icon: <FileCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Reference Checks",
    description: "Contacting previous landlords and professional references",
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
  },
  {
    title: "Final Approval",
    description: "Detailed assessment and final tenant selection process",
    icon: <UserCheck className="w-6 h-6 text-primary" />,
  },
];

const marketingApproach = [
  {
    title: "Professional Photography",
    description: "High quality images that showcase your property's best features",
    icon: <Building className="w-6 h-6 text-primary" />,
  },
  {
    title: "Strategic Advertising",
    description: "Targeted marketing on premium platforms and rental networks",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
  {
    title: "Tenant Database",
    description: "Access to our pre screened pool of qualified prospective tenants",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Viewing Management",
    description: "Professional handling of property viewings and tenant inquiries",
    icon: <Key className="w-6 h-6 text-primary" />,
  },
];

const TenantSourcing = () => {
  return (
    <ServicePageTemplate
      title="Tenant Sourcing & Screening"
      description="Find reliable, quality tenants for your property with our comprehensive screening process"
      heroImage="https://images.unsplash.com/photo-1565717565422-d33a55df799e"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ready to Find Quality Tenants?"
      ctaText="Let us help you find the perfect tenants for your property."
      ctaButtonText="Get Started Today"
      ctaButtonLink="/contact"
    >
      {/* Screening Process Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Screening Process</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {screeningProcess.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Marketing Approach Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Property Marketing Approach</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We employ multiple strategies to attract high quality tenants to your property.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {marketingApproach.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Tenant Sourcing Service</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md border border-muted"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600 mb-4">
                  Our tenant screening specialists have years of experience in identifying reliable tenants.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Specialised training in tenant evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Up to date knowledge of housing laws</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md border border-muted"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Thorough Process</h3>
                <p className="text-gray-600 mb-4">
                  We leave no stone unturned when evaluating potential tenants for your property.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Multi-point verification system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Advanced screening technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md border border-muted"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Risk Reduction</h3>
                <p className="text-gray-600 mb-4">
                  Our screening process significantly reduces the risks associated with problem tenancies.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Minimise late payments and defaults</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Reduce property damage incidents</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md border border-muted"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Key className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Full Service</h3>
                <p className="text-gray-600 mb-4">
                  We handle the entire process from marketing to lease signing for a seamless experience.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-gray-600">End to end tenant acquisition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-gray-600">Professional lease preparation</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
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
            "Their tenant sourcing service has been a game changer for my rental properties. They found high quality tenants quickly, and their thorough screening process has resulted in zero payment issues. I've been able to sleep easy knowing my properties are in good hands."
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-3">
              <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Property Owner</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Services Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-8">Complementary Services</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Maximise your property investment with our additional landlord services
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Property Management</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Comprehensive management services for your rental property portfolio.
            </p>
            <Link to="/services/landlord/property-management" className="inline-block">
              <Button variant="outline" size="sm">Learn More</Button>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Rent Collection</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Reliable and efficient rent collection services with detailed reporting.
            </p>
            <Link to="/services/landlord/rent-collection" className="inline-block">
              <Button variant="outline" size="sm">Learn More</Button>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center flex flex-col">
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

export default TenantSourcing;
