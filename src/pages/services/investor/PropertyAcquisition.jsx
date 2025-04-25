
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Search, 
  Building2, 
  Target, 
  FileText, 
  BarChart4, 
  Landmark,
  UserCheck,
  Filter,
  FileCheck,
  Map,
  Clock
} from "lucide-react"; // Ensure lucide-react is installed and up-to-date
import VerticalLine from "@/components/ui/VerticalLine";

const features = [
  "Property opportunity identification",
  "Comprehensive due diligence",
  "Market value assessment",
  "Investment potential analysis",
  "Negotiation support",
  "Transaction management"
];

const benefits = [
  {
    title: "Access to Exclusive Opportunities",
    description: "Gain access to off market and pre market properties not available to the general public.",
  },
  {
    title: "Reduced Research Time",
    description: "Save countless hours through our targeted property search and pre screening process.",
  },
  {
    title: "Investment Protection",
    description: "Thorough due diligence and analysis to protect you from poor investment decisions.",
  },
  {
    title: "Optimal Purchase Terms",
    description: "Expert negotiation to secure favorable pricing and contract conditions.",
  },
  {
    title: "Market Insights",
    description: "Valuable property market intelligence to inform your acquisition strategy.",
  },
  {
    title: "Streamlined Process",
    description: "End to end management of the complex acquisition process for a stress free experience.",
  },
];

const faqItems = [
  {
    question: "How do you identify promising investment properties?",
    answer: "We use a multi channel approach to property identification that combines technology, market relationships, and on the ground research. This includes proprietary databases of pre market and off market opportunities, a network of agents and property professionals, predictive analytics to identify emerging market opportunities, and direct outreach to owners in target areas. We focus on properties that meet your specific investment criteria while also considering factors like location trends, potential for appreciation, rental yield potential, and development opportunities. Each property undergoes initial screening against your investment parameters before being presented to you."
  },
  {
    question: "What does your due diligence process involve?",
    answer: "Our comprehensive due diligence process covers legal, financial, physical, and market aspects of potential acquisitions. We conduct title searches and review all property documents to identify legal issues or restrictions. Physical inspections include structural assessments, building systems evaluation, environmental hazards identification, and code compliance verification. Financial analysis covers income verification, expense validation, tax assessment review, and capital expenditure forecasting. Market analysis includes rental comparables, vacancy trends, development pipeline assessment, and demographic trend analysis. This thorough approach helps identify potential risks and provides accurate valuation to inform your investment decision."
  },
  {
    question: "How do you determine if a property is fairly priced?",
    answer: "We employ multiple valuation methodologies to determine fair market value. Our approach includes comparable sales analysis (examining recent transactions of similar properties), income capitalisation (analyzing potential rental income and applying appropriate cap rates), replacement cost analysis (estimating the cost to construct an equivalent property), and discounted cash flow analysis (projecting future income streams and applying discount rates). We also consider market specific factors like local supply and demand dynamics, development trends, infrastructure changes, and economic indicators. This multi faceted approach ensures you have a comprehensive understanding of a property's true value before making an offer."
  },
  {
    question: "What ongoing support do you provide after acquisition?",
    answer: "Post acquisition, we offer a seamless transition to property management or asset management services if desired. We create a detailed handover package with all property documentation, develop an initial management plan with budget projections, and coordinate with property management teams. We also offer ongoing market monitoring to keep you informed about changes affecting your investment, periodic investment performance reviews with optimisation recommendations, and support for refinancing or capital improvement projects. Additionally, we provide tax documentation assistance and maintain records of all improvement expenditures to help establish cost basis for future considerations."
  },
  {
    question: "How do you handle negotiations with sellers?",
    answer: "Our negotiation strategy is customised for each transaction based on market conditions, property characteristics, and seller motivations. We begin by thoroughly researching the seller's situation and potential pressure points to inform our approach. We develop a clear negotiation strategy with predefined parameters and fallback positions. During negotiations, we focus on creating win-win scenarios that address seller concerns while securing your interests. Beyond price, we negotiate favorable contract terms including inspection periods, financing contingencies, closing timelines, and property condition requirements. Throughout the process, we maintain professional relationships with all parties while aggressively representing your interests."
  }
];

