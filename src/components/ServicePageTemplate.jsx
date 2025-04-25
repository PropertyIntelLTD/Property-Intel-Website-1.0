import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Reusable template for service detail pages
 * 
 * @param {Object} props
 * @param {string} props.title - Service title
 * @param {string} props.description - Short service description
 * @param {string} props.heroImage - URL for hero image
 * @param {Array} props.features - List of features/benefits
 * @param {Array} props.benefits - Array of benefit objects with title and description
 * @param {Array} props.faqItems - Array of FAQ objects with question and answer
 * @param {string} props.ctaTitle - Call to action title
 * @param {string} props.ctaText - Call to action text
 * @param {string} props.ctaButtonText - Call to action button text
 * @param {string} props.ctaButtonLink - Call to action button link
 * @param {React.ReactNode} props.children - Additional content
 */
const ServicePageTemplate = ({ 
  title, 
  description, 
  heroImage, 
  features = [], 
  benefits = [],
  faqItems = [],
  ctaTitle = "Ready to Get Started?",
  ctaText = "Contact our team today to learn more about our services and how we can help you.",
  ctaButtonText = "Contact Us",
  ctaButtonLink = "/contact",
  children 
}) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                className="rounded-lg w-full h-[400px] object-cover shadow-lg"
                alt={title}
                src={heroImage}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">About This Service</h2>
              
              {features.length > 0 && (
                <ul className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
              
              <Link to={ctaButtonLink}>
                <Button size="lg" className="mt-4">
                  {ctaButtonText} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Additional Content */}
          {children}

          {/* Benefits Section */}
          {benefits.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                Benefits of Our {title}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-primary">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* FAQ Section */}
          {faqItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24"
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6 border border-muted rounded-lg p-6 bg-white"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">{ctaTitle}</h2>
            <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
              {ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ctaButtonLink}>
                <Button size="lg" className="gap-2 px-8">
                  <Mail className="h-4 w-4" />
                  Email Us
                </Button>
              </Link>
              <Link to="/contact#phone">
                <Button size="lg" variant="outline" className="gap-2 px-8">
                  <Phone className="h-4 w-4" />
                  Call Us
                </Button>
              </Link>
            </div>
            
            {/* Quick Links */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link to="/services" className="flex items-center text-primary hover:text-primary/80 text-sm">
                <ExternalLink className="h-4 w-4 mr-1" /> All Services
              </Link>
              <Link to="/properties" className="flex items-center text-primary hover:text-primary/80 text-sm">
                <ExternalLink className="h-4 w-4 mr-1" /> Browse Properties
              </Link>
              <Link to="/about" className="flex items-center text-primary hover:text-primary/80 text-sm">
                <ExternalLink className="h-4 w-4 mr-1" /> About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;