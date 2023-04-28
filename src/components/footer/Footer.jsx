import React from "react";
import { logo } from "../../assets";
import styles from "../../style";
import { useTranslation } from "react-i18next";
import NavLinksFooter from "../content/Ui/NavLinksFooter";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex justify-center flex-col text-white border-t-2 border-white items-center '>
      <div className={`flex flex-wrap justify-center gap-6 mb-4  ${styles.paragraphNormal}`}>
        {t("navLinks", { returnObjects: true }).map((link) => (
          <NavLinksFooter key={link.title} title={link.title} path={link.path} />
        ))}
      </div>
      <p className={`${styles.paragraph} text-neutral-200`}>
        © 2023 Model Pro. All rights reserved
      </p>
      <img className='w-[300px] mt-10' src={logo} alt='' />
    </footer>
  );
};

export default Footer;
