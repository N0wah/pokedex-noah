"use client";

import React, { useState } from 'react';
import { LocaleProvider } from './LocaleContext';

interface Props {
  children: React.ReactNode;
}

// client-side wrapper to hold locale state since server components cannot
// use hooks.  This component can be used in the root layout.
export default function LocaleProviderWrapper({ children }: Props) {
  const [language, setLanguage] = useState('en');
  return (
    <LocaleProvider value={{ language, setLanguage }}>
      {children}
    </LocaleProvider>
  );
}
