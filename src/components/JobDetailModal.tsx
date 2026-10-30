import React, { useState } from 'react';
import { JobOffer, CandidateProfile } from '../types';

interface JobDetailModalProps {
  job: JobOffer | null;
  onClose: () => void;
  candidateProfile: CandidateProfile;
  hasApplied: boolean;
  onApply: (jobId: string, coverNote: string) => void;
  onOpenDirectChat: (companyName: string, jobTitle: string) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  onClose,
  candidateProfile,
  hasApplied,
  onApply,
  onOpenDirectChat
}) => {
  if (!job) return null;

  const [coverNote, setCoverNote] = useState<string>(
    `Bonjour,\n\nJe suis très intéressé(e) par ce poste de ${job.title} au sein de ${job.company}. Résidant actuellement en Afrique (${candidateProfile.currentCountry}), je dispose d'un passeport valide et de l'expérience requise pour entamer la procédure de visa ${job.visaProgram}.\n\nJe reste à votre entière disposition pour un premier échange en visioconférence.`
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [justApplied, setJustApplied] = useState(false);

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onApply(job.id, coverNote);
      setIsSubmitting(false);
      setJustApplied(true);
    }, 400);
  };

  const countryFlags: Record<string, string> = {
    'Canada': '🇨🇦',
    'Suisse': '🇨🇭',
    'Nouvelle-Zélande': '🇳🇿',
    'France': '🇫🇷',
    'Irlande': '🇮🇪'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
            <span>{countryFlags[job.country]} {job.country}</span>
            <span aria-hidden="true">·</span>
            <span>{job.city}</span>
            <span aria-hidden="true">·</span>
            <span className="text-blue-900 font-bold">{job.visaStatus}</span>
            {job.source && (
              <>
                <span aria-hidden="true">·</span>
                <span className="bg-blue-50 text-blue-900 border border-blue-200 px-2 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1">
                  <span>🌐</span>
                  <span>{job.source}</span>
                </span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Job Title & Company */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">{job.title}</h2>
            <div className="text-sm font-semibold text-slate-700 mb-2">{job.company}</div>

            {/* Salary Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs text-slate-500 font-medium">Rémunération proposée</div>
                <div className="text-lg font-extrabold text-slate-900 tabular-nums">
                  {job.salary.amount} {job.salary.currency} / {job.salary.period}
                </div>
                {job.salary.estimatedXofMonthly && (
                  <div className="text-xs text-blue-900 font-medium">
                    Soit environ {job.salary.estimatedXofMonthly}
                  </div>
                )}
              </div>
              <div className="text-xs text-slate-600 sm:text-right">
                <div>Type de contrat : <strong className="text-slate-800">{job.contractType}</strong></div>
                <div>Mode de travail : <strong className="text-slate-800">{job.workType}</strong></div>
              </div>
            </div>
          </div>

          {/* Relocation & Visa Package */}
          <div className="border border-blue-100 bg-blue-50/40 rounded-xl p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-950 mb-3 flex items-center gap-1.5">
              <span>✈️ Package d’Expatriation & Visa Garanti</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <div>
                  <strong>Programme de visa :</strong> {job.visaProgram}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <div>
                  <strong>Billet d'avion :</strong> {job.relocation.flightTicketProvided ? 'Pris en charge pour le candidat' : 'Non inclus'}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <div>
                  <strong>Hébergement à l'arrivée :</strong> {job.relocation.initialHousingWeeks} semaines fournies par l'entreprise
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <div>
                  <strong>Avocat en droit de l'immigration :</strong> {job.relocation.immigrationLawyerAssistance ? 'Accompagnement dédié offert' : 'Non inclus'}
                </div>
              </div>

              {job.relocation.settlingAllowance && (
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <div>
                    <strong>Prime d’installation :</strong> {job.relocation.settlingAllowance}
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <div>
                  <strong>Famille / Conjoint(e) :</strong> {job.relocation.familyRelocationSupport ? 'Assistance permis de travail ouvert pour conjoint' : 'Prise en charge individuelle'}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Description du poste</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Missions */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Responsabilités clés</h3>
            <ul className="space-y-1.5 text-sm text-slate-700">
              {job.missions.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Profil & Compétences requises</h3>
            <ul className="space-y-1.5 text-sm text-slate-700">
              {job.requirements.map((r, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-800">Langues de travail :</span>
            {job.spokenLanguages.join(' · ')}
          </div>

          {/* Application Form or Confirmation */}
          <div className="pt-4 border-t border-slate-200">
            {hasApplied || justApplied ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold text-lg mb-2">
                  ✓
                </div>
                <h4 className="text-base font-bold text-emerald-950 mb-1">Candidature transmise avec succès !</h4>
                <p className="text-xs text-emerald-800 mb-4 max-w-md mx-auto">
                  Votre dossier et profil ont été transmis directement au responsable recrutement de {job.company}. Vous recevrez une réponse sous 5 jours ouvrés.
                </p>
                <button
                  onClick={() => onOpenDirectChat(job.company, job.title)}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Ouvrir la discussion avec {job.company} →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">
                    Postuler directement auprès de l’entreprise
                  </h3>
                  <button
                    type="button"
                    onClick={() => onOpenDirectChat(job.company, job.title)}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900"
                  >
                    💬 Poser une question avant de postuler
                  </button>
                </div>

                {/* Candidate snapshot */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <strong>Candidat :</strong> {candidateProfile.fullName} ({candidateProfile.currentCountry})
                  </div>
                  <div>
                    <strong>Passeport :</strong> {candidateProfile.passportValid ? 'En cours de validité' : 'À renouveler'}
                  </div>
                  <div>
                    <strong>Disponibilité :</strong> {candidateProfile.availability}
                  </div>
                </div>

                <div>
                  <label htmlFor="cover-note-input" className="block text-xs font-semibold text-slate-800 mb-1">
                    Message de motivation & Synthèse du profil
                  </label>
                  <textarea
                    id="cover-note-input"
                    rows={4}
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    className="w-full text-xs p-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Présentez vos atouts et confirmez votre projet d'expatriation..."
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-[11px] text-slate-500">
                    🔒 Aucune démarche payante requise. Vos données sont protégées.
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shadow-xs"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
