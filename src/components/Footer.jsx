import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="w-full bg-gray-100 pt-24 sm:pt-28 lg:pt-32 xl:pt-40 relative mt-28 sm:mt-32 lg:mt-40">

      {/* NEWSLETTER BAR */}
      <div className="absolute top-0 left-0 w-full -translate-y-1/2 z-10 px-4 sm:px-6 lg:px-12">
        <div className="bg-black rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-10 xl:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 max-w-[1280px] mx-auto">
          
          <h2 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold leading-tight max-w-md">
            STAY UPTO DATE ABOUT <br className="hidden sm:block" />
            OUR LATEST OFFERS
          </h2>

          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-80 xl:w-96">
            <div className="flex items-center bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3">
              <FiMail className="text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="outline-none w-full text-xs sm:text-sm"
              />
            </div>
            <button className="bg-white rounded-full py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>

        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-20">

        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 lg:gap-12">

          {/* LEFT: LOGO + DESCRIPTION */}
          <div className="max-w-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4">SHOP.CO</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              We have clothes that suits your style and which you're proud to wear.
              From women to men.
            </p>

            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors">
                <FaGithub className="text-sm" />
              </a>
            </div>
          </div>

          {/* RIGHT: LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            
            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 lg:mb-5 tracking-wide">COMPANY</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <li className="cursor-pointer hover:text-black transition-colors">About</li>
                <li className="cursor-pointer hover:text-black transition-colors">Features</li>
                <li className="cursor-pointer hover:text-black transition-colors">Works</li>
                <li className="cursor-pointer hover:text-black transition-colors">Career</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 lg:mb-5 tracking-wide">HELP</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <li className="cursor-pointer hover:text-black transition-colors">Customer Support</li>
                <li className="cursor-pointer hover:text-black transition-colors">Delivery Details</li>
                <li className="cursor-pointer hover:text-black transition-colors">Terms & Conditions</li>
                <li className="cursor-pointer hover:text-black transition-colors">Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 lg:mb-5 tracking-wide">FAQ</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <li className="cursor-pointer hover:text-black transition-colors">Account</li>
                <li className="cursor-pointer hover:text-black transition-colors">Manage Deliveries</li>
                <li className="cursor-pointer hover:text-black transition-colors">Orders</li>
                <li className="cursor-pointer hover:text-black transition-colors">Payments</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 lg:mb-5 tracking-wide">RESOURCES</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <li className="cursor-pointer hover:text-black transition-colors">Free eBooks</li>
                <li className="cursor-pointer hover:text-black transition-colors">Development Tutorial</li>
                <li className="cursor-pointer hover:text-black transition-colors">How to - Blog</li>
                <li className="cursor-pointer hover:text-black transition-colors">Youtube Playlist</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
          
          <span className="text-center sm:text-left">
            Shop.co © 2000–2023, All Rights Reserved
          </span>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-4 sm:h-5 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-4 sm:h-5 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 sm:h-5 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-4 sm:h-5 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-4 sm:h-5 object-contain" />
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
