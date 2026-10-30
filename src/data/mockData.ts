import { 
  JobOffer, 
  CandidateProfile, 
  VisaPathwayInfo,
  CityCostOfLiving,
  InterviewQuestion,
  RecruitmentMission 
} from '../types';

export const INITIAL_JOBS: JobOffer[] = [
  {
    id: 'job-ca-1',
    title: 'Ingénieur DevOps Cloud & Kubernetes (Senior)',
    company: 'Nordic Cloud Solutions Inc.',
    country: 'Canada',
    city: 'Montréal (Québec)',
    sector: 'Informatique & Tech',
    workType: 'Hybride',
    contractType: 'CDI',
    salary: {
      amount: '95,000 - 120,000',
      currency: 'CAD',
      period: 'an',
      estimatedXofMonthly: '~4,200,000 FCFA / mois'
    },
    visaProgram: 'Programme Mobilité Francophone (Exemption EIMT / LMIA C16)',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 6,
      settlingAllowance: '3,000 CAD',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Entreprise technologique leader en Amérique du Nord recherche un ingénieur DevOps pour orchestrer nos clusters de production AWS et OpenShift. En tant que travailleur francophone recruté hors-Québec/avec Mobilité Francophone ou permis fermé, vous bénéficiez de notre prise en charge totale des démarches d’immigration.',
    missions: [
      'Gérer et optimiser l’infrastructure Cloud AWS sous Terraform et Kubernetes (EKS)',
      'Déployer et maintenir les pipelines CI/CD sous GitLab CI et ArgoCD',
      'Assurer la haute disponibilité et la sécurité des environnements bancaires et e-commerce',
      'Collaborer avec nos équipes réparties entre Montréal, Ottawa et Dakar'
    ],
    requirements: [
      'Au moins 4 ans d’expérience prouvée en architecture DevOps / Cloud',
      'Excellente maîtrise de Docker, Kubernetes, Linux et Terraform',
      'Bonne communication en français (écrit et oral), anglais technique un atout',
      'Diplôme d’ingénieur ou équivalent BAC+4/5 en informatique'
    ],
    spokenLanguages: ['Français (courant)', 'Anglais technique'],
    postedAt: 'Il y a 2 jours',
    deadline: 'Dans 30 jours',
    openPositions: 2
  },
  {
    id: 'job-ch-1',
    title: 'Infirmier / Infirmière en Soins Intensifs & Anesthésie',
    company: 'Clinique Universitaire Lémanique',
    country: 'Suisse',
    city: 'Genève / Lausanne',
    sector: 'Santé & Soins Médicaux',
    workType: 'Sur site',
    contractType: 'CDI',
    salary: {
      amount: '88,000 - 105,000',
      currency: 'CHF',
      period: 'an',
      estimatedXofMonthly: '~5,600,000 FCFA / mois'
    },
    visaProgram: 'Permis B (Autorisation de séjour avec activité lucrative - Personnel de santé)',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 8,
      settlingAllowance: '4,000 CHF',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Établissement hospitalier de premier plan en Suisse romande recrutant du personnel infirmier qualifié. Prise en charge intégrale de la reconnaissance Croix-Rouge suisse (CRS) des diplômes d’État et dépôt de la demande de permis de travail cantonal (OCPM Genève / Service cantonal de la population Vaud).',
    missions: [
      'Prise en charge personnalisée des patients de réanimation et soins continus',
      'Administration et surveillance des thérapeutiques et protocoles d’urgence',
      'Collaboration étroite avec les médecins anesthésistes et intensivistes',
      'Tenue rigoureuse des dossiers médicaux informatisés'
    ],
    requirements: [
      'Diplôme d’État Infirmier (IDE) ou équivalent universitaire en sciences infirmières',
      'Minimum 3 ans d’expérience en service de soins intensifs, réanimation ou urgences',
      'Parfaite maîtrise du français (oral et écrit)',
      'Casier judiciaire vierge et rigueur déontologique'
    ],
    spokenLanguages: ['Français (langue maternelle ou C1/C2)'],
    postedAt: 'Il y a 3 jours',
    deadline: 'Dans 45 jours',
    openPositions: 4
  },
  {
    id: 'job-fr-1',
    title: 'Développeur Fullstack React / Node.js & Architecture Microservices',
    company: 'Fintech Alliance Europe',
    country: 'France',
    city: 'Paris (La Défense) & Lyon',
    sector: 'Informatique & Tech',
    workType: 'Hybride',
    contractType: 'CDI',
    salary: {
      amount: '50,000 - 62,000',
      currency: 'EUR',
      period: 'an',
      estimatedXofMonthly: '~3,100,000 FCFA / mois'
    },
    visaProgram: 'Passeport Talent (Salarié qualifié / Entreprise innovante - Carte 4 ans)',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 4,
      settlingAllowance: '2,000 EUR',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Groupe financier européen en pleine expansion recrutant des ingénieurs d’Afrique pour son pôle R&D. Vous bénéficiez du titre de séjour pluriannuel « Passeport Talent » garantissant un visa de travail de 4 ans renouvelable, avec droit de travail immédiat pour votre conjoint(e).',
    missions: [
      'Concevoir des interfaces utilisateur réactives avec React 19, TypeScript et Tailwind',
      'Développer des API REST et GraphQL performantes sous Node.js / NestJS',
      'Participer aux rituels Agile et à la revue de code collaborative',
      'Veiller aux standards d’accessibilité, de sécurité OWASP et de performance web'
    ],
    requirements: [
      'Bac+5 (Master / Diplôme d’ingénieur en informatique)',
      'Minimum 3 ans d’expérience solide sur l’écosystème JavaScript/TypeScript',
      'Rigueur, esprit d’équipe et curiosité technique',
      'Passeport en cours de validité d’au moins 18 mois'
    ],
    spokenLanguages: ['Français (courant)', 'Anglais technique'],
    postedAt: 'Il y a 1 jour',
    deadline: 'Dans 20 jours',
    openPositions: 3
  },
  {
    id: 'job-nz-1',
    title: 'Ingénieur en Génie Civil & Infrastructures Durables',
    company: 'Pacific Infrastructure Partners Ltd',
    country: 'Nouvelle-Zélande',
    city: 'Auckland & Christchurch',
    sector: 'Ingénierie & BTP',
    workType: 'Sur site',
    contractType: 'CDI',
    salary: {
      amount: '90,000 - 115,000',
      currency: 'NZD',
      period: 'an',
      estimatedXofMonthly: '~3,400,000 FCFA / mois'
    },
    visaProgram: 'Accredited Employer Work Visa (AEWV) & Green List Straight to Residence',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 6,
      settlingAllowance: '3,500 NZD',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Entreprise accréditée par Immigration New Zealand (INZ) réalisant des projets d’infrastructures majeures. Le métier d’ingénieur civil figure sur la « Green List » néo-zélandaise, ouvrant un accès accéléré vers la résidence permanente néo-zélandaise.',
    missions: [
      'Superviser les chantiers d’ouvrages d’art, routes et réseaux d’assainissement',
      'Assurer les calculs de structures selon les normes sismiques strictes de Nouvelle-Zélande',
      'Coordonner les équipes de techniciens de chantier et sous-traitants',
      'Garantir le respect des normes environnementales et de sécurité au travail'
    ],
    requirements: [
      'Diplôme d’ingénieur en génie civil (équivalent Washington Accord ou IPENZ / Engineering NZ)',
      'Au moins 4 ans d’expérience sur chantiers ou en bureau d’études',
      'Bonne maîtrise de l’anglais (IELTS 6.5+ ou équivalent TOEFL/PTE)',
      'Capacité d’adaptation et autonomie'
    ],
    spokenLanguages: ['Anglais (B2/C1 requis)', 'Français (un atout)'],
    postedAt: 'Il y a 4 jours',
    deadline: 'Dans 40 jours',
    openPositions: 2
  },
  {
    id: 'job-ie-1',
    title: 'Analyste Données & Ingénieur Machine Learning / Data',
    company: 'Silicon Docks Analytics Global',
    country: 'Irlande',
    city: 'Dublin & Cork',
    sector: 'Informatique & Tech',
    workType: 'Hybride',
    contractType: 'CDI',
    salary: {
      amount: '68,000 - 82,000',
      currency: 'EUR',
      period: 'an',
      estimatedXofMonthly: '~4,100,000 FCFA / mois'
    },
    visaProgram: 'Critical Skills Employment Permit (CSEP - Permis Métiers Critiques)',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 5,
      settlingAllowance: '2,500 EUR',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Rejoignez le hub tech européen à Dublin. Le programme irlandais « Critical Skills Employment Permit » est conçu pour attirer les professionnels hautement qualifiés. Après 21 mois, vous pouvez demander le Stamp 4 (résidence libre en Irlande sans permis employeur).',
    missions: [
      'Développer et déployer des modèles prédictifs et d’apprentissage supervisé sous Python / PyTorch',
      'Construire des pipelines de données sous Snowflake, dbt et Apache Kafka',
      'Collaborer avec les équipes de produit et business intelligence',
      'Créer des tableaux de bord décisionnels interactifs'
    ],
    requirements: [
      'Master ou équivalent en Data Science, Informatique, Mathématiques ou Statistiques',
      'Au moins 3 ans d’expérience pratique en manipulation de données et ML',
      'Niveau d’anglais professionnel fluide (entretien et travail en anglais)',
      'Expérience solide avec SQL, Python et environnements cloud (GCP ou AWS)'
    ],
    spokenLanguages: ['Anglais (courant)', 'Français'],
    postedAt: 'Il y a 3 jours',
    deadline: 'Dans 25 jours',
    openPositions: 2
  },
  {
    id: 'job-ca-2',
    title: 'Chef de Chantier & Conducteur de Travaux BTP (Gros Œuvre)',
    company: 'Groupe Construction Laurentides',
    country: 'Canada',
    city: 'Québec (Ville de Québec) & Lévis',
    sector: 'Ingénierie & BTP',
    workType: 'Sur site',
    contractType: 'Contrat de travail temporaire (2-3 ans)',
    salary: {
      amount: '75,000 - 90,000',
      currency: 'CAD',
      period: 'an',
      estimatedXofMonthly: '~3,300,000 FCFA / mois'
    },
    visaProgram: 'Permis de travail fermé avec EIMT simplifiée (Emplois prioritaires Québec)',
    visaStatus: 'Assistance Démarches EIMT/Permis',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 4,
      settlingAllowance: '2,000 CAD',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Entreprise générale de construction du Québec recrutant des chefs de chantier expérimentés d’Afrique francophone pour piloter des projets résidentiels et commerciaux majeurs.',
    missions: [
      'Planifier, diriger et superviser les équipes de maçonnerie, coffrage et béton armé',
      'Contrôler la qualité des matériaux et le respect scrupuleux du Code de la construction',
      'Assurer les plannings et les réunions de sécurité de chantier quotidiennes',
      'Gérer les approvisionnements et la relation avec les architectes et ingénieurs'
    ],
    requirements: [
      'BTS, DUT ou Licence en Génie Civil / Bâtiment',
      'Au moins 5 ans d’expérience en conduite de travaux de bâtiment',
      'Parfaite maîtrise de la langue française',
      'Aptitude éprouvée au management d’équipes sur le terrain'
    ],
    spokenLanguages: ['Français (exigé)'],
    postedAt: 'Il y a 5 jours',
    deadline: 'Dans 35 jours',
    openPositions: 3
  },
  {
    id: 'job-ch-2',
    title: 'Spécialiste Comptabilité Internationale & Normes IFRS',
    company: 'Helvetia Corporate Trust AG',
    country: 'Suisse',
    city: 'Genève / Fribourg',
    sector: 'Finance, Comptabilité & Audit',
    workType: 'Hybride',
    contractType: 'CDI',
    salary: {
      amount: '95,000 - 118,000',
      currency: 'CHF',
      period: 'an',
      estimatedXofMonthly: '~6,100,000 FCFA / mois'
    },
    visaProgram: 'Permis B (Autorisation de travail - Personnel spécialisé)',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 6,
      settlingAllowance: '3,000 CHF',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Société fiduciaire et de conseil financier suisse recherchant des experts comptables chevronnés pour gérer des portefeuilles de holdings internationales et PME suisses.',
    missions: [
      'Établir les comptes consolidés selon les normes IFRS et le Code des Obligations suisse',
      'Superviser les audits fiscaux et la conformité TVA cantonale et fédérale',
      'Conseiller les directions financières sur les montages de trésorerie internationale',
      'Produire les reportings financiers trimestriels pour les actionnaires'
    ],
    requirements: [
      'Diplôme d’expertise comptable (DEC), DESCOGEF/DECOFI (UEMOA) ou Master en CCA',
      'Minimum 5 ans d’expérience en cabinet d’audit international (Big 4 ou équivalent)',
      'Parfaite maîtrise du français, bon niveau d’anglais d’affaires',
      'Grande rigueur éthique et précision analytique'
    ],
    spokenLanguages: ['Français (courant)', 'Anglais (professionnel)'],
    postedAt: 'Il y a 6 jours',
    deadline: 'Dans 15 jours',
    openPositions: 1
  },
  {
    id: 'job-ie-2',
    title: 'Biotechnologiste & Technicien de Production Pharmaceutique',
    company: 'BioPharma Ireland Manufacturing',
    country: 'Irlande',
    city: 'Cork & Waterford',
    sector: 'Santé & Soins Médicaux',
    workType: 'Sur site',
    contractType: 'CDI',
    salary: {
      amount: '58,000 - 70,000',
      currency: 'EUR',
      period: 'an',
      estimatedXofMonthly: '~3,600,000 FCFA / mois'
    },
    visaProgram: 'Critical Skills Employment Permit (Secteur Biomédical & Pharmaceutique)',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 4,
      settlingAllowance: '2,000 EUR',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'L’Irlande est le 3e exportateur mondial de produits pharmaceutiques. Nous recrutons des scientifiques et techniciens de laboratoire d’Afrique pour opérer nos bioréacteurs et unités de purification aseptique.',
    missions: [
      'Opérer les équipements de culture cellulaire et de filtration sous normes strictes GMP / BPF',
      'Effectuer les contrôles qualité microbiologiques et physico-chimiques',
      'Rédiger les fiches de déviation et les protocoles de validation',
      'Participer aux audits de l’EMA (European Medicines Agency) et de l’HPRA'
    ],
    requirements: [
      'Licence ou Master en Biotechnologie, Biochimie, Biologie ou Génie Chimique',
      'Minimum 2 ans d’expérience en industrie pharmaceutique ou agro-alimentaire certifiée',
      'Bonne pratique de l’anglais technique',
      'Rigueur absolue dans l’application des normes d’hygiène et traçabilité'
    ],
    spokenLanguages: ['Anglais (B2 requis)', 'Français'],
    postedAt: 'Il y a 1 semaine',
    deadline: 'Dans 21 jours',
    openPositions: 3
  },
  {
    id: 'job-ca-indeed-1',
    title: 'Développeur Backend Java / Spring Cloud & Architecture Microservices',
    company: 'Groupe Financier Desjardins (Partenaire Tech)',
    country: 'Canada',
    city: 'Montréal (Québec)',
    sector: 'Informatique & Tech',
    workType: 'Hybride',
    contractType: 'CDI',
    salary: {
      amount: '90,000 - 110,000',
      currency: 'CAD',
      period: 'an',
      estimatedXofMonthly: '~3,900,000 FCFA / mois'
    },
    visaProgram: 'Programme Mobilité Francophone (Exemption EIMT) & Entrée Express',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 6,
      settlingAllowance: '2,500 CAD',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Offre référencée via le réseau Indeed Canada pour recruter des ingénieurs d’Afrique francophone. Participez à la modernisation des systèmes bancaires et des plateformes transactionnelles sécurisées avec parrainage officiel de visa temporaire vers résidence permanente.',
    missions: [
      'Concevoir des architectures distribuées sous Spring Boot 3, Apache Kafka et PostgreSQL',
      'Optimiser les performances transactionnelles et assurer la résilience des microservices',
      'Assurer les déploiements continus via OpenShift et GitHub Actions',
      'Collaborer étroitement avec les équipes de développement à Montréal et Lévis'
    ],
    requirements: [
      'BAC+5 ou Diplôme d’ingénieur en informatique',
      'Minimum 4 ans d’expérience sur Java / Spring Boot',
      'Excellente maîtrise du français écrit et oral (NCLC 7+ un atout)',
      'Bonnes connaissances des principes cloud et architectures distribuées'
    ],
    spokenLanguages: ['Français (courant)', 'Anglais (intermédiaire)'],
    postedAt: 'Hier',
    deadline: 'Dans 28 jours',
    openPositions: 4,
    source: 'Indeed Canada · Recrutement International'
  },
  {
    id: 'job-ch-indeed-2',
    title: 'Spécialiste Affaires Réglementaires & Qualité Pharmaceutique',
    company: 'Novartis Healthcare Research AG',
    country: 'Suisse',
    city: 'Bâle & Genève',
    sector: 'Santé & Soins Médicaux',
    workType: 'Hybride',
    contractType: 'CDI',
    salary: {
      amount: '115,000 - 135,000',
      currency: 'CHF',
      period: 'an',
      estimatedXofMonthly: '~7,200,000 FCFA / mois'
    },
    visaProgram: 'Permis B (Autorisation de travail - Spécialiste Hautement Qualifié)',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 8,
      settlingAllowance: '4,500 CHF',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Offre publiée sur le réseau Indeed Suisse pour les scientifiques chevronnés d’Afrique. Enregistrement des dossiers AMM auprès de Swissmedic et de l’EMA, avec prise en charge complète du déménagement familial et du permis cantonal de travail.',
    missions: [
      'Constituer et soumettre les modules réglementaires CTD/eCTD auprès de Swissmedic',
      'Gérer les réponses aux questions des autorités de santé européennes et internationales',
      'Garantir le respect des standards BPF / GMP et des audits de conformité',
      'Coordonner les équipes R&D pour la mise sur le marché des nouvelles thérapies'
    ],
    requirements: [
      'Doctorat en Pharmacie, Master en Chimie ou Sciences Biomédicales',
      'Minimum 5 ans d’expérience en affaires réglementaires pharmaceutiques',
      'Maîtrise du français et de l’anglais professionnel',
      'Rigueur déontologique et sens aigu de l’analyse réglementaire'
    ],
    spokenLanguages: ['Français', 'Anglais (bilingue ou C1)'],
    postedAt: 'Il y a 3 jours',
    deadline: 'Dans 35 jours',
    openPositions: 2,
    source: 'Indeed Suisse · Hub Pharma'
  },
  {
    id: 'job-nz-indeed-3',
    title: 'Ingénieur en Systèmes Électriques & Énergies Renouvelables',
    company: 'Meridian Energy Infrastructure Ltd',
    country: 'Nouvelle-Zélande',
    city: 'Wellington & Christchurch',
    sector: 'Ingénierie & BTP',
    workType: 'Sur site',
    contractType: 'CDI',
    salary: {
      amount: '95,000 - 120,000',
      currency: 'NZD',
      period: 'an',
      estimatedXofMonthly: '~3,600,000 FCFA / mois'
    },
    visaProgram: 'Accredited Employer Work Visa (AEWV) & Green List Fast-Track',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 6,
      settlingAllowance: '3,500 NZD',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Offre référencée sur Indeed New Zealand pour un poste en pénurie critique sur la Green List d’Immigration New Zealand. Accès direct à la résidence permanente néo-zélandaise pour les ingénieurs électriciens qualifiés.',
    missions: [
      'Concevoir et superviser les raccordements de parcs éoliens et solaires au réseau national',
      'Réaliser les études de protection, de charge et de stabilité haute tension (HV)',
      'Piloter la mise en service des sous-stations électriques et onduleurs industriels',
      'Assurer la conformité avec le code réseau de Nouvelle-Zélande'
    ],
    requirements: [
      'Diplôme d’ingénieur en génie électrique / électrotechnique',
      'Au moins 4 ans d’expérience en haute tension ou énergies renouvelables',
      'Niveau d’anglais vérifié (IELTS 6.5+ ou TOEFL équivalent)',
      'Éligibilité à l’inscription auprès d’Engineering New Zealand'
    ],
    spokenLanguages: ['Anglais (courant)', 'Français'],
    postedAt: 'Il y a 2 jours',
    deadline: 'Dans 40 jours',
    openPositions: 3,
    source: 'Indeed New Zealand · Green List'
  },
  {
    id: 'job-fr-indeed-4',
    title: 'Architecte Cybersécurité & Expert Détection Incidents SOC',
    company: 'Thales Digital Security Services',
    country: 'France',
    city: 'Paris (Vélizy) & Rennes',
    sector: 'Informatique & Tech',
    workType: 'Hybride',
    contractType: 'CDI',
    salary: {
      amount: '55,000 - 68,000',
      currency: 'EUR',
      period: 'an',
      estimatedXofMonthly: '~3,400,000 FCFA / mois'
    },
    visaProgram: 'Passeport Talent (Salarié qualifié - Carte de séjour pluriannuelle 4 ans)',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 4,
      settlingAllowance: '2,000 EUR',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Offre sourcée via le réseau Indeed France pour les professionnels de la cybersécurité en Afrique. Bénéficiez du titre Passeport Talent avec procédure consulaire simplifiée pour intégrer nos équipes de défense cyber et réponse à incident.',
    missions: [
      'Superviser les flux SIEM (Splunk, Elastic) et détecter les menaces avancées (APT)',
      'Conduire les analyses forensiques et gérer les plans de réponse aux compromissions',
      'Réaliser les audits de vulnérabilités et tests d’intrusion (pentests)',
      'Accompagner les clients grands comptes dans l’homologation de leurs systèmes sécurisés'
    ],
    requirements: [
      'Master ou diplôme d’ingénieur en cybersécurité ou réseaux',
      'Minimum 3 ans d’expérience en SOC ou audit de sécurité',
      'Certifications appréciées : CISSP, CEH, OSCP ou AWS Security',
      'Excellente maîtrise du français et anglais technique'
    ],
    spokenLanguages: ['Français (courant)', 'Anglais technique'],
    postedAt: 'Il y a 4 jours',
    deadline: 'Dans 25 jours',
    openPositions: 3,
    source: 'Indeed France · Passeport Talent'
  },
  {
    id: 'job-ie-indeed-5',
    title: 'Ingénieur Cloud Infrastructure & Fiabilité (SRE / AWS)',
    company: 'Amazon Web Services Ireland Operations',
    country: 'Irlande',
    city: 'Dublin (Silicon Docks)',
    sector: 'Informatique & Tech',
    workType: 'Hybride',
    contractType: 'CDI',
    salary: {
      amount: '72,000 - 88,000',
      currency: 'EUR',
      period: 'an',
      estimatedXofMonthly: '~4,400,000 FCFA / mois'
    },
    visaProgram: 'Critical Skills Employment Permit (CSEP) - Volet Tech Européen',
    visaStatus: '100% Sponsorisé',
    relocation: {
      visaFeeCovered: true,
      flightTicketProvided: true,
      initialHousingWeeks: 6,
      settlingAllowance: '3,000 EUR',
      immigrationLawyerAssistance: true,
      familyRelocationSupport: true
    },
    description: 'Offre issue du réseau Indeed Ireland pour les data centers et opérations cloud à Dublin. Traitement express de l’Employment Permit en 6 semaines et octroi du Stamp 4 (résidence permanente irlandaise) après 2 ans.',
    missions: [
      'Maintenir la fiabilité opérationnelle des régions cloud européennes à très grande échelle',
      'Automatiser la résolution d’incidents sous Python, Go et Ansible',
      'Optimiser les architectures réseau CDN, BGP et transit inter-datacenter',
      'Participer aux astreintes et à l’analyse post-mortem sans blâme (blameless postmortems)'
    ],
    requirements: [
      'Diplôme universitaire en informatique ou télécommunications',
      'Au moins 3 ans d’expérience en exploitation Linux et infrastructure Cloud',
      'Parfaite fluidité en anglais (indispensable pour l’environnement international à Dublin)',
      'Maîtrise approfondie des réseaux TCP/IP, DNS, load-balancing et scripts'
    ],
    spokenLanguages: ['Anglais (courant)', 'Français'],
    postedAt: 'Il y a 3 jours',
    deadline: 'Dans 30 jours',
    openPositions: 2,
    source: 'Indeed Ireland · Critical Skills'
  }
];

