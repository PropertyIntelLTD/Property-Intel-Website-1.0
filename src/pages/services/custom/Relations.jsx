import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  Users, 
  Heart, 
  MessageSquare, 
  Award, 
  Star, 
  FileText,
  Phone,
  Mail,
  MessageCircle,
  UserCheck,
  Share2
} from "lucide-react";

const features = [
  "Dedicated tenant relations management",
  "Proactive communication strategies",
  "Personalized service approach",
  "Tenant satisfaction monitoring",
  "Conflict resolution protocols",
  "Community building initiatives"
];

const benefits = [
  {
    title: "Increased Tenant Retention",
    description: "Improve tenant satisfaction and reduce turnover with personalized service.",
  },
  {
    title: "Enhanced Property Reputation",
    description: "Build a positive reputation that attracts quality tenants and referrals.",
  },
  {
    title: "Reduced Conflicts",
    description: "Minimize disputes through effective communication and resolution protocols.",
  },
  {
    title: "Higher Rental Values",
    description: "Command premium rental rates through exceptional service reputation.",
  },
  {
    title: "Valuable Tenant Insights",
    description: "Gain actionable feedback to continuously improve property management.",
  },
  {
    title: "Stronger Community Feel",
    description: "Create a sense of community that enhances tenant experience and loyalty.",
  },
];

const faqItems = [
  {
    question: "How does your tenant relations service work?",
    answer: "Our tenant relations service begins with a comprehensive assessment of your current tenant experience. We analyze communication patterns, service responsiveness, tenant feedback mechanisms, and community engagement. Based on this assessment, we develop a customized tenant relations strategy that includes regular check-ins, personalized communication protocols, tenant satisfaction surveys, community-building events, and proactive issue resolution processes. Our dedicated tenant relations managers serve as the primary point of contact for your tenants, ensuring consistent, high-quality service while providing you with regular reporting on tenant satisfaction and engagement metrics."
  },
  {
    question: "What makes your approach to tenant relations different?",
    answer: "What sets our approach apart is our focus on proactive relationship management rather than reactive problem-solving. We use a data-driven methodology that combines regular sentiment analysis, predictive issue identification, and personalized tenant profiling. Our tenant relations managers receive specialized training in hospitality-inspired service delivery, conflict de-escalation, and community building. We also leverage technology through our tenant portal that offers convenient service access while gathering valuable engagement metrics. This comprehensive approach transforms tenant relations from a basic necessity into a strategic advantage that differentiates your properties in the market."
  },
  {
    question: "How do you handle tenant complaints and issues?",
    answer: "We manage tenant concerns through a structured response protocol designed to provide quick resolution while maintaining positive relationships. When issues arise, our system immediately logs and categorizes them, triggering appropriate response workflows based on urgency and type. Tenants receive acknowledgment within two hours and regular updates throughout the resolution process. Our tenant relations managers are trained in empathetic communication and de-escalation techniques, focusing on understanding tenant perspectives while finding fair solutions. Every issue is documented, analyzed for future prevention opportunities, and followed up with satisfaction verification to ensure complete resolution."
  },
  {
    question: "What kind of tenant engagement activities do you organize?",
    answer: "We curate a calendar of tenant engagement activities tailored to your property's demographics and community culture. These include seasonal community events (summer barbecues, holiday celebrations), educational workshops (home maintenance tips, local area orientations), wellness activities (fitness classes, stress management sessions), networking opportunities (resident mixers, interest group formations), and giving back initiatives (community volunteering, donation drives). We also facilitate digital engagement through online community forums, virtual events, and social media groups. All activities are designed to foster a sense of belonging, strengthen tenant connections, and enhance the overall living experience."
  },
  {
    question: "How do you measure the success of tenant relations efforts?",
    answer: "We measure success through comprehensive quantitative and qualitative metrics. Our quantitative analysis includes tenant retention rates, renewal percentages, response time averages, resolution satisfaction scores, event participation rates, and portal engagement statistics. Qualitative measures include sentiment analysis from surveys, feedback during tenant interactions, social media sentiment, and testimonials. We conduct quarterly tenant satisfaction surveys using Net Promoter Score methodology and benchmark these results against industry standards. All measurements feed into our continuous improvement cycle, with detailed reporting provided to property owners that includes trend analysis, improvement recommendations, and ROI calculations for tenant relations initiatives."
  }
];

