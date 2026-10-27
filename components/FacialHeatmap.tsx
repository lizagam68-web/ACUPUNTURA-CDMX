"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Activity, 
  Zap, 
  Eye, 
  Smile, 
  Clock, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  Sliders, 
  HeartHandshake,
  Compass,
  HelpCircle,
  Stethoscope,
  ChevronRight,
  ShieldCheck,
  AlertTriangle,
  XCircle,
  Flame,
  Volume2,
  RefreshCw,
  Award,
  Check
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

/* =========================================================================
   TIPOS Y MODELOS DIDÁCTICOS
   ========================================================================= */

export type TabMode = "expresiones" | "anatomia" | "semaforo" | "autoevaluacion";

export interface ExpressionSimulation {
  id: string;
  name: string;
  icon: typeof Smile;
  badge: string;
  muscleGroup: string;
  nerveBranch: string;
  healthySideBehavior: string;
  affectedSideBehavior: string;
  didacticExplanation: string;
  mirrorExercise: string;
  clinicalTherapy: string;
  acupuncturePoints: { code: string; name: string; action: string }[];
  warningNote: string;
  svgHighlights: {
    faceExpression: "smile" | "eye-close" | "brow-raise" | "whistle" | "ear-nerve";
  };
}

export interface AnatomicalZone {
  id: string;
  name: string;
  popularName: string;
  shortDesc: string;
  nerveBranch: string;
  primaryMuscle: string;
  priorityLevel: "Prioridad Máxima" | "Prioridad Alta" | "Reactivación Continua";
  accentColor: string;
  coordinates: { cx: number; cy: number; r: number };
  symptomsList: string[];
  whyItHappens: string;
  homeExercise: string;
  clinicalTreatment: {
    frequency: string;
    wave: string;
    points: { code: string; name: string; meaning: string }[];
    thermal: string;
  };
}

/* =========================================================================
   DATOS DIDÁCTICOS: SIMULADOR DE MOVIMIENTOS Y EXPRESIONES
   ========================================================================= */

const EXPRESSIONS_DATA: ExpressionSimulation[] = [
  {
    id: "sonreir",
    name: "Intentar Sonreír",
    icon: Smile,
    badge: "Asimetría en Comisura y Labios",
    muscleGroup: "Músculos Cigomático Mayor, Risorio y Elevador del Labio",
    nerveBranch: "Ramas Bucal y Cigomática del Nervio Facial (Par Craneal VII)",
    healthySideBehavior: "La comisura labial se eleva de forma suave y armónica, mostrando los dientes superiores con simetría.",
    affectedSideBehavior: "La comisura no sube y la boca es 'jalada' hacia el lado sano. Puede haber escape de aire o dificultad para articular palabras.",
    didacticExplanation: "¿Por qué la boca se va hacia el lado sano? Porque los músculos del lado sano siguen teniendo fuerza normal, mientras que el lado afectado ha perdido el tono. Al sonreír, el lado sano jala sin resistencia, como una cuerda en un juego de tirar de la soga.",
    mirrorExercise: "Frente al espejo: coloca la yema de tu dedo índice en la comisura débil y asístela suavemente hacia arriba mientras intentas sonreír al 30% de tu esfuerzo. Nunca fuerces una sonrisa exagerada.",
    clinicalTherapy: "Electroacupuntura neuromuscular con frecuencia discontinua en puntos motores labiales para reactivar el reflejo contráctil y evitar la flacidez.",
    acupuncturePoints: [
      { code: "E4", name: "Dicang", action: "Punto motor en la comisura bucal para restaurar el tono del esfínter labial" },
      { code: "E6", name: "Jiache", action: "Relaja el masetero y reactiva la elevación de la mejilla" },
      { code: "Du26", name: "Renzhong", action: "Equilibra la línea media facial bajo la base de la nariz" }
    ],
    warningNote: "Evita masticar chicle para 'hacer fuerza'. Esto satura el masetero y provoca sincinesias (cerrar el ojo al masticar).",
    svgHighlights: { faceExpression: "smile" }
  },
  {
    id: "cerrar-ojos",
    name: "Intentar Cerrar los Ojos",
    icon: Eye,
    badge: "Signo de Bell y Lagoftalmos",
    muscleGroup: "Músculo Orbicular del Ojo (Esfínter Palpebral)",
    nerveBranch: "Rama Cigomática y Temporal del Nervio Facial",
    healthySideBehavior: "El párpado superior desciende completamente y cubre el ojo con un parpadeo natural e involuntario.",
    affectedSideBehavior: "El párpado superior queda entreabierto (Lagoftalmos). Al intentar cerrarlo con fuerza, el globo ocular sube naturalmente mostrando la parte blanca (Signo de Bell).",
    didacticExplanation: "El Signo de Bell no es una anomalía visual, sino un reflejo protector natural de tu cerebro: como el párpado no baja, el ojo se esconde hacia arriba para proteger la pupila. La prioridad médica aquí es mantener la córnea húmeda para prevenir úlceras.",
    mirrorExercise: "Coloca la yema del dedo sobre el párpado superior y acompáñalo suavemente hacia abajo como si bajaras una persiana muy delicada, mantén 5 segundos y respira con calma.",
    clinicalTherapy: "Microcorriente suave subumbral (sin sacudida) combinada con acupuntura periorbital para reactivar las fibras circulares del párpado sin irritar la conjuntiva.",
    acupuncturePoints: [
      { code: "V2", name: "Zanzhu", action: "Inicio de la ceja; despierta la motilidad del párpado superior" },
      { code: "SJ23", name: "Sizhukong", action: "Cola de la ceja; drena la tensión periorbital externa" },
      { code: "Taiyang", name: "Punto Sien", action: "Punto extraordinario clave para relajar la microcirculación ocular" }
    ],
    warningNote: "CUIDADO CRÍTICO: Usa lágrimas artificiales cada 2 horas de día y parche oclusivo suave de noche para proteger la córnea del aire.",
    svgHighlights: { faceExpression: "eye-close" }
  },
  {
    id: "levantar-cejas",
    name: "Intentar Levantar las Cejas",
    icon: Activity,
    badge: "Borramiento de Surcos Frontales",
    muscleGroup: "Músculo Occipitofrontal (Vientre Frontal)",
    nerveBranch: "Rama Temporal del Nervio Facial",
    healthySideBehavior: "La ceja se eleva con soltura y se marcan las líneas horizontales naturales de expresión en la frente.",
    affectedSideBehavior: "La ceja del lado afectado se queda estática o caída, y la piel de ese lado de la frente permanece completamente lisa y sin pliegues.",
    didacticExplanation: "Las arrugas de la frente son el resultado de la tracción del músculo frontal. Al inflamarse el nervio, este músculo pierde la orden eléctrica del cerebro. Sentirás la ceja 'pesada', como si tuvieras un peso apoyado sobre el ojo.",
    mirrorExercise: "Coloca tres dedos sobre la ceja afectada y elévala suavemente hasta igualar la altura de la ceja sana. Mantén 3 segundos y relaja. Hazlo 5 veces al día con calma.",
    clinicalTherapy: "Electroacupuntura de baja frecuencia (2 a 4 Hz) en puntos frontales motores para reconectar las fibras axónicas con el músculo frontal.",
    acupuncturePoints: [
      { code: "VB14", name: "Yangbai", action: "Punto motor maestro a 1 cm sobre la ceja para restaurar la elevación frontal" },
      { code: "Yuyao", name: "Punto Centro Ceja", action: "Punto extraordinario para despertar la expresividad en la mirada" },
      { code: "IG4", name: "Hegu", action: "Punto maestro distal en la mano que desinflama y regula la cara y la cabeza" }
    ],
    warningNote: "No fuerces la frente frunciendo el ceño bruscamente. El estímulo debe ser siempre sutil y guiado por la simetría.",
    svgHighlights: { faceExpression: "brow-raise" }
  },
  {
    id: "soplar-beber",
    name: "Silbar, Soplar o Beber Agua",
    icon: RefreshCw,
    badge: "Sellado Labial y Control Bucinador",
    muscleGroup: "Músculo Bucinador y Orbicular de los Labios",
    nerveBranch: "Rama Bucal y Marginal del Nervio Facial",
    healthySideBehavior: "Los labios se cierran en círculo hermético ('forma de O') y sostienen los líquidos sin fugas al masticar o tragar.",
    affectedSideBehavior: "El aire o el líquido se escapan por la comisura débil al tomar sopa o agua. La comida tiende a quedarse atrapada entre la encía y la mejilla.",
    didacticExplanation: "El músculo bucinador funciona como una pared que mantiene la comida en el centro de tu boca al masticar. Cuando no tiene tono, la comida se desliza hacia el lado débil y los labios no logran un sello hermético al beber.",
    mirrorExercise: "Pronuncia despacio y con calma vocales como 'O' y 'U' alargando el sonido. Si tomas líquidos, usa un vaso con boquilla o una pajilla suave sosteniendo la comisura.",
    clinicalTherapy: "Estimulación combinada en carrillo y surco nasogeniano con moxibustión indirecta tibia para mejorar la circulación de la mucosa oral.",
    acupuncturePoints: [
      { code: "IG20", name: "Yingxiang", action: "Junto a la aleta nasal; abre la ventilación y activa el surco nasogeniano" },
      { code: "Ren24", name: "Chengjiang", action: "En el surco mentolabial; fortalece el sellado del labio inferior" },
      { code: "E4", name: "Dicang", action: "Restablece el control del ángulo bucal" }
    ],
    warningNote: "Limpia suavemente con la lengua o el cepillo los restos de comida que queden en la encía para evitar irritaciones bucales.",
    svgHighlights: { faceExpression: "whistle" }
  },
  {
    id: "origen-oido",
    name: "Dolor Detrás de la Oreja",
    icon: Flame,
    badge: "Salida del Tronco del Nervio Facial",
    muscleGroup: "Foramen Estilomastoideo y Vientre Posterior del Digástrico",
    nerveBranch: "Tronco Principal del Par Craneal VII",
    healthySideBehavior: "Zona retroauricular sin molestias, sensibilidad normal al sonido y deglución confortable.",
    affectedSideBehavior: "Dolor sordo o punzante en el hueso mastoides (detrás de la oreja) que suele iniciar 1 o 2 días antes de la parálisis. Puede haber hipersensibilidad a sonidos fuertes.",
    didacticExplanation: "El nervio facial viaja por un canal óseo muy estrecho dentro del cráneo. Cuando un virus o la inflamación por estrés lo hincha, queda atrapado contra el hueso en la salida detrás de tu oreja. Ese es el dolor de advertencia característico.",
    mirrorExercise: "Aplica una compresa de calor suave y seco detrás de la oreja durante 15 minutos 2 veces al día. Respira profundo y evita masajear esa zona con fuerza.",
    clinicalTherapy: "Acupuntura antiinflamatoria en el punto Yifeng con moxibustión de artemisa para mejorar el drenaje vascular y liberar la presión sobre el nervio.",
    acupuncturePoints: [
      { code: "SJ17", name: "Yifeng", action: "Punto maestro detrás del lóbulo de la oreja donde emerge el nervio facial" },
      { code: "VB20", name: "Fengchi", action: "En la base del cráneo; dispersa la tensión cervical y mejora el flujo sanguíneo" },
      { code: "SJ5", name: "Waiguan", action: "Punto distal en el antebrazo para dispersar la inflamación de canales" }
    ],
    warningNote: "Nunca apliques hielo directo en esta zona; el frío contrae los vasos sanguíneos y empeora la isquemia del nervio facial.",
    svgHighlights: { faceExpression: "ear-nerve" }
  }
];

