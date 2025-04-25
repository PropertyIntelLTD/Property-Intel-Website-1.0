
import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import { 
  CreditCard, 
  Wallet, 
  Clock, 
  Shield, 
  Smartphone, 
  Bell, 
  BarChart, 
  Landmark, 
  ChevronUp, 
  CheckCircle,
  CalendarClock,
  Receipt
} from "lucide-react";

const features = [
  "Multiple payment methods",
  "Automated recurring payments",
  "Secure transaction processing",
  "Mobile payment options",
  "Payment reminders and alerts",
  "Complete payment history"
];

const benefits = [
  {
    title: "Convenience",
    description: "Pay rent anytime, anywhere with online and mobile payment options.",
  },
  {
    title: "Never Miss a Payment",
    description: "Automated payments and reminders help you stay on top of due dates.",
  },
  {
    title: "Enhanced Security",
    description: "Advanced encryption and secure processing protect your payment information.",
  },
  {
    title: "Payment Tracking",
    description: "Access your complete payment history for taxes and record keeping.",
  },
  {
    title: "Faster Processing",
    description: "Digital payments are processed quickly with immediate confirmation.",
  },
  {
    title: "Financial Planning",
    description: "Better budgeting with predictable, scheduled rent payments.",
  },
];

const faqItems = [
  {
    question: "What payment methods do you accept?",
    answer: "We offer a variety of payment methods to suit your preferences and banking arrangements. These include direct bank transfers/ACH, debit cards, credit cards (Visa, MasterCard, American Express, and Discover), digital wallets (Apple Pay, Google Pay, PayPal), and check scanning through our mobile app. For tenants who prefer traditional methods, we still accept physical checks and money orders at our office locations. All digital payment methods are processed through our secure payment gateway that meets the highest industry security standards."
  },
  {
    question: "How do I set up automatic payments?",
    answer: "Setting up automatic payments is simple through our tenant portal. After logging in, navigate to the 'Payments' section and select 'Automatic Payments.' Choose your preferred payment method, specify the payment date (on or before the rent due date), and confirm your selection. You can set the payment to continue indefinitely or for a specific period. The system will send confirmation when your automatic payment is set up and reminders before each scheduled payment. You can modify or cancel automatic payments at any time through the portal. For assistance, our support team is available via live chat, email, or phone."
  },
  {
    question: "Is there a fee for online rent payments?",
    answer: "We've structured our payment options to minimize fees while offering maximum convenience. ACH transfers (direct bank transfers) are completely free of charge. Debit card payments incur a minimal processing fee of $1.95 per transaction. Credit card payments have a 2.9% processing fee (industry standard for credit card processing). Digital wallet payments typically follow the same fee structure as the underlying payment method used. We believe in transparency - all applicable fees are clearly displayed before you confirm any payment. To avoid fees completely, we recommend setting up automatic ACH payments directly from your bank account."
  },
  {
    question: "How secure is the online payment system?",
    answer: "Your financial security is our top priority. Our payment system implements bank-level security with 256-bit encryption for all transactions. We're PCI DSS compliant, meeting the most rigorous international security standards for handling card information. We utilize tokenization technology, meaning your actual payment details are never stored in our system. All connections to the payment portal are secured with SSL/TLS encryption, and we employ two-factor authentication for account access. Our system undergoes regular security audits and penetration testing by independent cybersecurity firms. In the unlikely event of any suspicious activity, our fraud monitoring system will alert both you and our security team immediately."
  },
  {
    question: "When will my payment be reflected in my account?",
    answer: "Payment processing times vary slightly depending on your chosen payment method. ACH transfers (direct bank payments) typically process within 1-3 business days. Debit and credit card payments are authorized immediately but may take 24-48 hours to fully process. Digital wallet payments generally process within 24 hours. Once processed, your payment is immediately reflected in your tenant portal account with a confirmation number. If your payment is scheduled close to the due date, we recommend allowing additional processing time to avoid late fees. Our system timestamps all payment submissions, so even if processing extends beyond the due date, we'll have record of your timely payment initiation."
  }
];

const paymentMethods = [
  {
    title: "Credit & Debit Cards",
    description: "Pay with any major credit or debit card for quick and convenient transactions",
    icon: <CreditCard className="w-6 h-6 text-primary" />,
  },
  {
    title: "Bank Transfers",
    description: "Direct bank transfers with no additional fees for cost-effective payments",
    icon: <Landmark className="w-6 h-6 text-primary" />,
  },
  {
    title: "Mobile Payments",
    description: "Apple Pay, Google Pay and other digital wallet payment options",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
  },
  {
    title: "Recurring Payments",
    description: "Set up automatic payments to ensure your rent is always paid on time",
    icon: <CalendarClock className="w-6 h-6 text-primary" />,
  },
];

const RentPayment = () => {
  return (
    <ServicePageTemplate
      title="Rent Payment Services"
      description="Simple, secure, and convenient rent payment solutions for tenants"
      heroImage="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Start Paying Rent Online"
      ctaText="Make rent payments easier with our secure online payment system."
      ctaButtonText="Get Started"
      ctaButtonLink="/contact"
    >
      {/* Payment Methods Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Payment Options</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {method.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create Your Account</h3>
                  <p className="text-gray-600 mb-4">
                    Sign up for our tenant portal with your email address and create a secure password.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-md">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Simple registration process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Secure account creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Immediate account access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Add Payment Method</h3>
                  <p className="text-gray-600 mb-4">
                    Enter your preferred payment method details in our secure payment system.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-md">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Multiple payment options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Encrypted data storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Save multiple payment methods</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Schedule Payments</h3>
                  <p className="text-gray-600 mb-4">
                    Make a one-time payment or set up recurring automatic payments for convenience.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-md">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Flexible scheduling options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Email payment confirmations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Payment reminder notifications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Track Your Payments</h3>
                  <p className="text-gray-600 mb-4">
                    Access your complete payment history and download payment receipts anytime.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-md">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Complete payment history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Downloadable receipts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span>Annual payment summaries</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Additional Features */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-4">Additional Features</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our rent payment system includes multiple features designed to make your rental experience seamless.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted text-center"
          >
            <div className="mx-auto mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Bell className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Payment Reminders</h3>
            <p className="text-gray-600">Customizable alerts to ensure you never miss a rent payment</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted text-center"
          >
            <div className="mx-auto mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Spending Analytics</h3>
            <p className="text-gray-600">Track your rental expenses with detailed spending analytics</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-muted text-center"
          >
            <div className="mx-auto mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Receipt className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Receipts</h3>
            <p className="text-gray-600">Instantly generated digital receipts for all your payments</p>
          </motion.div>
        </div>
      </div>
      
      {/* Security Section */}
      <div className="my-20 bg-white p-8 rounded-lg shadow-md border border-muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Bank-Level Security</h2>
            <p className="text-gray-600 mb-6">
              Our payment platform uses the highest levels of security and encryption to protect your personal and financial information.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">256-bit Encryption</h3>
                  <p className="text-sm text-gray-600">Military-grade encryption for all transactions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">PCI Compliance</h3>
                  <p className="text-sm text-gray-600">Adherence to the highest payment security standards</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <ChevronUp className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Fraud Prevention</h3>
                  <p className="text-sm text-gray-600">Advanced fraud detection and prevention systems</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/10 rounded-full opacity-30 animate-ping"></div>
              <div className="absolute inset-4 bg-primary/20 rounded-full opacity-60"></div>
              <div className="absolute inset-8 bg-primary/30 rounded-full"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Shield className="w-20 h-20 md:w-24 md:h-24 text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default RentPayment;
