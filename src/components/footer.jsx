import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white py-8">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
        {/* About Company Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
          <h4 className="text-lg font-bold mb-2">About Company</h4>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* For Candidates Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
          <h4 className="text-lg font-bold mb-2">For Candidates</h4>
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link to="/find_job">Search Jobs</Link>
            </li>
            <li className="mb-2">
              <Link to="#">Submit Resume</Link>
            </li>
            <li className="mb-2">
              <Link to="#">Career Resources</Link>
            </li>
          </ul>
        </div>

        {/* For Company Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
          <h4 className="text-lg font-bold mb-2">For Company</h4>
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link to="#">Post a Job</Link>
            </li>
            <li className="mb-2">
              <Link to="#">Employer Resources</Link>
            </li>
            <li className="mb-2">
              <Link to="#">Recruitment Services</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link to="/contact_us">Contact Us</Link>
            </li>
            <li className="mb-2">
              <Link to="#">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="#">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
