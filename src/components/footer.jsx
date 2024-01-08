import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-300 text-white  py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
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
                <a href="#">Search Jobs</a>
              </li>
              <li className="mb-2">
                <a href="#">Submit Resume</a>
              </li>
              <li className="mb-2">
                <a href="#">Career Resources</a>
              </li>
            </ul>
          </div>

          {/* For Company Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
            <h4 className="text-lg font-bold mb-2">For Company</h4>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#">Post a Job</a>
              </li>
              <li className="mb-2">
                <a href="#">Employer Resources</a>
              </li>
              <li className="mb-2">
                <a href="#">Recruitment Services</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
