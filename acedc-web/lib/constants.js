export const ACEDC = {
  // Identité
  nomComplet: "Action Commune pour l'Éveil et le Développement Communautaire",
  sigle: 'ACEDC',
  type: "Établissement d'assainissement",
  slogan: 'Ensemble, faisons de Kinshasa une ville propre',
  dateCreation: '25 décembre 2025',

  // Contact
  telephone: '+243841351095',
  telephoneAffiche: '0841351095',
  whatsapp: '+243841351095',
  email: 'contact@acedc.org',
  adresse: {
    rue: 'AV. Boeing N°2',
    quartier: 'Q/Kalunga',
    commune: 'C/Selembao',
    reference: 'Sur Elengesa - Réf : Terrain',
    ville: 'Kinshasa',
    pays: 'RDC',
  },

  // Direction
  coordonnateur: {
    nom: 'M. Mufuansoni Lemba Guelord',
    fonction: 'Coordonnateur-Manager',
  },

  // Zones couvertes
  communes: ['Mont-Ngafula', 'Selembao', 'Makala', 'Lemba'],

  // Services
  services: [
    {
      titre: 'Ménages',
      description: 'Collecte et évacuation des déchets ménagers avec tri au départ.',
      frequence: '2 à 3 fois par semaine',
      icone: '🏠',
      image: '/images/menages.jpg',
    },
    {
      titre: 'Écoles',
      description: 'Service adapté aux établissements scolaires pour un environnement sain.',
      frequence: '3 à 5 fois par semaine',
      icone: '🏫',
      image: '/images/ecoles.jpg',
    },
    {
      titre: 'Centres de santé & Hôpitaux',
      description: "Gestion rigoureuse des déchets médicaux et d'assainissement.",
      frequence: '3 à 5 fois par semaine',
      icone: '🏥',
      image: '/images/sante.jpg',
    },
    {
      titre: 'Établissements commerciaux',
      description: 'Collecte régulière pour les commerces, marchés et entreprises.',
      frequence: '3 à 5 fois par semaine',
      icone: '🏪',
      image: '/images/commerciaux.jpg',
    },
  ],

  // Réseaux sociaux (à compléter plus tard)
  facebook: '', // Ex: 'https://facebook.com/acedc'
  reseaux: {
    facebook: '',
    whatsapp: '+243841351095',
  },

  // App mobile
  app: {
    apkUrl: '', // À remplir plus tard (lien Google Drive, Play Store...)
    playStoreUrl: '',
  },
};