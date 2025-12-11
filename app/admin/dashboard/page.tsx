"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Settings, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalContacts: 0,
    unreadContacts: 0,
  });

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          totalContacts: data.length,
          unreadContacts: data.filter((c: any) => !c.read).length,
        });
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">لوحة التحكم الرئيسية</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>إجمالي الطلبات</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalContacts}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>الطلبات غير المقروءة</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">{stats.unreadContacts}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>الإعدادات</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/admin/settings">
              <Button className="w-full">إدارة الإعدادات</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>إجراءات سريعة</CardTitle>
          <CardDescription>الوصول السريع إلى الأقسام الرئيسية</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Link href="/admin/orders">
            <Button>عرض جميع الطلبات</Button>
          </Link>
          <Link href="/admin/settings">
            <Button variant="outline">تعديل الإعدادات</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
