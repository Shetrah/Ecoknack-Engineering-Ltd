export type ProjectRecord = {
  id: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  client: string;
  location: string;
  year: string;
  highlights: string[];
  color: string;

  // Project gallery and external photo album
  gallery?: string[];
  googlePhotosUrl?: string;
};

export const defaultProjects: ProjectRecord[] = [
  {
    id: 'rubis-un-avenue',
    title: 'Rubis UN Avenue',
    category: 'Design & Build',
    desc: 'Flagship gas station transformation with striking architectural details and modern forecourt upgrades.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&auto=format&fit=crop&q=75',
    client: 'Rubis Energy Kenya',
    location: 'UN Avenue, Nairobi',
    year: '2024',
    highlights: [
      'Complete canopy replacement',
      'Forecourt resurfacing with cabro',
      'Fuel dispensing island upgrades',
      'Shop and wash bay construction'
    ],
    color: 'from-orange-600 to-orange-400',

    gallery: [
      '/projects/rubis-1.jpg',
      '/projects/rubis-2.jpg',
      '/projects/rubis-3.jpg',
      '/projects/rubis-4.jpg',
    ],
    googlePhotosUrl: '',
  },

  {
    id: 'ola-energy-stations',
    title: 'OLA Energy Stations',
    category: 'Design & Build',
    desc: 'Multiple station upgrades delivered through full design and build service across Kenya.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=700&auto=format&fit=crop&q=75',
    client: 'OLA Energy Kenya',
    location: 'Various locations, Kenya',
    year: '2022–2024',
    highlights: [
      'Multiple station upgrades',
      'Canopy and forecourt works',
      'Underground tank installation',
      'Branding and fit-out'
    ],
    color: 'from-yellow-600 to-yellow-400',

    gallery: [
      '/projects/ola-1.jpg',
      '/projects/ola-2.jpg',
      '/projects/ola-3.jpg',
      '/projects/ola-4.jpg',
    ],
    googlePhotosUrl: '',
  },

  {
    id: 'kobil-station-upgrade',
    title: 'Kobil Station Upgrade',
    category: 'Design & Build',
    desc: 'A complete refurbishment that elevated operations and customer experience.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&auto=format&fit=crop&q=75',
    client: 'Kobil',
    location: 'Nairobi',
    year: '2023',
    highlights: [
      'Full station renovation',
      'Exterior finishing',
      'Lighting and safety enhancements',
      'Commissioning support'
    ],
    color: 'from-primary to-blue-700',

    gallery: [
      '/projects/kobil-1.jpg',
      '/projects/kobil-2.jpg',
      '/projects/kobil-3.jpg',
      '/projects/kobil-4.jpg',
    ],
    googlePhotosUrl: '',
  },

  {
    id: 'shell-stations',
    title: 'Shell Stations',
    category: 'Design & Build',
    desc: 'Several Shell fuel station construction and refurbishment projects across Nairobi and Kenya.',
    image: 'https://images.unsplash.com/photo-1590644365607-5b8b4e4a2a34?w=700&auto=format&fit=crop&q=75',
    client: 'Shell',
    location: 'Nairobi and beyond',
    year: '2021–2024',
    highlights: [
      'Canopy works',
      'Forecourt improvements',
      'Civil and electrical upgrades',
      'Project management'
    ],
    color: 'from-primary to-blue-700',

    gallery: [
      '/projects/shell-1.jpg',
      '/projects/shell-2.jpg',
      '/projects/shell-3.jpg',
      '/projects/shell-4.jpg',
    ],
    googlePhotosUrl: '',
  },

  {
    id: 'solar-installations',
    title: 'Commercial Solar Installations',
    category: 'Solar Energy',
    desc: 'High quality commercial and industrial solar panel installations as an authorised Jinko Solar partner.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&auto=format&fit=crop&q=75',
    client: 'Various Commercial Clients',
    location: 'Kenya',
    year: '2020–2024',
    highlights: [
      'Solar system design',
      'Installation and commissioning',
      'Battery backup integration',
      'Maintenance plans'
    ],
    color: 'from-primary to-blue-700',

    gallery: [
      '/projects/solar-1.jpg',
      '/projects/solar-2.jpg',
      '/projects/solar-3.jpg',
      '/projects/solar-4.jpg',
    ],
    googlePhotosUrl: '',
  },

  {
    id: 'warehouses-godowns',
    title: 'Warehouses & Godowns',
    category: 'Building',
    desc: 'End-to-end industrial building solutions from customised design to fabrication and erection.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&auto=format&fit=crop&q=75',
    client: 'Various Clients',
    location: 'Nairobi & Environs',
    year: '2022–2024',
    highlights: [
      'Structural steel fabrication',
      'Concrete floor hardening',
      'Roofing and cladding systems',
      'Loading bay construction'
    ],
    color: 'from-primary to-blue-700',

    gallery: [
      '/projects/warehouse-1.jpg',
      '/projects/warehouse-2.jpg',
      '/projects/warehouse-3.jpg',
      '/projects/warehouse-4.jpg',
    ],
    googlePhotosUrl: '',
  },
  {
    id: 'cnc-machining-fabrication',
    title: 'CNC Machining & Fabrication',
    category: 'Building',
    desc: 'Precision CNC machining and fabrication services for industrial and commercial applications.',
    image: 'projects/cnc-1.jpg',
    client: 'Various Clients',
    location: 'Nairobi & Environs',
    year: '2022–2024',
    highlights: [
      'Structural steel fabrication',
      'Concrete floor hardening',
      'Roofing and cladding systems',
      'Loading bay construction'
    ],
    color: 'from-primary to-blue-700',

    gallery: [
      '/projects/cnc-1.jpg',
      '/projects/cnc-2.jpg',
      '/projects/cnc-3.jpg',
      '/projects/cnc-4.jpg',
    ],
    googlePhotosUrl: 'https://photos.app.goo.gl/vXCPdsj2sFBNCTDu8',
  },
  {
    id: 'road-construction',
    title: 'Road Construction & Paving',
    category: 'Building',
    desc: 'Comprehensive road construction and paving services for urban and rural infrastructure projects.',
    image: 'projects/road.jpg',
    client: 'Various Clients',
    location: 'Nairobi & Environs',
    year: '2022–2024',
    highlights: [
      '\Asphalt paving and resurfacing',
      'Concrete road construction',
      'Drainage and culvert installation',
      'Traffic management and safety measures'
    ],
    color: 'from-primary to-blue-700',

    gallery: [
      '/projects/cnc-1.jpg',
      '/projects/cnc-2.jpg',
      '/projects/cnc-3.jpg',
      '/projects/cnc-4.jpg',
    ],
    googlePhotosUrl: 'https://photos.app.goo.gl/93m28aGSD9MhtpQaA',
  },
];