import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic-data";
import { ShieldCheck, Lock, FileText, Mail, MapPin, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Aviso de Privacidad Integral (LFPDPPP) | Centro de Acupuntura QI CDMX",
  description:
    "Aviso de Privacidad Integral del Centro de Acupuntura QI (Benito Juárez / Coyoacán, CDMX) conforme a la LFPDPPP. Protección de datos personales, datos sensibles de salud y Derechos ARCO.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/aviso-de-privacidad",
  },
  openGraph: {
    title: "Aviso de Privacidad Integral | Centro de Acupuntura QI",
    description:
      "Conoce cómo protegemos tus datos personales y tu información clínica sensible en el Centro de Acupuntura QI, Ciudad de México.",
    url: "https://www.acupunturacdmx.com/aviso-de-privacidad",
    type: "website",
    locale: "es_MX",
  },
};

export default function AvisoDePrivacidadPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#faf8f5] text-[#142329]">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#fdfcf9] via-[#f4efe6] to-[#faf8f5] py-12 sm:py-16 px-4 sm:px-6 border-b border-[#e5dbcb]">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#3e685f] hover:text-[#18313a] transition-colors mb-6"
          >
            <ArrowLeft size={15} />
            <span>Volver al inicio</span>
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b86d36] mb-3">
            Cumplimiento LFPDPPP · Confidencialidad Clínica
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#12242b] leading-tight tracking-tight text-balance mb-4">
            Aviso de Privacidad Integral
          </h1>
          <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed max-w-2xl">
            En el <strong className="text-[#18313a] font-semibold">Centro de Acupuntura QI</strong>{" "}
            protegemos tus datos personales y tu información clínica con estricto apego a la Ley
            Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y a
            la normativa sanitaria vigente en México.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 1. Identidad y Domicilio */}
          <article className="bg-white rounded-3xl border border-[#e5dbcb] p-6 sm:p-8 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#3e685f]">
              <MapPin size={16} />
              <span>1. Identidad y Domicilio del Responsable</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#12242b]">
              Responsable del tratamiento de tus datos
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] leading-relaxed font-light">
              <strong className="text-[#18313a] font-semibold">Centro de Acupuntura QI</strong>{" "}
              (operado bajo la titularidad profesional de{" "}
              <strong className="text-[#18313a] font-semibold">
                {clinicData.practitioner.formalName}
              </strong>
              , {clinicData.practitioner.degree} por la {clinicData.practitioner.university},{" "}
              {clinicData.practitioner.license}, {clinicData.practitioner.advertisingPermit}), es
              responsable del uso, resguardo y protección de sus datos personales, con domicilio para
              oír y recibir notificaciones en:{" "}
              <strong className="text-[#18313a] font-medium">
                Av. Insurgentes Sur 1409, Despacho 5, Colonia Insurgentes Mixcoac, C.P. 03900,
                Alcaldía Benito Juárez (zona Benito Juárez / Coyoacán), Ciudad de México
              </strong>
              .
            </p>
          </article>

          {/* 2. Datos Personales Recabados */}
          <article className="bg-white rounded-3xl border border-[#e5dbcb] p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#b86d36]">
              <FileText size={16} />
              <span>2. Datos Personales y Datos Sensibles de Salud Recabados</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#12242b]">
              ¿Qué datos podemos solicitar?
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] leading-relaxed font-light">
              Para brindarte atención terapéutica individualizada (exclusivamente 1 paciente por
              hora) y dar seguimiento a tus solicitudes de consulta, recabamos:
            </p>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#4a5e66] font-light list-disc pl-5">
              <li>
                <strong className="text-[#18313a] font-semibold">
                  Datos de identificación y contacto:
                </strong>{" "}
                nombre completo, número telefónico / WhatsApp, correo electrónico y, en caso de
                solicitar comprobante fiscal, datos de facturación (RFC, razón social, régimen fiscal
                y código postal).
              </li>
              <li>
                <strong className="text-[#18313a] font-semibold">
                  Datos personales sensibles de salud:
                </strong>{" "}
                información que nos compartes de manera voluntaria a través de los test interactivos
                de triaje en el sitio web (por ejemplo en nuestras secciones de{" "}
                <em>Parálisis Facial</em> y <em>Fertilidad y Ciclo</em>), mensajes de WhatsApp y
                durante la consulta presencial para integrar tu historia clínica, registro de
                síntomas, tiempo de evolución, etapa del ciclo menstrual, tratamientos médicos
                concomitantes y las mediciones bioeléctricas obtenidas mediante el método diagnóstico
                japonés Ryodoraku.
              </li>
            </ul>
          </article>

          {/* 3. Finalidades del Tratamiento */}
          <article className="bg-white rounded-3xl border border-[#e5dbcb] p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#3e685f]">
              <ShieldCheck size={16} />
              <span>3. Finalidades del Tratamiento de Datos</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#12242b]">
              ¿Para qué utilizamos tu información?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              <div>
                <h3 className="font-serif font-bold text-[#18313a] text-base sm:text-lg mb-1.5">
                  Finalidades Primarias (indispensables para el servicio)
                </h3>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>Programación, confirmación y gestión de citas individuales en consultorio.</li>
                  <li>
                    Elaboración de historia clínica, valoración integral con método diagnóstico
                    Ryodoraku y diseño de protocolos personalizados de Acupuntura Humana conforme a
                    la Norma Oficial Mexicana NOM-017-SSA3-2012.
                  </li>
                  <li>Seguimiento evolutivo entre sesiones y control de paquetes contratados.</li>
                  <li>Emisión de recibos o facturación electrónica cuando el paciente lo solicite.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif font-bold text-[#18313a] text-base sm:text-lg mb-1.5">
                  Finalidades Secundarias (opcionales)
                </h3>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    Envío de recordatorios de citas agendadas y orientación general sobre cuidados
                    complementarios posteriores a la sesión.
                  </li>
                  <li>
                    Contacto administrativo de seguimiento cuando el paciente haya iniciado una
                    conversación por WhatsApp o completado un test de triaje.
                  </li>
                </ul>
                <p className="text-xs sm:text-sm text-[#5a6e75] mt-2">
                  Si no deseas que tus datos se utilicen para finalidades secundarias, puedes
                  indicarlo en cualquier momento enviando un correo a{" "}
                  <a
                    href={`mailto:${clinicData.email}`}
                    className="text-[#3e685f] font-medium underline underline-offset-4"
                  >
                    {clinicData.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </article>

          {/* 4. Confidencialidad, Resguardo y Transferencias */}
          <article className="bg-white rounded-3xl border border-[#e5dbcb] p-6 sm:p-8 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#18313a]">
              <Lock size={16} className="text-[#b86d36]" />
              <span>4. Confidencialidad Médica y Medidas de Seguridad</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#12242b]">
              Resguardo estricto y no comercialización de datos
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Tu expediente clínico y las respuestas enviadas en nuestros formularios de triaje están
              sujetos a estricto secreto profesional y confidencialidad. El{" "}
              <strong className="text-[#18313a] font-semibold">Centro de Acupuntura QI</strong>{" "}
              implementa medidas de seguridad administrativas, técnicas y físicas para evitar la
              pérdida, alteración, acceso o divulgación no autorizada de tu información. No
              vendemos, alquilamos ni transferimos tus datos personales o sensibles de salud a
              terceros ajenos al consultorio, salvo requerimiento expreso de autoridad competente o
              obligación legal aplicable en materia sanitaria.
            </p>
          </article>

          {/* 5. Cookies y Etiquetas de Medición */}
          <article className="bg-white rounded-3xl border border-[#e5dbcb] p-6 sm:p-8 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#3e685f]">
              <FileText size={16} />
              <span>5. Uso de Cookies y Tecnologías de Medición</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#12242b]">
              Medición estadística y botones de contacto
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              Este sitio web utiliza cookies técnicas y herramientas de análisis y medición de
              conversiones (como Google Tag Manager y Google Ads) exclusivamente para evaluar el
              rendimiento de nuestras páginas informativas y contabilizar clics agregados en los
              botones de contacto hacia WhatsApp. Estas etiquetas de medición{" "}
              <strong className="text-[#18313a] font-medium">
                no recaban ni almacenan respuestas clínicas sensibles ni tu historia clínica
              </strong>
              . Puedes deshabilitar o eliminar las cookies en cualquier momento desde la
              configuración de tu navegador web.
            </p>
          </article>

          {/* 6. Derechos ARCO */}
          <article className="bg-[#f4efe6] rounded-3xl border border-[#e5dbcb] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#874a21]">
              <Mail size={16} />
              <span>6. Derechos ARCO y Revocación del Consentimiento</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#12242b]">
              ¿Cómo ejercer tus Derechos de Acceso, Rectificación, Cancelación u Oposición?
            </h2>
            <p className="text-sm sm:text-base text-[#4a5e66] font-light leading-relaxed">
              En todo momento tienes derecho a acceder a tus datos personales en nuestro poder,
              rectificarlos en caso de ser inexactos, solicitar su cancelación cuando consideres que
              no se requieren para alguna de las finalidades señaladas u oponerte a su tratamiento
              para fines específicos (Derechos ARCO), así como revocar el consentimiento otorgado.
            </p>
            <div className="bg-white rounded-2xl border border-[#e5dbcb] p-5 space-y-2 text-sm text-[#4a5e66]">
              <p>
                <strong className="text-[#18313a]">Correo electrónico de atención:</strong>{" "}
                <a
                  href={`mailto:${clinicData.email}?subject=Solicitud%20Derechos%20ARCO%20-%20Centro%20de%20Acupuntura%20QI`}
                  className="text-[#3e685f] font-semibold underline underline-offset-4"
                >
                  {clinicData.email}
                </a>
              </p>
              <p>
                <strong className="text-[#18313a]">Atención presencial en consultorio:</strong> Av.
                Insurgentes Sur 1409, Despacho 5, Insurgentes Mixcoac, Benito Juárez, C.P. 03900,
                CDMX (Lunes, Martes, Jueves y Viernes de 9:00 a 18:00 hrs, previa cita).
              </p>
              <p className="text-xs text-[#5a6e75] pt-1">
                Tu solicitud deberá indicar nombre completo, medio para comunicar la respuesta,
                copia de identificación oficial vigente y la descripción clara del derecho ARCO que
                deseas ejercer. Recibirás respuesta en un plazo máximo de 20 días hábiles conforme
                a la LFPDPPP.
              </p>
            </div>
            <p className="text-xs text-[#5a6e75] pt-1">
              Cualquier modificación o actualización al presente Aviso de Privacidad Integral será
              publicada directamente en esta página:{" "}
              <span className="font-medium text-[#18313a]">
                https://www.acupunturacdmx.com/aviso-de-privacidad
              </span>
              . Última actualización: noviembre de 2026.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
