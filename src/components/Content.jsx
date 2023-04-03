import React from "react";
import AboutUs from "./content/AboutUs";
import ContactUs from "./content/ContactUs";
import Partners from "./content/Partners";
import Services from "./content/Services";

const Content = () => {
  return (
    <div className='bg-neutral-900'>
      <Services />
      <AboutUs />
      <Partners />
      <ContactUs />
    </div>
  );
};

export default Content;
