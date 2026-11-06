import {
  Atom,
  Award,
  Building2,
  FlaskConical,
  Flame,
  GraduationCap,
  Hammer,
  Layers,
  Leaf,
  Microscope,
  Scale,
  Thermometer,
  Zap,
  Gem,
  type LucideIcon,
} from "lucide-react";

/** Icons keyed by the first segment of the live category path. */
export const categoryIcons: Record<string, LucideIcon> = {
  calorimeter: FlaskConical,
  "tga-proximate-analyzers": Thermometer,
  "elemental-analyzers": Atom,
  "ash-fusion-analyzers": Flame,
  "coal-and-coke-testing-instruments": Zap,
  reactors: Building2,
  "chamber-furnaces": Flame,
  "tube-furnaces": Flame,
  "high-temperature-tube-furnace": Flame,
  "milling-pulverising": Layers,
  sieving: Layers,
  "xrf-icp-sample-preparation-equipment": Layers,
  "metal-sample-preparation-equipment": Hammer,
  "precision-balances": Scale,
  "standard-level-analytical": Scale,
  "advanced-level-analytical": Scale,
  "micro-analytical": Scale,
  "semi-micro-analytical": Scale,
  "premium-level-micro-semi-micro": Scale,
  "gas-generators": Zap,
  "special-analyzers": Microscope,
  "other-instruments": Microscope,
  "crms-srms-laboratory-accessories": Award,
  "laboratory-accessories": FlaskConical,
  "certified-and-standard-reference-materials": Award,
  "analytical-instruments": Atom,
  "furnace-heating-systems": Flame,
  ovens: Flame,
  "melting-furnaces": Flame,
  "muffle-furnace": Flame,
  "retort-furnace": Flame,
  "sintering-furnace": Flame,
  "tube-furnace": Flame,
};

export const industryIcons: Record<string, LucideIcon> = {
  "coal-coke-fuels": Zap,
  cement: Hammer,
  "steel-metallurgy": Flame,
  "minerals-mining": Gem,
  "chemicals-petrochemicals": FlaskConical,
  "pharmaceuticals-life-sciences": Microscope,
  "food-agriculture": Leaf,
  "research-education": GraduationCap,
  // legacy slugs kept so older pages resolve
  "fuels-energy": Zap,
  "minerals-materials": Gem,
  "cement-steel": Hammer,
  "chemical-pharmaceutical": FlaskConical,
};

export function CategoryIcon({ slug, className }: { slug: string; className?: string }) {
  const key = slug.split("/")[0];
  const Icon = categoryIcons[key] ?? categoryIcons[slug] ?? FlaskConical;
  return <Icon className={className} aria-hidden />;
}

export function IndustryIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = industryIcons[slug] ?? FlaskConical;
  return <Icon className={className} aria-hidden />;
}

