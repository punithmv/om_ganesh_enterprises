import { Product, ElectricalService, Review, FaqItem } from '../types';

export const STORE_INFO = {
  name: 'Om Ganesh Enterprises',
  tagline: 'Direct Wholesale & Retail for Construction Electricals, Wires, Switchgear, Appliances & Certified Electricians',
  experienceYears: 14,
  phone: '+91 78160 73737',
  whatsappNumber: '917816073737',
  email: 'contact@omganeshenterprises.in',
  address: 'Muddegowdru complex, Near Bapuji bank, Binny co road, Mandipet',
  cityStatePincode: 'Davanagere - 577 001',
  timing: 'Mon - Sun: 8:30 AM – 9:30 PM (All 7 Days Open)',
  emergencyAvailable: '24/7 Electrician Dispatch & Urgent Site Delivery Available',
  rating: 4.9,
  reviewsCount: 1250,
  authorizedBrands: [
    'Polycab',
    'Finolex',
    'Havells',
    'Legrand',
    'Schneider Electric',
    'L&T Electrical',
    'Anchor Panasonic',
    'Atomberg',
    'Crompton',
    'Philips',
    'Luminous',
    'Bajaj',
    'VIP Conduits',
    'Precision'
  ]
};

export const PRODUCTS: Product[] = [
  // --- CONSTRUCTION ELECTRICAL MATERIAL: WIRES & HEAVY CABLES ---
  {
    id: 'wire-polycab-fr-25',
    name: 'Polycab Maxima Flame Retardant (FR-LSH) 2.5 sq.mm House Wire',
    category: 'wires',
    division: 'construction',
    brand: 'Polycab',
    price: 3450,
    originalPrice: 4100,
    rating: 5.0,
    reviewsCount: 340,
    inStock: true,
    unit: '90m Coil Roll',
    warranty: '100% Genuine ISI Marked (IS:694)',
    color: 'Red / Blue / Yellow / Black / Green',
    badge: '100% Electrolytic Copper • FR-LSH',
    description: 'India’s #1 construction house wire with Low Smoke Zero Halogen insulation. 100% pure annealed copper preventing short-circuit overheating and toxic fumes.',
    specs: {
      'Conductor': '100% Pure High Conductivity Annealed Copper',
      'Cross Section Area': '2.5 sq. mm (Ideal for Power Sockets, Kitchen & AC Lines)',
      'Current Carrying Capacity': 'Up to 22 Amperes continuous safe load',
      'Insulation': 'Flame Retardant Low Smoke Halogen (FR-LSH) PVC',
      'Standard Length': '90 Metres with accurate sequential metre printing',
      'Certification': 'ISI Certified (IS:694) & CE Marked'
    },
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wire-finolex-fr-15',
    name: 'Finolex Flameguard 1.5 sq.mm Copper House Wiring Cable',
    category: 'wires',
    division: 'construction',
    brand: 'Finolex',
    price: 2280,
    originalPrice: 2750,
    rating: 4.9,
    reviewsCount: 290,
    inStock: true,
    unit: '90m Coil Roll',
    warranty: 'ISI Marked Lifetime Conductor Guarantee',
    color: 'Red / Blue / Yellow / Green / Black',
    badge: 'Most Popular for Lighting & Fans',
    description: 'Class-leading electrolytic multi-strand copper cable engineered specifically for internal house conduit piping, lighting circuits, and fan switches.',
    specs: {
      'Conductor': 'High Purity Bright Annealed Copper',
      'Size': '1.5 sq. mm (1100V Grade)',
      'Current Capacity': 'Up to 16 Amperes',
      'Thermal Stability': 'Resistant to 70°C continuous operating temperature',
      'Coil Size': '90 Metres Box Pack'
    },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wire-polycab-40-heavy',
    name: 'Polycab 4.0 sq.mm Heavy Duty Power & AC Copper Cable',
    category: 'wires',
    division: 'construction',
    brand: 'Polycab',
    price: 5290,
    originalPrice: 6200,
    rating: 5.0,
    reviewsCount: 175,
    inStock: true,
    unit: '90m Coil Roll',
    warranty: '100% Genuine Tested Copper',
    color: 'Red / Blue / Black',
    badge: 'Heavy Load AC & Master DB Line',
    description: 'Heavy duty 4.0 sq mm copper wire engineered for 1.5 - 2.0 Ton air conditioners, electric car chargers, water heaters, and main distribution box loops.',
    specs: {
      'Current Rating': 'Up to 31 Amperes safe peak load',
      'Conductor': 'High purity oxygen-free electrolytic copper',
      'Fire Rating': 'Zero halogen emissions & anti-rodent PVC jacket',
      'Packaging': '90m tamper-evident shrink wrap'
    },
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wire-havells-submersible',
    name: 'Havells 3-Core Flat Submersible Pump Copper Cable (100m)',
    category: 'wires',
    division: 'construction',
    brand: 'Havells',
    price: 7850,
    originalPrice: 9400,
    rating: 4.9,
    reviewsCount: 110,
    inStock: true,
    unit: '100m Drum Roll',
    warranty: '5 Years Manufacturer Guarantee',
    badge: 'Waterproof & High Depth Tested',
    description: 'Heavy-grade waterproof flat 3-core cable with vulcanized rubber & PVC jacket for borewell submersible pumps, agriculture, and water sumps.',
    specs: {
      'Core Size': '3 x 2.5 sq. mm Flat Cable',
      'Water Resistance': 'Submersible up to 500 metres depth',
      'Sheath': 'Tough abrasion-resistant moisture-proof outer jacket',
      'Applications': 'Borewell submersible pumps, sewage sump motors'
    },
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80'
  },

  // --- CONSTRUCTION ELECTRICAL MATERIAL: SWITCHGEAR, MCBs, RCCBs & FUSES ---
  {
    id: 'switchgear-legrand-mcb-dp',
    name: 'Legrand RX³ 32A Double Pole (DP) MCB Isolator & Breaker',
    category: 'switchgear',
    division: 'construction',
    brand: 'Legrand',
    price: 460,
    originalPrice: 620,
    rating: 5.0,
    reviewsCount: 220,
    inStock: true,
    unit: '1 Piece',
    warranty: '5 Years Replacement Warranty',
    badge: '10kA Short-Circuit Capacity',
    description: 'Premium French-engineered C-Curve Double Pole miniature circuit breaker with bi-connect terminals and arc-quenching chute for total home circuit protection.',
    specs: {
      'Poles': '2 Pole (Double Pole DP)',
      'Current Rating': '32 Amperes (Also available in 16A, 25A, 40A, 63A)',
      'Breaking Capacity': '10 kA (IEC 60898-1 certified)',
      'Trip Curve': 'C-Type (Inductive and resistive residential & commercial loads)',
      'Mounting': 'Standard 35mm DIN Rail'
    },
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'switchgear-schneider-rccb',
    name: 'Schneider Acti9 63A 4-Pole 30mA RCCB Earth Leakage Breaker',
    category: 'switchgear',
    division: 'construction',
    brand: 'Schneider Electric',
    price: 3450,
    originalPrice: 4290,
    rating: 5.0,
    reviewsCount: 145,
    inStock: true,
    unit: '1 Piece',
    warranty: '5 Years Replacement Warranty',
    badge: '⚡ Lifesaving 30mA Shock Protection',
    description: 'Mandatory electrical safety device that trips in under 40 milliseconds upon detecting electric shock, human contact, or wiring ground leakage.',
    specs: {
      'Sensitivity': '30 mA (Human shock protection grade)',
      'Poles': '4 Pole (3 Phase + Neutral 415V)',
      'Current Rating': '63 Amperes',
      'Test Feature': 'Built-in monthly test push-button mechanism',
      'Certifications': 'IS 12640-1, IEC 61008-1'
    },
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'switchgear-havells-db-8way',
    name: 'Havells 8-Way Double Door IP43 Distribution Board (DB Box)',
    category: 'switchgear',
    division: 'construction',
    brand: 'Havells',
    price: 1890,
    originalPrice: 2450,
    rating: 4.8,
    reviewsCount: 180,
    inStock: true,
    unit: '1 Metal Enclosure Unit',
    warranty: '10 Years Rust-Proof Warranty',
    badge: 'CRCA Steel • Powder Coated IP43',
    description: 'Heavy gauge deep-drawn CRCA sheet steel distribution board box with insulated copper busbar, neutral & earth bars, and transparent acrylic door.',
    specs: {
      'Capacity': '8 Modules (SPN) / Up to 12 Single Pole MCBs',
      'Material': 'High grade CRCA Cold Rolled Steel with 7-tank powder coating',
      'Protection': 'IP43 Ingress Protection (Dust & water-splash proof)',
      'Included': 'Tinned electrolytic copper busbar, earthing terminal block, DIN rail'
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'switchgear-anchor-kitkat-fuse',
    name: 'Anchor Heavy Duty 63A 415V Kit-Kat Porcelain Rewirable Fuse',
    category: 'switchgear',
    division: 'construction',
    brand: 'Anchor Panasonic',
    price: 380,
    originalPrice: 520,
    rating: 4.9,
    reviewsCount: 260,
    inStock: true,
    unit: '1 Set (Base + Carrier)',
    warranty: 'Lifetime Ceramic Body Warranty',
    badge: 'High-Temp Glazed Porcelain',
    description: 'High-density vitrified porcelain electrical fuse for main power intake lines, commercial meter panels, and transformer secondary feeds with phosphor bronze contacts.',
    specs: {
      'Rating': '63 Amperes / 415 Volts AC',
      'Material': 'Non-hygroscopic glazed electrical grade porcelain',
      'Contacts': 'Solid phosphor-bronze spring clips with tin plating',
      'Applications': 'Main service entrance line protection, building panel boards'
    },
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'switchgear-havells-changeover',
    name: 'Havells 63A 4-Pole Manual Changeover Switch (Mains / Gen / Solar)',
    category: 'switchgear',
    division: 'construction',
    brand: 'Havells',
    price: 3650,
    originalPrice: 4700,
    rating: 4.9,
    reviewsCount: 95,
    inStock: true,
    unit: '1 Enclosed Unit',
    warranty: '5 Years Guarantee',
    badge: 'Heavy Duty On-Load Changeover',
    description: 'Robust front-operated 4-pole changeover switch enclosed in a sheet steel enclosure with padlockable handle for switching between BESCOM power and diesel generator / solar inverter.',
    specs: {
      'Current Rating': '63 Amps 4-Pole (415V)',
      'Enclosure': 'IP54 Sheet Steel with cable gland knockouts',
      'Action': 'Center OFF position with quick break contact mechanism'
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },

  // --- CONSTRUCTION ELECTRICAL MATERIAL: CONDUITS, PIPING & METAL BOXES ---
  {
    id: 'conduit-vip-25mm-bundle',
    name: 'VIP Heavy Duty 25mm Rigid PVC Electrical Conduit Pipe (Bundle of 25)',
    category: 'conduits',
    division: 'construction',
    brand: 'VIP Conduits',
    price: 2450,
    originalPrice: 3100,
    rating: 4.9,
    reviewsCount: 190,
    inStock: true,
    unit: 'Bundle of 25 Pipes (75 Metres Total)',
    warranty: 'High Impact Unplasticized PVC (ISI IS:9537)',
    badge: 'Concrete Slab & Wall Conceal Ready',
    description: 'High mechanical impact-resistant uPVC conduit pipes engineered for heavy concrete slab casting and wall groove masonry concealing without cracking under heavy foot traffic.',
    specs: {
      'Outer Diameter': '25 mm (1 Inch)',
      'Wall Thickness': 'Heavy Mechanical Duty 1.8mm wall',
      'Pipe Length': '3.0 Metres per pipe (25 Pipes per bundle = 75 Metres)',
      'Fire & Chemical Resistance': 'Self-extinguishing, corrosion & termite proof',
      'Standard': 'IS:9537 Part-3 Certified'
    },
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'conduit-precision-gi-12m',
    name: 'Precision Heavy GI Concealed Modular Metal Back Box (12 Module)',
    category: 'conduits',
    division: 'construction',
    brand: 'Precision',
    price: 135,
    originalPrice: 180,
    rating: 4.8,
    reviewsCount: 310,
    inStock: true,
    unit: '1 Box (Bulk packs available)',
    warranty: '100% Galvanized Zinc Anti-Rust',
    badge: '1.2mm Thick Sheet • Brass Earthing',
    description: 'Deep modular flush mounting conceal metal box with factory-tapped brass earth screw and conduit knockouts for brick walls and drywall mounting.',
    specs: {
      'Modules': '12 Modules (Fits Anchor, Legrand, Schneider, Havells plates)',
      'Sheet Gauge': '1.2 mm Heavy Zinc Galvanized GI Steel',
      'Depth': '50 mm deep for smooth loop wiring and smart home relays',
      'Knockouts': 'Multiple 20mm & 25mm pipe punchouts on all sides'
    },
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'conduit-vip-junction-20pk',
    name: 'VIP 20mm 4-Way Deep PVC Junction Box with Lids (Pack of 20)',
    category: 'conduits',
    division: 'construction',
    brand: 'VIP Conduits',
    price: 480,
    originalPrice: 650,
    rating: 4.8,
    reviewsCount: 140,
    inStock: true,
    unit: 'Pack of 20 Boxes with Screws',
    warranty: 'High Strength Virgin uPVC',
    badge: 'Ceiling Slab Fan Point Compatible',
    description: 'Heavy duty round ceiling & wall junction box with brass threaded inserts and inspection cover plates for wire branching and ceiling fan hook placement.',
    specs: {
      'Inlets': '4-Way Cross 20mm Entry',
      'Includes': 'Cover lids + galvanized fixing screws',
      'Depth': '65 mm deep ceiling slab grade'
    },
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },

  // --- CONSTRUCTION ELECTRICAL MATERIAL: EARTHING & SAFETY CHEMICALS ---
  {
    id: 'earthing-copper-electrode-2m',
    name: 'Pure Copper Bonded Chemical Earthing Electrode Rod (2 Metre, 17.2mm)',
    category: 'earthing',
    division: 'construction',
    brand: 'Havells',
    price: 2650,
    originalPrice: 3400,
    rating: 5.0,
    reviewsCount: 160,
    inStock: true,
    unit: '1 Electrode Rod',
    warranty: '25 Years In-Soil Life Expectancy',
    badge: '⚡ 250 Micron Molecular Copper Bonding',
    description: 'High tensile steel core molecularly bonded with 99.9% pure electrolytic copper to achieve < 1 Ohm earth resistance for residential buildings and IT server earth pits.',
    specs: {
      'Length': '2.0 Metres (6.5 Feet)',
      'Diameter': '17.2 mm Heavy Rod',
      'Copper Coating': '254 Microns Electrolytic Molecular Bond',
      'Fault Current Rating': 'Up to 25 kA for 1 second',
      'Standards': 'IEEE 80, IS 3043 Compliant'
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'earthing-compound-powder-25kg',
    name: 'Bentonite & Carbon Backfill Chemical Earthing Compound (25kg Bag)',
    category: 'earthing',
    division: 'construction',
    brand: 'Polycab',
    price: 750,
    originalPrice: 990,
    rating: 4.9,
    reviewsCount: 210,
    inStock: true,
    unit: '25kg Sealed Bag',
    warranty: 'Non-Corrosive Soil Conditioner',
    badge: 'Moisture Retaining • Zero Maintenance',
    description: 'Highly conductive backfill powder compound packed around earthing electrodes. Expands on contact with water, absorbing moisture and maintaining ultra-low resistance even in rocky or dry soil.',
    specs: {
      'Weight': '25 Kilograms moisture-proof bag',
      'Resistivity': '< 0.2 Ohm-metre conductivity',
      'Properties': 'Eco-friendly, non-leaching, maintains moisture through dry summers'
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },

  // --- INDUSTRIAL & HEAVY ELECTRICALS: MOTOR STARTERS & HEAVY PLUGS ---
  {
    id: 'industrial-lt-starter-75hp',
    name: 'L&T MU-G6 3-Phase Direct-On-Line (DOL) Motor Starter (7.5 HP)',
    category: 'industrial',
    division: 'construction',
    brand: 'L&T Electrical',
    price: 2490,
    originalPrice: 3200,
    rating: 5.0,
    reviewsCount: 130,
    inStock: true,
    unit: '1 Starter Unit',
    warranty: '2 Years Manufacturer Warranty',
    badge: 'Industrial Grade Heavy Contactor',
    description: 'India’s most reliable agricultural and commercial motor starter with thermal overload relay, single-phase prevention, and wide voltage band operation.',
    specs: {
      'Motor Capacity': 'Up to 7.5 HP (3-Phase 415V AC)',
      'Relay Range': '9 - 14 Amperes adjustable overload trip',
      'Enclosure': 'Deep drawn sheet metal with rubber dust gasket',
      'Protection': 'Under-voltage & single phasing protection'
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },

  // --- MODULAR SWITCHES & HEAVY POWER OUTLETS ---
  {
    id: 'switch-anchor-roma-set',
    name: 'Anchor by Panasonic Roma Classic Complete Modular Switch Set (16A + 6A)',
    category: 'switches',
    division: 'appliances',
    brand: 'Anchor Panasonic',
    price: 1850,
    originalPrice: 2450,
    rating: 4.8,
    reviewsCount: 156,
    inStock: true,
    unit: 'Complete Room Pack (18 Items)',
    warranty: '10 Years Mechanical Warranty',
    color: 'Pearl White / Glossy',
    badge: '10-Year Heavy Duty Switch',
    description: 'Complete home electrical modular board set with polycarbonate flame-retardant safety plates, silver-cadmium contacts, and spark-shielding.',
    specs: {
      'Included': '12x 6A Switches, 4x 16A Power Sockets, 2x 32A DP MCB Switch, 3x 8-Module Face Plates',
      'Material': 'Virgin Polycarbonate (UV Stabilized & Non-yellowing)',
      'Testing': 'Tested up to 100,000 Click Operations',
      'Safety': 'Integrated child protection safety shutters on sockets'
    },
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'switch-schneider-smart-touch',
    name: 'Schneider Electric AvatarOn Smart Touch Switch Panel',
    category: 'switches',
    division: 'appliances',
    brand: 'Schneider Electric',
    price: 3299,
    originalPrice: 4200,
    rating: 4.9,
    reviewsCount: 78,
    inStock: true,
    unit: '1 Plate Set',
    warranty: '3 Years Warranty',
    color: 'Glass Matt Finish / Slate Grey',
    badge: 'Premium Touch & Remote',
    description: 'Feather-touch capacitive glass switchboard with subtle LED backlighting for night visibility and surge-protected relay modules.',
    specs: {
      'Modules': '4-Gang Smart Touch + Fan Step Regulator',
      'Surge Protection': 'Built-in 4kV Lightning/Voltage spike arrester',
      'Plate Finish': 'Tempered Scratch-resistant Crystal Glass'
    },
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
  },

  // --- HOME APPLIANCES: BLDC FANS, LIGHTING, INVERTERS & GEYSERS ---
  {
    id: 'fan-atomberg-renesa',
    name: 'Atomberg Renesa 1200mm Smart BLDC Ceiling Fan',
    category: 'fans',
    division: 'appliances',
    brand: 'Atomberg',
    price: 3699,
    originalPrice: 4790,
    rating: 4.9,
    reviewsCount: 312,
    inStock: true,
    unit: '1 Fan Unit with Remote',
    warranty: '2+1 Years On-site Brand Warranty',
    wattage: '28W (Saves up to 65% Electricity)',
    color: 'Midnight Black & Wood',
    bldc: true,
    energyRating: 5,
    badge: 'Bestseller ⭐ 65% Power Saver',
    description: 'India’s top-selling super-efficient BLDC ceiling fan with smart remote control, sleep timer, boost mode, and whisper-quiet operation even on inverters.',
    specs: {
      'Motor Technology': 'Brushless DC (BLDC) Motor',
      'Sweep Size': '1200 mm (48 Inch)',
      'Power Consumption': '28 Watts at top speed',
      'Air Delivery': '235 CMM (Cubic Metres per Min)',
      'Speed (RPM)': '360 RPM',
      'Inverter Compatibility': 'Runs 3X longer on inverter battery'
    },
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'light-havells-flood-100w',
    name: 'Havells Endura 100W IP66 Outdoor Commercial LED Floodlight',
    category: 'lighting',
    division: 'construction',
    brand: 'Havells',
    price: 2199,
    originalPrice: 3200,
    rating: 4.9,
    reviewsCount: 140,
    inStock: true,
    unit: '1 Fixture',
    warranty: '2 Years Replacement Warranty',
    wattage: '100W High Lumen (10,000 Lumens)',
    badge: 'IP66 Waterproof & 4kV Surge Arrester',
    description: 'Heavy die-cast aluminum housing floodlight for construction building facades, parking lots, warehouses, and outdoor garden compounds.',
    specs: {
      'Lumen Output': '10,000 Lumens (100 Lm/Watt efficiency)',
      'Surge Protection': '4.0 kV Internal SPD',
      'Housing': 'Pressure die-cast corrosion resistant aluminum'
    },
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'inverter-luminous-zelio',
    name: 'Luminous Zelio+ 1100 Pure Sine Wave Home Inverter UPS',
    category: 'inverters',
    division: 'appliances',
    brand: 'Luminous',
    price: 6499,
    originalPrice: 8200,
    rating: 4.8,
    reviewsCount: 380,
    inStock: true,
    unit: '1 Inverter Unit',
    warranty: '2 Years Comprehensive Warranty',
    wattage: '900VA / 756W Output',
    color: 'Metallic Blue & Black',
    badge: 'Smart LCD Display + Pure Sine Wave',
    description: 'Smartest home inverter featuring a 32-bit DSP processor, smart LCD showing real-time battery backup hours, and complete equipment safety.',
    specs: {
      'Capacity': '900 VA / 12V Single Battery Support',
      'Display': 'Backlit LCD displaying Charging Time, Remaining Backup Time & Fault Codes',
      'Battery Support': 'Tubular, Flat Plate, SMF & Gel Batteries',
      'Protection': 'Short-circuit, Reverse Polarity, Deep Discharge & Overload cut-off'
    },
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'geyser-bajaj-shield-15l',
    name: 'Bajaj Shield Series New Shakti 15-Litre 5-Star Storage Water Heater',
    category: 'geysers',
    division: 'appliances',
    brand: 'Bajaj',
    price: 6899,
    originalPrice: 9490,
    rating: 4.7,
    reviewsCount: 210,
    inStock: true,
    unit: '1 Geyser Unit + Inlet Pipes',
    warranty: '5 Years Tank + 2 Years Element Warranty',
    wattage: '2000W Fast Heating',
    color: 'Snow White & Silver',
    energyRating: 5,
    badge: '5-Star Energy Saver + High Rise Ready',
    description: 'Glassline-coated inner tank with marine-grade magnesium anode rod to resist hard water scaling, suitable for up to 8-bar high-rise apartments.',
    specs: {
      'Tank Capacity': '15 Litres (Quick 12 min full hot water)',
      'Pressure Rating': '8 Bar (Ideal for 15+ floor apartment towers)',
      'Heating Element': 'Incoloy 800 Glasscoated Titanium Alloy',
      'Safety': 'Multi-function safety valve + Auto Thermal Cutoff'
    },
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80'
  }
];

export const ELECTRICAL_SERVICES: ElectricalService[] = [
  {
    id: 'service-rough-in-wiring',
    title: 'New House Rough-In Piping, Conduits & Concealed Box Fitting',
    category: 'Construction & Masonry',
    startingPrice: 2499,
    duration: '1 - 3 Days',
    description: 'Precision wall groove cutting, PVC conduit pipe laying in ceiling slabs/brick walls, and GI modular conceal box leveling before plastering.',
    includedFeatures: [
      'Laser-aligned switchboard height setting',
      'Concrete slab pipe tying with binding wire',
      'Deep junction box fan point installation',
      'Full architectural blueprint electrical marking'
    ],
    iconName: 'Wrench',
    popular: true
  },
  {
    id: 'service-house-wiring',
    title: 'Full House Wire Pulling, MCB DB Dressing & Earthing Setup',
    category: 'Wiring & Safety',
    startingPrice: 1999,
    duration: '1 - 2 Days',
    description: 'Pulling 100% pure copper FR wires through conduits, load balancing across phases, copper chemical earthing pit installation, and neat MCB DB panel dressing.',
    includedFeatures: [
      'Megger insulation resistance test',
      'RCCB 30mA electric shock safety setup',
      'Load distribution calculation per phase',
      'Certified fire-safe copper wiring'
    ],
    iconName: 'Zap',
    popular: true
  },
  {
    id: 'service-fan-install',
    title: 'Ceiling Fan & BLDC Installation / Balancing',
    category: 'Fans & Motors',
    startingPrice: 199,
    duration: '30 - 45 Mins',
    description: 'Professional assembly, balancing, downrod adjustment, and secure ceiling hook anchoring for all fan brands.',
    includedFeatures: [
      'Motor & bearing noise check',
      'Speed regulator compatibility check',
      'Vibration-free dynamic balancing',
      'Same-day technician visit'
    ],
    iconName: 'Fan',
    popular: true
  },
  {
    id: 'service-light-fitting',
    title: 'LED False Ceiling COB, Panels & Chandelier Mounting',
    category: 'Lighting & Decor',
    startingPrice: 299,
    duration: '45 - 60 Mins',
    description: 'Precision mounting of chandeliers, track lights, cove strip lighting, wall sconces, and false ceiling LED panels with neat wiring.',
    includedFeatures: [
      'Heavy-duty expansion anchor ceiling support',
      'Color tone test & circuit load balance',
      'Clean dust-free drilling & insulation taping',
      'Smart switch / remote sync assistance'
    ],
    iconName: 'Lightbulb'
  },
  {
    id: 'service-inverter-setup',
    title: 'Inverter, Battery & Changeover Switch Installation',
    category: 'Power Backup',
    startingPrice: 499,
    duration: '1 Hour',
    description: 'Safe high-current DC cable crimping, bypass switchboard wiring, battery acid level check, and emergency backup line isolation.',
    includedFeatures: [
      'Heavy gauge battery terminal lug crimping',
      'Main changeover switch installation',
      'Phase neutral loop verification',
      'Demonstration of backup load limits'
    ],
    iconName: 'BatteryCharging'
  },
  {
    id: 'service-emergency-shortcircuit',
    title: 'Emergency Short Circuit, Fuse Blow & Power Breakdown Rescue',
    category: 'Emergency 24/7',
    startingPrice: 399,
    duration: 'Under 45 Mins Arrival',
    description: 'Rapid dispatch electrician with phase fault detectors, spare MCBs, high-amp fuses, and cable testers for power restoration.',
    includedFeatures: [
      'Immediate 45-min emergency response',
      'Phase detector fault pinpointing',
      'Burnt wire cutting and heat-shrink rejoining',
      'Safety check upon completion'
    ],
    iconName: 'ShieldAlert',
    popular: true
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Kishore Reddy (Building Contractor)',
    location: 'Mandipet & MCC B Block, Davanagere',
    rating: 5,
    date: '3 days ago',
    verifiedPurchase: true,
    productOrService: 'Bulk Polycab Wires + VIP Conduits + Legrand DBs for 8-Flat Building',
    comment: 'We buy all our construction electrical materials exclusively from Om Ganesh Enterprises. Got unmatched wholesale bulk rates on Polycab 2.5 and 4.0 sq.mm rolls, plus on-site tempo delivery directly to our building site within 2 hours. 100% genuine ISI cables with manufacturer test certs.'
  },
  {
    id: 'rev-2',
    author: 'Rajesh Sharma',
    location: 'Vidyanagar, Davanagere',
    rating: 5,
    date: '1 week ago',
    verifiedPurchase: true,
    productOrService: 'Bought 3 Atomberg BLDC Fans + Full House Wiring Material',
    comment: 'Constructed our new duplex house. Got everything from PVC conduit pipes, GI modular metal boxes, MCBs to Atomberg BLDC fans from one place at Om Ganesh Enterprises in Mandipet. Ganesh Murthy gave genuine advice on wire gauge sizes.'
  },
  {
    id: 'rev-3',
    author: 'Sunita Venkatesh',
    location: 'KTJ Nagar, Davanagere',
    rating: 5,
    date: '2 weeks ago',
    verifiedPurchase: true,
    productOrService: 'Chandelier Mounting & Schneider Switchboards',
    comment: 'Exceptional service! They carried heavy glass chandelier carefully and installed with robust ceiling anchor. Very polite technicians and 100% genuine products with proper GST bill.'
  },
  {
    id: 'rev-4',
    author: 'Arun Kumar M. (Electrical Engineer)',
    location: 'MCC A Block, Davanagere',
    rating: 5,
    date: '3 weeks ago',
    verifiedPurchase: true,
    productOrService: 'Copper Chemical Earthing Kit + L&T Motor Starter',
    comment: 'Purchased pure copper chemical earthing rods and compound powder for our independent villa. Tested earth pit resistance after installation — achieved 0.8 Ohms! Highly recommended store for heavy electricals in Davanagere.'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'general',
    question: 'Do you sell both construction electrical materials (wires, conduits, MCBs) and home appliances?',
    answer: 'Yes! Om Ganesh Enterprises is a complete, full-spectrum electrical depot in Mandipet, Davanagere. We provide wholesale & retail construction materials (Polycab & Finolex copper house wires, heavy armoured cables, VIP PVC conduit pipes, GI modular back boxes, Legrand/Schneider MCBs & RCCBs, porcelain fuses, and chemical earthing rods) as well as premium home appliances (BLDC fans, smart lighting, inverters, and geysers).'
  },
  {
    category: 'services',
    question: 'Do you provide wholesale contractor pricing and on-site delivery for construction projects in Davanagere?',
    answer: 'Absolutely. We supply building contractors, interior decorators, and builders across Davanagere, Harihar, and surrounding central Karnataka districts with special wholesale rates and GST invoices. We offer direct same-day tempo site dispatch for bulk orders of conduit bundles, wire coils, and distribution boards.'
  },
  {
    category: 'services',
    question: 'Can your electricians handle complete rough-in wiring for new home construction?',
    answer: 'Yes! Our certified, experienced electrician team handles complete end-to-end new home electrical works: laser wall grooving, slab conduit pipe laying, GI backbox fixing, wire pulling, MCB DB dressing, chemical earthing pit installation, and final fixture mounting with warranty.'
  },
  {
    category: 'warranty',
    question: 'Are all wires, switches, and switchgear 100% genuine with ISI marks?',
    answer: 'Every single meter of wire and switchgear component sold at Om Ganesh Enterprises is 100% genuine, procured directly from authorized manufacturer distribution channels (Polycab, Finolex, Havells, Legrand, Schneider, L&T, Anchor Panasonic). All items carry standard ISI certification stamps, hologram stickers, and official GST tax invoices.'
  },
  {
    category: 'delivery',
    question: 'What are your store hours and emergency response times?',
    answer: 'Our main showroom and warehouse counter at Muddegowdru Complex, Mandipet, Davanagere is open all 7 days from 8:30 AM to 9:30 PM. For emergency breakdowns (sparking switchboards, burnt fuses, sudden blackouts), our emergency electricians arrive within 45 to 60 minutes across Davanagere.'
  }
];
