"use client";

import React, { useState } from "react";
import { MessageSquare, Send, Sparkles, Bot, User, ShieldAlert, CheckCircle2 } from "lucide-react";

interface QAPair {
  q: string;
  a: string;
  tag: string;
}

const PRESET_QUESTIONS: QAPair[] = [
  {
    q: "¿Dónde está el punto IG4 (Hegu) y para qué sirve en el día a día?",
    tag: "Digitopuntura",
    a: `📍 **Ubicación anatómica sencilla:**
En el dorso de la mano, en el ángulo blando entre el dedo pulgar y el índice. Si juntas el pulgar con el índice, se forma una pequeña montaña muscular; el punto está en la parte más alta.

🌿 **Beneficios cotidianos:**
Es el resonador maestro para dolor de cabeza tensional, congestión nasal, rigidez en cuello y para aliviar la tensión acumulada por estrés.

⏱️ **Cómo aplicarlo:**
Aplica presión firme pero suave en círculos lentos durante 1 a 2 minutos en cada mano mientras respiras profundo.

⚠️ **Precaución esencial:**
**Nunca aplicar durante el embarazo**, ya que es un punto de fuerte descenso energético que estimula contracciones uterinas.`
  },
  {
    q: "¿Qué significa tener desequilibrio en el elemento Madera?",
    tag: "Cinco Elementos",
    a: `🌱 **Cosmovisión del Elemento Madera:**
La Madera se asocia a la primavera, al crecimiento y a la fluidez. Sus órganos correspondientes son el **Hígado (Zang)** y la **Vesícula Biliar (Fu)**, y su emoción principal es la **frustración o la ira**.

⚖️ **Cómo reconocerlo en tu vida diaria:**
- Irritabilidad fácil o impaciencia repentina.
- Tensión en hombros y cuello tipo "nudo".
- Dolores de cabeza en sienes o vista cansada.
- Suspiros frecuentes (el cuerpo busca liberar el estancamiento).

🍵 **Consejo Yang Sheng de autocuidado:**
Masajea suavemente el punto **H3 Taichong** (en el empeine, entre el dedo gordo y el segundo dedo), bebe infusión de manzanilla con unas gotas de limón y sal a caminar al aire libre para que el *Qi* vuelva a fluir libremente.`
  },
  {
    q: "¿Cómo funciona el Reloj Biológico de los órganos según la MTCh?",
    tag: "Jing Luo",
    a: `⏰ **El ciclo circadiano del Qi (Horario de máxima energía):**
En la MTCh, cada órgano tiene una ventana de 2 horas al día donde su energía está en su punto máximo:

- **1:00 a 3:00 am (Hígado):** Desintoxicación profunda y procesamiento emocional. Si despiertas a esta hora, suele haber sobrecarga de estrés o digestiones pesadas.
- **3:00 a 5:00 am (Pulmón):** Respiración y oxigenación. Momento de mayor descanso.
- **5:00 a 7:00 am (Intestino Grueso):** Momento biológico ideal para evacuar e hidratarse con agua tibia.
- **7:00 a 9:00 am (Estómago):** Horario óptimo para un desayuno nutritivo y caliente.

Aprender este reloj te permite sincronizar tus rutinas de descanso y alimentación con el ritmo biológico natural de tu cuerpo.`
  },
  {
    q: "¿Qué alimentos son de naturaleza tibia o fría según la dietoterapia china?",
    tag: "Botiquín y Dietoterapia",
    a: `🍲 **La naturaleza térmica de los alimentos:**
En MTCh no contamos calorías; clasificamos los alimentos por el efecto térmico que producen en tu organismo:

- **Alimentos Tibios / Calientes (Tonifican el Yang y activan la digestión):** Jengibre, canela, avena cocida, romero, calabaza, nueces, pollo y caldos cocinados a fuego lento.
- **Alimentos Neutros (Armonizan el Bazo y Estómago):** Arroz blanco o integral cocido, zanahoria, camote, manzana cocida.
- **Alimentos Fríos / Frescos (Drenan calor o pueden apagar el fuego digestivo si se abusan):** Hielo, ensaladas crudas en exceso, pepino, sandía, lácteos fríos y refrescos.

💡 **Regla de oro cotidiana:** Para mantener un sistema digestivo fuerte (*Bazo-Estómago*), prioriza alimentos cocinados, tibios y evita tomar agua helada durante las comidas.`
  }
];