export const INITIAL_CANDIDATES: CandidateProfile[] = [
  {
    id: 'cand-1',
    fullName: 'Mamadou Diallo',
    title: 'Lead Architecte Cloud AWS & DevOps',
    currentCountry: 'Sénégal',
    currentCity: 'Dakar',
    sector: 'Informatique & Tech',
    yearsOfExperience: 6,
    educationLevel: 'Master / Ingénieur',
    targetCountries: ['Canada', 'France', 'Suisse'],
    skills: ['AWS Certified Solutions Architect', 'Kubernetes', 'Terraform', 'CI/CD GitLab', 'Python', 'Docker'],
    languages: [
      { language: 'Français', level: 'Bilingue' },
      { language: 'Anglais', level: 'Courant' }
    ],
    passportValid: true,
    availability: '1 mois',
    bio: 'Ingénieur en informatique diplômé de l’ESP Dakar, fort de 6 ans d’expérience en conception d’architectures cloud hautement scalables pour des banques et télécoms africaines. En quête d’une opportunité au Canada (Mobilité Francophone) ou en Europe avec parrainage de visa.',
    email: 'mamadou.diallo.cloud@example.com',
    phone: '+221 77 000 1122',
    verifiedIdentity: true
  },
  {
    id: 'cand-2',
    fullName: 'Dr. Amina Touré',
    title: 'Médecin Généraliste & Urgentiste',
    currentCountry: 'Côte d’Ivoire',
    currentCity: 'Abidjan',
    sector: 'Santé & Soins Médicaux',
    yearsOfExperience: 5,
    educationLevel: 'Doctorat (PhD)',
    targetCountries: ['Suisse', 'Canada', 'France'],
    skills: ['Médecine d’urgence', 'Réanimation', 'Diagnostic clinique', 'Protocoles SAMU', 'Pédiatrie d’urgence'],
    languages: [
      { language: 'Français', level: 'Bilingue' },
      { language: 'Anglais', level: 'Intermédiaire' }
    ],
    passportValid: true,
    availability: '3 mois',
    bio: 'Docteur en médecine générale diplômée de l’UFR des Sciences Médicales d’Abidjan, avec 5 ans de pratique active en services d’urgences hospitalières et soins intensifs. Disponible pour équivalences et recrutement hospitalier en Suisse ou au Canada.',
    email: 'amina.toure.med@example.com',
    phone: '+225 07 00 22 33',
    verifiedIdentity: true
  },
  {
    id: 'cand-3',
    fullName: 'Christian Mukendi',
    title: 'Ingénieur Calcul de Structures & BTP',
    currentCountry: 'RDC',
    currentCity: 'Kinshasa',
    sector: 'Ingénierie & BTP',
    yearsOfExperience: 7,
    educationLevel: 'Master / Ingénieur',
    targetCountries: ['Canada', 'Nouvelle-Zélande', 'France'],
    skills: ['AutoCAD', 'Revit BIM', 'Robot Structural Analysis', 'Eurocodes', 'Conduite de chantiers gros œuvre'],
    languages: [
      { language: 'Français', level: 'Bilingue' },
      { language: 'Anglais', level: 'Courant' }
    ],
    passportValid: true,
    availability: '1 mois',
    bio: 'Ingénieur civil polytechnicien (UNIKIN) avec 7 ans de réalisations sur des projets de ponts, voiries et tours tertiaires en Afrique centrale. Maîtrise des standards internationaux de construction et tests IELTS passés avec score 7.0.',
    email: 'christian.mukendi.btp@example.com',
    phone: '+243 81 999 8877',
    verifiedIdentity: true
  },
  {
    id: 'cand-4',
    fullName: 'Grace Nyambura',
    title: 'Senior Data Scientist & Machine Learning Engineer',
    currentCountry: 'Kenya',
    currentCity: 'Nairobi',
    sector: 'Informatique & Tech',
    yearsOfExperience: 5,
    educationLevel: 'Master / Ingénieur',
    targetCountries: ['Irlande', 'Nouvelle-Zélande', 'Canada'],
    skills: ['Python', 'PyTorch', 'TensorFlow', 'NLP / LLM Tuning', 'BigQuery', 'MLOps', 'FastAPI'],
    languages: [
      { language: 'Anglais', level: 'Bilingue' },
      { language: 'Français', level: 'Intermédiaire' }
    ],
    passportValid: true,
    availability: '1 mois',
    bio: 'Machine learning practitioner based in Nairobi with extensive fintech and healthtech experience. Seeking Critical Skills visa sponsorship in Ireland or AEWV Green List placement in New Zealand. Strong track record deploying production ML models.',
    email: 'grace.nyambura.ml@example.com',
    phone: '+254 712 345 678',
    verifiedIdentity: true
  },
  {
    id: 'cand-5',
    fullName: 'Yassine Benali',
    title: 'Auditeur Financier Senior & Expert IFRS',
    currentCountry: 'Maroc',
    currentCity: 'Casablanca',
    sector: 'Finance, Comptabilité & Audit',
    yearsOfExperience: 6,
    educationLevel: 'Master / Ingénieur',
    targetCountries: ['Suisse', 'France', 'Canada'],
    skills: ['Normes IFRS', 'Consolidation', 'Audit Big 4', 'SAP S/4HANA', 'Fiscalité internationale', 'Modélisation financière'],
    languages: [
      { language: 'Français', level: 'Bilingue' },
      { language: 'Anglais', level: 'Courant' },
      { language: 'Arabe', level: 'Bilingue' }
    ],
    passportValid: true,
    availability: '3 mois',
    bio: 'Senior consultant diplômé de l’ISCAE Casablanca avec 6 ans passés chez PwC et EY. Spécialiste des opérations de fusion-acquisition et de consolidation financière sous normes IFRS. Ouvert à la mobilité en Suisse romande ou au Canada.',
    email: 'yassine.benali.audit@example.com',
    phone: '+212 661 234 567',
    verifiedIdentity: true
  },
  {
    id: 'cand-6',
    fullName: 'Esther Kouamé',
    title: 'Infirmière DE - Spécialité Néonatalogie & Bloc',
    currentCountry: 'Cameroun',
    currentCity: 'Douala',
    sector: 'Santé & Soins Médicaux',
    yearsOfExperience: 4,
    educationLevel: 'Licence / Bachelor',
    targetCountries: ['Canada', 'France', 'Suisse'],
    skills: ['Soins néonataux', 'Instrumentation bloc opératoire', 'Gestes d’urgence pédiatrique', 'Hygiène hospitalière'],
    languages: [
      { language: 'Français', level: 'Bilingue' },
      { language: 'Anglais', level: 'Courant' }
    ],
    passportValid: true,
    availability: '1 mois',
    bio: 'Infirmière diplômée d’État avec 4 ans d’expérience en maternité et service pédiatrique à Douala. Dossier d’évaluation comparative des études WES déjà complété pour le Canada (volet santé en demande).',
    email: 'esther.kouame.nurse@example.com',
    phone: '+237 699 123 456',
    verifiedIdentity: true
  }
];

