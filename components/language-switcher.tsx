"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";
import { languages } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import ReactCountryFlag from "react-country-flag";
import { motion, AnimatePresence } from "framer-motion";

// Map language codes to country codes for flags
const languageToCountry: Record<string, string> = {
  en: "GB", // English - Great Britain
  ar: "SA", // Arabic - Saudi Arabia
  hi: "IN", // Hindi - India
  fr: "FR", // French - France
  es: "ES", // Spanish - Spain
  zh: "CN", // Chinese - China
  ur: "PK", // Urdu - Pakistan
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === language);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 rounded-lg hover:bg-accent transition-all duration-200 border border-transparent hover:border-border w-10 h-10"
        aria-label="Change language"
      >
        <ReactCountryFlag
          countryCode={languageToCountry[language] || "GB"}
          svg
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "4px",
          }}
          title={currentLanguage?.name}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 bg-background border rounded-xl shadow-xl z-50 overflow-hidden backdrop-blur-sm"
            >
              <div className="py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full text-right px-4 py-3 text-sm flex items-center gap-3 hover:bg-accent transition-all duration-150 ${
                      language === lang.code 
                        ? "bg-primary/10 font-semibold border-r-2 border-primary" 
                        : ""
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={languageToCountry[lang.code] || "GB"}
                      svg
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "4px",
                      }}
                      title={lang.name}
                    />
                    <span className="flex-1">{lang.name}</span>
                    {language === lang.code && (
                      <span className="text-primary text-lg">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
