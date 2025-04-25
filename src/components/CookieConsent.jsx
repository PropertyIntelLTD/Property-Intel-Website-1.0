import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-gray-900 p-4 text-white shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0">
        <div className="flex-1 text-center md:text-left">
          <p>
            We use cookies to enhance your experience on our site. By continuing to use our site, you consent to our use of cookies. 
            <Link 
              to="/privacy-policy"
              className="ml-1 underline hover:text-blue-300"
            >
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="rounded border border-white px-4 py-1 hover:bg-white hover:text-gray-900"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="rounded bg-blue-600 px-4 py-1 hover:bg-blue-700"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="flex items-center justify-center rounded-full p-1 hover:bg-gray-700"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;