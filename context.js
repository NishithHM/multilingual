import React from 'react'
const language = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
const LanguageContext = React.createContext(language.light);
export default LanguageContext;