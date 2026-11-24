"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

interface QuestionOption {
  id: string;
  label: string;
}

interface Question {
  id: "tiempo" | "sintoma" | "valoracion";
  stepLabel: string;
  prompt: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: "tiempo",
    stepLabel: "Tiempo de evolución",
    prompt: "¿Hace cuánto tiempo iniciaron los síntomas?",
    options: [
      { id: "menos_7_dias", label: "Menos de 7 días" },
      { id: "1_a_4_semanas", label: "Entre 1 y 4 semanas" },
      { id: "mas_1_mes", label: "Más de 1 mes" },
      { id: "mas_6_meses", label: "Más de 6 meses" },
    ],
  },
  {
    id: "sintoma",
    stepLabel: "Sintomatología actual",
    prompt: "¿Qué síntomas principales presentas hoy?",
    options: [
      { id: "cierre_ojo", label: "Dificultad para cerrar un ojo o parpadear" },
      { id: "desviacion_sonrisa", label: "Desviación de la comisura labial al sonreír" },
      { id: "dolor_oido", label: "Dolor detrás del oído o rigidez" },
      { id: "espasmos_sincinesias", label: "Espasmos o sincinesias" },
    ],
  },
  {
    id: "valoracion",
    stepLabel: "Seguimiento médico",
    prompt: "¿Ya cuentas con valoración médica previa o estás tomando medicamento?",
    options: [
      { id: "urgencias_neurologo", label: "Sí, ya fui a urgencias/neurólogo" },
      { id: "busco_inicial", label: "Aún no, busco valoración inicial" },
      { id: "rehabilitacion_previa", label: "Ya tomé rehabilitación física antes" },
    ],
  },
];

interface Recommendation {
  windowTitle: string;
  summary: string;
  clinicalAdvice: string;
}

function getRecommendation(tiempo: string): Recommendation {
  switch (tiempo) {
    case "Menos de 7 días":
      return {
        windowTitle: "Ventana terapéutica temprana (Primeros días)",
        summary:
          "Estás en el momento más oportuno para iniciar atención complementaria. En los primeros días tras el inicio de los síntomas, el nervio facial responde con mayor sensibilidad al estímulo clínico.",
        clinicalAdvice:
          "La constancia durante las primeras semanas es fundamental para favorecer la desinflamación local y acompañar la reactivación neuromuscular de forma segura.",
      };
    case "Entre 1 y 4 semanas":
      return {
        windowTitle: "Ventana terapéutica activa (Fase inicial-subaguda)",
        summary:
          "Aún te encuentras dentro de las primeras semanas clave. Iniciar un protocolo estructurado ayuda a estimular el tono muscular facial y a prevenir compensaciones innecesarias.",
        clinicalAdvice:
          "Mantener sesiones continuas durante estas primeras semanas permite dar seguimiento preciso a tu evolución y ajustar los puntos de acupuntura conforme responde tu rostro.",
      };
    case "Más de 1 mes":
      return {
        windowTitle: "Fase de consolidación y reeducación neuromuscular",
        summary:
          "Cuando ha transcurrido más de un mes, el enfoque clínico se centra en reeducar las fibras musculares, disminuir la sensación de rigidez y trabajar progresivamente la simetría al gesticular.",
        clinicalAdvice:
          "Aunque la ventana inicial haya pasado, la constancia en el protocolo ayuda a modular la respuesta muscular y a evitar sobrecargas del lado contrario del rostro.",
      };
    default:
      return {
        windowTitle: "Atención enfocada en secuelas y confort muscular",
        summary:
          "En cuadros de más de 6 meses trabajamos con especial cuidado para suavizar contracturas, reducir la tensión facial y acompañar el manejo de espasmos o sincinesias.",
        clinicalAdvice:
          "Valoraremos el estado actual de cada grupo muscular para diseñar un plan realista, gradual y adaptado a tus objetivos de movilidad y bienestar.",
      };
  }
}

export const ParalisisFacialTriaje = () => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{
    tiempo: string;
    sintoma: string;
    valoracion: string;
  }>({
    tiempo: "",
    sintoma: "",
    valoracion: "",
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
    setAnswers({ tiempo: "", sintoma: "", valoracion: "" });
    setStep(0);
  };

  const recommendation = getRecommendation(answers.tiempo);

  const whatsappMessage = [
    "Hola, realicé el Test de Valoración Rápida para Parálisis Facial en su sitio web y quiero agendar mi cita de valoración (1 hora · $900 MXN):",
    `1. Inicio de síntomas: ${answers.tiempo}`,
    `2. Síntoma principal: ${answers.sintoma}`,
    `3. Valoración médica previa: ${answers.valoracion}`,
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
                ? "Resultado de tu valoración rápida"
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
                  <ShieldCheck size={16} />
                  <span>Orientación Personalizada</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#18313a] leading-snug text-balance">
                  {recommendation.windowTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#4a5e66] leading-relaxed">
                  {recommendation.summary}
                </p>
                <p className="text-sm sm:text-base text-[#18313a] font-medium leading-relaxed bg-[#faf8f5] p-4 rounded-2xl border border-[#e5dbcb]">
                  {recommendation.clinicalAdvice}
                </p>
              </div>

              {/* Resumen de las 3 respuestas */}
              <div className="rounded-2xl border border-[#e5dbcb] bg-[#fdfcf9] p-4 sm:p-5 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#874a21]">
                  Resumen de tus respuestas para consulta
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#4a5e66]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      <strong className="text-[#18313a]">Inicio:</strong>{" "}
                      {answers.tiempo}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      <strong className="text-[#18313a]">Síntoma principal:</strong>{" "}
                      {answers.sintoma}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-[#3e685f] mt-0.5 flex-shrink-0"
                    />
                    <span>
                      <strong className="text-[#18313a]">Antecedente médico:</strong>{" "}
                      {answers.valoracion}
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
