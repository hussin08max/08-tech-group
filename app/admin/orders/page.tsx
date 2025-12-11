"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, Trash2, Check } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export default function AdminOrders() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contacts");
      const data = await response.json();
      setContacts(data.sort((a: Contact, b: Contact) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ));
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await fetch(`/api/contacts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ read: true }),
      });
      fetchContacts();
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا الطلب؟")) return;
    
    try {
      await fetch(`/api/contacts/${id}`, {
        method: "DELETE",
      });
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-8">جاري التحميل...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">طلبات المراسلة</h1>

      {contacts.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">لا توجد طلبات حالياً</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <Card
              key={contact.id}
              className={!contact.read ? "border-blue-500 border-2" : ""}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <span>{contact.name}</span>
                      {!contact.read && (
                        <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded">
                          جديد
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {new Date(contact.createdAt).toLocaleString("ar-SA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!contact.read && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => markAsRead(contact.id)}
                      >
                        <Check className="h-4 w-4 ml-2" />
                        تم القراءة
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteContact(contact.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-primary hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
                {contact.phone && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-primary hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                )}
                <div className="flex items-start space-x-2 text-sm">
                  <MessageSquare className="h-4 w-4 text-muted-foreground mt-1" />
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {contact.message}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
