"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Flame, 
  TreePine, 
  Mountain, 
  Coins, 
  Droplets, 
  Heart, 
  MessageCircle, 
  BookOpen, 
  ShieldCheck,
  Zap,
  Sun,
  Moon,
  Activity,
  Share2,
  Copy,
  Check,
  Printer,
  Sparkles,
  Compass,
  AlertTriangle,
  MapPin
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FormularioCaptacionCursoGratis } from "@/components/FormularioCaptacionCursoGratis";

// Estructura de opción con componente de 5 Elementos y polaridad Yin-Yang
interface Option {
  element: "madera" | "fuego" | "tierra" | "metal" | "agua";
  yinYang: "yin" | "yang" | "neutro";
  label: string;
  detail: string;
}

interface Question {
  id: number;
  category: "Yin - Yang (Energía & Térmica)" | "Cinco Elementos & Órganos Zang-Fu";
  question: string;
  sub: string;
  options: Option[];
}

export const QUESTIONS: Question[] = [
  // 1. Emociones & Estrés (5 Elementos)
  {
    id: 1,
    category: "Cinco Elementos & Órganos Zang-Fu",
    question: "¿Cómo reacciona tu mente y tu cuerpo ante situaciones de alta presión o estrés?",
    sub: "Observa tu primera respuesta reactiva automática:",
    options: [
      {
        element: "madera",
        yinYang: "yang",
        label: "Irritabilidad, frustración o enojo contenido",
        detail: "Tensión en hombros y cuello, mandíbula apretada o dolor en sienes."
      },
      {
        element: "fuego",
        yinYang: "yang",
        label: "Ansiedad acelerada, inquietud y palpitaciones",
        detail: "Mente hiperactiva, agitación en el pecho y sensación de urgencia constante."
      },
      {
        element: "tierra",
        yinYang: "yin",
        label: "Rumiación mental, sobrepensar y preocupación",
        detail: "Le doy vueltas a las mismas ideas, indecisión y sensación de pesadez corporal."
      },
      {
        element: "metal",
        yinYang: "yin",
        label: "Melancolía, tristeza o ganas de aislarme",
        detail: "Sensación de vacío en el pecho, dificultad para soltar y suspiros frecuentes."
      },
      {
        element: "agua",
        yinYang: "yin",
        label: "Miedo, inseguridad o sensación de parálisis",
        detail: "Falta de confianza básica, sobresaltos fáciles o agotamiento profundo."
      }
    ]
  },
  // 2. Polaridad Térmica Corporal (Yin - Yang)
  {
    id: 2,
    category: "Yin - Yang (Energía & Térmica)",
    question: "¿Cómo se comporta tu temperatura corporal y tu tolerancia al frío o calor?",
    sub: "El equilibrio térmico revela la plenitud de tu Yang o la nutrición de tu Yin:",
    options: [
      {
        element: "agua",
        yinYang: "yin",
        label: "Friolento/a crónico: pies y manos siempre helados",
        detail: "Busco cobijas gruesas, ropa térmica y el aire acondicionado me entumece."
      },
      {
        element: "fuego",
        yinYang: "yang",
        label: "Caluroso/a: calor en el pecho, palmas o rostro rojizo",
        detail: "Me destapo por las noches, sudo fácilmente y tolero mal los ambientes cálidos."
      },
      {
        element: "madera",
        yinYang: "yang",
        label: "Calor en la cabeza o cuello pero pies fríos",
        detail: "El calor sube hacia arriba (dolor de sienes u ojos calientes) mientras las extremidades están frías."
      },
      {
        element: "tierra",
        yinYang: "yin",
        label: "Sensación de frío húmedo y pesadez corporal",
        detail: "No tanto frío seco, sino una humedad interna pesada que empeora con lluvias."
      },
      {
        element: "metal",
        yinYang: "neutro",
        label: "Sensible a corrientes de aire y cambios súbitos",
        detail: "Una ligera corriente de viento frío me provoca estornudos o contractura inmediata en la nuca."
      }
    ]
  },
  // 3. Digestión y Centro (Tierra / Bazo-Estómago)
  {
    id: 3,
    category: "Cinco Elementos & Órganos Zang-Fu",
    question: "¿Cómo funciona tu sistema digestivo habitualmente?",
    sub: "El Bazo y Estómago son la caldera central que produce tu energía vital (Qi):",
    options: [
      {
        element: "tierra",
        yinYang: "yin",
        label: "Inflamación abdominal, gases y pesadez post-comida",
        detail: "Siento que la comida se queda estancada horas y tengo antojo de dulces."
      },
      {
        element: "madera",
        yinYang: "yang",
        label: "Distensión vinculada a mis estados de ánimo",
        detail: "Si como con enojo o prisa se me corta la digestión o me da cólico espasmódico."
      },
      {
        element: "fuego",
        yinYang: "yang",
        label: "Acidez estomacal, reflujo o hambre voraz",
        detail: "Siento fuego o ardor en el esófago y necesidad urgente de tomar cosas frías."
      },
      {
        element: "metal",
        yinYang: "yin",
        label: "Estreñimiento por sequedad o evacuación lenta",
        detail: "Heces secas o deshidratadas que requieren mucho esfuerzo para evacuar."
      },
      {
        element: "agua",
        yinYang: "yin",
        label: "Heces blandas con alimentos sin digerir por frío",
        detail: "Comer ensaladas crudas o beber líquidos helados me provoca diarrea o retortijón."
      }
    ]
  },
  // 4. Ritmo Mental y Sueño (Shen & Corazón - Fuego vs Yin)
  {
    id: 4,
    category: "Yin - Yang (Energía & Térmica)",
    question: "¿Cómo es la calidad de tu descanso nocturno y el ritmo de tus pensamientos?",
    sub: "El Shen (mente/espíritu) requiere calma Yin para descansar en el Corazón:",
    options: [
      {
        element: "fuego",
        yinYang: "yang",
        label: "Dificultad para conciliar el sueño por mente acelerada",
        detail: "Me acuesto y mi cerebro sigue en marcha; calor en las sábanas e insomnio de inicio."
      },
      {
        element: "madera",
        yinYang: "yang",
        label: "Despertar abrupto entre 1:00 am y 3:00 am",
        detail: "Horario del Hígado: Me desvelo con tensión muscular, pensando en pendientes o enojos."
      },
      {
        element: "metal",
        yinYang: "yin",
        label: "Despertar entre 3:00 am y 5:00 am con tos o nostalgia",
        detail: "Horario del Pulmón: Opresión respiratoria, boca seca o sensación de tristeza."
      },
      {
        element: "tierra",
        yinYang: "yin",
        label: "Sueño pesado pero con sueños abundantes y pesadillas",
        detail: "Despierto sintiéndome más cansado/a que cuando me acosté, con la cabeza embotada."
      },
      {
        element: "agua",
        yinYang: "yin",
        label: "Necesidad de orinar varias veces de noche y dolor lumbar",
        detail: "El sueño se interrumpe por micción nocturna y rigidez en la cintura."
      }
    ]
  },
  // 5. Sed y Preferencia de Líquidos (Yin - Yang Térmico)
  {
    id: 5,
    category: "Yin - Yang (Energía & Térmica)",
    question: "¿Qué tipo de bebidas pide naturalmente tu cuerpo durante el día?",
    sub: "El deseo térmico es una brújula directa del calor o frío interno:",
    options: [
      {
        element: "fuego",
        yinYang: "yang",
        label: "Sed constante de agua helada o con cubos de hielo",
        detail: "Bebo grandes tragos y necesito sentir la garganta fría para saciarme."
      },
      {
        element: "agua",
        yinYang: "yin",
        label: "Poca sed, prefiero bebidas tibias, caldos o infusiones",
        detail: "El agua helada me da escalofríos o me corta la digestión; bebo a pequeños sorbos."
      },
      {
        element: "madera",
        yinYang: "yang",
        label: "Gusto por bebidas ácidas o cítricas",
        detail: "Agua con limón, té de menta o sabores agridulces que refresquen mi garganta."
      },
      {
        element: "tierra",
        yinYang: "yin",
        label: "Antojo de bebidas dulces, leches vegetales o licuados",
        detail: "Prefiero bebidas reconfortantes y espesas más que agua sola."
      },
      {
        element: "metal",
        yinYang: "neutro",
        label: "Garganta seca que pide pequeños sorbos humectantes",
        detail: "Sensación de carraspera, picor en la laringe que mejora con miel o agua tibia."
      }
    ]
  },
  // 6. Manifestación en Tejidos y Músculos (5 Elementos)
  {
    id: 6,
    category: "Cinco Elementos & Órganos Zang-Fu",
    question: "¿En qué zona de tu cuerpo físico sientes mayor debilidad o molestia frecuente?",
    sub: "Cada elemento rige un tejido corporal específico según la MTCh:",
    options: [
      {
        element: "madera",
        yinYang: "yang",
        label: "Tendones y articulaciones rígidas, calambres o vista cansada",
        detail: "Rige los tendones: Rigidez al despertar, contracturas musculares y ojos secos."
      },
      {
        element: "tierra",
        yinYang: "yin",
        label: "Músculos blandos, debilidad en extremidades y labios secos",
        detail: "Rige la carne/músculos: Cansancio en brazos y piernas, hematomas fáciles y labios pálidos."
      },
      {
        element: "metal",
        yinYang: "yin",
        label: "Piel seca, eccemas, rinitis alérgica y defensas bajas",
        detail: "Rige la piel y el vello: Resequedad cutánea, falta de brillo y susceptibilidad a gripes."
      },
      {
        element: "agua",
        yinYang: "yin",
        label: "Huesos, dolor en cintura baja, rodillas débiles o zumbido de oídos",
        detail: "Rige los huesos y médula: Molestias lumbares que mejoran al frotar con calor y tinnitus."
      },
      {
        element: "fuego",
        yinYang: "yang",
        label: "Vasos sanguíneos, palpitaciones, rojez en el rostro o aftas",
        detail: "Rige los vasos: Presión arterial fluctuante, rubor fácil y sensación de calor en pecho."
      }
    ]
  },
  // 7. Dinamismo y Vitalidad Diurna (Yin - Yang)
  {
    id: 7,
    category: "Yin - Yang (Energía & Térmica)",
    question: "¿Cómo describirías tu nivel de dinamismo y vitalidad a lo largo de una semana típica?",
    sub: "El equilibrio entre la acción (Yang) y la regeneración (Yin):",
    options: [
      {
        element: "fuego",
        yinYang: "yang",
        label: "Siempre hiperactivo/a: me cuesta muchísimo quedarme quieto/a",
        detail: "Hago mil cosas a la vez, hablo rápido, pero al final del día colapso agotado/a."
      },
      {
        element: "agua",
        yinYang: "yin",
        label: "Fatiga profunda de batería baja: me cuesta arrancar",
        detail: "Siento que me falta energía de reserva y cualquier esfuerzo extra me desgasta días."
      },
      {
        element: "madera",
        yinYang: "yang",
        label: "Picos de energía intensa seguidos de irritabilidad y tensión",
        detail: "Arranco con mucha fuerza impulsiva y me desespero si los demás van lento."
      },
      {
        element: "tierra",
        yinYang: "yin",
        label: "Pesadez después de comer y pereza motriz",
        detail: "Mi mente quiere avanzar pero el cuerpo se siente pesado como si cargara piedras."
      },
      {
        element: "metal",
        yinYang: "neutro",
        label: "Respiración superficial y voz débil cuando me agoto",
        detail: "Cuando me canso, me falta el aire para hablar y pierdo el entusiasmo."
      }
    ]
  },
  // 8. Sensibilidad al Clima y Estaciones (Wu Xing)
  {
    id: 8,
    category: "Cinco Elementos & Órganos Zang-Fu",
    question: "¿Qué clima o factor ambiental empeora más tu bienestar general?",
    sub: "Los Seis Excesos climáticos externos impactan según tu elemento vulnerable:",
    options: [
      {
        element: "madera",
        yinYang: "yang",
        label: "El viento fuerte y los cambios bruscos de primavera",
        detail: "El viento me causa dolor de cabeza, rigidez de cuello o mareos."
      },
      {
        element: "fuego",
        yinYang: "yang",
        label: "El calor húmedo o sofocante del verano",
        detail: "El calor me aturde, me baja la presión o me altera el humor y el sueño."
      },
      {
        element: "tierra",
        yinYang: "yin",
        label: "La humedad ambiental pesada y días lluviosos",
        detail: "La humedad ambiental me inflama las articulaciones y me nubla el pensamiento."
      },
      {
        element: "metal",
        yinYang: "yin",
        label: "El aire seco del otoño y ambientes con aire acondicionado",
        detail: "La sequedad me reseca la garganta, la nariz y me provoca tos seca o piel áspera."
      },
      {
        element: "agua",
        yinYang: "yin",
        label: "El frío invernal y los suelos helados",
        detail: "El frío me agrava el dolor lumbar y me hace orinar a cada rato."
      }
    ]
  },
  // 9. Sabores y Antojos Naturales (Dietoterapia MTC)
  {
    id: 9,
    category: "Cinco Elementos & Órganos Zang-Fu",
    question: "¿Qué sabor busca tu cuerpo instintivamente cuando estás cansado/a o desequilibrado/a?",
    sub: "Los 5 sabores nutren o saturan órganos específicos:",
    options: [
      {
        element: "tierra",
        yinYang: "yin",
        label: "Sabor Dulce (pan, galletas, chocolates, pastas)",
        detail: "El dulce tonifica el Bazo temporalmente pero si se abusa genera más humedad y pesadez."
      },
      {
        element: "madera",
        yinYang: "yang",
        label: "Sabor Ácido / Agridulce (limón, vinagretas, fruta ácida)",
        detail: "El ácido astringe y ayuda al Hígado a contener la fuga de energía."
      },
      {
        element: "agua",
        yinYang: "yin",
        label: "Sabor Salado (papas fritas, botanas saladas, queso curado)",
        detail: "El salado dirige la energía hacia el Riñón pero en exceso desgasta los huesos."
      },
      {
        element: "metal",
        yinYang: "yang",
        label: "Sabor Picante (jengibre, cebolla, mostaza, chiles)",
        detail: "El picante dispersa el estancamiento pulmonar y promueve la sudoración."
      },
      {
        element: "fuego",
        yinYang: "yang",
        label: "Sabor Amargo (café cargado, cacao puro, cerveza, infusiones)",
        detail: "El amargo drena el fuego del Corazón y favorece el descenso de la energía."
      }
    ]
  },
  // 10. Sudoración y Fluidos Orgánicos (Yin - Yang & Jinye)
  {
    id: 10,
    category: "Yin - Yang (Energía & Térmica)",
    question: "¿Cómo se comporta tu sudoración corporal?",
    sub: "El sudor es el líquido del Corazón y refleja la solidez de tu energía defensiva:",
    options: [
      {
        element: "metal",
        yinYang: "yin",
        label: "Sudo muy poco o casi nada, incluso haciendo ejercicio",
        detail: "Poros cerrados: dificultad para transpirar y piel áspera con tendencia a resecarse."
      },
      {
        element: "fuego",
        yinYang: "yang",
        label: "Sudo con facilidad ante el menor esfuerzo o nerviosismo",
        detail: "Sudor espontáneo profuso, especialmente en cabeza, pecho y palmas de las manos."
      },
      {
        element: "agua",
        yinYang: "yin",
        label: "Sudores nocturnos: despierto empapado/a pero con frío",
        detail: "Deficiencia de Yin de Riñón: el calor interno quema los líquidos durante el sueño."
      },
      {
        element: "tierra",
        yinYang: "yin",
        label: "Sudor pegajoso o con sensación de pesadez",
        detail: "Sudoración viscosa vinculada a la humedad interna y digestión lenta."
      },
      {
        element: "madera",
        yinYang: "yang",
        label: "Sudoración axilar rápida cuando me enojo o me pongo tenso/a",
        detail: "El calor de Hígado empuja los fluidos hacia el exterior durante episodios de ira."
      }
    ]
  }
];

