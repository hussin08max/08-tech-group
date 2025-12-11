import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const contactsPath = path.join(process.cwd(), "data", "contacts.json");

export async function GET() {
  try {
    const data = fs.readFileSync(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read contacts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const contacts = JSON.parse(fs.readFileSync(contactsPath, "utf-8"));
    
    const newContact = {
      id: Date.now().toString(),
      name: body.name || "",
      email: body.email || "",
      phone: body.phone || "",
      message: body.message || "",
      createdAt: new Date().toISOString(),
      read: false,
    };
    
    contacts.push(newContact);
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    
    return NextResponse.json({ success: true, contact: newContact });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save contact" },
      { status: 500 }
    );
  }
}
