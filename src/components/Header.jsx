import React, { useState } from "react";

import { logo, flagRs } from "../assets/index";
import styles from "../style";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./content/LanguageSwitcher";

const Header = (props) => {
  const [Toggle, setToggle] = useState(true);
  const menuButtonToggle = () => {
    console.log("Clicked");
  };
  return (
    <header
      className={`${styles.paragraphNormal} p-6 border-b-2 bg-gradient-to-b from-black via-black`}
    >
      <div
        className={`${styles.flexCenter} justify-between mx-auto max-w-screen-lg`}
      >
        <img className=" h-5 w-auto xs:h-6 md:h-7" src={`${logo}`} alt="" />
        <nav className="flex gap-20">
          <button
            className="md:hidden flex"
            onClick={() => {
              setToggle(!Toggle);
            }}
          >
            {Toggle ? (
              <ion-icon name="menu-outline" size="large"></ion-icon>
            ) : (
              <ion-icon name="close-outline" size="large"></ion-icon>
            )}
          </button>
          <ul
            className={`${
              Toggle ? "hidden" : "flex"
            } bg-neutral-700 text-white  absolute top-28 right-6 p-4 flex-col justify-center items-center rounded-lg border border-natural-30`}
          >
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Partners</li>
            <li>Contact us</li>
            <li className="flex justify-between items-center mt-4">
              <LanguageSwitcher />
            </li>
          </ul>

          <ul className={`hidden md:flex xs:gap-4 ${styles.navLinks}`}>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Partners</li>
            <li>Contact us</li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
