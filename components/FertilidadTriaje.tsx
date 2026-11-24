"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Heart,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

interface QuestionOption {
  id: string;
  label: string;
}

interface Question {
  id: "etapa" | "tiempo" | "prioridad";
  stepLabel: string;
  prompt: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: "etapa",
    stepLabel: "Etapa reproductiva",
    prompt: "¿En qué etapa de búsqueda te encuentras actualmente?",
    options: [
      { id: "natural", label: "Buscando embarazo de forma natural" },
      { id: "fiv_ia", label: "Preparándome para FIV o Inseminación Artificial" },
      {
        id: "sop_endometriosis",
        label: "Regulando ciclos irregulares, SOP o endometriosis",
      },
      { id: "perdida", label: "Recuperación tras pérdida gestacional" },
    ],
  },
  {
    id: "tiempo",
    stepLabel: "Tiempo de búsqueda",
    prompt: "¿Cuánto tiempo llevas buscando embarazo o en tratamiento?",
    options: [
      {
        id: "menos_6m",
        label: "Menos de 6 meses, quiero prepararme bien",
      },
      { id: "6_a_12m", label: "Entre 6 y 12 meses" },
      { id: "mas_1a", label: "Más de 1 año" },
    ],
  },
  {
    id: "prioridad",
    stepLabel: "Objetivo prioritario",
    prompt: "¿Qué aspecto te gustaría priorizar primero?",
    options: [
      { id: "ovulacion", label: "Regular ovulación y ciclo menstrual" },
      {
        id: "endometrio",
        label: "Mejorar receptividad endometrial y flujo sanguíneo",
      },
      {
        id: "estres",
        label: "Reducir estrés, ansiedad e insomnio durante el proceso",
      },
    ],
  },
];

interface StageGuidance {
  title: string;
  summary: string;
  mechanism: string;
}

function getStageGuidance(etapa: string): StageGuidance {
  switch (etapa) {
    case "Buscando embarazo de forma natural":
      return {
        title: "Preparación integral para concepción natural",
        summary:
          "Trabajaremos de forma coordinada con tus fases menstruales (folicular, ovulatoria y lútea) para crear condiciones biológicas receptivas y armónicas.",
        mechanism:
          "La acupuntura clínica favorece la irrigación sanguínea pélvica hacia ovarios y útero, apoya la regulación neuroendocrina del eje hormonal y ayuda a disminuir la carga de estrés que interfiere con la ovulación.",
      };
    case "Preparándome para FIV o Inseminación Artificial":
      return {
        title: "Acompañamiento complementario para FIV o Inseminación",
        summary:
          "Adaptamos cada sesión al calendario de tu clínica de reproducción asistida, desde la fase previa de estimulación hasta la preparación de transferencia embrionaria.",
        mechanism:
          "El estímulo acupuntural promueve el flujo arterial uterino para favorecer la receptividad endometrial, modula la respuesta neuroendocrina al tratamiento hormonal y reduce la ansiedad e insomnio durante la espera.",
      };
    case "Regulando ciclos irregulares, SOP o endometriosis":
      return {
        title: "Regulación del ciclo menstrual y equilibrio hormonal",
        summary:
          "En cuadros como ciclos irregulares, Síndrome de Ovario Poliquístico (SOP) o endometriosis, priorizamos desinflamar el entorno pélvico y ordenar la dinámica ovulatoria.",
        mechanism:
          "Mediante regulación neuroendocrina y mejora sostenida de la irrigación pélvica, la acupuntura contribuye a equilibrar la transición entre fases del ciclo, aliviar molestias pélvicas y calmar la respuesta inflamatoria asociada al estrés.",
      };
    default:
      return {
        title: "Recuperación física y emocional tras pérdida gestacional",
        summary:
          "Te acompañamos en un espacio tranquilo y respetuoso para ayudar a tu organismo a restablecer su vitalidad, su ritmo menstrual y su serenidad emocional.",
        mechanism:
          "La terapia favorece la recuperación de la irrigación pélvica, apoya la estabilización neuroendocrina paulatina del ciclo y brinda un alivio profundo frente al desgaste emocional, la tensión y el insomnio.",
      };
  }
}

