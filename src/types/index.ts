export type TargetCountry = 'Canada' | 'Suisse' | 'Nouvelle-Zélande' | 'France' | 'Irlande';

export type JobSector = 
  | 'Informatique & Tech'
  | 'Santé & Soins Médicaux'
  | 'Ingénierie & BTP'
  | 'Finance, Comptabilité & Audit'
  | 'Logistique & Transport'
  | 'Hôtellerie, Restauration & Tourisme'
  | 'Enseignement & Formation';

export interface RelocationPackage {
  visaFeeCovered: boolean;
  flightTicketProvided: boolean;
  initialHousingWeeks: number; // e.g. 4 weeks
  settlingAllowance?: string; // e.g. "2,500 CAD"
  immigrationLawyerAssistance: boolean;
  familyRelocationSupport: boolean;
}

export interface JobOffer {
  id: string;
  title: string;
  company: string;
  companyLogoUrl?: string;
  country: TargetCountry;
  city: string;
  sector: JobSector;
  workType: 'Sur site' | 'Hybride' | 'Télétravail transitoire';
  contractType: 'CDI' | 'Contrat de travail temporaire (2-3 ans)' | 'Permis fermé';
  salary: {
    amount: string;
    currency: 'CAD' | 'CHF' | 'EUR' | 'NZD';
    period: 'an' | 'mois' | 'heure';
    estimatedXofMonthly?: string; // e.g. "~2,800,000 FCFA / mois"
  };
  visaProgram: string; // e.g. "Programme Mobilité Francophone", "Permis B Haute Qualification", "Accredited Employer Work Visa (AEWV)", "Passeport Talent", "Critical Skills Employment Permit"
  visaStatus: '100% Sponsorisé' | 'Assistance Démarches EIMT/Permis' | 'Parrainage Vérifié';
  relocation: RelocationPackage;
  description: string;
  missions: string[];
  requirements: string[];
  spokenLanguages: string[];
  postedAt: string;
  deadline: string;
  openPositions: number;
  source?: string; // e.g. "Indeed Canada", "Indeed Suisse", "Partenaire Direct"
}

export interface CityCostOfLiving {
  city: string;
  country: TargetCountry;
  currency: string;
  avgRentOneBed: number; // monthly
  avgFoodMonthly: number;
  avgTransportMonthly: number;
  avgTaxPercent: number; // e.g. 24%
  healthcareQuality: string;
  averageSalarySenior: number;
  xofExchangeRate: number; // e.g. 1 CAD = 440 FCFA, 1 CHF = 710 FCFA
}

export interface InterviewQuestion {
  id: string;
  country: TargetCountry;
  category: 'Comportemental (STAR)' | 'Technique & Méthode' | 'Intégration & Expatriation' | 'Motivation';
  question: string;
  context: string;
  idealAnswerFormula: {
    situation: string;
    action: string;
    result: string;
  };
  tipsForAfricanTalents: string;
}

export interface RecruitmentMission {
  id: string;
  title: string;
  country: TargetCountry;
  organizer: string;
  format: 'En ligne / Virtuel' | 'Présentiel (Dakar)' | 'Présentiel (Dakar) & Virtuel' | 'Présentiel (Abidjan)' | 'Présentiel (Abidjan) & Hybride' | 'Présentiel (Casablanca)' | 'Présentiel (Douala)';
  date: string;
  status: 'Inscriptions Ouvertes' | 'Bientôt disponible' | 'Places Limitées';
  sectors: string[];
  description: string;
  registrationLinkText: string;
}

export interface CandidateProfile {
  id: string;
  fullName: string;
  title: string;
  currentCountry: string; // e.g. "Sénégal", "Côte d'Ivoire", "Cameroun", "RDC", "Maroc"
  currentCity: string;
  avatarUrl?: string;
  sector: JobSector;
  yearsOfExperience: number;
  educationLevel: "Licence / Bachelor" | "Master / Ingénieur" | "Doctorat (PhD)" | "BTS / DUT / Diplôme Technique";
  targetCountries: TargetCountry[];
  skills: string[];
  languages: { language: string; level: 'Courant' | 'Bilingue' | 'Intermédiaire' }[];
  passportValid: boolean;
  availability: 'Immédiate' | '1 mois' | '3 mois'; // délais visa inclus
  bio: string;
  email: string;
  phone?: string;
  verifiedIdentity: boolean;
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  candidateId: string;
  candidateName: string;
  candidateCountry: string;
  appliedDate: string;
  status: 'Reçue' | 'En revue' | 'Entretien planifié' | 'Offre envoyée' | 'Procédure Visa enclenchée';
  coverNote: string;
}

export interface ChatMessage {
  id: string;
  senderRole: 'candidat' | 'recruteur';
  senderName: string;
  recipientName: string;
  text: string;
  timestamp: string;
  isInterviewInvite?: boolean;
  interviewDetails?: {
    date: string;
    time: string;
    platform: string;
  };
}

export interface VisaPathwayInfo {
  country: TargetCountry;
  flag: string;
  programName: string;
  authority: string;
  avgProcessingTime: string;
  keyRequirements: string[];
  exemptions: string;
  officialPortalUrl: string;
  steps: string[];
  inDemandJobs: string[];
  costNotes: string;
}
