"use client";

import React, { useContext, useEffect, useState } from 'react';
import { LocaleContext } from './LocaleContext';

/**
 * Drop‑down selector used in header for choosing the UI language.
 * Stores selection in local state and syncs with localStorage so
 * the choice persists across reloads. Also calls setLanguage from
 * context so that translations update throughout the app.
 */
function SelectLanguage() {
  const { setLanguage } = useContext(LocaleContext)!;
  const [language, setLocalLanguage] = useState<string>('en');

  // after mount, read persisted choice and update state
  useEffect(() => {
    const stored = localStorage.getItem('language');
    if (stored) {
      setLocalLanguage(stored);
      setLanguage(stored);
    }
  }, [setLanguage]);

  // whenever language changes, keep localStorage in sync
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setLocalLanguage(value);
    setLanguage(value);
  };

  return (
    <div className="select-language">
      <select value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
        <option value="de">Deutsch</option>
        <option value="ja">日本語</option>
        <option value="it">Italiano</option>
        <option value="ko">한국어</option>
      </select>
    </div>
  );
}

export default SelectLanguage;
