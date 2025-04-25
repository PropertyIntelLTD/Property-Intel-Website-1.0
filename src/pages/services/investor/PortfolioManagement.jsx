
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  BarChart, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Scale,
  TableProperties,
  BarChart3,
  ArrowUpDown,
  RefreshCw,
  AlertTriangle,
  BarChart2
} from "lucide-react";

const features = [
  "Portfolio diversification strategies",
  "Performance tracking and reporting",
  "Risk assessment and mitigation",
  "Market opportunity analysis",
  "Asset allocation optimisation",
  "Regular portfolio rebalancing"
];

const benefits = [
  {
    title: "Optimised Returns",
    description: "Strategic asset allocation to maximise returns across your entire property portfolio.",
  },
  {
    title: "Reduced Risk",
    description: "Diversification strategies that minimise exposure and protect your investments.",
  },
  {
    title: "Data-Driven Decisions",
    description: "Advanced analytics and metrics to inform all portfolio decisions.",
  },
  {
    title: "Market Adaptability",
    description: "Regular rebalancing to adapt to changing market conditions and opportunities.",
  },
  {
    title: "Performance Transparency",
    description: "Comprehensive reporting and dashboards to track your portfolio's performance.",
  },
  {
    title: "Strategic Growth",
    description: "Planned expansion and development of your property investments over time.",
  },
];

const faqItems = [
  {
    question: "How do you approach property portfolio diversification?",
    answer: "Our portfolio diversification approach is multi-dimensional, considering property types (residential, commercial, industrial), geographic locations (urban centers, growing suburbs, international markets), asset classes (luxury, mid-market, affordable), and investment strategies (income-generating, capital appreciation, value-add opportunities). We analyze your existing portfolio to identify concentration risks and diversification opportunities. Based on your financial goals and risk tolerance, we create a strategic diversification plan with recommended asset allocation percentages and implementation timeline. This balanced approach helps insulate your portfolio from market-specific downturns while capturing growth across various sectors."
  },
  {
    question: "What metrics do you use to evaluate portfolio performance?",
    answer: "We employ a comprehensive set of performance metrics including Cash-on-Cash Return, Internal Rate of Return (IRR), Cap Rate, Gross Rental Yield, Net Operating Income (NOI), Return on Investment (ROI), Debt Service Coverage Ratio, and Equity Multiple. We also analyze vacancy rates, tenant retention, expense ratios, and appreciation rates. All metrics are benchmarked against relevant market indices and your predetermined investment goals. Our quarterly reports provide detailed analysis across individual properties and your entire portfolio, with clear visualisation of performance trends, outliers, and opportunities for optimisation."
  },
  {
    question: "How often do you recommend rebalancing a property portfolio?",
    answer: "Portfolio rebalancing frequency depends on several factors including market conditions, portfolio size, investment strategy, and your financial objectives. Generally, we conduct a comprehensive portfolio review and rebalancing assessment quarterly, with major strategic rebalancing typically recommended annually. However, we also employ trigger-based rebalancing when specific market conditions occur or when portfolio drift exceeds predetermined thresholds. Each rebalancing considers transaction costs, tax implications, and opportunity costs to ensure that adjustments provide meaningful benefits while minimising unnecessary expenses and disruption."
  },
  {
    question: "Can you help with consolidating or expanding my property portfolio?",
    answer: "Yes, we specialise in both strategic consolidation and expansion of property portfolios. For consolidation, we evaluate your current holdings to identify underperforming assets or market sectors where divestment makes sense, creating a streamlined portfolio with improved returns and manageability. For expansion, we develop a growth strategy aligned with your investment goals, identifying prime acquisition targets and opportunities in emerging markets or property sectors. Both approaches are implemented with careful consideration of market timing, tax implications, financing strategies, and long-term portfolio balance."
  },
  {
    question: "How do you incorporate tax efficiency into portfolio management?",
    answer: "Tax efficiency is integrated throughout our portfolio management process. We implement strategies including strategic timing of acquisitions and dispositions to optimise capital gains treatment, utilisation of cost segregation studies to accelerate depreciation, establishment of appropriate business structures (LLCs, partnerships, REITs) to maximise tax advantages, and identification of opportunities for 1031 exchanges. We also consider tax-efficient debt structures and analyze location-specific tax incentives or abatements. Our quarterly tax planning sessions help prepare for upcoming liabilities while identifying new optimisation opportunities. We work closely with your tax professionals to ensure all strategies align with your overall financial plan."
  }
];

