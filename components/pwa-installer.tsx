"use client";

import { useEffect } from "react";

export function PWAInstaller() {
  useEffect(() => {
    // Register service worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const registerSW = () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            if (process.env.NODE_ENV === "development") {
              console.log("Service Worker registered:", registration);
            }
          })
          .catch((error) => {
            if (process.env.NODE_ENV === "development") {
              console.log("Service Worker registration failed:", error);
            }
          });
      };

      if (document.readyState === "complete") {
        registerSW();
      } else {
        window.addEventListener("load", registerSW);
      }

      return () => {
        window.removeEventListener("load", registerSW);
      };
    }
  }, []);

  return null;
}
