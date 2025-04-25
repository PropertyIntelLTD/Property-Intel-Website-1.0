
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  Target, 
  BarChart2, 
  TrendingUp, 
  LineChart, 
  PieChart, 
  FileText, 
  Shield,
  Briefcase,
  Award,
  Compass
} from "lucide-react";

const features = [
  "Customised investment planning",
  "Risk assessment and management",
  "Performance optimisation",
  "Market opportunity analysis",
  "Portfolio diversification strategies",
  "Regular strategy reviews and updates",
];

const benefits = [
  {
    title: "Maximise Returns",
    description: "Strategically position your investments to optimise financial returns based on your risk tolerance.",
  },
  {
    title: "Reduce Risk",
    description: "Implement diversification strategies to mitigate risk while maintaining performance potential.",
  },
  {
    title: "Market Insights",
    description: "Gain access to exclusive market data and analysis to inform your investment decisions.",
  },
  {
    title: "Strategic Growth",
    description: "Develop a structured plan for expanding your property portfolio in a sustainable manner.",
  },
  {
    title: "Expert Guidance",
    description: "Work with seasoned property investment advisors with deep market knowledge.",
  },
  {
    title: "Adaptable Strategies",
    description: "Receive ongoing strategy adjustments to respond to market changes and opportunities.",
  },
];

const faqItems = [
  {
    question: "What types of investment strategies do you offer?",
    answer: "We offer a range of strategies including buy and hold for long term appreciation, value add for property improvements and increased returns, BRRRR (Buy, Rehab, Rent, Refinance, Repeat) for portfolio expansion, development projects, and passive investment strategies. Each strategy is tailored to your specific goals, risk tolerance, and investment timeline."
  },
  {
    question: "How do you assess which strategy is right for me?",
    answer: "Our strategy development begins with a comprehensive assessment of your financial situation, investment goals, timeline, risk tolerance, and experience level. We analyze your current portfolio (if applicable), market conditions, and opportunities. This thorough evaluation allows us to recommend strategies that align with your specific circumstances and objectives."
  },
  {
    question: "What information do I need to provide to get started?",
    answer: "To develop your investment strategy, we'll need information about your financial position, investment goals, timeline, risk tolerance, and any existing property investments. During our initial consultation, we'll guide you through the specific details required. We may also request documents such as financial statements, existing portfolio performance data, and information about your investment preferences."
  },
  {
    question: "How often should my investment strategy be reviewed?",
    answer: "We recommend quarterly reviews of your investment strategy, with a comprehensive annual reassessment. However, the frequency may vary based on your portfolio size, market volatility, and personal circumstances. We also conduct ad-hoc reviews when significant market changes occur or when your financial situation or goals change substantially."
  },
  {
    question: "How do you measure the success of an investment strategy?",
    answer: "We measure success using multiple metrics including return on investment (ROI), cash-on-cash return, internal rate of return (IRR), equity build-up, portfolio diversification ratios, and risk adjusted returns. Most importantly, we measure success against your specific goals, whether they focus on income generation, capital appreciation, wealth preservation, or a combination of objectives."
  }
];

const services = [
  {
    title: "Goal Setting",
    description: "Define clear, achievable investment objectives aligned with your vision.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    title: "Performance Analysis",
    description: "Comprehensive analysis of investment performance and potential.",
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Growth Planning",
    description: "Strategic planning for sustainable portfolio growth and expansion.",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
  },
];

const strategyTypes = [
  {
    title: "Value Add Strategy",
    description: "Focus on properties with improvement potential to increase value and rental income.",
    icon: <Award className="w-6 h-6 text-primary" />
  },
  {
    title: "Buy and Hold",
    description: "Long term investment approach focusing on steady appreciation and cash flow.",
    icon: <Briefcase className="w-6 h-6 text-primary" />
  },
  {
    title: "Portfolio Diversification",
    description: "Balance investments across different property types and locations to optimise risk and return.",
    icon: <PieChart className="w-6 h-6 text-primary" />
  },
  {
    title: "Market Timing",
    description: "Strategic acquisition and disposition based on market cycle analysis.",
    icon: <Compass className="w-6 h-6 text-primary" />
  }
];

const process = [
  {
    title: "Assessment",
    description: "Evaluate current position and goals",
  },
  {
    title: "Strategy Development",
    description: "Create customised investment plans",
  },
  {
    title: "Implementation",
    description: "Execute strategic initiatives",
  },
  {
    title: "Monitoring",
    description: "Track and adjust performance",
  },
];

const InvestmentStrategy = () => {
  return (
    <ServicePageTemplate
      title="Investment Strategy"
      description="Customised investment strategies to help you achieve your financial goals"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ready to Develop Your Investment Strategy?"
      ctaText="Let our experts help you create a customised investment strategy that meets your goals and maximises your returns."
      ctaButtonText="Schedule a Strategy Session"
      ctaButtonLink="/Contact"
    >
      {/* Strategic Services Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Strategic Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Strategy Types Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Investment Strategy Types</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {strategyTypes.map((strategy, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={strategy.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {strategy.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Strategy Development Process */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Strategy Development Process</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
              >
                <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} text-center md:text-left`}>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto border-4 border-white">
                    {index + 1}
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Performance Metrics Section */}
      <div className="my-20 bg-white p-8 rounded-lg border border-muted shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-6">How We Measure Success</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We use industry standard metrics combined with personalised goals to ensure your investment strategy delivers results.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <BarChart2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Return on Investment</h3>
              <p className="text-sm text-gray-600">Measuring the efficiency of your investments relative to their cost</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <LineChart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Cash Flow Analysis</h3>
              <p className="text-sm text-gray-600">Tracking income and expenses to ensure positive monthly returns</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Appreciation Rate</h3>
              <p className="text-sm text-gray-600">Measuring property value growth over time</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Risk Assessment</h3>
              <p className="text-sm text-gray-600">Evaluating potential downside and volatility factors</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <PieChart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Portfolio Diversity</h3>
              <p className="text-sm text-gray-600">Assessing the balance and correlation between investments</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Goal Achievement</h3>
              <p className="text-sm text-gray-600">Measuring progress against your personal financial objectives</p>
            </div>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default InvestmentStrategy;
