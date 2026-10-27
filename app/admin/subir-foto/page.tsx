"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Upload, 
  CheckCircle2, 
  ArrowLeft, 
  Camera, 
  RotateCcw, 
  AlertCircle, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Image as ImageIcon
} from "lucide-react";
import { DEFAULT_PRACTITIONER_PHOTO } from "@/lib/usePractitionerPhoto";

export default function SubirFotoPage() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null);
  const [currentPhoto, setCurrentPhoto] = useState<string>(DEFAULT_PRACTITIONER_PHOTO);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [hasCustomPhoto, setHasCustomPhoto] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Initialize and check current saved photo
  useEffect(() => {
    try {
      const saved = localStorage.getItem("practitioner_custom_photo");
      if (saved) {
        setCurrentPhoto(saved);
        setHasCustomPhoto(true);
      }
    } catch {
      // localStorage may fail in some environments
    }
  }, []);

  // Process and convert image to standard high-quality JPEG
  const processImageFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setStatusMessage({
        type: "error",
        text: "El archivo seleccionado no es una imagen válida. Selecciona un archivo JPG, PNG o WEBP."
      });
      return;
    }

    setLoading(true);
    setStatusMessage({ type: "info", text: "Procesando fotografía..." });

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        // Create canvas to normalize orientation, dimensions and create clean JPEG
        const canvas = document.createElement("canvas");
        const maxDimension = 1600;
        let width = img.width;
        let height = img.height;

        if (width > height && width > maxDimension) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else if (height > maxDimension) {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          setLoading(false);
          setStatusMessage({ type: "error", text: "No se pudo procesar la imagen en el navegador." });
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.92);

        setPreview(dataUrl);

        // Convert dataUrl to blob to submit to server API as well
        canvas.toBlob(async (blob) => {
          if (!blob) {
            setLoading(false);
            return;
          }

          try {
            const formData = new FormData();
            formData.append("file", blob, "lic-elizabeth-gamino-real.jpg");

            // Save to local storage for instantaneous zero-latency preview everywhere
            try {
              localStorage.setItem("practitioner_custom_photo", dataUrl);
              localStorage.setItem("practitioner_photo_timestamp", Date.now().toString());
              window.dispatchEvent(new Event("practitioner-photo-updated"));
              setHasCustomPhoto(true);
              setCurrentPhoto(dataUrl);
            } catch {
              console.warn("Storage write notice");
            }

            // Also post to server API route to persist on server disk
            const res = await fetch("/api/upload-photo", {
              method: "POST",
              body: formData,
            });

            if (res.ok) {
              setStatusMessage({
                type: "success",
                text: "¡Fotografía actualizada y guardada con éxito! Ya se visualiza en la pantalla principal y en todas las secciones."
              });
            } else {
              // Still successful locally via localStorage
              setStatusMessage({
                type: "success",
                text: "¡Fotografía guardada con éxito en tu navegador! Ya se visualiza en la pantalla principal."
              });
            }
          } catch (err) {
            // Even if network route fails, localStorage succeeded
            setStatusMessage({
              type: "success",
              text: "¡Fotografía aplicada con éxito de forma local!"
            });
          } finally {
            setLoading(false);
          }
        }, "image/jpeg", 0.92);
      };

      img.onerror = () => {
        setLoading(false);
        setStatusMessage({ type: "error", text: "No se pudo leer el archivo de imagen." });
      };

      img.src = event.target?.result as string;
    };

    reader.onerror = () => {
      setLoading(false);
      setStatusMessage({ type: "error", text: "Error al leer el archivo desde el dispositivo." });
    };

    reader.readAsDataURL(file);
  }, []);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  // Support paste from clipboard (e.g. copied from WhatsApp Web or screenshots)
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith("image/")) {
          const file = items[i].getAsFile();
          if (file) {
            e.preventDefault();
            processImageFile(file);
            break;
          }
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [processImageFile]);

  // Drag and Drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  // Reset to factory original photo
  const handleResetToDefault = () => {
    try {
      localStorage.removeItem("practitioner_custom_photo");
      localStorage.removeItem("practitioner_photo_timestamp");
      window.dispatchEvent(new Event("practitioner-photo-updated"));
    } catch {
      // ignore
    }
    setCurrentPhoto(DEFAULT_PRACTITIONER_PHOTO);
    setPreview(null);
    setHasCustomPhoto(false);
    setStatusMessage({
      type: "info",
      text: "Se ha restablecido la fotografía predeterminada de la Lic. Elizabeth Gamiño."
    });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Navigation & Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#3e685f] hover:text-[#18313a] transition-colors uppercase tracking-wider bg-white px-3.5 py-2 rounded-xl border border-[#e5dbcb] shadow-sm"
          >
            <ArrowLeft size={16} />
            <span>Volver al sitio web</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4a5e66] hover:text-[#18313a]"
          >
            <span>Ver página principal</span>
            <ExternalLink size={13} />
          </Link>
        </div>

        {/* Main Card */}
        <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-[#e5dbcb] shadow-xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4efe7] text-[#3e685f] text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck size={14} />
              <span>Administración de Identidad</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#18313a]">
              Actualizar Fotografía de la Lic. Elizabeth Gamiño
            </h1>
            <p className="text-xs sm:text-sm text-[#4a5e66] font-light max-w-lg mx-auto leading-relaxed">
              Carga tu fotografía original (de WhatsApp, galería o cámara) <strong>sin filtros ni alteraciones</strong>. Se optimizará y aplicará automáticamente en la cabecera (Hero), la sección «¿Quién Soy?» y todas las páginas del sitio.
            </p>
          </div>

          {/* Status Message Banner */}
          {statusMessage && (
            <div 
              className={`p-4 rounded-2xl flex items-start sm:items-center gap-3 text-sm ${
                statusMessage.type === "success" 
                  ? "bg-emerald-50 border border-emerald-200 text-emerald-800" 
                  : statusMessage.type === "error" 
                  ? "bg-rose-50 border border-rose-200 text-rose-800" 
                  : "bg-amber-50 border border-amber-200 text-amber-800"
              }`}
            >
              {statusMessage.type === "success" && <CheckCircle2 size={18} className="flex-shrink-0 text-emerald-600 mt-0.5 sm:mt-0" />}
              {statusMessage.type === "error" && <AlertCircle size={18} className="flex-shrink-0 text-rose-600 mt-0.5 sm:mt-0" />}
              {statusMessage.type === "info" && <Sparkles size={18} className="flex-shrink-0 text-amber-600 mt-0.5 sm:mt-0" />}
              <span className="flex-1 font-medium">{statusMessage.text}</span>
            </div>
          )}

          {/* Interactive Upload Dropzone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-all ${
              isDragOver 
                ? "border-[#3e685f] bg-[#eef5f3] scale-[1.01]" 
                : "border-[#b86d36]/40 hover:border-[#b86d36] bg-[#faf8f5]/80 hover:bg-[#faf8f5]"
            }`}
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-100/70 text-[#b86d36] flex items-center justify-center mb-4 shadow-inner">
              {loading ? (
                <div className="w-8 h-8 border-3 border-[#b86d36] border-t-transparent rounded-full animate-spin" />
              ) : (
                <Camera size={32} />
              )}
            </div>

            <h3 className="font-bold text-lg text-[#18313a] mb-1">
              {loading ? "Procesando y guardando fotografía..." : "Elige o arrastra tu fotografía aquí"}
            </h3>

            <p className="text-xs text-[#5a6e75] max-w-sm mb-6">
              Acepta JPG, PNG, WEBP o fotos directas de WhatsApp. También puedes pegar una imagen con <strong>Ctrl + V</strong> (o Cmd + V).
            </p>

            {/* Buttons for actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Primary File Button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={loading}
                className="bg-[#3e685f] hover:bg-[#2d4d46] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-emerald-950/10 flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
              >
                <Upload size={16} />
                <span>Examinar archivo desde tu equipo</span>
              </button>

              {/* Mobile Camera Option */}
              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                disabled={loading}
                className="bg-white hover:bg-stone-50 text-[#18313a] border border-[#d6ccbe] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-sm flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
              >
                <Camera size={16} className="text-[#b86d36]" />
                <span>Tomar foto con cámara</span>
              </button>
            </div>

            {/* Hidden file inputs (with sr-only rather than display:none so mobile & screenreaders handle them safely) */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleFileInputChange}
              disabled={loading}
            />

            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="user"
              className="sr-only"
              onChange={handleFileInputChange}
              disabled={loading}
            />
          </div>

          {/* Current / Preview Comparison Section */}
          <div className="pt-2 border-t border-[#f2ece2] space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18313a] text-center">
              Vista Previa en Vivo de la Fotografía Actual
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Hero Aspect Preview */}
              <div className="bg-[#faf8f5] p-4 rounded-2xl border border-[#e5dbcb] text-center space-y-2">
                <span className="text-[11px] font-semibold text-[#4a5e66] block">
                  Formato Cabecera (Hero 4:5)
                </span>
                <div className="relative aspect-[4/5] w-36 mx-auto rounded-2xl overflow-hidden border-2 border-white shadow-md bg-stone-100">
                  <Image
                    src={preview || currentPhoto}
                    alt="Vista previa cabecera"
                    fill
                    className="object-cover object-center"
                    referrerPolicy="no-referrer"
                    unoptimized={(preview || currentPhoto).startsWith("data:")}
                  />
                </div>
              </div>

              {/* Avatar Round Preview */}
              <div className="bg-[#faf8f5] p-4 rounded-2xl border border-[#e5dbcb] text-center space-y-2">
                <span className="text-[11px] font-semibold text-[#4a5e66] block">
                  Formato «¿Quién Soy?» (Circular)
                </span>
                <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md bg-stone-100">
                  <Image
                    src={preview || currentPhoto}
                    alt="Vista previa circular"
                    fill
                    className="object-cover object-center"
                    referrerPolicy="no-referrer"
                    unoptimized={(preview || currentPhoto).startsWith("data:")}
                  />
                </div>
              </div>
            </div>

            {/* Actions for current photo */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              {hasCustomPhoto ? (
                <button
                  type="button"
                  onClick={handleResetToDefault}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-700 hover:text-rose-900 font-medium px-3 py-1.5 rounded-lg border border-rose-200 hover:bg-rose-50 transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>Restablecer foto oficial predeterminada</span>
                </button>
              ) : (
                <span className="text-[11px] text-[#5a6e75]">
                  Utilizando fotografía oficial predeterminada
                </span>
              )}

              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#18313a] hover:bg-[#2c4955] px-4 py-2 rounded-xl transition-all shadow-sm"
              >
                <span>Confirmar y ver en la web</span>
                <ExternalLink size={13} />
              </Link>
            </div>
          </div>

          <div className="text-[11px] text-[#5a6e75] font-light bg-[#faf8f5] p-3.5 rounded-xl border border-[#e8e1d5] leading-relaxed">
            <strong>Nota de Privacidad y Calidad:</strong> La fotografía seleccionada se guarda sin filtros ni alteraciones de inteligencia artificial, respetando tus rasgos naturales en estricto cumplimiento del perfil profesional de la Lic. Elizabeth Gamiño.
          </div>

        </div>

      </div>
    </div>
  );
}
