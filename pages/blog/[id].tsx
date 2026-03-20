import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { ArrowLeft, Calendar, Tag, Share2, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { posts, Post } from '@/data/posts';
import SEO from '@/components/SEO';
import Head from 'next/head';

interface BlogPostProps {
  post: Post;
  relatedPosts: Post[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const router = useRouter();
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola,%20leí%20su%20artículo%20sobre%20${post?.title}%20y%20quiero%20agendar%20cita`;

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
        "url": "https://acupunturacdmx.com/logo.png"
      }
    },
    "datePublished": post.dateISO,
    "dateModified": post.dateISO,
    "description": post.metaDescription || post.excerpt,
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
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

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Volver al Blog
          </Link>
          <span className="font-semibold text-slate-800 hidden sm:block">ACUPUNTURA CDMX</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Tag className="w-4 h-4" />
            {post.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
          </div>
        </header>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-12 aspect-video relative">
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
          className="prose prose-lg prose-slate mx-auto prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-img:rounded-xl prose-li:text-slate-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.references && post.references.length > 0 && (
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5 text-teal-600" />
              Respaldo Científico
            </h3>
            <ul className="space-y-4">
              {post.references.map((ref, index) => (
                <li key={index} className="text-sm text-slate-600">
                  <p className="font-medium text-slate-800 mb-1">{ref.title}</p>
                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 break-all font-mono text-xs"
                  >
                    DOI: {ref.doi}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-slate-900 mb-2">¿Te identificas con este artículo?</h3>
            <p className="text-slate-600 text-sm">Agenda una valoración para tratar tu caso específico.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
            >
              <Share2 className="w-5 h-5" />
              Compartir
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Cita
            </a>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 py-16 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Artículos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-slate-100"
                >
                  <div className="h-48 overflow-hidden relative">
                    <Image 
                      src={relatedPost.image} 
                      alt={relatedPost.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-teal-600 mb-2 uppercase tracking-wider">{relatedPost.category}</div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                    <span className="text-teal-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer más <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-slate-50 py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Acupuntura CDMX. Todos los derechos reservados.</p>
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
