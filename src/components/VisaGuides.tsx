import React, { useState } from 'react';
import { TargetCountry } from '../types';
import { VISA_PATHWAYS } from '../data/mockData';
import { ALL_AFRICAN_COUNTRIES, AFRICAN_REGIONS, AfricanCountryInfo } from '../data/africanCountries';

interface VisaGuidesProps {
  onSelectCountryFilter: (country: TargetCountry) => void;
}

export const VisaGuides: React.FC<VisaGuidesProps> = ({ onSelectCountryFilter }) => {
  const [activeCountry, setActiveCountry] = useState<TargetCountry>('Canada');
  const [africanSearch, setAfricanSearch] = useState<string>('');
  const [activeRegion, setActiveRegion] = useState<string>('Tous (54 pays)');
  const [selectedCountryInfo, setSelectedCountryInfo] = useState<AfricanCountryInfo | null>(null);

  const guide = VISA_PATHWAYS[activeCountry];

  const countriesList: TargetCountry[] = ['Canada', 'Suisse', 'Nouvelle-Zélande', 'France', 'Irlande'];

  const filteredAfricanCountries = ALL_AFRICAN_COUNTRIES.filter((c) => {
    if (activeRegion !== 'Tous (54 pays)' && c.region !== activeRegion) return false;
    if (africanSearch.trim()) {
      const q = africanSearch.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
          <span>Procédures Consulaires Officielles</span>
          <span aria-hidden="true">·</span>
          <span>Droit de l'Immigration Professionnelle</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Guides Officiels des Visas & Permis de Travail
        </h2>
        <p className="text-sm text-slate-600">
          Comprendre étape par étape les programmes d'embauche de talents étrangers mis en place par les gouvernements du Canada, de Suisse, de Nouvelle-Zélande, de France et d'Irlande.
        </p>
      </div>

      {/* Country Selection Tabs */}
      <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto p-1 bg-slate-100 rounded-xl max-w-2xl mx-auto">
        {countriesList.map((country) => {
          const isSelected = activeCountry === country;
          const flag = VISA_PATHWAYS[country].flag;
          return (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                isSelected
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {flag} {country}
            </button>
          );
        })}
      </div>

      {/* Selected Guide Details */}
      {guide && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-8">
          {/* Top Summary Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 mb-1">
                <span>{guide.flag} {guide.country}</span>
                <span aria-hidden="true">·</span>
                <span>Autorité : {guide.authority}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {guide.programName}
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs">
                <div className="text-slate-500 font-medium">Délai moyen constaté :</div>
                <div className="font-extrabold text-slate-900">{guide.avgProcessingTime}</div>
              </div>
              <button
                onClick={() => onSelectCountryFilter(guide.country)}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors self-center whitespace-nowrap shadow-xs"
              >
                Voir les offres au {guide.country} →
              </button>
            </div>
          </div>

          {/* Exemption & Advantages */}
          <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4 text-xs text-blue-950">
            <strong>Règle clé pour les talents d'Afrique :</strong> {guide.exemptions}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Steps */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Étapes de la démarche d’embauche
              </h4>
              <ol className="space-y-3">
                {guide.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Key Requirements & In-Demand jobs */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Conditions indispensables
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {guide.keyRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Métiers les plus recherchés
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                  {guide.inDemandJobs.map((job, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 rounded px-2.5 py-1 font-medium text-slate-800"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-950">
                <strong>Frais & Débours :</strong> {guide.costNotes}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pan-African Biometric & Consular Centers Directory */}
      <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
              <span>Réseau Consulaire & CRDV</span>
              <span aria-hidden="true">·</span>
              <span>Les 54 Pays d’Afrique</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Où déposer votre passeport & vos données biométriques en Afrique ?
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              Chaque pays d’Afrique dispose d’un centre de réception des demandes de visa (CRDV VFS Global, TLScontact ou section consulaire d’Ambassade) habilité pour le Canada, la France, la Suisse, la Nouvelle-Zélande et l’Irlande.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              54 pays répertoriés
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {AFRICAN_REGIONS.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setActiveRegion(region)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activeRegion === region
                    ? 'bg-slate-900 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative min-w-[240px]">
            <input
              type="text"
              value={africanSearch}
              onChange={(e) => setAfricanSearch(e.target.value)}
              placeholder="Chercher un pays (ex: Cameroun, RDC, Maroc...)"
              className="w-full text-xs pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
            <svg className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Selected Country Spotlight if clicked */}
        {selectedCountryInfo && (
          <div className="bg-gradient-to-r from-slate-900 via-[#102238] to-[#142d4c] text-white rounded-xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{selectedCountryInfo.flag}</span>
                <span className="font-bold text-base">{selectedCountryInfo.name}</span>
                <span className="text-xs text-blue-300">({selectedCountryInfo.region})</span>
              </div>
              <button
                onClick={() => setSelectedCountryInfo(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                ✕ Fermer le détail
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700">
                <div className="text-blue-300 font-bold mb-1">Centre Biométrique / CRDV officiel :</div>
                <div className="text-slate-200">{selectedCountryInfo.biometricCenter}</div>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700">
                <div className="text-blue-300 font-bold mb-1">Traitement Consulaire & Visa de Travail :</div>
                <div className="text-slate-200">{selectedCountryInfo.consularHub}</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-300 pt-1">
              ✓ Les ressortissants de <strong>{selectedCountryInfo.name}</strong> sont admissibles aux 5 pays partenaires (Canada, Suisse, Nouvelle-Zélande, France, Irlande) avec contrat sponsorisé.
            </div>
          </div>
        )}

        {/* Country Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-1">
          {filteredAfricanCountries.map((c) => (
            <div
              key={c.code}
              onClick={() => setSelectedCountryInfo(c)}
              className={`p-3.5 rounded-xl border text-left text-xs transition-all cursor-pointer flex flex-col justify-between ${
                selectedCountryInfo?.code === c.code
                  ? 'border-blue-600 bg-blue-50/50 shadow-xs'
                  : 'border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{c.flag}</span>
                    <span className="font-bold text-slate-900">{c.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">{c.region}</span>
                </div>
                <div className="text-[11px] text-slate-600 line-clamp-2">
                  <span className="font-semibold text-slate-700">Centre : </span>
                  {c.biometricCenter}
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium">Capitale : {c.capital.split('/')[0].trim()}</span>
                <span className="text-blue-700 font-semibold hover:underline">Voir détails →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
