
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Calculator, PieChart, LineChart } from "lucide-react";

const faqItems = [
  {
    question: "What is financial planning for property investment?",
    answer: "Financial planning for property investment involves evaluating your current financial position, setting clear investment goals, and creating a comprehensive strategy to achieve those goals. It includes risk assessment, tax planning, and cash flow optimization to ensure sustainable wealth building.",
  },
  {
    question: "How do you create a financial plan?",
    answer: "We start by assessing your current financial situation, including income, expenses, assets, and liabilities. Then, we work with you to define your investment goals and risk tolerance. Based on this information, we develop a tailored financial plan that includes strategies for investment, tax efficiency, and risk management.",
  },
  {
    question: "What are the benefits of financial planning?",
    answer: "Financial planning provides a clear roadmap for achieving your investment goals, helps manage risks, optimises tax efficiency, and ensures sustainable wealth accumulation. It also includes regular reviews to adapt to changes in your financial situation or market conditions.",
  },
  {
    question: "How often should I review my financial plan?",
    answer: "We recommend reviewing your financial plan annually or whenever there are significant changes in your financial situation, investment goals, or market conditions. Regular reviews ensure that your plan remains aligned with your objectives.",
  },
  {
    question: "Can financial planning help with tax efficiency?",
    answer: "Yes, financial planning includes strategies to optimise your investment structure for tax efficiency. This may involve leveraging tax deductions, structuring investments to minimise tax liabilities, and planning for long term tax benefits.",
  },
];


const FinancialPlanning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Financial Planning</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial planning and investment analysis for property investors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="rounded-lg w-full h-[400px] object-cover" 
                alt="Financial Planning Meeting" src="https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Expert Financial Planning</h2>
              <p className="text-gray-600 mb-6">
                Our financial planning service provides comprehensive analysis and 
                strategic planning to help you achieve your property investment goals. 
                We focus on creating sustainable wealth through property investment 
                while managing risks and optimising returns.
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg">
                Start Planning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Financial Planning Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-white shadow-sm"
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
      </section>

      {/* Planning Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Planning Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of Financial Planning
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* FAQ Section */}
<section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Financial Future?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let our expert financial planners help you create a comprehensive strategy 
            for your property investments.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

const features = [
  "Comprehensive financial analysis",
  "Investment return projections",
  "Risk assessment and management",
  "Tax planning strategies",
  "Cash flow optimisation",
  "Retirement planning",
];

const services = [
  {
    title: "Financial Analysis",
    description: "Detailed analysis of your current financial position and investment potential.",
    icon: <Calculator className="w-6 h-6 text-primary" />,
  },
  {
    title: "Investment Planning",
    description: "Strategic planning for optimal property investment allocation.",
    icon: <PieChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Performance Tracking",
    description: "Regular monitoring and adjustment of your investment performance.",
    icon: <LineChart className="w-6 h-6 text-primary" />,
  },
];

const process = [
  {
    title: "Initial Assessment",
    description: "Evaluate current financial position",
  },
  {
    title: "Goal Setting",
    description: "Define clear financial objectives",
  },
  {
    title: "Strategy Development",
    description: "Create comprehensive plan",
  },
  {
    title: "Implementation",
    description: "Execute and monitor progress",
  },
];

const benefits = [
  {
    title: "Clear Direction",
    description: "Get a clear roadmap for achieving your property investment goals.",
  },
  {
    title: "Risk Management",
    description: "Identify and mitigate potential risks in your investment strategy.",
  },
  {
    title: "Tax Efficiency",
    description: "Optimize your investment structure for tax efficiency.",
  },
  {
    title: "Wealth Building",
    description: "Create a sustainable strategy for long-term wealth accumulation.",
  },
  {
    title: "Regular Reviews",
    description: "Ongoing monitoring and adjustment of your financial plan.",
  },
  {
    title: "Expert Guidance",
    description: "Access to experienced financial planners and property investment experts.",
  },
];



export default FinancialPlanning;
