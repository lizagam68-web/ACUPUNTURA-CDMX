import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, BookOpen, MessageCircle, ChevronLeft, ChevronRight, Search, X, Menu, Filter } from 'lucide-react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2D2D2D]">
      <SEO 
        title="Blog de Salud y Bienestar | Acupuntura Benito Juárez CDMX"
        description="Explora nuestro blog de salud y bienestar en la Alcaldía Benito Juárez. Artículos expertos sobre acupuntura y consejos naturales para una vida equilibrada en CDMX."
        keywords={['blog acupuntura benito juarez', 'consejos salud natural', 'medicina china artículos', 'bienestar integral méxico', 'guías acupuntura cdmx']}
        url="https://acupunturacdmx.com/blog"
      />

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-[#AFEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[#00CED1] rounded-full flex items-center justify-center group-hover:bg-[#008B8B] transition-colors shadow-sm">
                <ChevronLeft className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-[#2D2D2D] tracking-tight group-hover:text-[#00CED1] transition-colors text-sm sm:text-base">Volver al Inicio</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#00CED1] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-semibold text-[#2D2D2D] tracking-wide hidden sm:block">Acupuntura CDMX</span>
              </div>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2 text-[#2D2D2D] hover:text-[#00CED1] transition-colors"
                aria-label="Abrir menú de filtros"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl md:hidden flex flex-col"
            >
              <div className="p-6 border-b border-[#AFEEEE]/30 flex items-center justify-between bg-[#FAF9F6]">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-[#00CED1]" />
                  <h2 className="font-bold text-[#2D2D2D] uppercase tracking-widest text-sm">Filtros y Búsqueda</h2>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-[#4A4A4A] hover:text-[#00CED1] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-10">
                {/* Main Site Navigation in Blog */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-[#A0A0A0] uppercase tracking-[0.2em] mb-4">Navegación</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <Link href="/" className="text-2xl font-bold text-[#2D2D2D] hover:text-[#00CED1] transition-colors">Inicio</Link>
                    <Link href="/#padecimientos" className="text-2xl font-bold text-[#2D2D2D] hover:text-[#00CED1] transition-colors">Servicios</Link>
                    <Link href="/#beneficios" className="text-2xl font-bold text-[#2D2D2D] hover:text-[#00CED1] transition-colors">Filosofía</Link>
                  </div>
                </div>

                {/* Search in Mobile Menu */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-[#A0A0A0] uppercase tracking-[0.2em]">Buscar</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00CED1] w-5 h-5" />
                    <input 
                      type="text"
                      placeholder="¿Qué estás buscando?"
                      value={searchTerm}
                      onChange={(e) => updateFilters(e.target.value, selectedCategory)}
                      className="w-full bg-[#FAF9F6] border border-[#AFEEEE]/50 rounded-xl py-4 pl-10 pr-4 text-[#2D2D2D] placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#00CED1]/30 transition-all text-lg"
                    />
                    {searchTerm && (
                      <button 
                        onClick={() => updateFilters('', selectedCategory)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0A0A0] hover:text-[#00CED1]"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Categories in Mobile Menu */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-[#A0A0A0] uppercase tracking-[0.2em]">Categorías</h3>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        updateFilters(searchTerm, null);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-5 py-4 rounded-2xl text-lg font-bold transition-all ${
                        selectedCategory === null 
                          ? 'bg-[#00CED1] text-white shadow-xl shadow-[#00CED1]/20' 
                          : 'bg-[#FAF9F6] text-[#4A4A4A] hover:bg-[#E0FFFF]'
                      }`}
                    >
                      Todas las categorías
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => {
                          updateFilters(searchTerm, cat);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full text-left px-5 py-4 rounded-2xl text-lg font-bold transition-all ${
                          selectedCategory === cat 
                            ? 'bg-[#00CED1] text-white shadow-xl shadow-[#00CED1]/20' 
                            : 'bg-[#FAF9F6] text-[#4A4A4A] hover:bg-[#E0FFFF]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-[#AFEEEE]/30 bg-[#FAF9F6]">
                <button 
                  onClick={() => {
                    updateFilters('', null);
                    setIsMenuOpen(false);
                  }}
                  className="w-full py-3 border border-[#00CED1] text-[#00CED1] rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#00CED1] hover:text-white transition-all"
                >
                  Limpiar Filtros
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Blog Header */}
      <header className="bg-[#00CED1] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-[#E0FFFF] text-[#008B8B] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Blog de Salud
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bienestar y Equilibrio</h1>
            <p className="text-[#F0FFFF] text-lg max-w-2xl mx-auto mb-8 font-light">
              Explora nuestros artículos sobre medicina tradicional china, consejos de salud y guías para mejorar tu calidad de vida de forma natural en CDMX.
            </p>

            {/* Search and Filter Section - Desktop Only */}
            <div className="hidden md:block max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#E0FFFF] w-5 h-5" />
                  <input 
                    type="text"
                    placeholder="Buscar artículos..."
                    value={searchTerm}
                    onChange={(e) => updateFilters(e.target.value, selectedCategory)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-10 pr-4 text-white placeholder-[#E0FFFF] focus:outline-none focus:ring-2 focus:ring-[#AFEEEE] transition-all"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => updateFilters('', selectedCategory)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E0FFFF] hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                  <button
                    onClick={() => updateFilters(searchTerm, null)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                      selectedCategory === null 
                        ? 'bg-white text-[#008B8B] shadow-md' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Todos
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => updateFilters(searchTerm, cat)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                        selectedCategory === cat 
                          ? 'bg-white text-[#008B8B] shadow-md' 
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Filter Trigger - Visible only on mobile header */}
            <div className="md:hidden mt-8">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-[#008B8B] px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <Filter className="w-5 h-5" />
                Filtrar y Buscar
              </button>
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
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#AFEEEE]/30 flex flex-col h-full hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-[#2D2D2D]/0 group-hover:bg-[#2D2D2D]/5 transition-colors duration-500 z-10" />
                    <Image 
                      src={post.image} 
                      alt={post.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#008B8B] shadow-sm tracking-wide uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col relative">
                    <div className="flex items-center gap-3 text-[#A0A0A0] text-xs font-bold mb-4 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#00CED1]" />
                        {post.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4 group-hover:text-[#00CED1] transition-colors duration-300 leading-snug tracking-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8 flex-1 line-clamp-3 font-light">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-[#AFEEEE]/30 flex items-center justify-between">
                      <span className="inline-flex items-center text-[#2D2D2D] font-bold text-base group-hover:text-[#008B8B] transition-colors">
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
              <div className="bg-[#E0FFFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#00CED1]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">No se encontraron artículos</h3>
              <p className="text-[#4A4A4A] font-light">Intenta con otros términos de búsqueda o cambia la categoría.</p>
              <button 
                onClick={() => updateFilters('', null)}
                className="mt-6 text-[#00CED1] font-bold hover:text-[#008B8B] uppercase tracking-widest text-sm"
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
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  currentPage === 1
                    ? 'bg-[#F0FFFF] text-[#A0A0A0] cursor-not-allowed'
                    : 'bg-white text-[#4A4A4A] hover:bg-[#E0FFFF] hover:text-[#00CED1] shadow-sm hover:shadow-md border border-[#AFEEEE]/30'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Anterior
              </button>
              
              <span className="text-[#4A4A4A] font-bold text-sm uppercase tracking-widest">
                Página {currentPage} de {totalPages}
              </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  currentPage === totalPages
                    ? 'bg-[#F0FFFF] text-[#A0A0A0] cursor-not-allowed'
                    : 'bg-white text-[#4A4A4A] hover:bg-[#E0FFFF] hover:text-[#00CED1] shadow-sm hover:shadow-md border border-[#AFEEEE]/30'
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
      <footer className="bg-[#FAF9F6] text-[#4A4A4A] py-16 border-t border-[#AFEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 bg-white border border-[#00CED1]/20 rounded-full flex items-center justify-center shadow-sm overflow-hidden p-1 relative">
              <Image 
                src="/images/logo.svg" 
                alt="Acupuntura CDMX Logo" 
                fill
                className="object-contain p-1"
              />
            </div>
          </div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#A0A0A0]">© {new Date().getFullYear()} Acupuntura CDMX. Todos los derechos reservados.</p>
          <Link href="/" className="text-[#00CED1] hover:text-[#008B8B] transition-colors text-xs font-bold uppercase tracking-widest">Volver a la página principal</Link>
        </div>
      </footer>
    </div>
  );
}
