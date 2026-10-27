import React from "react";
import { clinicData } from "@/data/clinic-data";
import { MessageCircle, Clock, ExternalLink, Facebook, MapPin, Navigation, Smartphone } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PhoneLink } from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Contacto & Ubicación | Liz Gamiño Acupuntura CDMX",
  description: "Agenda tu cita en Av. Insurgentes Sur 1409, Despacho 5, Insurgentes Mixcoac, Benito Juárez, CDMX. Consulta con la Lic. Elizabeth Gamiño (Liz Gamiño).",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/contacto",
  },
};

export default function ContactoPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'MedicalBusiness',
      name: clinicData.name,
      alternateName: clinicData.alternateNames,
      image: 'https://www.acupunturacdmx.com/hero.jpg',
      '@id': 'https://www.acupunturacdmx.com/#organization',
      url: 'https://www.acupunturacdmx.com/contacto',
      telephone: clinicData.phoneFormatted,
      priceRange: '$$',
      hasMap: clinicData.googleMapsUrl,
      sameAs: [
        clinicData.googleMapsUrl,
        clinicData.facebook,
        clinicData.contactCardUrl
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${clinicData.address.streetAddress}, ${clinicData.address.neighborhood}`,
        addressLocality: clinicData.address.addressLocality,
        addressRegion: clinicData.address.addressRegion,
        postalCode: clinicData.address.postalCode,
        addressCountry: clinicData.address.addressCountry
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: clinicData.geo.latitude,
        longitude: clinicData.geo.longitude
      },
      founder: {
        '@type': 'Person',
        name: clinicData.practitioner.name,
        alternateName: [clinicData.practitioner.brandName, clinicData.practitioner.formalName],
        jobTitle: clinicData.practitioner.degree,
        identifier: clinicData.practitioner.license
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '15:00'
        }
      ]
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <JsonLd schema={schema} />
      
      {/* Hero Header */}
      <section className="py-20 px-4 bg-primary-50">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3e685f] block mb-3">
            Acupuntura Humana &amp; Rehabilitación · Benito Juárez, CDMX
          </span>
          <h1 className="text-5xl md:text-7xl font-bold italic font-serif tracking-tight leading-tight text-primary-600 mb-6">
            Contacto &amp; Ubicación
          </h1>
          <p className="text-xl md:text-2xl text-brand-text leading-relaxed max-w-2xl mx-auto font-light">
            Estoy lista para acompañarte en tu proceso de recuperación y bienestar. Te recibo en mi consultorio en Av. Insurgentes Sur 1409, Insurgentes Mixcoac, Benito Juárez, CDMX.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info Cards */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-serif italic text-primary-600 tracking-tight">
                  Información de la Consulta
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* WhatsApp Card */}
                  <WhatsAppButton 
                    className="group p-8 rounded-3xl bg-white border border-primary-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300 text-left w-full h-full"
                    showIcon={false}
                  >
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                      <MessageCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-primary-600 font-serif italic">WhatsApp</h3>
                    <p className="text-brand-text font-light mb-4 text-base">Agendar de forma rápida.</p>
                    <span className="text-primary-500 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                      Iniciar chat <ExternalLink size={18} />
                    </span>
                  </WhatsAppButton>

                  {/* Phone Card */}
                  <PhoneLink phone={clinicData.phone} />

                  {/* Google Maps / Exact Location Card */}
                  <a
                    href={clinicData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 rounded-3xl bg-white border border-primary-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300 text-left w-full h-full sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                  >
                    <div className="flex items-start sm:items-center gap-5">
                      <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-[#b86d36] group-hover:scale-110 transition-transform flex-shrink-0 mt-1 sm:mt-0">
                        <MapPin size={30} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-primary-600 font-serif italic">
                            Consultorio en Insurgentes Sur
                          </h3>
                          <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Ficha Verificada
                          </span>
                        </div>
                        <p className="text-brand-text font-medium text-sm sm:text-base leading-snug">
                          {clinicData.location}
                        </p>
                        <p className="text-xs text-brand-text/70 mt-1 font-light">
                          Cerca de Metro/Metrobús Mixcoac e Insurgentes Sur · A pasos de Río Churubusco y Parque Hundido
                        </p>
                      </div>
                    </div>
                    <span className="text-[#b86d36] font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all flex-shrink-0">
                      <span>Ver en Google Maps</span>
                      <ExternalLink size={18} />
                    </span>
                  </a>

                  {/* Facebook Card */}
                  <a
                    href={clinicData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 rounded-3xl bg-white border border-primary-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-left w-full h-full sm:col-span-2 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1877f2] group-hover:scale-110 transition-transform flex-shrink-0">
                        <Facebook size={30} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-primary-600 font-serif italic">Facebook Oficial</h3>
                        <p className="text-brand-text font-light text-sm sm:text-base">Síguenos, consulta novedades y testimonios.</p>
                      </div>
                    </div>
                    <span className="text-[#1877f2] font-bold hidden sm:flex items-center gap-2 group-hover:gap-3 transition-all flex-shrink-0 ml-4">
                      Visitar página <ExternalLink size={18} />
                    </span>
                  </a>

                  {/* MiKontacto Digital Card */}
                  <a
                    href={clinicData.contactCardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 rounded-3xl bg-gradient-to-br from-amber-50/50 via-white to-primary-50/30 border border-[#b86d36]/20 hover:border-[#b86d36] hover:shadow-xl transition-all duration-300 text-left w-full h-full sm:col-span-2 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-amber-100/70 rounded-2xl flex items-center justify-center text-[#b86d36] group-hover:scale-110 transition-transform flex-shrink-0">
                        <Smartphone size={30} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="text-xl sm:text-2xl font-bold text-primary-600 font-serif italic">Tarjeta Digital de Contacto</h3>
                          <span className="bg-[#b86d36]/15 text-[#b86d36] text-[10px] font-bold px-2 py-0.5 rounded-full">
                            MiKontacto
                          </span>
                        </div>
                        <p className="text-brand-text font-light text-sm sm:text-base">
                          Guarda mi contacto, WhatsApp y ubicación directamente en tu celular con un solo toque.
                        </p>
                        <p className="text-xs text-[#b86d36] font-medium mt-1">
                          mikontacto.com/lizgamino2
                        </p>
                      </div>
                    </div>
                    <span className="text-[#b86d36] font-bold hidden sm:flex items-center gap-2 group-hover:gap-3 transition-all flex-shrink-0 ml-4">
                      Abrir tarjeta <ExternalLink size={18} />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Sidebar */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-white border border-primary-100 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10 text-primary-500 pointer-events-none">
                   <Clock size={160} />
                </div>
                <h3 className="text-3xl font-bold mb-8 text-primary-600 font-serif italic flex items-center gap-3">
                  <Clock size={28} className="text-primary-500" />
                  Horarios de Atención
                </h3>
                <div className="space-y-6">
                  {clinicData.openingHours.map((oh, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-primary-50 pb-4 last:border-0 last:pb-0">
                      <span className="text-lg font-medium text-primary-900/80">
                        {oh.days.length > 1 ? `Lunes a Viernes` : `Sábado`}
                      </span>
                      <span className="text-lg font-serif italic text-primary-600 font-bold">
                        {oh.opens} - {oh.closes}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-brand-text font-light italic text-sm">
                  * Las citas se programan exclusivamente vía mensaje de WhatsApp para brindar atención dedicada y personalizada a cada paciente.
                </p>

                <div className="mt-6 pt-6 border-t border-primary-50">
                  <a
                    href={clinicData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-2xl font-semibold text-sm transition-colors border border-primary-100"
                  >
                    <Navigation size={16} />
                    <span>Cómo llegar en Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 px-4 bg-primary-600 text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <p className="text-3xl md:text-4xl font-serif italic font-bold mb-8 leading-tight">
            &ldquo;Tu salud y bienestar merecen una atención dedicada. Agenda tu consulta de valoración hoy mismo.&rdquo;
          </p>
          <WhatsAppButton 
            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-50 transition-all shadow-2xl active:scale-95"
            showIcon={false}
          >
            <MessageCircle size={28} />
            Agendar por WhatsApp
          </WhatsAppButton>
        </div>
      </section>

    </div>
  );
}
