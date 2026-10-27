"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  GraduationCap
} from "lucide-react";

export interface ScientificCitation {
  id: string;
  authors: string;
  year: number;
  title: string;
  journal: string;
  volume: string;
  doiOrPmid: string;
  pubmedUrl: string;
  keyFinding: string;
  clinicalImpact: string;
  category: "Ciclo y Cólicos" | "Fertilidad y FIV" | "Flujo Uterino" | "Climaterio y Menopausia";
  tag: string;
}

export const femaleHealthCitations: ScientificCitation[] = [
  {
    id: "smith-2016-dysmenorrhea",
    authors: "Smith CA, Armour M, Zhu X, Yang GY, Song J.",
    year: 2016,
    title: "Acupuncture or acupressure for primary dysmenorrhoea",
    journal: "Cochrane Database of Systematic Reviews",
    volume: "Issue 4, Art. No.: CD007854",
    doiOrPmid: "PMID: 27087094 · DOI: 10.1002/14651858.CD007854.pub3",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/27087094/",
    keyFinding: "Revisión sistemática Cochrane que evidenció que la acupuntura reduce significativamente la intensidad del dolor menstrual (cólicos y tensión pélvica) comparada con controles y fármacos habituales.",
    clinicalImpact: "Proporciona respaldo científico de primer nivel para tratar la dismenorrea primaria y cólicos severos mediante modulación de prostaglandinas y relajación muscular.",
    category: "Ciclo y Cólicos",
    tag: "Revisión Sistemática Cochrane"
  },
  {
    id: "woo-2018-dysmenorrhea",
    authors: "Woo HL, Ji HR, Pak YK, Lee H, Heo JM, Lee JM, Park KS.",
    year: 2018,
    title: "The efficacy and safety of acupuncture in women with primary dysmenorrhea: A systematic review and meta-analysis",
    journal: "Medicine (Baltimore)",
    volume: "Vol. 97, No. 23, e11007",
    doiOrPmid: "PMID: 29879061 · DOI: 10.1097/MD.0000000000011007",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/29879061/",
    keyFinding: "Metaanálisis de ensayos clínicos que concluyó que la acupuntura reduce eficazmente el dolor en la escala EVA y alivia los síntomas digestivos y lumbares asociados al período menstrual.",
    clinicalImpact: "Demuestra que un ciclo de sesiones previo a la menstruación previene los espasmos uterinos dolorosos y estabiliza el tono neurovegetativo.",
    category: "Ciclo y Cólicos",
    tag: "Metaanálisis Indexado"
  },
  {
    id: "qian-2017-fertility",
    authors: "Qian Y, Xia XR, Zheng H, Huang GY.",
    year: 2017,
    title: "Therapeutic effect of acupuncture on the outcomes of in vitro fertilization: a systematic review and meta-analysis",
    journal: "Archives of Gynecology and Obstetrics",
    volume: "Vol. 295, No. 3, págs. 543-558",
    doiOrPmid: "PMID: 28004245 · DOI: 10.1007/s00404-016-4255-y",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/28004245/",
    keyFinding: "Demostró que la administración de acupuntura programada en ciclos previos y durante la fase de estimulación ovárica incrementa significativamente la tasa de embarazo clínico (RR 1.32).",
    clinicalImpact: "Sustenta la pauta de trabajar en ciclos previos (8 a 12 semanas antes) para acondicionar el microambiente vascular de los ovarios y el endometrio.",
    category: "Fertilidad y FIV",
    tag: "Ensayo Clínico y Metaanálisis"
  },
  {
    id: "stener-victorin-1996",
    authors: "Stener-Victorin E, Waldenström U, Andersson SA, Wikland M.",
    year: 1996,
    title: "Reduction of blood flow impedance in the uterine arteries of infertile women by electro-acupuncture",
    journal: "Human Reproduction (ESHRE)",
    volume: "Vol. 11, No. 6, págs. 1314-1317",
    doiOrPmid: "PMID: 8671478 · DOI: 10.1093/oxfordjournals.humrep.a019379",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/8671478/",
    keyFinding: "Reducción significativa del índice de pulsatilidad (PI) en las arterias uterinas medido por ecografía Doppler tras un ciclo preparatorio de sesiones de acupuntura.",
    clinicalImpact: "Evidencia biológica sobre la inhibición de la hiperactividad simpática, favoreciendo la vasodilatación y la receptividad del lecho endometrial antes de la concepción.",
    category: "Flujo Uterino",
    tag: "Estudio Fisiológico Doppler"
  },
  {
    id: "chiu-2015-menopause",
    authors: "Chiu HY, Pan CH, Shyu YK, Han BC, Tsai PS.",
    year: 2015,
    title: "Effects of acupuncture on menopause-related symptoms and quality of life in women in natural menopause: a meta-analysis of randomized controlled trials",
    journal: "Menopause (The North American Menopause Society - NAMS)",
    volume: "Vol. 22, No. 2, págs. 234-244",
    doiOrPmid: "PMID: 25003620 · DOI: 10.1097/GME.0000000000000260",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/25003620/",
    keyFinding: "Metaanálisis que confirmó que la acupuntura reduce significativamente la frecuencia e intensidad de los sofocos y sudoraciones nocturnas, con mejoras notables en calidad de vida (MENQOL).",
    clinicalImpact: "Valida la acupuntura como alternativa no hormonal de primera línea para los síntomas vasomotores del climaterio sin efectos adversos.",
    category: "Climaterio y Menopausia",
    tag: "NAMS Metaanálisis"
  },
  {
    id: "avis-2016-aim",
    authors: "Avis NE, Coeytaux RR, Isom S, Prevette K, Morgan T.",
    year: 2016,
    title: "Acupuncture in Menopause (AIM) study: a pragmatic, randomized controlled trial",
    journal: "Menopause (The North American Menopause Society - NAMS)",
    volume: "Vol. 23, No. 6, págs. 626-637",
    doiOrPmid: "PMID: 27023860 · DOI: 10.1097/GME.0000000000000597",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/27023860/",
    keyFinding: "Ensayo clínico pragmático en más de 200 mujeres: reducción del 36.7% en la frecuencia de síntomas vasomotores a los 6 meses, con beneficios prolongados en insomnio, fatiga y ansiedad.",
    clinicalImpact: "Comprueba que los beneficios de un ciclo de sesiones regulares se mantienen de forma acumulativa y duradera durante meses tras finalizar el tratamiento.",
    category: "Climaterio y Menopausia",
    tag: "Ensayo Clínico Controlado"
  },
  {
    id: "lund-2019-acom",
    authors: "Lund KS, Siersma V, Brodersen J, Waldorff FB.",
    year: 2019,
    title: "Efficacy of a standardised acupuncture approach for women with bothersome menopausal symptoms: a pragmatic randomised study in primary care (the ACOM study)",
    journal: "BMJ Open",
    volume: "Vol. 9, No. 1, e023637",
    doiOrPmid: "PMID: 30782712 · DOI: 10.1136/bmjopen-2018-023637",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/30782712/",
    keyFinding: "El estudio ACOM evidenció una reducción rápida y clínicamente relevante en sofocos, sudoración nocturna, insomnio y labilidad emocional a partir de las primeras semanas.",
    clinicalImpact: "Respaldo en atención primaria europea sobre la rapidez y seguridad de la acupuntura para restablecer la estabilidad física y anímica de la mujer.",
    category: "Climaterio y Menopausia",
    tag: "BMJ Open"
  },
  {
    id: "dodin-2013-cochrane",
    authors: "Dodin S, Blanchet C, Marc I, Ernst E, Fønhus MS, Vandal S, Vergnes MC.",
    year: 2013,
    title: "Acupuncture for menopausal hot flushes",
    journal: "Cochrane Database of Systematic Reviews",
    volume: "Issue 7, Art. No.: CD007410",
    doiOrPmid: "PMID: 23897451 · DOI: 10.1002/14651858.CD007410.pub2",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/23897451/",
    keyFinding: "Revisión sistemática Cochrane que confirmó que la acupuntura es significativamente superior a la ausencia de tratamiento para mitigar la frecuencia y gravedad de los sofocos en el climaterio.",
    clinicalImpact: "El máximo estándar de síntesis de evidencia científica respalda la utilidad clínica de la acupuntura frente al manejo pasivo o expectante de los síntomas vasomotores.",
    category: "Climaterio y Menopausia",
    tag: "Revisión Sistemática Cochrane"
  }
];