export const DiplomadoTutorWidget = () => {
  const [selectedQA, setSelectedQA] = useState<QAPair>(PRESET_QUESTIONS[0]);
  const [customQuestion, setCustomQuestion] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: "user" | "tutor"; text: string }>>([
    {
      sender: "tutor",
      text: `¡Hola! Soy tu Asistente Académico y Tutor Virtual del Diplomado. Estoy aquí para acompañarte durante tus 6 módulos. Selecciona una pregunta de demostración o escribe tu duda para ver cómo resolvemos tus inquietudes de estudio:`
    },
    {
      sender: "tutor",
      text: PRESET_QUESTIONS[0].a
    }
  ]);

  const handleSelectPreset = (qa: QAPair) => {
    setSelectedQA(qa);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: qa.q },
      { sender: "tutor", text: qa.a }
    ]);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    const userText = customQuestion.trim();
    setCustomQuestion("");

    // Respuesta simulada inteligente pedagógica
    let tutorResponse = `Excelente pregunta sobre el diplomado. Recuerda que en el diplomado exploramos cómo el equilibrio entre el Yin y el Yang y la libre circulación de Qi y Xue son la base para prevenir el malestar. En el módulo correspondiente encontrarás el mapa de digitopuntura y las pautas alimentarias específicas para este caso. ¿Te gustaría inscribirte para acceder a las clases completas y las sesiones de preguntas en vivo?`;

    // Detección contextual simple para demo
    const lower = userText.toLowerCase();
    if (lower.includes("embarazo") || lower.includes("embarazada")) {
      tutorResponse = `⚠️ **Precaución fundamental de seguridad (Yang Sheng):** Durante el embarazo se deben **evitar puntos de fuerte acción descendente como IG4 (Hegu), B6 (Sanyinjiao) y VB21 (Jianjing)** con digitopuntura profunda. En el Módulo 4 y 6 enseñamos las pautas seguras y adaptadas para cada etapa de la vida.`;
    } else if (lower.includes("insomnio") || lower.includes("sueño") || lower.includes("dormir")) {
      tutorResponse = `🌙 **Abordaje del insomnio en MTCh:** El sueño depende de que el *Shen* (la mente/espíritu albergada en el Corazón) encuentre calma durante la noche. Un punto maestro muy efectivo para masajear antes de dormir es **C7 Shenmen** (en el pliegue interno de la muñeca, alineado con el meñique) y **R1 Yongquan** (en la planta del pie), sumado a un baño de pies con agua tibia antes de acostarte.`;
    } else if (lower.includes("lengua") || lower.includes("diagnóstico")) {
      tutorResponse = `👅 **Observación de la Lengua (Módulo 5):** La lengua es un mapa vivo de tus órganos. Observamos el color del cuerpo lingual (si es pálida indica deficiencia de sangre/Qi; si es muy roja indica calor interno) y la saburra (la capa blanca o amarilla que refleja el estado de tu digestión). En el diplomado aprenderás a leer tu propia lengua como brújula diaria de salud.`;
    }

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "tutor", text: tutorResponse }
    ]);
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-[#e5dbcb] shadow-xl overflow-hidden">
      {/* Cabecera del Tutor */}
      <div className="bg-[#18313a] text-white p-6 sm:p-7 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#3e685f] text-white flex items-center justify-center shadow-sm">
            <Bot size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                Tutor Virtual Académico
              </h3>
              <span className="bg-[#3e685f]/80 text-[#f4e1cb] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Activo 24/7
              </span>
            </div>
            <p className="text-xs text-[#d6ccbe] font-light">
              Acompañamiento didáctico exclusivo para alumnos del Diplomado MTCh
            </p>
          </div>
        </div>
      </div>

      {/* Preguntas de Demostración Sugeridas */}
      <div className="bg-[#faf8f5] px-6 py-4 border-b border-[#e8e1d5]">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#b86d36] block mb-2.5">
          Prueba cómo responde tu tutor a dudas reales:
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESET_QUESTIONS.map((qa, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectPreset(qa)}
              className="text-xs text-left bg-white hover:bg-[#18313a] hover:text-white text-[#18313a] px-3.5 py-2 rounded-xl border border-[#e5dbcb] transition-all shadow-2xs font-medium cursor-pointer"
            >
              {qa.q}
            </button>
          ))}
        </div>
      </div>

      {/* Área de Conversación */}
      <div className="p-6 sm:p-8 space-y-4 max-h-[420px] overflow-y-auto bg-gradient-to-b from-white to-[#faf8f5]">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 ${m.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                m.sender === "user"
                  ? "bg-[#b86d36] text-white"
                  : "bg-[#18313a] text-[#f4e1cb]"
              }`}
            >
              {m.sender === "user" ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div
              className={`p-4 rounded-2xl max-w-xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-2xs ${
                m.sender === "user"
                  ? "bg-[#18313a] text-white rounded-tr-none"
                  : "bg-white text-[#18313a] border border-[#e5dbcb] rounded-tl-none font-light"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Entrada de Pregunta del Estudiante */}
      <form onSubmit={handleSendCustom} className="p-4 bg-white border-t border-[#e8e1d5] flex gap-2">
        <input
          type="text"
          value={customQuestion}
          onChange={(e) => setCustomQuestion(e.target.value)}
          placeholder="Escribe una duda sobre los 6 módulos (ej. insomnio, embarazo, lengua)..."
          className="flex-1 bg-[#faf8f5] border border-[#e5dbcb] rounded-full px-5 py-3 text-xs sm:text-sm text-[#18313a] focus:outline-hidden focus:border-[#3e685f]"
        />
        <button
          type="submit"
          className="bg-[#18313a] hover:bg-[#12242b] text-white px-5 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-xs"
        >
          <span>Preguntar</span>
          <Send size={15} />
        </button>
      </form>

      <div className="px-6 py-2.5 bg-[#faf8f5] border-t border-[#ede6dc] text-[11px] text-[#5a6e75] flex items-center justify-between">
        <span>Diseñado para público general · Sin tecnicismos complejos</span>
        <span className="font-semibold text-[#3e685f]">Herramienta de Autocuidado Yang Sheng</span>
      </div>
    </div>
  );
};
