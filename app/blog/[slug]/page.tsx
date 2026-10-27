import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, BlogPost } from "@/data/blog-data";
import { clinicData } from "@/data/clinic-data";
import { ArrowLeft, Calendar, Clock, Tag, MessageCircle } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import DOMPurify from "isomorphic-dompurify";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = blogPosts.find((p) => p.slug === decodedSlug);

  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.acupunturacdmx.com/blog/${decodedSlug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = blogPosts.find((p) => p.slug === decodedSlug);

  if (!post) {
    notFound();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: clinicData.name,
      url: 'https://www.acupunturacdmx.com'
    },
    publisher: {
      '@type': 'Organization',
      name: clinicData.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.acupunturacdmx.com/logo.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.acupunturacdmx.com/blog/${post.slug}`
    }
  };

  return (
    <article className="pt-24 min-h-screen bg-white">
      <JsonLd schema={schema} />
      {/* Article Hero */}
      <header className="bg-primary-50 py-24 px-4 border-b border-primary-100">
        <div className="container mx-auto max-w-4xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-700 font-bold mb-10 transition-colors"
          >
            <ArrowLeft size={18} />
            Volver al blog
          </Link>
          
          <div className="flex items-center gap-3 mb-6 text-primary-600 font-bold uppercase tracking-widest text-sm text-balance">
            <Tag size={16} />
            {post.category}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-10 font-serif text-balance tracking-tight italic">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 text-brand-text font-medium text-lg">
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-primary-500" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-primary-500" />
              {post.readTime} de lectura
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl py-20 px-4">
        <div 
          className="prose prose-xl prose-primary max-w-none 
          prose-headings:font-serif prose-headings:font-bold prose-headings:text-primary-600
          prose-p:text-brand-text prose-p:leading-relaxed prose-p:font-light
          prose-ul:list-disc prose-ul:pl-6 prose-ul:my-8
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-8
          prose-li:text-brand-text prose-li:font-light prose-li:my-2 prose-li:marker:text-primary-500
          prose-strong:text-primary-700 prose-strong:font-bold
          prose-blockquote:border-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-3xl prose-blockquote:not-italic prose-blockquote:text-primary-600"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
        />
        
        {/* Author Bio / Footer */}
        <div className="mt-24 pt-20 border-t border-primary-100">
          <div className="flex flex-col md:flex-row items-center gap-12 p-12 bg-primary-600 rounded-[3rem] shadow-2xl relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full -mr-32 -mt-32 opacity-20 blur-3xl"></div>
            
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl flex-shrink-0 flex items-center justify-center text-primary-600 shadow-xl relative z-10 p-6">
               <div className="text-4xl md:text-5xl font-serif font-black text-center leading-tight">
                 AC <br/> <span className="text-xl md:text-2xl mt-[-4px] block">CDMX</span>
               </div>
            </div>
            
            <div className="text-center md:text-left relative z-10 flex-grow">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white font-serif italic">¿Listo para transformar tu salud?</h3>
              <p className="text-primary-50 mb-8 max-w-2xl font-light text-xl leading-relaxed">
                 En mi consulta de <span className="font-bold underline decoration-primary-300 underline-offset-4">Acupuntura Humana &amp; Rehabilitación</span>, combino la medicina milenaria con un enfoque científico y clínico riguroso para brindarte una atención personalizada y efectiva en la Ciudad de México.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href={clinicData.whatsapp}
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-xl hover:-translate-y-1"
                >
                  <MessageCircle size={24} />
                  Agendar Consulta por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
