export interface AfricanCountryInfo {
  code: string;
  name: string;
  flag: string;
  capital: string;
  region: 'Afrique de l’Ouest' | 'Afrique Centrale' | 'Afrique du Nord' | 'Afrique de l’Est' | 'Afrique Australe';
  biometricCenter: string; // e.g. "VFS Global Dakar & Ambassades"
  consularHub: string; // Details on visa center
  currencyName: string;
}

export const ALL_AFRICAN_COUNTRIES: AfricanCountryInfo[] = [
  // Afrique de l'Ouest (15 pays)
  {
    code: 'SN',
    name: 'Sénégal',
    flag: '🇸🇳',
    capital: 'Dakar',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre CRDV VFS Global Dakar (Almadies) & TLScontact',
    consularHub: 'Pôle consulaire principal pour le Sahel et l’Afrique de l’Ouest',
    currencyName: 'Franc CFA (XOF)'
  },
  {
    code: 'CI',
    name: 'Côte d’Ivoire',
    flag: '🇨🇮',
    capital: 'Abidjan',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre CRDV VFS Global Abidjan (Plateau) & TLScontact',
    consularHub: 'Pôle consulaire majeur UEMOA pour le Canada, la France et la Suisse',
    currencyName: 'Franc CFA (XOF)'
  },
  {
    code: 'BJ',
    name: 'Bénin',
    flag: '🇧🇯',
    capital: 'Porto-Novo / Cotonou',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre VFS Global Cotonou (Haie Vive) & Section Consulaire',
    consularHub: 'Centre de traitement biométrique agréé pour les visas internationaux',
    currencyName: 'Franc CFA (XOF)'
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
    flag: '🇧🇫',
    capital: 'Ouagadougou',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre VFS Global Ouagadougou (Ouaga 2000)',
    consularHub: 'Centre biométrique pour passeports CEDEAO et démarches consulaires',
    currencyName: 'Franc CFA (XOF)'
  },
  {
    code: 'CV',
    name: 'Cap-Vert',
    flag: '🇨🇻',
    capital: 'Praia',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre de visas VFS Global Praia & Ambassade de France / Portugal',
    consularHub: 'Guichet unique biométrique européen et nord-américain',
    currencyName: 'Escudo cap-verdien (CVE)'
  },
  {
    code: 'GM',
    name: 'Gambie',
    flag: '🇬🇲',
    capital: 'Banjul',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre consulaire Banjul / Relais VFS Dakar',
    consularHub: 'Prélèvements biométriques locaux ou hub régional Dakar',
    currencyName: 'Dalasi (GMD)'
  },
  {
    code: 'GH',
    name: 'Ghana',
    flag: '🇬🇭',
    capital: 'Accra',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre VFS Global Accra (Airport Residential Area)',
    consularHub: 'Hub anglophone majeur pour Canada (IRCC), UK et Schengen',
    currencyName: 'Cedi ghanéen (GHS)'
  },
  {
    code: 'GN',
    name: 'Guinée',
    flag: '🇬🇳',
    capital: 'Conakry',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre VFS Global Conakry (Camayenne) & Ambassades',
    consularHub: 'Enrôlement biométrique officiel et traitement des passeports guinéens',
    currencyName: 'Franc guinéen (GNF)'
  },
  {
    code: 'GW',
    name: 'Guinée-Bissau',
    flag: '🇬🇼',
    capital: 'Bissau',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Section consulaire Bissau / Relais VFS Dakar',
    consularHub: 'Centre de formalités de voyage et visas de long séjour',
    currencyName: 'Franc CFA (XOF)'
  },
  {
    code: 'LR',
    name: 'Libéria',
    flag: '🇱🇷',
    capital: 'Monrovia',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Section consulaire Monrovia & Hub VFS Accra',
    consularHub: 'Collecte de données biométriques et passeports biométriques CEDEAO',
    currencyName: 'Dollar libérien (LRD)'
  },
  {
    code: 'ML',
    name: 'Mali',
    flag: '🇲🇱',
    capital: 'Bamako',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre VFS Global Bamako (Badalabougou) & TLScontact',
    consularHub: 'Services des visas et transmission des dossiers vers les ministères',
    currencyName: 'Franc CFA (XOF)'
  },
  {
    code: 'NE',
    name: 'Niger',
    flag: '🇳🇪',
    capital: 'Niamey',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre VFS Global Niamey (Plateau)',
    consularHub: 'Traitement des demandes de permis de travail et visas études/emploi',
    currencyName: 'Franc CFA (XOF)'
  },
  {
    code: 'NG',
    name: 'Nigéria',
    flag: '🇳🇬',
    capital: 'Abuja / Lagos',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centres VFS Global Lagos (Victoria Island & Ikeja) et Abuja',
    consularHub: 'Plus grand pôle de traitement biométrique d’Afrique de l’Ouest',
    currencyName: 'Naira (NGN)'
  },
  {
    code: 'SL',
    name: 'Sierra Leone',
    flag: '🇸🇱',
    capital: 'Freetown',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Section consulaire Freetown / Relais VFS Conakry ou Accra',
    consularHub: 'Enrôlement biométrique et légalisation de diplômes',
    currencyName: 'Leone (SLL)'
  },
  {
    code: 'TG',
    name: 'Togo',
    flag: '🇹🇬',
    capital: 'Lomé',
    region: 'Afrique de l’Ouest',
    biometricCenter: 'Centre VFS Global Lomé (Tokoin) & Ambassade',
    consularHub: 'Point de collecte biométrique agréé pour les talents togolais',
    currencyName: 'Franc CFA (XOF)'
  },

  // Afrique Centrale (8 pays)
  {
    code: 'CM',
    name: 'Cameroun',
    flag: '🇨🇲',
    capital: 'Yaoundé / Douala',
    region: 'Afrique Centrale',
    biometricCenter: 'Centres CRDV VFS Global Yaoundé (Bastos) et Douala (Bonanjo)',
    consularHub: 'Pôle d’immigration majeur pour le Canada, la France et la Suisse en zone CEMAC',
    currencyName: 'Franc CFA (XAF)'
  },
  {
    code: 'CD',
    name: 'RDC (République Démocratique du Congo)',
    flag: '🇨🇩',
    capital: 'Kinshasa',
    region: 'Afrique Centrale',
    biometricCenter: 'Centre CRDV VFS Global Kinshasa (Gombe) & Ambassades',
    consularHub: 'Grand centre de traitement des demandes Mobilité Francophone et visas européens',
    currencyName: 'Franc congolais (CDF)'
  },
  {
    code: 'CG',
    name: 'Congo-Brazzaville',
    flag: '🇨🇬',
    capital: 'Brazzaville',
    region: 'Afrique Centrale',
    biometricCenter: 'Centre VFS Global Brazzaville (Centre-ville) & Pointe-Noire',
    consularHub: 'Dépôt des passeports biométriques et entrevues consulaires',
    currencyName: 'Franc CFA (XAF)'
  },
  {
    code: 'GA',
    name: 'Gabon',
    flag: '🇬🇦',
    capital: 'Libreville',
    region: 'Afrique Centrale',
    biometricCenter: 'Centre VFS Global Libreville (Batterie IV) & TLScontact',
    consularHub: 'Services consulaires pour cadres et ingénieurs gabonais',
    currencyName: 'Franc CFA (XAF)'
  },
  {
    code: 'GQ',
    name: 'Guinée équatoriale',
    flag: '🇬🇶',
    capital: 'Malabo',
    region: 'Afrique Centrale',
    biometricCenter: 'Section consulaire Malabo / Relais Douala',
    consularHub: 'Services des visas et authentification des titres professionnels',
    currencyName: 'Franc CFA (XAF)'
  },
  {
    code: 'CF',
    name: 'République Centrafricaine',
    flag: '🇨🇫',
    capital: 'Bangui',
    region: 'Afrique Centrale',
    biometricCenter: 'Section consulaire Bangui & Hub régional Yaoundé',
    consularHub: 'Traitement des documents de voyage et relais biométriques',
    currencyName: 'Franc CFA (XAF)'
  },
  {
    code: 'TD',
    name: 'Tchad',
    flag: '🇹🇩',
    capital: 'N’Djamena',
    region: 'Afrique Centrale',
    biometricCenter: 'Centre VFS Global N’Djamena & Section Consulaire',
    consularHub: 'Prise d’empreintes et soumission de visas pour talents tchadiens',
    currencyName: 'Franc CFA (XAF)'
  },
  {
    code: 'ST',
    name: 'São Tomé-et-Príncipe',
    flag: '🇸🇹',
    capital: 'São Tomé',
    region: 'Afrique Centrale',
    biometricCenter: 'Section consulaire São Tomé / Relais Libreville',
    consularHub: 'Assistance consulaire et passeports internationaux',
    currencyName: 'Dobra (STN)'
  },

  // Afrique du Nord (6 pays)
  {
    code: 'MA',
    name: 'Maroc',
    flag: '🇲🇦',
    capital: 'Rabat / Casablanca',
    region: 'Afrique du Nord',
    biometricCenter: 'Centres TLScontact et VFS Global (Casablanca, Rabat, Marrakech, Fès, Tanger)',
    consularHub: 'Hub ultra-performant pour ingénieurs, médecins et financiers',
    currencyName: 'Dirham marocain (MAD)'
  },
  {
    code: 'DZ',
    name: 'Algérie',
    flag: '🇩🇿',
    capital: 'Alger',
    region: 'Afrique du Nord',
    biometricCenter: 'Centres VFS Global Alger et TLScontact (Alger, Oran, Annaba)',
    consularHub: 'Grand pôle de recrutement d’ingénieurs et techniciens pour l’Europe et le Canada',
    currencyName: 'Dinar algérien (DZD)'
  },
  {
    code: 'TN',
    name: 'Tunisie',
    flag: '🇹🇳',
    capital: 'Tunis',
    region: 'Afrique du Nord',
    biometricCenter: 'Centres TLScontact Tunis (Les Berges du Lac) & VFS Global',
    consularHub: 'Pôle d’excellence pour talents IT, santé et ingénierie',
    currencyName: 'Dinar tunisien (TND)'
  },
  {
    code: 'EG',
    name: 'Égypte',
    flag: '🇪🇬',
    capital: 'Le Caire',
    region: 'Afrique du Nord',
    biometricCenter: 'Centres VFS Global Le Caire et Alexandrie',
    consularHub: 'Hub bilingue majeur pour le Canada, l’Irlande et l’Europe',
    currencyName: 'Livre égyptienne (EGP)'
  },
  {
    code: 'MR',
    name: 'Mauritanie',
    flag: '🇲🇷',
    capital: 'Nouakchott',
    region: 'Afrique du Nord',
    biometricCenter: 'Centre VFS Global Nouakchott (Tevragh-Zeina) & Ambassades',
    consularHub: 'Collecte biométrique officielle pour l’espace francophone et international',
    currencyName: 'Ouguiya (MRU)'
  },
  {
    code: 'LY',
    name: 'Libye',
    flag: '🇱🇾',
    capital: 'Tripoli',
    region: 'Afrique du Nord',
    biometricCenter: 'Centre VFS Global Tripoli & Relais Tunis',
    consularHub: 'Services consulaires et vérification des attestations professionnelles',
    currencyName: 'Dinar libyen (LYD)'
  },

  // Afrique de l'Est (15 pays)
  {
    code: 'RW',
    name: 'Rwanda',
    flag: '🇷🇼',
    capital: 'Kigali',
    region: 'Afrique de l’Est',
    biometricCenter: 'Centre CRDV VFS Global Kigali (Nyarugenge) & Ambassades',
    consularHub: 'Hub technologique d’Afrique de l’Est réputé pour ses compétences bilingues FR/EN',
    currencyName: 'Franc rwandais (RWF)'
  },
  {
    code: 'KE',
    name: 'Kenya',
    flag: '🇰🇪',
    capital: 'Nairobi',
    region: 'Afrique de l’Est',
    biometricCenter: 'Centre VFS Global Nairobi (Westlands) & Centre des Visas',
    consularHub: 'Pôle anglophone de premier rang pour l’Irlande, la Nouvelle-Zélande et le Canada',
    currencyName: 'Shilling kényan (KES)'
  },
  {
    code: 'MG',
    name: 'Madagascar',
    flag: '🇲🇬',
    capital: 'Antananarivo',
    region: 'Afrique de l’Est',
    biometricCenter: 'Centre TLScontact Antananarivo & VFS Global (Ankorondrano)',
    consularHub: 'Vivier francophone exceptionnel pour le génie logiciel, le BPO et la santé',
    currencyName: 'Ariary malgache (MGA)'
  },
  {
    code: 'BI',
    name: 'Burundi',
    flag: '🇧🇮',
    capital: 'Gitega / Bujumbura',
    region: 'Afrique de l’Est',
    biometricCenter: 'Centre VFS Global Bujumbura (Rohero) & Ambassades',
    consularHub: 'Enrôlement biométrique pour talents francophones burundais',
    currencyName: 'Franc burundais (BIF)'
  },
  {
    code: 'DJ',
    name: 'Djibouti',
    flag: '🇩🇯',
    capital: 'Djibouti',
    region: 'Afrique de l’Est',
    biometricCenter: 'Section consulaire de l’Ambassade de France / VFS Djibouti',
    consularHub: 'Pôle stratégique de la Corne de l’Afrique pour les spécialistes maritimes et logistiques',
    currencyName: 'Franc djiboutien (DJF)'
  },
  {
    code: 'KM',
    name: 'Comores',
    flag: '🇰🇲',
    capital: 'Moroni',
    region: 'Afrique de l’Est',
    biometricCenter: 'Section consulaire Moroni & Relais VFS Mayotte / Madagascar',
    consularHub: 'Prélèvements biométriques et démarches d’expatriation',
    currencyName: 'Franc comorien (KMF)'
  },
  {
    code: 'MU',
    name: 'Maurice',
    flag: '🇲🇺',
    capital: 'Port-Louis',
    region: 'Afrique de l’Est',
    biometricCenter: 'Centre VFS Global Port-Louis & Ambassades',
    consularHub: 'Vivier bilingue hautement qualifié en finance, tech et droit international',
    currencyName: 'Roupie mauricienne (MUR)'
  },
  {
    code: 'SC',
    name: 'Seychelles',
    flag: '🇸🇨',
    capital: 'Victoria',
    region: 'Afrique de l’Est',
    biometricCenter: 'Section consulaire Victoria & Relais Nairobi',
    consularHub: 'Traitement des visas de spécialistes',
    currencyName: 'Roupie seychelloise (SCR)'
  },
  {
    code: 'ET',
    name: 'Éthiopie',
    flag: '🇪🇹',
    capital: 'Addis-Abeba',
    region: 'Afrique de l’Est',
    biometricCenter: 'Centre VFS Global Addis-Abeba (Bole) & Ambassades',
    consularHub: 'Siège de l’Union Africaine et carrefour diplomatique international',
    currencyName: 'Birr éthiopien (ETB)'
  },
  {
    code: 'UG',
    name: 'Ouganda',
    flag: '🇺🇬',
    capital: 'Kampala',
    region: 'Afrique de l’Est',
    biometricCenter: 'Centre VFS Global Kampala (Lugogo Bypass)',
    consularHub: 'Centre d’immigration pour l’Irlande, le Canada et le Commonwealth',
    currencyName: 'Shilling ougandais (UGX)'
  },
  {
    code: 'TZ',
    name: 'Tanzanie',
    flag: '🇹🇿',
    capital: 'Dodoma / Dar es Salaam',
    region: 'Afrique de l’Est',
    biometricCenter: 'Centre VFS Global Dar es Salaam (Maktaba)',
    consularHub: 'Traitement des visas de travail pour l’océan Indien et l’Afrique de l’Est',
    currencyName: 'Shilling tanzanien (TZS)'
  },
  {
    code: 'SO',
    name: 'Somalie',
    flag: '🇸🇴',
    capital: 'Mogadiscio',
    region: 'Afrique de l’Est',
    biometricCenter: 'Relais consulaire Nairobi / Section diplomatique',
    consularHub: 'Pôle régional de traitement des dossiers',
    currencyName: 'Shilling somalien (SOS)'
  },
  {
    code: 'ER',
    name: 'Érythrée',
    flag: '🇪🇷',
    capital: 'Asmara',
    region: 'Afrique de l’Est',
    biometricCenter: 'Section consulaire Asmara',
    consularHub: 'Vérification d’état civil et pièces de voyage',
    currencyName: 'Nakfa (ERN)'
  },
  {
    code: 'SS',
    name: 'Soudan du Sud',
    flag: '🇸🇸',
    capital: 'Djouba',
    region: 'Afrique de l’Est',
    biometricCenter: 'Centre consulaire Djouba & Relais VFS Kampala',
    consularHub: 'Prises d’empreintes et certification de passeport',
    currencyName: 'Livre sud-soudanaise (SSP)'
  },
  {
    code: 'SD',
    name: 'Soudan',
    flag: '🇸🇩',
    capital: 'Khartoum / Port-Soudan',
    region: 'Afrique de l’Est',
    biometricCenter: 'Relais consulaires Le Caire / Addis-Abeba',
    consularHub: 'Traitement consulaire de crise pour travailleurs qualifiés',
    currencyName: 'Livre soudanaise (SDG)'
  },

  // Afrique Australe (10 pays)
  {
    code: 'ZA',
    name: 'Afrique du Sud',
    flag: '🇿🇦',
    capital: 'Pretoria / Le Cap / Johannesburg',
    region: 'Afrique Australe',
    biometricCenter: 'Centres VFS Global Johannesburg, Le Cap et Durban',
    consularHub: 'Pôle tech et financier mondial pour l’Irlande, la Nouvelle-Zélande et le Canada',
    currencyName: 'Rand sud-africain (ZAR)'
  },
  {
    code: 'AO',
    name: 'Angola',
    flag: '🇦🇴',
    capital: 'Luanda',
    region: 'Afrique Australe',
    biometricCenter: 'Centre VFS Global Luanda (Talatona) & TLScontact',
    consularHub: 'Pôle pour ingénieurs pétroliers, énergies et logistique',
    currencyName: 'Kwanza angolais (AOA)'
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    flag: '🇲🇿',
    capital: 'Maputo',
    region: 'Afrique Australe',
    biometricCenter: 'Centre VFS Global Maputo & Ambassades',
    consularHub: 'Services consulaires et passeports biométriques pour talents mozambicains',
    currencyName: 'Metical (MZN)'
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
    flag: '🇿🇼',
    capital: 'Harare',
    region: 'Afrique Australe',
    biometricCenter: 'Centre VFS Global Harare & Ambassades',
    consularHub: 'Vivier hautement anglophone pour la Nouvelle-Zélande et l’Irlande',
    currencyName: 'Dollar américain / ZiG'
  },
  {
    code: 'ZM',
    name: 'Zambie',
    flag: '🇿🇲',
    capital: 'Lusaka',
    region: 'Afrique Australe',
    biometricCenter: 'Centre VFS Global Lusaka & Ambassades',
    consularHub: 'Traitement des visas techniques et miniers internationaux',
    currencyName: 'Kwacha zambien (ZMW)'
  },
  {
    code: 'BW',
    name: 'Botswana',
    flag: '🇧🇼',
    capital: 'Gaborone',
    region: 'Afrique Australe',
    biometricCenter: 'Centre VFS Global Gaborone & Hub Pretoria',
    consularHub: 'Procédure consulaire rapide et passeports biométriques sécurisés',
    currencyName: 'Pula (BWP)'
  },
  {
    code: 'NA',
    name: 'Namibie',
    flag: '🇳🇦',
    capital: 'Windhoek',
    region: 'Afrique Australe',
    biometricCenter: 'Centre VFS Global Windhoek & Ambassades',
    consularHub: 'Services des visas pour ingénieurs et cadres namibiens',
    currencyName: 'Dollar namibien (NAD)'
  },
  {
    code: 'MW',
    name: 'Malawi',
    flag: '🇲🇼',
    capital: 'Lilongwe',
    region: 'Afrique Australe',
    biometricCenter: 'Centre VFS Global Lilongwe & Ambassades',
    consularHub: 'Enrôlement biométrique officiel pour le recrutement à l’étranger',
    currencyName: 'Kwacha malawite (MWK)'
  },
  {
    code: 'LS',
    name: 'Lesotho',
    flag: '🇱🇸',
    capital: 'Maseru',
    region: 'Afrique Australe',
    biometricCenter: 'Relais consulaire Maseru & Hub Johannesburg (VFS)',
    consularHub: 'Services de visas internationaux',
    currencyName: 'Loti (LSL)'
  },
  {
    code: 'SZ',
    name: 'Eswatini',
    flag: '🇸🇿',
    capital: 'Mbabane',
    region: 'Afrique Australe',
    biometricCenter: 'Relais consulaire Mbabane & Hub Pretoria (VFS)',
    consularHub: 'Services consulaires d’immigration professionnelle',
    currencyName: 'Lilangeni (SZL)'
  }
];

export const AFRICAN_REGIONS = [
  'Tous (54 pays)',
  'Afrique de l’Ouest',
  'Afrique Centrale',
  'Afrique du Nord',
  'Afrique de l’Est',
  'Afrique Australe'
] as const;

export const findAfricanCountryByName = (name: string): AfricanCountryInfo | undefined => {
  if (!name) return undefined;
  const clean = name.toLowerCase().trim();
  return ALL_AFRICAN_COUNTRIES.find((c) => 
    c.name.toLowerCase().includes(clean) || 
    clean.includes(c.name.toLowerCase()) ||
    c.capital.toLowerCase().includes(clean)
  );
};
