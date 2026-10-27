export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: "Bienestar Femenino" | "Dolor" | "Parálisis Facial";
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bienestar-femenino-salud-acupuntura",
    title: "Acupuntura y bienestar hormonal: apoyo natural en la salud de la mujer",
    excerpt: "¿Cómo favorece la acupuntura el ciclo y la relajación corporal? Te explicamos el rol de la acupuntura en la regularidad del ciclo y el alivio de la tensión en CDMX.",
    date: "2026-05-18",
    category: "Bienestar Femenino",
    readTime: "5 min",
    content: `
      <p>En el ajetreo diario de la gran ciudad, el cuerpo femenino a menudo refleja las presiones y tensiones a través de desajustes en el descanso, el estado de ánimo y la regularidad biológica. El bienestar general de la mujer requiere un balance integral y cuidadoso de todos sus sistemas.</p>
      <p>La acupuntura clínica ofrece una vía integrativa y de acompañamiento natural para respaldar la armonía corporal.</p>
      
      <h3>¿Cuáles son los efectos biológicos principales?</h3>
      <p>Múltiples estudios clínicos con rigor científico sugieren que la acupuntura modula de forma exitosa respuestas específicas del sistema neuroendocrino. Sus efectos principales incluyen:</p>
      
      <ul>
        <li><strong>Fomento de la relajación profunda</strong> por estimulación aferente nerviosa.</li>
        <li><strong>Apoyo en la respuesta circulatoria local</strong> favoreciendo el flujo arterial pélvico.</li>
        <li><strong>Reducción de los niveles de cortisol</strong> (la hormona del estrés) regulando el tono autonómico.</li>
        <li><strong>Alivio de dolores físicos y fatiga</strong> acumulados en cada etapa de la rutina mensual.</li>
      </ul>

      <h3>¿Cuándo se recomienda comenzar?</h3>
      <p>Dado que las respuestas biológicas precisan tiempo para estabilizarse, se sugiere un seguimiento guiado de al menos 8 a 12 semanas (un ciclo de 3 meses). Esto permite al organismo asimilar los estímulos neuromusculares y consolidar los estados de balance circulatorio profundo de manera paulatina.</p>
      <p>Las sesiones son personalizadas y se recomiendan con una frecuencia semanal.</p>
      
      <h3>Acompañamiento complementario ético</h3>
      <p>Es fundamental recordar que la acupuntura actúa de manera complementaria a tu cuidado habitual, potenciando tu bienestar general, optimizando tus respuestas de autorregulación y ofreciéndote un espacio seguro de contención y equilibrio.</p>
      
      <p><strong>¿Deseas conocer si este protocolo es adecuado para ti?</strong></p>
      <p>En mi consultorio en la alcaldía Benito Juárez realizo una valoración detallada para responder todas tus dudas de forma profesional.</p>
      
      <div class="mt-8">
        <a href="https://wa.me/525552520615?text=Hola,%20me%20gustaría%20agendar%20una%20valoración" class="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg text-sm">
          Agendar valoración por WhatsApp
        </a>
      </div>
    `
  },
  {
    slug: "acupuntura-dolor-cronico-cdmx",
    title: "Dolor crónico y acupuntura: por qué funciona cuando todo lo demás falla",
    excerpt: "El dolor crónico agota. Descubre cómo la acupuntura activa los mecanismos naturales de alivio del cuerpo y qué condiciones trata en CDMX.",
    date: "2026-05-16",
    category: "Dolor",
    readTime: "6 min",
    content: `
      <p>Vivir con dolor crónico no es solo una experiencia física — afecta tu sueño, tu trabajo, tus relaciones y tu estado de ánimo. Y cuando los analgésicos dejan de funcionar o sus efectos secundarios se vuelven insostenibles, muchas personas llegan a la acupuntura como último recurso.</p>
      <p>Lo que descubren es que no debería haber sido el último.</p>
      
      <h3>¿Por qué la acupuntura alivia el dolor?</h3>
      <p>La acupuntura actúa sobre el <strong>sistema nervioso central y periférico</strong> a través de mecanismos documentados:</p>
      
      <ul>
        <li><strong>Liberación de endorfinas y encefalinas:</strong> los analgésicos naturales del cuerpo</li>
        <li><strong>Modulación de la señal de dolor:</strong> interrumpe la transmisión de señales dolorosas en la médula espinal</li>
        <li><strong>Reducción de la inflamación local:</strong> disminuye prostaglandinas y citoquinas inflamatorias</li>
        <li><strong>Mejora de la circulación:</strong> aumenta el flujo sanguíneo en tejidos afectados</li>
      </ul>
      
      <h3>Condiciones que tratamos</h3>
      <ul>
        <li><strong>Dolor lumbar y ciática</strong></li>
        <li><strong>Cervicalgia</strong> y tensión cervical</li>
        <li><strong>Migraña</strong> y cefalea crónica</li>
        <li><strong>Fibromialgia</strong></li>
        <li><strong>Dolor articular:</strong> rodilla, cadera, hombro</li>
        <li><strong>Neuropatía periférica</strong></li>
        <li>Dolor post-quirúrgico</li>
        <li>Lesiones deportivas</li>
      </ul>
      
      <h3>¿Cuántas sesiones necesito?</h3>
      <p><strong>Para dolor agudo:</strong> 3 a 6 sesiones suelen ser suficientes para resolución o mejora significativa.</p>
      <p><strong>Para dolor crónico (más de 3 meses de duración):</strong> se recomienda un ciclo inicial de 8 a 12 sesiones, con frecuencia de 1 a 2 veces por semana. Después, sesiones de mantenimiento mensuales.</p>
      
      <h3>Una alternativa real a los analgésicos</h3>
      <p>A diferencia de los AINEs o los opioides, la acupuntura no genera dependencia, no afecta la mucosa gástrica y puede combinarse con cualquier tratamiento en curso.</p>
      
      <p><strong>¿Tu dolor tiene más de 3 meses?</strong></p>
      <p>Agenda una valoración inicial. En una sola sesión evalúo tu caso y te digo con honestidad y claridad cómo la acupuntura puede ayudarte.</p>

      <div class="mt-8">
        <a href="https://wa.me/525552520615?text=Hola,%20me%20gustaría%20agendar%20una%20valoración" class="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg">
          Agendar por WhatsApp
        </a>
      </div>
    `
  },
  {
    slug: "acupuntura-paralisis-facial",
    title: "Parálisis facial: qué esperar en tu recuperación y cómo la acupuntura acelera el proceso",
    excerpt: "Un diagnóstico de parálisis facial o parálisis de Bell puede ser aterrador. Te explicamos el proceso de recuperación y el papel de la acupuntura en CDMX.",
    date: "2026-05-14",
    category: "Parálisis Facial",
    readTime: "4 min",
    content: `
      <p>Despertar un día sin poder mover un lado de tu cara es una experiencia que asusta. La parálisis facial — especialmente la parálisis de Bell — aparece de manera repentina y afecta no solo el movimiento, sino la expresión, la alimentación, el habla y la confianza.</p>
      <p>La buena noticia: en la mayoría de los casos se puede recuperar. Y la acupuntura puede acelerar ese proceso significativamente.</p>
      
      <h3>¿Qué es la parálisis de Bell?</h3>
      <p>Es una parálisis súbita del nervio facial (nervio VII) que afecta un solo lado del rostro. Sus causas más comunes incluyen infecciones virales, inflamación del nervio o exposición prolongada al frío.</p>
      
      <p><strong>Síntomas típicos:</strong></p>
      <ul>
        <li>Caída de un lado de la cara</li>
        <li>Incapacidad para cerrar el ojo afectado</li>
        <li>Dificultad para sonreír, hablar o comer</li>
        <li>Sensibilidad al sonido o al gusto alterado</li>
      </ul>
      
      <h3>¿Cómo actúa la acupuntura?</h3>
      <p>La acupuntura trabaja sobre el nervio facial y los músculos afectados mediante:</p>
      <ul>
        <li><strong>Estimulación de la regeneración nerviosa</strong></li>
        <li><strong>Reducción de la inflamación</strong> perineural</li>
        <li><strong>Reactivación de la actividad muscular</strong> facial</li>
        <li><strong>Mejora de la circulación local</strong> en la zona afectada</li>
      </ul>
      
      <h3>El factor más importante: el tiempo</h3>
      <p>Cuanto antes se inicia el tratamiento, mejores son los resultados. Idealmente dentro de las <strong>primeras 2 semanas</strong> del inicio de los síntomas. En casos crónicos (más de 3 meses) también hay mejoría, pero el proceso es más largo.</p>
      
      <h3>¿Cuántas sesiones?</h3>
      <ul>
        <li><strong>Fase aguda (primeras 4 semanas):</strong> 2 a 3 sesiones por semana</li>
        <li><strong>Fase de recuperación:</strong> 1 a 2 sesiones por semana</li>
        <li><strong>Total estimado:</strong> 15 a 25 sesiones según severidad</li>
      </ul>
      
      <p><strong>No esperes más tiempo del necesario</strong></p>
      <p>Si tú o alguien cercano tiene un diagnóstico reciente de parálisis facial, contáctanos hoy. La ventana de mayor efectividad es corta y queremos ayudarte a aprovecharla.</p>

      <div class="mt-8">
        <a href="https://wa.me/525552520615?text=Hola,%20me%20gustaría%20agendar%20una%20valoración" class="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg">
          Agendar valoración urgente por WhatsApp
        </a>
      </div>
    `
  },
  {
    slug: "acupuntura-sop-ciclo-femenino-cdmx",
    title: "Bienestar de tus ciclos y balance hormonal con acupuntura",
    excerpt: "Los desbalances del ciclo pueden afectar el rendimiento físico y emocional a diario. Descubre cómo la acupuntura estimula el equilibrio circulatorio y la relajación en CDMX.",
    date: "2026-05-01",
    category: "Bienestar Femenino",
    readTime: "5 min",
    content: `
      <p>Contar con ciclos regulares y libres de malestares severos es indispensable para mantener altos niveles de vitalidad y bienestar a largo plazo. Sin embargo, factores como el ritmo de vida apresurado y la sobreestimulación nerviosa suelen alterar el balance circulatorio y hormonal del organismo.</p>
      <p>La acupuntura clínica promueve el equilibrio orgánico estimulando trayectos y terminaciones nerviosas encargadas de dar señales de calma al cerebro y regular el funcionamiento vasomotor.</p>

      <h3>Mecanismo de acción neuromuscular</h3>
      <p>El estrés cotidianco activa de forma constante el sistema simpático y eleva el cortisol, lo que impacta negativamente en el biorritmo del ciclo natural. La acupuntura estimula vías aferentes específicas que regulan el eje autonómico e hipofisiario.</p>

      <p>En el plano diario, este estímulo colabora con:</p>
      <ul>
        <li>Favorecer patrones de regularidad y armonía en el ciclo biológico.</li>
        <li>Disminuir la hipersensibilidad al estrés neuromuscular.</li>
        <li>Promover una distensión profunda de la zona muscular de la pelvis.</li>
        <li>Soportar la respuesta de microcirculación arterial de los tejidos locales.</li>
      </ul>

      <h3>¿Cuál es el tiempo para percibir resultados estables?</h3>
      <p>Para conseguir cambios profundos y estables, sugiero el desarrollo progresivo de un plan de acompañamiento de 3 meses. Esto brinda el periodo propicio para respaldar de manera segura cada fase del ciclo circulatorio.</p>
      <p>Cada cuerpo reacciona a su propio ritmo; por ende, en las primeras consultas diseño un plan a tu medida sustentado en el diagnóstico clínico.</p>

      <p><strong>Comienza a cuidar tu bienestar hoy</strong></p>
      <p>En mi consultorio, localizado en Benito Juárez, CDMX, dispones de un espacio privado y profesional para brindarte el apoyo integrativo idóneo para tus objetivos de bienestar y salud.</p>

      <div class="mt-8">
        <a href="https://wa.me/525552520615?text=Hola,%20me%20gustaría%20agendar%20una%20valoración" class="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg text-sm">
          Agenda tu valoración
        </a>
      </div>
    `
  },
  {
    slug: "paralisis-bell-recuperacion-acupuntura",
    title: "Parálisis de Bell: qué hacer en los primeros 7 días para una mejor recuperación",
    excerpt: "Los primeros días después de un diagnóstico de parálisis de Bell son críticos. Descubre qué tratamientos complementarios, incluyendo acupuntura, mejoran la recuperación en CDMX.",
    date: "2026-05-08",
    category: "Parálisis Facial",
    readTime: "5 min",
    content: `
      <p>Recibir un diagnóstico de parálisis de Bell puede ser aterrador. Un día te despiertas y un lado de tu cara simplemente no responde — no puedes cerrar el ojo, sonreír, hablar con normalidad. Lo primero que sientes es pánico. Lo segundo: no saber qué hacer.</p>
      <p>Este artículo es para esos primeros días.</p>

      <h3>¿Qué es la parálisis de Bell exactamente?</h3>
      <p>La parálisis de Bell es una parálisis periférica del nervio facial (nervio VII craneal) que afecta un lado del rostro. Es la causa más común de parálisis facial unilateral y en la mayoría de los casos su origen está relacionado con una reactivación viral — especialmente del virus del herpes simple — que inflama el nervio dentro del canal óseo donde viaja, comprimiéndolo.</p>

      <p>Los síntomas aparecen de forma repentina, generalmente en horas:</p>
      <ul>
        <li>Caída de un lado de la cara</li>
        <li>Incapacidad para cerrar el ojo</li>
        <li>Dificultad para hablar o comer</li>
        <li>Sensibilidad al sonido (hiperacusia)</li>
        <li>Pérdida o alteración del gusto</li>
      </ul>
      <p>La buena noticia es que entre el 70 y 85% de los pacientes se recuperan completamente — pero la rapidez y calidad de esa recuperación depende en gran medida de lo que hagan en las primeras semanas.</p>

      <h3>Qué dice el tratamiento convencional</h3>
      <p>El estándar de atención actual incluye corticosteroides (prednisona) iniciados dentro de las primeras 72 horas — esto es fundamental y no debe saltarse. En algunos casos se añaden antivirales. También se recomienda proteger el ojo con lubricante ocular y parche nocturno para prevenir lesiones en la córnea.</p>
      <p>Si aún no has tenido una valoración profesional inicial, hazlo pronto. La intervención en la ventana de las primeras 72 horas marca una diferencia significativa.</p>

      <h3>Por qué la acupuntura complementa el tratamiento</h3>
      <p>La acupuntura no reemplaza la medicación — la complementa. Mientras los corticosteroides reducen la inflamación sistémica, la acupuntura actúa localmente en el nervio y los músculos afectados.</p>
      <p>Los mecanismos son concretos:</p>
      <p><strong>Estimulación de la regeneración nerviosa.</strong> Las agujas aplicadas en puntos específicos del trayecto del nervio facial activan factores neurotróficos que favorecen la recuperación de las fibras nerviosas dañadas.</p>
      <p><strong>Reactivación muscular.</strong> La electroacupuntura — impulsos eléctricos de baja frecuencia aplicados a través de las agujas — estimula directamente los músculos faciales que dejaron de recibir señal, previniendo la atrofia y manteniendo el tejido activo durante la recuperación nerviosa.</p>
      <p><strong>Reducción de la inflamación local.</strong> La acupuntura modula la respuesta inflamatoria en el área de aplicación, reduciendo la presión sobre el nervio en el canal facial.</p>

      <h3>¿Cuándo iniciar la acupuntura?</h3>
      <p>Idealmente dentro de los primeros 7 a 14 días del inicio de los síntomas. En la fase aguda, la frecuencia recomendada es de 2 a 3 sesiones por semana.</p>
      <p>Los casos que inician el tratamiento combinado (medicación + acupuntura) en las primeras dos semanas tienen consistentemente mejores resultados que los que solo reciben tratamiento farmacológico.</p>

      <h3>¿Y si ya pasaron semanas o meses?</h3>
      <p>Los casos crónicos también responden al tratamiento, aunque el proceso es más largo y los resultados pueden ser parciales dependiendo del tiempo transcurrido y del grado de lesión nerviosa. En estos casos, la electroacupuntura es especialmente útil para reactivar fibras musculares que llevan tiempo sin estimulación.</p>

      <h3>¿Cuántas sesiones necesito?</h3>
      <ul>
        <li>Casos agudos (menos de 4 semanas): 10 a 15 sesiones con frecuencia alta.</li>
        <li>Casos subagudos (1 a 3 meses): 15 a 20 sesiones.</li>
        <li>Casos crónicos (más de 3 meses): 20 a 30 sesiones con seguimiento.</li>
      </ul>

      <p><strong>Agenda tu valoración</strong></p>
      <p>Si tú o alguien cercano está en los primeros días de una parálisis facial, contáctanos hoy. Atendemos en Benito Juárez, CDMX, con disponibilidad de urgencia para casos recientes.</p>

      <div class="mt-8">
        <a href="https://wa.me/525552520615?text=Hola,%20me%20gustaría%20agendar%20una%20valoración" class="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg">
          Agenda tu valoración
        </a>
      </div>
    `
  },
  {
    slug: "migraña-acupuntura-tratamiento-cdmx",
    title: "Migraña crónica: cuando los analgésicos ya no alcanzan",
    excerpt: "La migraña crónica afecta la calidad de vida de millones de mexicanos. La acupuntura reduce la frecuencia e intensidad de los episodios sin medicamentos. Clínica en CDMX.",
    date: "2026-05-15",
    category: "Dolor",
    readTime: "5 min",
    content: `
      <p>Si tienes migraña crónica, ya sabes cómo es: te despiertas con el miedo de que hoy sea uno de esos días. Los analgésicos ya no funcionan igual que antes, o los tomas tan seguido que empiezas a preocuparte por el estómago, el hígado, la dependencia.</p>
      <p>Y el neurólogo te dice que hay que "controlar los factores desencadenantes" — el estrés, el sueño, la alimentación — pero nadie te explica exactamente cómo.</p>
      <p>La acupuntura tiene un lugar muy concreto en el tratamiento de la migraña crónica, y no es alternativo ni místico: es neurofisiología aplicada.</p>

      <h3>¿Qué es exactamente la migraña crónica?</h3>
      <p>La Sociedad Internacional de Cefaleas define la migraña crónica como 15 o más días de cefalea al mes durante al menos 3 meses, de los cuales 8 o más tienen características de migraña. Es un continuo de dolor que interfiere con el trabajo, las relaciones y la calidad de vida.</p>
      <p>A diferencia de la migraña episódica, la crónica implica cambios estructurales en el sistema nervioso central — hay sensibilización central, umbral de dolor reducido y en muchos casos un patrón de sobreuso de analgésicos que perpetúa el ciclo.</p>

      <h3>Cómo actúa la acupuntura en la migraña</h3>
      <p>La acupuntura modula el dolor a múltiples niveles del sistema nervioso:</p>
      <p><strong>Nivel periférico.</strong> Las agujas estimulan fibras nerviosas que bloquean la transmisión de señales dolorosas hacia el cerebro — el mecanismo de "compuerta del dolor" descrito por Melzack y Wall en los años 60.</p>
      <p><strong>Nivel central.</strong> La acupuntura activa la liberación de endorfinas, encefalinas y serotonina en el sistema nervioso central. Estos neurotransmisores son los analgésicos naturales más potentes que existe. La serotonina, específicamente, juega un papel central en la fisiopatología de la migraña.</p>
      <p><strong>Nivel autonómico.</strong> Muchas migrañas están relacionadas con disfunción del sistema nervioso autónomo — variabilidad del ritmo cardíaco, tensión muscular crónica, disregulación del sistema trigémino-vascular. La acupuntura regula el tono autonómico, reduciendo la reactividad del sistema nervioso que dispara los episodios.</p>

      <h3>¿Qué dice la evidencia?</h3>
      <p>La Organización Mundial de la Salud (OMS) incluye la migraña en la lista de condiciones para las que la acupuntura tiene evidencia demostrada de eficacia. Múltiples metaanálisis muestran que la acupuntura reduce la frecuencia de la migraña de forma comparable a los medicamentos profilácticos, con menos efectos secundarios.</p>
      <p>Un aspecto especialmente relevante: en pacientes con sobreuso de analgésicos, la acupuntura puede ayudar a romper ese ciclo al ofrecer alivio sin generar el rebote que los AINEs y los triptanes producen con el uso frecuente.</p>

      <h3>¿Cuántas sesiones necesito?</h3>
      <p>Para migraña crónica el protocolo habitual es:</p>
      <ul>
        <li>Fase intensiva: 8 a 12 sesiones en las primeras 6 a 8 semanas</li>
        <li>Fase de mantenimiento: 1 sesión mensual para sostener los resultados</li>
      </ul>
      <p>La mayoría de los pacientes reporta reducción significativa en la frecuencia de los episodios a partir de la tercera o cuarta sesión.</p>

      <h3>Lo que la acupuntura no puede hacer sola</h3>
      <p>La acupuntura es más efectiva como parte de un abordaje integral. Los cambios en el sueño, el manejo del estrés y la identificación de desencadenantes siguen siendo importantes. Lo que la acupuntura aporta es una herramienta que modifica la reactividad del sistema nervioso, haciendo que los desencadenantes tengan menos impacto.</p>
      <p>Si estás bajo tratamiento neurológico, la acupuntura es completamente compatible y puede potenciar los resultados.</p>

      <h3>¿Tienes más de 8 días de migraña al mes?</h3>
      <p>Ese es el umbral donde el tratamiento preventivo tiene más impacto. Agenda tu valoración inicial en mi consultorio en Benito Juárez, CDMX. Evalúo tu caso en detalle y te explico qué esperar del tratamiento.</p>

      <div class="mt-8">
        <a href="https://wa.me/525552520615?text=Hola,%20me%20gustaría%20agendar%20una%20valoración" class="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg">
          Agenda tu valoración
        </a>
      </div>
    `
  }
];
