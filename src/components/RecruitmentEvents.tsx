import React, { useState } from 'react';
import { RECRUITMENT_EVENTS } from '../data/mockData';
import { TargetCountry } from '../types';

export const RecruitmentEvents: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<TargetCountry | 'Tous'>('Tous');

  const filteredEvents = RECRUITMENT_EVENTS.filter(e =>
    selectedCountry === 'Tous' ? true : e.country === selectedCountry
  );

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
            <span>Agenda Officiel Afrique ⇄ International</span>
            <span aria-hidden="true">·</span>
            <span>Missions d'Embauche Directe</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Salons & Missions de Recrutement International
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Événements officiels organisés par les ministères de l'immigration et consortiums d'entreprises pour recruter des talents d'Afrique.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          {(['Tous', 'Canada', 'Suisse', 'Nouvelle-Zélande'] as const).map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCountry(c)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCountry === c
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="border border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between bg-slate-50/30"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>📍 {event.format}</span>
                </span>
                <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                  event.status === 'Inscriptions Ouvertes'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {event.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1">
                {event.title}
              </h3>

              <div className="text-xs text-blue-900 font-medium mb-3">
                Organisateur : {event.organizer}
              </div>

              <div className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80 mb-4 leading-relaxed">
                {event.description}
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                <div>📅 <strong>Dates :</strong> {event.date}</div>
                <div>
                  💼 <strong>Secteurs prioritaires :</strong> {event.sectors.join(', ')}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">Participation 100% gratuite</span>
              <button
                onClick={() => alert(`Lien vers le portail officiel : ${event.registrationLinkText}. Vérifiez vos critères d'admissibilité avant de vous connecter.`)}
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors whitespace-nowrap"
              >
                {event.registrationLinkText} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
