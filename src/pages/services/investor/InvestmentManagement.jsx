
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  PieChart, 
  Target, 
  BarChart2, 
  LineChart, 
  Briefcase,
  Shield,
  BarChart,
  Microscope,
  AlertCircle,
  CheckCircle,
  Activity
} from "lucide-react";

const features = [
  "Personalised investment strategies",
  "Regular portfolio performance reviews",
  "Market trend analysis and insights",
  "Risk assessment and management",
  "Investment opportunity identification",
  "ROI optimization strategies"
];

const benefits = [
  {
    title: "Higher Returns",
    description: "Optimise your portfolio performance through strategic asset allocation and active management.",
  },
  {
    title: "Reduced Risk",
    description: "Professional risk assessment and mitigation strategies to protect your investments.",
  },
  {
    title: "Time Savings",
    description: "Focus on your priorities while our experts handle the day-to-day management.",
  },
  {
    title: "Market Insights",
    description: "Access to proprietary research and real-time market intelligence.",
  },
  {
    title: "Portfolio Diversification",
    description: "Strategic diversification across property types and locations to balance risk and return.",
  },
  {
    title: "Performance Transparency",
    description: "Regular reporting and updates on portfolio performance and market conditions.",
  },
];

const faqItems = [
  {
    question: "What does your investment management service include?",
    answer: "Our comprehensive investment management service includes portfolio analysis and optimisation, personalised investment strategy development, ongoing performance monitoring, regular rebalancing, risk management, market opportunity identification, and detailed quarterly reporting. We take a holistic approach to managing your property investments, ensuring alignment with your financial goals while maximising returns and minimising risk."
  },
  {
    question: "How do you develop investment strategies for clients?",
    answer: "We begin with a thorough assessment of your financial goals, risk tolerance, time horizon, and existing investments. Our team analyzes market conditions, property trends, and economic indicators to identify optimal investment opportunities. We then create a tailored strategy that aligns with your objectives, considering factors such as cash flow requirements, appreciation potential, tax implications, and diversification needs. This strategy is regularly reviewed and adjusted based on performance and changing market conditions."
  },
  {
    question: "What types of properties do you recommend for investment?",
    answer: "Our property recommendations are based on your specific investment goals and risk profile. We consider residential properties (single-family homes, multi-family units, apartments), commercial properties (office spaces, retail units, industrial facilities), mixed-use developments, and specialised properties (student housing, senior living, etc.). Each recommendation is supported by comprehensive market research, local economic indicators, demographic trends, and growth projections to ensure alignment with your investment strategy."
  },
  {
    question: "How often will I receive updates on my investment performance?",
    answer: "You'll receive comprehensive quarterly performance reports detailing your portfolio's performance, market valuations, income generation, expense management, and comparative benchmarks. These reports include both property-specific metrics and overall portfolio analysis. Additionally, we provide monthly transaction summaries and real-time access to key performance indicators through our secure client portal. Our team also schedules bi-annual strategy review meetings to discuss performance and potential adjustments to your investment approach."
  },
  {
    question: "What fees do you charge for investment management services?",
    answer: "Our fee structure is transparent and aligned with your investment success. We typically charge a management fee ranging from 0.25% to 1.25% of assets under management, depending on portfolio size and complexity. For certain investment strategies, we may also implement a performance-based fee component, where we share in returns that exceed agreed-upon benchmarks. All fees are clearly outlined in our management agreement, with no hidden costs or surprises."
  }
];

const services = [
  {
    title: "Performance Analysis",
    description: "Detailed analysis of your portfolio's performance with actionable insights",
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Portfolio Optimization",
    description: "Strategic optimisation to maximise returns and minimise risks",
    icon: <PieChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Investment Strategy",
    description: "Customised investment strategies aligned with your financial goals",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    title: "Risk Management",
    description: "Comprehensive assessment and mitigation of potential investment risks",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
];

const performanceMetrics = [
  {
    title: "Return on Investment (ROI)",
    description: "Measuring the efficiency and profitability of your investments",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
  },
  {
    title: "Cash Flow Analysis",
    description: "Evaluating income streams and expense management across your portfolio",
    icon: <LineChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Comparative Benchmarking",
    description: "Analyzing your performance against industry and market benchmarks",
    icon: <BarChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Risk-Adjusted Returns",
    description: "Measuring performance in relation to the level of risk in your portfolio",
    icon: <Activity className="w-6 h-6 text-primary" />,
  },
];

const InvestmentManagement = () => {
  return (
    <ServicePageTemplate
      title="Investment Management"
      description="Strategic investment management solutions to maximise your property portfolio returns"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ready to Optimize Your Investments?"
      ctaText="Let our expert team help you achieve your investment goals with our proven strategies."
      ctaButtonText="Schedule a Consultation"
      ctaButtonLink="/contact"
    >
      {/* Investment Services Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Investment Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
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
      
      {/* Our Process Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Our Investment Management Process</h2>

        <div className="max-w-4xl mx-auto space-y-12 md:space-y-20">
          {[
            {
              step: 1,
              title: "Initial Assessment",
              description: "Comprehensive evaluation of your current investments, financial goals, and risk tolerance.",
              icon: <Microscope className="h-6 w-6 text-primary" />,
              actions: [
                "Analyze existing portfolio performance",
                "Define investment objectives and timeline",
                "Evaluate risk tolerance and preferences",
              ],
            },
            {
              step: 2,
              title: "Strategy Development",
              description: "Creation of a personalised investment strategy based on your financial objectives.",
              icon: <Briefcase className="h-6 w-6 text-primary" />,
              actions: [
                "Develop tailored investment strategy",
                "Create asset allocation framework",
                "Design risk management protocols",
              ],
            },
            {
              step: 3,
              title: "Active Management",
              description: "Ongoing portfolio management and optimisation to maximise performance.",
              icon: <TrendingUp className="h-6 w-6 text-primary" />,
              actions: [
                "Monitor and evaluate performance",
                "Identify optimisation opportunities",
                "Strategic portfolio rebalancing",
              ],
            },
            {
              step: 4,
              title: "Reporting & Refinement",
              description: "Regular performance updates and strategy refinements based on changing market conditions.",
              icon: <AlertCircle className="h-6 w-6 text-primary" />,
              actions: [
                "Comprehensive performance reporting",
                "Strategy review and adjustment",
                "Market opportunity updates",
              ],
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative md:flex md:space-x-8" 
            >
              {/* Number Indicator */}
              <div className="w-10 h-10 rounded-full bg-primary text-white font-semibold flex items-center justify-center md:absolute md:-left-12">
                {item.step}
              </div>

              <div className="mt-4 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-muted flex items-start gap-4"> {/* Added flex and items-start here */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">What We Do</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {item.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <span>{action}</span>
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
      
      {/* Performance Metrics Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Performance Metrics</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {metric.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default InvestmentManagement;