export interface PointDetail {
  code: string;
  name: string;
  translation: string;
  role: string;
  anatomicalLocation: string;
  stepByStepLocation: string[];
  palpationSensoryCue: string;
  technique: string;
  caution?: string;
}

export interface ElementProfile {
  name: string;
  organ: string;
  emotion: string;
  climate: string;
  season: string;
  color: string;
  icon: React.ElementType;
  themeColor: string;
  summary: string;
  points: PointDetail[];
  dietAdvice: {
    recommended: string[];
    toAvoid: string[];
    thermalNature: string;
  };
  yangShengTip: string;
  biologicalClock: string;
}

export const ELEMENT_PROFILES: Record<"madera" | "fuego" | "tierra" | "metal" | "agua", ElementProfile> = {
  madera: {
    name: "Elemento Madera (Mù · 木)",
    organ: "Hígado (Zang) & Vesícula Biliar (Fu)",
    emotion: "Ira contenida, frustración, impaciencia y creatividad bloqueada",
    climate: "Viento",
    season: "Primavera",
    color: "Verde / Esmeralda",
    icon: TreePine,
    themeColor: "text-emerald-800 bg-emerald-50 border-emerald-300",
    summary: "Tu desequilibrio principal radica en el Estancamiento de Qi de Hígado (Gan Qi Yu Jie). Cuando el Qi no fluye con soltura, la energía asciende en forma de calor hacia los ojos, cuello y sienes, y la digestión se tensa ante cualquier disgusto.",
    points: [
      {
        code: "H3",
        name: "Taichong",
        translation: "Gran Asalto / Gran Acometida",
        role: "Punto Yuan (Fuente) y Punto Shu-Arroyo del canal del Hígado. Desbloquea la circulación general del Qi y desciende el fuego de la cabeza.",
        anatomicalLocation: "En el dorso del pie, en la depresión distal formada por la unión de los cuerpos del 1.º y 2.º huesos metatarsianos.",
        stepByStepLocation: [
          "Coloca tu dedo índice en el espacio interdigital entre el dedo gordo y el segundo dedo del pie.",
          "Desliza la yema del dedo hacia arriba en dirección al empeine (hacia el tobillo) a lo largo del surco óseo, aproximadamente 1.5 a 2 cun (dos traveses de dedo).",
          "Te toparás con el ángulo donde se unen las bases óseas de ambos metatarsianos; justo antes de la unión se abre una depresión profunda y sensible."
        ],
        palpationSensoryCue: "Al presionar firmemente se siente una molestia sorda, agradable pesadez o sensación DeQi que puede irradiar ligeramente hacia los dedos.",
        technique: "Presiona con el pulgar realizando movimientos circulares lentos y profundos durante 90 a 120 segundos en cada pie. Combina con exhalaciones lentas por la boca para soltar la frustración acumulada.",
        caution: "Apto para todas las edades. No frotar sobre piel lesionada."
      },
      {
        code: "VB34",
        name: "Yanglingquan",
        translation: "Manantial de la Colina Yang",
        role: "Punto He-Mar y Punto de Influencia Maestro de los Tendones y Fascias (Hui-Tendones). Relaja contracturas musculares y espasmos.",
        anatomicalLocation: "En la cara anterolateral externa de la pierna, en la depresión situada inmediatamente por delante y por debajo de la cabeza del peroné.",
        stepByStepLocation: [
          "Siéntate con la rodilla flexionada a 90 grados.",
          "Desliza tu mano por el costado exterior de la pierna, justo debajo de la rodilla, hasta palpar una prominencia ósea redonda (la cabeza del peroné).",
          "Mueve el pulgar medio centímetro hacia abajo y ligeramente hacia adelante; caerás en un hueco anatómico blando entre los músculos peroneos."
        ],
        palpationSensoryCue: "Sensación de alivio y ligero calambre benéfico que relaja los tendones laterales de la pierna y cadera.",
        technique: "Presión sostenida perpendicular durante 1 minuto en ambas piernas. Muy eficaz si trabajas muchas horas frente a pantallas o sufres rigidez cervical.",
      }
    ],
    dietAdvice: {
      recommended: [
        "Vegetales de hoja verde oscura: espinacas, alcachofa, acelgas, brócoli y berros.",
        "Sabor ácido moderado: gotas de limón natural en agua tibia matutina, vinagre de manzana bio.",
        "Infusiones suaves: té de menta piperita, manzanilla noble o flor de crisantemo (Ju Hua) para refrescar la vista."
      ],
      toAvoid: ["Frituras, grasas trans pesadas, alcohol, café en exceso y comidas consumidas con prisa o enfado."],
      thermalNature: "Naturaleza fresca y dispersante del calor hepático."
    },
    yangShengTip: "Haz caminatas diarias de 20 minutos al aire libre enfocando la mirada en el horizonte verde o copas de árboles; los ojos son la ventana externa del Hígado y descansan al mirar lo lejano.",
    biologicalClock: "1:00 am - 3:00 am (Horario del Hígado): Procura estar en sueño profundo antes de la 1:00 am para permitir la depuración y purificación de la sangre."
  },
  fuego: {
    name: "Elemento Fuego (Huǒ · 火)",
    organ: "Corazón (Zang) & Intestino Delgado (Fu)",
    emotion: "Ansiedad agitada, mente hiperactiva, inquietud en el pecho y vulnerabilidad",
    climate: "Calor",
    season: "Verano",
    color: "Rojo / Bermellón",
    icon: Flame,
    themeColor: "text-rose-800 bg-rose-50 border-rose-300",
    summary: "Tu desequilibrio se produce por exceso de Calor que agita el Shen (la mente/espíritu albergada en el Corazón). Esto provoca taquicardias tensionales, bochornos, pensamientos incesantes al querer dormir y sensación de urgencia constante.",
    points: [
      {
        code: "C7",
        name: "Shenmen",
        translation: "Puerta del Espíritu / Puerta del Shen",
        role: "Punto Yuan (Fuente) y Punto Shu-Arroyo del canal del Corazón. Es el resonador por excelencia para sosegar la mente, calmar la taquicardia nerviosa y conciliar el sueño.",
        anatomicalLocation: "En el borde cubital de la cara anterior de la muñeca, en el pliegue transversal de flexión, en la fosa blanda situada en el lado radial del tendón del músculo flexor cubital del carpo, inmediatamente proximal al hueso pisiforme.",
        stepByStepLocation: [
          "Coloca la palma de tu mano mirando hacia arriba.",
          "Ubica el pliegue transversal de la muñeca que separa la mano del antebrazo.",
          "Sigue la línea del dedo meñique hacia la muñeca hasta palpar un pequeño huesecillo prominente y duro (hueso pisiforme).",
          "Justo en el pliegue, pegado al borde interno de ese hueso y al lado del tendón palpable, encontrarás una fosa natural muy sensible."
        ],
        palpationSensoryCue: "Una pulsación profunda con sensación de serenidad instantánea y ligera pesadez en la mano.",
        technique: "Aplica masaje circular muy suave y respirado durante 2 minutos en cada muñeca antes de acostarte. No uses fuerza brusca, trátalo con delicadeza.",
      },
      {
        code: "PC6",
        name: "Neiguan",
        translation: "Barrera Interna",
        role: "Punto Luo del Pericardio y Punto de Apertura del Yin Wei Mai. Abre el tórax, disipa la opresión del pecho, regula el ritmo cardíaco y detiene náuseas o reflujo emocional.",
        anatomicalLocation: "En la cara anterior del antebrazo, a 2 cun (3 traveses de dedo del propio paciente) por encima del pliegue transversal de la muñeca, centrado exactamente entre los tendones del músculo palmar largo y flexor radial del carpo.",
        stepByStepLocation: [
          "Palma de la mano hacia arriba.",
          "Coloca los tres dedos centrales de tu otra mano (índice, medio y anular) cruzando horizontalmente sobre la muñeca, partiendo del pliegue distal de flexión.",
          "El borde del dedo índice marca la altura exacta (2 cun).",
          "Haz fuerza cerrando el puño hacia adentro para que resalten los dos tendones gruesos del centro del antebrazo; Neiguan está exactamente en el canal blando entre ambos tendones."
        ],
        palpationSensoryCue: "Sensación de hormigueo o descarga suave que viaja hacia los dedos o hacia el pecho, abriendo la respiración.",
        technique: "Presión sostenida de intensidad media con la uña o yema del pulgar durante 60 segundos por brazo mientras tomas 5 respiraciones profundas.",
      }
    ],
    dietAdvice: {
      recommended: [
        "Alimentos de naturaleza fresca: pepino fresco, sandía, lechuga romana, apio y calabacitas tiernas.",
        "Granos y semillas calmantes: arroz blanco con leche vegetal de almendra, semillas de loto, dátiles rojos.",
        "Infusiones enfriantes de Shen: té de tila, flor de azahar, jazmín noble y melisa."
      ],
      toAvoid: ["Café cargado, bebidas energéticas, picantes intensos, carnes rojas a la parrilla y alcohol por la noche."],
      thermalNature: "Naturaleza refrescante que nutre el Yin y aplaca el fuego cardíaco."
    },
    yangShengTip: "Aplica la respiración 4-7-8 al final de tu jornada: inhala por la nariz en 4 tiempos, retén con calma 7 tiempos y exhala lentamente por la boca en 8 tiempos para enfriar el fuego del pecho.",
    biologicalClock: "11:00 am - 1:00 pm (Horario del Corazón): Haz una pausa de 15 minutos sin pantallas ni llamadas; un descanso breve al mediodía protege la circulación cardíaca."
  },
  tierra: {
    name: "Elemento Tierra (Tǔ · 土)",
    organ: "Bazo (Zang) & Estómago (Fu)",
    emotion: "Rumiación obsesiva, sobrepensar problemas, dudas continuas y preocupación",
    climate: "Humedad",
    season: "Canícula / Transición de estaciones",
    color: "Amarillo / Ocre / Arena",
    icon: Mountain,
    themeColor: "text-amber-800 bg-amber-50 border-amber-300",
    summary: "Tu desequilibrio se debe a la Insuficiencia de Qi de Bazo y acumulación de Humedad interna. El Bazo es el fogón que transforma los alimentos en Qi y Sangre. Cuando se agota por sobrepensar o dietas frías, produce hinchazón abdominal, fatiga pesada, niebla mental y antojo compulsivo de dulces.",
    points: [
      {
        code: "E36",
        name: "Zusanli",
        translation: "Divina Indiferencia / Las Tres Distancias del Pie",
        role: "Punto He-Mar del Estómago y Resonador Maestro de la Longevidad y Energía Vital del cuerpo entero. Fortalece la digestión, disipa la fatiga y tonifica el sistema inmune.",
        anatomicalLocation: "En la cara anterolateral de la pierna, a 3 cun (4 traveses de los cuatro dedos juntos del paciente) por debajo del punto Dubi (depresión del borde inferior de la rótula externa), a un través de dedo (ancho del pulgar) lateral hacia afuera de la cresta anterior de la tibia.",
        stepByStepLocation: [
          "Siéntate en una silla cómoda con los pies bien apoyados en el suelo y las rodillas a 90 grados.",
          "Palpa la hendidura blanda en el lado exterior bajo la rótula (ojo externo de la rodilla).",
          "Coloca los 4 dedos de tu mano horizontalmente debajo de esa depresión (esto mide 3 cun).",
          "En el borde inferior de tu dedo meñique, localiza la cresta dura de la tibia; mueve tu pulgar un centímetro hacia el exterior, sobre el músculo tibial anterior.",
          "Sentirás una depresión muscular muy evidente que suele estar ligeramente tensa."
        ],
        palpationSensoryCue: "Una sensación profunda de pesadez o DeQi que recorre la espinilla hasta el empeine, activando el calor estomacal.",
        technique: "Aplica presión firme con rotación en el sentido de las agujas del reloj durante 2 minutos en cada pierna, preferentemente por la mañana para encender el metabolismo.",
      },
      {
        code: "B6",
        name: "Sanyinjiao",
        translation: "Cruce de los Tres Yin",
        role: "Punto de cruce de los tres canales Yin del pie (Bazo, Hígado y Riñón). Regula la digestión, elimina la retención de líquidos, equilibra el sistema hormonal femenino y calma el sistema nervioso.",
        anatomicalLocation: "En la cara medial interna de la pierna, a 3 cun (4 traveses de dedo de la persona) directamente por encima de la prominencia más alta del maléolo medial interno (el hueso del tobillo por dentro), inmediatamente posterior al borde medial de la tibia.",
        stepByStepLocation: [
          "Siéntate y cruza la pierna para tener acceso al lado interno del tobillo.",
          "Palpa el punto más sobresaliente del hueso del tobillo interno (maléolo medial).",
          "Coloca los 4 dedos de tu mano horizontalmente sobre ese huesecillo.",
          "Justo por encima del cuarto dedo, busca la orilla posterior del hueso de la tibia; en esa ranura blanda detrás del hueso se ubica Sanyinjiao."
        ],
        palpationSensoryCue: "Es un punto extraordinariamente sensible y revelador. Puede doler un poco si hay retención de líquidos o estrés hormonal.",
        technique: "Presión sostenida suave a moderada durante 90 segundos. Masajear hacia arriba para drenar líquidos pesados.",
        caution: "⚠️ CONTRAINDICACIÓN ABSOLUTA: No masajear ni presionar intensamente en mujeres durante el embarazo (punto inductor del parto)."
      }
    ],
    dietAdvice: {
      recommended: [
        "Comidas cocinadas, templadas y amorosas: caldos concentrados de verduras con pollo, cremas de calabaza, zanahoria cocida y camote al horno.",
        "Cereales nobles cocidos: arroz integral suave, avena caliente con canela, mijo y quinoa.",
        "Especias digestivas: pizca de jengibre fresco en las comidas, cardamomo, canela en rama y clavo de olor."
      ],
      toAvoid: ["Ensaladas crudas heladas, agua con hielo, lácteos fríos, postres ultraazucarados y harinas refinadas que generan flema."],
      thermalNature: "Naturaleza tibia y secante de la humedad interna."
    },
    yangShengTip: "Come siempre sentado/a, sin pantallas y masticando cada bocado 20 veces. Si comes discutiendo o revisando el celular, tu Bazo no podrá extraer la energía pura de los alimentos.",
    biologicalClock: "7:00 am - 9:00 am (Horario del Estómago): Es el mejor momento del día para un desayuno nutritivo, tibio y completo. Evita salir de casa sin desayunar."
  },
  metal: {
    name: "Elemento Metal (Jīn · 金)",
    organ: "Pulmón (Zang) & Intestino Grueso (Fu)",
    emotion: "Tristeza, melancolía, duelo no cerrado, perfeccionismo rígido y dificultad para soltar",
    climate: "Sequedad",
    season: "Otoño",
    color: "Blanco / Plateado / Nácar",
    icon: Coins,
    themeColor: "text-stone-800 bg-stone-100 border-stone-300",
    summary: "Tu desequilibrio se sitúa en la debilidad de la Energía Defensiva (Wei Qi) del Pulmón y en la función de vaciado del Intestino Grueso. Se manifiesta en piel seca, alergias respiratorias, debilidad ante cambios de temperatura y dificultad para desprenderse de vivencias del pasado.",
    points: [
      {
        code: "IG4",
        name: "Hegu",
        translation: "Fondo del Valle / La Unión del Valle",
        role: "Punto Yuan (Fuente) del canal de Intestino Grueso y Punto Maestro de la Cara y la Cabeza. Libera cefaleas frontales, desinflama mucosas, estimula la evacuación y abre el flujo respiratorio.",
        anatomicalLocation: "En el dorso de la mano, en el punto medio del borde radial del 2.º hueso metacarpiano, en el vientre del músculo primer interóseo dorsal.",
        stepByStepLocation: [
          "Coloca una mano extendida con la palma hacia abajo.",
          "Junta el pulgar con el dedo índice; notarás que se forma una montañita carnosa prominente entre ambos.",
          "El punto Hegu está en la cumbre más alta de ese montículo.",
          "Al separar los dedos nuevamente, presiona hacia el hueso del dedo índice (el segundo metacarpiano). Encontrarás un hueco profundo."
        ],
        palpationSensoryCue: "Fuerte sensación de entumecimiento y distensión (DeQi) que se expande hacia la mano y el antebrazo.",
        technique: "Aplica presión circular profunda con la punta del pulgar de tu otra mano durante 1 a 2 minutos en cada mano mientras respiras hondo.",
        caution: "⚠️ CONTRAINDICACIÓN ESTRICTA: No utilizar con presión intensa durante el embarazo debido a su efecto dinamizador de la pelvis."
      },
      {
        code: "P7",
        name: "Lieque",
        translation: "Desfiladero Quebrado / Relámpago Hendido",
        role: "Punto Luo del Pulmón y Punto Llave del canal Ren Mai (Vaso Concepción). Abre los bronquios, alivia contracturas en nuca y cuello, y ayuda a procesar penas emocionales.",
        anatomicalLocation: "En el borde radial lateral del antebrazo, a 1.5 cun proximal al pliegue transversal más distal de la muñeca, en la hendidura ósea situada justo por encima de la apófisis estiloides del radio.",
        stepByStepLocation: [
          "Entrecruza los dedos pulgares de ambas manos en forma de tijera, de manera que la comisura de un pulgar repose en la comisura del otro.",
          "El dedo índice de la mano superior se extenderá naturalmente a lo largo del borde exterior del antebrazo.",
          "La punta de tu dedo índice caerá con exactitud sobre una pequeña ranura ósea o hendidura entre los dos tendones del radio: ese es Lieque."
        ],
        palpationSensoryCue: "Ligera punzada sensible al tacto que desbloquea la garganta y aligera la pesadez en hombros y nuca.",
        technique: "Frotar o masajear en dirección hacia el codo durante 60 segundos por brazo cada mañana.",
      }
    ],
    dietAdvice: {
      recommended: [
        "Alimentos humectantes blancos: pera cocida al vapor con una pizca de canela o clavo, almendras remojadas, sésamo blanco y coliflor.",
        "Sabor picante noble que abre el pulmón: jengibre fresco en infusión, rábano blanco, puerro y cebollino.",
        "Líquidos lubricantes: miel de abeja pura diluida en agua tibia, té blanco e infusiones de tomillo."
      ],
      toAvoid: ["Comidas ultra deshidratadas (galletas secas, totopos fritos), exceso de picante quemante y ambientes con aire artificial reseco."],
      thermalNature: "Naturaleza lubricante que nutre los fluidos corporales (Jinye) y protege el epitelio."
    },
    yangShengTip: "Practica respiraciones diafragmáticas al amanecer junto a una ventana abierta: inhala llenando el abdomen y la caja torácica, retén dos segundos y exhala diciendo mentalmente 'suelto y renuevo'.",
    biologicalClock: "3:00 am - 5:00 am (Horario del Pulmón) y 5:00 am - 7:00 am (Intestino Grueso): Al despertar toma un vaso de agua tibia para estimular el reflejo gastrocólico y evacuar sin esfuerzo."
  },
  agua: {
    name: "Elemento Agua (Shuǐ · 水)",
    organ: "Riñón (Zang) & Vejiga (Fu)",
    emotion: "Miedo profundo, inseguridad existencial, falta de voluntad (Zhi) y agotamiento vital",
    climate: "Frío",
    season: "Invierno",
    color: "Negro / Azul profundo",
    icon: Droplets,
    themeColor: "text-blue-900 bg-blue-50 border-blue-300",
    summary: "Tu desequilibrio afecta a la Esencia Vital (Jing) y al Qi de los Riñones, la batería profunda de tu organismo. Cuando su reserva está desgastada por trabajar sin descanso o exceso de frío, se presentan dolores en la cintura lumbar, rodillas friolentas, zumbido de oídos y fatiga que no cede al dormir.",
    points: [
      {
        code: "R3",
        name: "Taixi",
        translation: "Gran Torrente / Gran Arroyo",
        role: "Punto Yuan (Fuente) y Punto Shu-Arroyo del canal del Riñón. Nutre tanto el Yin como el Yang del Riñón, fortalece la columna lumbar y vigoriza la resistencia física.",
        anatomicalLocation: "En la cara medial interna del tobillo, en la depresión blanda ubicada exactamente a medio camino entre la cúspide del maléolo medial interno y el borde anterior del tendón de Aquiles.",
        stepByStepLocation: [
          "Descalzo/a y sentado/a con la pierna doblada para ver la cara interna del tobillo.",
          "Palpa la parte más sobresaliente del hueso del tobillo interno (maléolo medial).",
          "Con tu dedo pulgar, camina horizontalmente hacia la parte posterior en dirección al talón.",
          "Justo en la hondonada blanda y profunda que queda antes de chocar con la cuerda tensa del tendón de Aquiles, ahí se encuentra Taixi."
        ],
        palpationSensoryCue: "Una sensación reconfortante de calor o ligera presión tibia que irradia hacia el talón y la planta del pie.",
        technique: "Aplica presión circular profunda pero suave durante 2 minutos en cada pie por la noche. Excelente si sufres de fatiga crónica o sueño ligero.",
      },
      {
        code: "R1",
        name: "Yongquan",
        translation: "Manantial Burbujeante",
        role: "Punto Jing-Pozo del canal de Riñón y el punto más bajo del cuerpo humano. Conecta el organismo directamente con la Tierra, desciende el calor de la cabeza y apaga la angustia.",
        anatomicalLocation: "En la planta del pie, en la depresión que se forma cuando los dedos se doblan en flexión plantar; se ubica aproximadamente en la unión del tercio anterior con los dos tercios posteriores de la planta del pie, en el surco central entre las dos almohadillas carnosas del antepié.",
        stepByStepLocation: [
          "Siéntate y flexiona los dedos del pie hacia la planta como si quisieras agarrar algo.",
          "Verás que en el tercio superior de la planta se forma un hoyuelo o depresión cóncava muy clara.",
          "Ese pozo anatómico entre los dos montículos de la base de los dedos es Yongquan."
        ],
        palpationSensoryCue: "Sensación de descarga eléctrica placentera, sensación de arraigo a la tierra y relajación de la bóveda craneal.",
        technique: "Frotar con fuerza la planta del pie con la palma de la mano durante 100 fricciones rápidas hasta que la piel se caliente intensamente antes de dormir.",
      }
    ],
    dietAdvice: {
      recommended: [
        "Alimentos de color oscuro y alta densidad mineral: frijoles negros, lentejas, ajonjolí negro, nueces de castilla, arroz salvaje y arándanos.",
        "Caldos remineralizantes: caldo de huesos a fuego lento, sopa de miso y pequeñas porciones de algas marinas (Kombu o Wakame).",
        "Semillas oleaginosas: semillas de calabaza, chía y almendras sin sal añadida."
      ],
      toAvoid: ["Bebidas heladas con hielo, helados, consumo de agua fría en ayunas y exceso de sal refinada."],
      thermalNature: "Naturaleza templada y reconfortante que conserva la batería de calor interno."
    },
    yangShengTip: "Date un pediluvio nocturno: sumerge los pies en una cubeta con agua caliente y sal marina durante 15 minutos antes de acostarte. Esto calienta el canal del Riñón y propicia un sueño restaurador.",
    biologicalClock: "5:00 pm - 7:00 pm (Horario del Riñón): Evita actividades extenuantes a esa hora; toma una cena ligera y reduce el ritmo de trabajo."
  }
};