/* =========================================================================
   DATOS DIDÁCTICOS: ZONAS ANATÓMICAS
   ========================================================================= */

const ANATOMICAL_ZONES: AnatomicalZone[] = [
  {
    id: "frente",
    name: "Frente y Ceja",
    popularName: "Zona Superior del Rostro",
    shortDesc: "Expresión de asombro y elevación ciliar",
    nerveBranch: "Rama Temporal del Nervio Facial",
    primaryMuscle: "Músculo frontal y superciliar",
    priorityLevel: "Prioridad Alta",
    accentColor: "#059669",
    coordinates: { cx: 290, cy: 125, r: 35 },
    symptomsList: [
      "La ceja del lado afectado se nota más baja o caída",
      "Al mirar hacia arriba no se forman las arruguitas naturales de la frente",
      "Sensación de pesadez constante sobre la mirada"
    ],
    whyItHappens: "La rama temporal es la más larga y superior. Cuando el estímulo nervioso se bloquea, las fibras musculares frontales quedan sin inervación.",
    homeExercise: "Frente al espejo, asiste con la yema del dedo la ceja hacia arriba suavemente sin forzar, 5 repeticiones de 3 segundos.",
    clinicalTreatment: {
      frequency: "2 Hz a 4 Hz (Microestímulo suave)",
      wave: "Onda discontinua que no fatiga el músculo",
      points: [
        { code: "VB14", name: "Yangbai", meaning: "Punto motor maestro para levantar la ceja" },
        { code: "SJ23", name: "Sizhukong", meaning: "Despeja el arco ciliar exterior" }
      ],
      thermal: "Calor sutil de moxa indirecta para estimular la microcirculación frontal."
    }
  },
  {
    id: "ojo",
    name: "Párpado y Ojo",
    popularName: "Zona Ocular Prioritaria",
    shortDesc: "Cierre palpebral, protección de la córnea y lagrimeo",
    nerveBranch: "Rama Cigomática del Nervio Facial",
    primaryMuscle: "Músculo orbicular del ojo (esfínter)",
    priorityLevel: "Prioridad Máxima",
    accentColor: "#2563eb",
    coordinates: { cx: 295, cy: 195, r: 34 },
    symptomsList: [
      "Incapacidad para cerrar el párpado al dormir o parpadear (Lagoftalmos)",
      "El ojo sube al intentar cerrarlo (Signo de Bell)",
      "Lagrimeo continuo o sensación de tierra y resequedad",
      "Sensibilidad molesta a la luz del sol o focos"
    ],
    whyItHappens: "El músculo orbicular rodea el ojo como un anillo elástico. Si el nervio facial falla, el ojo no puede cerrarse por sí mismo.",
    homeExercise: "Cierra suavemente los ojos y ayuda al párpado afectado a descender con la yema de tu dedo limpio. Aplica gotas lubricantes.",
    clinicalTreatment: {
      frequency: "1 Hz a 2 Hz (Subumbral, ultrasuave)",
      wave: "Microcorrientes continuas sin sacudida física",
      points: [
        { code: "V2", name: "Zanzhu", meaning: "Activa el descenso palpebral superior" },
        { code: "Taiyang", name: "Punto Sien", meaning: "Drena la tensión y mejora la lubricación" }
      ],
      thermal: "Ambiente cálido y protección con gasa estéril; nunca calor excesivo directo en el globo ocular."
    }
  },
  {
    id: "mejilla",
    name: "Mejilla y Surco",
    popularName: "Zona Media y Pómulo",
    shortDesc: "Simetría del pómulo y surco nasogeniano",
    nerveBranch: "Rama Bucal Superior y Cigomática",
    primaryMuscle: "Cigomático mayor, menor y elevador del labio",
    priorityLevel: "Prioridad Alta",
    accentColor: "#0284c7",
    coordinates: { cx: 290, cy: 265, r: 32 },
    symptomsList: [
      "Borramiento del surco nasogeniano (la línea entre nariz y boca)",
      "Sensación de mejilla dormida, floja o caída",
      "Pérdida del volumen natural al hablar"
    ],
    whyItHappens: "Los músculos que sostienen la mejilla pierden tensión elástica y caen por la gravedad terrenal.",
    homeExercise: "Masajea suavemente con dos dedos desde la comisura hacia el pómulo en dirección diagonal ascendente.",
    clinicalTreatment: {
      frequency: "3 Hz a 5 Hz (Bioestímulo motor)",
      wave: "Onda rítmica bifásica",
      points: [
        { code: "IG20", name: "Yingxiang", meaning: "Reactiva el surco al lado de la nariz" },
        { code: "E6", name: "Jiache", meaning: "Nutre el músculo masetero y el pómulo" }
      ],
      thermal: "Compresa tibia seca para oxigenar los capilares del pómulo."
    }
  },
  {
    id: "comisura",
    name: "Boca y Sonrisa",
    popularName: "Zona Labial y Articulación",
    shortDesc: "Sonrisa simétrica, hablar claro y comer sin fugas",
    nerveBranch: "Rama Bucal y Marginal Mandibular",
    primaryMuscle: "Orbicular de los labios, bucinador y risorio",
    priorityLevel: "Prioridad Máxima",
    accentColor: "#b86d36",
    coordinates: { cx: 285, cy: 355, r: 32 },
    symptomsList: [
      "La comisura de la boca se va hacia el lado contrario",
      "Escape de agua o líquidos al beber vasos sin popote",
      "Dificultad para pronunciar letras como B, P, M",
      "Comida atrapada en la encía del lado débil"
    ],
    whyItHappens: "El lado sano sigue jalando con fuerza normal mientras el lado afectado no opone resistencia muscular.",
    homeExercise: "Frente al espejo, asiste con el dedo la comisura débil hacia arriba mientras sonríes al 30% de tu fuerza sin exagerar.",
    clinicalTreatment: {
      frequency: "2 Hz a 4 Hz calibrada",
      wave: "Onda dispersa-densa para despertar receptores motores",
      points: [
        { code: "E4", name: "Dicang", meaning: "Punto motor clave de la comisura de la boca" },
        { code: "Du26", name: "Renzhong", meaning: "Centra la línea media labial" }
      ],
      thermal: "Moxibustión indirecta tibia en puntos de la mandíbula y mejilla."
    }
  },
  {
    id: "menton",
    name: "Mentón y Mandíbula",
    popularName: "Zona Inferior y Barbilla",
    shortDesc: "Tono del labio inferior y deglución",
    nerveBranch: "Rama Marginal de la Mandíbula y Cervical",
    primaryMuscle: "Músculo mentoniano y depresor del labio inferior",
    priorityLevel: "Reactivación Continua",
    accentColor: "#7c3aed",
    coordinates: { cx: 275, cy: 425, r: 28 },
    symptomsList: [
      "Flacidez en el borde inferior del labio y mentón",
      "Sensación de tensión en la mandíbula o cuello",
      "Dificultad para fruncir el mentón con simetría"
    ],
    whyItHappens: "El nervio marginal viaja a lo largo del borde inferior del maxilar inferior inervando el labio inferior.",
    homeExercise: "Coloca la mano bajo el mentón y traga saliva suavemente manteniendo la postura erguida.",
    clinicalTreatment: {
      frequency: "2 Hz (Relajación y reactivación)",
      wave: "Onda continua suave",
      points: [
        { code: "Ren24", name: "Chengjiang", meaning: "Centro del mentón; equilibra la tensión inferior" },
        { code: "E5", name: "Daying", meaning: "Borde mandibular; nutre la arteria facial" }
      ],
      thermal: "Calor relajante en la musculatura suprahioidea y cuello."
    }
  },
  {
    id: "oido-mastoides",
    name: "Salida del Nervio (Detrás de la Oreja)",
    popularName: "Punto de Origen Clínico",
    shortDesc: "Foramen estilomastoideo y desinflamación del nervio",
    nerveBranch: "Tronco Principal del Par Craneal VII",
    primaryMuscle: "Paso óseo del nervio facial en el hueso temporal",
    priorityLevel: "Prioridad Máxima",
    accentColor: "#dc2626",
    coordinates: { cx: 385, cy: 280, r: 28 },
    symptomsList: [
      "Dolor sordo detrás de la oreja (hueso mastoides)",
      "Sensación de oído tapado o ruidos muy fuertes que molestan (hiperacusia)",
      "Rigidez o tensión en el cuello del mismo lado"
    ],
    whyItHappens: "Aquí es donde el nervio facial sale del cráneo a través de un orificio óseo minúsculo. Al hincharse, se estrangula contra el hueso.",
    homeExercise: "Aplica compresa tibia seca en la zona de la oreja y cuello. Evita masajes fuertes o presiones dolorosas.",
    clinicalTreatment: {
      frequency: "Antiinflamatorio inicial manual / microcorrientes",
      wave: "Estimulación sedante de liberación fascial",
      points: [
        { code: "SJ17", name: "Yifeng", meaning: "Punto maestro donde el nervio sale del cráneo" },
        { code: "VB20", name: "Fengchi", meaning: "Drena la inflamación de la base de la nuca" }
      ],
      thermal: "Moxibustión indirecta para dispersar el viento-frío y favorecer el retorno venoso."
    }
  }
];