export const VISA_PATHWAYS: Record<string, VisaPathwayInfo> = {
  'Canada': {
    country: 'Canada',
    flag: '🇨🇦',
    programName: 'Programme Mobilité Francophone & Entrée Express',
    authority: 'Immigration, Réfugiés et Citoyenneté Canada (IRCC)',
    avgProcessingTime: '4 à 10 semaines (dispensé d’EIMT)',
    exemptions: 'Exemption de l’Étude d’Impact sur le Marché du Travail (code C16) pour tout travailleur parlant français embauché hors-Québec.',
    officialPortalUrl: 'https://www.canada.ca/fr/immigration-refugies-citoyennete.html',
    keyRequirements: [
      'Offre d’emploi valide d’un employeur canadien',
      'Niveau de compétence linguistique en français NCLC 5 ou plus (test TEF ou TCF Canada)',
      'Preuve de qualifications (diplômes avec équivalence WES recommandée)',
      'Passeport valide et casier judiciaire vierge'
    ],
    steps: [
      'L’employeur dépose l’offre sur le Portail des employeurs d’IRCC (frais de conformité de 230 CAD payés par l’entreprise)',
      'Le candidat reçoit le numéro de l’offre d’emploi officielle',
      'Dépôt en ligne de la demande de permis de travail fermé',
      'Prélèvement biométrique dans un centre CRDV VFS Global (ex: Dakar, Abidjan, Yaoundé, Kinshasa)',
      'Émission de la lettre d’introduction pour le point d’entrée au Canada'
    ],
    inDemandJobs: [
      'Développeurs logiciels & DevOps (Code CNP 21232)',
      'Infirmiers et soignants (Code CNP 31301)',
      'Chefs de chantier et ingénieurs civils',
      'Enseignants et éducateurs',
      'Métiers techniques de l’automobile et de l’électricité'
    ],
    costNotes: 'Les frais gouvernementaux sont de 155 CAD pour le permis de travail + 85 CAD de biométrie. Les entreprises sérieuses prennent généralement en charge ces coûts.'
  },
  'Suisse': {
    country: 'Suisse',
    flag: '🇨🇭',
    programName: 'Permis B / Permis L pour ressortissants d’États tiers',
    authority: 'Secrétariat d’État aux migrations (SEM) & Offices cantonaux',
    avgProcessingTime: '8 à 14 semaines',
    exemptions: 'Les spécialistes hautement qualifiés (cadres, ingénieurs, médecins, experts financiers) bénéficient des contingents annuels fédéraux.',
    officialPortalUrl: 'https://www.sem.admin.ch',
    keyRequirements: [
      'Contrat de travail signé avec salaire respectant les grilles salariales suisses',
      'Démonstration par l’employeur qu’aucun résident suisse ou UE/AELE n’a pu être recruté',
      'Diplôme universitaire supérieur ou qualifications professionnelles exceptionnelles',
      'Reconnaissance de diplôme requise pour les professions réglementées (Croix-Rouge pour soignants)'
    ],
    steps: [
      'L’entreprise suisse dépose le dossier d’autorisation d’embauche auprès du service de l’emploi de son canton (Genève, Vaud, Zurich, etc.)',
      'Examen cantonal de la conformité du contrat et des salaires',
      'Transmission et approbation par le SEM fédéral à Berne',
      'Autorisation de délivrance du visa d’entrée (visa D) transmise à l’Ambassade de Suisse dans le pays de résidence du candidat',
      'Apposition du visa sur le passeport et arrivée en Suisse'
    ],
    inDemandJobs: [
      'Personnel soignant et anesthésistes',
      'Ingénieurs en informatique et cybersécurité',
      'Experts comptables et auditeurs IFRS',
      'Ingénieurs en mécanique de précision et horlogerie',
      'Chercheurs en biotechnologies'
    ],
    costNotes: 'Salaires suisses parmi les plus élevés au monde (souvent > 80,000 CHF/an). Les démarches administratives sont à la charge de l’employeur.'
  },
  'Nouvelle-Zélande': {
    country: 'Nouvelle-Zélande',
    flag: '🇳🇿',
    programName: 'Accredited Employer Work Visa (AEWV) & Green List',
    authority: 'Immigration New Zealand (INZ)',
    avgProcessingTime: '6 à 12 semaines',
    exemptions: 'Accès direct à la résidence permanente (Straight to Residence) pour les métiers inscrits au volet 1 de la Green List.',
    officialPortalUrl: 'https://www.immigration.govt.nz',
    keyRequirements: [
      'Offre d’emploi d’un employeur formellement accrédité auprès d’INZ',
      'Salaire respectant le seuil légal médian néo-zélandais (au moins 29.66 NZD/heure)',
      'Évaluation des qualifications par NZQA ou diplôme exempté',
      'Test d’anglais obligatoire (IELTS Général 6.5 ou équivalent)'
    ],
    steps: [
      'L’entreprise néo-zélandaise obtient son accréditation patronale',
      'Publication d’un « Job Check » approuvé par l’Immigration néo-zélandaise',
      'Le candidat africain reçoit l’invitation officielle à postuler pour le visa AEWV',
      'Envoi des examens médicaux complets (Panel Physician) et certificat de police',
      'Délivrance du visa de travail permettant la venue avec conjoint(e) et enfants'
    ],
    inDemandJobs: [
      'Ingénieurs civils, électriques et mécaniques (Green List)',
      'Développeurs logiciels et architectes télécom',
      'Médecins généralistes et spécialistes',
      'Infirmières autorisées (accès résidence immédiat)',
      'Conducteurs d’engins lourds et charpentiers'
    ],
    costNotes: 'Environnement de travail exceptionnel, bilinguisme anglophone, sécurité et système éducatif d’excellence.'
  },
  'France': {
    country: 'France',
    flag: '🇫🇷',
    programName: 'Passeport Talent (Salarié qualifié / Métiers d’avenir)',
    authority: 'Direction générale des étrangers en France (DGEF) & DREETS',
    avgProcessingTime: '4 à 8 semaines',
    exemptions: 'Dispense d’opposabilité de la situation de l’emploi pour les détenteurs de Master français ou contrat rémunéré à plus de 2x le SMIC (environ 43,000 EUR/an).',
    officialPortalUrl: 'https://administration-etrangers-en-france.interieur.gouv.fr',
    keyRequirements: [
      'Contrat de travail de plus de 3 mois (CDI ou CDD)',
      'Rémunération brute annuelle supérieure aux seuils légaux du Passeport Talent',
      'Diplôme équivalent au moins au grade de Master ou 5 ans d’expérience professionnelle équivalente',
      'Titre d’identité et passeport valide'
    ],
    steps: [
      'L’employeur français effectue la télé-déclaration ou demande d’autorisation de travail en ligne sur le portail ANEF',
      'Transmission de l’accord au candidat africain',
      'Prise de rendez-vous consulaire auprès de TLSContact ou VFS Global (ex: Dakar, Yaoundé, Abidjan, Tunis, Casablanca)',
      'Apposition du visa de long séjour valant titre de séjour (VLS-TS)',
      'Arrivée en France et validation du titre de séjour en ligne auprès de l’OFII'
    ],
    inDemandJobs: [
      'Ingénieurs informatiques, Data & IA',
      'Techniciens de maintenance industrielle et BTP',
      'Personnel soignant et aides-soignants',
      'Ingénieurs en transition énergétique et décarbonation',
      'Chefs cuisiniers et encadrement hôtelier'
    ],
    costNotes: 'Le conjoint du bénéficiaire d’un Passeport Talent bénéficie automatiquement d’un titre l’autorisant à exercer n’importe quelle profession en France.'
  },
  'Irlande': {
    country: 'Irlande',
    flag: '🇮🇪',
    programName: 'Critical Skills Employment Permit (CSEP)',
    authority: 'Department of Enterprise, Trade and Employment (DETE)',
    avgProcessingTime: '5 à 9 semaines',
    exemptions: 'Dispense de test du marché du travail (Labour Market Needs Test) pour tous les métiers listés sur la Critical Skills Occupations List.',
    officialPortalUrl: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/',
    keyRequirements: [
      'Offre d’emploi d’une durée minimale de 2 ans dans une entreprise enregistrée en Irlande',
      'Salaire minimum de 38,000 EUR/an pour les métiers de la liste critique (ou 64,000 EUR pour les autres diplômés)',
      'Diplôme universitaire pertinent (Licence / Master)',
      'Excellente maîtrise de la langue anglaise'
    ],
    steps: [
      'Dépôt de la candidature en ligne sur le système EPOS du ministère irlandais DETE',
      'Paiement des frais de permis (1,000 EUR, remboursés à 90% en cas de refus, payés par l’employeur)',
      'Délivrance de l’Employment Permit officiel',
      'Demande de visa d’entrée irlandais (Long Stay D Visa) via AVATS et soumission du passeport',
      'Arrivée à Dublin et enregistrement auprès de l’IRP (Irish Residence Permit)'
    ],
    inDemandJobs: [
      'Architectes logiciels, développeurs et experts Cloud',
      'Ingénieurs biomédicaux et scientifiques pharmaceutiques',
      'Comptables agréés et auditeurs financiers',
      'Infirmiers et médecins spécialistes',
      'Ingénieurs en cybersécurité'
    ],
    costNotes: 'Permet d’obtenir le Stamp 4 (résidence permanente sans contrainte d’employeur) après seulement 2 ans d’exercice.'
  }
};

