import React, { useState } from "react";

import { logo, flagRs } from "../assets/index";
import styles from "../style";

const Header = (props) => {
  const [Toggle, setToggle] = useState(true);
  const menuButtonToggle = () => {
    console.log("Clicked");
  };
  return (
    <header
      className={`${styles.flexCenter} justify-between ${styles.paragraphNormal} p-6 border-b-2 bg-gradient-to-b from-black via-black`}
    >
      <img className=' h-5 w-auto xs:h-6 md:h-7' src={`${logo}`} alt='' />
      <nav className='flex gap-20'>
        <button
          className='md:hidden flex'
          onClick={() => {
            setToggle(!Toggle);
          }}
        >
          {Toggle ? (
            <ion-icon name='menu-outline' size='large'></ion-icon>
          ) : (
            <ion-icon name='close-outline' size='large'></ion-icon>
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
          <li className={`flex justify-between items-center mt-4`}>
            <button className='text-base rounded-md bg-neutral-800 p-1 mr-4 border border-natural-30'>
              SRB
            </button>
            <button className='text-base rounded-md bg-neutral-800 p-1 border border-natural-30'>
              ENG
            </button>
          </li>
        </ul>

        <ul className={`hidden md:flex xs:gap-4 ${styles.navLinks}`}>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Partners</li>
          <li>Contact us</li>
          <li>
            <select className='bg-neutral-700' name='' id=''>
              <option value='srb' key=''>
                <div>
                  <img className='w-[10px] h-3' src={`${flagRs}`} alt='' />
                </div>
              </option>
              <option value='srb' key=''>
                ENG
              </option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
