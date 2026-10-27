"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home, AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global critical error:", error);
  }, [error]);

  return (
    <html lang="es">
      <body className="bg-stone-50 font-sans antialiased text-stone-900 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-stone-200 text-center">
          <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600">
            <AlertTriangle size={36} />
          </div>

          <h1 className="text-2xl font-serif font-bold text-stone-800 mb-2">
            Centro de Acupuntura QI
          </h1>

          <p className="text-stone-600 mb-6 text-sm">
            Se presentó una interrupción momentánea en la carga del portal. Por favor, pulsa el botón para reanudar el servicio.
          </p>

          <button
            type="button"
            onClick={() => reset()}
            className="w-full py-3.5 px-6 rounded-full bg-[#18313a] text-white font-medium hover:bg-[#12242b] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw size={18} />
            Restablecer portal
          </button>
        </div>
      </body>
    </html>
  );
}
