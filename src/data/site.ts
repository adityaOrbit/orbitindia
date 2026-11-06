export const site = {
  name: "Orbit Technologies",
  legalName: "Orbit Technologies Pvt. Ltd.",
  tagline:
    "Your trusted technology partner for coal, mineral & material analysis instruments",
  description:
    "For more than 30 years, Orbit Technologies Pvt. Ltd. has provided complete solutions for coal, mineral, material and environmental analysis — manufacturing and distributing elemental analysers and analytical instruments, and proudly representing several prestigious global brands.",
  address: {
    line1: "B-50, Industrial Estate, Sanath Nagar",
    city: "Hyderabad",
    pin: "500 018",
    state: "Telangana",
    country: "India",
  },
  phones: {
    office: "+91 - 40 - 6721 6354",
    sales1: "+91 - 81438 85547",
    sales2: "+91 - 81438 85540",
    service: "+91 - 8712613589",
  },
  email: "orbit@orbitindia.com",
  hours: [
    { days: "Monday – Friday", time: "9:30 AM to 5:30 PM" },
    { days: "Saturday", time: "9:30 AM to 1:00 PM" },
  ],
} as const;

export const stats = [
  { value: "35+", label: "Years of service" },
  { value: "7,000+", label: "Satisfied customers" },
  { value: "14", label: "Sales & service locations" },
  { value: "9", label: "Product categories" },
] as const;

export const branchOffices = [
  "New Delhi",
  "Lucknow",
  "Mumbai",
  "Nagpur",
  "Pune",
  "Baroda",
  "Kolkata",
  "Bhubaneswar",
  "Bilaspur",
  "Ranchi",
  "Raipur",
  "Vizag",
  "Bangalore",
  "Chennai",
] as const;

export const partners = [
  {
    name: "Parr Instrument Company",
    country: "USA",
    focus: "Calorimeters, reactors, pressure vessels & sample preparation vessels",
  },
  {
    name: "NCS Testing Technology GmbH",
    country: "Germany",
    focus: "Carbon & Sulfur and ONH analysers for inorganic analysis",
  },
  {
    name: "NC Technologies SRL",
    country: "Italy",
    focus: "High-performance CHNS/O analysers for organic elemental analysis",
  },
  {
    name: "Elemental Microanalysis Ltd",
    country: "UK",
    focus: "Standards and consumables for all brands of elemental analysers",
  },
  {
    name: "SIEBTECHNIK TEMA GmbH",
    country: "Germany",
    focus: "Milling, pulverising and sieving sample preparation equipment",
  },
  {
    name: "Elite Thermal Systems Ltd",
    country: "UK",
    focus: "Laboratory and light industrial furnaces and ovens",
  },
  {
    name: "Linn High Therm GmbH",
    country: "Germany",
    focus: "High-temperature tube furnaces, induction and microwave heating",
  },
  {
    name: "Sylab S.A.R.L.",
    country: "France",
    focus: "Ash fusion, proximate and elemental analysis technology — now manufactured in India",
  },
] as const;

export const groupCompanies = [
  {
    name: "Orlab Instruments Pvt. Ltd.",
    since: 1998,
    detail:
      "An ISO-certified and MSME-registered manufacturer and project integrator of water & soil testing kits and water/wastewater lab and field instruments, operating a 30,000 sq. ft. facility with annual capacity exceeding 200,000 testing kits.",
  },
  {
    name: "Sylab Scientific Pvt. Ltd.",
    since: null,
    detail:
      "An ISO-certified, MSME-registered and Startup India-recognised manufacturer of elemental and proximate analysers — now manufacturing high-temperature laboratory furnaces in India following the acquisition of Elite Thermal Systems Ltd., UK in 2024.",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Complete solutions",
    body: "We fulfil customer-specific requirements right from product selection and purchase through to after-sales support.",
  },
  {
    title: "Trust",
    body: "Over 7,000 customers trust and rely on us for prompt deliveries and service — for the past 35 years and counting.",
  },
  {
    title: "Services",
    body: "Our highly skilled engineers advise customers on the required spares and consumables and provide prompt after-sales service.",
  },
  {
    title: "Customization",
    body: "We customise to the needs and preferences of our customers from an extensive range of global product directories.",
  },
] as const;
