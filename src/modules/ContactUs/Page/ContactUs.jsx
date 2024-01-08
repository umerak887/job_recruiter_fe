import ContactForm from "../component/ContactForm.jsx";
import Heading from "../component/Heading.jsx";
import Information from "../component/Information.jsx";
import Map from "../component/Map.jsx";

import React from "react";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-12 p-5 gap-4">
      <div className="col-span-12 ">
        <Heading />
      </div>
      <div className="col-span-6">
        <ContactForm />
      </div>
      <div className="col-span-6">
        <Information />
      </div>
      <div className="col-span-12">
        <Map />
      </div>
    </div>
  );
};

export default ContactUs;
