'use client';

import React from 'react';
import Head from 'next/head';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans text-[#1B3A4B] selection:bg-[#2ABFBF]/20">
      <Head>
        <title>Aviso de Privacidad | Acupuntura CDMX</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <nav className="p-8 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-[#2ABFBF] hover:text-[#1B3A4B] transition-colors">
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-8 py-12 pb-32">
        <h1 className="font-serif italic text-[42px] leading-tight mb-12">Aviso de Privacidad</h1>
        
        <div className="space-y-8 text-[15px] leading-[1.8] text-slate-700">
          <section>
            <h2 className="font-black text-[13px] uppercase tracking-widest text-[#1B3A4B] mb-4">1. Identidad y Domicilio del Responsable</h2>
            <p>
              Acupuntura CDMX (en adelante &quot;El Responsable&quot;), con domicilio en la Alcaldía Benito Juárez, Ciudad de México, es responsable del tratamiento de sus datos personales conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>
          </section>

          <section>
            <h2 className="font-black text-[13px] uppercase tracking-widest text-[#1B3A4B] mb-4">2. Datos Personales Recabados</h2>
            <p>
              Para las finalidades señaladas en el presente aviso, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente (vía WhatsApp, formulario web o presencial) y cuando obtenemos información a través de otras fuentes permitidas por la ley. Los datos que recabamos incluyen:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Nombre completo</li>
              <li>Teléfono / WhatsApp</li>
              <li>Correo electrónico</li>
              <li>Información sobre su estado de salud (datos sensibles) para fines de diagnóstico y tratamiento clínico.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-[13px] uppercase tracking-widest text-[#1B3A4B] mb-4">3. Finalidades del Tratamiento</h2>
            <p>
              Sus datos personales serán utilizados para las siguientes finalidades primarias:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Prestación de servicios de acupuntura y medicina tradicional.</li>
              <li>Integración de su expediente clínico.</li>
              <li>Agendamiento y recordatorio de citas.</li>
              <li>Seguimiento de su tratamiento y evolución clínica.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-[13px] uppercase tracking-widest text-[#1B3A4B] mb-4">4. Protección de Datos Sensibles</h2>
            <p>
              Tratándose de datos personales sensibles (estado de salud), El Responsable se compromete a que los mismos serán tratados bajo las más estrictas medidas de seguridad que garanticen su confidencialidad, de conformidad con lo establecido en la Ley.
            </p>
          </section>

          <section>
            <h2 className="font-black text-[13px] uppercase tracking-widest text-[#1B3A4B] mb-4">5. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede enviar una solicitud al correo electrónico: hola@acupunturacdmx.com.
            </p>
          </section>

          <section>
            <h2 className="font-black text-[13px] uppercase tracking-widest text-[#1B3A4B] mb-4">6. Cambios al Aviso de Privacidad</h2>
            <p>
              El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales o de nuestras propias necesidades por los servicios que ofrecemos. Cualquier cambio será comunicado a través de nuestro sitio web: acupunturacdmx.com.
            </p>
          </section>

          <p className="pt-12 text-[12px] text-slate-400 italic">
            Última actualización: Marzo 2026
          </p>
        </div>
      </main>
    </div>
  );
}
