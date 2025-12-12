"use client";

import { useEffect } from "react";

interface HubSpotFormProps {
  portalId?: string;
  formId?: string;
  region?: string;
}

export function HubSpotForm({
  portalId = "147421224",
  formId = "e576c353-e5e7-435d-81f9-95afd27843d2",
  region = "eu1",
}: HubSpotFormProps) {
  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/147421224.js";
    script.defer = true;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    />
  );
}