interface AutodiagnosticoProps {
  isEmbedded?: boolean;
}

export function AutodiagnosticoCincoElementos({ isEmbedded = false }: AutodiagnosticoProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, { element: "madera" | "fuego" | "tierra" | "metal" | "agua"; yinYang: "yin" | "yang" | "neutro" }>>({});
  const [calculated, setCalculated] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  
  // Resultados calculados
  const [resultElement, setResultElement] = useState<"madera" | "fuego" | "tierra" | "metal" | "agua">("madera");
  const [yinYangResult, setYinYangResult] = useState<{ polarity: "Predominio Yang (Calor / Actividad)" | "Predominio Yin (Frío / Vacío)" | "Balance Templado Relativo"; yinPercent: number; yangPercent: number }>({
    polarity: "Predominio Yang (Calor / Actividad)",
    yinPercent: 50,
    yangPercent: 50
  });
  const [harmonyScore, setHarmonyScore] = useState<number>(62);
  const [elementBreakdown, setElementBreakdown] = useState<Record<string, number>>({});

  const handleSelectOption = (questionId: number, opt: Option) => {
    const newAnswers = { 
      ...answers, 
      [questionId]: { element: opt.element, yinYang: opt.yinYang } 
    };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      computeResults(newAnswers);
    }
  };

  const computeResults = (allAnswers: Record<number, { element: "madera" | "fuego" | "tierra" | "metal" | "agua"; yinYang: "yin" | "yang" | "neutro" }>) => {
    const elemCounts: Record<string, number> = {
      madera: 0,
      fuego: 0,
      tierra: 0,
      metal: 0,
      agua: 0
    };

    let yinCount = 0;
    let yangCount = 0;

    Object.values(allAnswers).forEach((ans) => {
      elemCounts[ans.element] = (elemCounts[ans.element] || 0) + 1;
      if (ans.yinYang === "yin") yinCount++;
      if (ans.yinYang === "yang") yangCount++;
    });

    setElementBreakdown(elemCounts);

    let maxElement: "madera" | "fuego" | "tierra" | "metal" | "agua" = "madera";
    let maxCount = -1;

    (Object.keys(elemCounts) as Array<"madera" | "fuego" | "tierra" | "metal" | "agua">).forEach((k) => {
      if (elemCounts[k] > maxCount) {
        maxCount = elemCounts[k];
        maxElement = k;
      }
    });

    setResultElement(maxElement);

    const totalTension = yinCount + yangCount;
    const yinPct = Math.round((yinCount / totalTension) * 100) || 50;
    const yangPct = 100 - yinPct;

    let polText: "Predominio Yang (Calor / Actividad)" | "Predominio Yin (Frío / Vacío)" | "Balance Templado Relativo" = "Balance Templado Relativo";
    if (yangPct >= 60) {
      polText = "Predominio Yang (Calor / Actividad)";
    } else if (yinPct >= 60) {
      polText = "Predominio Yin (Frío / Vacío)";
    }

    setYinYangResult({
      polarity: polText,
      yinPercent: yinPct,
      yangPercent: yangPct
    });

    const baseScore = 90 - (maxCount * 7);
    setHarmonyScore(Math.max(45, Math.min(baseScore, 82)));
    setCalculated(true);
    
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const target = document.getElementById("resultado-prescripcion-box");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setCalculated(false);
  };

  const handleCopyShareLink = () => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/test-5-elementos`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const currentQ = QUESTIONS[currentStep];
  const profile = ELEMENT_PROFILES[resultElement];
  const IconComponent = profile.icon;

  const shareTextWhatsApp = encodeURIComponent(
    `¡Hola! Hice el Test Gratis de los 5 Elementos y Polaridad Yin-Yang de la Lic. Elizabeth Gamiño. Te da una prescripción de autocuidado personalizada con la localización anatómica exacta de tus puntos de digitopuntura. Es 100% gratuito, pruébalo aquí: https://www.acupunturacdmx.com/test-5-elementos`
  );

  return (
    <div className={`w-full ${isEmbedded ? "max-w-4xl mx-auto" : "max-w-3xl mx-auto"}`} id="resultado-prescripcion-box">
      
      {!calculated ? (
        /* PASO A PASO: PREGUNTAS DEL TEST (10 PREGUNTAS) */
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border-2 border-[#e5dbcb] shadow-xl space-y-7 animate-fade-in text-left">
          
          {/* Barra de progreso y categoría */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-[#5a6e75]">
              <span className="bg-[#f2ece2] text-[#18313a] px-2.5 py-0.5 rounded-md font-mono text-[11px]">
                {currentQ.category}
              </span>
              <span className="text-[#3e685f] font-bold">
                Pregunta {currentStep + 1} de {QUESTIONS.length} ({Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%)
              </span>
            </div>
            <div className="w-full h-2 bg-[#f2ece2] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#3e685f] via-[#b86d36] to-[#18313a] transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Título de la pregunta */}
          <div className="space-y-2">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#18313a] leading-snug">
              {currentQ.question}
            </h2>
            <p className="text-xs sm:text-sm text-[#5a6e75] font-light">
              {currentQ.sub}
            </p>
          </div>

          {/* Opciones seleccionables */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = answers[currentQ.id]?.element === opt.element;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(currentQ.id, opt)}
                  className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected 
                      ? "bg-emerald-50/80 border-[#3e685f] shadow-md ring-2 ring-[#3e685f]/20" 
                      : "bg-[#faf8f5] border-[#e5dbcb] hover:border-[#cfbfab] hover:bg-amber-50/20"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                    isSelected ? "border-[#3e685f] bg-[#3e685f] text-white" : "border-[#cfbfab] bg-white"
                  }`}>
                    {isSelected && <CheckCircle2 size={14} />}
                  </div>
                  <div className="space-y-0.5 flex-1">
                    <span className="font-serif font-bold text-sm sm:text-base text-[#18313a] block">
                      {opt.label}
                    </span>
                    <span className="text-xs text-[#5a6e75] font-light leading-relaxed block">
                      {opt.detail}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Controles de regreso */}
          {currentStep > 0 && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-xs text-[#5a6e75] hover:text-[#18313a] font-semibold underline cursor-pointer"
              >
                ← Pregunta anterior
              </button>
            </div>
          )}

        </div>
      ) : (
        /* RESULTADOS DEL TEST: DIAGNÓSTICO DUAL Y TU PRESCRIPCIÓN PERSONALIZADA */
        <div className="space-y-8 animate-fade-in">
          
          {/* TARJETA PRINCIPAL DE DIAGNÓSTICO */}
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border-2 border-[#3e685f] shadow-2xl space-y-8 text-center relative overflow-hidden">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                <Sparkles size={13} className="text-emerald-700" />
                <span>DIAGNÓSTICO BIOENERGÉTICO 100% GRATIS</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#18313a] pt-1">
                Tu Resultado Clínico Oriental
              </h2>
              <p className="text-xs sm:text-sm text-[#5a6e75] font-light max-w-lg mx-auto">
                Evaluado según los Órganos Zang-Fu y la polaridad Yin-Yang por la Lic. Elizabeth Gamiño.
              </p>
            </div>

            {/* 1. SECCIÓN DUAL: POLARIDAD YIN-YANG & ELEMENTO PREDOMINANTE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              
              {/* Tarjeta Polaridad Yin-Yang */}
              <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dbcb] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d36]">
                    Eje 1: Polaridad Térmica
                  </span>
                  {yinYangResult.polarity.includes("Yang") ? (
                    <Sun size={20} className="text-amber-500" />
                  ) : (
                    <Moon size={20} className="text-blue-500" />
                  )}
                </div>
                <h3 className="font-serif font-bold text-lg text-[#18313a]">
                  {yinYangResult.polarity}
                </h3>
                
                {/* Barra Yin - Yang */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-[#5a6e75] font-semibold">
                    <span>Yin (Frío/Vacío): {yinYangResult.yinPercent}%</span>
                    <span>Yang (Calor/Fuego): {yinYangResult.yangPercent}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-200 rounded-full flex overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full transition-all duration-700"
                      style={{ width: `${yinYangResult.yinPercent}%` }}
                    />
                    <div 
                      className="bg-amber-500 h-full transition-all duration-700"
                      style={{ width: `${yinYangResult.yangPercent}%` }}
                    />
                  </div>
                </div>

                <p className="text-[11px] text-[#5a6e75] font-light leading-snug">
                  {yinYangResult.polarity.includes("Yang") 
                    ? "Tu cuerpo quema reservas con rapidez, concentra calor en el pecho o cabeza y produce contracturas por hiperreactividad nerviosa."
                    : "Tu cuerpo tiende al enfriamiento, retención de humedad, lentitud digestiva post-comida y fatiga de batería baja."}
                </p>
              </div>

              {/* Tarjeta Elemento en Desequilibrio */}
              <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dbcb] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#3e685f]">
                    Eje 2: Cinco Elementos
                  </span>
                  <IconComponent size={20} className="text-[#3e685f]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#18313a]">
                  {profile.name}
                </h3>
                <p className="text-xs text-[#5a6e75]">
                  <strong>Órgano diana:</strong> {profile.organ}
                </p>
                <p className="text-[11px] text-[#4a5e66] font-light leading-snug pt-1">
                  {profile.summary}
                </p>
              </div>

            </div>

            {/* Termómetro de Armonía Energética */}
            <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-3xl border border-[#e5dbcb] max-w-lg mx-auto space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="text-[#18313a]">Índice de Armonía de tu Qi:</span>
                <strong className="font-serif text-xl text-[#3e685f]">{harmonyScore} / 100</strong>
              </div>
              <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${
                    harmonyScore > 70 
                      ? "bg-emerald-500" 
                      : harmonyScore > 50 
                      ? "bg-amber-500" 
                      : "bg-rose-500"
                  }`}
                  style={{ width: `${harmonyScore}%` }}
                />
              </div>
              <p className="text-[11px] text-[#5a6e75] font-light leading-snug">
                {harmonyScore >= 70 
                  ? "Nivel de vitalidad favorable con fluctuaciones leves." 
                  : "Desequilibrio funcional evidente. Tu cuerpo emite señales de estancamiento que requieren regulación activa antes de volverse un problema crónico."}
              </p>
            </div>

            {/* FORMULARIO DE CAPTACIÓN DE AUDIENCIA / DESBLOQUEO DE VIDEOCLASE Y PDF */}
            <div className="pt-2 max-w-2xl mx-auto text-left">
              <FormularioCaptacionCursoGratis
                source="autodiagnostico_resultado"
                elementResult={profile.name}
                scoreResult={harmonyScore}
                compactMode={true}
                titleOverride={`Recibe la Videoclase y la Guía en PDF de tu ${profile.name}`}
                subtitleOverride="Completa tus datos para enviarte al instante el acceso a la videoclase de 15 min y el archivo PDF oficial con la localización anatómica exacta de tus puntos."
              />
            </div>

            {/* ============================================================ */}
            {/* TU PRESCRIPCIÓN PERSONALIZADA DE AUTOCUIDADO (100% GRATIS) */}
            {/* ============================================================ */}
            <div className="text-left space-y-6 max-w-2xl mx-auto pt-6 border-t-2 border-[#f2ece2]">
              
              {/* Encabezado Principal de Prescripción */}
              <div className="bg-gradient-to-r from-[#18313a] to-[#2c4e5c] text-white p-5 rounded-2xl shadow-md space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-emerald-500 text-stone-950 text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs">
                    <Sparkles size={12} className="fill-stone-950" />
                    100% GRATIS
                  </span>
                  <span className="text-[11px] text-[#f4e1cb] font-mono">
                    Protocolo Yang Sheng
                  </span>
                </div>

                <h3 className="font-serif font-black text-xl sm:text-2xl tracking-tight text-white">
                  TU PRESCRIPCIÓN PERSONALIZADA DE AUTOCUIDADO
                </h3>
                <p className="text-xs text-[#d6ccbe] font-light leading-relaxed">
                  Guía anatómica de digitopuntura, nutrición según los 5 sabores y reloj biológico para reequilibrar tu <strong>{profile.name}</strong> desde casa.
                </p>
              </div>

              {/* BLOQUE DE PUNTOS: LOCALIZACIÓN ANATÓMICA ULTRA PRECISA */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b86d36]">
                  <Compass size={16} />
                  <span>Resonadores de Digitopuntura &amp; Localización Anatómica Exacta</span>
                </div>

                {profile.points.map((pt, pIdx) => (
                  <div 
                    key={pt.code} 
                    className="bg-white rounded-2xl border-2 border-[#e5dbcb] p-5 shadow-sm space-y-4 hover:border-[#3e685f]/60 transition-colors"
                  >
                    {/* Cabecera del punto */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#f2ece2]">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-[#18313a] text-white font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                          {pt.code}
                        </span>
                        <div>
                          <strong className="font-serif text-base sm:text-lg text-[#18313a] block leading-tight">
                            {pt.name} <span className="text-xs text-[#5a6e75] font-sans font-light">({pt.translation})</span>
                          </strong>
                          <span className="text-[10px] text-[#3e685f] font-semibold uppercase tracking-wide">
                            {pIdx === 0 ? "Punto Principal de Regulación" : "Punto Complementario"}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Gratis para uso diario
                      </span>
                    </div>

                    {/* Función bioenergética */}
                    <p className="text-xs text-[#4a5e66] leading-relaxed">
                      <strong>Acción terapéutica:</strong> {pt.role}
                    </p>

                    {/* LOCALIZACIÓN ANATÓMICA OFICIAL */}
                    <div className="bg-[#faf8f5] p-3.5 rounded-xl border border-[#e5dbcb] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#18313a]">
                        <MapPin size={14} className="text-[#3e685f]" />
                        <span>Localización Anatómica Oficial:</span>
                      </div>
                      <p className="text-xs text-[#5a6e75] leading-relaxed font-light pl-5">
                        {pt.anatomicalLocation}
                      </p>
                    </div>

                    {/* PASO A PASO PARA ENCONTRARLO CON TUS DEDOS EN SEGUNDOS */}
                    <div className="space-y-1.5 text-xs">
                      <strong className="text-[#18313a] block font-semibold">
                        ¿Cómo ubicarlo paso a paso en tu propio cuerpo?
                      </strong>
                      <ul className="space-y-1 pl-1">
                        {pt.stepByStepLocation.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2 text-[#4a5e66] font-light">
                            <span className="w-4 h-4 rounded-full bg-[#f2ece2] text-[#18313a] text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {sIdx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* SEÑAL SENSORIAL DEQUI */}
                    <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200 text-xs text-[#28574c] space-y-0.5">
                      <strong>Señal sensorial de acierto (DeQi):</strong>
                      <p className="font-light leading-snug">{pt.palpationSensoryCue}</p>
                    </div>

                    {/* TÉCNICA DE ESTIMULACIÓN */}
                    <div className="text-xs text-[#18313a] space-y-0.5 bg-[#fdfcf9] p-3 rounded-xl border border-[#e8e1d5]">
                      <strong className="text-[#b86d36] flex items-center gap-1 font-bold">
                        <Zap size={14} />
                        Técnica de Digitopuntura:
                      </strong>
                      <p className="text-[#4a5e66] font-light leading-relaxed">
                        {pt.technique}
                      </p>
                    </div>

                    {/* PRECAUCIONES SI APLICAN (EMBARAZO, ETC.) */}
                    {pt.caution && (
                      <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2 font-medium">
                        <AlertTriangle size={15} className="text-amber-700 flex-shrink-0 mt-0.5" />
                        <span>{pt.caution}</span>
                      </div>
                    )}

                  </div>
                ))}
              </div>

              {/* BLOQUE DE DIETOTERAPIA SEGÚN LOS 5 SABORES */}
              <div className="bg-white p-5 rounded-2xl border-2 border-[#e5dbcb] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3e685f]">
                  <Heart size={16} />
                  <span>Dietoterapia China &amp; Sabores Curativos</span>
                </div>

                <div className="text-xs space-y-2">
                  <div className="bg-[#faf8f5] p-2.5 rounded-xl border border-[#e5dbcb]">
                    <span className="font-bold text-[#18313a] block">Naturaleza térmica recomendada:</span>
                    <span className="text-[#5a6e75] font-light">{profile.dietAdvice.thermalNature}</span>
                  </div>

                  <div className="space-y-1">
                    <strong className="text-emerald-800 font-semibold block">Alimentos que debes priorizar:</strong>
                    <ul className="list-disc list-inside space-y-0.5 text-[#4a5e66] font-light">
                      {profile.dietAdvice.recommended.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-[#f2ece2]">
                    <strong className="text-rose-800 font-semibold block">Alimentos a reducir o suspender:</strong>
                    <ul className="list-disc list-inside space-y-0.5 text-[#4a5e66] font-light">
                      {profile.dietAdvice.toAvoid.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* BLOQUE DE HÁBITO YANG SHENG Y RELOJ BIOLÓGICO */}
              <div className="bg-white p-5 rounded-2xl border-2 border-[#e5dbcb] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#18313a]">
                  <Activity size={16} />
                  <span>Ritmo Circadiano &amp; Hábitos de Longevidad (Yang Sheng)</span>
                </div>

                <div className="text-xs space-y-2">
                  <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dbcb] space-y-1">
                    <strong className="text-[#b86d36] block">Horario Óptimo del Reloj Biológico Zang-Fu:</strong>
                    <p className="text-[#4a5e66] font-light leading-relaxed">{profile.biologicalClock}</p>
                  </div>

                  <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200 space-y-1">
                    <strong className="text-[#3e685f] block">Hábito Diario Recomendado:</strong>
                    <p className="text-[#4a5e66] font-light leading-relaxed">{profile.yangShengTip}</p>
                  </div>
                </div>
              </div>

              {/* BOTONERA DE ACCIÓN: COMPARTIR, GUARDAR EN PDF O REPETIR */}
              <div className="bg-[#faf8f5] p-4 sm:p-5 rounded-2xl border border-[#e5dbcb] flex flex-wrap items-center justify-between gap-3 pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="bg-white hover:bg-[#18313a] hover:text-white text-[#18313a] px-3.5 py-2 rounded-xl border border-[#e5dbcb] text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                    title="Guardar como PDF o Imprimir tu prescripción gratuita"
                  >
                    <Printer size={14} />
                    <span>Guardar en PDF / Imprimir</span>
                  </button>

                  <a
                    href={`https://wa.me/?text=${shareTextWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 size={14} />
                    <span>Compartir Test Gratis</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#5a6e75] hover:text-[#18313a] underline cursor-pointer ml-auto"
                >
                  <RotateCcw size={13} />
                  <span>Volver a responder el test</span>
                </button>
              </div>

            </div>

          </div>

          {/* DOBLE EMBUDO DE CONVERSIÓN: EDUCACIÓN O CLÍNICA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* CAMINO 1: APRENDER A TRATARLO TÚ MISMO (TALLER DE DIGITOPUNTURA / DIPLOMADO) */}
            <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-[#e5dbcb] shadow-lg flex flex-col justify-between space-y-5 text-left">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d36] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 inline-block">
                  Ruta 1: Cursos &amp; Autocuidado
                </span>
                <h3 className="font-serif font-bold text-xl text-[#18313a]">
                  Aprende a Equilibrar tu {profile.name} con tus Propias Manos
                </h3>
                <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                  En el <strong>Taller Exprés en Vivo: Botiquín de Digitopuntura</strong> aprenderás a ubicar con precisión milimétrica los resonadores para regular tu digestión, tu insomnio y tu estrés cotidiano.
                </p>
                <div className="text-xs text-[#3e685f] font-semibold bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200">
                  ✓ Clase en vivo + Guía PDF imprimible por solo <strong>$780 MXN</strong>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href="/taller-digitopuntura"
                  className="w-full bg-[#18313a] hover:bg-[#12242b] text-white py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 text-center group cursor-pointer"
                >
                  <span>Inscribirme al Taller ($780 MXN)</span>
                  <ArrowRight size={15} className="text-[#f4e1cb] transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/diplomado"
                  className="w-full bg-[#faf8f5] hover:bg-[#f2ece2] text-[#18313a] py-2.5 px-4 rounded-full font-semibold text-xs transition-all border border-[#e5dbcb] flex items-center justify-center gap-1.5 text-center"
                >
                  <BookOpen size={13} className="text-[#3e685f]" />
                  <span>Ver Diplomado Completo de 6 Módulos</span>
                </Link>
              </div>
            </div>

            {/* CAMINO 2: TRATARLO DE RAÍZ EN CONSULTORIO PRESENCIAL (ACUPUNTURA CDMX) */}
            <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border-2 border-[#3e685f] shadow-lg flex flex-col justify-between space-y-5 text-left relative">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#3e685f] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block">
                  Ruta 2: Consulta Clínica en CDMX
                </span>
                <h3 className="font-serif font-bold text-xl text-[#18313a]">
                  ¿Llevas semanas con este malestar? Agenda tu Valoración
                </h3>
                <p className="text-xs text-[#4a5e66] font-light leading-relaxed">
                  Recibe un diagnóstico bioeléctrico Ryodoraku y una sesión de acupuntura humana personalizada con la <strong>Lic. Elizabeth Gamiño</strong> en nuestro consultorio privado en Insurgentes Sur 1409, Benito Juárez, CDMX.
                </p>
                <div className="text-xs text-[#18313a] font-semibold bg-[#faf8f5] p-2.5 rounded-xl border border-[#e5dbcb]">
                  ✓ Material 100% estéril, desechable y atención titulada oficial
                </div>
              </div>

              <WhatsAppButton
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 text-center cursor-pointer"
                showIcon={false}
                message={`Hola Lic. Elizabeth, completé el Test Gratis de los 5 Elementos y mi resultado fue ${profile.name} con ${yinYangResult.polarity} y score de ${harmonyScore}/100. Me gustaría agendar una consulta de valoración presencial en su consultorio de Benito Juárez, CDMX.`}
              >
                <MessageCircle size={16} />
                <span>Agendar Consulta con este Resultado</span>
              </WhatsAppButton>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
