import React, { useState } from 'react';
import { COST_OF_LIVING_DATA } from '../data/mockData';

export const CostOfLivingCalculator: React.FC = () => {
  const [selectedCityName, setSelectedCityName] = useState<string>('Montréal');
  const cityData = COST_OF_LIVING_DATA.find(c => c.city === selectedCityName) || COST_OF_LIVING_DATA[0];

  const [monthlyGrossSalary, setMonthlyGrossSalary] = useState<number>(cityData.averageSalarySenior);

  // When city changes, reset to default salary benchmark for that city
  const handleCityChange = (cityName: string) => {
    setSelectedCityName(cityName);
    const target = COST_OF_LIVING_DATA.find(c => c.city === cityName);
    if (target) {
      setMonthlyGrossSalary(target.averageSalarySenior);
    }
  };

  // Calculations
  const taxAmount = Math.round(monthlyGrossSalary * (cityData.avgTaxPercent / 100));
  const netSalary = Math.round(monthlyGrossSalary - taxAmount);
  const totalExpenses = cityData.avgRentOneBed + cityData.avgFoodMonthly + cityData.avgTransportMonthly;
  const estimatedSavings = Math.max(0, netSalary - totalExpenses);
  const savingsInXof = Math.round(estimatedSavings * cityData.xofExchangeRate);
  const netInXof = Math.round(netSalary * cityData.xofExchangeRate);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
            <span>Simulateur Financier d'Expatriation</span>
            <span aria-hidden="true">·</span>
            <span>Pouvoir d'Achat Réel</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Calculateur de Coût de la Vie & Épargne Nette Mensuelle
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Estimez précisément ce qu'il vous restera chaque mois après impôts, loyer, courses et transport.
          </p>
        </div>

        {/* City Segmented Selector */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          {COST_OF_LIVING_DATA.map((c) => (
            <button
              key={c.city}
              onClick={() => handleCityChange(c.city)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCityName === c.city
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {c.city} ({c.currency})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input & Expenses Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          {/* Salary Slider */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="gross-salary-input" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Salaire Mensuel Brut ({cityData.currency})
              </label>
              <div className="text-lg font-extrabold text-blue-900 tabular-nums">
                {monthlyGrossSalary.toLocaleString()} {cityData.currency} / mois
              </div>
            </div>
            <input
              id="gross-salary-input"
              type="range"
              min={3000}
              max={16000}
              step={250}
              value={monthlyGrossSalary}
              onChange={(e) => setMonthlyGrossSalary(Number(e.target.value))}
              className="w-full accent-blue-700 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>3 000 {cityData.currency} (Junior)</span>
              <span>8 500 {cityData.currency} (Médian)</span>
              <span>16 000 {cityData.currency} (Senior/Direction)</span>
            </div>
          </div>

          {/* Real Expenses Line by Line */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Dépenses Mensuelles Estimées à {cityData.city}
            </h3>

            <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-white text-xs">
              <div className="flex items-center gap-2">
                <span>🏢</span>
                <div>
                  <div className="font-semibold text-slate-800">Loyer appartement 1 chambre (Centre / Périphérie)</div>
                  <div className="text-[11px] text-slate-500">Moyenne constatée pour un logement décent meublé</div>
                </div>
              </div>
              <span className="font-bold text-slate-900 tabular-nums">
                {cityData.avgRentOneBed.toLocaleString()} {cityData.currency}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-white text-xs">
              <div className="flex items-center gap-2">
                <span>🛒</span>
                <div>
                  <div className="font-semibold text-slate-800">Alimentation & Épicerie du mois</div>
                  <div className="text-[11px] text-slate-500">Repas quotidiens préparés chez soi pour 1 personne</div>
                </div>
              </div>
              <span className="font-bold text-slate-900 tabular-nums">
                {cityData.avgFoodMonthly.toLocaleString()} {cityData.currency}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-white text-xs">
              <div className="flex items-center gap-2">
                <span>🚇</span>
                <div>
                  <div className="font-semibold text-slate-800">Abonnement Transports en Commun</div>
                  <div className="text-[11px] text-slate-500">Pass mensuel illimité métro, bus, train urbain</div>
                </div>
              </div>
              <span className="font-bold text-slate-900 tabular-nums">
                {cityData.avgTransportMonthly.toLocaleString()} {cityData.currency}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-white text-xs">
              <div className="flex items-center gap-2">
                <span>📑</span>
                <div>
                  <div className="font-semibold text-slate-800">Impôts & Cotisations sociales prélevés à la source</div>
                  <div className="text-[11px] text-slate-500">Taux moyen d’imposition estimé : ~{cityData.avgTaxPercent}%</div>
                </div>
              </div>
              <span className="font-bold text-amber-900 tabular-nums">
                - {taxAmount.toLocaleString()} {cityData.currency}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-blue-100 bg-blue-50/40 text-xs">
              <div className="flex items-center gap-2">
                <span>🏥</span>
                <div>
                  <div className="font-semibold text-blue-950">Couverture Santé & Soins</div>
                  <div className="text-[11px] text-blue-800">{cityData.healthcareQuality}</div>
                </div>
              </div>
              <span className="font-bold text-emerald-800">Inclus / Pris en charge</span>
            </div>
          </div>
        </div>

        {/* Right: Net Earnings & Conversion into FCFA */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#0b1320] text-white rounded-2xl p-6 shadow-md border border-slate-800 space-y-5">
            <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
              Bilan Financier Mensuel ({cityData.city})
            </div>

            <div>
              <div className="text-xs text-slate-400">Salaire Net en poche après impôts :</div>
              <div className="text-2xl font-extrabold text-white tabular-nums">
                {netSalary.toLocaleString()} {cityData.currency} / mois
              </div>
              <div className="text-xs text-blue-300 font-medium mt-0.5">
                ≈ {netInXof.toLocaleString()} FCFA net / mois
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total dépenses fixes :</span>
                <span className="font-bold text-slate-200 tabular-nums">
                  {totalExpenses.toLocaleString()} {cityData.currency}
                </span>
              </div>
            </div>

            <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-xl p-4 space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Capacité d'Épargne Nette Mensuelle
              </div>
              <div className="text-3xl font-extrabold text-white tabular-nums">
                +{estimatedSavings.toLocaleString()} {cityData.currency}
              </div>
              <div className="text-sm font-bold text-emerald-300">
                Soit environ ~{savingsInXof.toLocaleString()} FCFA / mois
              </div>
              <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                Ce montant reste disponible chaque mois pour épargner, investir ou envoyer de l'argent à vos proches en Afrique.
              </p>
            </div>

            <div className="text-[10px] text-slate-400 leading-snug pt-1 border-t border-slate-800/80">
              * Taux de change indicatif appliqué : 1 {cityData.currency} = {cityData.xofExchangeRate} FCFA (XOF). Les calculs sont des estimations moyennes réalistes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
