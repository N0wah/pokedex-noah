import React, { useContext, useEffect, useState } from "react";
import { LocaleContext } from "../LocaleContext.jsx";

function SelectLanguage() {
    const { setLanguage } = useContext(LocaleContext);
    const [language, setLocalLanguage] = useState(() => {
        return localStorage.getItem("language") || "en";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
        setLanguage(language);
    }, [language, setLanguage]);

    const handleChange = (event) => {
        setLocalLanguage(event.target.value);
    };

    return (
        <div className="select-language">
            <select value={language} onChange={handleChange}>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
            </select>
        </div>
    );
}

export default SelectLanguage;