import React, { useState, useMemo } from 'react';
import { CandidateProfile, TargetCountry, JobSector } from '../types';
import { ALL_AFRICAN_COUNTRIES, findAfricanCountryByName } from '../data/africanCountries';

interface TalentDirectoryProps {
  candidates: CandidateProfile[];
  onContactCandidate: (candidate: CandidateProfile, isInterview?: boolean) => void;
  onOpenCvBuilder: () => void;
  onOpenProfile: () => void;
  userRole: 'candidat' | 'recruteur';
}

const SECTORS: (JobSector | 'Tous')[] = [
  'Tous',
  'Informatique & Tech',
  'Santé & Soins Médicaux',
  'Ingénierie & BTP',
  'Finance, Comptabilité & Audit'
];

const TARGET_COUNTRIES: (TargetCountry | 'Tous')[] = [
  'Tous',
  'Canada',
  'Suisse',
  'Nouvelle-Zélande',
  'France',
  'Irlande'
];

export const TalentDirectory: React.FC<TalentDirectoryProps> = ({
  candidates,
  onContactCandidate,
  onOpenCvBuilder,
  onOpenProfile,
  userRole
}) => {
  const [selectedSector, setSelectedSector] = useState<JobSector | 'Tous'>('Tous');
  const [selectedTargetCountry, setSelectedTargetCountry] = useState<TargetCountry | 'Tous'>('Tous');
  const [selectedAfricanCountry, setSelectedAfricanCountry] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateProfile | null>(null);

  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      if (selectedSector !== 'Tous' && c.sector !== selectedSector) return false;
      if (selectedTargetCountry !== 'Tous' && !c.targetCountries.includes(selectedTargetCountry)) return false;
      if (selectedAfricanCountry !== 'Tous' && c.currentCountry.toLowerCase() !== selectedAfricanCountry.toLowerCase()) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = c.fullName.toLowerCase().includes(q);
        const matchTitle = c.title.toLowerCase().includes(q);
        const matchCountry = c.currentCountry.toLowerCase().includes(q);
        const matchCity = c.currentCity.toLowerCase().includes(q);
        const matchSkills = c.skills.some((s) => s.toLowerCase().includes(q));
        if (!matchName && !matchTitle && !matchCountry && !matchCity && !matchSkills) return false;
      }
      return true;
    });
  }, [candidates, selectedSector, selectedTargetCountry, selectedAfricanCountry, searchQuery]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            <span>Vivier Panafricain Qualifié</span>
            <span aria-hidden="true">·</span>
            <span>Prêts pour la mobilité internationale</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Talents africains disponibles pour recrutement à l'étranger
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Ingénieurs, soignants, experts financiers et techniciens d’Afrique francophone et anglophone avec passeports à jour et projets de visa qualifié.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {userRole === 'candidat' ? (
            <button
              onClick={onOpenProfile}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
            >
              Créer ou mettre à jour mon profil →
            </button>
          ) : (
            <button
              onClick={onOpenCvBuilder}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
            >
              Générateur de CV International
            </button>
          )}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 mb-6 shadow-xs flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher par compétence, métier, pays d'Afrique (Dakar, Abidjan...)..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <svg className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Target Country destination filter */}
        <div className="flex items-center gap-2">
          <label htmlFor="target-country-filter" className="text-xs font-medium text-slate-600 whitespace-nowrap">
            Destination visée :
          </label>
          <select
            id="target-country-filter"
            value={selectedTargetCountry}
            onChange={(e) => setSelectedTargetCountry(e.target.value as any)}
            className="bg-slate-50 border border-slate-200 text-xs rounded-lg px-2.5 py-1.5 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {TARGET_COUNTRIES.map((tc) => (
              <option key={tc} value={tc}>{tc}</option>
            ))}
          </select>
        </div>

        {/* Sector filter */}
        <div className="flex items-center gap-2">
          <label htmlFor="talent-sector-filter" className="text-xs font-medium text-slate-600 whitespace-nowrap">
            Secteur :
          </label>
          <select
            id="talent-sector-filter"
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value as any)}
            className="bg-slate-50 border border-slate-200 text-xs rounded-lg px-2.5 py-1.5 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {SECTORS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCandidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header metadata */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-semibold text-slate-800">
                  📍 {candidate.currentCity}, {candidate.currentCountry}
                </span>
                <span className="text-blue-900 font-medium">
                  {candidate.educationLevel}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-0.5">
                {candidate.fullName}
              </h3>
              <div className="text-xs font-medium text-blue-900 mb-3">
                {candidate.title}
              </div>

              {/* Bio summary */}
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                {candidate.bio}
              </p>

              {/* Verified skills unboxed */}
              <div className="mb-4">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Compétences clés :
                </div>
                <div className="text-xs text-slate-700 leading-snug">
                  {candidate.skills.slice(0, 4).join(' · ')}
                </div>
              </div>

              {/* Target countries list */}
              <div className="text-xs text-slate-600 mb-2">
                <span className="font-semibold text-slate-800">Pays ciblés : </span>
                {candidate.targetCountries.join(', ')}
              </div>

              {/* Passport & Availability */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                <span>{candidate.passportValid ? '✓ Passeport valide' : 'Passeport en cours'}</span>
                <span aria-hidden="true">·</span>
                <span>Dispo {candidate.availability}</span>
                <span aria-hidden="true">·</span>
                <span>{candidate.yearsOfExperience} ans d’exp.</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setSelectedCandidate(candidate)}
                className="text-xs text-slate-600 hover:text-slate-900 font-medium"
              >
                Détails du profil
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onContactCandidate(candidate, true)}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  Proposer un entretien
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Candidate Detail Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 p-6 space-y-4 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">
                  📍 {selectedCandidate.currentCity}, {selectedCandidate.currentCountry}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{selectedCandidate.fullName}</h3>
                <div className="text-xs font-semibold text-blue-900">{selectedCandidate.title}</div>
              </div>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 space-y-1.5">
              <div><strong>Niveau d'études :</strong> {selectedCandidate.educationLevel}</div>
              <div><strong>Expérience professionnelle :</strong> {selectedCandidate.yearsOfExperience} ans</div>
              <div><strong>Disponibilité pour départ :</strong> {selectedCandidate.availability}</div>
              <div><strong>Statut passeport :</strong> {selectedCandidate.passportValid ? 'Valide (> 18 mois)' : 'En cours'}</div>
              <div><strong>Langues :</strong> {selectedCandidate.languages.map(l => `${l.language} (${l.level})`).join(', ')}</div>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">Présentation & Parcours</div>
              <p className="text-xs text-slate-700 leading-relaxed">{selectedCandidate.bio}</p>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">Compétences techniques</div>
              <div className="text-xs text-slate-700 leading-relaxed">
                {selectedCandidate.skills.join(' · ')}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedCandidate(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  const c = selectedCandidate;
                  setSelectedCandidate(null);
                  onContactCandidate(c, false);
                }}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Envoyer un message direct
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
