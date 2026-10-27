import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface LeadRecord {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  source: string;
  element?: string;
  score?: number;
}

const PRIMARY_DATA_DIR = path.join(process.cwd(), "data");
const PRIMARY_LEADS_FILE = path.join(PRIMARY_DATA_DIR, "leads.json");
const FALLBACK_LEADS_FILE = path.join("/tmp", "leads.json");

function getTargetFile(): string {
  try {
    if (!fs.existsSync(PRIMARY_DATA_DIR)) {
      fs.mkdirSync(PRIMARY_DATA_DIR, { recursive: true });
    }
    // Test write
    const testFile = path.join(PRIMARY_DATA_DIR, ".write-test");
    fs.writeFileSync(testFile, "ok");
    fs.unlinkSync(testFile);
    return PRIMARY_LEADS_FILE;
  } catch {
    return FALLBACK_LEADS_FILE;
  }
}

function getLeads(): LeadRecord[] {
  try {
    const file = fs.existsSync(PRIMARY_LEADS_FILE) ? PRIMARY_LEADS_FILE : FALLBACK_LEADS_FILE;
    if (!fs.existsSync(file)) {
      return [];
    }
    const data = fs.readFileSync(file, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error leyendo leads:", err);
    return [];
  }
}

function saveLeads(leads: LeadRecord[]) {
  try {
    const file = getTargetFile();
    fs.writeFileSync(file, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.error("Error guardando leads:", err);
    try {
      fs.writeFileSync(FALLBACK_LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
    } catch (fallbackErr) {
      console.error("Error en fallback de leads:", fallbackErr);
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, interest, source, element, score } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "El nombre y el correo electrónico son obligatorios" },
        { status: 400 }
      );
    }

    const newLead: LeadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "",
      interest: interest || "Bienestar general y autocuidado",
      source: source || "web_curso_gratis",
      element: element || undefined,
      score: typeof score === "number" ? score : undefined
    };

    const currentLeads = getLeads();
    currentLeads.unshift(newLead);
    saveLeads(currentLeads);

    return NextResponse.json({
      success: true,
      message: "Lead registrado exitosamente",
      leadId: newLead.id,
      totalLeads: currentLeads.length
    });
  } catch (error: any) {
    console.error("Error al procesar registro de lead:", error);
    return NextResponse.json(
      { error: error.message || "Error interno al procesar el registro" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const leads = getLeads();
    return NextResponse.json({
      success: true,
      count: leads.length,
      leads: leads.slice(0, 50) // Limitar a los 50 más recientes para rendimiento
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error al consultar leads" },
      { status: 500 }
    );
  }
}
