import React from "react";
import styles from "../style";

const Hero = () => {
  return (
    <section className={`${styles.flexCenter} flex-col  h-screen`}>
      <h1 className={`${styles.heading} my-4 text-6xl sm:text-7xl`}>What do you do?</h1>
      <p className={`${styles.paragraphNormal} text-2xl sm:text-3xl my-4`}>How can you help me</p>
    </section>
  );
};

export default Hero;
