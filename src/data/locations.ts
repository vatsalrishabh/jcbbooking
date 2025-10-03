export interface LocationData {
  name: string;
  slug: string;
  type: 'area' | 'district' | 'city';
  parent?: string;
  pincode?: string[];
  description: string;
  keywords: string[];
  population?: string;
  landmarks?: string[];
}

// Prayagraj Areas and Localities
export const prayagrajAreas: LocationData[] = [
  {
    name: "Civil Lines",
    slug: "civil-lines",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211001"],
    description: "Premium residential and commercial area in Prayagraj with excellent connectivity",
    keywords: ["civil lines prayagraj", "jcb rental civil lines", "excavator hire civil lines"],
    landmarks: ["High Court", "University of Allahabad", "All Saints Cathedral"]
  },
  {
    name: "Katra",
    slug: "katra",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211002"],
    description: "Historic commercial hub in old Prayagraj city",
    keywords: ["katra prayagraj", "jcb services katra", "construction equipment katra"],
    landmarks: ["Katra Market", "Hanuman Temple", "Patalpuri Temple"]
  },
  {
    name: "Chowk",
    slug: "chowk",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211003"],
    description: "Central business district of Prayagraj",
    keywords: ["chowk prayagraj", "jcb rental chowk", "earthmoving equipment chowk"],
    landmarks: ["Company Bagh", "Public Library", "GPO"]
  },
  {
    name: "Georgetown",
    slug: "georgetown",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211004"],
    description: "Well-planned residential area with modern amenities",
    keywords: ["georgetown prayagraj", "jcb hire georgetown", "construction services georgetown"],
    landmarks: ["Georgetown Market", "St. Joseph's College", "Thornhill Mayne Memorial"]
  },
  {
    name: "Kareli",
    slug: "kareli",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211016"],
    description: "Rapidly developing suburban area in Prayagraj",
    keywords: ["kareli prayagraj", "jcb services kareli", "excavation work kareli"],
    landmarks: ["Kareli Railway Station", "Industrial Area", "Residential Colonies"]
  },
  {
    name: "Naini",
    slug: "naini",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211008"],
    description: "Industrial and residential area across Yamuna river",
    keywords: ["naini prayagraj", "jcb rental naini", "industrial construction naini"],
    landmarks: ["Naini Bridge", "IFFCO Plant", "Naini Railway Station"]
  },
  {
    name: "Jhunsi",
    slug: "jhunsi",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211019"],
    description: "Historic area known for Akshayavat and religious significance",
    keywords: ["jhunsi prayagraj", "jcb services jhunsi", "construction equipment jhunsi"],
    landmarks: ["Akshayavat", "Patalpuri Temple", "Saraswati Ghat"]
  },
  {
    name: "Mumfordganj",
    slug: "mumfordganj",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211002"],
    description: "Central area with good connectivity and commercial establishments",
    keywords: ["mumfordganj prayagraj", "jcb hire mumfordganj", "earthmoving mumfordganj"],
    landmarks: ["Leader Road", "Mumford Ganj Market", "Medical College"]
  },
  {
    name: "Allenpur",
    slug: "allenpur",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211006"],
    description: "Residential area with educational institutions",
    keywords: ["allenpur prayagraj", "jcb rental allenpur", "construction services allenpur"],
    landmarks: ["Ewing Christian College", "Allenpur Market", "Residential Colonies"]
  },
  {
    name: "Daraganj",
    slug: "daraganj",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211006"],
    description: "Historic area near the confluence of rivers",
    keywords: ["daraganj prayagraj", "jcb services daraganj", "excavation daraganj"],
    landmarks: ["Sangam", "Daraganj Ghat", "Akbar Fort"]
  },
  {
    name: "Tagore Town",
    slug: "tagore-town",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211002"],
    description: "Well-developed residential area with modern facilities",
    keywords: ["tagore town prayagraj", "jcb hire tagore town", "construction tagore town"],
    landmarks: ["Tagore Town Market", "Schools", "Parks"]
  },
  {
    name: "Ashok Nagar",
    slug: "ashok-nagar",
    type: "area",
    parent: "Prayagraj",
    pincode: ["211001"],
    description: "Popular residential locality with good infrastructure",
    keywords: ["ashok nagar prayagraj", "jcb rental ashok nagar", "earthmoving ashok nagar"],
    landmarks: ["Ashok Nagar Market", "Community Center", "Schools"]
  }
];