export const COST_OF_LIVING_DATA: CityCostOfLiving[] = [
  {
    city: 'Montréal',
    country: 'Canada',
    currency: 'CAD',
    avgRentOneBed: 1550,
    avgFoodMonthly: 550,
    avgTransportMonthly: 97,
    avgTaxPercent: 26,
    healthcareQuality: 'Système RAMQ public universel gratuit',
    averageSalarySenior: 8500, // monthly gross
    xofExchangeRate: 445
  },
  {
    city: 'Genève',
    country: 'Suisse',
    currency: 'CHF',
    avgRentOneBed: 2200,
    avgFoodMonthly: 850,
    avgTransportMonthly: 70,
    avgTaxPercent: 21,
    healthcareQuality: 'LAMal de pointe (assurance obligatoire subventionnée)',
    averageSalarySenior: 9500,
    xofExchangeRate: 720
  },
  {
    city: 'Auckland',
    country: 'Nouvelle-Zélande',
    currency: 'NZD',
    avgRentOneBed: 2100,
    avgFoodMonthly: 600,
    avgTransportMonthly: 180,
    avgTaxPercent: 24,
    healthcareQuality: 'Système public Te Whatu Ora pour titulaires de visa de travail',
    averageSalarySenior: 8800,
    xofExchangeRate: 375
  },
  {
    city: 'Paris (Île-de-France)',
    country: 'France',
    currency: 'EUR',
    avgRentOneBed: 1350,
    avgFoodMonthly: 450,
    avgTransportMonthly: 86,
    avgTaxPercent: 22,
    healthcareQuality: 'Sécurité Sociale (CPAM) + Mutuelle entreprise 100%',
    averageSalarySenior: 5200,
    xofExchangeRate: 655
  },
  {
    city: 'Dublin',
    country: 'Irlande',
    currency: 'EUR',
    avgRentOneBed: 1950,
    avgFoodMonthly: 500,
    avgTransportMonthly: 130,
    avgTaxPercent: 28,
    healthcareQuality: 'Système HSE + assurance privée prise en charge employeur',
    averageSalarySenior: 6500,
    xofExchangeRate: 655
  }
];

