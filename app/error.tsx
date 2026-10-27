"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home, MessageCircle, AlertCircle } from "lucide-react";
import { clinicData } from "@/data/clinic-data";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error cleanly for debugging
    console.error("Application error caught by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-200">
        <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600">
          <AlertCircle size={36} />
        </div>

        <span className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2 block">
          Aviso del Sistema
        </span>

        <h1 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 mb-3 italic">
          Ocurrió un contratiempo temporal
        </h1>

        <p className="text-stone-600 mb-8 leading-relaxed font-light text-sm sm:text-base">
          Estamos restableciendo la conexión con la clínica. Puedes intentar recargar la vista o regresar a la página principal.
        </p>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-[#18313a] hover:bg-[#12242b] text-white font-medium transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <RotateCcw size={18} />
            Reintentar
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors active:scale-95"
          >
            <Home size={18} />
            Volver al Inicio
          </Link>

          <a
            href={clinicData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-6 rounded-full text-green-700 hover:text-green-800 text-sm font-medium transition-colors"
          >
            <MessageCircle size={18} className="text-green-600" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
