import React from "react";
import styles from "../../style";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";
import { phone, home, mail } from "../../assets/index";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <section id='contact' className={`${styles.sections} `}>
      <div className=''>
        <h2 className={`${styles.heading}`}>{t("contactTitle")}</h2>
        <p
          className={`${styles.paragraph} ${styles.textPadding} text-center text-neutral-400 sm:text-xl`}
        >
          {t("contactDescr")}
        </p>
        <div className='md:flex  w-full align-middle rounded-lg bg-neutral-600'>
          <div className='w-full md:w-5/12 p-6 bg-secondary rounded-lg'>
            <div className=''>
              <h3 className='mb-4 text-lg font-bold'>{t("contactInfo")}</h3>
              <div className='flex flex-col gap-10'>
                <div className='flex gap-4 mt-4'>
                  <img className='w-10' src={`${home}`} alt='' />
                  <div className='text-start'>
                    <h3>{t("adress")}</h3>
                    <p>Atinska 13/19, Kragujevac</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <img className='w-10' src={`${phone}`} alt='' />
                  <div className='text-start'>
                    <h3>{t("phone")}</h3>
                    <a href='tel:+38169699239'>069 699239</a>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <img className='w-10' src={`${mail}`} alt='' />
                  <div className='text-start'>
                    <h3>Email:</h3>
                    <a href='mailto:ivan.glavonjic@gmail.com'>ivan.glavonjic@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