const strategies = [
  {
    title: "Diversification",
    description: "Strategic allocation across property types, locations, and market segments",
    icon: <PieChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Performance Tracking",
    description: "Continuous monitoring of key performance indicators and benchmarks",
    icon: <BarChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Risk Management",
    description: "Identification, assessment and mitigation of portfolio wide risks",
    icon: <AlertTriangle className="w-6 h-6 text-primary" />,
  },
  {
    title: "Portfolio Rebalancing",
    description: "Regular adjustments to maintain optimal asset allocation",
    icon: <Scale className="w-6 h-6 text-primary" />,
  },
];

const analysisTypes = [
  {
    title: "Financial Performance",
    description: "Comprehensive analysis of returns, cash flow, and capital appreciation",
    icon: <LineChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Market Positioning",
    description: "Evaluation of portfolio position relative to market trends and opportunities",
    icon: <TableProperties className="w-6 h-6 text-primary" />,
  },
  {
    title: "Comparative Benchmarking",
    description: "Performance comparison against industry standards and market indices",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Optimisation Modeling",
    description: "Predictive modeling to identify optimal portfolio adjustments",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
  },
];

const PortfolioManagement = () => {
  return (
    <ServicePageTemplate
      title="Portfolio Management"
      description="Optimise your property portfolio performance with our expert management solutions"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ready to Optimise Your Portfolio?"
      ctaText="Let our experts help you maximise the potential of your property investments."
      ctaButtonText="Schedule a Consultation"
      ctaButtonLink="/contact"
    >
      {/* Portfolio Strategies Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Strategic Portfolio Management</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {strategy.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Portfolio Analysis Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Comprehensive Portfolio Analysis</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our multi-dimensional analysis approach ensures every aspect of your portfolio is optimised for performance.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {analysisTypes.map((type, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={type.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {type.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Portfolio Management Cycle */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">The Portfolio Management Cycle</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {[
              { title: "Assessment & Analysis", description: "Comprehensive evaluation of current portfolio performance, market position, and alignment with investment goals.", icon: <BarChart className="h-6 w-6" />, activities: ["Performance metrics evaluation", "Risk exposure assessment", "Market position analysis"] },
              { title: "Strategy Development", description: "Creation of optimisation strategies based on analysis findings and investment objectives.", icon: <ArrowUpDown className="h-6 w-6" />, activities: ["Opportunity identification", "Strategic adjustments planning", "Allocation target setting"] },
              { title: "Implementation", description: "Execution of strategic adjustments and portfolio optimization activities.", icon: <RefreshCw className="h-6 w-6" />, activities: ["Portfolio rebalancing", "Acquisition and disposition", "Operational improvements"] },
              { title: "Monitoring & Evaluation", description: "Ongoing tracking of performance and preparation for the next cycle of optimisation.", icon: <LineChart className="h-6 w-6" />, activities: ["Performance reporting", "Strategy effectiveness analysis", "Market trend monitoring"] },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white">
                    {step.icon}
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-muted md:hidden mb-4 flex items-center gap-3"> {/* Flex for icon and title */}
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h4 className="font-semibold">Key Activities</h4>
                  </div>
                  <ul className="space-y-1 text-sm">
                    {step.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Removed the standalone icon for mobile */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default PortfolioManagement;
