import React from "react";
import { Metadata } from "next";
import { blogPosts } from "@/data/blog-data";
import { clinicData } from "@/data/clinic-data";
import { BlogList } from "@/components/BlogList";
import { JsonLd } from "@/components/JsonLd";
import { EvidenciaCientificaFemenina } from "@/components/EvidenciaCientificaFemenina";

export const metadata: Metadata = {
  title: "Blog de Salud Integrativa | Acupuntura Clínica CDMX",
  description: "Artículos científicos y consejos sobre acupuntura clínica, bienestar femenino, parálisis facial y manejo del dolor en la Ciudad de México.",
  alternates: {
    canonical: "https://www.acupunturacdmx.com/blog",
  },
};

export default function BlogIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de Salud Integrativa',
    description: 'Artículos científicos y consejos sobre acupuntura clínica, bienestar femenino, parálisis facial y manejo del dolor en la Ciudad de México.',
    url: 'https://www.acupunturacdmx.com/blog',
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://www.acupunturacdmx.com/blog/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt
    }))
  };

  return (
    <div className="pt-24 min-h-screen bg-primary-50">
      <JsonLd schema={schema} />
      {/* Header */}
      <section className="bg-primary-600 py-24 px-4 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif italic tracking-tight">
            Blog de Salud Integrativa
          </h1>
          <p className="text-xl md:text-2xl text-primary-100/90 max-w-2xl mx-auto font-light">
            Artículos científicos y consejos prácticos sobre acupuntura clínica y bienestar.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <BlogList posts={blogPosts} />
        </div>
      </section>

      {/* Evidencia Científica y Literatura Indexada en PubMed */}
      <EvidenciaCientificaFemenina />

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl bg-white p-12 rounded-[3rem] shadow-clinical text-center border border-primary-100">
           <h3 className="text-3xl font-bold mb-6 font-serif italic text-primary-600">¿Buscas atención personalizada?</h3>
           <p className="text-xl text-brand-text mb-10 font-light">
             Estoy lista para resolver tus dudas, evaluar tu motivo de consulta y diseñar tu tratamiento de forma personalizada.
           </p>
           <a 
              href={clinicData.whatsapp}
              className="bg-primary-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg inline-block"
           >
             Contactar por WhatsApp
           </a>
        </div>
      </section>
    </div>
  );
}
