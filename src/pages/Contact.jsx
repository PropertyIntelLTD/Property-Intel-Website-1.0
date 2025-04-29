import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacyPolicy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { toast } = useToast();

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    if (submitStatus) {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    if (!formData.subject) {
      setErrorMessage("Please select a subject");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message");
      return false;
    }
    if (!formData.privacyPolicy) {
      setErrorMessage("Please agree to our privacy policy");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrorMessage("");
    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([{ 
          name: formData.name, 
          email: formData.email, 
          message: formData.message,
          status: 'new',
          ...(formData.subject && { subject: formData.subject }),
          ...(formData.phone && { phone: formData.phone })
        }]);

      if (error) throw new Error(error.message || "Failed to send message");

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", privacyPolicy: false });
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        variant: "destructive",
        title: "Error Sending Message",
        description: error.message || "Failed to send message. Please try again later.",
      });
      setErrorMessage(error.message);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Get in touch with us for any inquiries about our properties or services.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg bg-white p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
          {submitStatus === "success" && (
            <Alert variant="success" className="mt-4">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Message Sent Successfully</AlertTitle>
              <AlertDescription>
                Thank you for your message. We'll get back to you soon!
              </AlertDescription>
            </Alert>
          )}
          {submitStatus === "error" && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {errorMessage}
              </AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone (optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="07XXX XXXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              >
                <option value="">Select a subject</option>
                <option value="Property Management">Property Management</option>
                <option value="Rental Inquiry">Rental Inquiry</option>
                <option value="Investment Advice">Investment Advice</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your message"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                id="privacy-policy"
                name="privacyPolicy"
                type="checkbox"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                required
              />
              <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
              </label>
            </div>
            <Button className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="animate-pulse mr-2">⟳</span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </motion.div>
        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <div className="mt-6 space-y-4">
              <p className="text-gray-500">
                <strong>Phone:</strong>
                <br />
                {CONTACT_INFO.phone}
              </p>
              <p className="text-gray-500">
                <strong>Email:</strong>
                <br />
                {CONTACT_INFO.email}
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
              <div className="mt-4 space-y-2">
                <p className="text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-500">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-500">Sunday: Closed</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
              <p className="text-gray-500">
                For urgent property issues outside of office hours:
                <br />
                <span className="font-medium">Emergency Hotline: 075 8647 9847</span>
              </p>
            </div>
          </div>
          {/* Social Links Section */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-sm bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <a href="https://www.linkedin.com/company/property-intel-ltd" target="_blank" rel="noopener noreferrer" 
                className="flex items-center text-gray-700 hover:text-primary transition-colors">
                {/* LinkedIn SVG */}
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://x.com/Property_intel_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
              >
                {/* Twitter/X Lucide Icon */}
                <Twitter className="w-6 h-6 mr-3" />
                Twitter / X
              </a>
              <a href="https://www.instagram.com/property_intel/" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors">
                {/* Instagram SVG */}
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=61560227601040" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors">
                {/* Facebook SVG */}
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-24 bg-gray-50 rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">How quickly will you respond to my inquiry?</h3>
            <p className="text-gray-600">We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please use our emergency contact number.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Do you offer virtual property tours?</h3>
            <p className="text-gray-600">Yes, we provide virtual tours for most of our properties. You can request a virtual tour by contacting our team.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">How do I schedule a property viewing?</h3>
            <p className="text-gray-600">You can schedule a viewing by contacting us through this form, calling our office, or using the booking feature on each property listing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">What areas do you cover?</h3>
            <p className="text-gray-600">We primarily operate in London and surrounding areas. For specific location inquiries, please contact our office.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
