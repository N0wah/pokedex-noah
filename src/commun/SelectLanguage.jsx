import React from "react";

function SelectLanguage() {
    return (
        <div className="select-language">
            <select>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
            </select>
        </div>
    );
}

export default SelectLanguage;