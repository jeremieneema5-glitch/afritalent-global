import React, { useState } from 'react';

interface RecruiterPricingModalProps {
  onClose: () => void;
  onSelectPlan: (planName: string) => void;
  initialCategory?: 'candidat' | 'recruteur' | 'all';
}

export const RecruiterPricingModal: React.FC<RecruiterPricingModalProps> = ({
  onClose,
  onSelectPlan,
  initialCategory = 'all'
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'candidat' | 'recruteur'>(initialCategory);
  const [selectedPlan, setSelectedPlan] = useState<string>('candidate-pack');
  const [isBookingCandidatePack, setIsBookingCandidatePack] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Form state for Candidate Coaching Pack ($125)
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [targetDestination, setTargetDestination] = useState('Canada');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'Refonte & Optimisation CV International',
    'Préparation Linguistique (TCF / IELTS)',
    'Simulation d’Entretiens en Visioconférence'
  ]);

  const toggleModule = (moduleName: string) => {
    if (selectedModules.includes(moduleName)) {
      setSelectedModules(selectedModules.filter(m => m !== moduleName));
    } else {
      setSelectedModules([...selectedModules, moduleName]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) {
      alert('Veuillez renseigner votre nom et votre adresse email.');
      return;
    }
    setBookingSuccess(true);
  };

  const plans = [
    {
      id: 'starter',
      category: 'recruteur',
      target: 'Pour Entreprises',
      name: 'Pack Offre Unique',
      price: '290 $',
      period: 'par offre publiée',
      badge: 'Recruteurs Internationaux',
      description: 'Pour une entreprise étrangère (Canada, Suisse, NZ, France, Irlande) souhaitant pourvoir un poste clé avec visa.',
      features: [
        'Publication de 1 offre avec label Visa Vérifié (60 jours)',
        'Accès direct aux candidatures qualifiées et dossiers complets',
        'Messagerie directe et planification d’entretiens vidéo',
        'Vérification des passeports et diplômes des postulants',
        'Support administratif de conformité consulaire'
      ],
      cta: 'Publier sous ce forfait'
    },
    {
      id: 'candidate-pack',
      category: 'candidat',
      target: 'Pour Candidats',
      name: 'Pack Accompagnement Carrière & Mobilité',
      price: '125 $',
      period: 'forfait complet d’accompagnement',
      badge: 'Spécial Candidats d’Afrique',
      popular: true,
      description: 'Un accompagnement intensif et personnalisé pour maximiser vos chances d’embauche et réussir vos démarches de visa.',
      features: [
        'Refonte intégrale de votre CV aux normes strictes (Canada sans photo/ATS, Europass)',
        'Préparation linguistique intensive aux tests officiels (TCF Canada, TEF, IELTS)',
        'Simulation d’entretien d’embauche en visioconférence avec conseils personnalisés',
        'Guide et assistance pour vos équivalences de diplôme (WES, ENIC-NARIC)',
        'Revue approfondie de votre lettre de motivation et dossier consulaire',
        'Mise en avant prioritaire de votre profil auprès des recruteurs partenaires'
      ],
      legalNote: 'Service optionnel d’assistance et de formation. Les candidatures aux offres d’emploi restent 100% libres et gratuites.',
      cta: 'Réserver mon accompagnement (125 $)'
    },
    {
      id: 'custom',
      category: 'recruteur',
      target: 'Pour Entreprises',
      name: 'Mandat Clé en Main (Chasse)',
      price: 'Commission au succès',
      period: '12% du salaire annuel',
      badge: 'Grands Groupes & Hôpitaux',
      description: 'Déléguez l’intégralité du sourcing, des tests techniques et du suivi de visa jusqu’à l’atterrissage du candidat.',
      features: [
        'Chasse de tête dédiée parmi plus de 50 000 professionnels africains',
        'Préqualification technique et vérification approfondie des diplômes',
        'Accompagnement par des avocats d’immigration partenaires',
        'Garantie de remplacement de 90 jours',
        'Paiement 100% au succès après embauche définitive'
      ],
      cta: 'Demander un devis entreprise'
    }
  ];

  const filteredPlans = plans.filter(p => activeCategory === 'all' || p.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 uppercase tracking-wider mb-0.5">
              <span>Solutions & Forfaits AfriTalent Global</span>
              <span aria-hidden="true">·</span>
              <span>Canada · Suisse · Nouvelle-Zélande · France · Irlande</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Offres Entreprises & Accompagnement Candidats
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg"
          >
            ✕
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Segmented Filter */}
          <div className="flex items-center justify-center">
            <div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-semibold text-slate-600">
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setIsBookingCandidatePack(false);
                }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === 'all' && !isBookingCandidatePack
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'hover:text-slate-900'
                }`}
              >
                Tous les forfaits
              </button>
              <button
                onClick={() => {
                  setActiveCategory('candidat');
                  setIsBookingCandidatePack(false);
                }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === 'candidat' && !isBookingCandidatePack
                    ? 'bg-white text-blue-900 shadow-xs'
                    : 'hover:text-slate-900'
                }`}
              >
                Candidats : Accompagnement (125 $)
              </button>
              <button
                onClick={() => {
                  setActiveCategory('recruteur');
                  setIsBookingCandidatePack(false);
                }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === 'recruteur' && !isBookingCandidatePack
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'hover:text-slate-900'
                }`}
              >
                Recruteurs & Entreprises (290 $)
              </button>
            </div>
          </div>

          {/* Conditional View: Booking Form for Candidate Pack or Plan Cards */}
          {isBookingCandidatePack ? (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              {bookingSuccess ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Demande d'accompagnement enregistrée !
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Merci <strong>{applicantName}</strong>. Un conseiller expert en mobilité internationale et préparation de dossier examinera vos informations sous 24h ouvrées à l’adresse <strong>{applicantEmail}</strong>. Pour toute question directe, vous pouvez nous joindre à <a href="mailto:afritalentglobal@gmail.com" className="font-semibold text-blue-700 underline">afritalentglobal@gmail.com</a>.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsBookingCandidatePack(false);
                        setBookingSuccess(false);
                        onClose();
                      }}
                      className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg"
                    >
                      Retourner à la plateforme
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3 mb-4">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                      Inscription au Programme d'Accompagnement
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Pack Accompagnement Carrière & Mobilité (125 $)
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Préparez votre candidature, vos certifications de langue et réussissez vos entretiens avec les entreprises étrangères.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nom et Prénom *
                      </label>
                      <input
                        type="text"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Ex: Jean-Luc Kouamé"
                        className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Adresse Email *
                      </label>
                      <input
                        type="email"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="Ex: jeanluc@example.com"
                        className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Téléphone / WhatsApp de contact
                      </label>
                      <input
                        type="text"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="Ex: +225 07 00 00 00"
                        className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Pays cible prioritaire
                      </label>
                      <select
                        value={targetDestination}
                        onChange={(e) => setTargetDestination(e.target.value)}
                        className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg"
                      >
                        <option value="Canada">🇨🇦 Canada (Mobilité Francophone)</option>
                        <option value="Suisse">🇨🇭 Suisse (Permis B / Cadres)</option>
                        <option value="Nouvelle-Zélande">🇳🇿 Nouvelle-Zélande (Green List)</option>
                        <option value="France">🇫🇷 France (Passeport Talent)</option>
                        <option value="Irlande">🇮🇪 Irlande (Critical Skills)</option>
                      </select>
                    </div>
                  </div>

                  {/* Modules selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Branches et modules d'accompagnement souhaités :
                    </label>
                    <div className="space-y-2 text-xs">
                      {[
                        'Refonte & Optimisation CV International (Normes ATS Canada / Europass)',
                        'Préparation Linguistique (Coaching TCF Canada, TEF, IELTS)',
                        'Simulation d’Entretiens en Visioconférence avec débriefing',
                        'Assistance aux équivalences de diplômes (WES / ENIC-NARIC)',
                        'Mise en avant prioritaire du profil auprès des entreprises partenaires'
                      ].map((mod) => (
                        <label key={mod} className="flex items-center gap-2 cursor-pointer text-slate-700">
                          <input
                            type="checkbox"
                            checked={selectedModules.includes(mod)}
                            onChange={() => toggleModule(mod)}
                            className="rounded border-slate-300 text-blue-700 focus:ring-blue-600 w-4 h-4"
                          />
                          <span>{mod}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-[11px] text-blue-950 leading-relaxed">
                    ℹ️ <strong>Tarif forfaitaire : 125 $ US.</strong> Un récapitulatif détaillé et votre planning de coaching personnalisé vous seront envoyés. Conformément à la déontologie, ce coaching est facultatif : l'accès libre aux offres d'emploi reste garanti à tout candidat.
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setIsBookingCandidatePack(false)}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      ← Retour aux forfaits
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg shadow-xs"
                    >
                      Confirmer ma demande d'accompagnement (125 $)
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredPlans.map((p) => {
                const isSelected = selectedPlan === p.id;
                return (
                  <div
                    key={p.id}
                    className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                      p.popular
                        ? 'border-blue-600 bg-blue-50/20 shadow-md ring-1 ring-blue-600'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          {p.target}
                        </span>
                        {p.popular && (
                          <span className="bg-blue-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {p.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-slate-900 mb-3">
                        {p.name}
                      </h3>

                      <div className="mb-4">
                        <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
                          {p.price}
                        </div>
                        <div className="text-xs text-slate-500">{p.period}</div>
                      </div>

                      <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                        {p.description}
                      </p>

                      <div className="border-t border-slate-100 pt-4 mb-5">
                        <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                          Inclus dans ce forfait :
                        </div>
                        <ul className="space-y-2 text-xs text-slate-700">
                          {p.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {p.legalNote && (
                        <div className="text-[10px] text-slate-500 italic mb-4">
                          * {p.legalNote}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setSelectedPlan(p.id);
                        if (p.id === 'candidate-pack') {
                          setIsBookingCandidatePack(true);
                        } else {
                          onSelectPlan(p.name);
                        }
                      }}
                      className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        p.popular
                          ? 'bg-blue-700 hover:bg-blue-800 text-white shadow-xs'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {p.cta}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Trust Indicators */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
            <div>
              <div className="font-bold text-slate-900 mb-0.5">🎓 CV & Préparation Linguistique</div>
              <p className="text-slate-500 text-[11px]">
                Adaptation au marché canadien, suisse ou européen avec coaching pour tests TCF, TEF et IELTS.
              </p>
            </div>
            <div>
              <div className="font-bold text-slate-900 mb-0.5">🏢 Forfaits Entreprises Déductibles</div>
              <p className="text-slate-500 text-[11px]">
                Factures officielles émises pour vos recrutements de talents internationaux.
              </p>
            </div>
            <div>
              <div className="font-bold text-slate-900 mb-0.5">⚖️ Respect de la Convention OIT 181</div>
              <p className="text-slate-500 text-[11px]">
                L'accès aux offres d'emploi reste 100% gratuit et ouvert pour tous les candidats africains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
