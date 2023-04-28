import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { flagRs, flagGb } from "../../assets";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("sr");

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  return (
    <div className='flex flex-wrap gap-4  md:border-l-2 p-2'>
      <div className='flex gap-2'>
        <img className=' rounded-full w-8 md:w-6 md:rounded-none' src={`${flagRs}`} alt='' />
        <button
          className={`${language === "sr" ? "text-secondary" : "text-white"} md:text-base`}
          onClick={handleLanguageChange}
          value={`sr`}
        >
          SR
        </button>
      </div>
      <div className='flex gap-2'>
        <img className=' rounded-full w-8 md:w-6 md:rounded-none' src={`${flagGb}`} alt='' />
        <button
          className={`${language === "en" ? "text-secondary" : "text-white"} md:text-base`}
          onClick={handleLanguageChange}
          value={`en`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