export const FertilidadTriaje = () => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{
    etapa: string;
    tiempo: string;
    prioridad: string;
  }>({
    etapa: "",
    tiempo: "",
    prioridad: "",
  });

  const isCompleted = step >= QUESTIONS.length;
  const currentQuestion = QUESTIONS[Math.min(step, QUESTIONS.length - 1)];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : "";

  const handleSelectOption = (questionId: Question["id"], label: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: label,
    }));
    setStep((prev) => Math.min(prev + 1, QUESTIONS.length));
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({ etapa: "", tiempo: "", prioridad: "" });
    setStep(0);
  };

  const guidance = getStageGuidance(answers.etapa);

  const whatsappMessage = [
    "Hola, completé el Test de Fertilidad y Ciclo en su sitio web y me gustaría agendar mi primera consulta de valoración (1 hora · $900 MXN):",
    `1. Etapa actual: ${answers.etapa}`,
    `2. Tiempo de búsqueda / tratamiento: ${answers.tiempo}`,
    `3. Prioridad principal: ${answers.prioridad}`,
  ].join("\n");

  const progressPercent = isCompleted
    ? 100
    : Math.round(((step + 1) / QUESTIONS.length) * 100);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl border border-[#e5dbcb] shadow-clinical overflow-hidden">
        {/* Progress Header */}
        <div className="px-5 py-4 sm:px-8 sm:py-5 bg-[#f4efe6]/70 border-b border-[#e5dbcb]">
          <div className="flex items-center justify-between gap-4 text-xs font-semibold text-[#18313a] mb-2.5">
            <span>
              {isCompleted
                ? "Resumen personalizado de tu etapa"
                : `Pregunta ${step + 1} de ${QUESTIONS.length} · ${currentQuestion.stepLabel}`}
            </span>
            <span className="tabular-nums text-[#3e685f]">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#e5dbcb] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#3e685f] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-8 md:p-10">
          {!isCompleted ? (
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#18313a] mb-6 leading-snug text-balance">
                {currentQuestion.prompt}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = currentAnswer === option.label;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        handleSelectOption(currentQuestion.id, option.label)
                      }
                      className={`w-full text-left px-5 py-4 min-h-[54px] rounded-2xl border transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18313a] ${
                        isSelected
                          ? "bg-[#18313a] text-white border-[#18313a] shadow-sm"
                          : "bg-[#faf8f5] hover:bg-[#f2ece2] text-[#18313a] border-[#e5dbcb] hover:border-[#cfbfab]"
                      }`}
                    >
                      <span className="text-sm sm:text-base font-medium leading-snug">
                        {option.label}
                      </span>
                      <ArrowRight
                        size={18}
                        className={`flex-shrink-0 ${
                          isSelected ? "text-[#f4e1cb]" : "text-[#b86d36]"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {step > 0 && (
                <div className="mt-6 pt-5 border-t border-[#f2ece2] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#4a5e66] hover:text-[#18313a] py-2 px-1 transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={16} />
                    <span>Volver a la pregunta anterior</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3e685f]">
                  <Heart size={16} />
                  <span>Acompañamiento Sugerido</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#18313a] leading-snug text-balance">
                  {guidance.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4a5e66] leading-relaxed">
                  {guidance.summary}
                </p>
                <p className="text-sm sm:text-base text-[#18313a] font-medium leading-relaxed bg-[#faf8f5] p-4 rounded-2xl border border-[#e5dbcb]">
                  {guidance.mechanism}
                </p>
              </div>

              {/* Resumen de las 3 respuestas */}
              <div className="rounded-2xl border border-[#e5dbcb] bg-[#fdfcf9] p-4 sm:p-5 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#874a21]">
                  Tu perfil inicial de consulta
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#4a5e66]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      <strong className="text-[#18313a]">Etapa actual:</strong>{" "}
                      {answers.etapa}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      <strong className="text-[#18313a]">Tiempo:</strong>{" "}
                      {answers.tiempo}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      <strong className="text-[#18313a]">Prioridad:</strong>{" "}
                      {answers.prioridad}
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA Principal Verde de WhatsApp con las 3 respuestas */}
              <div className="space-y-3 pt-1">
                <WhatsAppButton
                  message={whatsappMessage}
                  showIcon={false}
                  className="w-full min-h-[54px] bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm sm:text-base px-6 py-4 rounded-full shadow-md transition-all active:scale-99 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle size={20} className="flex-shrink-0" />
                  <span>Enviar mis Respuestas y Agendar por WhatsApp</span>
                </WhatsAppButton>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#4a5e66] pt-1">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-[#b86d36]" />
                    Valoración inicial + 1.ª sesión (1 hora) ·{" "}
                    <strong className="text-[#18313a] tabular-nums">
                      $900 MXN
                    </strong>
                  </span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-[#3e685f] hover:text-[#18313a] font-semibold py-1.5 cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Volver a realizar el test</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
