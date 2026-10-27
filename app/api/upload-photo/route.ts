import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    
    if (!file) {
      return NextResponse.json({ error: "No se proporcionó ningún archivo" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const targetDir = path.join(process.cwd(), "public", "images");
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetPath = path.join(targetDir, "lic-elizabeth-gamino-real.jpg");
    fs.writeFileSync(targetPath, buffer);

    return NextResponse.json({ 
      success: true, 
      message: "Foto actualizada con éxito sin ediciones ni alteraciones",
      path: "/images/lic-elizabeth-gamino-real.jpg" 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Error al subir la imagen" }, { status: 500 });
  }
}
