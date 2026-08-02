import React, { createContext, useState, useEffect } from 'react';

// 1. Kreye Context la
export const ThemeContext = createContext();

// 2. Kreye Provider la ki ap vlope tout aplikasyon an
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Fonksyon pou chanje ant light ak dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Chak fwa theme an chanje, li chanje attribut data-theme sou tag HTML la
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};