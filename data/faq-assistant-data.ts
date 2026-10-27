export interface FaqItem {
  id: string;
  category: "popular" | "paralisis" | "dolor" | "femenino" | "estres" | "citas";
  categoryLabel: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  keyPoints?: string[];
  keywords: string[];
  suggestedFollowUps?: string[]; // IDs of related questions
}

export const FAQ_CATEGORIES = [
  { id: "all", label: "✨ Todas" },
  { id: "popular", label: "⭐ Más consultadas" },
  { id: "paralisis", label: "⚡ Parálisis Facial" },
  { id: "dolor", label: "🦴 Dolor y Ciática" },
  { id: "femenino", label: "🌸 Salud Femenina" },
  { id: "estres", label: "🧠 Estrés y Sueño" },
  { id: "citas", label: "📍 Citas y Ubicación" },
] as const;

export const FAQ_KNOWLEDGE_BASE: FaqItem[] = [
  // --- POPULARES Y GENERALES ---
  {
    id: "duele-acupuntura",
    category: "popular",
    categoryLabel: "General",
    question: "¿Duele la acupuntura?",
    shortAnswer: "No, en absoluto. Las agujas son ultrafinas (del grosor de un cabello) y la experiencia es sumamente relajante.",
    detailedAnswer: "No duele. Se utilizan agujas filiformes sumamente finas, flexibles y de acero inoxidable quirúrgico estéril de un solo uso (desechables). La mayoría de los pacientes no siente dolor al insertarse; en cambio, experimentan la llegada del Qi (Deqi) como una agradable sensación de calor suave, leve cosquilleo o relajación muscular profunda que a menudo induce al sueño durante la sesión.",
    keyPoints: [
      "Agujas ultrafinas de uso único (100% estériles y desechables).",
      "No se inyecta ninguna sustancia química ni fármaco.",
      "Sensación Deqi: calidez y alivio de tensiones profundas.",
      "Apto para personas sensibles o con temor inicial a las agujas."
    ],
    keywords: ["duele", "dolor", "aguja", "agujas", "miedo", "lastima", "siente", "sensacion", "pinchazo", "doler"],
    suggestedFollowUps: ["cuantas-sesiones", "como-agendar-cita"]
  },
  {
    id: "cuantas-sesiones",
    category: "popular",
    categoryLabel: "General",
    question: "¿Cuántas sesiones necesito para ver mejoría?",
    shortAnswer: "La gran mayoría de los pacientes nota alivio y cambios notables entre la 1.ª y la 3.ª sesión.",
    detailedAnswer: "La mayoría de nuestros pacientes reporta una disminución tangible del dolor, mayor movilidad o relajación profunda desde las primeras 1 a 3 sesiones. El ciclo total depende de la condición:\n• Dolor agudo o contracturas recientes: 3 a 6 sesiones.\n• Dolor crónico (ciática de años, lumbalgia persistente): 8 a 12 sesiones.\n• Parálisis facial: evaluación continua semana a semana, recomendando 2 sesiones por semana en etapa temprana.\nCada protocolo es 100% personalizado según tu valoración clínica en consulta.",
    keyPoints: [
      "Alivio inicial notable entre la sesión 1 y la 3.",
      "Efecto acumulativo: cada sesión refuerza y consolida la anterior.",
      "Plan adaptado a tu caso particular tras la valoración inicial."
    ],
    keywords: ["cuantas", "sesiones", "tiempo", "tarda", "frecuencia", "cuanto dura", "resultados", "veces", "semanas"],
    suggestedFollowUps: ["como-agendar-cita", "precio-consulta"]
  },
  {
    id: "como-agendar-cita",
    category: "citas",
    categoryLabel: "Citas y Contacto",
    question: "¿Cómo agendo mi primera cita y qué horarios tienen?",
    shortAnswer: "Puedes agendar directo por WhatsApp al 55 5252 0615. Atendemos de lunes a viernes de 9 a 18 hrs y sábados de 9 a 15 hrs.",
    detailedAnswer: "Agendar es muy fácil y rápido:\n1. Escríbenos directamente por WhatsApp al 55 5252 0615 indicando tu motivo de consulta (dolor, parálisis facial, salud femenina o estrés).\n2. Te asignamos un horario preferencial en nuestro consultorio en Benito Juárez, CDMX.\n\nHorarios de atención:\n• Lunes a Viernes: 09:00 a 18:00 hrs.\n• Sábados: 09:00 a 15:00 hrs.\n(Todas las consultas se atienden con previa cita para garantizar tu privacidad y puntualidad).",
    keyPoints: [
      "Atención personalizada con previa cita.",
      "WhatsApp directo: 55 5252 0615.",
      "Lunes a Viernes 9:00 - 18:00 | Sábados 9:00 - 15:00."
    ],
    keywords: ["agendar", "cita", "citas", "horario", "horarios", "telefono", "whatsapp", "contacto", "reservar", "cuando"],
    suggestedFollowUps: ["donde-estan-ubicados", "precio-consulta"]
  },
  {
    id: "donde-estan-ubicados",
    category: "citas",
    categoryLabel: "Citas y Ubicación",
    question: "¿Dónde se ubica el consultorio en la Ciudad de México?",
    shortAnswer: "Estamos en la Alcaldía Benito Juárez, CDMX, con fácil acceso desde Col. Del Valle, Nápoles, Narvarte y Coyoacán.",
    detailedAnswer: "Nuestro consultorio está ubicado en la Alcaldía Benito Juárez, Ciudad de México (zona céntrica con excelente conectividad cerca de vías principales como Insurgentes Sur, Eje 4, Eje 5 y División del Norte). Consultorio privado, tranquilo y con todas las normas de bioseguridad sanitaria.",
    keyPoints: [
      "Ubicación céntrica en Benito Juárez, CDMX.",
      "Fácil acceso desde Nápoles, Del Valle, Narvarte y Coyoacán.",
      "Instalaciones privadas, limpias y confortables."
    ],
    keywords: ["donde", "ubicacion", "direccion", "llegar", "metro", "alcaldia", "benito juarez", "del valle", "napoles", "cdmx", "zona"],
    suggestedFollowUps: ["como-agendar-cita", "quien-atiende-cedula"]
  },
  {
    id: "precio-consulta",
    category: "citas",
    categoryLabel: "Citas y Tarifas",
    question: "¿Cuál es el costo de la consulta y qué incluye?",
    shortAnswer: "Ofrecemos tarifas accesibles por sesión y paquetes de seguimiento. Tu primera cita incluye valoración clínica completa y tratamiento.",
    detailedAnswer: "Manejamos costos muy justos y accesibles pensados en la continuidad del paciente. Tu primera sesión incluye:\n1. Historia clínica y valoración integral de tu estado (pulso, lengua, palpación de canales y evaluación neuromuscular).\n2. Tu primera sesión de tratamiento (acupuntura con agujas estériles, y según tu caso: electroacupuntura, moxibustión clínica o ventosas).\n3. Recomendaciones y ejercicios para casa.\n\nEscríbenos por WhatsApp para brindarte la tarifa exacta de tu tratamiento y promociones de paquetes activos.",
    keyPoints: [
      "Valoración clínica + sesión de tratamiento en tu primera cita.",
      "Tarifas transparentes y paquetes de continuidad con descuento.",
      "Sin costos ocultos ni fármacos innecesarios."
    ],
    keywords: ["precio", "costo", "cuanto cuesta", "tarifa", "promocion", "paquetes", "pago", "cuanto vale"],
    suggestedFollowUps: ["como-agendar-cita", "quien-atiende-cedula"]
  },
  {
    id: "quien-atiende-cedula",
    category: "citas",
    categoryLabel: "Profesional y Certificación",
    question: "¿Quién realiza el tratamiento y cuáles son sus credenciales?",
    shortAnswer: "Te atiende personalmente nuestra Especialista en Acupuntura Humana y Rehabilitación, egresada de la UNEVE con Cédula Profesional 15289838 y aviso COFEPRIS.",
    detailedAnswer: "Te atiende una especialista con Licenciatura universitaria oficial en Acupuntura Humana y Rehabilitación, egresada de la Universidad Estatal del Valle de Ecatepec (UNEVE), la institución pública pionera y referente en la enseñanza universitaria de la acupuntura en México.\n\n• Cédula Profesional Federal: 15289838\n• Aviso de Publicidad COFEPRIS: 2609142002A00342\n• Formación clínica rigurosa en neuroanatomía, rehabilitación muscular y Acupuntura Tradicional China.",
    keyPoints: [
      "Licenciatura universitaria oficial de 5 años en Acupuntura Humana.",
      "Cédula Profesional verificable: 15289838.",
      "Aviso de Publicidad COFEPRIS en regla.",
      "Atención 100% ética, profesional y basada en evidencia."
    ],
    keywords: ["doctora", "licenciada", "especialista", "cedula", "cofepris", "titulo", "certificada", "quien atiende", "credenciales", "uneve"],
    suggestedFollowUps: ["como-agendar-cita", "duele-acupuntura"]
  },

  // --- PARÁLISIS FACIAL ---
  {
    id: "paralisis-cuando-iniciar",
    category: "paralisis",
    categoryLabel: "Parálisis Facial",
    question: "¿Cuándo se debe iniciar la acupuntura tras una parálisis facial?",
    shortAnswer: "Lo ideal es comenzar lo más pronto posible (dentro de los primeros 3 a 14 días) para desinflamar el nervio rápidamente.",
    detailedAnswer: "La ventana de oro son los primeros 14 días. Iniciar tempranamente reduce el edema e inflamación del nervio facial en el conducto de Falopio, previene la degeneración axonal y acelera la recuperación de la simetría muscular. Sin embargo, si ya han pasado semanas o meses, también es altamente recomendable para rehabilitar las fibras y evitar sincinesias o contracturas.",
    keyPoints: [
      "Fase aguda (días 1 a 14): máxima prioridad para desinflamar el nervio.",
      "Fase subaguda (semanas 2 a 8): estimulación para reinervación activa.",
      "Fase de secuelas: relajación de contracturas y reeducación motora fina."
    ],
    keywords: ["paralisis", "facial", "bell", "cuando empezar", "tiempo", "dias", "inicio", "nervio", "rapido", "urgente"],
    suggestedFollowUps: ["paralisis-electroacupuntura", "paralisis-secuelas-sincinesias"]
  },
  {
    id: "paralisis-electroacupuntura",
    category: "paralisis",
    categoryLabel: "Parálisis Facial",
    question: "¿Cómo funciona la electroacupuntura en la cara y qué se siente?",
    shortAnswer: "Envía microimpulsos bioeléctricos indoloros a los puntos motores para reactivar el nervio y reeducar los músculos.",
    detailedAnswer: "La electroacupuntura conecta terminales de microcorriente de muy baja intensidad y frecuencia controlada a las agujas insertadas en los puntos motores faciales (como ramas cigomática, bucal y mandibular). Esto estimula la síntesis de factores neurotróficos (NGF), mejora la microcirculación y envía impulsos propioceptivos que 'despiertan' el circuito entre el cerebro y los músculos faciales. Se siente como una pulsación o cosquilleo rítmico suave y confortable, jamás como una descarga molesta.",
    keyPoints: [
      "Microcorriente regulada milimétricamente al umbral de comodidad del paciente.",
      "Reeduca la contracción sin agotar el músculo.",
      "Acelera el cierre del ojo y el levantamiento de la comisura bucal."
    ],
    keywords: ["electroacupuntura", "electricidad", "toques", "microcorriente", "nervio facial", "impulso", "estimulacion", "puntos motores"],
    suggestedFollowUps: ["paralisis-secuelas-sincinesias", "cuantas-sesiones"]
  },
  {
    id: "paralisis-secuelas-sincinesias",
    category: "paralisis",
    categoryLabel: "Parálisis Facial",
    question: "¿Funciona si tengo meses con secuelas o sincinesias (el ojo se cierra al sonreír)?",
    shortAnswer: "Sí. Mediante acupuntura y relajación miofascial desacoplamos las fibras cruzadas y liberamos contracturas.",
    detailedAnswer: "Sí, es de las mejores herramientas clínicas. Las sincinesias ocurren cuando los axones regeneran de forma errática conectando ramas de diferentes músculos (por ejemplo, el músculo del ojo se activa al intentar sonreír). Con acupuntura especializada en puntos inhibidores, moxibustión indirecta y reeducación frente a espejo, relajamos la rigidez muscular del lado afectado y del lado sano (que suele hipercompensar), suavizando asimetrías y devolviendo naturalidad al rostro.",
    keyPoints: [
      "Disminuye la tensión y tirantez constante en mejilla y cuello.",
      "Reeduca la disociación ocular y bucal.",
      "Tratamiento suave que respeta la biología del nervio."
    ],
    keywords: ["secuelas", "sincinesia", "sincinesias", "meses", "año", "cronica", "asimetria", "ojo chiquito", "boca chueca", "contractura"],
    suggestedFollowUps: ["paralisis-cuando-iniciar", "como-agendar-cita"]
  },
  {
    id: "paralisis-cuidados-casa",
    category: "paralisis",
    categoryLabel: "Parálisis Facial",
    question: "¿Qué debo cuidar y qué errores evitar en casa con parálisis facial?",
    shortAnswer: "Protege el ojo con lágrimas artificiales, no mastiques chicle con fuerza y evita corrientes frías directas.",
    detailedAnswer: "Cuidados esenciales en casa:\n1. 👁️ Protección ocular prioritaria: Usa lágrimas artificiales de día y gel lubricante o parche oclusor suave de noche si tu ojo no cierra por completo (lagoftalmos).\n2. 🚫 NO masticar chicle: Masticar chicle con fuerza agota el nervio y es la causa número 1 de sincinesias permanentes.\n3. 🚫 NO usar aparatos de toques eléctricos caseros bruscos sin supervisión profesional calificada.\n4. 🧣 Proteger el cuello y rostro de corrientes de aire frío directo o aires acondicionados potentes.\n5. 🪞 Ejercicios guiados suaves: Movimientos lentos y asistidos con tus manos frente al espejo, nunca muecas violentas.",
    keyPoints: [
      "Lágrimas artificiales continuas para proteger la córnea.",
      "Nunca masticar chicle ni forzar contracciones violentas.",
      "Cuidarse del frío y descansar adecuadamente."
    ],
    keywords: ["cuidados", "casa", "ejercicios", "chicle", "ojo", "lagrimas", "frio", "aire", "errores", "que hacer"],
    suggestedFollowUps: ["paralisis-cuando-iniciar", "como-agendar-cita"]
  },

  // --- DOLOR Y CIÁTICA ---
  {
    id: "dolor-ciatica-espalda",
    category: "dolor",
    categoryLabel: "Dolor y Ciática",
    question: "¿Cómo ayuda la acupuntura para el dolor de ciática y lumbalgia?",
    shortAnswer: "Descomprime el nervio ciático desinflamando el músculo piramidal y liberando endorfinas analgésicas naturales.",
    detailedAnswer: "La acupuntura actúa por múltiples vías científicas:\n1. Desinflamación muscular profunda: Relaja el espasmo del músculo piriforme y paravertebrales lumbares que suelen comprimir las raíces del nervio ciático.\n2. Efecto analgésico neuroquímico: Provoca la liberación inmediata de beta-endorfinas, encefalinas y dinorfinas en el sistema nervioso central, bloqueando las señales de dolor.\n3. Microcirculación local: Aumenta el flujo sanguíneo y drena metabolitos inflamatorios en la zona lumbar y glútea, restaurando la movilidad sin desgastar el estómago con pastillas.",
    keyPoints: [
      "Alivio del dolor punzante que baja por el glúteo y la pierna.",
      "Disminución de la rigidez matutina en espalda baja.",
      "Alternativa natural sin efectos secundarios gastrointestinales."
    ],
    keywords: ["ciatica", "lumbalgia", "espalda", "espalda baja", "gluteo", "pierna", "nervio ciatico", "hernia", "lumbago", "columna"],
    suggestedFollowUps: ["cuantas-sesiones", "dolor-desde-primera-sesion"]
  },
  {
    id: "dolor-desde-primera-sesion",
    category: "dolor",
    categoryLabel: "Dolor y Ciática",
    question: "¿Se siente alivio del dolor desde la primera sesión?",
    shortAnswer: "Sí, la gran mayoría de los pacientes se levanta de la camilla con menor intensidad de dolor y ligereza.",
    detailedAnswer: "Sí. Debido a la liberación refleja de endorfinas y el aumento del umbral de dolor, entre el 70% y el 85% de los pacientes experimenta una disminución palpable de la molestia al terminar su primera sesión. El objetivo de las siguientes citas es estabilizar esa mejoría para que el dolor no regrese y tratar la causa de origen del bloqueo.",
    keyPoints: [
      "Efecto analgésico rápido desde la primera cita.",
      "Sensación de descompresión y ligereza articular.",
      "Consolidación duradera a través de sesiones continuas."
    ],
    keywords: ["primera sesion", "inmediato", "rapido", "cuanto tiempo", "alivio", "funciona rapido", "efecto"],
    suggestedFollowUps: ["cuantas-sesiones", "como-agendar-cita"]
  },
  {
    id: "dolor-migrana-cuello",
    category: "dolor",
    categoryLabel: "Dolor y Ciática",
    question: "¿Tratan migrañas, dolor de cuello y contracturas por estrés?",
    shortAnswer: "Sí, es una de nuestras especialidades con mayor tasa de éxito mediante descompresión suboccipital.",
    detailedAnswer: "Absolutamente. Tratamos con excelentes resultados migrañas tensionales, cefaleas vasculares, cervicalgia, rigidez de hombros y trapecios. La acupuntura relaja los músculos suboccipitales que comprimen los nervios occipitales mayores y regula el tono vasomotor de las arterias craneales, disminuyendo drásticamente la frecuencia e intensidad de los ataques.",
    keyPoints: [
      "Alivia la tensión acumulada en cuello, nuca y mandíbula (bruxismo).",
      "Reduce la necesidad de analgésicos para migraña.",
      "Efecto relajante sobre el sistema nervioso."
    ],
    keywords: ["migraña", "cuello", "cervicalgia", "cabeza", "dolor de cabeza", "hombros", "trapecio", "tension", "bruxismo"],
    suggestedFollowUps: ["estres-cortisol-ansiedad", "como-agendar-cita"]
  },

  // --- BIENESTAR FEMENINO ---
  {
    id: "femenino-colicos-dismenorrea",
    category: "femenino",
    categoryLabel: "Salud Femenina",
    question: "¿Cómo ayuda la acupuntura para quitar los cólicos menstruales intensos?",
    shortAnswer: "Regula las prostaglandinas uterinas, desinflama el bajo vientre y normaliza el flujo vascular pélvico.",
    detailedAnswer: "En Acupuntura Tradicional China y práctica clínica, el dolor menstrual se debe a estancamiento de Qi y Xue en la pelvis. La estimulación de puntos clave (como San Yin Jiao y Di Ji) inhibe la producción excesiva de prostaglandinas que causan contracciones violentas del miometrio y promueve vasodilatación en las arterias uterinas. Las pacientes suelen experimentar periodos mucho más tranquilos, sin dolor incapacitante ni náuseas.",
    keyPoints: [
      "Alivio del dolor punzante en vientre y zona lumbar.",
      "Menos hinchazón abdominal y cambios de humor.",
      "Terapia natural sin sobrecargar el estómago con antiinflamatorios."
    ],
    keywords: ["colicos", "menstruacion", "regla", "periodo", "dismenorrea", "vientre", "dolor menstrual", "ovarios"],
    suggestedFollowUps: ["femenino-fertilidad-fiv", "femenino-menopausia-bochornos"]
  },
  {
    id: "femenino-fertilidad-fiv",
    category: "femenino",
    categoryLabel: "Salud Femenina",
    question: "¿Por qué preparar la fertilidad 2 a 3 meses antes con acupuntura?",
    shortAnswer: "La maduración folicular toma 90 días; el tratamiento acondiciona el endometrio y el flujo ovárico.",
    detailedAnswer: "Biológicamente, la foliculogénesis (maduración del folículo ovárico) tarda aproximadamente 90 días. Iniciar acupuntura 8 a 12 semanas antes de buscar concepción o transferencia embrionaria en FIV/IA permite:\n• Optimizar el riego sanguíneo a las arterias ováricas y uterinas.\n• Mejorar el grosor y receptividad trilaminar del endometrio.\n• Modular el eje hipotálamo-hipófisis-ovárico para ovulaciones más regulares.\n• Reducir el cortisol y la ansiedad asociada a los tratamientos de fertilidad.",
    keyPoints: [
      "Acompañamiento tanto para búsqueda natural como para FIV/IA.",
      "Favorece un endometrio receptivo y óptima respuesta ovárica.",
      "Reduce el estrés emocional del proceso reproductivo."
    ],
    keywords: ["fertilidad", "embarazo", "fiv", "inseminacion", "concepcion", "bebe", "reproduccion", "ovulos", "endometrio"],
    suggestedFollowUps: ["como-agendar-cita", "femenino-colicos-dismenorrea"]
  },
  {
    id: "femenino-menopausia-bochornos",
    category: "femenino",
    categoryLabel: "Salud Femenina",
    question: "¿Es segura para bochornos de la menopausia si no puedo tomar hormonas?",
    shortAnswer: "Sí, es la opción no hormonal número uno recomendada para regular los sofocos y sudoraciones nocturnas.",
    detailedAnswer: "Es 100% segura y altamente recomendada por organismos ginecológicos internacionales. La acupuntura no introduce hormonas externas en tu cuerpo; actúa regulando el centro termorregulador en el hipotálamo y los niveles de serotonina y endorfinas. Esto disminuye la frecuencia y severidad de los bochornos diurnos, frena las sudoraciones nocturnas y mejora la calidad del sueño sin ningún riesgo de trombosis o contraindicaciones hormonales.",
    keyPoints: [
      "Terapia 100% libre de hormonas exógenas.",
      "Control de bochornos, sudoración y cambios de humor.",
      "Restaura el descanso nocturno continuo."
    ],
    keywords: ["menopausia", "climaterio", "bochornos", "sofocos", "sudoraciones", "calores", "hormonas", "sin hormonas"],
    suggestedFollowUps: ["estres-insomnio-descanso", "como-agendar-cita"]
  },

  // --- ESTRÉS, ANSIEDAD E INSOMNIO ---
  {
    id: "estres-cortisol-ansiedad",
    category: "estres",
    categoryLabel: "Estrés y Emociones",
    question: "¿Cómo ayuda la acupuntura a reducir el estrés crónico y la ansiedad?",
    shortAnswer: "Activa el sistema nervioso parasimpático (descanso y reparación) y reduce los niveles de cortisol.",
    detailedAnswer: "Cuando vives con estrés crónico, tu sistema nervioso simpático permanece hiperactivo en estado de alerta constante. La acupuntura clínica en puntos como Yintang, Baihui y Shenmen estimula el nervio vago, incrementando el tono parasimpático y reduciendo los niveles circulantes de cortisol y adrenalina. Los pacientes describen una sensación inmediata de 'desconexión del ruido mental' y una paz interior profunda.",
    keyPoints: [
      "Disminuye la opresión en el pecho, taquicardias y nudo en la garganta.",
      "Regula el sistema nervioso autónomo.",
      "Efecto acumulativo que fortalece la resiliencia al estrés diario."
    ],
    keywords: ["estres", "ansiedad", "cortisol", "nervios", "angustia", "panico", "calma", "relajacion", "shen"],
    suggestedFollowUps: ["estres-insomnio-descanso", "cuantas-sesiones"]
  },
  {
    id: "estres-insomnio-descanso",
    category: "estres",
    categoryLabel: "Estrés y Emociones",
    question: "¿Es efectiva para el insomnio y para dormir profundamente?",
    shortAnswer: "Sí, estimula la síntesis de melatonina y GABA, permitiendo conciliar el sueño y evitar despertares continuos.",
    detailedAnswer: "Sí, es una de las aplicaciones clínicas más gratificantes. Al calmar el 'Shen' (la mente) y regular neurotransmisores como el GABA, la serotonina y la melatonina, la acupuntura restaura la arquitectura natural del sueño. Los pacientes dejan de dar vueltas en la cama, concilian el sueño más rápido y logran un descanso reparador sin la pesadez matutina de los somníferos químicos.",
    keyPoints: [
      "Facilita conciliar el sueño sin pastillas adictivas.",
      "Reduce los despertares a las 2 o 3 de la madrugada.",
      "Despiertas con energía renovada y mente despejada."
    ],
    keywords: ["insomnio", "dormir", "sueño", "despertar", "descanso", "no puedo dormir", "melatonina", "pastillas"],
    suggestedFollowUps: ["estres-cortisol-ansiedad", "como-agendar-cita"]
  },

  // --- MEDICAMENTOS Y COMPATIBILIDAD ---
  {
    id: "medicamentos-compatibilidad",
    category: "popular",
    categoryLabel: "Seguridad y Cuidados",
    question: "¿Puedo recibir acupuntura si estoy tomando otros medicamentos?",
    shortAnswer: "Sí, es totalmente compatible y segura. No interfiere negativamente con ningún fármaco prescrito.",
    detailedAnswer: "Sí, es absolutamente segura y complementaria. La acupuntura no introduce químicos al organismo; estimula tus propios recursos biológicos de autorregulación y analgesia. De hecho, en pacientes que toman analgésicos o antiinflamatorios continuos, la acupuntura suele permitir que sus profesionales de la salud tratantes reduzcan progresivamente las dosis al mejorar los síntomas de forma natural.",
    keyPoints: [
      "No interactúa negativamente con tus recetas o fármacos.",
      "Puedes continuar con tus tratamientos habituales.",
      "Siempre informamos a tu especialista sobre tus antecedentes clínicos."
    ],
    keywords: ["medicamentos", "pastillas", "farmacos", "contraindicaciones", "seguro", "seguridad", "presion", "diabetes"],
    suggestedFollowUps: ["duele-acupuntura", "como-agendar-cita"]
  }
];

