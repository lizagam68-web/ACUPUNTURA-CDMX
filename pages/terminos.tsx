import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <SEO 
        title="Términos de Servicio"
        description="Lee los términos y condiciones de uso de los servicios de Acupuntura CDMX."
        url="https://acupunturacdmx.com/terminos"
      />
      
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <span className="font-semibold text-slate-800 hidden sm:block">ACUPUNTURA CDMX</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Términos de Servicio</h1>
        
        <div className="prose prose-slate">
          <p>Última actualización: {new Date().toLocaleDateString()}</p>
          
          <h3>1. Aceptación de los términos</h3>
          <p>Al acceder y utilizar los servicios de Acupuntura CDMX, usted acepta estar sujeto a estos términos y condiciones.</p>

          <h3>2. Servicios Médicos</h3>
          <p>Nuestros tratamientos de acupuntura y medicina tradicional china son complementarios. No sustituyen el consejo médico profesional, diagnóstico o tratamiento de condiciones médicas graves sin la supervisión adecuada.</p>

          <h3>3. Citas y Cancelaciones</h3>
          <p>Agradecemos avisar con al menos 24 horas de antelación para cancelaciones o cambios de cita, para poder ofrecer el espacio a otros pacientes.</p>

          <h3>4. Modificaciones</h3>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.</p>
        </div>
      </main>
    </div>
  );
}