export const EvidenciaCientificaFemenina: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todas las Evidencias", count: femaleHealthCitations.length },
    { id: "Ciclo y Cólicos", label: "Ciclo y Cólicos (Cochrane)" },
    { id: "Fertilidad y FIV", label: "Fertilidad y FIV" },
    { id: "Flujo Uterino", label: "Flujo Uterino Doppler" },
    { id: "Climaterio y Menopausia", label: "Climaterio y Menopausia (NAMS)" }
  ];

  const filteredCitations = femaleHealthCitations.filter(
    (c) => selectedCategory === "all" || c.category === selectedCategory
  );

  return (
    <section 
      id="evidencia-cientifica-femenina" 
      className="py-16 scroll-mt-24 bg-gradient-to-b from-white via-primary-50/50 to-white"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Encabezado Principal de la Sección de Evidencia */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/80 border border-primary-200 text-xs font-semibold text-primary-800 tracking-widest uppercase">
            <BookOpen size={15} className="text-accent-600" />
            <span>Acupuntura Basada en Evidencia</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Literatura Indexada en PubMed</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-950 tracking-tight italic">
            Artículos Científicos de Salud Femenina
          </h2>

          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full" />

          <p className="text-base md:text-lg text-brand-text font-light leading-relaxed">
            Ensayos clínicos controlados aleatorizados, revisiones sistemáticas Cochrane y metaanálisis en ginecología, fertilidad y salud reproductiva que respaldan el uso de la acupuntura clínica.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-primary-700">
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap size={14} className="text-accent-600" />
              Estudios con rigor metodológico internacional
            </span>
            <span className="opacity-30">•</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-accent-600" />
              Enlaces directos verificables a PubMed / NCBI
            </span>
          </div>
        </div>

        {/* Filtros de Categoría */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-primary-100/70 rounded-2xl border border-primary-200/70 gap-1.5 text-xs font-medium">
            {categories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  type="button"
                  className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white text-primary-950 font-bold shadow-sm border border-primary-200 scale-[1.02]"
                      : "text-primary-700 hover:text-primary-950 hover:bg-white/50"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Artículos Científicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCitations.map((citation) => (
            <article
              key={citation.id}
              className="bg-white p-6 md:p-8 rounded-3xl border border-primary-150 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-[11px] font-semibold tracking-wide">
                      {citation.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-accent-50 text-accent-700 text-[11px] font-medium border border-accent-200/60">
                      {citation.tag}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-accent-600 bg-accent-50 px-2.5 py-1 rounded-md border border-accent-100">
                    Año {citation.year}
                  </span>
                </div>

                <div className="text-xs text-primary-900 font-medium">
                  <span className="italic font-serif">{citation.journal}</span>
                  <span className="mx-1.5 opacity-40">·</span>
                  <span className="text-brand-text/70">{citation.volume}</span>
                  <span className="mx-1.5 opacity-40" aria-hidden="true">·</span>
                  <span className="text-brand-text/70">{citation.doiOrPmid}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-950 italic leading-snug group-hover:text-primary-800 transition-colors">
                  {citation.title}
                </h3>

                <p className="text-xs text-brand-text font-light">
                  <strong className="text-primary-900">Autores:</strong> {citation.authors}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-primary-100">
                <div className="bg-primary-50/70 p-4 rounded-2xl border border-primary-150/70">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary-900 mb-1.5">
                    <CheckCircle2 size={15} className="text-accent-600" />
                    <span>Hallazgo Clínico:</span>
                  </div>
                  <p className="text-xs text-brand-text leading-relaxed font-light">
                    {citation.keyFinding}
                  </p>
                </div>

                <div className="bg-primary-50/40 p-4 rounded-2xl border border-primary-150/50">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary-900 mb-1.5">
                    <ShieldCheck size={15} className="text-primary-700" />
                    <span>Aplicación en Consulta:</span>
                  </div>
                  <p className="text-xs text-brand-text leading-relaxed font-light">
                    {citation.clinicalImpact}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={citation.pubmedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary-50 hover:bg-primary-100 text-primary-800 hover:text-primary-950 font-semibold text-xs border border-primary-200 transition-all active:scale-95 shadow-2xs"
                >
                  <FileText size={14} className="text-accent-500" />
                  <span>Ver Artículo en PubMed</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
