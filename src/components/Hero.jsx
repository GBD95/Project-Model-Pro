import React from "react";
import styles from "../style";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={`${styles.flexCenter} flex-col  h-screen`}>
      <h1 className={`${styles.heading} my-4 text-6xl sm:text-7xl`}>
        {t("heroTitle")}
      </h1>
      <p className={`${styles.paragraphNormal} text-2xl sm:text-3xl my-4`}>
        {t("heroSubtitle")}
      </p>
    </section>
  );
};

export default Hero;
