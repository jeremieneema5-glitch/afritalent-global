import React, { useState } from 'react';
import { CandidateProfile, TargetCountry } from '../types';

interface CvBuilderModalProps {
  candidateProfile: CandidateProfile;
  onClose: () => void;
  onSaveProfile: (updated: Partial<CandidateProfile>) => void;
  onOpenPricing?: () => void;
}

export const CvBuilderModal: React.FC<CvBuilderModalProps> = ({
  candidateProfile,
  onClose,
  onSaveProfile,
  onOpenPricing
}) => {
  const [format, setFormat] = useState<'canada' | 'europass' | 'commonwealth'>('canada');
  const [fullName, setFullName] = useState(candidateProfile.fullName);
  const [title, setTitle] = useState(candidateProfile.title);
  const [email, setEmail] = useState(candidateProfile.email);
  const [phone, setPhone] = useState(candidateProfile.phone || '+221 77 000 0000');
  const [cityCountry, setCityCountry] = useState(`${candidateProfile.currentCity}, ${candidateProfile.currentCountry}`);
  const [skillsText, setSkillsText] = useState(candidateProfile.skills.join(', '));
  const [bioSummary, setBioSummary] = useState(candidateProfile.bio);
  const [copied, setCopied] = useState(false);

  const getFormatTitle = () => {
    switch (format) {
      case 'canada':
        return 'Format Canadien (Normes IRCC / Sans photo ni âge)';
      case 'europass':
        return 'Format Européen (France & Suisse romande)';
      case 'commonwealth':
        return 'Format Commonwealth (Nouvelle-Zélande & Irlande)';
    }
  };

  const getRulesNotice = () => {
    switch (format) {
      case 'canada':
        return 'Règle essentielle pour le Canada : aucune photo, aucune mention d’âge, de situation maritale ou de religion (interdit par la loi canadienne sur les droits de la personne). Privilégiez les réalisations quantifiées.';
      case 'europass':
        return 'Pour la France et la Suisse : mise en avant des diplômes d’État ou équivalences ENIC-NARIC, compétences linguistiques selon l’échelle CECRL (B2, C1, C2).';
      case 'commonwealth':
        return 'Pour la Nouvelle-Zélande et l’Irlande : accent majeur sur les accréditations techniques, tests d’anglais officiels (IELTS/PTE) et coordonnées professionnelles directes.';
    }
  };

  const handleCopyText = () => {
    const formattedText = `
CURRICULUM VITAE - ${getFormatTitle().toUpperCase()}
--------------------------------------------------
${fullName.toUpperCase()}
${title}
Localisation : ${cityCountry}
Email : ${email} | Téléphone : ${phone}

RÉSUMÉ PROFESSIONNEL :
${bioSummary}

COMPÉTENCES CLÉS :
${skillsText.split(',').map(s => `• ${s.trim()}`).join('\n')}

QUALIFICATIONS & DIPLÔMES :
• ${candidateProfile.educationLevel}
• Statut Passeport : ${candidateProfile.passportValid ? 'Valide (> 18 mois)' : 'En cours'}
• Disponibilité pour mobilité internationale : ${candidateProfile.availability}

LANGUES :
${candidateProfile.languages.map(l => `• ${l.language} : niveau ${l.level}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveToProfile = () => {
    onSaveProfile({
      fullName,
      title,
      email,
      phone,
      bio: bioSummary,
      skills: skillsText.split(',').map(s => s.trim()).filter(Boolean)
    });
    alert('Profil et CV mis à jour avec succès !');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Générateur de CV aux Normes Internationales
            </h2>
            <div className="text-xs text-slate-500">
              Optimisé pour passer les filtres ATS et les recruteurs du Canada, de Suisse, de NZ, de France et d’Irlande
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
          {/* Format selector */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Sélectionnez la norme de destination :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setFormat('canada')}
                className={`p-3 rounded-xl border text-left text-xs transition-colors ${
                  format === 'canada'
                    ? 'border-blue-600 bg-blue-50/60 font-semibold text-blue-950'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="font-bold text-sm mb-0.5">🇨🇦 Format Canadien</div>
                <div className="text-[11px] text-slate-500">Sans photo ni âge · Standard ATS Amérique du Nord</div>
              </button>

              <button
                type="button"
                onClick={() => setFormat('europass')}
                className={`p-3 rounded-xl border text-left text-xs transition-colors ${
                  format === 'europass'
                    ? 'border-blue-600 bg-blue-50/60 font-semibold text-blue-950'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="font-bold text-sm mb-0.5">🇫🇷 🇨🇭 Format France & Suisse</div>
                <div className="text-[11px] text-slate-500">Cadre européen · Diplômes & Équivalences</div>
              </button>

              <button
                type="button"
                onClick={() => setFormat('commonwealth')}
                className={`p-3 rounded-xl border text-left text-xs transition-colors ${
                  format === 'commonwealth'
                    ? 'border-blue-600 bg-blue-50/60 font-semibold text-blue-950'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="font-bold text-sm mb-0.5">🇳🇿 🇮🇪 Format Commonwealth</div>
                <div className="text-[11px] text-slate-500">Nouvelle-Zélande & Irlande · Focus compétences critiques</div>
              </button>
            </div>

            {/* Anti-rejection notice */}
            <div className="mt-2.5 p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
              💡 <strong>Attention :</strong> {getRulesNotice()}
            </div>

            {onOpenPricing && (
              <div className="mt-2.5 p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong>Besoin d'un accompagnement personnalisé ?</strong> Coaching CV, préparation linguistique (TCF/IELTS) et simulation d'entretiens.
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPricing();
                  }}
                  className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs whitespace-nowrap self-start sm:self-center shrink-0"
                >
                  Pack Accompagnement (125 $) →
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Input Form */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Vos informations professionnelles
              </h3>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Titre de poste visé</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Téléphone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Localisation actuelle</label>
                <input
                  type="text"
                  value={cityCountry}
                  onChange={(e) => setCityCountry(e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Compétences clés (séparées par des virgules)</label>
                <textarea
                  rows={2}
                  value={skillsText}
                  onChange={(e) => setSkillsText(e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Profil & Résumé d'expérience</label>
                <textarea
                  rows={4}
                  value={bioSummary}
                  onChange={(e) => setBioSummary(e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={handleSaveToProfile}
                  className="flex-1 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Sauvegarder dans mon profil
                </button>
              </div>
            </div>

            {/* Right: Preview formatted CV */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-4">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Aperçu conforme aux normes
                  </span>
                  <span className="text-[11px] text-blue-900 font-semibold">
                    {getFormatTitle()}
                  </span>
                </div>

                {/* CV Document Box */}
                <div className="bg-white border border-slate-200 p-6 rounded-lg font-sans text-slate-800 space-y-4 shadow-xs">
                  {/* CV Header */}
                  <div className="border-b border-slate-200 pb-3">
                    <h1 className="text-xl font-bold tracking-tight text-slate-900 uppercase">
                      {fullName}
                    </h1>
                    <div className="text-sm font-semibold text-blue-900 mt-0.5">
                      {title}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-2">
                      <span>{cityCountry}</span>
                      <span aria-hidden="true">·</span>
                      <span>{email}</span>
                      <span aria-hidden="true">·</span>
                      <span>{phone}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1 mb-1.5">
                      Profil & Projet de Mobilité
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {bioSummary}
                    </p>
                  </div>

                  {/* Key Skills */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1 mb-1.5">
                      Compétences Clés & Technologies
                    </h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-slate-700">
                      {skillsText.split(',').map((s, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="text-slate-400">•</span>
                          <span>{s.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education & Visa Readiness */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1 mb-1.5">
                      Formation & Disponibilité Internationale
                    </h4>
                    <div className="text-xs text-slate-700 space-y-1">
                      <div>• <strong>Diplôme :</strong> {candidateProfile.educationLevel}</div>
                      <div>• <strong>Validité Passeport :</strong> {candidateProfile.passportValid ? 'Valide (> 18 mois)' : 'En cours'}</div>
                      <div>• <strong>Délai de départ :</strong> {candidateProfile.availability} (procédures de visa comprises)</div>
                      <div>• <strong>Langues :</strong> {candidateProfile.languages.map(l => `${l.language} (${l.level})`).join(' · ')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  {copied ? '✓ CV copié dans le presse-papier !' : 'Copier le texte du CV'}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
                >
                  Imprimer / Exporter en PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
