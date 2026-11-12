export interface BranchLocation {
  city: string;
  slug: string;
  state: string;
  region: "Headquarters" | "North" | "South" | "East" | "West" | "Central";
  tagline: string;
  description: string;
  isHeadquarters?: boolean;
  address: string;
  phone: string;
  email: string;
  territoryCovered: string[];
  keySectors: string[];
  majorClientsServed: string[];
  serviceCapabilities: string[];
}

export const BRANCH_LOCATIONS: BranchLocation[] = [
  {
    city: "Hyderabad",
    slug: "hyderabad",
    state: "Telangana",
    region: "Headquarters",
    isHeadquarters: true,
    tagline: "Corporate Headquarters, Central Metrology & 300-Bar Hydrotesting Center",
    description:
      "Orbit Technologies' central headquarters houses our advanced application engineering laboratory, India's only dedicated Parr-certified 300-bar oxygen vessel hydrostatic test facility, central bonded spare parts warehouse, and our group manufacturing arm Orlab Instruments Pvt. Ltd.",
    address: "B-50, Industrial Estate, Sanath Nagar, Hyderabad – 500 018, Telangana, India",
    phone: "+91 - 40 - 6721 6354 / +91 - 8712613589",
    email: "orbit@orbitindia.com / servicecare@orbitindia.com",
    territoryCovered: ["Telangana", "Andhra Pradesh", "All-India Escalations"],
    keySectors: ["Central Analytical R&D", "Pharmaceuticals", "Power Generation", "Defense Labs"],
    majorClientsServed: ["CSIR-IICT", "NTPC Ramagundam", "Singareni Collieries (SCCL)", "Vimta Labs", "DRDO-DMRL"],
    serviceCapabilities: [
      "300-Bar Oxygen Vessel Hydrostatic Testing & Re-Certification",
      "Central Component-Level Board Diagnostics & Overhauls",
      "Nationwide Spare Parts & Consumables Dispatch within 24h",
      "Customer Sample Feasibility & ASTM Method Development",
    ],
  },
  {
    city: "New Delhi",
    slug: "new-delhi",
    state: "Delhi NCR",
    region: "North",
    tagline: "Northern Regional Sales & Technical Service Hub",
    description:
      "Serving Delhi NCR, Haryana, Punjab, Rajasthan, and Himachal Pradesh. Our resident application and field service engineers support academic institutes, central public sector undertakings (PSUs), and northern thermal power plants.",
    address: "Regional Service Center, Connaught Place / Nehru Place Commercial Complex, New Delhi",
    phone: "+91 - 81438 85547",
    email: "delhi@orbitindia.com",
    territoryCovered: ["Delhi NCR", "Haryana", "Punjab", "Rajasthan", "Himachal Pradesh", "Jammu & Kashmir"],
    keySectors: ["Academic Research", "Power Generation", "Cement Quality Control", "Government PSUs"],
    majorClientsServed: ["IIT Delhi", "NTPC Corporate / Dadri", "IOCL R&D Faridabad", "Shree Cement Ras", "Bureau of Indian Standards"],
    serviceCapabilities: [
      "Emergency breakdown dispatch within 24 hours across NCR & adjoining states",
      "Annual Maintenance Contract (AMC/CMC) quarterly servicing",
      "On-site calorimeter and furnace calibration audits",
    ],
  },
  {
    city: "Kolkata",
    slug: "kolkata",
    state: "West Bengal",
    region: "East",
    tagline: "Eastern Regional Hub & Commercial Coal Inspection Center",
    description:
      "Positioned at the commercial gateway of Eastern India. Supporting coal trading companies, commercial third-party inspection agencies (TIC), thermal power utilities, and geological laboratories across West Bengal and the North-East.",
    address: "Eastern Regional Office, Salt Lake Sector V / Park Street, Kolkata – 700 091, West Bengal",
    phone: "+91 - 81438 85540",
    email: "kolkata@orbitindia.com",
    territoryCovered: ["West Bengal", "Bihar", "Assam", "Meghalaya", "North-East States"],
    keySectors: ["Coal Mining & Washing", "Thermal Power", "Inspection & Testing Agencies (TIC)", "Heavy Industry"],
    majorClientsServed: ["Coal India Limited (CIL HQ)", "CESC (Budge Budge & Titagarh)", "SGS India Kolkata", "Mitra S.K.", "Haldia Petrochemicals"],
    serviceCapabilities: [
      "High-throughput commercial coal lab maintenance contracts",
      "Parr 6400 bomb calorimeter tune-ups and benzoic acid standardization",
      "Vibratory mill and sample preparation equipment servicing",
    ],
  },
  {
    city: "Mumbai",
    slug: "mumbai",
    state: "Maharashtra",
    region: "West",
    tagline: "Western Regional Hub — Refineries, Petrochemicals & High-Pressure Systems",
    description:
      "Covering the industrial heartland of Maharashtra and Goa. Specialists in high-pressure stirred reactor autoclaves (Parr), petroleum testing, and organic elemental microanalysis for chemical refineries and R&D centers.",
    address: "Western Zonal Office, Andheri East / Navi Mumbai MIDC, Mumbai – 400 069, Maharashtra",
    phone: "+91 - 81438 85547",
    email: "mumbai@orbitindia.com",
    territoryCovered: ["Mumbai Metropolitan Region", "Konkan Belt", "Goa"],
    keySectors: ["Petroleum Refining", "Chemical Synthesis", "Nuclear & Atomic Research", "Testing Laboratories"],
    majorClientsServed: ["BARC Mumbai", "IIT Bombay", "BPCL Mumbai Refinery", "HPCL Mumbai", "Reliance Industries Corporate"],
    serviceCapabilities: [
      "High-pressure autoclave seal inspection, magnetic drive overhauls",
      "Gas line pressure leak detection and safety relief valve checks",
      "Preventive AMC visits for petroleum quality control laboratories",
    ],
  },
  {
    city: "Bangalore",
    slug: "bangalore",
    state: "Karnataka",
    region: "South",
    tagline: "Southern Technology & Academic Research Support",
    description:
      "Supporting Karnataka's scientific institutes, advanced materials research centers, green energy initiatives, and steel production complexes.",
    address: "Southern Regional Office, Peenya Industrial Area / Malleshwaram, Bangalore – 560 058, Karnataka",
    phone: "+91 - 81438 85540",
    email: "bangalore@orbitindia.com",
    territoryCovered: ["Karnataka", "Kerala"],
    keySectors: ["Materials Science", "Nanotechnology", "Green Energy R&D", "Integrated Steel Plants"],
    majorClientsServed: ["Indian Institute of Science (IISc)", "JNCASR", "HPCL Green R&D Centre", "JSW Steel Vijayanagar"],
    serviceCapabilities: [
      "High-temperature furnace element replacement and Eurotherm PID tuning",
      "Precision analytical balance calibration (A&D Apollo/Fortis)",
      "Reaction calorimeter method support for chemical research",
    ],
  },
  {
    city: "Chennai",
    slug: "chennai",
    state: "Tamil Nadu",
    region: "South",
    tagline: "Tamil Nadu Energy, Automotive & Coastal Industry Support",
    description:
      "Providing dedicated technical support for coastal thermal power plants, cement manufacturing corridors, automotive metallurgical labs, and central research centers.",
    address: "Regional Service Center, Guindy Industrial Estate, Chennai – 600 032, Tamil Nadu",
    phone: "+91 - 81438 85547",
    email: "chennai@orbitindia.com",
    territoryCovered: ["Tamil Nadu", "Puducherry"],
    keySectors: ["Thermal Power Utilities", "Cement QC", "Automotive Metallurgy", "Petrochemicals"],
    majorClientsServed: ["IIT Madras", "TANGEDCO Coastal Thermal Stations", "Dalmia Cement Dalmiapuram", "CPCL Refinery"],
    serviceCapabilities: [
      "Coal calorific value standardization and bomb hydrotesting logistics",
      "Elemental Carbon/Sulfur analyzer consumables replenishment",
      "Routine preventive maintenance under comprehensive CMC contracts",
    ],
  },
  {
    city: "Pune",
    slug: "pune",
    state: "Maharashtra",
    region: "West",
    tagline: "Automotive, Defense & Catalysis Research Support Center",
    description:
      "Positioned to serve Pune's dense cluster of chemical synthesis institutes, automotive metallurgists, defense research labs, and specialty polymer manufacturers.",
    address: "Branch Support Center, Bhosari MIDC / Pimpri-Chinchwad, Pune – 411 026, Maharashtra",
    phone: "+91 - 81438 85540",
    email: "pune@orbitindia.com",
    territoryCovered: ["Pune", "Nashik", "Aurangabad", "Kolhapur", "Solapur"],
    keySectors: ["Catalysis & Polymers", "Automotive Metallurgy", "Defense Research", "Specialty Chemicals"],
    majorClientsServed: ["CSIR-NCL Pune", "DRDO-HEMRL", "ARAI Pune", "Leading Automotive OEMs"],
    serviceCapabilities: [
      "Catalytic stirred reactor assembly and pressure testing",
      "High-frequency induction combustion CS maintenance",
      "Rapid on-site emergency call-out support",
    ],
  },
  {
    city: "Nagpur",
    slug: "nagpur",
    state: "Maharashtra",
    region: "Central",
    tagline: "Central India Coal Mining & Thermal Energy Hub",
    description:
      "Centrally located in India to support the extensive Western Coalfields (WCL) pitheads, Mahagenco thermal power utilities, and Vidarbha mineral processing plants.",
    address: "Central India Service Hub, Wardha Road / MIDC Hingna, Nagpur – 440 016, Maharashtra",
    phone: "+91 - 8712613589",
    email: "nagpur@orbitindia.com",
    territoryCovered: ["Vidarbha Region", "Western Madhya Pradesh", "Chhindwara / Betul Belt"],
    keySectors: ["Coal Mining & Washeries", "Thermal Power Generation", "Mineral Beneficiation"],
    majorClientsServed: ["Western Coalfields Ltd (WCL)", "Mahagenco (Koradi, Khaparkheda, Chandrapur)", "VNIT Nagpur"],
    serviceCapabilities: [
      "24-hour turnaround for thermal power station calorimeter breakdowns",
      "TGA 3000 proximate analyzer calibration and crucible alignment",
      "Local stocking of ignition wires, bomb seals, and combustion capsules",
    ],
  },
  {
    city: "Baroda",
    slug: "baroda",
    state: "Gujarat",
    region: "West",
    tagline: "Gujarat Petrochemical, Refinery & Fertilizer Corridor",
    description:
      "Dedicated branch office supporting Gujarat's petrochemical complexes, fertilizer plants, commercial testing laboratories, and coastal industrial mega-projects.",
    address: "Gujarat Branch Office, Alkapuri / Makarpura GIDC, Vadodara – 390 010, Gujarat",
    phone: "+91 - 81438 85547",
    email: "baroda@orbitindia.com",
    territoryCovered: ["Vadodara", "Ahmedabad", "Surat", "Bharuch", "Dahej", "Jamnagar", "Mundra", "Kutch"],
    keySectors: ["Petroleum Refining", "Fertilizers & Agro-Chemicals", "Port Coal Terminals", "Chemical Synthesis"],
    majorClientsServed: ["Reliance Jamnagar Refinery", "IOCL Gujarat Refinery", "Adani Power Mundra", "GSFC", "GNFC"],
    serviceCapabilities: [
      "High-pressure autoclave maintenance and rupture disc recertification",
      "Nitrogen / protein Dumas analyzer method validation",
      "Full on-site AMC execution across Dahej & Hazira chemical zones",
    ],
  },
  {
    city: "Bhubaneswar",
    slug: "bhubaneswar",
    state: "Odisha",
    region: "East",
    tagline: "Odisha Steel, Mining & Mineral Processing Corridor",
    description:
      "Providing round-the-clock service support for Odisha's massive steel manufacturing plants, bauxite/iron ore mines, alumina refineries, and port cargo terminals.",
    address: "Odisha Regional Office, Chandrasekharpur / Rasulgarh, Bhubaneswar – 751 010, Odisha",
    phone: "+91 - 81438 85540",
    email: "bhubaneswar@orbitindia.com",
    territoryCovered: ["Odisha", "Angul", "Kalinganagar", "Jajpur", "Jharsuguda", "Rourkela", "Paradip"],
    keySectors: ["Iron Ore & Bauxite Mining", "Integrated Steel Plants", "Aluminium Smelting", "Port Inspection"],
    majorClientsServed: ["Tata Steel Kalinganagar", "Jindal Steel Angul", "Vedanta Jharsuguda", "NALCO Damanjodi", "NTPC Talcher"],
    serviceCapabilities: [
      "High-frequency CS analyzer induction coil servicing and dust trap cleaning",
      "SIEBTECHNIK TEMA pulverizer and disc mill maintenance",
      "Rapid dispatch to Kalinganagar, Angul, and Jharsuguda industrial clusters",
    ],
  },
  {
    city: "Bilaspur",
    slug: "bilaspur",
    state: "Chhattisgarh",
    region: "Central",
    tagline: "Dedicated Pithead Coal Quality Testing Support",
    description:
      "Stationed directly within India's largest coal-producing belt, supporting South Eastern Coalfields Limited (SECL) pithead laboratories, washeries, and mega thermal stations.",
    address: "Coal Belt Service Hub, Vyapar Vihar / Seepat Road, Bilaspur – 495 001, Chhattisgarh",
    phone: "+91 - 8712613589",
    email: "bilaspur@orbitindia.com",
    territoryCovered: ["Bilaspur", "Korba", "Raigarh", "SECL Operational Areas"],
    keySectors: ["Coal Mining & Washeries", "Super Thermal Power Stations", "Aluminium Smelters"],
    majorClientsServed: ["SECL Operational Areas (Gevra, Dipka, Kusmunda)", "NTPC Korba", "NTPC Sipat", "BALCO Korba"],
    serviceCapabilities: [
      "Dedicated resident engineers for coal GCV bomb calorimeters",
      "On-site oxygen combustion vessel safety inspections",
      "Immediate stock availability of combustion cups, O-rings, and thread lubricant",
    ],
  },
  {
    city: "Ranchi",
    slug: "ranchi",
    state: "Jharkhand",
    region: "East",
    tagline: "Jharkhand Mining, Metallurgy & Coal Research Center",
    description:
      "Supporting Jharkhand's coal mining subsidiaries, steel plants, coal washeries, and national mineral research institutes in Dhanbad and Ranchi.",
    address: "Jharkhand Office, Ashok Nagar / Main Road, Ranchi – 834 002, Jharkhand",
    phone: "+91 - 81438 85540",
    email: "ranchi@orbitindia.com",
    territoryCovered: ["Jharkhand", "Dhanbad", "Bokaro", "Jamshedpur", "Hazaribagh"],
    keySectors: ["Coal Fuel Research", "Mine Planning", "Steel Metallurgy", "Geological Exploration"],
    majorClientsServed: ["Central Coalfields Ltd (CCL)", "CMPDI Ranchi", "CSIR-CIMFR Dhanbad", "SAIL Bokaro", "Tata Steel Jamshedpur"],
    serviceCapabilities: [
      "Coal proximate analysis TGA calibration and temperature profiling",
      "Ash fusion determinator optical alignment and atmosphere checks",
      "Routine preventive maintenance across Dhanbad & Bokaro corridors",
    ],
  },
  {
    city: "Raipur",
    slug: "raipur",
    state: "Chhattisgarh",
    region: "Central",
    tagline: "Chhattisgarh Steel, Sponge Iron & Cement Belt Support",
    description:
      "Serving Central India's dense belt of secondary steel producers, sponge iron plants, ferro-alloy smelters, and large-scale cement manufacturing clusters.",
    address: "Branch Support Office, Pandri / Tatibandh Industrial Area, Raipur – 492 001, Chhattisgarh",
    phone: "+91 - 8712613589",
    email: "raipur@orbitindia.com",
    territoryCovered: ["Raipur", "Durg", "Bhilai", "Rajnandgaon"],
    keySectors: ["Sponge Iron & Steel", "Cement & Clinker Plants", "Thermal Captive Power"],
    majorClientsServed: ["SAIL Bhilai Steel Plant", "UltraTech Cement Hirmi", "Ambuja Cement Bhatapara", "JSPL Raigarh"],
    serviceCapabilities: [
      "Induction CS analyzer high-frequency oscillator servicing",
      "Automatic proximate TGA sensor calibration and balance zeroing",
      "Routine consumable supply for metallurgical QA labs",
    ],
  },
  {
    city: "Vizag",
    slug: "vizag",
    state: "Andhra Pradesh",
    region: "South",
    tagline: "Coastal Andhra Metallurgy, Refinery & Port Inspection Hub",
    description:
      "Supporting the Visakhapatnam industrial corridor: integrated steel plants, coastal petroleum refineries, naval defense establishments, and port coal inspection labs.",
    address: "Coastal Support Office, Dwaraka Nagar / Gajuwaka Industrial Corridor, Visakhapatnam – 530 016, Andhra Pradesh",
    phone: "+91 - 81438 85547",
    email: "vizag@orbitindia.com",
    territoryCovered: ["Visakhapatnam", "Vizianagaram", "Kakinada", "Srikakulam"],
    keySectors: ["Shore-Based Steel Smelting", "Petroleum Refining", "Port Cargo Inspection", "Heavy Engineering"],
    majorClientsServed: ["RINL (Vizag Steel)", "HPCL Visakh Refinery", "NTPC Simhadri", "SGS / Inspectorate Griffith Vizag"],
    serviceCapabilities: [
      "Port inspection lab rapid response for ship-loading coal analyses",
      "Oxygen vessel leak detection and pressure transducer calibration",
      "Preventive maintenance for high-frequency CS and ONH determinators",
    ],
  },
  {
    city: "Lucknow",
    slug: "lucknow",
    state: "Uttar Pradesh",
    region: "North",
    tagline: "Uttar Pradesh Power Utilities & Agricultural Research Center",
    description:
      "Serving northern state power generation utilities (UPRVUNL), central CSIR life science institutes, and agricultural soil testing laboratories across Uttar Pradesh.",
    address: "Regional Support Center, Gomti Nagar / Hazratganj, Lucknow – 226 010, Uttar Pradesh",
    phone: "+91 - 81438 85547",
    email: "lucknow@orbitindia.com",
    territoryCovered: ["Central & Eastern Uttar Pradesh", "Sonbhadra Power Belt (Anpara, Obra, Singrauli)"],
    keySectors: ["State Power Utilities", "CSIR Drug Research", "Agricultural Soil Testing"],
    majorClientsServed: ["UPRVUNL Power Stations", "CSIR-CDRI Lucknow", "CSIR-NBRI", "State Soil Health Labs"],
    serviceCapabilities: [
      "Thermal power station calorimeter maintenance and training",
      "Soil nutrient laboratory equipment support (Orlab Kits)",
      "Prompt engineer visits to Sonbhadra power cluster",
    ],
  },
];
