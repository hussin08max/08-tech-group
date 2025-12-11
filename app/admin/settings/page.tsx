"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AdminSettings() {
  const [footerText, setFooterText] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        setFooterText(data.footerText || "");
      });
  }, []);

  const handleSave = async () => {
    setLoading(true);
    setSaved(false);
    
    try {
      const response = await fetch("/api/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ footerText }),
      });

      if (response.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (error) {
      console.error("Error saving settings:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">الإعدادات</h1>

      <Card>
        <CardHeader>
          <CardTitle>إعدادات الموقع</CardTitle>
          <CardDescription>
            قم بتعديل النصوص والعناصر التي تظهر في الموقع
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="footerText">نص الفوتر (يظهر تحت الشعار)</Label>
            <Textarea
              id="footerText"
              value={footerText}
              onChange={(e) => setFooterText(e.target.value)}
              placeholder="أدخل النص الذي سيظهر في الفوتر تحت الشعار"
              rows={4}
            />
            <p className="text-sm text-muted-foreground">
              هذا النص سيظهر في قسم معلومات الشركة في الفوتر
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Button onClick={handleSave} disabled={loading}>
              {loading ? "جاري الحفظ..." : "حفظ التغييرات"}
            </Button>
            {saved && (
              <p className="text-sm text-green-600">تم الحفظ بنجاح!</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
