"use client";

import { useEffect, useRef } from "react";

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  target?: string;
}

export function HubSpotForm({
  portalId,
  formId,
  region = "na1",
  target,
}: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: target || formRef.current,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [portalId, formId, region, target]);

  return <div ref={formRef} />;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target?: string | HTMLElement;
        }) => void;
      };
    };
  }
}

