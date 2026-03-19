import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, BookOpen, MessageCircle, ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { posts } from '@/data/posts';
import SEO from '@/components/SEO';

const ITEMS_PER_PAGE = 6;

export default function Blog() {
  const router = useRouter();
  const { page, q, cat } = router.query;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525552520615";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola,%20leí%20su%20blog%20y%20quiero%20agendar%20cita`;

  // Sync state with URL on mount
  useEffect(() => {
    if (q) setSearchTerm(q as string);
    if (cat) setSelectedCategory(cat as string);
  }, [q, cat]);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(posts.map(p => p.category));
    return Array.from(cats).sort();
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const currentPage = parseInt((page as string) || '1', 10);
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      router.push({
        pathname: '/blog',
        query: { ...router.query, page: newPage.toString() },
      }, undefined, { shallow: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const updateFilters = (newSearch: string, newCat: string | null) => {
    setSearchTerm(newSearch);
    setSelectedCategory(newCat);
    router.push({
      pathname: '/blog',
      query: { 
        page: '1',
        ...(newSearch ? { q: newSearch } : {}),
        ...(newCat ? { cat: newCat } : {}),
      },
    }, undefined, { shallow: true });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SEO 
        title="Blog de Salud y Bienestar | Acupuntura Benito Juárez CDMX"
        description="Explora nuestro blog de salud y bienestar en la Alcaldía Benito Juárez. Artículos expertos sobre acupuntura y consejos naturales para una vida equilibrada en CDMX."
        keywords="blog acupuntura benito juarez, consejos salud natural, medicina china artículos, bienestar integral méxico, guías acupuntura cdmx"
        url="https://acupunturacdmx.com/blog"
      />

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                <ChevronLeft className="text-white w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-800 tracking-wide group-hover:text-teal-600 transition-colors">Volver al Inicio</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-slate-800 tracking-wide hidden sm:block">ACUPUNTURA CDMX</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <header className="bg-teal-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-teal-500 text-teal-50 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-4 inline-block">
              Blog de Salud
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bienestar y Equilibrio</h1>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-8">
              Explora nuestros artículos sobre medicina tradicional china, consejos de salud y guías para mejorar tu calidad de vida de forma natural.
            </p>

            {/* Search and Filter Section */}
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-100 w-5 h-5" />
                  <input 
                    type="text"
                    placeholder="Buscar artículos..."
                    value={searchTerm}
                    onChange={(e) => updateFilters(e.target.value, selectedCategory)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-10 pr-4 text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => updateFilters('', selectedCategory)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-100 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                  <button
                    onClick={() => updateFilters(searchTerm, null)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === null 
                        ? 'bg-white text-teal-700 shadow-md' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Todos
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => updateFilters(searchTerm, cat)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                        selectedCategory === cat 
                          ? 'bg-white text-teal-700 shadow-md' 
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 z-10" />
                    <Image 
                      src={post.image} 
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-teal-700 shadow-sm tracking-wide uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col relative">
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-medium mb-4 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors duration-300 leading-snug tracking-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center text-slate-900 font-bold text-base group-hover:text-teal-600 transition-colors">
                        Leer artículo
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No se encontraron artículos</h3>
              <p className="text-slate-600">Intenta con otros términos de búsqueda o cambia la categoría.</p>
              <button 
                onClick={() => updateFilters('', null)}
                className="mt-6 text-teal-600 font-semibold hover:text-teal-700"
              >
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  currentPage === 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm hover:shadow-md border border-slate-200'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Anterior
              </button>
              
              <span className="text-slate-600 font-medium">
                Página {currentPage} de {totalPages}
              </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  currentPage === totalPages
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm hover:shadow-md border border-slate-200'
                }`}
              >
                Siguiente
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Acupuntura CDMX. Todos los derechos reservados.</p>
          <Link href="/" className="text-teal-400 hover:text-teal-300 transition-colors">Volver a la página principal</Link>
        </div>
      </footer>
    </div>
  );
}
