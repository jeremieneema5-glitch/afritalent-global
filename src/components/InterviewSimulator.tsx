import React, { useState } from 'react';
import { INTERVIEW_PREP_QUESTIONS } from '../data/mockData';
import { TargetCountry } from '../types';

export const InterviewSimulator: React.FC = () => {
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<TargetCountry | 'Tous'>('Tous');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(INTERVIEW_PREP_QUESTIONS[0].id);

  const filteredQuestions = INTERVIEW_PREP_QUESTIONS.filter(q =>
    selectedCountryFilter === 'Tous' ? true : q.country === selectedCountryFilter
  );

  const activeQuestion = INTERVIEW_PREP_QUESTIONS.find(q => q.id === selectedQuestionId) || filteredQuestions[0];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
            <span>Coaching & Réussite aux Recrutements</span>
            <span aria-hidden="true">·</span>
            <span>Méthode STAR Validée</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Simulateur d’Entretiens Internationaux
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Préparez vos réponses aux questions les plus fréquemment posées par les recruteurs du Canada, de Suisse, de NZ, de France et d'Irlande.
          </p>
        </div>

        {/* Country Filter */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          {(['Tous', 'Canada', 'Suisse', 'Nouvelle-Zélande', 'France'] as const).map((c) => (
            <button
              key={c}
              onClick={() => {
                setSelectedCountryFilter(c);
                const first = INTERVIEW_PREP_QUESTIONS.find(q => c === 'Tous' ? true : q.country === c);
                if (first) setSelectedQuestionId(first.id);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCountryFilter === c
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Questions list */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Questions types ({filteredQuestions.length})
          </div>
          {filteredQuestions.map((q) => {
            const isSelected = q.id === activeQuestion.id;
            return (
              <button
                key={q.id}
                onClick={() => setSelectedQuestionId(q.id)}
                className={`w-full text-left p-4 rounded-xl border text-xs transition-all ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/40 shadow-xs ring-1 ring-blue-600'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                  <span className="font-bold text-slate-800">{q.country}</span>
                  <span className="text-blue-900 font-medium">{q.category}</span>
                </div>
                <div className="font-semibold text-slate-900 line-clamp-2">
                  {q.question}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Formula & Answer Architecture */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 mb-1">
              <span>{activeQuestion.country}</span>
              <span>·</span>
              <span>Catégorie : {activeQuestion.category}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              « {activeQuestion.question} »
            </h3>
            <p className="text-xs text-slate-600 mt-2 bg-white p-3 rounded-lg border border-slate-200/80 leading-relaxed">
              🎯 <strong>Ce que cherche à évaluer le recruteur :</strong> {activeQuestion.context}
            </p>
          </div>

          {/* STAR Framework Formula */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Structure de réponse idéale (Méthode STAR)
            </h4>

            <div className="bg-white border border-slate-200 rounded-xl p-3 text-xs space-y-1">
              <div className="font-bold text-blue-900">1. S & T (Situation & Tâche)</div>
              <p className="text-slate-600 leading-relaxed">{activeQuestion.idealAnswerFormula.situation}</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3 text-xs space-y-1">
              <div className="font-bold text-blue-900">2. A (Action individuelle)</div>
              <p className="text-slate-600 leading-relaxed">{activeQuestion.idealAnswerFormula.action}</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3 text-xs space-y-1">
              <div className="font-bold text-blue-900">3. R (Résultat concret & chiffré)</div>
              <p className="text-slate-600 leading-relaxed">{activeQuestion.idealAnswerFormula.result}</p>
            </div>
          </div>

          {/* Advice for African talents */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 leading-relaxed">
            💡 <strong>Conseil clé pour les talents d'Afrique :</strong> {activeQuestion.tipsForAfricanTalents}
          </div>
        </div>
      </div>
    </div>
  );
};
