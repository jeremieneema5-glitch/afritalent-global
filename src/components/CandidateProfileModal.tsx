import React, { useState } from 'react';
import { CandidateProfile, TargetCountry, Application } from '../types';

interface CandidateProfileModalProps {
  profile: CandidateProfile;
  applications: Application[];
  onClose: () => void;
  onUpdateProfile: (updated: Partial<CandidateProfile>) => void;
  onOpenCvBuilder: () => void;
}

import { ALL_AFRICAN_COUNTRIES } from '../data/africanCountries';

export const CandidateProfileModal: React.FC<CandidateProfileModalProps> = ({
  profile,
  applications,
  onClose,
  onUpdateProfile,
  onOpenCvBuilder
}) => {
  const [fullName, setFullName] = useState(profile.fullName);
  const [title, setTitle] = useState(profile.title);
  const [currentCountry, setCurrentCountry] = useState(profile.currentCountry);
  const [currentCity, setCurrentCity] = useState(profile.currentCity);
  const [educationLevel, setEducationLevel] = useState(profile.educationLevel);
  const [yearsOfExperience, setYearsOfExperience] = useState(profile.yearsOfExperience);
  const [passportValid, setPassportValid] = useState(profile.passportValid);
  const [availability, setAvailability] = useState(profile.availability);
  const [bio, setBio] = useState(profile.bio);
  const [targetCountries, setTargetCountries] = useState<TargetCountry[]>(profile.targetCountries);

  const toggleTargetCountry = (country: TargetCountry) => {
    if (targetCountries.includes(country)) {
      setTargetCountries(targetCountries.filter(c => c !== country));
    } else {
      setTargetCountries([...targetCountries, country]);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      fullName,
      title,
      currentCountry,
      currentCity,
      educationLevel,
      yearsOfExperience,
      passportValid,
      availability,
      bio,
      targetCountries
    });
    alert('Profil candidat mis à jour avec succès !');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Dossier Candidat & Mobilité Internationale
            </h2>
            <div className="text-xs text-slate-500">
              Vos informations visibles par les recruteurs du Canada, de Suisse, de NZ, de France et d'Irlande
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Applications tracker if any */}
          {applications.length > 0 && (
            <div className="border border-slate-200 bg-slate-50 rounded-xl p-4">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Mes candidatures en cours ({applications.length})
              </h3>
              <div className="space-y-2">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    className="bg-white border border-slate-200 rounded-lg p-3 text-xs flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-slate-900">{app.jobTitle}</div>
                      <div className="text-slate-600">{app.company} · Postulé le {app.appliedDate}</div>
                    </div>
                    <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Titre de spécialité</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Pays de résidence en Afrique</label>
                <select
                  value={currentCountry}
                  onChange={(e) => {
                    const nextCountry = e.target.value;
                    setCurrentCountry(nextCountry);
                    const found = ALL_AFRICAN_COUNTRIES.find(c => c.name === nextCountry);
                    if (found && (!currentCity || currentCity === 'Dakar')) {
                      setCurrentCity(found.capital.split('/')[0].trim());
                    }
                  }}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium"
                >
                  {ALL_AFRICAN_COUNTRIES.map((c) => (
                    <option key={c.code} value={c.name}>
                      {c.flag} {c.name} ({c.region})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Ville de résidence</label>
                <input
                  type="text"
                  value={currentCity}
                  onChange={(e) => setCurrentCity(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Niveau d'études</label>
                <select
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value as any)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                >
                  <option value="Licence / Bachelor">Licence / Bachelor (Bac+3)</option>
                  <option value="Master / Ingénieur">Master / Ingénieur (Bac+5)</option>
                  <option value="Doctorat (PhD)">Doctorat (PhD) / Médecine</option>
                  <option value="BTS / DUT / Diplôme Technique">BTS / DUT / Diplôme Technique</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Années d'expérience professionnelle</label>
                <input
                  type="number"
                  min="0"
                  max="40"
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(Number(e.target.value))}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>
            </div>

            {/* Target Countries Checkboxes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Pays cibles d'immigration & travail :
              </label>
              <div className="flex flex-wrap gap-2">
                {(['Canada', 'Suisse', 'Nouvelle-Zélande', 'France', 'Irlande'] as TargetCountry[]).map((c) => {
                  const isChecked = targetCountries.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => toggleTargetCountry(c)}
                      className={`px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                        isChecked
                          ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '} {c}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Passport & Availability */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={passportValid}
                  onChange={(e) => setPassportValid(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span>Passeport valide (&gt; 1 an)</span>
              </label>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Disponibilité pour départ</label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value as any)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                >
                  <option value="Immédiate">Immédiate (dès visa accordé)</option>
                  <option value="1 mois">1 mois</option>
                  <option value="3 mois">3 mois</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Bio professionnelle & motivations pour l'expatriation
              </label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
              />
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={onOpenCvBuilder}
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold"
              >
                Générer mon CV format Canada / Europe →
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
              >
                Enregistrer les modifications
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
