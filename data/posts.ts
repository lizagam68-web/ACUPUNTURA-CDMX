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
    url: string;
    doi: string;
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
      <h3>¿Cómo ayuda la acupuntura?</h3>
      <ul>
        <li>Reduce los niveles de cortisol y adrenalina.</li>
        <li>Mejora la calidad del sueño.</li>
        <li>Alivia la tensión muscular asociada al estrés.</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Detalle artístico de agujas de acupuntura, simbolizando el alivio del estrés y la regulación del sistema nervioso.",
    category: "Salud Mental",
    date: "12 Feb 2024",
    dateISO: "2024-02-12",
    author: "Equipo Acupuntura CDMX"
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
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Ambiente de bienestar y serenidad, representando el equilibrio hormonal y la fertilidad femenina.",
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
    `,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Representación de salud física y bienestar lumbar, enfocada en el alivio del dolor crónico.",
    category: "Manejo del Dolor",
    date: "01 Feb 2024",
    dateISO: "2024-02-01",
    author: "Equipo Acupuntura CDMX"
  },
  {
    id: "acupuntura-menopausia-alivio",
    title: "Menopausia y Acupuntura: Tu Aliada Natural",
    excerpt: "Olvídate de los bochornos y el insomnio. La acupuntura ofrece una alternativa no hormonal probada para transitar la menopausia con plenitud.",
    metaDescription: "Alivio efectivo de síntomas de menopausia con acupuntura en CDMX. Tratamiento natural para bochornos, insomnio y ansiedad sin hormonas.",
    keywords: ["acupuntura menopausia", "tratamiento bochornos cdmx", "menopausia natural", "insomnio menopausia", "equilibrio hormonal"],
    content: `
      <p>La menopausia no es una enfermedad, es una transición natural. Sin embargo, para many mujeres, los cambios hormonales traen consigo síntomas incómodos como bochornos, sudoración nocturna, insomnio y cambios de humor que afectan su calidad de vida.</p>
      
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
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Mujer en meditación profunda, simbolizando la paz y el equilibrio hormonal durante la menopausia.",
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
    image: "https://images.unsplash.com/photo-1545208393-59607160ee6b?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Piedras Zen en equilibrio, simbolizando una digestión armoniosa y el bienestar del eje intestino-cerebro.",
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
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Consultorio clínico minimalista y limpio, simbolizando una respiración profunda y salud respiratoria.",
    category: "Salud Respiratoria",
    date: "02 Mar 2024",
    dateISO: "2024-03-02",
    author: "Equipo Acupuntura CDMX"
  }
];
