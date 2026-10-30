import React from 'react';

interface FooterProps {
  setActiveTab: (tab: 'jobs' | 'talents' | 'simulator' | 'guides' | 'cv-builder' | 'dashboard' | 'cost-of-living' | 'interview-prep' | 'events') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-1 space-y-3">
            <div className="text-base font-extrabold text-slate-900 tracking-tight">
              AfriTalent Global
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              La plateforme de référence reliant les talents et professionnels du continent africain aux opportunités de travail internationales avec parrainage de visa au Canada, en Suisse, en Nouvelle-Zélande, en France et en Irlande.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">
              Outils & Carrière
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('jobs')}
                  className="hover:text-slate-900 transition-colors"
                >
                  Offres d’Emploi & Sourcing Indeed
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('simulator')}
                  className="hover:text-slate-900 transition-colors"
                >
                  Simulateur d’Éligibilité Visa
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('cost-of-living')}
                  className="hover:text-slate-900 transition-colors"
                >
                  Calculateur de Coût de Vie & Épargne FCFA
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('interview-prep')}
                  className="hover:text-slate-900 transition-colors"
                >
                  Simulateur d’Entretiens STAR
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('events')}
                  className="hover:text-slate-900 transition-colors"
                >
                  Missions & Salons de Recrutement 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('cv-builder')}
                  className="hover:text-slate-900 transition-colors"
                >
                  Générateur de CV Canadien & Europass
                </button>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <div className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">
              Pays Partenaires
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('guides')}
                  className="hover:text-slate-900 transition-colors"
                >
                  🇨🇦 Canada · Mobilité Francophone
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('guides')}
                  className="hover:text-slate-900 transition-colors"
                >
                  🇨🇭 Suisse · Permis B & Cadres
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('guides')}
                  className="hover:text-slate-900 transition-colors"
                >
                  🇳🇿 Nouvelle-Zélande · Green List AEWV
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('guides')}
                  className="hover:text-slate-900 transition-colors"
                >
                  🇫🇷 France · Passeport Talent 4 ans
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('guides')}
                  className="hover:text-slate-900 transition-colors"
                >
                  🇮🇪 Irlande · Critical Skills Permit
                </button>
              </li>
            </ul>
          </div>

          {/* Ethics & Compliance */}
          <div>
            <div className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">
              Conformité & Droits
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
              Conforme aux réglementations de l’Organisation Internationale du Travail (OIT) sur le recrutement équitable. Aucun frais exigé aux travailleurs pour leur embauche.
            </p>
            <div className="text-[11px] text-slate-500">
              Contact : <a href="mailto:afritalentglobal@gmail.com" className="text-slate-800 font-semibold hover:underline">afritalentglobal@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} AfriTalent Global. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <span>Confidentialité</span>
            <span aria-hidden="true">·</span>
            <span>Conditions d'utilisation</span>
            <span aria-hidden="true">·</span>
            <span>Accompagnement consulaire</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
