'use client';

import React from 'react';

const posts = [
  { title: "Dermatitis: La conexión piel-nervios", tag: "PNIE", desc: "Cómo la acupuntura reduce la inflamación neurogénica." },
  { title: "Lecciones de Julio Rodríguez", tag: "Inflamación", desc: "Simplicidad y efectividad en el tratamiento cutáneo." },
  { title: "Eje HPA: El mapa del estrés", tag: "Neurofisiología", desc: "Regulación de cortisol para el ejecutivo moderno." },
  { title: "Autoinmunidad con Héctor Altaba", tag: "Inmunidad", desc: "Acupuntura como soporte en procesos complejos." }
];

export const BlogGrid = () => (
  <section className="py-20 px-[8%] bg-white">
    <div className="max-w-7xl mx-auto">
      <h3 className="font-serif italic text-3xl mb-12 text-[#1B3A4B]">Biblioteca de Especialidad</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-2xl hover:border-[#2ABFBF] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
            <span className="text-[#2ABFBF] text-[10px] font-bold uppercase tracking-widest">{post.tag}</span>
            <h4 className="font-bold text-lg mt-3 group-hover:text-[#2ABFBF] transition-colors text-[#1B3A4B]">{post.title}</h4>
            <p className="text-sm text-[#6E8491] mt-4 leading-snug">{post.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
