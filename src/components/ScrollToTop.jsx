import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * ScrollToTop component that:
 * 1. Scrolls the page to the top whenever the route changes
 * 2. Shows a floating button to scroll to top when user scrolls down
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const prevPathRef = useRef(pathname);

  // Scroll to top when route changes
  useEffect(() => {
    // Only scroll if the path has actually changed (not on initial render)
    if (prevPathRef.current !== pathname) {
      console.log(`Route changed from ${prevPathRef.current} to ${pathname}. Scrolling to top.`);
      
      // Use both methods for better compatibility
      // Method 1: Standard scroll
      window.scrollTo(0, 0);
      
      // Method 2: Smooth scroll with delay to ensure it works after render
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        
        // Also try to scroll the document body and documentElement
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 100);
      
      // Update previous path
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  // Show/hide scroll button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top on button click
  const scrollToTop = useCallback(() => {
    // Use multiple methods for better compatibility across browsers
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <>
      {/* This component is rendered on every route change */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-50 hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default ScrollToTop;