const relationFeatures = [
  {
    title: "Personalized Communication",
    description: "Tailored communication strategies that address individual tenant needs",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
  },
  {
    title: "Tenant Experience Management",
    description: "Comprehensive approach to enhancing the entire tenant journey",
    icon: <Heart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Satisfaction Monitoring",
    description: "Regular assessment of tenant satisfaction with actionable insights",
    icon: <Star className="w-6 h-6 text-primary" />,
  },
  {
    title: "Community Building",
    description: "Strategic initiatives to create a sense of community within properties",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
];

const communicationChannels = [
  {
    title: "Digital Portal",
    description: "Secure online platform for tenant communication and service requests",
    icon: <MessageCircle className="w-6 h-6 text-primary" />
  },
  {
    title: "Email Communications",
    description: "Personalized email updates and important announcements",
    icon: <Mail className="w-6 h-6 text-primary" />
  },
  {
    title: "SMS Notifications",
    description: "Timely text message alerts for urgent matters and reminders",
    icon: <Phone className="w-6 h-6 text-primary" />
  },
  {
    title: "Social Engagement",
    description: "Community building through social media and digital connections",
    icon: <Share2 className="w-6 h-6 text-primary" />
  }
];

const Relations = () => {
  return (
    <ServicePageTemplate
      title="Tenant Relations Management"
      description="Building strong tenant relationships through personalized communication and exceptional service"
      heroImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Enhance Your Tenant Relationships"
      ctaText="Let's discuss how our tenant relations management can improve satisfaction, retention, and your property's reputation."
      ctaButtonText="Start the Conversation"
      ctaButtonLink="/contact"
    >
      {/* Relation Features Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Tenant Relations</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {relationFeatures.map((feature, index) => (
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
      
      {/* Communication Channels Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Multi-Channel Communication</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We engage with tenants through multiple channels to ensure effective and convenient communication.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {communicationChannels.map((channel, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={channel.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {channel.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                <p className="text-gray-600">{channel.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Tenant Journey Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">The Tenant Experience Journey</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
            {/* Stage 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-semibold mb-2">Onboarding</h3>
                <p className="text-gray-600">
                  Personalized welcome process with comprehensive orientation to property
                  amenities, services, and community features.
                </p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                  <UserCheck className="h-6 w-6" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12"></div>
            </motion.div>
            
            {/* Stage 2 */}
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
                  <MessageSquare className="h-6 w-6" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-xl font-semibold mb-2">Ongoing Engagement</h3>
                <p className="text-gray-600">
                  Regular communication, responsive service, and proactive relationship
                  building throughout the tenancy period.
                </p>
              </div>
            </motion.div>
            
            {/* Stage 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-semibold mb-2">Renewal Experience</h3>
                <p className="text-gray-600">
                  Streamlined renewal process with personalized incentives and appreciation
                  for continued tenancy.
                </p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                  <FileText className="h-6 w-6" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12"></div>
            </motion.div>
            
            {/* Stage 4 */}
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
                  <Award className="h-6 w-6" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-xl font-semibold mb-2">Long-Term Loyalty</h3>
                <p className="text-gray-600">
                  Recognition programs, community involvement, and enhanced services
                  for long-term tenants.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Service Methodology */}
      <div className="my-20 bg-white p-8 rounded-lg border border-muted shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-6">Our Tenant Relations Methodology</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A structured approach to creating exceptional tenant experiences and lasting relationships.
        </p>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {/* Listen */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-muted/10 p-6 rounded-lg border-l-4 border-primary"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Listen & Understand</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We actively seek tenant feedback through multiple channels and truly listen to understand needs, preferences, and concerns.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Respond */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-muted/10 p-6 rounded-lg border-l-4 border-primary"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Respond & Resolve</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We provide prompt, professional responses to all tenant communications and thoroughly resolve issues with transparent follow-up.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Build */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-muted/10 p-6 rounded-lg border-l-4 border-primary"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Build & Connect</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We foster community connections through strategic events, communications, and platforms that enhance the tenant experience.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Measure */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-muted/10 p-6 rounded-lg border-l-4 border-primary"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Measure & Improve</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We continuously track satisfaction metrics and relationship indicators to identify opportunities for service improvement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default Relations;