import React from "react";
import { logo } from "../../assets";
import styles from "../../style";

const Footer = () => {
  return (
    <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex justify-center flex-col items-center'>
      <div className={`flex justify-center gap-6 mb-4 text-white ${styles.paragraphNormal}`}>
        <p>Home</p>
        <p>Services</p>
        <p>About Us</p>
        <p>Contact</p>
      </div>
      <p className={`${styles.paragraph} text-neutral-200`}>
        © 2023 Model Pro. All rights reserved
      </p>
      <img className=' w-36' src={`${logo}`} alt='' />
    </div>
  );
};

export default Footer;