const services = [
  {
    title: "Property Search",
    description: "Targeted property search based on your investment criteria and goals",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    title: "Due Diligence",
    description: "Thorough property and market analysis to ensure sound investments",
    icon: <FileCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Strategic Planning",
    description: "Development of acquisition strategies aligned with your objectives",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    title: "Negotiation",
    description: "Expert negotiation to secure optimal purchase terms and conditions",
    icon: <UserCheck className="w-6 h-6 text-primary" />,
  },
];

const propertyTypes = [
  {
    title: "Residential",
    description: "Single family homes, multi family units, apartment buildings",
    icon: <Building2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Commercial",
    description: "Office spaces, retail properties, industrial facilities",
    icon: <Landmark className="w-6 h-6 text-primary" />,
  },
  {
    title: "Mixed Use",
    description: "Properties combining residential and commercial elements",
    icon: <BarChart4 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Land",
    description: "Development sites and strategic land parcels",
    icon: <Map className="w-6 h-6 text-primary" />,
  },
];

const PropertyAcquisition = () => {
  return (
    <ServicePageTemplate
      title="Property Acquisition"
      description="Expert guidance in identifying and acquiring profitable investment properties"
      heroImage="https://images.unsplash.com/photo-1685279053124-f47a436a9c1e"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ready to Expand Your Portfolio?"
      ctaText="Let our experts help you find and acquire your next investment property."
      ctaButtonText="Schedule a Consultation"
      ctaButtonLink="/contact"
    >
      {/* Services Section */}
      <section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Acquisition Process</h2>

    <div class="grid md:grid-cols-2 gap-12 items-start">
      {/* Left Side - Phases */}
      <div class="space-y-8">
        <div class="bg-white shadow-md rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Due Diligence</h3>
          <ul class="text-gray-700 space-y-2 pl-4 list-disc">
            <li>Conduct in depth market research and analysis.</li>
            <li>Source both on market and off market opportunities.</li>
          </ul>
        </div>

        <div class="bg-white shadow-md rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Transition & Implementation</h3>
          <ul class="text-gray-700 space-y-2 pl-4 list-disc">
            <li>Prepare and submit a competitive offer.</li>
            <li>Negotiate terms to reach an agreement.</li>
            <li>Coordinate the transaction and manage the closing process.</li>
          </ul>
        </div>
      </div>

      {/* Right Side - Steps */}
      <div class="space-y-6">
        {/* Step 1 */}
        <div class="bg-white rounded-2xl shadow-md p-6 flex items-start space-x-4">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white font-semibold">1</div>
          <div>
            <h4 class="font-semibold text-gray-900">Define Property Goals</h4>
            <ul class="list-disc pl-4 text-gray-700 space-y-1">
              <li>Establish your property type.</li>
              <li>Location.</li>
              <li>Financial objectives.</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div class="bg-white rounded-2xl shadow-md p-6 flex items-start space-x-4">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white font-semibold">2</div>
          <div>
            <h4 class="font-semibold text-gray-900">Financial Planning & Strategy</h4>
            <ul class="list-disc pl-4 text-gray-700 space-y-1">
              <li>Determine budget or financing options.</li>
              <li>Decide an investment strategy.</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div class="bg-white rounded-2xl shadow-md p-6 flex items-start space-x-4">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white font-semibold">3</div>
          <div>
            <h4 class="font-semibold text-gray-900">Property Assessment</h4>
            <ul class="list-disc pl-4 text-gray-700 space-y-1">
              <li>Perform physical property inspections and assessments.</li>
              <li>Analyze financial performance and potential.</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div class="bg-white rounded-2xl shadow-md p-6 flex items-start space-x-4">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white font-semibold">4</div>
          <div>
            <h4 class="font-semibold text-gray-900">Operational Setup</h4>
            <ul class="list-disc pl-4 text-gray-700 space-y-1">
              <li>Set up property management and operations.</li>
              <li>Implement your investment strategy for the property.</li>
              <li>Monitor ongoing performance and make adjustments.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </ServicePageTemplate>
  );
};

export default PropertyAcquisition;
