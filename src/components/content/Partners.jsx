import React from "react";
import styles from "../../style";
import { useTranslation } from "react-i18next";
import { osiride, sigit, tervo, yugoimport } from "../../assets";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section id='partners' className={`${styles.sections}`}>
      <h2 className={`${styles.heading}`}>{t("partnersTitle")}</h2>
      <div className=''>
        <div className='flex flex-wrap gap-4 justify-center'>
          <img
            className={`${styles.partnersImages} min-w-[300px]`}
            src={`${sigit}`}
            alt='Logo of a partner company named Sigit'
          />
          <img
            className={`${styles.partnersImages}`}
            src={`${yugoimport}`}
            alt='Logo of a partner company named Yugoimport'
          />

          <img
            className={`${styles.partnersImages}`}
            src={`${osiride}`}
            alt='Logo of a partner company named Becchis Osiride'
          />
          <img
            className={`${styles.partnersImages}`}
            src={`${tervo}`}
            alt='Logo of a partner company named Zastava Tervo'
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
