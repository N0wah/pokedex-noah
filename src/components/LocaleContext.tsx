import React from 'react';

// context used to store the currently selected UI language and
// a setter to change it. Provided at the top level of the app so
// that any component can read or switch language without prop drilling.

type LocaleContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
} | null;

const LocaleContext = React.createContext<LocaleContextType>(null);

export const LocaleProvider = LocaleContext.Provider;

export const useLocale = () => {
  const locale = React.useContext(LocaleContext);
  if (!locale) {
    // guard against misuse outside provider
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return locale;
};

export { LocaleContext };
