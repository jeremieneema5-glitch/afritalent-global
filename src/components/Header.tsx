import React from 'react';
import { TargetCountry } from '../types';

interface HeaderProps {
  activeTab: 'jobs' | 'talents' | 'simulator' | 'guides' | 'cv-builder' | 'dashboard' | 'cost-of-living' | 'interview-prep' | 'events';
  setActiveTab: (tab: 'jobs' | 'talents' | 'simulator' | 'guides' | 'cv-builder' | 'dashboard' | 'cost-of-living' | 'interview-prep' | 'events') => void;
  userRole: 'candidat' | 'recruteur';
  setUserRole: (role: 'candidat' | 'recruteur') => void;
  onOpenPostJob: () => void;
  onOpenPricing: () => void;
  onOpenProfile: () => void;
  onOpenMessages: () => void;
  unreadCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  userRole,
  setUserRole,
  onOpenPostJob,
  onOpenPricing,
  onOpenProfile,
  onOpenMessages,
  unreadCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => setActiveTab('jobs')}
            className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-blue-900 transition-colors text-left"
          >
            AfriTalent Global
          </button>

          {/* Zone 2: clean navigation links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 font-bold ${
                activeTab === 'dashboard' ? 'border-blue-700 text-blue-900' : 'border-transparent text-slate-700'
              }`}
            >
              Tableau de Bord
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
                activeTab === 'jobs' ? 'border-slate-900 text-slate-900 font-semibold' : 'border-transparent'
              }`}
            >
              Offres d'Emploi
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
                activeTab === 'simulator' ? 'border-slate-900 text-slate-900 font-semibold' : 'border-transparent'
              }`}
            >
              Simulateur Visa
            </button>
            <button
              onClick={() => setActiveTab('cost-of-living')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
                activeTab === 'cost-of-living' ? 'border-slate-900 text-slate-900 font-semibold' : 'border-transparent'
              }`}
            >
              Coût de Vie & FCFA
            </button>
            <button
              onClick={() => setActiveTab('interview-prep')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
                activeTab === 'interview-prep' ? 'border-slate-900 text-slate-900 font-semibold' : 'border-transparent'
              }`}
            >
              Entretiens STAR
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
                activeTab === 'events' ? 'border-slate-900 text-slate-900 font-semibold' : 'border-transparent'
              }`}
            >
              Salons & Missions
            </button>
            <button
              onClick={() => setActiveTab('cv-builder')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
                activeTab === 'cv-builder' ? 'border-slate-900 text-slate-900 font-semibold' : 'border-transparent'
              }`}
            >
              CV ATS
            </button>
            <button
              onClick={() => setActiveTab('talents')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
                activeTab === 'talents' ? 'border-slate-900 text-slate-900 font-semibold' : 'border-transparent'
              }`}
            >
              Talents
            </button>
          </nav>

          {/* Zone 3: 1 primary action area */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Messages */}
            <button
              onClick={onOpenMessages}
              aria-label="Messagerie"
              className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Role switch toggle */}
            <div className="hidden sm:flex items-center p-1 bg-slate-100 rounded-lg text-xs font-medium">
              <button
                onClick={() => setUserRole('candidat')}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  userRole === 'candidat' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Candidat
              </button>
              <button
                onClick={() => setUserRole('recruteur')}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  userRole === 'recruteur' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Recruteur
              </button>
            </div>

            {/* Primary Action Button */}
            {userRole === 'recruteur' ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenPricing}
                  className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
                >
                  Tarifs B2B
                </button>
                <button
                  onClick={onOpenPostJob}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-xs"
                >
                  + Publier une offre
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenPricing}
                  className="hidden sm:inline-flex px-3 py-2 text-xs font-semibold text-blue-900 hover:text-blue-950 border border-blue-200 rounded-lg bg-blue-50/70 hover:bg-blue-100 transition-colors whitespace-nowrap shrink-0"
                >
                  Pack Coaching (125 $)
                </button>
                <button
                  onClick={onOpenProfile}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap shrink-0 shadow-xs"
                >
                  Mon Profil & Dossier
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="xl:hidden flex items-center justify-between overflow-x-auto py-2.5 gap-4 border-t border-slate-100 text-xs font-medium text-slate-600">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`whitespace-nowrap shrink-0 font-bold ${activeTab === 'dashboard' ? 'text-blue-900' : 'text-slate-700'}`}
          >
            Tableau de Bord
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'jobs' ? 'text-slate-900 font-bold' : ''}`}
          >
            Offres
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'simulator' ? 'text-slate-900 font-bold' : ''}`}
          >
            Simulateur Visa
          </button>
          <button
            onClick={() => setActiveTab('cost-of-living')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'cost-of-living' ? 'text-slate-900 font-bold' : ''}`}
          >
            Coût de Vie & FCFA
          </button>
          <button
            onClick={() => setActiveTab('interview-prep')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'interview-prep' ? 'text-slate-900 font-bold' : ''}`}
          >
            Entretiens STAR
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'events' ? 'text-slate-900 font-bold' : ''}`}
          >
            Salons & Missions
          </button>
          <button
            onClick={() => setActiveTab('cv-builder')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'cv-builder' ? 'text-slate-900 font-bold' : ''}`}
          >
            CV ATS
          </button>
          <button
            onClick={() => setActiveTab('talents')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'talents' ? 'text-slate-900 font-bold' : ''}`}
          >
            Talents
          </button>
        </div>
      </div>
    </header>
  );
};
