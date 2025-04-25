import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Shield } from 'lucide-react';

const MembershipsSection = () => {
  const memberships = [
    {
      title: "National Association of Realtors",
      description: "Member since 2010, upholding the highest ethical standards in real estate.",
      icon: <Award className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Royal Institution of Chartered Surveyors",
      description: "Certified by RICS, ensuring professional property services worldwide.",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Property Ombudsman",
      description: "Member of the Property Ombudsman scheme, providing consumer protection.",
      icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
    },
  ];

  const certificates = [
    "/images/cert-nar.png",
    "/images/cert-rics.png",
    "/images/cert-tpo.png",
    "/images/cert-arla.png",
    "/images/cert-nrla.png",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Memberships & Certifications</h2>
          <p className="text-lg text-gray-600">
            We adhere to the highest standards in property management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {memberships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              {/* Placeholder div instead of the actual image since we don't have the images */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Certificate {index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipsSection;