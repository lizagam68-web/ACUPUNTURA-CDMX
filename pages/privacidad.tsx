import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2D2D2D] selection:bg-[#AFEEEE]">
      <SEO 
        title="Política de Privacidad"
        description="Conoce cómo protegemos tus datos personales en Acupuntura CDMX."
        url="https://acupunturacdmx.com/privacidad"
      />
      
      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#AFEEEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#00CED1] transition-colors font-bold text-sm sm:text-base">
            <ArrowLeft className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <span className="font-semibold text-[#2D2D2D] hidden sm:block">ACUPUNTURA CDMX</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8 text-[#2D2D2D]">Política de Privacidad</h1>
        
        <div className="prose prose-slate max-w-none text-[#4A4A4A]">
          <p className="font-light italic mb-8">Última actualización: {new Date().toLocaleDateString()}</p>
          
          <h3 className="text-[#2D2D2D] font-bold mt-8 mb-4">1. Información que recopilamos</h3>
          <p className="font-light mb-6">En Acupuntura CDMX, respetamos su privacidad. Solo recopilamos la información necesaria para brindarle nuestros servicios, como su nombre y número de contacto cuando decide agendar una cita.</p>

          <h3 className="text-[#2D2D2D] font-bold mt-8 mb-4">2. Uso de la información</h3>
          <p className="font-light mb-4">Utilizamos su información exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-2 font-light mb-6">
            <li>Gestionar sus citas y consultas.</li>
            <li>Comunicarnos con usted sobre sus tratamientos.</li>
            <li>Mejorar nuestros servicios.</li>
          </ul>

          <h3 className="text-[#2D2D2D] font-bold mt-8 mb-4">3. Protección de datos</h3>
          <p className="font-light mb-6">Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, alteración o divulgación.</p>

          <h3 className="text-[#2D2D2D] font-bold mt-8 mb-4">4. Contacto</h3>
          <p className="font-light mb-6">Si tiene preguntas sobre nuestra política de privacidad, puede contactarnos a través de nuestro número de WhatsApp o teléfono directo.</p>
        </div>
      </main>
    </div>
  );
}
