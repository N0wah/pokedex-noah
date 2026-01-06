import React from "react";

const LocaleContext = React.createContext(null);

export const LocaleProvider = LocaleContext.Provider;

export const useLocale = () => {
    const locale = React.useContext(LocaleContext);

    if (!locale) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return locale;
};

export { LocaleContext };
