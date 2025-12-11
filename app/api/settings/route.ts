import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const settingsPath = path.join(process.cwd(), "data", "settings.json");

export async function GET() {
  try {
    const data = fs.readFileSync(settingsPath, "utf-8");
    const settings = JSON.parse(data);
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read settings" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const settings = {
      footerText: body.footerText || "",
    };
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
    return NextResponse.json({ success: true, settings });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
