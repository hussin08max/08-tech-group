import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const contactsPath = path.join(process.cwd(), "data", "contacts.json");

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const contacts = JSON.parse(fs.readFileSync(contactsPath, "utf-8"));
    
    const index = contacts.findIndex((c: any) => c.id === params.id);
    if (index === -1) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }
    
    contacts[index] = { ...contacts[index], ...body };
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    
    return NextResponse.json({ success: true, contact: contacts[index] });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update contact" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const contacts = JSON.parse(fs.readFileSync(contactsPath, "utf-8"));
    const filtered = contacts.filter((c: any) => c.id !== params.id);
    fs.writeFileSync(contactsPath, JSON.stringify(filtered, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