export const INTERVIEW_PREP_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'q-1',
    country: 'Canada',
    category: 'Comportemental (STAR)',
    question: 'Parlez-moi d’une situation où vous avez dû gérer un projet complexe avec des délais serrés. Comment avez-vous priorisé ?',
    context: 'Au Canada, les recruteurs attendent une structure STAR stricte (Situation, Tâche, Action, Résultat chiffré) sans modestie excessive.',
    idealAnswerFormula: {
      situation: 'Présentez le contexte professionnel africain (banque, télécom, chantier, hôpital) et le défi rencontré.',
      action: 'Expliquez précisément les actions que VOUS avez initiées (pas seulement "l’équipe").',
      result: 'Donnez un résultat quantifié (+35% de rapidité, 0 temps d’arrêt, économie de coûts).'
    },
    tipsForAfricanTalents: 'Ne dites jamais "On a fait", dites "J’ai analysé, j’ai mis en place". Les employeurs canadiens valorisent le leadership individuel et l’honnêteté technique.'
  },
  {
    id: 'q-2',
    country: 'Canada',
    category: 'Intégration & Expatriation',
    question: 'Pourquoi souhaitez-vous vous installer au Canada et comment envisagez-vous votre adaptation au climat et au milieu de travail ?',
    context: 'Les recruteurs veulent s’assurer que vous ne repartirez pas après le premier hiver québécois ou ontarien.',
    idealAnswerFormula: {
      situation: 'Exprimez votre projet de vie structuré et votre intérêt pour la société canadienne francophone ou anglophone.',
      action: 'Expliquez vos recherches concrètes : logement, climat, intégration de la famille.',
      result: 'Démontrez votre résilience et votre engagement à long terme avec l’entreprise.'
    },
    tipsForAfricanTalents: 'Mentionnez que vous êtes renseigné sur le coût de la vie et le climat, et montrez votre enthousiasme pour la culture collaborative nord-américaine.'
  },
  {
    id: 'q-3',
    country: 'Suisse',
    category: 'Technique & Méthode',
    question: 'Comment garantissez-vous la précision et la conformité aux normes les plus strictes dans votre travail quotidien ?',
    context: 'En Suisse, la précision, la ponctualité et le respect des protocoles (normes suisses, IFRS, BPF) priment sur la rapidité.',
    idealAnswerFormula: {
      situation: 'Décrivez un projet soumis à un contrôle strict ou un audit déontologique.',
      action: 'Détaillez vos méthodes de double vérification, de documentation rigoureuse et de traçabilité.',
      result: 'Validation sans réserve de l’audit ou conformité à 100% du premier coup.'
    },
    tipsForAfricanTalents: 'Adoptez une posture posée et factuelle. En Suisse, la sobriété et la rigueur méthodique sont perçues comme les marques ultimes du professionnalisme.'
  },
  {
    id: 'q-4',
    country: 'Nouvelle-Zélande',
    category: 'Motivation',
    question: 'How do your qualifications and overseas experience align with our local standards and health & safety regulations?',
    context: 'La Nouvelle-Zélande a des règles d’hygiène et de sécurité au travail (WorkSafe NZ) particulièrement strictes.',
    idealAnswerFormula: {
      situation: 'Acknowledge the NZQA / Engineering NZ or Nursing standards.',
      action: 'Explain your preparation with local codes (e.g. seismic codes, health guidelines).',
      result: 'Confidence in fast onboarding and zero incidents.'
    },
    tipsForAfricanTalents: 'Préparez votre entretien entièrement en anglais fluide avec le vocabulaire technique de votre corps de métier.'
  },
  {
    id: 'q-5',
    country: 'France',
    category: 'Comportemental (STAR)',
    question: 'Comment réagissez-vous en cas de désaccord technique avec votre responsable ou un membre de votre équipe ?',
    context: 'En France, le débat d’idées argumenté est encouragé, mais doit rester constructif et respectueux de la hiérarchie.',
    idealAnswerFormula: {
      situation: 'Citez une divergence d’avis sur un choix d’architecture ou d’organisation.',
      action: 'Expliquez comment vous avez posé les arguments factuels et écouté la perspective adverse.',
      result: 'Adoption d’un consensus aligné avec les objectifs de l’entreprise.'
    },
    tipsForAfricanTalents: 'Montrez votre capacité d’analyse critique constructive sans agressivité : en France, savoir poser les vraies questions techniques est très apprécié.'
  }
];

