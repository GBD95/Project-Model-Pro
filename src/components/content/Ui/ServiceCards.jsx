import React from "react";
import styles from "../../../style";

const ServiceCards = () => {
  return (
    <div className=' w-60 bg-neutral-700 flex flex-col gap-4 justify-center items-center rounded-lg border border-natural-30'>
      <img className=' rounded-md' src='src\assets\images\websiteplanet-dummy-400X400.png' alt='' />

      <div className='pb-4'>
        <h3 className={`${styles.serviceTitle}`}>Service1</h3>
        <p className={`${styles.serviceDescription}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad libero odio beatae at
        </p>
      </div>
    </div>
  );
};

export default ServiceCards;
