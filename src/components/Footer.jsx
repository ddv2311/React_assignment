import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-100 pt-32 md:pt-40 relative mt-40">

      {/* NEWSLETTER BAR */}
      <div className="absolute top-0 left-0 w-full -translate-y-1/2 z-10 px-4 md:px-12">
        <div className="bg-black rounded-2xl px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-[1280px] mx-auto">
          
          <h2 className="text-white text-2xl md:text-3xl font-extrabold leading-tight max-w-md">
            STAY UPTO DATE ABOUT <br />
            OUR LATEST OFFERS
          </h2>

          <div className="flex flex-col gap-4 w-full md:w-96">
            <div className="flex items-center bg-white rounded-full px-5 py-3">
              <span className="text-gray-400 mr-3">✉️</span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="outline-none w-full text-sm"
              />
            </div>
            <button className="bg-white rounded-full py-3 text-sm font-medium">
              Subscribe to Newsletter
            </button>
          </div>

        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-20">

        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* LEFT: LOGO + DESCRIPTION */}
          <div className="max-w-sm">
            <h3 className="text-2xl font-extrabold mb-4">SHOP.CO</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              We have clothes that suits your style and which you're proud to wear.
              From women to men.
            </p>

            <div className="flex gap-4 text-lg">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaGithub />
            </div>
          </div>

          {/* RIGHT: LINKS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            
            <div>
              <h4 className="font-semibold mb-5">COMPANY</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5">HELP</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5">FAQ</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5">RESOURCES</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          
          <span className="text-center md:text-left">
            Shop.co © 2000–2023, All Rights Reserved
          </span>

          <div className="flex flex-wrap justify-center gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" className="h-5" />
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
