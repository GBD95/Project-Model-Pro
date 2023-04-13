import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("sr");

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  return (
    <>
      <select
        className="bg-neutral-700"
        value={language}
        onChange={handleLanguageChange}
      >
        <option className="pl-[60px]" value="sr">
          SRB
        </option>
        <option value="en">ENG</option>
      </select>
    </>
  );
};

export default LanguageSwitcher;
