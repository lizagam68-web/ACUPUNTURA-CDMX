import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  try {
    const { text, voiceName = "Kore" } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Texto requerido" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY no configurado" }, { status: 503 });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Truncate text if it's too long to prevent timeout
    const cleanText = text.slice(0, 1000);

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash-lite-tts",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: cleanText,
              speechMetadata: {
                style: "Voz femenina serena, cálida, profesional y calmante de terapeuta de acupuntura",
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voiceName as "Kore" | "Puck" | "Fenrir" | "Aoede" },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    const mimeType = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.mimeType || "audio/wav";

    if (!base64Audio) {
      return NextResponse.json({ error: "No se generó audio" }, { status: 500 });
    }

    return NextResponse.json({
      audioData: `data:${mimeType};base64,${base64Audio}`,
      format: mimeType,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("TTS generation error:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
