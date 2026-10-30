import React from 'react';
import { TargetCountry } from '../types';

interface HeroProps {
  selectedCountry: TargetCountry | 'Tous';
  setSelectedCountry: (country: TargetCountry | 'Tous') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onStartSimulation: () => void;
  totalJobsCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  selectedCountry,
  setSelectedCountry,
  searchQuery,
  setSearchQuery,
  onStartSimulation,
  totalJobsCount
}) => {
  const destinations: {
    name: TargetCountry;
    flag: string;
    image: string;
    tagline: string;
    pathway: string;
  }[] = [
    {
      name: 'Canada',
      flag: '🇨🇦',
      image: '/src/assets/images/dest_canada_1793277940769.jpg',
      tagline: 'Montréal · Toronto · Québec',
      pathway: 'Mobilité Francophone & Entrée Express'
    },
    {
      name: 'Suisse',
      flag: '🇨🇭',
      image: '/src/assets/images/dest_switzerland_1793277941474.jpg',
      tagline: 'Genève · Zurich · Lausanne',
      pathway: 'Permis B Haute Qualification'
    },
    {
      name: 'Nouvelle-Zélande',
      flag: '🇳🇿',
      image: '/src/assets/images/dest_newzealand_1793277944751.jpg',
      tagline: 'Auckland · Wellington · Christchurch',
      pathway: 'Accredited Employer (Green List)'
    },
    {
      name: 'France',
      flag: '🇫🇷',
      image: '/src/assets/images/dest_europe_1793277958605.jpg',
      tagline: 'Paris · Lyon · Nantes · Toulouse',
      pathway: 'Passeport Talent 4 ans'
    },
    {
      name: 'Irlande',
      flag: '🇮🇪',
      image: '/src/assets/images/dest_europe_1793277958605.jpg',
      tagline: 'Dublin · Cork · Galway',
      pathway: 'Critical Skills Employment Permit'
    }
  ];

  return (
    <div className="bg-white border-b border-slate-200 pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Human unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wide uppercase mb-3">
              <span>Mobilité Professionnelle Internationale</span>
              <span aria-hidden="true">·</span>
              <span>Afrique ⇄ Monde</span>
              <span aria-hidden="true">·</span>
              <span>Visas Vérifiés</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5 text-balance">
              Connecter les talents d’Afrique aux entreprises qui recrutent à l’étranger
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
              Postulez à des offres d’emploi qualifiées au Canada, en Suisse, en Nouvelle-Zélande, en France et en Irlande. Toutes les opportunités incluent un parrainage de visa officiel et un accompagnement complet à la relocalisation.
            </p>

            {/* Quick Search Bar */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 sm:p-2.5 max-w-xl mb-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Métier, compétence (ex: DevOps, Infirmier, BTP)..."
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button
                  onClick={onStartSimulation}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
                >
                  Tester mon éligibilité visa
                </button>
              </div>
            </div>

            {/* Quantitative evidence adjacent */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs text-slate-500 pt-2">
              <div>
                <span className="font-bold text-slate-900 text-sm tabular-nums">{totalJobsCount}</span> offres actives
              </div>
              <span aria-hidden="true">·</span>
              <div>
                <span className="font-bold text-slate-900 text-sm">100%</span> parrainage garanti
              </div>
              <span aria-hidden="true">·</span>
              <div>
                <span className="font-bold text-slate-900 text-sm">0 CFA</span> frais d’inscription
              </div>
            </div>
          </div>

          {/* Hero Visual Asset */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 min-h-[300px] bg-slate-100 flex items-center justify-center">
            <img
              src="/src/assets/images/hero_international_career_1793277940519.jpg"
              alt="Talents africains en mobilité professionnelle internationale"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Graceful fallback container if needed
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            {/* Subtle Gradient overlay with clean badge info */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-5 text-white">
              <div className="text-xs font-semibold text-blue-200 mb-1">Programme International</div>
              <p className="text-sm font-medium leading-snug">
                Accompagnement administratif, billets d’avion et assistance consulaire pris en charge par les employeurs partenaires.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Target Countries Showcase Strip */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              Explorer par pays de destination
            </h2>
            {selectedCountry !== 'Tous' && (
              <button
                onClick={() => setSelectedCountry('Tous')}
                className="text-xs font-medium text-blue-700 hover:text-blue-900"
              >
                Afficher tous les pays
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {destinations.map((dest) => {
              const isSelected = selectedCountry === dest.name;
              return (
                <button
                  key={dest.name}
                  onClick={() => setSelectedCountry(isSelected ? 'Tous' : dest.name)}
                  className={`group text-left rounded-xl p-3 border transition-all ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/50 shadow-sm ring-1 ring-blue-600'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 mb-2.5 relative">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 text-lg drop-shadow-sm">
                      {dest.flag}
                    </div>
                  </div>
                  <div className="font-bold text-sm text-slate-900 flex items-center justify-between">
                    <span>{dest.name}</span>
                    {isSelected && (
                      <span className="text-[11px] font-semibold text-blue-700">Actif</span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    {dest.tagline}
                  </div>
                  <div className="text-[10px] text-blue-800 font-medium truncate mt-1">
                    {dest.pathway}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sectors / Branches d'activité prioritaires */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Branches & Métiers en Forte Pénurie à l'Étranger
            </h3>
            <span className="text-[11px] text-slate-400">
              Accès direct aux quotas et programmes de visa accélérés
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <button
              onClick={() => setSearchQuery('Informatique')}
              className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-left transition-colors group"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-900 flex items-center gap-1.5">
                <span>💻</span>
                <span>Informatique & Cloud</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                DevOps, Fullstack, IA, Cyber · Canada & Irlande
              </div>
            </button>

            <button
              onClick={() => setSearchQuery('Santé')}
              className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-left transition-colors group"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-900 flex items-center gap-1.5">
                <span>🏥</span>
                <span>Santé & Soins Médicaux</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Infirmiers, Médecins, Bio · Suisse & Canada
              </div>
            </button>

            <button
              onClick={() => setSearchQuery('BTP')}
              className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-left transition-colors group"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-900 flex items-center gap-1.5">
                <span>🏗️</span>
                <span>Génie Civil & BTP</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Conducteurs, Structures · Nouvelle-Zélande & France
              </div>
            </button>

            <button
              onClick={() => setSearchQuery('Finance')}
              className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-left transition-colors group"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-900 flex items-center gap-1.5">
                <span>📈</span>
                <span>Finance & Audit IFRS</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Auditeurs Big 4, Experts · Suisse & Canada
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
