"use client";

import React, { useEffect } from "react";
import { US, DE } from "country-flag-icons/react/3x2";

export default function LanguageSwitch() {
  const [flag, setFlag] = React.useState("US");

  useEffect(() => {
    if (window.location.pathname.includes("/de")) {
      setFlag("DE");
    } else {
      setFlag("US");
    }
  }, []);

  const changeLanguage = () => {
    if (window.location.pathname.includes("/de")) {
      window.location.pathname = window.location.pathname.replace("/de", "");
      setFlag("US");
    } else {
      window.location.pathname = "/de" + window.location.pathname;
      setFlag("DE");
    }
  };

  return (
    <button
      className="fixed top-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-[999]"
      onClick={changeLanguage}
    >
      {flag === "US" ? (
        <US className="w-[2rem] h-[2rem]" />
      ) : (
        <DE className="w-[2rem] h-[2rem]" />
      )}
    </button>
  );
}
