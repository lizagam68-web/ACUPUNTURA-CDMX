import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <SEO 
        title="Política de Privacidad"
        description="Conoce cómo protegemos tus datos personales en Acupuntura CDMX."
        url="https://acupunturacdmx.com/privacidad"
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
        <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-slate">
          <p>Última actualización: {new Date().toLocaleDateString()}</p>
          
          <h3>1. Información que recopilamos</h3>
          <p>En Acupuntura CDMX, respetamos su privacidad. Solo recopilamos la información necesaria para brindarle nuestros servicios, como su nombre y número de contacto cuando decide agendar una cita.</p>

          <h3>2. Uso de la información</h3>
          <p>Utilizamos su información exclusivamente para:</p>
          <ul>
            <li>Gestionar sus citas y consultas.</li>
            <li>Comunicarnos con usted sobre sus tratamientos.</li>
            <li>Mejorar nuestros servicios.</li>
          </ul>

          <h3>3. Protección de datos</h3>
          <p>Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, alteración o divulgación.</p>

          <h3>4. Contacto</h3>
          <p>Si tiene preguntas sobre nuestra política de privacidad, puede contactarnos a través de nuestro número de WhatsApp o teléfono directo.</p>
        </div>
      </main>
    </div>
  );
}
