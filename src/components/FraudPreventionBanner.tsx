import React, { useState } from 'react';

export const FraudPreventionBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-slate-200 border-t border-slate-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold shrink-0 text-sm">
              ⚖️
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Charte de Recrutement Équitable · Modèle 100% Gratuit pour les Candidats
              </div>
              <p className="text-xs text-slate-300 mt-0.5 max-w-3xl leading-relaxed">
                Conformément aux normes internationales du travail (OIT Convention 181), postuler sur AfriTalent Global est <strong>totalement gratuit</strong> pour les talents d'Afrique. Les forfaits de sélection et de démarches sont financés exclusivement par les entreprises étrangères recruteuses.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 border border-slate-700"
          >
            {isOpen ? 'Masquer la charte' : 'Consulter la charte d’engagement'}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
              <div className="font-bold text-white mb-1">1. Gratuité totale pour les candidats</div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                L'inscription, la consultation des offres, la création de CV et le dépôt de candidature ne font l'objet d'aucune facturation pour les talents.
              </p>
            </div>

            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
              <div className="font-bold text-white mb-1">2. Modèle financé par les employeurs</div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                Les entreprises au Canada, Suisse, NZ, France et Irlande souscrivent des forfaits B2B pour diffuser leurs offres et accéder au vivier de profils qualifiés.
              </p>
            </div>

            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
              <div className="font-bold text-white mb-1">3. Entretiens vidéo et vérification</div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                Toutes les entreprises sont accréditées et organisent des entretiens directs en visio pour confirmer les compétences avant toute offre formelle.
              </p>
            </div>

            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
              <div className="font-bold text-white mb-1">4. Démarches de visa officielles</div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                Les démarches migratoires sont initiées auprès des ministères et centres consulaires officiels (IRCC, SEM, INZ, DREETS, DETE) sans intermédiaires informels.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
