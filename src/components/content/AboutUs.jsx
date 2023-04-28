import React from "react";
import styles from "../../style";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section id='about' className={`${styles.sections} `}>
      <div className='bg-neutral-700 rounded-lg p-5'>
        <h2 className={`${styles.heading}`}>{t("aboutTitle")}</h2>
        <p className={`${styles.paragraph} ${styles.textPadding}`}>{t("aboutDescr")}</p>
      </div>
    </section>
  );
};

export default AboutUs;