// Major UP Districts for broader SEO coverage
export const upDistricts: LocationData[] = [
  {
    name: "Lucknow",
    slug: "lucknow",
    type: "district",
    pincode: ["226001", "226002", "226003"],
    description: "Capital city of Uttar Pradesh with major construction projects",
    keywords: ["lucknow jcb rental", "excavator hire lucknow", "construction equipment lucknow"],
    population: "28 lakh",
    landmarks: ["Bara Imambara", "Chota Imambara", "Rumi Darwaza"]
  },
  {
    name: "Kanpur",
    slug: "kanpur",
    type: "district",
    pincode: ["208001", "208002", "208003"],
    description: "Industrial hub of UP requiring heavy construction equipment",
    keywords: ["kanpur jcb services", "jcb rental kanpur", "industrial construction kanpur"],
    population: "27 lakh",
    landmarks: ["Kanpur Central", "IIT Kanpur", "Green Park Stadium"]
  },
  {
    name: "Varanasi",
    slug: "varanasi",
    type: "district",
    pincode: ["221001", "221002", "221003"],
    description: "Holy city with ongoing infrastructure development projects",
    keywords: ["varanasi jcb rental", "construction equipment varanasi", "excavation varanasi"],
    population: "12 lakh",
    landmarks: ["Kashi Vishwanath Temple", "Sarnath", "BHU"]
  },
  {
    name: "Agra",
    slug: "agra",
    type: "district",
    pincode: ["282001", "282002", "282003"],
    description: "Tourist city with continuous construction and development work",
    keywords: ["agra jcb services", "jcb hire agra", "construction agra"],
    population: "16 lakh",
    landmarks: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"]
  },
  {
    name: "Meerut",
    slug: "meerut",
    type: "district",
    pincode: ["250001", "250002", "250003"],
    description: "Major commercial center in western UP",
    keywords: ["meerut jcb rental", "excavator meerut", "construction equipment meerut"],
    population: "13 lakh",
    landmarks: ["Suraj Kund", "Gandhi Bagh", "Meerut Cantonment"]
  },
  {
    name: "Ghaziabad",
    slug: "ghaziabad",
    type: "district",
    pincode: ["201001", "201002", "201003"],
    description: "NCR city with rapid urbanization and construction boom",
    keywords: ["ghaziabad jcb services", "jcb rental ghaziabad", "construction ghaziabad"],
    population: "17 lakh",
    landmarks: ["Indirapuram", "Vasundhara", "Raj Nagar"]
  },
  {
    name: "Bareilly",
    slug: "bareilly",
    type: "district",
    pincode: ["243001", "243002", "243003"],
    description: "Commercial hub in northern UP with growing infrastructure",
    keywords: ["bareilly jcb rental", "construction equipment bareilly", "excavation bareilly"],
    population: "9 lakh",
    landmarks: ["Alakhnath Temple", "Fun City", "Phoenix Mall"]
  },
  {
    name: "Moradabad",
    slug: "moradabad",
    type: "district",
    pincode: ["244001", "244002", "244003"],
    description: "Brass city with industrial and residential development",
    keywords: ["moradabad jcb services", "jcb hire moradabad", "construction moradabad"],
    population: "9 lakh",
    landmarks: ["Jama Masjid", "Raza Library", "Sai Temple"]
  }
];

// Services for cross-referencing
export const services = [
  {
    name: "Excavation Services",
    slug: "excavation",
    keywords: ["excavation", "digging", "foundation work", "site preparation"]
  },
  {
    name: "Road Construction",
    slug: "road-construction",
    keywords: ["road construction", "road building", "highway construction", "road repair"]
  },
  {
    name: "Demolition Services",
    slug: "demolition",
    keywords: ["demolition", "building demolition", "structure removal", "site clearance"]
  },
  {
    name: "Earthmoving",
    slug: "earthmoving",
    keywords: ["earthmoving", "soil moving", "land leveling", "grading"]
  },
  {
    name: "Construction Equipment Rental",
    slug: "equipment-rental",
    keywords: ["equipment rental", "machinery hire", "construction tools", "heavy equipment"]
  }
];

export const allLocations = [...prayagrajAreas, ...upDistricts];