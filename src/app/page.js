'use client'
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Accounts from "./components/accounts"; // import Accounts component
import showmoreproj from "./components/showmoreproj";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAccounts, setShowAccounts] = useState(false); // toggle Accounts

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  // Conditional rendering for Accounts
  if (showAccounts) {
    return <Accounts onBack={() => setShowAccounts(false)} isDarkMode={isDarkMode} />
  }

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        goToAccounts={() => setShowAccounts(true)} // pass the callback
      />
      <Header goToAccounts={() => setShowAccounts(true)} isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
