export interface Post {
  id: string;
  title: string;
  excerpt: string;
  metaDescription?: string;
  keywords?: string[];
  content: string;
  image: string;
  imageAlt: string;
  category: string;
  date: string;
  dateISO: string;
  author: string;
  references?: {
    title: string;
    doi: string;
    url: string;
  }[];
}

export const posts: Post[] = [
  {
    id: "acupuntura-estres-laboral",
    title: "Acupuntura y Estrés: Lo que dice la ciencia",
    excerpt: "Estudios clínicos demuestran que la acupuntura reduce el cortisol y regula el sistema nervioso. Descubre cómo funciona este 'reset' biológico.",
    metaDescription: "Descubre cómo la acupuntura reduce el estrés y la ansiedad regulando el cortisol. Tratamiento natural y efectivo en CDMX para el estrés laboral y crónico.",
    keywords: ["acupuntura estrés", "tratamiento ansiedad cdmx", "cortisol acupuntura", "medicina china estrés", "relajación natural"],
    content: `
      <p>El estrés crónico mantiene a tu cuerpo en alerta constante, elevando el cortisol. La evidencia científica sugiere que la acupuntura estimula el sistema nervioso parasimpático (el encargado del descanso), reduciendo la frecuencia cardíaca y disminuyendo las hormonas del estrés.</p>
      <p>Es una herramienta validada para pasar del modo 'lucha o huida' al modo 'descanso y reparación' de forma natural. Durante una sesión, se liberan endorfinas y encefalinas, los analgésicos y relajantes naturales del cuerpo.</p>
      
      <h3>Conclusiones de la Investigación</h3>
      <p>Estudios clínicos controlados han demostrado que la acupuntura no solo reduce la percepción subjetiva del estrés, sino que produce cambios medibles en la variabilidad de la frecuencia cardíaca (HRV), lo que indica una regulación efectiva del sistema nervioso autónomo.</p>

      <h3>¿Cómo ayuda la acupuntura?</h3>
      <ul>
        <li>Reduce los niveles de cortisol y adrenalina.</li>
        <li>Mejora la calidad del sueño.</li>
        <li>Alivia la tensión muscular asociada al estrés.</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Mujer relajada recibiendo tratamiento de acupuntura facial en ambiente spa",
    category: "Salud Mental",
    date: "12 Feb 2024",
    dateISO: "2024-02-12",
    author: "Equipo Acupuntura CDMX",
    references: [
      {
        title: "Acupuncture for anxiety and depression in women: a clinical study",
        doi: "10.1136/bmjopen-2017-018960",
        url: "https://doi.org/10.1136/bmjopen-2017-018960"
      }
    ]
  },
  {
    id: "equilibrio-hormonal-fertilidad",
    title: "Equilibrio Hormonal y Fertilidad",
    excerpt: "Investigaciones recientes sugieren que la acupuntura mejora el flujo sanguíneo uterino y regula el eje hormonal HPO.",
    metaDescription: "Mejora tu fertilidad y equilibra tus hormonas con acupuntura. Tratamiento coadyuvante para FIV, SOP y regulación menstrual en Ciudad de México.",
    keywords: ["acupuntura fertilidad", "equilibrio hormonal", "tratamiento SOP cdmx", "embarazo natural", "acupuntura mujer"],
    content: `
      <p>Los desequilibrios menstruales y de fertilidad a menudo se deben a una comunicación deficiente entre el cerebro y los ovarios (eje HPO). Estudios indican que la acupuntura puede modular este eje, mejorando la circulación en la zona pélvica y favoreciendo la ovulación regular.</p>
      <p>Es un coadyuvante eficaz y seguro, utilizado cada vez más en clínicas de fertilidad integrativa para mejorar las tasas de éxito en tratamientos de reproducción asistida y para regular ciclos menstruales de forma natural.</p>
    `,
    image: "https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Preparación de hierbas medicinales chinas tradicionales en mortero",
    category: "Salud Femenina",
    date: "08 Feb 2024",
    dateISO: "2024-02-08",
    author: "Equipo Acupuntura CDMX"
  },
  {
    id: "dolor-lumbar-evidencia",
    title: "Dolor Lumbar: Evidencia Clínica",
    excerpt: "Guías médicas internacionales recomiendan la acupuntura como primera línea de tratamiento para el dolor lumbar crónico.",
    metaDescription: "Alivio efectivo del dolor lumbar y ciática con acupuntura. Terapia sin efectos secundarios recomendada por guías médicas para el dolor de espalda crónico.",
    keywords: ["acupuntura dolor lumbar", "tratamiento ciática", "dolor de espalda cdmx", "alivio dolor crónico", "fisioterapia alternativa"],
    content: `
      <p>El alivio del dolor con acupuntura no es solo 'energético'; es bioquímico. Al insertar las agujas, se libera adenosina local (un potente analgésico natural) y se activan mecanismos antiinflamatorios.</p>
      <p>Además, 'cierra la puerta' a las señales de dolor en la médula espinal. Es una opción potente para tratar lumbalgias sin los efectos secundarios de los opioides o AINEs a largo plazo, permitiendo una recuperación funcional más rápida.</p>
      
      <h3>Evidencia en Guías Médicas</h3>
      <p>Las guías de práctica clínica del American College of Physicians recomiendan la acupuntura como una de las intervenciones no farmacológicas de primera línea para el dolor lumbar crónico, basándose en su perfil de seguridad y eficacia superior al placebo.</p>
    `,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Aplicación de ventosas terapéuticas en espalda para tratamiento de dolor",
    category: "Manejo del Dolor",
    date: "01 Feb 2024",
    dateISO: "2024-02-01",
    author: "Equipo Acupuntura CDMX",
    references: [
      {
        title: "Acupuncture for Chronic Low Back Pain: A Randomized Trial",
        doi: "10.1001/archinte.169.9.858",
        url: "https://doi.org/10.1001/archinte.169.9.858"
      }
    ]
  },
  {
    id: "acupuntura-paralisis-facial",
    title: "Parálisis Facial y Acupuntura: Recuperación Acelerada",
    excerpt: "La acupuntura es altamente efectiva para tratar la parálisis de Bell. Conoce cómo estimula la regeneración nerviosa y recupera la simetría facial.",
    metaDescription: "Recuperación acelerada de parálisis facial (Bell) con acupuntura. Estimulación nerviosa y muscular para recuperar la simetría facial. Agenda tu valoración.",
    keywords: ["acupuntura parálisis facial", "parálisis de bell tratamiento", "recuperación nervio facial", "rehabilitación facial cdmx", "terapia parálisis"],
    content: `
      <p>La parálisis facial, comúnmente conocida como Parálisis de Bell, ocurre cuando el nervio facial se inflama, causando debilidad o parálisis en un lado de la cara. En la Medicina Tradicional China (MTC), esto se diagnostica frecuentemente como un ataque de "Viento-Frío" o "Viento-Calor" que bloquea los meridianos de la cara, impidiendo el flujo de Qi y sangre.</p>
      
      <h3>¿Por qué la acupuntura es tan efectiva?</h3>
      <p>Estudios clínicos han demostrado que la acupuntura puede acortar significativamente el tiempo de recuperación y mejorar el pronóstico final, especialmente cuando se inicia en las primeras etapas. La Organización Mundial de la Salud (OMS) reconoce la parálisis facial como una de las condiciones tratables eficazmente con acupuntura.</p>
      
      <h3>Conclusiones del Estudio Clínico</h3>
      <p>La revisión de la evidencia clínica indica que la acupuntura, especialmente cuando se combina con el tratamiento convencional, mejora la tasa de curación y reduce las secuelas de la parálisis de Bell. El mecanismo principal implica la reducción del edema del nervio facial y la mejora de la conducción nerviosa.</p>

      <h3>Mecanismos de Acción</h3>
      <ul>
        <li><strong>Mejora la microcirculación:</strong> Aumenta el flujo sanguíneo local, reduciendo la inflamación del nervio.</li>
        <li><strong>Estimulación nerviosa:</strong> Reactiva la excitabilidad de las fibras nerviosas dañadas.</li>
        <li><strong>Fortalecimiento muscular:</strong> Previene la atrofia muscular mientras el nervio se recupera.</li>
      </ul>

      <h3>Puntos Clave de Tratamiento</h3>
      <p>El tratamiento suele incluir puntos locales en la cara y distales en las manos o pies. Algunos puntos comunes son:</p>
      <ul>
        <li><strong>Yangbai (GB14):</strong> En la frente, para elevar la ceja.</li>
        <li><strong>Taiyang (EX-HN5):</strong> En las sienes, para relajar la tensión facial.</li>
        <li><strong>Dicang (ST4) y Jiache (ST6):</strong> Cerca de la boca y mandíbula, para recuperar la sonrisa y la masticación.</li>
        <li><strong>Hegu (LI4):</strong> En la mano, punto maestro para la cara y la boca.</li>
      </ul>

      <p>La combinación de acupuntura con moxibustión o electroacupuntura suele potenciar los resultados, logrando tasas de recuperación superiores al 90% en casos agudos.</p>
    `,
    image: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Tratamiento de acupuntura facial para recuperación de parálisis",
    category: "Rehabilitación Neurológica",
    date: "20 Feb 2024",
    dateISO: "2024-02-20",
    author: "Equipo Acupuntura CDMX",
    references: [
      {
        title: "Acupuncture for Bell's palsy: A review of clinical evidence",
        doi: "10.4103/CMAC.CMAC_25_21",
        url: "https://doi.org/10.4103/CMAC.CMAC_25_21"
      }
    ]
  },
  {
    id: "acupuntura-menopausia-alivio",
    title: "Menopausia y Acupuntura: Tu Aliada Natural",
    excerpt: "Olvídate de los bochornos y el insomnio. La acupuntura ofrece una alternativa no hormonal probada para transitar la menopausia con plenitud.",
    metaDescription: "Alivio efectivo de síntomas de menopausia con acupuntura en CDMX. Tratamiento natural para bochornos, insomnio y ansiedad sin hormonas.",
    keywords: ["acupuntura menopausia", "tratamiento bochornos cdmx", "menopausia natural", "insomnio menopausia", "equilibrio hormonal"],
    content: `
      <p>La menopausia no es una enfermedad, es una transición natural. Sin embargo, para muchas mujeres, los cambios hormonales traen consigo síntomas incómodos como bochornos, sudoración nocturna, insomnio y cambios de humor que afectan su calidad de vida.</p>
      
      <h3>¿Cómo funciona la acupuntura en la menopausia?</h3>
      <p>Desde la perspectiva científica, la acupuntura ayuda a regular el eje Hipotálamo-Pituitaria-Ovario (HPO) y estimula la liberación de endorfinas y neurotransmisores que regulan la temperatura corporal y el estado de ánimo.</p>
      
      <h3>Beneficios comprobados:</h3>
      <ul>
        <li><strong>Reducción de Bochornos:</strong> Estudios muestran que la acupuntura puede reducir la frecuencia e intensidad de los sofocos hasta en un 50%.</li>
        <li><strong>Mejor Calidad de Sueño:</strong> Al calmar el sistema nervioso simpático, facilita un descanso profundo y reparador.</li>
        <li><strong>Equilibrio Emocional:</strong> Ayuda a estabilizar la ansiedad y la irritabilidad comunes en esta etapa.</li>
      </ul>

      <p>Es una excelente opción para mujeres que no pueden o prefieren no utilizar Terapia de Reemplazo Hormonal (TRH), ofreciendo un enfoque seguro y libre de efectos secundarios para recuperar tu bienestar.</p>
    `,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Mujer madura sonriendo y disfrutando de un momento de tranquilidad al aire libre",
    category: "Salud Femenina",
    date: "25 Feb 2024",
    dateISO: "2024-02-25",
    author: "Equipo Acupuntura CDMX"
  },
  {
    id: "acupuntura-salud-digestiva",
    title: "Salud Digestiva: Adiós a la Gastritis y Colitis",
    excerpt: "¿Sufres de inflamación o digestión lenta? La acupuntura regula el eje intestino-cerebro para aliviar síntomas de gastritis y colitis de raíz.",
    metaDescription: "Tratamiento natural para gastritis y colitis con acupuntura en CDMX. Alivia la inflamación, dolor abdominal y mejora tu digestión sin medicamentos.",
    keywords: ["acupuntura gastritis", "tratamiento colitis cdmx", "salud digestiva natural", "inflamación abdominal", "eje intestino cerebro"],
    content: `
      <p>La gastritis y la colitis son padecimientos cada vez más comunes, a menudo exacerbados por el estrés y la dieta moderna. La Medicina Tradicional China (MTC) entiende estos problemas como un desequilibrio en el sistema Bazo-Estómago y una falta de armonía entre el Hígado y el sistema digestivo.</p>
      
      <h3>El Eje Intestino-Cerebro</h3>
      <p>La ciencia moderna ha confirmado la estrecha relación entre nuestras emociones y nuestra digestión. La acupuntura actúa directamente sobre el nervio vago, que conecta el cerebro con el sistema digestivo, ayudando a regular la motilidad intestinal y reducir la inflamación.</p>
      
      <h3>Beneficios del tratamiento:</h3>
      <ul>
        <li><strong>Reducción de la inflamación:</strong> Disminuye la hinchazón y el dolor abdominal.</li>
        <li><strong>Regulación del ácido estomacal:</strong> Ayuda a controlar el reflujo y la acidez.</li>
        <li><strong>Manejo del estrés:</strong> Al reducir la ansiedad, se previenen los brotes de colitis nerviosa.</li>
      </ul>

      <p>Recuperar tu salud digestiva es posible de forma natural, permitiéndote disfrutar de tus comidas y tu vida sin molestias constantes.</p>
    `,
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Persona disfrutando de una comida saludable y equilibrada",
    category: "Salud Digestiva",
    date: "28 Feb 2024",
    dateISO: "2024-02-28",
    author: "Equipo Acupuntura CDMX"
  },
  {
    id: "medicina-china-salud-respiratoria",
    title: "Respira Mejor: Acupuntura para Alergias y Asma",
    excerpt: "Fortalece tu sistema inmune y reduce la inflamación de las vías respiratorias. Un enfoque natural para alergias estacionales y asma.",
    metaDescription: "Tratamiento de alergias y asma con acupuntura en CDMX. Fortalece tus pulmones y sistema inmune de forma natural. Reduce la dependencia de medicamentos.",
    keywords: ["acupuntura asma", "tratamiento alergias cdmx", "salud respiratoria natural", "fortalecer sistema inmune", "rinitis alérgica"],
    content: `
      <p>En la Medicina Tradicional China, el Pulmón no solo se encarga de la respiración, sino que también regula el "Wei Qi" o energía defensiva, que es nuestro escudo contra patógenos externos como virus, bacterias y alérgenos.</p>
      
      <h3>Un enfoque preventivo y correctivo</h3>
      <p>La acupuntura es altamente efectiva tanto para tratar crisis agudas como para prevenir recurrencias a largo plazo. Estudios han demostrado que puede modular la respuesta inmune, reduciendo la producción de IgE (anticuerpos asociados a las alergias).</p>
      
      <h3>¿En qué condiciones ayuda?</h3>
      <ul>
        <li><strong>Rinitis Alérgica:</strong> Descongestiona las vías nasales y reduce los estornudos.</li>
        <li><strong>Asma:</strong> Ayuda a relajar los bronquios y disminuir la inflamación de las vías aéreas.</li>
        <li><strong>Recuperación post-viral:</strong> Fortalece el cuerpo después de infecciones respiratorias para eliminar la tos persistente y la fatiga.</li>
      </ul>

      <p>Respira profundo y fortalece tus defensas naturales con un tratamiento integral y personalizado.</p>
    `,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Mujer respirando aire fresco en un bosque",
    category: "Salud Respiratoria",
    date: "02 Mar 2024",
    dateISO: "2024-03-02",
    author: "Equipo Acupuntura CDMX"
  },
  {
    id: "ansiedad-medicina-tradicional-china",
    title: "Ansiedad y MTC: Un Enfoque Integral",
    excerpt: "Más allá de los síntomas: cómo la Medicina Tradicional China entiende y trata la ansiedad equilibrando el cuerpo y la mente.",
    metaDescription: "Manejo de ansiedad y ataques de pánico con Medicina Tradicional China en CDMX. Tratamiento natural para calmar la mente y equilibrar las emociones.",
    keywords: ["acupuntura ansiedad", "medicina china salud mental", "ataques de pánico tratamiento", "calmar la mente", "equilibrio emocional"],
    content: `
      <p>La ansiedad no está solo en tu cabeza; se manifiesta en todo tu cuerpo con palpitaciones, tensión muscular, problemas digestivos e insomnio. Para la Medicina Tradicional China (MTC), la ansiedad es un signo de que el "Shen" (Espíritu/Mente) no está anclado o nutrido correctamente, a menudo debido a un desequilibrio en el Corazón o el Hígado.</p>
      
      <h3>Conexión Mente-Cuerpo</h3>
      <p>A diferencia de enfoques que solo tratan los síntomas mentales, la MTC busca la raíz física del desequilibrio emocional. Por ejemplo, el estancamiento de la energía del Hígado (común por estrés reprimido) puede generar irritabilidad y tensión, mientras que una deficiencia en el Corazón puede causar palpitaciones e inquietud.</p>
      
      <h3>Herramientas de la MTC para la calma:</h3>
      <ul>
        <li><strong>Acupuntura:</strong> Puntos específicos como Yintang (entrecejo) y Shenmen (oreja) tienen un efecto sedante inmediato sobre el sistema nervioso central.</li>
        <li><strong>Fitoterapia:</strong> Fórmulas herbales adaptógenas que nutren el sistema nervioso sin causar somnolencia.</li>
        <li><strong>Estilo de vida:</strong> Recomendaciones de alimentación y ejercicios de respiración (Qi Gong) para mantener el equilibrio diario.</li>
      </ul>

      <p>Recuperar la calma mental es un proceso de reconexión con tu cuerpo. La MTC te ofrece un camino suave y profundo hacia la tranquilidad.</p>
    `,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=500&fit=crop&auto=format&q=80",
    imageAlt: "Persona meditando en un ambiente tranquilo al amanecer",
    category: "Salud Mental",
    date: "05 Mar 2024",
    dateISO: "2024-03-05",
    author: "Equipo Acupuntura CDMX"
  }
];