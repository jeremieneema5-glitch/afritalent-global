import React, { useState } from 'react';
import { Application, JobOffer, CandidateProfile, TargetCountry } from '../types';
import { ALL_AFRICAN_COUNTRIES, findAfricanCountryByName, AFRICAN_REGIONS, AfricanCountryInfo } from '../data/africanCountries';

interface DashboardProps {
  userRole: 'candidat' | 'recruteur';
  setUserRole: (role: 'candidat' | 'recruteur') => void;
  candidateProfile: CandidateProfile;
  applications: Application[];
  jobs: JobOffer[];
  onOpenPostJob: () => void;
  onOpenPricing: () => void;
  onOpenMessages: () => void;
  onSelectJob: (job: JobOffer) => void;
  onOpenCvBuilder: () => void;
  onNavigateTab?: (tab: 'jobs' | 'talents' | 'simulator' | 'guides' | 'cv-builder' | 'dashboard' | 'cost-of-living' | 'interview-prep' | 'events') => void;
  onUpdateProfile?: (updated: Partial<CandidateProfile>) => void;
  onOpenProfile?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  userRole,
  setUserRole,
  candidateProfile,
  applications,
  jobs,
  onOpenPostJob,
  onOpenPricing,
  onOpenMessages,
  onSelectJob,
  onOpenCvBuilder,
  onNavigateTab,
  onUpdateProfile,
  onOpenProfile
}) => {
  // Checklist state for candidates
  const [checklist, setChecklist] = useState<{ id: string; label: string; done: boolean; detail: string }[]>([
    {
      id: 'passport',
      label: 'Passeport biométrique valide (> 18 mois)',
      done: true,
      detail: 'Indispensable pour l’apposition du visa de long séjour (IRCC, SEM, DREETS, INZ).'
    },
    {
      id: 'cv_intl',
      label: 'CV mis aux normes internationales (sans photo / ATS)',
      done: true,
      detail: 'Format canadien anonymisé ou Europass détaillé.'
    },
    {
      id: 'degree_eval',
      label: 'Équivalence des diplômes (WES / ENIC-NARIC)',
      done: false,
      detail: 'Requis pour les programmes Entrée Express (Canada) ou Critical Skills (Irlande).'
    },
    {
      id: 'language_test',
      label: 'Attestation de test de langue officiel (TCF / IELTS)',
      done: false,
      detail: 'Score NCLC 5+ pour Mobilité Francophone ou IELTS 6.5+ pour Nouvelle-Zélande.'
    },
    {
      id: 'police_cert',
      label: 'Extrait de casier judiciaire (Bulletin n°3) vierge',
      done: true,
      detail: 'Document consulaire obligatoire pour tous les visas de travail.'
    }
  ]);

  const toggleChecklist = (id: string) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const completedCount = checklist.filter(c => c.done).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  const countryFlags: Record<TargetCountry, string> = {
    'Canada': '🇨🇦',
    'Suisse': '🇨🇭',
    'Nouvelle-Zélande': '🇳🇿',
    'France': '🇫🇷',
    'Irlande': '🇮🇪'
  };

  // Pan-African passport & mobility state
  const [showPanAfricanSelector, setShowPanAfricanSelector] = useState<boolean>(false);
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('Tous (54 pays)');
  const [africanCountrySearch, setAfricanCountrySearch] = useState<string>('');

  const currentCountryInfo = findAfricanCountryByName(candidateProfile.currentCountry) || ALL_AFRICAN_COUNTRIES[0];

  const handleSelectAfricanCountry = (country: AfricanCountryInfo) => {
    if (onUpdateProfile) {
      onUpdateProfile({
        currentCountry: country.name,
        currentCity: country.capital.split('/')[0].trim()
      });
    }
  };

  const filteredAfricanCountries = ALL_AFRICAN_COUNTRIES.filter((c) => {
    if (selectedRegionFilter !== 'Tous (54 pays)' && c.region !== selectedRegionFilter) return false;
    if (africanCountrySearch.trim()) {
      const q = africanCountrySearch.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Executive Header Banner: Titanium Blue & Jet Black */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0b1320] via-[#102238] to-[#142d4c] text-white p-6 sm:p-8 border border-slate-800 shadow-lg relative overflow-hidden">
          {/* Subtle geometric light reflection for metallic titanium feel */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 tracking-wider uppercase mb-2">
                <span>Espace Décisionnel Pro</span>
                <span aria-hidden="true">·</span>
                <span>Mobilité Internationale Certifiée</span>
                <span aria-hidden="true">·</span>
                <span>Titanium Edition</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Tableau de Bord & Suivi de Recrutement
              </h1>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Supervisez vos candidatures, la conformité de vos pièces consulaires et vos échanges directs avec les employeurs du Canada, de Suisse, de Nouvelle-Zélande, de France et d'Irlande.
              </p>
            </div>

            {/* Mode Switcher Segmented Control */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div className="p-1 bg-[#070d17] border border-slate-700/80 rounded-xl inline-flex text-xs font-semibold">
                <button
                  onClick={() => setUserRole('candidat')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    userRole === 'candidat'
                      ? 'bg-blue-600 text-white shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Vue Candidat
                </button>
                <button
                  onClick={() => setUserRole('recruteur')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    userRole === 'recruteur'
                      ? 'bg-blue-600 text-white shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Vue Recruteur B2B
                </button>
              </div>

              {userRole === 'candidat' ? (
                <button
                  onClick={onOpenPricing}
                  className="px-4 py-2.5 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs rounded-xl shadow-xs transition-colors whitespace-nowrap"
                >
                  Pack Coaching (125 $) →
                </button>
              ) : (
                <button
                  onClick={onOpenPostJob}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-xs transition-colors whitespace-nowrap"
                >
                  + Nouvelle Offre B2B
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Destination Countries Photo Showcase */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <span>🌍 Pays & Destinations Internationales Partenaires</span>
            </h2>
            <span className="text-[11px] text-slate-500">
              5 pays ouverts au recrutement de talents d'Afrique
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                name: 'Canada',
                flag: '🇨🇦',
                image: '/src/assets/images/dest_canada_1793277940769.jpg',
                tagline: 'Montréal · Toronto · Québec',
                pathway: 'Mobilité Francophone'
              },
              {
                name: 'Suisse',
                flag: '🇨🇭',
                image: '/src/assets/images/dest_switzerland_1793277941474.jpg',
                tagline: 'Genève · Zurich · Lausanne',
                pathway: 'Permis B Cadres'
              },
              {
                name: 'Nouvelle-Zélande',
                flag: '🇳🇿',
                image: '/src/assets/images/dest_newzealand_1793277944751.jpg',
                tagline: 'Auckland · Wellington',
                pathway: 'Green List AEWV'
              },
              {
                name: 'France',
                flag: '🇫🇷',
                image: '/src/assets/images/dest_europe_1793277958605.jpg',
                tagline: 'Paris · Lyon · Nantes',
                pathway: 'Passeport Talent 4 ans'
              },
              {
                name: 'Irlande',
                flag: '🇮🇪',
                image: '/src/assets/images/dest_europe_1793277958605.jpg',
                tagline: 'Dublin · Cork · Galway',
                pathway: 'Critical Skills Permit'
              }
            ].map((dest) => (
              <div
                key={dest.name}
                className="group rounded-xl p-2.5 border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all text-left"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 mb-2 relative">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5 text-base drop-shadow-sm">
                    {dest.flag}
                  </div>
                </div>
                <div className="font-bold text-xs text-slate-900 truncate">
                  {dest.name}
                </div>
                <div className="text-[10px] text-slate-500 truncate mt-0.5">
                  {dest.tagline}
                </div>
                <div className="text-[10px] text-blue-800 font-semibold truncate mt-0.5">
                  {dest.pathway}
                </div>
              </div>
            ))}
          </div>

          {/* Career Branches */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-700 text-[11px] uppercase tracking-wider mr-1">
              Branches prioritaires :
            </span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-800 font-medium">💻 Informatique & Cloud</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-800 font-medium">🏥 Santé & Soins</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-800 font-medium">🏗️ Génie Civil & BTP</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-800 font-medium">📈 Finance & Audit IFRS</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-800 font-medium">📦 Logistique & Énergies</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CANDIDATE DASHBOARD VIEW */}
        {/* ========================================================================= */}
        {userRole === 'candidat' && (
          <div className="space-y-8">
            {/* Top KPI Metrics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Préparation Visa</span>
                  <span className="text-blue-700 font-bold">Consulat</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
                  {progressPercent}%
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 mt-3 overflow-hidden">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
                </div>
                <div className="text-[11px] text-slate-500 mt-2">
                  {completedCount} sur {checklist.length} prérequis validés
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Candidatures</span>
                  <span className="text-emerald-700 font-bold">Actives</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
                  {applications.length}
                </div>
                <div className="text-xs text-slate-600 mt-3 font-medium">
                  Canada & Suisse ciblés
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Dernier statut : Entretien planifié
                </div>
              </div>

              {/* Passeport & Mobilité Pan-Africaine Card */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Passeport & Mobilité</span>
                  <span className="text-blue-900 font-bold bg-blue-50 px-2 py-0.5 rounded text-[10px]">
                    54 Pays Éligibles
                  </span>
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 flex items-center gap-1.5 truncate">
                    <span>{currentCountryInfo.flag}</span>
                    <span>{candidateProfile.currentCountry}</span>
                  </div>
                  <div className="text-xs text-slate-600 truncate mt-0.5 font-medium">
                    {candidateProfile.currentCity} · {currentCountryInfo.region}
                  </div>
                  <div className="text-[11px] text-emerald-800 font-semibold mt-1">
                    ✓ Passeport biométrique valide (&gt; 18 mois)
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setShowPanAfricanSelector(!showPanAfricanSelector)}
                    className="text-[11px] text-blue-700 hover:text-blue-900 font-bold underline text-left"
                  >
                    {showPanAfricanSelector ? 'Fermer les 54 pays ▲' : 'Changer de pays d’Afrique (54) →'}
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">Pan-Afrique</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Messagerie Recruteur</span>
                  <span className="text-blue-700 font-bold">Directe</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
                  1
                </div>
                <div className="text-xs text-slate-600 mt-3 font-medium">
                  Entretien visio confirmé
                </div>
                <button
                  onClick={onOpenMessages}
                  className="text-[11px] text-blue-700 hover:text-blue-900 font-bold underline mt-0.5 text-left"
                >
                  Ouvrir la boîte de dialogue →
                </button>
              </div>
            </div>

            {/* Pan-African Consular & Biometric Passport Hub for All 54 African Countries */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                    <span>Couverture Intégrale</span>
                    <span aria-hidden="true">·</span>
                    <span>Union Africaine (54 Nations)</span>
                    <span aria-hidden="true">·</span>
                    <span>Zéro Restriction Géographique</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Passeport Biométrique & Centres Consulaires Pan-Africains
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    Les programmes de mobilité internationale (Mobilité Francophone Canada, Passeport Talent France, Permis B Suisse, Green List Nouvelle-Zélande, Critical Skills Irlande) sont <strong>strictement ouverts aux ressortissants des 54 pays d’Afrique</strong>.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center gap-1.5">
                    <span>✓</span>
                    <span>54/54 Pays Admissibles</span>
                  </span>
                </div>
              </div>

              {/* Active Selected African Country Card */}
              <div className="bg-gradient-to-r from-slate-900 via-[#102238] to-[#142d4c] text-white rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{currentCountryInfo.flag}</span>
                    <div>
                      <div className="text-xs text-blue-300 font-semibold uppercase tracking-wider">
                        Votre Pays de Nationalité & Passeport Actif
                      </div>
                      <div className="text-lg font-bold text-white flex items-center gap-2">
                        <span>{currentCountryInfo.name}</span>
                        <span className="text-xs font-normal text-slate-300">({currentCountryInfo.region})</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-slate-200">
                    <span className="text-slate-400">Capitale / Pôle : </span>
                    <span className="font-bold text-white">{currentCountryInfo.capital}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/60">
                    <div className="text-blue-300 font-bold mb-1 flex items-center gap-1.5">
                      <span>📍</span>
                      <span>Centre Biométrique & CRDV Agréé :</span>
                    </div>
                    <div className="text-slate-200 font-medium leading-relaxed">
                      {currentCountryInfo.biometricCenter}
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/60">
                    <div className="text-blue-300 font-bold mb-1 flex items-center gap-1.5">
                      <span>🏛️</span>
                      <span>Pôle Consulaire & Traitement Visa :</span>
                    </div>
                    <div className="text-slate-200 font-medium leading-relaxed">
                      {currentCountryInfo.consularHub}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-300 bg-blue-950/40 border border-blue-900/50 rounded-lg p-2.5 flex items-center justify-between">
                  <span>
                    🛂 <strong>Règle Passeport :</strong> Doit comporter au moins 2 pages vierges et 18 mois de validité résiduelle pour l’apposition du visa de travail de long séjour.
                  </span>
                  <span className="font-bold text-emerald-400 shrink-0 ml-2">Passeport Conforme</span>
                </div>
              </div>

              {/* Pan-African Search & Region Selector */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Sélectionner un autre pays d'Afrique (54 nations disponibles) :
                  </div>

                  {/* Search input */}
                  <div className="relative min-w-[240px]">
                    <input
                      type="text"
                      value={africanCountrySearch}
                      onChange={(e) => setAfricanCountrySearch(e.target.value)}
                      placeholder="Rechercher parmi les 54 pays (ex: Cameroun, RDC, Maroc...)"
                      className="w-full text-xs pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                    <svg className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Region Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                  {AFRICAN_REGIONS.map((region) => (
                    <button
                      key={region}
                      type="button"
                      onClick={() => setSelectedRegionFilter(region)}
                      className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                        selectedRegionFilter === region
                          ? 'bg-slate-900 text-white font-bold shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>

                {/* Filtered Country Grid */}
                <div className="max-h-60 overflow-y-auto border border-slate-200 rounded-xl p-2 bg-slate-50/60 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {filteredAfricanCountries.map((c) => {
                    const isCurrent = candidateProfile.currentCountry.toLowerCase() === c.name.toLowerCase();
                    return (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => handleSelectAfricanCountry(c)}
                        className={`p-2 rounded-lg border text-left text-xs transition-all flex flex-col justify-between ${
                          isCurrent
                            ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                            : 'bg-white border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-blue-50/30'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-base">{c.flag}</span>
                          <span className="truncate font-semibold">{c.name}</span>
                        </div>
                        <div className={`text-[10px] truncate mt-1 ${isCurrent ? 'text-blue-100' : 'text-slate-500'}`}>
                          {c.capital.split('/')[0].trim()}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Split Grid: Live Application Pipeline & Visa Preparation Checklist */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Applications Tracker Pipeline */}
              <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Suivi de vos dossiers d'embauche internationale
                    </h3>
                    <p className="text-xs text-slate-500">
                      Chaque étape est synchronisée avec l'employeur recruteur.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 tabular-nums">
                    {applications.length} postulation(s)
                  </span>
                </div>

                {applications.length === 0 ? (
                  <div className="text-center py-10 text-slate-500 text-xs">
                    Vous n'avez pas encore envoyé de candidature.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {applications.map((app) => (
                      <div
                        key={app.id}
                        className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 hover:bg-white transition-all space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <div className="text-sm font-bold text-slate-900">
                              {app.jobTitle}
                            </div>
                            <div className="text-xs font-medium text-slate-600 mt-0.5">
                              {app.company} · Postulé le {app.appliedDate}
                            </div>
                          </div>
                          <span className="self-start sm:self-center px-3 py-1 bg-blue-100 text-blue-900 font-bold text-xs rounded-full">
                            {app.status}
                          </span>
                        </div>

                        {/* Interactive Visual Step Pipeline */}
                        <div className="pt-2">
                          <div className="grid grid-cols-4 gap-2 text-[11px] text-center font-medium">
                            <div className="border-b-2 border-blue-600 text-blue-900 pb-1">
                              1. Dossier Reçu
                            </div>
                            <div className="border-b-2 border-blue-600 text-blue-900 pb-1 font-bold">
                              2. Examen CV
                            </div>
                            <div className={`border-b-2 pb-1 ${app.status.includes('Entretien') || app.status.includes('Offre') ? 'border-blue-600 text-blue-900 font-bold' : 'border-slate-200 text-slate-400'}`}>
                              3. Entretien Vidéo
                            </div>
                            <div className={`border-b-2 pb-1 ${app.status.includes('Visa') ? 'border-blue-600 text-blue-900 font-bold' : 'border-slate-200 text-slate-400'}`}>
                              4. Dépôt Visa
                            </div>
                          </div>
                        </div>

                        <div className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200/80 leading-relaxed">
                          <strong>Note jointe :</strong> {app.coverNote}
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <button
                            onClick={onOpenMessages}
                            className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                          >
                            💬 Échanger avec l'équipe de {app.company}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Consular Readiness Checklist & Fast Actions */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-900">
                      Checklist d'Immigration Consulaire
                    </h3>
                    <span className="text-xs font-bold text-blue-700">
                      {progressPercent}% Complet
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Les pièces justificatives obligatoires pour valider votre demande de permis de travail et obtenir votre visa d’expatriation.
                  </p>

                  <div className="space-y-3">
                    {checklist.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => toggleChecklist(item.id)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-colors ${
                          item.done
                            ? 'bg-blue-50/40 border-blue-200'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <input
                            type="checkbox"
                            checked={item.done}
                            onChange={() => {}} // handled by div click
                            className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                          />
                          <div>
                            <div className={`font-bold ${item.done ? 'text-slate-900' : 'text-slate-700'}`}>
                              {item.label}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                              {item.detail}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Coaching Callout Banner */}
                  <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                      Accompagnement Individualisé
                    </div>
                    <div className="text-sm font-bold">
                      Besoin d’aide pour le test de langue ou le CV ?
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Le <strong>Pack Accompagnement (125 $)</strong> comprend la refonte intégrale de votre CV aux normes internationales et le coaching intensif pour le TCF ou l'IELTS.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={onOpenPricing}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors text-center"
                      >
                        Découvrir le programme de coaching →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Shortcuts */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-3">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                    <span>Outils d'Expatriation & Carrière</span>
                    <span className="text-[10px] text-blue-800 font-semibold bg-blue-50 px-2 py-0.5 rounded">6 Modules</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      onClick={() => onNavigateTab ? onNavigateTab('cost-of-living') : undefined}
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-left font-semibold text-slate-800 transition-colors group"
                    >
                      <div className="text-blue-900 font-bold mb-0.5">💰 Coût de la Vie & FCFA</div>
                      <div className="text-[11px] text-slate-500 font-normal">Calcul d'épargne mensuelle</div>
                    </button>
                    <button
                      onClick={() => onNavigateTab ? onNavigateTab('interview-prep') : undefined}
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-left font-semibold text-slate-800 transition-colors group"
                    >
                      <div className="text-blue-900 font-bold mb-0.5">🎯 Entretiens STAR</div>
                      <div className="text-[11px] text-slate-500 font-normal">Questions types & conseils</div>
                    </button>
                    <button
                      onClick={() => onNavigateTab ? onNavigateTab('events') : undefined}
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-left font-semibold text-slate-800 transition-colors group"
                    >
                      <div className="text-blue-900 font-bold mb-0.5">📅 Salons & Missions</div>
                      <div className="text-[11px] text-slate-500 font-normal">Embauches directes 2026</div>
                    </button>
                    <button
                      onClick={onOpenCvBuilder}
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-left font-semibold text-slate-800 transition-colors"
                    >
                      <div className="text-blue-900 font-bold mb-0.5">📄 Mon CV ATS</div>
                      <div className="text-[11px] text-slate-500 font-normal">Formats Canada/Europe</div>
                    </button>
                    <button
                      onClick={() => onNavigateTab ? onNavigateTab('jobs') : undefined}
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-left font-semibold text-slate-800 transition-colors"
                    >
                      <div className="text-blue-900 font-bold mb-0.5">🌐 Offres & Sourcing Indeed</div>
                      <div className="text-[11px] text-slate-500 font-normal">{jobs.length} postes avec visa</div>
                    </button>
                    <button
                      onClick={onOpenMessages}
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-left font-semibold text-slate-800 transition-colors"
                    >
                      <div className="text-blue-900 font-bold mb-0.5">💬 Messagerie Directe</div>
                      <div className="text-[11px] text-slate-500 font-normal">Entretiens en visio</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* RECRUITER / EMPLOYER DASHBOARD VIEW */}
        {/* ========================================================================= */}
        {userRole === 'recruteur' && (
          <div className="space-y-8">
            {/* Recruiter Metrics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Offres Actives</span>
                  <span className="text-blue-900 font-bold">International</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
                  {jobs.length}
                </div>
                <div className="text-xs text-slate-600 mt-3 font-medium">
                  Diffusées dans les 54 pays d'Afrique (Panafricain)
                </div>
                <div className="text-[11px] text-emerald-800 font-semibold mt-0.5">
                  100% vérifiées avec visa
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Candidatures Reçues</span>
                  <span className="text-emerald-700 font-bold">Qualifiées</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
                  {applications.length + 8}
                </div>
                <div className="text-xs text-slate-600 mt-3 font-medium">
                  Diplômés Ingénieurs & Santé
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Passeports et casiers vérifiés
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Entretiens Vidéo</span>
                  <span className="text-blue-700 font-bold">Planifiés</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
                  4
                </div>
                <div className="text-xs text-slate-600 mt-3 font-medium">
                  Cette semaine (GMT / UTC)
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Google Meet / Teams
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Forfait Recruteur</span>
                  <span className="text-blue-900 font-bold">Actif</span>
                </div>
                <div className="text-base font-bold text-slate-900">
                  Pack Offre Unique
                </div>
                <div className="text-xs text-slate-600 mt-2 font-medium">
                  Accès Vivier illimité
                </div>
                <button
                  onClick={onOpenPricing}
                  className="text-[11px] text-blue-700 hover:text-blue-900 font-bold underline mt-1 text-left"
                >
                  Voir les forfaits & mandats B2B →
                </button>
              </div>
            </div>

            {/* Recruiter Active Listings & Pipeline */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Vos postes ouverts au recrutement international
                  </h3>
                  <p className="text-xs text-slate-500">
                    Gérez vos mandats d'embauche au Canada, en Suisse, en France, en NZ et en Irlande.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={onOpenPricing}
                    className="px-3 py-2 text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50"
                  >
                    Tarifs B2B (290 $)
                  </button>
                  <button
                    onClick={onOpenPostJob}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
                  >
                    + Publier une offre
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {jobs.slice(0, 4).map((job) => (
                  <div
                    key={job.id}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/40 hover:bg-white transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                        <span className="font-bold text-slate-900">
                          {countryFlags[job.country]} {job.country}
                        </span>
                        <span>·</span>
                        <span>{job.city}</span>
                        <span>·</span>
                        <span className="text-blue-900 font-semibold">{job.visaProgram}</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        {job.title}
                      </h4>
                      <div className="text-xs text-slate-600 mt-1">
                        {job.company} · Rémunération : {job.salary.amount} {job.salary.currency}/{job.salary.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                        ✓ {job.visaStatus}
                      </span>
                      <button
                        onClick={() => onSelectJob(job)}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors"
                      >
                        Consulter les candidatures
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