export const RECRUITMENT_EVENTS: RecruitmentMission[] = [
  {
    id: 'event-1',
    title: 'Journées Québec Monde · Recrutement International Francophone',
    country: 'Canada',
    organizer: 'Ministère de l’Immigration, de la Francisation et de l’Intégration (MIFI Québec)',
    format: 'En ligne / Virtuel',
    date: '18 - 22 Novembre 2026',
    status: 'Inscriptions Ouvertes',
    sectors: ['Technologies de l’information', 'Génie & Métiers techniques', 'Santé & Services sociaux'],
    description: 'La plus grande mission officielle d’embauche directe d’Afrique francophone par des dizaines d’entreprises québécoises avec permis de travail fermé et accompagnement complet.',
    registrationLinkText: 'S’inscrire sur le portail officiel Québec en tête'
  },
  {
    id: 'event-2',
    title: 'Destination Canada Forum Mobilité · Volet Afrique',
    country: 'Canada',
    organizer: 'Immigration, Réfugiés et Citoyenneté Canada (IRCC)',
    format: 'Présentiel (Dakar) & Virtuel',
    date: '3 - 6 Décembre 2026',
    status: 'Places Limitées',
    sectors: ['Informatique', 'Enseignement', 'Santé', 'Transport & Logistique'],
    description: 'Salon annuel d’IRCC destiné aux candidats francophones souhaitant s’installer dans les provinces anglophones du Canada (Ontario, Nouveau-Brunswick, Alberta, Colombie-Britannique).',
    registrationLinkText: 'Demander une invitation officielle IRCC'
  },
  {
    id: 'event-3',
    title: 'Mission Emploi Santé & Ingénierie Suisse Romande',
    country: 'Suisse',
    organizer: 'Consortium des Hôpitaux et Entreprises Cantonales (Vaud & Genève)',
    format: 'Présentiel (Abidjan) & Hybride',
    date: '14 - 16 Janvier 2027',
    status: 'Bientôt disponible',
    sectors: ['Personnel Infirmier DE', 'Anesthésistes', 'Ingénieurs Électrotechnique'],
    description: 'Session de recrutement dédiée aux soignants et ingénieurs africains avec prise en charge de la reconnaissance de diplôme Croix-Rouge suisse et octroi de permis B cantonal.',
    registrationLinkText: 'Pré-enregistrer mon dossier pour Abidjan'
  },
  {
    id: 'event-4',
    title: 'New Zealand Green List Fast-Track Expo Africa',
    country: 'Nouvelle-Zélande',
    organizer: 'Immigration New Zealand Accredited Employers Network',
    format: 'En ligne / Virtuel',
    date: '28 Janvier 2027',
    status: 'Inscriptions Ouvertes',
    sectors: ['Génie Civil', 'Data & Intelligence Artificielle', 'Médecine générale'],
    description: 'Rencontrez directement les directeurs des ressources humaines d’entreprises d’Auckland, Wellington et Christchurch accréditées auprès d’Immigration New Zealand.',
    registrationLinkText: 'Réserver un créneau d’entretien visio'
  }
];

