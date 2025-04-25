
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Search, 
  Map, 
  BarChart2,
  PieChart,
  Target,
  LineChart,
  Building,
  Database,
  Users
} from "lucide-react";

const features = [
  "Real-time market data analysis",
  "Property value trends and forecasts",
  "Demographic and economic insights",
  "Competition analysis",
  "Investment opportunity identification",
  "Risk assessment reports",
];

const benefits = [
  {
    title: "Make Informed Decisions",
    description: "Base your investment choices on accurate data and expert market insights.",
  },
  {
    title: "Identify Growth Areas",
    description: "Discover emerging neighborhoods and high potential investment locations.",
  },
  {
    title: "Reduce Investment Risk",
    description: "Make data backed decisions that minimise uncertainty and potential downsides.",
  },
  {
    title: "Understand Market Dynamics",
    description: "Gain clear insights into supply and demand patterns and market cycles.",
  },
  {
    title: "Optimise Investment Timing",
    description: "Enter markets at the right time based on trend analysis and forecasting.",
  },
  {
    title: "Comparative Advantage",
    description: "Access insights that most investors don't have for a competitive edge.",
  },
];

const faqItems = [
  {
    question: "What types of data do you include in your market analysis?",
    answer:
      "Our comprehensive market analysis includes property value trends, rental yield data, vacancy rates, demographic information, economic indicators, development pipeline data, infrastructure projects, market saturation metrics, historical performance data, and regulatory environment analysis. We source this data from multiple reliable providers and supplement it with our own proprietary research.",
  },
  {
    question: "How often are your market reports updated?",
    answer:
      "Our standard market reports are updated quarterly to reflect the latest trends and data. However, we also offer monthly pulse reports for rapidly changing markets. For clients with custom analysis needs, we can establish tailored reporting schedules. Additionally, our online dashboard provides real time updates on key metrics for subscribers to our premium service.",
  },
  {
    question:
      "Do you provide analysis for specific neighborhoods or just broader market areas?",
    answer:
      "We provide analysis at multiple geographic levels - from broad metropolitan areas down to specific neighborhoods and even micro-markets. Our hyper-local analysis can help you understand the nuances of different submarkets, including price differentials, demographic variations, and localized growth trends that might not be apparent at the broader market level.",
  },
  {
    question: "How do you forecast future market performance?",
    answer:
      "Our forecasting methodology combines quantitative modeling with qualitative expert analysis. We use econometric models that incorporate historical data, current market conditions, economic indicators, and demographic trends. These models are then refined through input from our team of market analysts who bring contextual understanding and local market expertise. This balanced approach results in forecasts that are both data driven and practical.",
  },
  {
    question:
      "Can I request a custom analysis for a specific property or investment opportunity?",
    answer:
      "Yes, we offer custom analysis services tailored to specific properties or investment opportunities. These specialised reports include competitive positioning, highest and best use analysis, potential rental income projections, capital growth forecasts, and risk assessments. We can also include scenario modeling to help you understand the potential outcomes under different market conditions.",
  },
];

