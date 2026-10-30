import React, { useState, useMemo } from 'react';
import { JobOffer, TargetCountry, JobSector } from '../types';

interface JobListProps {
  jobs: JobOffer[];
  selectedCountry: TargetCountry | 'Tous';
  setSelectedCountry: (country: TargetCountry | 'Tous') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectJob: (job: JobOffer) => void;
  onOpenSimulator: () => void;
}

const SECTORS: (JobSector | 'Tous')[] = [
  'Tous',
  'Informatique & Tech',
  'Santé & Soins Médicaux',
  'Ingénierie & BTP',
  'Finance, Comptabilité & Audit'
];

export const JobList: React.FC<JobListProps> = ({
  jobs,
  selectedCountry,
  setSelectedCountry,
  searchQuery,
  setSearchQuery,
  onSelectJob,
  onOpenSimulator
}) => {
  const [selectedSector, setSelectedSector] = useState<JobSector | 'Tous'>('Tous');
  const [onlyFullySponsored, setOnlyFullySponsored] = useState<boolean>(false);
  const [sourceFilter, setSourceFilter] = useState<'Tous' | 'Indeed' | 'Direct'>('Tous');

  const countryFlags: Record<TargetCountry, string> = {
    'Canada': '🇨🇦',
    'Suisse': '🇨🇭',
    'Nouvelle-Zélande': '🇳🇿',
    'France': '🇫🇷',
    'Irlande': '🇮🇪'
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Country filter
      if (selectedCountry !== 'Tous' && job.country !== selectedCountry) {
        return false;
      }
      // Sector filter
      if (selectedSector !== 'Tous' && job.sector !== selectedSector) {
        return false;
      }
      // Source filter (Indeed vs Direct)
      if (sourceFilter === 'Indeed' && (!job.source || !job.source.toLowerCase().includes('indeed'))) {
        return false;
      }
      if (sourceFilter === 'Direct' && job.source && job.source.toLowerCase().includes('indeed')) {
        return false;
      }
      // Fully sponsored filter
      if (onlyFullySponsored && job.visaStatus !== '100% Sponsorisé') {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = job.title.toLowerCase().includes(query);
        const matchCompany = job.company.toLowerCase().includes(query);
        const matchCity = job.city.toLowerCase().includes(query);
        const matchReq = job.requirements.some((r) => r.toLowerCase().includes(query));
        const matchSector = job.sector.toLowerCase().includes(query);
        const matchSource = job.source ? job.source.toLowerCase().includes(query) : false;
        if (!matchTitle && !matchCompany && !matchCity && !matchReq && !matchSector && !matchSource) {
          return false;
        }
      }
      return true;
    });
  }, [jobs, selectedCountry, selectedSector, sourceFilter, onlyFullySponsored, searchQuery]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            <span>Opportunités Vérifiées</span>
            <span aria-hidden="true">·</span>
            <span>Accompagnement Visa Inclus</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Offres d’emploi ouvertes aux ressortissants africains
          </h2>
        </div>

        {/* Results Count & Simulator callout */}
        <div className="flex items-center gap-4 text-xs">
          <span className="text-slate-600 font-medium">
            <strong className="text-slate-900 tabular-nums">{filteredJobs.length}</strong> offres trouvées
          </span>
          <button
            onClick={onOpenSimulator}
            className="text-blue-700 hover:text-blue-900 font-semibold underline underline-offset-2"
          >
            Vérifier ma compatibilité visa →
          </button>
        </div>
      </div>

      {/* Interactive Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 mb-6 shadow-xs">
        <div className="flex flex-wrap items-center gap-3">
          {/* Country segmented tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full">
            {(['Tous', 'Canada', 'Suisse', 'Nouvelle-Zélande', 'France', 'Irlande'] as const).map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedCountry === country
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {country === 'Tous' ? 'Tous les pays' : `${countryFlags[country as TargetCountry]} ${country}`}
              </button>
            ))}
          </div>

          {/* Sector Selector */}
          <div className="flex items-center gap-2">
            <label htmlFor="sector-select" className="text-xs font-medium text-slate-600 whitespace-nowrap">
              Secteur :
            </label>
            <select
              id="sector-select"
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value as any)}
              className="bg-white border border-slate-200 text-xs rounded-lg px-2.5 py-1.5 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {SECTORS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Source Filter (AfriTalent Direct vs Indeed) */}
          <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg">
            {(['Tous', 'Indeed', 'Direct'] as const).map((src) => (
              <button
                key={src}
                onClick={() => setSourceFilter(src)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  sourceFilter === src
                    ? 'bg-white text-blue-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {src === 'Tous' ? 'Toutes sources' : src === 'Indeed' ? '🌐 Sourcing Indeed' : '⭐ Direct AfriTalent'}
              </button>
            ))}
          </div>

          {/* Sponsorship Toggle */}
          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer ml-auto">
            <input
              type="checkbox"
              checked={onlyFullySponsored}
              onChange={(e) => setOnlyFullySponsored(e.target.checked)}
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
            />
            <span>Uniquement 100% Sponsorisé</span>
          </label>
        </div>
      </div>

      {/* Jobs Grid / List */}
      {filteredJobs.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-xl mx-auto my-8">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center mb-4 text-xl">
            🔍
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">Aucune offre ne correspond à vos filtres</h3>
          <p className="text-sm text-slate-600 mb-6">
            Essayez d’élargir vos critères de recherche en sélectionnant « Tous les pays » ou en réinitialisant le filtre sectoriel.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => {
                setSelectedCountry('Tous');
                setSelectedSector('Tous');
                setSourceFilter('Tous');
                setOnlyFullySponsored(false);
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer group"
              onClick={() => onSelectJob(job)}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Main Job Info */}
                <div className="flex-1">
                  {/* Clean unboxed metadata kicker */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-slate-900 flex items-center gap-1">
                      {countryFlags[job.country]} {job.country}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{job.city}</span>
                    <span aria-hidden="true">·</span>
                    <span>{job.contractType}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-900 font-semibold">{job.visaProgram}</span>
                    {job.source && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-blue-950 font-semibold bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded text-[11px] inline-flex items-center gap-1 shadow-2xs">
                          <span>🌐</span>
                          <span>{job.source}</span>
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-1.5">
                    {job.title}
                  </h3>

                  <div className="text-sm font-medium text-slate-700 mb-3">
                    {job.company}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {job.description}
                  </p>

                  {/* Relocation benefits unboxed items */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1">
                    <span className="flex items-center gap-1 text-emerald-800 font-medium">
                      ✓ {job.visaStatus}
                    </span>
                    {job.relocation.flightTicketProvided && (
                      <>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>Billet d’avion offert</span>
                      </>
                    )}
                    {job.relocation.initialHousingWeeks > 0 && (
                      <>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>{job.relocation.initialHousingWeeks} sem. logement inclus</span>
                      </>
                    )}
                    {job.relocation.immigrationLawyerAssistance && (
                      <>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>Avocat immigration pris en charge</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Right Salary & Action */}
                <div className="lg:text-right shrink-0 lg:w-64 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Rémunération brute</div>
                    <div className="text-base font-extrabold text-slate-900 tabular-nums">
                      {job.salary.amount} {job.salary.currency}/{job.salary.period}
                    </div>
                    {job.salary.estimatedXofMonthly && (
                      <div className="text-xs text-blue-900 font-medium mt-0.5">
                        {job.salary.estimatedXofMonthly}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex items-center lg:justify-end gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectJob(job);
                      }}
                      className="w-full sm:w-auto px-4 py-2 bg-slate-900 group-hover:bg-blue-900 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                    >
                      Voir le poste & Postuler →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
