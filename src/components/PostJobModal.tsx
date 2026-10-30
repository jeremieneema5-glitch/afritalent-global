import React, { useState } from 'react';
import { JobOffer, TargetCountry, JobSector } from '../types';

interface PostJobModalProps {
  onClose: () => void;
  onAddJob: (job: JobOffer) => void;
}

export const PostJobModal: React.FC<PostJobModalProps> = ({
  onClose,
  onAddJob
}) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState<TargetCountry>('Canada');
  const [city, setCity] = useState('');
  const [sector, setSector] = useState<JobSector>('Informatique & Tech');
  const [salaryAmount, setSalaryAmount] = useState('80,000 - 100,000');
  const [salaryCurrency, setSalaryCurrency] = useState<'CAD' | 'CHF' | 'EUR' | 'NZD'>('CAD');
  const [visaProgram, setVisaProgram] = useState('Programme Mobilité Francophone');
  const [visaStatus, setVisaStatus] = useState<'100% Sponsorisé' | 'Assistance Démarches EIMT/Permis' | 'Parrainage Vérifié'>('100% Sponsorisé');
  const [flightTicket, setFlightTicket] = useState(true);
  const [initialHousingWeeks, setInitialHousingWeeks] = useState(4);
  const [lawyerAssistance, setLawyerAssistance] = useState(true);
  const [settlingAllowance, setSettlingAllowance] = useState('2,500 CAD');
  const [description, setDescription] = useState('');
  const [missionsText, setMissionsText] = useState('');
  const [requirementsText, setRequirementsText] = useState('');

  const handleCountryChange = (c: TargetCountry) => {
    setCountry(c);
    if (c === 'Canada') {
      setSalaryCurrency('CAD');
      setVisaProgram('Programme Mobilité Francophone (Exempt EIMT/LMIA)');
      setSettlingAllowance('2,500 CAD');
    } else if (c === 'Suisse') {
      setSalaryCurrency('CHF');
      setVisaProgram('Permis B pour Ressortissants d’États tiers');
      setSettlingAllowance('3,000 CHF');
    } else if (c === 'Nouvelle-Zélande') {
      setSalaryCurrency('NZD');
      setVisaProgram('Accredited Employer Work Visa (AEWV Green List)');
      setSettlingAllowance('3,000 NZD');
    } else if (c === 'France') {
      setSalaryCurrency('EUR');
      setVisaProgram('Passeport Talent (Salarié qualifié - 4 ans)');
      setSettlingAllowance('2,000 EUR');
    } else if (c === 'Irlande') {
      setSalaryCurrency('EUR');
      setVisaProgram('Critical Skills Employment Permit (CSEP)');
      setSettlingAllowance('2,500 EUR');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !company || !city || !description) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const newJob: JobOffer = {
      id: `job-user-${Date.now()}`,
      title,
      company,
      country,
      city,
      sector,
      workType: 'Sur site',
      contractType: 'CDI',
      salary: {
        amount: salaryAmount,
        currency: salaryCurrency,
        period: 'an',
        estimatedXofMonthly: `~3,500,000 FCFA / mois`
      },
      visaProgram,
      visaStatus,
      relocation: {
        visaFeeCovered: true,
        flightTicketProvided: flightTicket,
        initialHousingWeeks: Number(initialHousingWeeks),
        settlingAllowance,
        immigrationLawyerAssistance: lawyerAssistance,
        familyRelocationSupport: true
      },
      description,
      missions: missionsText.split('\n').filter(Boolean),
      requirements: requirementsText.split('\n').filter(Boolean),
      spokenLanguages: ['Français', 'Anglais'],
      postedAt: 'À l’instant',
      deadline: 'Dans 30 jours',
      openPositions: 1
    };

    onAddJob(newJob);
    alert('Votre offre de recrutement international a été publiée avec succès ! Elle est désormais visible par tous les candidats africains.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Publier une Offre de Recrutement International
            </h2>
            <div className="text-xs text-slate-500">
              Réservé aux entreprises du Canada, de Suisse, de Nouvelle-Zélande, de France et d'Irlande
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Intitulé du poste *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Ingénieur DevOps Cloud, Infirmier DE, Chef de projet BTP..."
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nom de l'entreprise *
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Ex: Montreal Tech Hub Inc."
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pays de travail *
              </label>
              <select
                value={country}
                onChange={(e) => handleCountryChange(e.target.value as TargetCountry)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-semibold"
              >
                <option value="Canada">🇨🇦 Canada</option>
                <option value="Suisse">🇨🇭 Suisse</option>
                <option value="Nouvelle-Zélande">🇳🇿 Nouvelle-Zélande</option>
                <option value="France">🇫🇷 France</option>
                <option value="Irlande">🇮🇪 Irlande</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Ville / Région *
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ex: Montréal, Genève, Auckland..."
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Secteur d'activité
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value as JobSector)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
              >
                <option value="Informatique & Tech">Informatique & Tech</option>
                <option value="Santé & Soins Médicaux">Santé & Soins Médicaux</option>
                <option value="Ingénierie & BTP">Ingénierie & BTP</option>
                <option value="Finance, Comptabilité & Audit">Finance & Audit</option>
                <option value="Logistique & Transport">Logistique & Transport</option>
                <option value="Hôtellerie, Restauration & Tourisme">Hôtellerie & Tourisme</option>
              </select>
            </div>
          </div>

          {/* Salary and Visa */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Fourchette de salaire annuel brut
              </label>
              <input
                type="text"
                value={salaryAmount}
                onChange={(e) => setSalaryAmount(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Devise
              </label>
              <select
                value={salaryCurrency}
                onChange={(e) => setSalaryCurrency(e.target.value as any)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
              >
                <option value="CAD">CAD (Dollar canadien)</option>
                <option value="CHF">CHF (Franc suisse)</option>
                <option value="EUR">EUR (Euro)</option>
                <option value="NZD">NZD (Dollar néo-zélandais)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Niveau de Parrainage Visa
              </label>
              <select
                value={visaStatus}
                onChange={(e) => setVisaStatus(e.target.value as any)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-emerald-800 font-bold"
              >
                <option value="100% Sponsorisé">100% Sponsorisé</option>
                <option value="Assistance Démarches EIMT/Permis">Assistance Démarches EIMT/Permis</option>
                <option value="Parrainage Vérifié">Parrainage Vérifié</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Programme d’immigration officiel utilisé
            </label>
            <input
              type="text"
              value={visaProgram}
              onChange={(e) => setVisaProgram(e.target.value)}
              className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-blue-900 font-semibold"
            />
          </div>

          {/* Relocation Package Checkboxes */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Avantages d'expatriation offerts au candidat africain
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={flightTicket}
                  onChange={(e) => setFlightTicket(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span>Billet d’avion aller offert</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={lawyerAssistance}
                  onChange={(e) => setLawyerAssistance(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span>Avocat en immigration dédié</span>
              </label>

              <div className="flex items-center gap-2">
                <span>Logement initial :</span>
                <input
                  type="number"
                  min="0"
                  max="12"
                  value={initialHousingWeeks}
                  onChange={(e) => setInitialHousingWeeks(Number(e.target.value))}
                  className="w-16 p-1 bg-white border border-slate-200 rounded text-center text-xs"
                />
                <span>semaines</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Description de la mission *
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Présentation du projet d'entreprise, contexte de l'expatriation..."
              className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Responsabilités (une par ligne)
              </label>
              <textarea
                rows={3}
                value={missionsText}
                onChange={(e) => setMissionsText(e.target.value)}
                placeholder="Ex:\nPiloter l'infrastructure AWS\nGérer le déploiement CI/CD\nFormer les juniors"
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Critères & Compétences requises (une par ligne)
              </label>
              <textarea
                rows={3}
                value={requirementsText}
                onChange={(e) => setRequirementsText(e.target.value)}
                placeholder="Ex:\nDiplôme d'ingénieur\nMinimum 3 ans d'expérience\nFrançais courant"
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <div className="text-[11px] text-slate-500">
              ✅ Votre offre sera certifiée et affichée immédiatement auprès des talents africains.
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
            >
              Valider et publier l'offre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