const services = [
  {
    title: "Market Trends",
    description: "Comprehensive analysis of current market trends and future projections.",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
  },
  {
    title: "Location Analysis",
    description:
      "Detailed analysis of location specific market conditions and opportunities.",
    icon: <Map className="w-6 h-6 text-primary" />,
  },
  {
    title: "Investment Research",
    description:
      "In depth research to identify the most promising investment opportunities.",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
];

const dataPoints = [
  {
    title: "Property Trends",
    description: "Track pricing trends, rental yields, and property value forecasts.",
    icon: <LineChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Demographic Analysis",
    description: "Understand population trends, income levels, and household composition.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Market Indicators",
    description: "Monitor supply and demand ratios, vacancy rates, and time on market.",
    icon: <Database className="w-6 h-6 text-primary" />,
  },
  {
    title: "Area Development",
    description:
      "Track infrastructure projects, zoning changes, and development pipelines.",
    icon: <Building className="w-6 h-6 text-primary" />,
  },
];

const MarketAnalysis = () => {
  return (
    <ServicePageTemplate
      title="Market Analysis"
      description="In depth market research and analysis to identify the best investment opportunities"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Ready to Make Data Driven Decisions?"
      ctaText="Get access to our comprehensive market analysis reports and expert insights to guide your property investments."
      ctaButtonText="Request Market Report"
      ctaButtonLink="/contact"
    >
      {/* Analysis Services Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8 md:text-3xl">
          Our Market Analysis Services
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:w-12 md:h-12">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1 md:text-xl">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Points Section */}
      <section className="py-12 bg-muted/20 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4 md:text-3xl">
          Key Data Points We Analyze
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-8 text-sm md:text-base">
          Our comprehensive analysis examines multiple factors to provide you with
          a complete market picture.
        </p>

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto md:grid-cols-2">
          {dataPoints.map((point, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={point.title}
              className="bg-white p-4 rounded-lg shadow-sm border border-muted flex items-start gap-3 md:gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center md:w-12 md:h-12">
                  {point.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 md:text-xl">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Analysis Process */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8 md:text-3xl">
          Our Market Analysis Process
        </h2>

        <div className="relative max-w-md mx-auto md:max-w-2xl">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 md:text-right">
                <h3 className="text-lg font-semibold mb-1 md:text-xl">
                  Data Collection
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We gather comprehensive data from multiple sources including
                  government databases, property records, economic indicators,
                  and proprietary research.
                </p>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white md:w-12 md:h-12">
                  1
                </div>
              </div>

              <div className="md:w-1/2 md:pl-8"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-6 md:mb-0"></div>

              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white md:w-12 md:h-12">
                  2
                </div>
              </div>

              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-lg font-semibold mb-1 md:text-xl">
                  Analysis & Interpretation
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Our experts analyze the data using advanced statistical methods
                  and proprietary models to identify patterns, trends, and
                  investment opportunities.
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
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 md:text-right">
                <h3 className="text-lg font-semibold mb-1 md:text-xl">
                  Forecasting
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We develop predictive models that forecast future market
                  performance, property value trends, and potential return on
                  investment.
                </p>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white md:w-12 md:h-12">
                  3
                </div>
              </div>

              <div className="md:w-1/2 md:pl-8"></div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-6 md:mb-0"></div>

              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white md:w-12 md:h-12">
                  4
                </div>
              </div>

              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-lg font-semibold mb-1 md:text-xl">
                  Actionable Reporting
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We deliver clear, comprehensive reports with actionable
                  insights that help you make informed investment decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Report Types Section */}
      <section className="py-12 bg-white rounded-lg border border-muted shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6 md:text-3xl">
          Market Report Offerings
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-8 text-sm md:text-base">
          We offer a range of market reports tailored to different investor needs
          and property types.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-muted rounded-lg p-4 bg-gray-50"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:w-12 md:h-12">
              <Target className="h-5 w-5 text-primary md:h-6 md:w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Market Overview</h3>
            <p className="text-sm text-gray-600 mb-3">
              Broad analysis of market conditions, trends, and opportunities in
              specific regions.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Quarterly updates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Regional pricing trends</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Economic indicators</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-muted rounded-lg p-6 bg-gray-50"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Map className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Neighborhood Analysis</h3>
            <p className="text-sm text-gray-600 mb-4">
              Detailed insights into specific neighborhoods, submarkets, or investment districts.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Hyperlocal data</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Development pipeline</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Demographic shifts</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-muted rounded-lg p-6 bg-gray-50"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Custom Property Analysis</h3>
            <p className="text-sm text-gray-600 mb-4">
              Tailored analysis for specific investment opportunities or property types.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Investment forecasting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Competitive positioning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Risk assessment</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </ServicePageTemplate>
  );
};

export default MarketAnalysis;
