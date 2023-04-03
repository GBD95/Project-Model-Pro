import React from "react";
import ServiceCards from "./Ui/ServiceCards";

const Services = () => {
  return (
    <section className='flex flex-wrap gap-5 items-center justify-center bg-neutral-900 p-10'>
      <ServiceCards />
      <ServiceCards />
      <ServiceCards />
    </section>
  );
};

export default Services;
