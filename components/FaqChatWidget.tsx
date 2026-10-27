"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  HelpCircle,
  Activity,
  Bot
} from "lucide-react";
import {
  FAQ_KNOWLEDGE_BASE,
  FAQ_CATEGORIES,
  searchFaqs,
  FaqItem
} from "@/data/faq-assistant-data";
import { clinicData } from "@/data/clinic-data";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  faqData?: FaqItem;
  suggestedQuestions?: string[];
  isFallback?: boolean;
}

export const FaqChatWidget: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("popular");
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnreadAlert, setHasUnreadAlert] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize conversation with welcome message
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "¡Hola! Soy el Asistente Virtual del Centro de Acupuntura QI en Benito Juárez, CDMX. ¿En qué te puedo orientar hoy?",
      timestamp: "Ahora",
      suggestedQuestions: [
        "¿Duele la acupuntura?",
        "¿Cuándo empezar tras una parálisis facial?",
        "¿Cómo agendo mi primera cita y qué horarios tienen?",
        "¿Cómo ayuda con la ciática y dolor de espalda?"
      ]
    }
  ]);

  // Auto-scroll on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setHasUnreadAlert(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleAskFaq = (faq: FaqItem) => {
    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: faq.question,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      // Find suggested follow-ups
      const followUpQuestions: string[] = [];
      if (faq.suggestedFollowUps) {
        faq.suggestedFollowUps.forEach((fId) => {
          const item = FAQ_KNOWLEDGE_BASE.find((k) => k.id === fId);
          if (item) followUpQuestions.push(item.question);
        });
      }

      const botMsg: ChatMessage = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: faq.detailedAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        faqData: faq,
        suggestedQuestions: followUpQuestions.length > 0 ? followUpQuestions : undefined
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleSendCustomText = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    setInputQuery("");

    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const results = searchFaqs(query);

      if (results.length > 0) {
        const topResult = results[0];
        const otherSuggestions = results.slice(1, 4).map((r) => r.question);

        const botMsg: ChatMessage = {
          id: "bot-" + Date.now(),
          sender: "bot",
          text: topResult.detailedAnswer,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          faqData: topResult,
          suggestedQuestions: otherSuggestions.length > 0 ? otherSuggestions : topResult.suggestedFollowUps?.map(id => FAQ_KNOWLEDGE_BASE.find(k => k.id === id)?.question || "").filter(Boolean)
        };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        // Fallback response with WhatsApp direct handoff
        const fallbackMsg: ChatMessage = {
          id: "bot-" + Date.now(),
          sender: "bot",
          text: `Para darte una orientación clínica personalizada precisa sobre "${query}", te sugerimos escribir directamente por WhatsApp. Evaluaremos tu caso particular con gusto.`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isFallback: true,
          suggestedQuestions: [
            "¿Dónde se ubica el consultorio en la Ciudad de México?",
            "¿Cuál es el costo de la consulta y qué incluye?",
            "¿Quién realiza el tratamiento y cuáles son sus credenciales?"
          ]
        };
        setMessages((prev) => [...prev, fallbackMsg]);
      }

      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome-" + Date.now(),
        sender: "bot",
        text: "Conversación reiniciada. ¿Qué otra duda sobre acupuntura o tu tratamiento te gustaría resolver?",
        timestamp: "Ahora",
        suggestedQuestions: [
          "¿Duele la acupuntura?",
          "¿Cuándo empezar tras una parálisis facial?",
          "¿Cuántas sesiones necesito para ver mejoría?",
          "¿Cómo agendo mi primera cita y qué horarios tienen?"
        ]
      }
    ]);
  };

  // Filtered FAQs by selected Category
  const categoryFaqs = FAQ_KNOWLEDGE_BASE.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  if (!isMounted) return null;

  return (
    <>
      {/* Floating launcher trigger */}
      <div className="fixed bottom-28 right-6 sm:bottom-28 sm:right-8 z-40 select-none">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Abrir asistente de preguntas frecuentes"
          className="relative flex items-center gap-2.5 px-4 py-3 bg-[#18313a] text-[#faf8f5] rounded-full shadow-xl hover:bg-[#12242b] border border-[#b86d36]/30 transition-all group"
        >
          {/* Badge with pulse dot */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#b86d36] text-white">
            <Bot size={18} className="transition-transform group-hover:rotate-12" />
            {hasUnreadAlert && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
            )}
          </div>

          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
              <span>Asistente FAQ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-[10px] text-[#e5dbcb] font-light">
              Dudas al instante
            </div>
          </div>

          {/* Tooltip bubble on initial state */}
          {hasUnreadAlert && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute right-0 bottom-full mb-3 pointer-events-none hidden md:flex items-center gap-2 bg-white text-[#18313a] px-3.5 py-2 rounded-xl shadow-lg border border-[#e5dbcb] text-xs font-medium whitespace-nowrap"
            >
              <HelpCircle size={14} className="text-[#3e685f]" />
              <span>¿Tienes dudas? Resuélvelas al instante</span>
              <div className="absolute top-full right-8 -mt-1 border-4 border-transparent border-t-white" />
            </motion.div>
          )}
        </motion.button>
      </div>

      {/* Floating Chat Modal Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 w-auto sm:w-[420px] max-w-[440px] h-[610px] max-h-[92vh] flex flex-col rounded-3xl bg-[#ffffff] border border-[#e5dbcb] shadow-2xl overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-[#18313a] text-[#faf8f5] px-5 py-4 flex items-center justify-between border-b border-[#273c4a] relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#b86d36] to-[#ebbe9a] flex items-center justify-center text-white shadow-md">
                  <Bot size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-base text-white tracking-wide">
                      Asistente Virtual QI
                    </h3>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      En línea
                    </span>
                  </div>
                  <p className="text-[11px] text-[#c5d2da] flex items-center gap-1 font-light">
                    <ShieldCheck size={12} className="text-[#b86d36]" />
                    Atención Clínica Especializada · Céd. 15289838
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[#d1c7b7]">
                <button
                  onClick={handleResetChat}
                  title="Reiniciar chat"
                  className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Reiniciar conversación"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Cerrar ventana"
                  className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Quick Category Tabs Carousel */}
            <div className="bg-[#faf8f5] px-3 py-2 border-b border-[#e5dbcb] overflow-x-auto no-scrollbar flex gap-1.5 shrink-0">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap transition-all font-medium ${
                    selectedCategory === cat.id
                      ? "bg-[#18313a] text-white shadow-xs"
                      : "bg-[#f2ece2] text-[#4a5e66] hover:bg-[#e5dbcb]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Conversation Messages Container */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-[#faf8f5] to-[#f4efe7]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  {/* Sender Label */}
                  <span className="text-[10px] text-[#7a887f] px-1 mb-1 font-light">
                    {msg.sender === "user" ? "Tú" : "Asistente QI"} · {msg.timestamp}
                  </span>

                  {/* Bubble Content */}
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#18313a] text-white rounded-br-xs shadow-md"
                        : "bg-white text-[#142329] border border-[#e5dbcb] rounded-bl-xs shadow-xs"
                    }`}
                  >
                    {/* Bot Answer Main Text */}
                    <div className="whitespace-pre-line font-light">
                      {msg.text}
                    </div>

                    {/* Key points cards if available */}
                    {msg.faqData?.keyPoints && (
                      <div className="mt-3 pt-3 border-t border-[#e8edf0] space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#b86d36] block">
                          Puntos Clave:
                        </span>
                        {msg.faqData.keyPoints.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-1.5 text-xs text-[#4a5e66]">
                            <CheckCircle2 size={13} className="text-[#3e685f] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* WhatsApp Direct Handoff Button */}
                    {msg.sender === "bot" && (
                      <div className="mt-3 pt-2.5 border-t border-[#e8edf0] flex items-center justify-between gap-2">
                        <a
                          href={`https://wa.me/525552520615?text=${encodeURIComponent(
                            `Hola, tengo una duda sobre: ${
                              msg.faqData ? msg.faqData.question : msg.text.slice(0, 80)
                            }`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                              try {
                                (window as any).gtag_report_conversion();
                              } catch (e) {
                                console.error(e);
                              }
                            }
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18313a] hover:text-black bg-[#f4efe7] hover:bg-[#e5dbcb] border border-[#e5dbcb] px-2.5 py-1.5 rounded-xl transition-colors"
                        >
                          <Phone size={12} className="text-[#b86d36]" />
                          <span>Preguntar por WhatsApp</span>
                          <ExternalLink size={11} className="opacity-70" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Suggested Follow-up Buttons */}
                  {msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[92%]">
                      {msg.suggestedQuestions.map((sQ, qIdx) => {
                        const targetFaq = FAQ_KNOWLEDGE_BASE.find(
                          (item) => item.question === sQ
                        );
                        return (
                          <button
                            key={qIdx}
                            onClick={() => {
                              if (targetFaq) {
                                handleAskFaq(targetFaq);
                              } else {
                                handleSendCustomText(sQ);
                              }
                            }}
                            className="text-left text-xs bg-white hover:bg-[#18313a] hover:text-white text-[#18313a] border border-[#e5dbcb] rounded-xl px-3 py-1.5 shadow-2xs transition-all flex items-center gap-1.5 group font-medium"
                          >
                            <ChevronRight size={12} className="text-[#b86d36] group-hover:text-white shrink-0" />
                            <span>{sQ}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-[#6f8ea0] pl-1">
                  <div className="w-6 h-6 rounded-full bg-[#18313a]/10 flex items-center justify-center text-[#18313a]">
                    <Bot size={13} />
                  </div>
                  <div className="flex gap-1 py-1 px-3 bg-white border border-[#e5dbcb] rounded-full shadow-2xs">
                    <span className="w-1.5 h-1.5 bg-[#b86d36] rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-[#b86d36] rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-[#b86d36] rounded-full animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Category Quick Suggestions Drawer (Accordion-like helper) */}
            {categoryFaqs.length > 0 && (
              <div className="bg-[#faf8f5] border-t border-[#e5dbcb] px-3 py-2 shrink-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#6f8ea0] mb-1.5 flex items-center justify-between">
                  <span>Preguntas sugeridas ({categoryFaqs.length})</span>
                  <span className="text-[9px] text-[#b86d36] font-normal">Toca para responder</span>
                </div>
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                  {categoryFaqs.slice(0, 5).map((f) => (
                    <button
                      key={f.id}
                      onClick={() => handleAskFaq(f)}
                      className="text-left text-xs shrink-0 max-w-[210px] truncate bg-white hover:bg-[#18313a] hover:text-white text-[#4a5e66] border border-[#e5dbcb] rounded-lg px-2.5 py-1.5 transition-colors font-light"
                      title={f.question}
                    >
                      {f.question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendCustomText();
              }}
              className="p-3 bg-white border-t border-[#e5dbcb] flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Escribe tu duda (ej. ¿duele?, citas, parálisis...)"
                className="flex-1 bg-[#faf8f5] border border-[#e5dbcb] focus:border-[#18313a] focus:bg-white rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm text-[#142329] placeholder:text-[#8ea0ab] outline-hidden transition-all"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping}
                aria-label="Enviar pregunta"
                className="w-10 h-10 rounded-2xl bg-[#18313a] text-[#faf8f5] flex items-center justify-center hover:bg-[#12242b] disabled:opacity-40 disabled:hover:bg-[#18313a] transition-colors shrink-0 shadow-xs"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
