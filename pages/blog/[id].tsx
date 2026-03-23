import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { ArrowLeft, Calendar, Tag, Share2, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { posts, Post } from '@/data/posts';
import SEO from '@/components/SEO';
import Head from 'next/head';
import BotonWhatsappClinico from '@/components/BotonWhatsappClinico';

interface BlogPostProps {
  post: Post;
  relatedPosts: Post[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://acupunturacdmx.com/blog/${post.id}`
    },
    "headline": post.title,
    "image": [post.image],
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://acupunturacdmx.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Acupuntura CDMX",
      "logo": {
        "@type": "ImageObject",
        "url": "https://acupunturacdmx.com/images/acupuntura-cdmx-logo-clinico.png"
      }
    },
    "datePublished": post.dateISO,
    "dateModified": post.dateISO,
    "description": post.metaDescription || post.excerpt,
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2D2D2D] selection:bg-[#AFEEEE] selection:text-[#008B8B]">
      <SEO 
        title={post.title}
        description={post.metaDescription || post.excerpt}
        keywords={post.keywords?.join(', ')}
        image={post.image}
        url={`https://acupunturacdmx.com/blog/${post.id}`}
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
        />
      </Head>

      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#AFEEEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#00CED1] transition-colors font-bold text-sm sm:text-base">
            <ArrowLeft className="w-5 h-5" />
            Volver al Blog
          </Link>
          <span className="font-semibold text-[#2D2D2D] hidden sm:block">ACUPUNTURA CDMX</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E0FFFF] text-[#008B8B] px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Tag className="w-4 h-4" />
            {post.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
          </div>
        </header>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-12 aspect-video relative border border-[#AFEEEE]/30">
          <Image 
            src={post.image} 
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div 
          className="prose prose-lg mx-auto prose-headings:text-[#2D2D2D] prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-[#00CED1] hover:prose-a:text-[#008B8B] prose-img:rounded-xl prose-li:text-slate-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.references && post.references.length > 0 && (
          <div className="mt-12 p-6 bg-white rounded-2xl border border-[#AFEEEE]/30">
            <h3 className="text-lg font-bold text-[#2D2D2D] mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5 text-[#00CED1]" />
              Respaldo Científico
            </h3>
            <ul className="space-y-4">
              {post.references.map((ref, index) => (
                <li key={index} className="text-sm text-[#4A4A4A]">
                  <p className="font-medium text-[#2D2D2D] mb-1">{ref.title}</p>
                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00CED1] hover:text-[#008B8B] break-all font-mono text-xs"
                  >
                    DOI: {ref.doi}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-[#AFEEEE]/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-[#2D2D2D] mb-2">¿Te identificas con este artículo?</h3>
            <p className="text-slate-600 text-sm">Agenda una valoración para tratar tu caso específico.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#AFEEEE]/30 hover:bg-[#F0FFFF] text-[#4A4A4A] px-6 py-3 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
            >
              <Share2 className="w-5 h-5" />
              Compartir
            </button>
            <BotonWhatsappClinico 
              label="Agendar Cita" 
              message={`Hola, leí su artículo sobre ${post?.title} y quiero agendar cita`}
              className="px-6 py-3 text-sm sm:text-base"
            />
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#E0FFFF]/30 py-16 border-t border-[#AFEEEE]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8 text-center">Artículos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-[#AFEEEE]/30"
                >
                  <div className="h-48 overflow-hidden relative">
                    <Image 
                      src={relatedPost.image} 
                      alt={relatedPost.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-[#00CED1] mb-2 uppercase tracking-wider">{relatedPost.category}</div>
                    <h3 className="font-bold text-[#2D2D2D] mb-2 group-hover:text-[#00CED1] transition-colors line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                    <span className="text-[#00CED1] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer más <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-[#FAF9F6] py-16 mt-12 border-t border-[#AFEEEE]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 bg-white border border-[#00CED1]/20 rounded-full flex items-center justify-center shadow-sm overflow-hidden p-1 relative">
              <Image 
                src="/images/logo.svg" 
                alt="Acupuntura CDMX Logo" 
                fill
                className="object-contain p-1"
              />
            </div>
          </div>
          <p className="text-slate-500 text-sm tracking-widest uppercase text-[10px]">© {new Date().getFullYear()} Acupuntura CDMX. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find((p) => p.id === params?.id);
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
  };
};
