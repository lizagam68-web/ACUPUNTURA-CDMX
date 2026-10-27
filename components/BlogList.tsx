"use client";

import React, { useState } from "react";
import { blogPosts, BlogPost } from "@/data/blog-data";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const POSTS_PER_PAGE = 6;

export const BlogList = ({ posts }: { posts: BlogPost[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories dynamically
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  // Filter posts based on search query AND category selection
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const validPage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));

  const startIndex = (validPage - 1) * POSTS_PER_PAGE;
  const endIndex = Math.min(startIndex + POSTS_PER_PAGE, filteredPosts.length);
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("blog-list-container");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  return (
    <div id="blog-list-container" className="space-y-12">
      {/* Search and Filters Bar */}
      <div className="bg-white p-6 rounded-3xl border border-primary-100 shadow-clinical flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400" size={20} />
          <input
            type="text"
            placeholder="Buscar artículos por título o tema..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-12 pr-10 py-3 bg-primary-50/50 border border-primary-100 rounded-2xl shadow-inner-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-primary-950 font-sans text-sm placeholder-primary-400"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-400 hover:text-primary-600 transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto mt-2 md:mt-0 justify-start md:justify-end">
          <button
            onClick={() => handleCategorySelect(null)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === null
                ? "bg-primary-600 text-white shadow-md shadow-primary-600/20 scale-102"
                : "bg-primary-50/40 border border-primary-100/70 text-primary-600 hover:bg-primary-50"
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-md shadow-primary-600/20 scale-102"
                  : "bg-primary-50/40 border border-primary-100/70 text-primary-600 hover:bg-primary-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results summary stats */}
      {filteredPosts.length > 0 && (
        <div className="flex items-center justify-between text-sm text-brand-text px-2 font-light">
          <span>
            Mostrando <strong className="font-semibold text-primary-900">{startIndex + 1}</strong> –{" "}
            <strong className="font-semibold text-primary-900">{endIndex}</strong> de{" "}
            <strong className="font-semibold text-primary-900">{filteredPosts.length}</strong> artículos
          </span>
          {totalPages > 1 && (
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              Página {validPage} de {totalPages}
            </span>
          )}
        </div>
      )}

      {/* Grid of filtered posts */}
      {filteredPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, idx) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden shadow-clinical group hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-sm font-bold text-primary-600 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Tag size={14} />
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary-600 transition-colors leading-tight font-serif italic">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-brand-text mb-8 flex-grow leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-primary-50 mt-auto">
                    <div className="flex items-center gap-4 text-primary-400 text-sm font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Leer más
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-8">
              <button
                onClick={() => handlePageChange(validPage - 1)}
                disabled={validPage === 1}
                className="p-3 rounded-2xl border border-primary-100 bg-white text-primary-700 hover:bg-primary-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm flex items-center gap-1 font-medium text-sm"
                aria-label="Página anterior"
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">Anterior</span>
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center ${
                      validPage === page
                        ? "bg-primary-600 text-white shadow-md shadow-primary-600/20 scale-105"
                        : "bg-white border border-primary-100 text-primary-700 hover:bg-primary-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(validPage + 1)}
                disabled={validPage === totalPages}
                className="p-3 rounded-2xl border border-primary-100 bg-white text-primary-700 hover:bg-primary-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm flex items-center gap-1 font-medium text-sm"
                aria-label="Página siguiente"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-primary-100 rounded-3xl p-16 text-center shadow-clinical max-w-xl mx-auto"
        >
          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="text-primary-400" size={28} />
          </div>
          <h4 className="text-2xl font-bold text-primary-950 mb-2 font-serif italic">No se encontraron artículos</h4>
          <p className="text-brand-text font-light mb-8">
            No encontramos publicaciones que coincidan con tu búsqueda. Intenta con otros términos o limpia los filtros.
          </p>
          <button
            onClick={clearFilters}
            className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-all shadow-md"
          >
            Mostrar todos los artículos
          </button>
        </motion.div>
      )}
    </div>
  );
};