// Helper search function that performs keyword and semantic text scoring
export function searchFaqs(query: string): FaqItem[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return [];

  const tokens = clean.split(/\s+/).filter(t => t.length > 2);

  const scored = FAQ_KNOWLEDGE_BASE.map(faq => {
    let score = 0;
    const qLower = faq.question.toLowerCase();
    const aLower = faq.detailedAnswer.toLowerCase();
    const sLower = faq.shortAnswer.toLowerCase();

    // Exact matches
    if (qLower.includes(clean)) score += 50;
    if (sLower.includes(clean)) score += 30;
    if (aLower.includes(clean)) score += 20;

    // Keywords match
    faq.keywords.forEach(kw => {
      const kwLower = kw.toLowerCase();
      if (clean.includes(kwLower)) score += 25;
      if (kwLower.includes(clean)) score += 15;
    });

    // Token match
    tokens.forEach(tok => {
      if (qLower.includes(tok)) score += 12;
      if (faq.keywords.some(k => k.toLowerCase().includes(tok))) score += 10;
      if (sLower.includes(tok)) score += 6;
      if (aLower.includes(tok)) score += 4;
    });

    return { faq, score };
  });

  return scored
    .filter(item => item.score > 8)
    .sort((a, b) => b.score - a.score)
    .map(item => item.faq);
}
