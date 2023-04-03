import React from "react";
import styles from "../../style";

const AboutUs = () => {
  return (
    <div className='text-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
      <h2 className={`${styles.heading}`}>About Us</h2>
      <p className={`${styles.paragraph} ${styles.textPadding}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam rem fugiat ut eos porro at,
        explicabo architecto nemo assumenda! Quasi rerum dignissimos aliquid autem ducimus ipsam
        odio iste nostrum sed?
      </p>
    </div>
  );
};

export default AboutUs;
