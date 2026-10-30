import React, { useState } from 'react';
import { TargetCountry } from '../types';
import { ALL_AFRICAN_COUNTRIES, findAfricanCountryByName } from '../data/africanCountries';

interface VisaSimulatorProps {
  onFilterByCountry: (country: TargetCountry) => void;
  onOpenCvBuilder: () => void;
}

export const VisaSimulator: React.FC<VisaSimulatorProps> = ({
  onFilterByCountry,
  onOpenCvBuilder
}) => {
  const [selectedAfricanCountryName, setSelectedAfricanCountryName] = useState<string>('Sénégal');
  const [degree, setDegree] = useState<'master' | 'bachelor' | 'tech' | 'phd'>('master');
  const [frenchLevel, setFrenchLevel] = useState<'fluent' | 'intermediate' | 'basic'>('fluent');
  const [englishLevel, setEnglishLevel] = useState<'fluent' | 'intermediate' | 'basic'>('intermediate');
  const [experience, setExperience] = useState<'junior' | 'mid' | 'senior'>('mid'); // mid = 3-5 ans
  const [domain, setDomain] = useState<'tech' | 'health' | 'btp' | 'finance' | 'other'>('tech');
  const [hasPassport, setHasPassport] = useState<boolean>(true);

  const selectedCountryInfo = findAfricanCountryByName(selectedAfricanCountryName) || ALL_AFRICAN_COUNTRIES[0];

  // Compute scores out of 100 for each country
  const calculateEligibility = () => {
    // Canada score (Mobilité Francophone is heavily weighted on French fluency and post-secondary degree)
    let canada = 40;
    if (frenchLevel === 'fluent') canada += 35;
    if (degree === 'master' || degree === 'phd') canada += 15;
    if (degree === 'bachelor') canada += 10;
    if (experience === 'senior' || experience === 'mid') canada += 10;

    // France score (Passeport Talent rewards Master + French + tech/health)
    let france = 35;
    if (degree === 'master' || degree === 'phd') france += 30;
    if (frenchLevel === 'fluent') france += 20;
    if (domain === 'tech' || domain === 'health') france += 15;

    // Irlande score (Critical Skills requires English + bachelor/master + tech/health)
    let irlande = 30;
    if (englishLevel === 'fluent') irlande += 35;
    else if (englishLevel === 'intermediate') irlande += 15;
    if (degree === 'master' || degree === 'bachelor') irlande += 20;
    if (domain === 'tech' || domain === 'health' || domain === 'finance') irlande += 15;

    // Nouvelle-Zélande (Green list prioritizes civil engineering, health, tech, with IELTS English)
    let nz = 30;
    if (englishLevel === 'fluent') nz += 30;
    else if (englishLevel === 'intermediate') nz += 15;
    if (domain === 'btp' || domain === 'health' || domain === 'tech') nz += 25;
    if (experience === 'senior' || experience === 'mid') nz += 15;

    // Suisse (Requires high specialized qualifications, language, Big4 or medicine)
    let suisse = 25;
    if (degree === 'master' || degree === 'phd') suisse += 25;
    if (frenchLevel === 'fluent' || englishLevel === 'fluent') suisse += 20;
    if (experience === 'senior') suisse += 20;
    else if (experience === 'mid') suisse += 10;
    if (domain === 'health' || domain === 'finance' || domain === 'tech') suisse += 10;

    return {
      Canada: Math.min(canada, 98),
      France: Math.min(france, 95),
      Irlande: Math.min(irlande, 94),
      'Nouvelle-Zélande': Math.min(nz, 92),
      Suisse: Math.min(suisse, 88)
    };
  };

  const scores = calculateEligibility();

  // Find top matching country
  const topCountry = (Object.keys(scores) as (keyof typeof scores)[]).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2">
          <span>Outil d'Évaluation Gratuit</span>
          <span aria-hidden="true">·</span>
          <span>Critères Officiels des Ministères de l'Immigration</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Simulateur d’éligibilité visa de travail international
        </h2>
        <p className="text-sm text-slate-600">
          Identifiez en 1 minute quel pays offre les procédures les plus avantageuses pour votre profil (Mobilité Francophone, Green List, Passeport Talent...).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Criteria */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
            1. Vos paramètres de qualification & Mobilité
          </h3>

          {/* African Country of Origin (54 countries) */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center justify-between">
              <span>Votre pays d'origine / citoyenneté africaine (54 pays admissibles)</span>
              <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                54 Nations Éligibles
              </span>
            </label>
            <select
              value={selectedAfricanCountryName}
              onChange={(e) => setSelectedAfricanCountryName(e.target.value)}
              className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-bold focus:ring-2 focus:ring-blue-600"
            >
              {ALL_AFRICAN_COUNTRIES.map((c) => (
                <option key={c.code} value={c.name}>
                  {c.flag} {c.name} ({c.region})
                </option>
              ))}
            </select>

            {selectedCountryInfo && (
              <div className="mt-2 p-2.5 bg-blue-50/60 border border-blue-200/80 rounded-lg text-xs space-y-1">
                <div className="font-bold text-blue-950 flex items-center gap-1.5">
                  <span>📍 Centre Biométrique & CRDV dans votre pays :</span>
                  <span className="font-semibold text-blue-900">{selectedCountryInfo.biometricCenter}</span>
                </div>
                <div className="text-[11px] text-slate-600">
                  {selectedCountryInfo.consularHub}
                </div>
              </div>
            )}
          </div>

          {/* Education Level */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Niveau de diplôme le plus élevé obtenu
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'master', label: 'Master / Diplôme d’Ingénieur (Bac+5)' },
                { id: 'bachelor', label: 'Licence / Bachelor (Bac+3)' },
                { id: 'tech', label: 'BTS / DUT / Diplôme technique (Bac+2)' },
                { id: 'phd', label: 'Doctorat / PhD / Médecine' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setDegree(item.id as any)}
                  className={`text-left p-2.5 rounded-lg border text-xs transition-colors ${
                    degree === item.id
                      ? 'border-blue-600 bg-blue-50/60 font-semibold text-blue-950'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Niveau de Français
              </label>
              <select
                value={frenchLevel}
                onChange={(e) => setFrenchLevel(e.target.value as any)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:ring-2 focus:ring-blue-600"
              >
                <option value="fluent">Courant / Langue maternelle (C1/C2)</option>
                <option value="intermediate">Intermédiaire (B1/B2)</option>
                <option value="basic">Débutant (A1/A2)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Niveau d'Anglais
              </label>
              <select
                value={englishLevel}
                onChange={(e) => setEnglishLevel(e.target.value as any)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:ring-2 focus:ring-blue-600"
              >
                <option value="fluent">Courant / Professionnel (IELTS 6.5+ ou C1)</option>
                <option value="intermediate">Intermédiaire (B1/B2)</option>
                <option value="basic">Débutant (A1/A2)</option>
              </select>
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Années d’expérience professionnelle cumulée
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'junior', label: '1 à 2 ans' },
                { id: 'mid', label: '3 à 5 ans (idéal)' },
                { id: 'senior', label: '6 ans et plus' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setExperience(item.id as any)}
                  className={`text-center p-2 rounded-lg border text-xs transition-colors ${
                    experience === item.id
                      ? 'border-blue-600 bg-blue-50/60 font-semibold text-blue-950'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sector */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Votre secteur d’activité principal
            </label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value as any)}
              className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:ring-2 focus:ring-blue-600"
            >
              <option value="tech">Informatique, Cloud, Data, Cybersécurité & Télécoms</option>
              <option value="health">Santé (Médecine, Soins infirmiers, Pharmacie)</option>
              <option value="btp">Ingénierie, Génie Civil & Bâtiment (BTP)</option>
              <option value="finance">Finance, Comptabilité, Audit & Gestion</option>
              <option value="other">Autre domaine spécialisé</option>
            </select>
          </div>

          {/* Passport checkbox */}
          <div className="pt-2">
            <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={hasPassport}
                onChange={(e) => setHasPassport(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
              />
              <span>J'ai un passeport en cours de validité (au moins 12 à 18 mois restants)</span>
            </label>
          </div>
        </div>

        {/* Right: Results Engine */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Résultat d'éligibilité personnalisée
            </div>

            {/* Top Match Highlight */}
            <div className="bg-slate-900 text-white rounded-xl p-4 mb-5">
              <div className="text-xs text-blue-300 font-medium mb-1">Meilleure opportunité détectée</div>
              <div className="text-xl font-bold flex items-center justify-between">
                <span>
                  {topCountry === 'Canada' && '🇨🇦 Canada'}
                  {topCountry === 'France' && '🇫🇷 France'}
                  {topCountry === 'Irlande' && '🇮🇪 Irlande'}
                  {topCountry === 'Nouvelle-Zélande' && '🇳🇿 Nouvelle-Zélande'}
                  {topCountry === 'Suisse' && '🇨🇭 Suisse'}
                </span>
                <span className="text-2xl font-extrabold text-blue-300 tabular-nums">
                  {scores[topCountry]}%
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {topCountry === 'Canada' &&
                  'Votre profil francophone vous rend directement admissible au Programme Mobilité Francophone d’IRCC (dispense d’EIMT / LMIA), l’une des voies d’expatriation les plus rapides au monde.'}
                {topCountry === 'France' &&
                  'Votre diplôme supérieur et votre français vous permettent de viser un titre Passeport Talent Salarié Qualifié ou les métiers en tension.'}
                {topCountry === 'Irlande' &&
                  'Votre niveau d’anglais et vos compétences correspondent à la liste des métiers hautement critiques (Critical Skills Occupations List).'}
                {topCountry === 'Nouvelle-Zélande' &&
                  'Votre métier figure sur la Green List d’Immigration New Zealand, avec procédure accélérée vers la résidence.'}
                {topCountry === 'Suisse' &&
                  'Votre haut niveau d’expertise vous positionne sur les contingents de permis B pour spécialistes de pays tiers.'}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onFilterByCountry(topCountry as TargetCountry)}
                  className="text-xs font-semibold text-white underline hover:text-blue-200"
                >
                  Voir les offres au {topCountry} →
                </button>
              </div>
            </div>

            {/* Breakdown for all 5 countries */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Indice de faisabilité par pays
              </div>

              {[
                { name: 'Canada', flag: '🇨🇦', program: 'Mobilité Francophone' },
                { name: 'France', flag: '🇫🇷', program: 'Passeport Talent (4 ans)' },
                { name: 'Irlande', flag: '🇮🇪', program: 'Critical Skills Permit' },
                { name: 'Nouvelle-Zélande', flag: '🇳🇿', program: 'Green List AEWV' },
                { name: 'Suisse', flag: '🇨🇭', program: 'Permis B Cadres' }
              ].map((c) => {
                const score = scores[c.name as keyof typeof scores];
                return (
                  <div key={c.name} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100 last:border-0">
                    <div>
                      <div className="font-bold text-slate-800 flex items-center gap-1.5">
                        <span>{c.flag}</span>
                        <span>{c.name}</span>
                      </div>
                      <div className="text-[11px] text-slate-500">{c.program}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-blue-700 h-2 rounded-full"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <span className="font-extrabold text-slate-900 tabular-nums w-8 text-right">
                        {score}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pan-African Passport Status */}
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span className="flex items-center gap-1.5">
                  <span className="text-base">{selectedCountryInfo.flag}</span>
                  <span>Passeport {selectedCountryInfo.name}</span>
                </span>
                <span className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200 font-bold px-2 py-0.5 rounded">
                  100% Admissible
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Les candidats de <strong>{selectedCountryInfo.name}</strong> et des 53 autres pays africains bénéficient des mêmes droits d'embauche et parrainage de visa avec nos employeurs accrédités.
              </p>
            </div>

            {/* Recommendations */}
            <div className="mt-4 pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="font-bold text-slate-800">Conseil d'expert pour votre dossier :</div>
              <ul className="space-y-1 list-disc list-inside text-[11px]">
                <li>Faites certifier vos diplômes avec l'équivalence requise (ex: WES pour le Canada).</li>
                <li>Préparez votre CV au format international sans photo (norme nord-américaine).</li>
                <li>Assurez-vous que votre passeport comporte au moins 18 mois de validité résiduelle.</li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={onOpenCvBuilder}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-colors text-xs text-center block"
                >
                  Générer mon CV format international →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
