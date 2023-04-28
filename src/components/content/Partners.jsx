import React from "react";
import styles from "../../style";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section id='partners' className={`${styles.sections}`}>
      <h2 className={`${styles.heading}`}>{t("partnersTitle")}</h2>
      <div className=''>
        <div className='flex flex-wrap gap-4 justify-center'>
          <img
            className={`${styles.partnersImages} min-w-[300px]`}
            src='src\assets\images\logo_sigit_top.png'
            alt=''
          />
          <img
            className={`${styles.partnersImages}`}
            src='src\assets\images\yugoimport-logo.svg'
            alt=''
          />

          <img
            className={`${styles.partnersImages}`}
            src='src\assets\images\logo_temp.png'
            alt=''
          />
          <img
            className={`${styles.partnersImages}`}
            src='src\assets\images\zastava-tervo.svg'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
