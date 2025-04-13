import {
  FaMapMarkerAlt,
  FaLink,
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div>
            <div>
              <h5 className="text-xl font-semibold flex items-center gap-2">
                <FaMapMarkerAlt /> Contact Details
              </h5>
              <address className="mt-4 not-italic text-sm">
                <strong>Address:</strong>
                <br />
                Gyelyong Tshokhang, Langjophakha,
                <br />
                Thimphu, Bhutan
              </address>
              <p className="mt-3 text-sm">
                <strong>Call Us:</strong>
                <br />
                NAB: +(975) 2-322729
                <br />
                NCB: +(975) 2-337371
              </p>
              <p className="mt-3 text-sm">
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:nab@nab.gov.bt"
                  className="text-blue-400 hover:underline"
                >
                  nab@nab.gov.bt
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div>
              <h5 className="text-xl font-semibold flex items-center gap-2">
                <FaLink /> Quick Links
              </h5>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  ["https://parliament.bt/home", "Home"],
                  [
                    "https://parliament.bt/about-parliament",
                    "About Parliament",
                  ],
                  [
                    "https://parliament.bt/system-of-government",
                    "System of Government",
                  ],
                  [
                    "https://parliament.bt/visit-parliament",
                    "Visit Parliament",
                  ],
                  ["https://parliament.bt/faqs", "FAQs"],
                ].map(([href, label], idx) => (
                  <li key={idx}>
                    <a
                      href={href}
                      className="hover:underline flex items-center gap-2"
                    >
                      <FaChevronRight /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <div>
              <h5 className="text-xl font-semibold flex items-center gap-2">
                <FaShareAlt /> Connect With Us
              </h5>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-blue-400">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaYoutube />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaInstagram />
                </a>
              </div>

              <div className="mt-6">
                <h6 className="text-base flex items-center gap-2">
                  <FaEnvelope /> Subscribe to Updates
                </h6>
                <form className="mt-3">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="p-2 rounded-l-md w-full text-black"
                    />
                    <button
                      type="button"
                      className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 mt-10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-2 md:mb-0 text-center md:text-left">
              © 2025 Parliament of Bhutan. All Rights Reserved.
            </div>
            <div className="space-x-4 text-center md:text-right">
              <a
                href="https://parliament.bt/topic/privacy"
                className="hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="https://parliament.bt/topic/terms"
                className="hover:underline"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
