import React, { Suspense, useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import CookieConsent from "@/components/CookieConsent";

const Navbar = React.lazy(() => import("@/components/Navbar"));

const Layout = ({ children }) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 border-t-4 border-primary rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-600">Loading Property Intel...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Suspense fallback={<header className="h-20" aria-label="Loading navigation"></header>}>
        <header role="banner">
          <Navbar />
        </header>
      </Suspense>
      
      <motion.main 
        role="main"
        className="flex-1 pt-20"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        id="main-content"
        tabIndex="-1"
      >
        {children}
      </motion.main>
      
      <footer role="contentinfo">
        <Footer />
      </footer>
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-50 hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ChevronUp className="h-6 w-6" />
            <span className="sr-only">Scroll back to top</span>
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Skip to content link removed */}
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
};

export default Layout;