/* =========================================================================
   COMPONENTE PRINCIPAL: GUÍA DIDÁCTICA FACIAL
   ========================================================================= */

export const FacialHeatmap: React.FC = () => {
  // Pestaña activa
  const [activeTab, setActiveTab] = useState<TabMode>("expresiones");

  // Estado del simulador de expresiones
  const [selectedExpressionId, setSelectedExpressionId] = useState<string>("sonreir");
  const selectedExpression = EXPRESSIONS_DATA.find((e) => e.id === selectedExpressionId) || EXPRESSIONS_DATA[0];

  // Estado del explorador anatómico
  const [selectedZoneId, setSelectedZoneId] = useState<string>("ojo");
  const [showAcupuncturePoints, setShowAcupuncturePoints] = useState<boolean>(true);
  const selectedZone = ANATOMICAL_ZONES.find((z) => z.id === selectedZoneId) || ANATOMICAL_ZONES[1];

  // Estado del autotest interactivo
  const [quizDays, setQuizDays] = useState<"aguda" | "subaguda" | "secuelas">("aguda");
  const [quizEye, setQuizEye] = useState<"cerrado" | "parcial" | "abierto">("abierto");
  const [quizMouth, setQuizMouth] = useState<"grave" | "moderada" | "leve">("grave");

  return (
    <section 
      id="guia-interactiva-facial" 
      className="py-14 sm:py-20 px-4 bg-[#fcfbfa] border-b border-[#e5dbcb] relative scroll-mt-20 overflow-hidden"
    >
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* ================================================================= */}
        {/* ENCABEZADO DIDÁCTICO Y CLARO                                      */}
        {/* ================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="text-xs font-semibold text-[#3e685f] tracking-widest uppercase mb-2">
            Guía Didáctica Facial Interactiva
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#12242b] tracking-tight leading-snug mb-3 text-balance">
            Comprende Tu Rostro y Acelera Tu Recuperación
          </h2>

          <div className="w-16 h-1 bg-[#b86d36] mx-auto rounded-full mb-4" />

          <p className="text-sm sm:text-base text-[#3d4c44] font-light leading-relaxed">
            Una herramienta didáctica y funcional diseñada para pacientes: descubre qué le ocurre a cada músculo de tu cara, 
            aprende a realizar los movimientos correctos frente al espejo y conoce el tratamiento clínico exacto para reactivarlo.
          </p>

          {/* Badges Didácticos de Alto Valor */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5 text-xs text-[#273c4a]">
            <span className="bg-white px-3 py-1.5 rounded-full border border-[#e5dbcb] font-semibold flex items-center gap-1.5 shadow-2xs">
              <CheckCircle2 size={13} className="text-emerald-600" />
              Comparativa Lado Sano vs Afectado
            </span>
            <span className="bg-white px-3 py-1.5 rounded-full border border-[#e5dbcb] font-semibold flex items-center gap-1.5 shadow-2xs">
              <ShieldCheck size={13} className="text-[#3e685f]" />
              Ejercicios Seguros sin Sincinesias
            </span>
            <span className="bg-white px-3 py-1.5 rounded-full border border-[#e5dbcb] font-semibold flex items-center gap-1.5 shadow-2xs">
              <Zap size={13} className="text-blue-600" />
              Puntos de Electroacupuntura Médica
            </span>
          </div>
        </div>

        {/* ================================================================= */}
        {/* SELECTOR DE PESTAÑAS PRINCIPALES (SÚPER FUNCIONAL)               */}
        {/* ================================================================= */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#ede5d8] p-1.5 rounded-2xl sm:rounded-full flex flex-wrap gap-1 max-w-3xl w-full justify-center shadow-inner">
            <button
              onClick={() => setActiveTab("expresiones")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "expresiones"
                  ? "bg-[#18313a] text-white shadow-md scale-102"
                  : "text-[#3d4c44] hover:bg-white/60"
              }`}
            >
              <Smile size={16} />
              <span>1. Simulador de Expresiones</span>
            </button>

            <button
              onClick={() => setActiveTab("anatomia")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "anatomia"
                  ? "bg-[#18313a] text-white shadow-md scale-102"
                  : "text-[#3d4c44] hover:bg-white/60"
              }`}
            >
              <Compass size={16} />
              <span>2. Explorador Anatómico</span>
            </button>

            <button
              onClick={() => setActiveTab("semaforo")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "semaforo"
                  ? "bg-[#18313a] text-white shadow-md scale-102"
                  : "text-[#3d4c44] hover:bg-white/60"
              }`}
            >
              <ShieldCheck size={16} />
              <span>3. Qué SÍ vs Qué NO Hacer</span>
            </button>

            <button
              onClick={() => setActiveTab("autoevaluacion")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "autoevaluacion"
                  ? "bg-[#18313a] text-white shadow-md scale-102"
                  : "text-[#3d4c44] hover:bg-white/60"
              }`}
            >
              <Clock size={16} />
              <span>4. Calculadora de Etapa</span>
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* PESTAÑA 1: SIMULADOR DE MOVIMIENTOS Y EXPRESIONES                */}
        {/* ================================================================= */}
        {activeTab === "expresiones" && (
          <div className="space-y-6">
            {/* Barra de Movimientos Disponibles para Probar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {EXPRESSIONS_DATA.map((item) => {
                const isSelected = item.id === selectedExpressionId;
                const IconComp = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedExpressionId(item.id)}
                    className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#18313a] text-white border-[#18313a] shadow-md ring-2 ring-[#b86d36]"
                        : "bg-white hover:bg-[#faf8f5] border-[#e5dbcb] text-[#12242b]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isSelected ? "bg-[#b86d36] text-white" : "bg-emerald-50 text-[#18313a]"
                      }`}>
                        <IconComp size={17} />
                      </div>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      )}
                    </div>
                    <div>
                      <span className={`text-xs sm:text-sm font-bold block leading-tight ${isSelected ? "text-white" : "text-[#12242b]"}`}>
                        {item.name}
                      </span>
                      <span className={`text-[10px] mt-0.5 block truncate ${isSelected ? "text-stone-300" : "text-[#577864]"}`}>
                        {item.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Contenido Dividido: Didáctica Visual a la Izquierda + Panel Explicativo a la Derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* LADO VISUAL HUMANO DIDÁCTICO (5 cols en LG) */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-[#e5dbcb] shadow-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#e5dbcb]">
                  <span className="text-xs font-bold text-[#18313a] flex items-center gap-1.5 uppercase tracking-wider">
                    <Activity size={14} className="text-[#b86d36]" />
                    Simulación Visual Didáctica
                  </span>
                  <span className="text-[11px] font-semibold text-[#577864] bg-[#faf8f5] px-2.5 py-0.5 rounded-full border border-[#e5dbcb]">
                    {selectedExpression.name}
                  </span>
                </div>

                {/* Etiquetas de Comparativa Visual */}
                <div className="flex justify-between items-center px-3 mb-3 text-[11px] font-bold uppercase tracking-wider">
                  <span className="text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-700" />
                    Lado Normal
                  </span>
                  <span className="text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Activity size={12} className="text-amber-700" />
                    Lado con Debilidad
                  </span>
                </div>

                {/* Ilustración Didáctica del Rostro */}
                <div className="relative w-full aspect-4/5 max-w-[360px] mx-auto select-none bg-[#faf8f5] rounded-2xl border border-[#e5dbcb] p-3 flex items-center justify-center">
                  <svg
                    viewBox="0 0 500 560"
                    className="w-full h-full drop-shadow-md"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fceddf" />
                        <stop offset="100%" stopColor="#f3ded0" />
                      </linearGradient>

                      <radialGradient id="highlightGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Contorno y Cuello del Rostro Humano */}
                    <path
                      d="M 190 430 L 180 530 L 320 530 L 310 430 Z"
                      fill="#edd5c5"
                      stroke="#d8baa6"
                      strokeWidth="2"
                    />

                    {/* Cara Ovalada Amable */}
                    <path
                      d="M 250 50 
                         C 340 50, 405 110, 405 230 
                         C 405 330, 355 420, 310 460 
                         C 275 485, 225 485, 190 460 
                         C 145 420, 95 330, 95 230 
                         C 95 110, 160 50, 250 50 Z"
                      fill="url(#skinGrad)"
                      stroke="#d8baa6"
                      strokeWidth="3"
                    />

                    {/* Orejas */}
                    <path d="M 95 220 C 75 230, 75 290, 97 310" fill="#edd5c5" stroke="#d8baa6" strokeWidth="2.5" />
                    <path d="M 405 220 C 425 230, 425 290, 403 310" fill="#edd5c5" stroke="#d8baa6" strokeWidth="2.5" />

                    {/* Línea Central de Simetría (Punteada Didáctica) */}
                    <line
                      x1="250"
                      y1="50"
                      x2="250"
                      y2="480"
                      stroke="#b86d36"
                      strokeOpacity="0.4"
                      strokeDasharray="5 5"
                      strokeWidth="2"
                    />

                    {/* Nariz Centrada */}
                    <g stroke="#9c7865" strokeWidth="2.5" fill="none" strokeLinecap="round">
                      <path d="M 250 170 L 250 265 L 238 278 Q 250 286 262 278" />
                    </g>

                    {/* =============================================== */}
                    {/* LADO SANO (IZQUIERDA - x: 95 a 250)             */}
                    {/* =============================================== */}
                    <g>
                      {/* Ceja Sana */}
                      <path
                        d="M 135 145 Q 185 125 235 145"
                        fill="none"
                        stroke="#2d4334"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                      {/* Líneas de expresión frente sana al levantar cejas */}
                      {selectedExpression.id === "levantar-cejas" && (
                        <g stroke="#577864" strokeWidth="2" strokeLinecap="round" opacity="0.75">
                          <path d="M 155 110 Q 195 102 235 110" />
                          <path d="M 150 125 Q 195 118 235 125" />
                        </g>
                      )}

                      {/* Ojo Sano */}
                      {selectedExpression.id === "cerrar-ojos" ? (
                        /* Ojo cerrado normal (párpado baja completamente) */
                        <path
                          d="M 145 195 Q 185 208 225 195"
                          fill="none"
                          stroke="#2d4334"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      ) : (
                        /* Ojo abierto normal con iris */
                        <g>
                          <ellipse cx="185" cy="195" rx="30" ry="15" fill="#ffffff" stroke="#876550" strokeWidth="2" />
                          <circle cx="185" cy="195" r="9" fill="#12242b" />
                          <circle cx="188" cy="192" r="3" fill="#ffffff" />
                        </g>
                      )}

                      {/* Surco nasogeniano lado sano */}
                      <path
                        d="M 230 265 Q 205 310 195 355"
                        fill="none"
                        stroke="#876550"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        opacity={selectedExpression.id === "sonreir" ? "0.9" : "0.5"}
                      />

                      {/* Mitad Izquierda de la Boca (Lado Sano) */}
                      {selectedExpression.id === "sonreir" && (
                        /* Sonrisa activa que sube con vigor */
                        <path
                          d="M 250 355 Q 210 355 180 335"
                          fill="none"
                          stroke="#a83232"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                        />
                      )}
                      {selectedExpression.id === "soplar-beber" && (
                        /* Forma de O cerrada */
                        <path
                          d="M 250 360 Q 225 360 215 355"
                          fill="none"
                          stroke="#a83232"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      )}
                      {selectedExpression.id !== "sonreir" && selectedExpression.id !== "soplar-beber" && (
                        <path
                          d="M 250 355 Q 215 355 185 350"
                          fill="none"
                          stroke="#a83232"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      )}
                    </g>

                    {/* =============================================== */}
                    {/* LADO CON DEBILIDAD (DERECHA - x: 250 a 405)     */}
                    {/* =============================================== */}
                    <g>
                      {/* Ceja Afectada */}
                      {selectedExpression.id === "levantar-cejas" ? (
                        /* La ceja afectada no sube, queda caída y plana */
                        <path
                          d="M 265 155 Q 315 154 365 165"
                          fill="none"
                          stroke="#876550"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                        />
                      ) : (
                        <path
                          d="M 265 152 Q 315 150 365 162"
                          fill="none"
                          stroke="#876550"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      )}

                      {/* Ojo Afectado */}
                      {selectedExpression.id === "cerrar-ojos" ? (
                        /* Lagoftalmos + Signo de Bell: ojo entreabierto y pupila sube */
                        <g>
                          <ellipse cx="315" cy="195" rx="32" ry="18" fill="#ffffff" stroke="#b86d36" strokeWidth="2.5" />
                          {/* Globo ocular girado hacia arriba (Signo de Bell) */}
                          <circle cx="315" cy="184" r="7" fill="#876550" opacity="0.6" />
                          <path d="M 285 205 Q 315 208 345 205" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" />
                        </g>
                      ) : (
                        <g>
                          <ellipse cx="315" cy="195" rx="32" ry="18" fill="#ffffff" stroke="#876550" strokeWidth="2" />
                          <circle cx="315" cy="195" r="9" fill="#12242b" />
                          <circle cx="318" cy="192" r="3" fill="#ffffff" />
                        </g>
                      )}

                      {/* Surco nasogeniano borrado (línea tenue o punteada) */}
                      <path
                        d="M 270 265 Q 285 310 295 355"
                        fill="none"
                        stroke="#b86d36"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                        opacity="0.4"
                      />

                      {/* Mitad Derecha de la Boca (Lado Afectado) */}
                      {selectedExpression.id === "sonreir" && (
                        /* La boca cae hacia abajo o es jalada a la izquierda */
                        <g>
                          <path
                            d="M 250 355 Q 285 362 310 380"
                            fill="none"
                            stroke="#b86d36"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                          {/* Flecha didáctica indicando la tracción hacia el lado sano */}
                          <line x1="250" y1="340" x2="200" y2="330" stroke="#059669" strokeWidth="2.5" strokeDasharray="3 3" />
                          <polygon points="195,329 203,325 203,335" fill="#059669" />
                        </g>
                      )}
                      {selectedExpression.id === "soplar-beber" && (
                        /* Labio entreabierto con escape */
                        <path
                          d="M 250 360 Q 280 365 305 375"
                          fill="none"
                          stroke="#b86d36"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      )}
                      {selectedExpression.id !== "sonreir" && selectedExpression.id !== "soplar-beber" && (
                        <path
                          d="M 250 355 Q 280 358 310 370"
                          fill="none"
                          stroke="#b86d36"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      )}

                      {/* Resplandor focal si es detrás de la oreja */}
                      {selectedExpression.id === "origen-oido" && (
                        <circle cx="403" cy="280" r="45" fill="url(#highlightGlow)" className="animate-pulse" />
                      )}
                    </g>
                  </svg>
                </div>

                {/* Explicación didáctica breve al pie del gráfico */}
                <div className="mt-3 p-3 rounded-2xl bg-[#faf8f5] border border-[#e5dbcb] text-xs text-[#3d4c44]">
                  <strong className="block text-[#18313a] font-semibold mb-1">
                    🔍 Observación en el espejo:
                  </strong>
                  <p className="font-light leading-snug">
                    {selectedExpression.affectedSideBehavior}
                  </p>
                </div>
              </div>

              {/* PANEL DIDÁCTICO Y CLÍNICO DETALLADO (7 cols en LG) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-[#e5dbcb] shadow-md space-y-5">
                
                {/* Cabecera del Movimiento */}
                <div className="border-b border-[#e5dbcb] pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3e685f] flex items-center gap-1">
                      <Activity size={13} />
                      Movimiento Seleccionado
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full font-bold bg-amber-50 text-amber-900 border border-amber-200">
                      {selectedExpression.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#12242b]">
                    {selectedExpression.name}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs text-[#577864]">
                    <div>
                      <strong className="text-[#18313a]">Músculos implicados:</strong> {selectedExpression.muscleGroup}
                    </div>
                    <div>
                      <strong className="text-[#18313a]">Nervio responsable:</strong> {selectedExpression.nerveBranch}
                    </div>
                  </div>
                </div>

                {/* COMPARATIVA DIDÁCTICA: LADO SANO VS LADO AFECTADO */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <span className="text-[11px] font-bold uppercase text-emerald-900 flex items-center gap-1.5 mb-1.5">
                      <CheckCircle2 size={14} className="text-emerald-700" />
                      Lado Normal (Sano)
                    </span>
                    <p className="text-xs text-emerald-950 leading-relaxed font-light">
                      {selectedExpression.healthySideBehavior}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                    <span className="text-[11px] font-bold uppercase text-amber-900 flex items-center gap-1.5 mb-1.5">
                      <Activity size={14} className="text-amber-700" />
                      Lado con Parálisis
                    </span>
                    <p className="text-xs text-amber-950 leading-relaxed font-light">
                      {selectedExpression.affectedSideBehavior}
                    </p>
                  </div>
                </div>

                {/* EXPLICACIÓN DIDÁCTICA: ¿POR QUÉ OCURRE ESTO? */}
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e5dbcb]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#18313a] flex items-center gap-1.5 mb-1.5">
                    <HelpCircle size={15} className="text-[#b86d36]" />
                    ¿Por qué ocurre mecánicamente?
                  </span>
                  <p className="text-xs sm:text-sm text-[#3d4c44] leading-relaxed font-light">
                    {selectedExpression.didacticExplanation}
                  </p>
                </div>

                {/* EJERCICIO DIDÁCTICO GUIADO FRENTE AL ESPEJO */}
                <div className="p-4 rounded-2xl bg-linear-to-r from-[#faf8f5] to-[#f5eee1] border border-[#e2d5c3]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b86d36] flex items-center gap-1.5 mb-1.5">
                    <Activity size={15} />
                    Ejercicio Guiado Frente al Espejo (Hazlo con Calma):
                  </span>
                  <p className="text-xs sm:text-sm text-[#2b3a32] leading-relaxed font-medium">
                    {selectedExpression.mirrorExercise}
                  </p>
                </div>

                {/* PROTOCOLO CLÍNICO DE ELECTROACUPUNTURA */}
                <div className="p-4 rounded-2xl bg-white border border-[#e5dbcb]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#12242b] flex items-center gap-1.5 mb-2">
                    <Zap size={14} className="text-emerald-700" />
                    Cómo te Ayudamos en Clínica con Electroacupuntura:
                  </span>
                  <p className="text-xs text-[#3d4c44] mb-3 leading-relaxed">
                    {selectedExpression.clinicalTherapy}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedExpression.acupuncturePoints.map((pt, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#e5dbcb] text-xs">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="bg-[#18313a] text-white font-mono text-[10px] px-1.5 py-0.5 rounded font-bold">
                            {pt.code}
                          </span>
                          <strong className="text-[#18313a] text-xs font-semibold">{pt.name}</strong>
                        </div>
                        <span className="text-[11px] text-[#577864] block leading-tight">{pt.action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ADVERTENCIA DE SEGURIDAD DIDÁCTICA */}
                <div className="p-3.5 rounded-xl bg-red-50/80 border border-red-200 text-xs text-red-950 flex items-start gap-2.5">
                  <AlertTriangle size={16} className="text-red-700 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Importante:</strong> {selectedExpression.warningNote}
                  </p>
                </div>

                {/* BOTÓN DE WHATSAPP DIRECTO Y CONTEXTUAL */}
                <div className="pt-2">
                  <WhatsAppButton
                    className="w-full bg-[#18313a] hover:bg-[#12242b] text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                    message={`Hola, estuve revisando el simulador para [${selectedExpression.name}]. Presento ${selectedExpression.badge} y deseo agendar una valoración prioritaria para mi parálisis facial en Benito Juárez.`}
                    showIcon={false}
                  >
                    <span>Quiero Tratar este Síntoma ({selectedExpression.name})</span>
                    <ArrowRight size={15} />
                  </WhatsAppButton>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* PESTAÑA 2: EXPLORADOR ANATÓMICO POR ZONAS DEL ROSTRO              */}
        {/* ================================================================= */}
        {activeTab === "anatomia" && (
          <div className="space-y-6">
            
            {/* Selector de Zonas Faciales */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {ANATOMICAL_ZONES.map((zone) => {
                const isSelected = zone.id === selectedZoneId;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZoneId(zone.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#18313a] text-white border-[#18313a] shadow-md ring-2 ring-[#b86d36]"
                        : "bg-white hover:bg-[#faf8f5] border-[#e5dbcb] text-[#12242b]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: zone.accentColor }} 
                      />
                      <span className={`text-[10px] font-bold ${isSelected ? "text-stone-300" : "text-[#577864]"}`}>
                        {zone.priorityLevel === "Prioridad Máxima" ? "Máx" : "Alta"}
                      </span>
                    </div>
                    <div>
                      <strong className="text-xs sm:text-sm font-bold block leading-tight">
                        {zone.name}
                      </strong>
                      <span className={`text-[10px] block truncate ${isSelected ? "text-stone-300" : "text-[#577864]"}`}>
                        {zone.popularName}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Contenedor Anatómico Dividido */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* ROSTRO ANATÓMICO CON PUNTOS INTERACTIVOS (5 cols en LG) */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-[#e5dbcb] shadow-md">
                
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#e5dbcb]">
                  <span className="text-xs font-bold text-[#18313a] flex items-center gap-1.5">
                    <Compass size={14} className="text-[#b86d36]" />
                    Toca Cualquier Zona o Punto
                  </span>

                  {/* Toggle para mostrar/ocultar puntos de acupuntura */}
                  <button
                    onClick={() => setShowAcupuncturePoints(!showAcupuncturePoints)}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#e5dbcb] bg-[#faf8f5] text-[#18313a] hover:bg-[#ede5d8] transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Zap size={11} className={showAcupuncturePoints ? "text-amber-600" : "text-stone-400"} />
                    {showAcupuncturePoints ? "Ocultar Agujas" : "Ver Puntos"}
                  </button>
                </div>

                {/* SVG Anatómico Facial */}
                <div className="relative w-full aspect-4/5 max-w-[380px] mx-auto select-none bg-[#faf8f5] rounded-2xl border border-[#e5dbcb] p-3 flex items-center justify-center">
                  <svg
                    viewBox="0 0 500 560"
                    className="w-full h-full drop-shadow-md"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="skinGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fceddf" />
                        <stop offset="100%" stopColor="#f3ded0" />
                      </linearGradient>

                      <radialGradient id="zoneGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#b86d36" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#b86d36" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Silueta del Cuello y Cabeza */}
                    <path d="M 190 430 L 180 530 L 320 530 L 310 430 Z" fill="#edd5c5" stroke="#d8baa6" strokeWidth="2" />
                    
                    <path
                      d="M 250 50 
                         C 340 50, 405 110, 405 230 
                         C 405 330, 355 420, 310 460 
                         C 275 485, 225 485, 190 460 
                         C 145 420, 95 330, 95 230 
                         C 95 110, 160 50, 250 50 Z"
                      fill="url(#skinGrad2)"
                      stroke="#d8baa6"
                      strokeWidth="3"
                    />

                    {/* Orejas */}
                    <path d="M 95 220 C 75 230, 75 290, 97 310" fill="#edd5c5" stroke="#d8baa6" strokeWidth="2" />
                    <path d="M 405 220 C 425 230, 425 290, 403 310" fill="#edd5c5" stroke="#d8baa6" strokeWidth="2" />

                    {/* Línea Central */}
                    <line x1="250" y1="50" x2="250" y2="480" stroke="#b86d36" strokeOpacity="0.4" strokeDasharray="4 4" strokeWidth="1.5" />

                    {/* Ojo Izquierdo (Sano) */}
                    <ellipse cx="185" cy="195" rx="28" ry="14" fill="#ffffff" stroke="#876550" strokeWidth="2" />
                    <circle cx="185" cy="195" r="8" fill="#12242b" />
                    <path d="M 140 145 Q 185 130 230 145" fill="none" stroke="#2d4334" strokeWidth="4" strokeLinecap="round" />

                    {/* Nariz */}
                    <path d="M 250 170 L 250 265 L 238 278 Q 250 286 262 278" fill="none" stroke="#9c7865" strokeWidth="2" strokeLinecap="round" />

                    {/* Boca Base */}
                    <path d="M 250 355 Q 215 355 185 350" fill="none" stroke="#a83232" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M 250 355 Q 280 358 310 372" fill="none" stroke="#b86d36" strokeWidth="3" strokeLinecap="round" />

                    {/* Ramificaciones del Nervio Facial (Didáctico) */}
                    <g stroke="#059669" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.6" strokeLinecap="round">
                      <path d="M 385 280 C 350 260, 330 200, 290 125" />
                      <path d="M 385 280 C 350 260, 330 220, 295 195" />
                      <path d="M 385 280 C 350 260, 320 260, 290 265" />
                      <path d="M 385 280 C 350 280, 320 330, 285 355" />
                      <path d="M 385 280 C 360 340, 320 400, 275 425" />
                    </g>

                    {/* ZONAS CLICKEABLES CON PINES */}
                    {ANATOMICAL_ZONES.map((zone) => {
                      const isSelected = zone.id === selectedZoneId;
                      const { cx, cy, r } = zone.coordinates;

                      return (
                        <g
                          key={zone.id}
                          onClick={() => setSelectedZoneId(zone.id)}
                          className="cursor-pointer group"
                        >
                          {/* Halo al estar seleccionada */}
                          {isSelected && (
                            <circle
                              cx={cx}
                              cy={cy}
                              r={r * 1.5}
                              fill="url(#zoneGlow)"
                              className="animate-pulse"
                            />
                          )}

                          {/* Círculo de la zona */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={r}
                            fill={isSelected ? `${zone.accentColor}33` : "transparent"}
                            stroke={zone.accentColor}
                            strokeWidth={isSelected ? 3 : 1.5}
                            strokeDasharray={isSelected ? "none" : "3 3"}
                            className="transition-all"
                          />

                          {/* Botón Pin */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isSelected ? 11 : 8}
                            fill={zone.accentColor}
                            stroke="#ffffff"
                            strokeWidth={2}
                            className="transition-all group-hover:scale-125 shadow-md"
                          />

                          {/* Etiqueta amigable de la zona */}
                          <g transform={`translate(${cx}, ${cy - (r + 8)})`}>
                            <rect
                              x="-45"
                              y="-14"
                              width="90"
                              height="17"
                              rx="8.5"
                              fill={isSelected ? "#18313a" : "#ffffff"}
                              stroke={zone.accentColor}
                              strokeWidth="1.5"
                            />
                            <text
                              x="0"
                              y="-3"
                              textAnchor="middle"
                              fill={isSelected ? "#ffffff" : "#18313a"}
                              fontSize="9"
                              fontWeight="bold"
                              fontFamily="sans-serif"
                            >
                              {zone.name.split(" ")[0]} {isSelected ? "✓" : ""}
                            </text>
                          </g>
                        </g>
                      );
                    })}

                    {/* Puntos de Acupuntura Médica (Pins Dorados) */}
                    {showAcupuncturePoints && (
                      <g fill="#f59e0b" stroke="#78350f" strokeWidth="1.5">
                        <circle cx="290" cy="115" r="5" />
                        <circle cx="340" cy="155" r="5" />
                        <circle cx="265" cy="155" r="5" />
                        <circle cx="305" cy="235" r="5" />
                        <circle cx="305" cy="370" r="6" />
                        <circle cx="365" cy="355" r="6" />
                        <circle cx="385" cy="280" r="7" fill="#dc2626" />
                      </g>
                    )}
                  </svg>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-[11px] text-[#577864] flex items-center justify-center gap-1">
                    <CheckCircle2 size={12} className="text-[#3e685f]" />
                    Toca cualquier círculo para ver sus síntomas y ejercicios
                  </p>
                </div>
              </div>

              {/* FICHA DIDÁCTICA DE LA ZONA SELECCIONADA (7 cols en LG) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-[#e5dbcb] shadow-md space-y-5">
                
                {/* Cabecera */}
                <div className="border-b border-[#e5dbcb] pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span 
                      className="text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider text-white"
                      style={{ backgroundColor: selectedZone.accentColor }}
                    >
                      {selectedZone.priorityLevel}
                    </span>
                    <span className="text-xs font-semibold text-[#577864]">
                      {selectedZone.popularName}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#12242b]">
                    {selectedZone.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#577864] font-medium mt-0.5">
                    {selectedZone.shortDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                    <div>
                      <strong className="text-[#18313a]">Nervio:</strong> {selectedZone.nerveBranch}
                    </div>
                    <div>
                      <strong className="text-[#18313a]">Músculo principal:</strong> {selectedZone.primaryMuscle}
                    </div>
                  </div>
                </div>

                {/* SÍNTOMAS COMUNES */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18313a] flex items-center gap-1.5 mb-2">
                    <Activity size={14} className="text-[#b86d36]" />
                    Síntomas Habituales en Esta Zona:
                  </h4>
                  <div className="space-y-1.5">
                    {selectedZone.symptomsList.map((sym, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2b3a32]">
                        <span 
                          className="w-2 h-2 rounded-full mt-1.5 shrink-0" 
                          style={{ backgroundColor: selectedZone.accentColor }} 
                        />
                        <span className="leading-snug">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* POR QUÉ SUCEDE */}
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e5dbcb]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18313a] flex items-center gap-1.5 mb-1">
                    <Info size={14} className="text-[#b86d36]" />
                    ¿Por qué sucede? (Explicación Didáctica):
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3d4c44] leading-relaxed font-light">
                    {selectedZone.whyItHappens}
                  </p>
                </div>

                {/* TRATAMIENTO CON ELECTROACUPUNTURA */}
                <div className="p-4 rounded-2xl bg-[#18313a] text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f1d5c2] flex items-center gap-1.5">
                      <Zap size={14} />
                      Tratamiento Clínico de Electroacupuntura
                    </span>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full font-mono">
                      {selectedZone.clinicalTreatment.frequency}
                    </span>
                  </div>

                  <p className="text-xs text-stone-200 mb-3 leading-relaxed">
                    Estimulación mediante microcorrientes con {selectedZone.clinicalTreatment.wave}. {selectedZone.clinicalTreatment.thermal}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedZone.clinicalTreatment.points.map((pt, pIdx) => (
                      <div key={pIdx} className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-xs">
                        <span className="font-mono font-bold text-amber-300 block text-[11px]">
                          {pt.code} - {pt.name}
                        </span>
                        <span className="text-stone-300 text-[11px] leading-tight block mt-0.5">
                          {pt.meaning}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EJERCICIO EN CASA */}
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs">
                  <strong className="text-amber-900 block font-semibold mb-0.5">
                    Ejercicio en casa recomendado:
                  </strong>
                  <span className="text-amber-950 leading-relaxed font-light">
                    {selectedZone.homeExercise}
                  </span>
                </div>

                {/* BOTÓN WHATSAPP */}
                <WhatsAppButton
                  className="w-full bg-[#b86d36] hover:bg-[#a45e2c] text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                  message={`Hola, estuve revisando la guía para la zona de [${selectedZone.name}]. Presento síntomas en esta área y deseo agendar una consulta de valoración en Benito Juárez, CDMX.`}
                  showIcon={false}
                >
                  <span>Consultar sobre {selectedZone.name} por WhatsApp</span>
                  <ArrowRight size={15} />
                </WhatsAppButton>

              </div>

            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* PESTAÑA 3: SEMÁFORO DIDÁCTICO (QUÉ SÍ VS QUÉ NO HACER)            */}
        {/* ================================================================= */}
        {activeTab === "semaforo" && (
          <div className="space-y-6">
            
            <div className="bg-[#faf8f5] p-4 sm:p-5 rounded-2xl border border-[#e5dbcb] text-center max-w-3xl mx-auto">
              <h3 className="font-serif font-bold text-lg text-[#12242b] mb-1">
                La Guía Fundamental de Cuidados para Evitar Secuelas
              </h3>
              <p className="text-xs sm:text-sm text-[#577864] font-light">
                Muchas personas cometen errores involuntarios por consejos familiares que pueden empeorar la condición o generar sincinesias. Sigue estas recomendaciones clínicas:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* COLUMNA VERDE: LO QUE SÍ DEBES HACER */}
              <div className="bg-white rounded-3xl p-6 border-2 border-emerald-500/40 shadow-md">
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-emerald-100">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold font-serif text-lg text-emerald-950">
                      Lo Que SÍ Debes Hacer
                    </h4>
                    <span className="text-[11px] text-emerald-700 font-medium">Recomendaciones clínicas prioritarias</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "1. Protección Ocular las 24 Horas",
                      desc: "Usa lágrimas artificiales cada 2 a 3 horas durante el día y ungüento lubricante con parche oclusivo de noche para evitar que la córnea se reseque o se ulcere."
                    },
                    {
                      title: "2. Calor Seco y Suave (Compresa Tibia)",
                      desc: "Aplica una toalla o compresa tibia 15 minutos en el rostro y detrás de la oreja. El calor promueve el flujo sanguíneo y oxigena las fibras del nervio."
                    },
                    {
                      title: "3. Ejercicios Suaves Asistidos con los Dedos",
                      desc: "Frente al espejo, asiste el lado débil con las yemas de tus dedos a un 30% de tu esfuerzo. Nunca fuerces una mueca: la calma reeduca el cerebro."
                    },
                    {
                      title: "4. Iniciar Electroacupuntura Temprana",
                      desc: "Dentro de los primeros 14 días el nervio conserva su mayor potencial biológico. La estimulación médica suave reactiva los axones dormidos."
                    },
                    {
                      title: "5. Cuidado Emocional y Descanso",
                      desc: "El estrés y la ansiedad elevan el cortisol, lo cual dificulta la desinflamación del nervio. Duerme bien y confía en el proceso de regeneración."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm font-bold text-emerald-950 block mb-0.5">
                          {item.title}
                        </strong>
                        <p className="text-xs text-emerald-900 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMNA ROJA: LO QUE NUNCA DEBES HACER */}
              <div className="bg-white rounded-3xl p-6 border-2 border-red-500/40 shadow-md">
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-red-100">
                  <div className="w-9 h-9 rounded-full bg-red-100 text-red-800 flex items-center justify-center">
                    <XCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold font-serif text-lg text-red-950">
                      Lo Que NUNCA Debes Hacer
                    </h4>
                    <span className="text-[11px] text-red-700 font-medium">Mitos y errores que generan secuelas</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "1. NO Masticar Chicle con Fuerza",
                      desc: "Mito peligroso: masticar chicle sobrecarga el músculo masetero e induce 'sincinesias' (movimientos cruzados involuntarios, como cerrar el ojo al masticar)."
                    },
                    {
                      title: "2. NO Usar Toques Eléctricos Bruscos Caseros",
                      desc: "Aparatos genéricos de toques intensos pueden agotar la placa motora neuromuscular y causar espasmos faciales permanentes."
                    },
                    {
                      title: "3. NO Forzar Muecas Exageradas",
                      desc: "Hacer fuerza excesiva frente al espejo provoca que el lado sano jale violentamente, desbalanceando la memoria motora del cerebro."
                    },
                    {
                      title: "4. NO Aplicar Hielo Directo",
                      desc: "El frío contrae los capilares sanguíneos que nutren el nervio facial, reduciendo el oxígeno que necesita para repararse."
                    },
                    {
                      title: "5. NO Esperar Meses 'a ver si se pasa'",
                      desc: "Posponer el tratamiento especializado reduce la ventana biológica de mayor recuperación. La atención prioritaria marca la diferencia."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-red-50/60 border border-red-100">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✕
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm font-bold text-red-950 block mb-0.5">
                          {item.title}
                        </strong>
                        <p className="text-xs text-red-900 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* PESTAÑA 4: CALCULADORA DE ETAPA / AUTOEVALUACIÓN DIDÁCTICA        */}
        {/* ================================================================= */}
        {activeTab === "autoevaluacion" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5dbcb] shadow-md max-w-4xl mx-auto space-y-6">
            
            <div className="text-center max-w-xl mx-auto pb-4 border-b border-[#e5dbcb]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b86d36] block mb-1">
                Herramienta Funcional de Autoevaluación
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#12242b]">
                Calcula Tu Etapa y Prioridad de Tratamiento
              </h3>
              <p className="text-xs sm:text-sm text-[#577864] font-light mt-1">
                Responde 3 preguntas sencillas para conocer la fase biológica en la que se encuentra tu nervio y las acciones inmediatas recomendadas.
              </p>
            </div>

            {/* PREGUNTA 1: TIEMPO */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-[#12242b] block mb-2">
                1. ¿Cuánto tiempo hace que iniciaron los síntomas en tu rostro?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "aguda", label: "Menos de 14 días", sub: "Ventana de Oro Biológica" },
                  { id: "subaguda", label: "De 2 a 12 semanas", sub: "Etapa de Reinervación" },
                  { id: "secuelas", label: "Más de 3 meses", sub: "Manejo de Secuelas" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuizDays(opt.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      quizDays === opt.id
                        ? "bg-[#18313a] text-white border-[#18313a] shadow-md"
                        : "bg-[#faf8f5] hover:bg-white border-[#e5dbcb] text-[#12242b]"
                    }`}
                  >
                    <strong className="text-xs sm:text-sm block font-bold">{opt.label}</strong>
                    <span className={`text-[11px] block mt-0.5 ${quizDays === opt.id ? "text-stone-300" : "text-[#577864]"}`}>
                      {opt.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* PREGUNTA 2: OJO */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-[#12242b] block mb-2">
                2. ¿Cómo responde tu ojo afectado al intentar cerrarlo?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "abierto", label: "No cierra por completo", sub: "Se ve blanco (Signo de Bell)" },
                  { id: "parcial", label: "Cierra la mitad con esfuerzo", sub: "Cierre palpebral parcial" },
                  { id: "cerrado", label: "Cierra casi normal", sub: "Fuerza palpebral recuperada" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuizEye(opt.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      quizEye === opt.id
                        ? "bg-[#18313a] text-white border-[#18313a] shadow-md"
                        : "bg-[#faf8f5] hover:bg-white border-[#e5dbcb] text-[#12242b]"
                    }`}
                  >
                    <strong className="text-xs sm:text-sm block font-bold">{opt.label}</strong>
                    <span className={`text-[11px] block mt-0.5 ${quizEye === opt.id ? "text-stone-300" : "text-[#577864]"}`}>
                      {opt.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* PREGUNTA 3: BOCA */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-[#12242b] block mb-2">
                3. ¿Qué ocurre con tu boca al sonreír o tomar agua?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "grave", label: "Se desvía mucho y caen líquidos", sub: "Falta de sellado bucal" },
                  { id: "moderada", label: "Desviación moderada al hablar", sub: "Movilidad en progreso" },
                  { id: "leve", label: "Casi simétrica o poca desviación", sub: "Control motor cercano" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuizMouth(opt.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      quizMouth === opt.id
                        ? "bg-[#18313a] text-white border-[#18313a] shadow-md"
                        : "bg-[#faf8f5] hover:bg-white border-[#e5dbcb] text-[#12242b]"
                    }`}
                  >
                    <strong className="text-xs sm:text-sm block font-bold">{opt.label}</strong>
                    <span className={`text-[11px] block mt-0.5 ${quizMouth === opt.id ? "text-stone-300" : "text-[#577864]"}`}>
                      {opt.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* RESULTADO INTERACTIVO CALCULADO */}
            <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-[#18313a] to-[#12242b] text-white shadow-lg space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#f1d5c2] font-bold block">
                    Resultado de tu Autoevaluación
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold font-serif text-[#fbf9f5]">
                    {quizDays === "aguda" ? "Fase Aguda (Ventana de Oro Biológica)" : quizDays === "subaguda" ? "Fase Subaguda (Reactivación de Axones)" : "Fase de Reeducación y Simetría"}
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#b86d36] text-white">
                  {quizEye === "abierto" ? "Prioridad Ocular Máxima" : "Atención Prioritaria"}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-[#d1dfd6] leading-relaxed space-y-2">
                <p>
                  {quizDays === "aguda" && "Te encuentras en los primeros 14 días: el momento biológico más valioso. El nervio aún conserva su capacidad reactiva inmediata. Con electroacupuntura médica suave podemos desinflamar el canal óseo y prevenir secuelas permanentes."}
                  {quizDays === "subaguda" && "Llevas entre 2 y 12 semanas: es la etapa de reinervación activa. Aquí la electroacupuntura estimula el brote axonal guiado hacia los músculos correctos para recuperar la simetría y evitar sincinesias."}
                  {quizDays === "secuelas" && "Han pasado más de 3 meses: no te desanimes. Aunque haya pasado tiempo, la acupuntura y la bioestimulación neuromuscular ayudan a reeducar la memoria motora y liberar contracturas o movimientos involuntarios."}
                </p>

                {quizEye === "abierto" && (
                  <p className="text-amber-200 font-semibold">
                    ⚠️ Importante para tu ojo: Tu párpado aún no cierra completamente. Recuerda usar lágrimas artificiales de día y parche suave de noche sin falta.
                  </p>
                )}
              </div>

              {/* Botón con el resumen personalizado */}
              <div className="pt-2">
                <WhatsAppButton
                  className="w-full bg-[#b86d36] hover:bg-[#a45e2c] text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                  message={`Hola, completé la autoevaluación facial. Llevo [${quizDays === "aguda" ? "menos de 14 días" : quizDays === "subaguda" ? "de 2 a 12 semanas" : "más de 3 meses"}], mi ojo [${quizEye === "abierto" ? "no cierra por completo" : quizEye === "parcial" ? "cierra a la mitad" : "cierra casi normal"}] y mi boca [${quizMouth === "grave" ? "se desvía bastante" : quizMouth === "moderada" ? "desviación moderada" : "poca desviación"}]. Deseo agendar una valoración prioritaria en Benito Juárez.`}
                  showIcon={false}
                >
                  <span>Enviar mi Autoevaluación por WhatsApp</span>
                  <ArrowRight size={15} />
                </WhatsAppButton>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
