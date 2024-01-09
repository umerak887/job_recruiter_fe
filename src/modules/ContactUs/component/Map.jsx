import React from "react";

const Map = () => {
  return (
    <div>
      <div className="mt-8">
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.930469313501!2d74.31644127504084!3d31.443581074249273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907d378895edd%3A0x3b7c67462f2b2950!2sKnowledge%20Streams!5e0!3m2!1sen!2s!4v1704562569653!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
      </div>
    </div>
  );
};

export default Map;
