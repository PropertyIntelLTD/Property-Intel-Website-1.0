import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Bell,
  Camera,
  Eye,
  Users,
  FileCheck,
  Fingerprint,
  DoorOpen,
  ShieldAlert,
  MonitorCheck,
  Server,
} from "lucide-react";

const features = [
  "Advanced electronic access control systems",
  "24/7 CCTV monitoring and surveillance",
  "Intruder detection and alarm systems",
  "Professional security personnel services",
  "Security risk assessment and planning",
  "Remote monitoring and management solutions",
];

const benefits = [
  {
    title: "Protect Your Investment",
    description:
      "Comprehensive security measures that safeguard your valuable property assets.",
  },
  {
    title: "Tenant Peace of Mind",
    description:
      "Enhanced safety features that attract and retain quality tenants.",
  },
  {
    title: "Reduce Insurance Costs",
    description:
      "Advanced security systems can lead to reduced insurance premiums.",
  },
  {
    title: "Prevent Unauthorized Access",
    description:
      "Sophisticated entry systems that control and monitor who enters your property.",
  },
  {
    title: "Rapid Incident Response",
    description:
      "Immediate notification and response to security breaches and emergencies.",
  },
  {
    title: "Detailed Security Reporting",
    description: "Regular reports on security events and system performance.",
  },
];

const faqItems = [
  {
    question:
      "What security systems do you recommend for residential properties?",
    answer:
      "For residential properties, we typically recommend a layered security approach including access control systems, perimeter protection, CCTV monitoring, and alarm systems. The specific configuration depends on your property size, location, and tenant requirements. Our comprehensive residential packages often include smart locks, doorbell cameras, motion detection lighting, and window/door sensors, all integrated with a mobile monitoring app for landlords and property managers.",
  },
  {
    question:
      "How do your security solutions integrate with property management systems?",
    answer:
      "Our security solutions seamlessly integrate with most property management platforms through secure APIs. This integration allows for centralized management of access credentials, automated tenant onboarding/offboarding, incident reporting tied to specific units, and synchronized maintenance access scheduling. We can connect with popular property management software to create a unified dashboard for both security and property operations.",
  },
  {
    question: "Do you offer ongoing maintenance for security systems?",
    answer:
      "Yes, we offer comprehensive maintenance programs that include regular inspections, preventative maintenance, software updates, immediate response to system failures, and 24/7 technical support. Our maintenance contracts typically include quarterly system checks, annual comprehensive audits, and priority response for any security incidents or equipment malfunctions. We also provide firmware and software updates to ensure your systems remain protected against the latest security vulnerabilities.",
  },
  {
    question: "What is the typical response time for security incidents?",
    answer:
      "Our monitored security solutions provide response times averaging 3-5 minutes for high-priority alerts. We maintain a network of local security personnel for physical response when needed, and our monitoring center operates 24/7 with redundant systems to ensure continuous coverage. For verified emergencies, we coordinate directly with local law enforcement to expedite response. All incidents are logged, categorized by severity, and followed up with detailed reports for property owners and managers.",
  },
  {
    question: "Can tenants have different access levels to security features?",
    answer:
      "Absolutely. Our access control systems support customizable permission levels for different user types. Property owners and managers receive full administrative access, while tenants can be granted permissions specific to their unit, common areas, and amenities. We can also create temporary access credentials for maintenance staff, visitors, or service providers with time-limited permissions. Our systems maintain detailed access logs for all entry points, providing complete visibility into property access patterns.",
  },
];

const securityFeatures = [
  {
    title: "Access Control",
    description: "Advanced electronic key systems and secure entry management",
    icon: <Lock className="w-6 h-6 text-primary" />,
  },
  {
    title: "CCTV Systems",
    description: "24/7 surveillance and monitoring solutions",
    icon: <Camera className="w-6 h-6 text-primary" />,
  },
  {
    title: "Alarm Systems",
    description: "State-of-the-art intruder detection and alert systems",
    icon: <Bell className="w-6 h-6 text-primary" />,
  },
  {
    title: "Security Personnel",
    description: "Professional security staff and concierge services",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
];

const securityServices = [
  {
    title: "Biometric Authentication",
    description:
      "Advanced fingerprint and facial recognition systems for high-security areas",
    icon: <Fingerprint className="w-6 h-6 text-primary" />,
  },
  {
    title: "Smart Entry Systems",
    description: "Keyless entry solutions with remote management capabilities",
    icon: <DoorOpen className="w-6 h-6 text-primary" />,
  },
  {
    title: "Security Audits",
    description: "Comprehensive assessment of current security vulnerabilities",
    icon: <FileCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Emergency Response",
    description:
      "Rapid reaction protocols for security incidents and emergencies",
    icon: <ShieldAlert className="w-6 h-6 text-primary" />,
  },
];

const Security = () => {
  return (
    <ServicePageTemplate
      title="Property Security Solutions"
      description="Comprehensive security solutions to protect your property investments and ensure peace of mind for all stakeholders"
      heroImage="https://images.unsplash.com/photo-1557597774-9d273605dfa9"
      features={features}
      benefits={benefits}
      faqItems={faqItems}
      ctaTitle="Enhance Your Property Security"
      ctaText="Get in touch with our security experts to discuss your specific requirements and receive a customized security solution."
      ctaButtonText="Contact Us Today"
      ctaButtonLink="/contact"
    >
      {/* Core Security Features Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Security Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
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
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advanced Security Services */}
      <div className="my-20 bg-muted/20 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">
          Advanced Security Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {securityServices.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Integrated Security Approach */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Integrated Security Approach
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Assessment</h3>
              <p className="text-gray-600">
                We conduct a thorough security assessment of your property to
                identify vulnerabilities and develop a customized security plan.
              </p>
            </motion.div>

            {/* Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-gray-600">
                Our expert team installs and configures advanced security
                systems tailored to your property's specific needs and
                requirements.
              </p>
            </motion.div>

            {/* Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MonitorCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Monitoring</h3>
              <p className="text-gray-600">
                Ongoing 24/7 monitoring and maintenance ensures your security
                systems remain effective and up-to-date at all times.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Security Technology Section */}
      <div className="my-20 bg-white p-8 rounded-lg border border-muted shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-6">
          Security Technology Platform
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our integrated security platform combines multiple technologies into a
          seamless system managed through a single interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6"
          >
            <div className="relative aspect-video bg-gradient-to-tr from-primary/20 to-primary/5 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <Server className="h-24 w-24 text-primary/40" />
              </div>
              <div className="relative z-10 bg-white/90 p-6 rounded-lg max-w-xs text-center">
                <h3 className="text-lg font-semibold mb-2">
                  Cloud-Based Management
                </h3>
                <p className="text-sm text-gray-600">
                  Access your security dashboard from anywhere with our secure
                  cloud platform
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">AI-Enhanced Surveillance</h3>
                <p className="text-sm text-gray-600">
                  Smart cameras with behavior analysis and anomaly detection
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Instant Alerts</h3>
                <p className="text-sm text-gray-600">
                  Real-time notifications for security events and incidents
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">User Management</h3>
                <p className="text-sm text-gray-600">
                  Granular access control for tenants, staff, and service
                  providers
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default Security;
