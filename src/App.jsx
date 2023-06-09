import React, { useState, useEffect } from "react";

import Footer from "./components/footer/Footer";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("srb");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`src/constants/languages/${language}.json`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={` bg-neutral-900 text-white `}>
      <Header />
      <Hero />

      <div className=' mx-auto max-w-[1400px]'>
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default App;
