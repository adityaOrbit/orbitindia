export type ProductBrochure = {
  title: string;
  size: string;
  type: string;
  description: string;
};

export type TechnicalMethod = {
  standard: string;
  organization: string;
  title: string;
  applicableRange: string;
};

/**
 * Authentic product photography extracted directly from orbitindia.com.
 * Maps product slug -> array of real local images (up to 6 images per product).
 */
export const PRODUCT_IMAGE_MAP: Record<string, string[]> = {
  "ad-apollo-gx-ae-wp-gf-a-wp-series": [
    "/images/orbit/AD-Apollo-GX-AE-WP-GF-AWP-Series.jpg"
  ],
  "ash-fusion-analyzer-ht-if2000g-hdbm": [
    "/images/orbit/IF2000G.jpg",
    "/images/orbit/Catalogue-29.jpg",
    "/images/orbit/WhatsApp-Image-2023-06-15-at-11.47.12.jpeg"
  ],
  "ash-fusion-analyzer-if2000g-hdc": [
    "/images/orbit/IF2000G.jpg",
    "/images/orbit/ash-fusion-IF2000g-HDC-Catalogue.jpg"
  ],
  "1341-plain-jacket-calorimeter": [
    "/images/orbit/parr-1.png",
    "/images/orbit/images-2.jpeg",
    "/images/orbit/Catalogue-1-1.jpg",
    "/images/orbit/PARR-7400-1.jpg",
    "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",
    "/images/orbit/6010-Fully-Automatic-Isope.jpg"
  ],
  "6050-automatic-pc-based-calorimeter": [
    "/images/orbit/parr-1.png",
    "/images/orbit/images-3.jpeg",
    "/images/orbit/Catalogue-2.jpg",
    "/images/orbit/PARR-7400-1.jpg",
    "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",
    "/images/orbit/6010-Fully-Automatic-Isope.jpg"
  ],
  "6100-automatic-compensated-jacket-bomb-calorimeter": [
    "/images/orbit/parr-1.png",
    "/images/orbit/images-4.jpeg",
    "/images/orbit/Catalogue-3.jpg",
    "/images/orbit/PARR-7400-1.jpg",
    "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",
    "/images/orbit/6050-Fully-Automatic-Isope.jpg"
  ],
  "7200-precision-isoperibol-calorimeter": [
    "/images/orbit/parr-1.png",
    "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",
    "/images/orbit/PARR-7400-1.jpg",
    "/images/orbit/6010-Fully-Automatic-Isope.jpg",
    "/images/orbit/6050-Fully-Automatic-Isope.jpg",
    "/images/orbit/1341-Fully-Automatic-Isope.jpg"
  ],
  "7400-automatic-isoperibol-calorimeter": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Parr_7400_open_web.jpg",
    "/images/orbit/7200-Precision-Isoperibol-Calorimeter.jpg",
    "/images/orbit/6010-Fully-Automatic-Isope.jpg",
    "/images/orbit/6050-Fully-Automatic-Isope.jpg",
    "/images/orbit/1341-Fully-Automatic-Isope.jpg"
  ],
  "oxygen-combustion-vessel": [
    "/images/orbit/parr-1.png",
    "/images/orbit/1-PNG.png",
    "/images/orbit/2-PNG.png",
    "/images/orbit/3-PNG.png",
    "/images/orbit/4-PNG.png",
    "/images/orbit/5-PNG.png"
  ],
  "6790-detonation-calorimeter": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Detonation-Calorimeter.jpg",
    "/images/orbit/Catalogue-6.jpg",
    "/images/orbit/6400-Fully-Automatic-Isope.jpg",
    "/images/orbit/6200-Fully-Automatic-Isope.jpg",
    "/images/orbit/6725.jpg"
  ],
  "6725-semi-micro-calorimeter": [
    "/images/orbit/parr-1.png",
    "/images/orbit/6725.jpg",
    "/images/orbit/Catalogue-10.jpg",
    "/images/orbit/6755.jpg",
    "/images/orbit/6765.jpg",
    "/images/orbit/6772.jpg"
  ],
  "6755-solution-calorimeter": [
    "/images/orbit/parr-1.png",
    "/images/orbit/6755.jpg",
    "/images/orbit/Catalogue-7.jpg",
    "/images/orbit/6725.jpg",
    "/images/orbit/6765.jpg",
    "/images/orbit/6772.jpg"
  ],
  "6765-combination-calorimeter": [
    "/images/orbit/parr-1.png",
    "/images/orbit/6765.jpg",
    "/images/orbit/Catalogue-8.jpg",
    "/images/orbit/6725.jpg",
    "/images/orbit/6755.jpg",
    "/images/orbit/6772.jpg"
  ],
  "6772-calorimetric-thermometer": [
    "/images/orbit/parr-1.png",
    "/images/orbit/6772.jpg",
    "/images/orbit/Catalogue-9.jpg",
    "/images/orbit/6725.jpg",
    "/images/orbit/6755.jpg",
    "/images/orbit/6765.jpg"
  ],
  "laboratory-ashing-furnaces": [
    "/images/orbit/elite.png",
    "/images/orbit/laboratory-ashing-furnaces.jpg",
    "/images/orbit/muffle-furnaces.jpg"
  ],
  "laboratory-ashing-furnaces-bmf": [
    "/images/orbit/elite.png",
    "/images/orbit/muffle-furnaces.jpg",
    "/images/orbit/laboratory-ashing-furnaces.jpg"
  ],
  "light-industral-chamber-furnaces": [
    "/images/orbit/elite.png",
    "/images/orbit/light-industrial-chamber-furnaces-1400-c-to-1700-c-maximum.jpg",
    "/images/orbit/6200-Fully-Automatic-Isope.jpg",
    "/images/orbit/6010-Fully-Automatic-Isope.jpg",
    "/images/orbit/6050-Fully-Automatic-Isope.jpg",
    "/images/orbit/1341-Fully-Automatic-Isope.jpg"
  ],
  "air-re-circulating-furnace": [
    "/images/orbit/elite.png",
    "/images/orbit/air-re-circulating-furnaces.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/high-temperature-chamber-furnaces.jpg"
  ],
  "bottom-loading-chamber-furnace": [
    "/images/orbit/elite.png",
    "/images/orbit/bottom-loading-chamber-furnaces.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/high-temperature-chamber-furnaces.jpg"
  ],
  "economy-chamber-furnace": [
    "/images/orbit/elite.png",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/high-temperature-chamber-furnaces.jpg",
    "/images/orbit/top-loading-chamber-furnaces.jpg"
  ],
  "general-purpose-chamber-furnaces-bcf": [
    "/images/orbit/elite.png",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/high-temperature-chamber-furnaces.jpg",
    "/images/orbit/top-loading-chamber-furnaces.jpg"
  ],
  "general-purpose-chamber-furnaces-bsf": [
    "/images/orbit/elite.png",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/high-temperature-chamber-furnaces.jpg",
    "/images/orbit/top-loading-chamber-furnaces.jpg"
  ],
  "high-temperature-chamber-furnace": [
    "/images/orbit/elite-1.png",
    "/images/orbit/high-temperature-chamber-furnaces.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/top-loading-chamber-furnaces.jpg"
  ],
  "rapid-heating-chamber-furnace": [
    "/images/orbit/elite.png",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/high-temperature-chamber-furnaces.jpg",
    "/images/orbit/top-loading-chamber-furnaces.jpg"
  ],
  "top-loading-chamber-furnace": [
    "/images/orbit/elite.png",
    "/images/orbit/top-loading-chamber-furnaces.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/high-temperature-chamber-furnaces.jpg"
  ],
  "vacuum-chamber-furnaces": [
    "/images/orbit/elite.png",
    "/images/orbit/vacuum-cold-wall-chamber-furnaces.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/high-temperature-chamber-furnaces.jpg"
  ],
  "dilatometer-df4": [
    "/images/orbit/sylab-r7wrplzag82imu4hyqat5zkfkaz489w9jacxzbf6j8.png",
    "/images/orbit/Dilatometer.jpg",
    "/images/orbit/plastometer.png",
    "/images/orbit/minimum-free-space-oven.png",
    "/images/orbit/volatile-matter-furnace.png",
    "/images/orbit/volatile-matter-and-ashing-furnace.png"
  ],
  "dilatometer-dl4000": [
    "/images/orbit/rb-q5h52hi4k7k1lwntygjnai4cmacmhb6vqv96edwxck.png",
    "/images/orbit/Dilatometer-DL4000.jpg",
    "/images/orbit/Plastometer-PL2000.jpg"
  ],
  "free-swelling-index-furnace": [
    "/images/orbit/sylab-r7wrplzag82imu4hyqat5zkfkaz489w9jacxzbf6j8.png",
    "/images/orbit/free-swelling-index-furnace.png",
    "/images/orbit/plastometer.png",
    "/images/orbit/dilatometer.png",
    "/images/orbit/minimum-free-space-oven.png",
    "/images/orbit/volatile-matter-furnace.png"
  ],
  "minimum-free-space-oven-astm-iso": [
    "/images/orbit/sylab-r7wrplzag82imu4hyqat5zkfkaz489w9jacxzbf6j8.png",
    "/images/orbit/minimum-free-space-oven.png",
    "/images/orbit/plastometer.png",
    "/images/orbit/dilatometer.png",
    "/images/orbit/volatile-matter-furnace.png",
    "/images/orbit/volatile-matter-and-ashing-furnace.png"
  ],
  "plastometer-pf12": [
    "/images/orbit/sylab-r7wrplzag82imu4hyqat5zkfkaz489w9jacxzbf6j8.png",
    "/images/orbit/Plastometer.jpg",
    "/images/orbit/dilatometer.png",
    "/images/orbit/minimum-free-space-oven.png",
    "/images/orbit/volatile-matter-furnace.png",
    "/images/orbit/volatile-matter-and-ashing-furnace.png"
  ],
  "plastometer-pl2000": [
    "/images/orbit/rb-q5h52hi4k7k1lwntygjnai4cmacmhb6vqv96edwxck.png",
    "/images/orbit/Plastometer-PL2000.jpg",
    "/images/orbit/Dilatometer-DL4000.jpg"
  ],
  "volatile-matter-furnace-vmf-astm": [
    "/images/orbit/sylab-r7wrplzag82imu4hyqat5zkfkaz489w9jacxzbf6j8.png",
    "/images/orbit/volatile-matter-furnace.png",
    "/images/orbit/plastometer.png",
    "/images/orbit/dilatometer.png",
    "/images/orbit/minimum-free-space-oven.png",
    "/images/orbit/volatile-matter-and-ashing-furnace.png"
  ],
  "volatile-matter-furnace-vmf-iso": [
    "/images/orbit/sylab-r7wrplzag82imu4hyqat5zkfkaz489w9jacxzbf6j8.png",
    "/images/orbit/volatile-matter-and-ashing-furnace.png",
    "/images/orbit/plastometer.png",
    "/images/orbit/dilatometer.png",
    "/images/orbit/minimum-free-space-oven.png",
    "/images/orbit/volatile-matter-furnace.png"
  ],
  "combustion-master-cs-analyzer": [
    "/images/orbit/Combustion-Master-CS.png",
    "/images/orbit/Combustion-Master-CS-Analyzer.jpg",
    "/images/orbit/if2000g.jpg",
    "/images/orbit/CSBox-HFA-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-DCS-Analyzer-img.jpg"
  ],
  "cone-mill": [
    "/images/orbit/Cone-crusher.jpg",
    "/images/orbit/MULTI-PURPOSE-MILL.jpg",
    "/images/orbit/Vibrating-Mill.jpg",
    "/images/orbit/Vibratory-DISC-Mill.jpg",
    "/images/orbit/Cutting-Mill.jpg",
    "/images/orbit/Cyclone-Mill.jpg"
  ],
  "ea3100": [
    "/images/orbit/parr-1.png",
    "/images/orbit/chns.jpg",
    "/images/orbit/CSBox-Tube-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-C-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-C-Analyzer-img.jpg"
  ],
  "csbox-dcs-analyzer-bkp": [
    "/images/orbit/CSBox-DCS-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-CS-Analyzer-img.jpg",
    "/images/orbit/IF2000G-HDC.jpg",
    "/images/orbit/IF2000G-HDBM.jpg"
  ],
  "csbox-hfa-c-analyzer": [
    "/images/orbit/orbit-log-img.png",
    "/images/orbit/CSBox-HFA-C-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-S-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-C-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-CS-Analyzer-img.jpg"
  ],
  "csbox-hfa-cs-analyzer-bkp": [
    "/images/orbit/CSBox-HFA-CS-Analyzer-img.jpg",
    "/images/orbit/Catalogue-31.jpg",
    "/images/orbit/CSBox-Tube-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-DCS-Analyzer-img.jpg",
    "/images/orbit/IF2000G-HDC.jpg",
    "/images/orbit/IF2000G-HDBM.jpg"
  ],
  "csbox-hfa-s-analyzer": [
    "/images/orbit/CSBox-HFA-S-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-S-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-C-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-C-Analyzer-img.jpg"
  ],
  "csbox-tube-c-analyzer": [
    "/images/orbit/CSBox-Tube-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-S-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-C-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-S-Analyzer-img.jpg"
  ],
  "csbox-tube-cs-analyzer": [
    "/images/orbit/CSbox.jpg",
    "/images/orbit/CSBoxTubeCatalogue.jpg",
    "/images/orbit/if2000g.jpg"
  ],
  "csbox-tube-s-analyzer": [
    "/images/orbit/CSBox-Tube-S-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-Tube-C-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-CS-Analyzer-img.jpg",
    "/images/orbit/CSBox-HFA-C-Analyzer-img.jpg",
    "/images/orbit/CSBox-DCS-Analyzer-img.jpg"
  ],
  "ecs-4010-chns-o-analyzer": [
    "/images/orbit/ncs-1.png",
    "/images/orbit/ECS-4010.jpg",
    "/images/orbit/ECS-4024.jpg",
    "/images/orbit/ECS-8040.jpg",
    "/images/orbit/ECS-8020.jpg",
    "/images/orbit/ECS-8024.jpg"
  ],
  "ecs-4024-chns-o-analyzer": [
    "/images/orbit/ncs-1.png",
    "/images/orbit/ECS-4024-1.jpg",
    "/images/orbit/ECS-4010.jpg",
    "/images/orbit/ECS-8040.jpg",
    "/images/orbit/ECS-8020.jpg",
    "/images/orbit/ECS-8024.jpg"
  ],
  "ecs-8020-chns-o-analyzer": [
    "/images/orbit/ncs-1.png",
    "/images/orbit/ECS-8020.jpg",
    "/images/orbit/ECS-4010.jpg",
    "/images/orbit/ECS-4024.jpg",
    "/images/orbit/ECS-8040.jpg",
    "/images/orbit/ECS-8024.jpg"
  ],
  "ecs-8024-nc-soil-special": [
    "/images/orbit/ncs-1.png",
    "/images/orbit/ECS-8024.jpg",
    "/images/orbit/ECS-4010.jpg",
    "/images/orbit/ECS-4024.jpg",
    "/images/orbit/ECS-8040.jpg",
    "/images/orbit/ECS-8020.jpg"
  ],
  "ecs-8040-chns-o-analyzer": [
    "/images/orbit/ncs-1.png",
    "/images/orbit/ECS-8040.jpg",
    "/images/orbit/ECS-4010.jpg",
    "/images/orbit/ECS-4024.jpg",
    "/images/orbit/ECS-8020.jpg",
    "/images/orbit/ECS-8024.jpg"
  ],
  "ecs-8060-nprotein-analyzer": [
    "/images/orbit/ncs-1.png",
    "/images/orbit/ECS-8060.jpg",
    "/images/orbit/ECS8060.jpg",
    "/images/orbit/ECS-8040.jpg",
    "/images/orbit/ECS-8020.jpg",
    "/images/orbit/ECS-8022.jpg"
  ],
  "irms-analyzer": [
    "/images/orbit/IRMS.jpg"
  ],
  "fusion-master-onh-analyzer": [
    "/images/orbit/Fusion-Master-ONH.png",
    "/images/orbit/fusionmasteronhcatalogue.jpg",
    "/images/orbit/IF2000G.jpg"
  ],
  "extraindus-100l": [
    "/images/orbit/extraindus100l.jpg",
    "/images/orbit/extraindus25l.jpg",
    "/images/orbit/extraindus200l.jpg",
    "/images/orbit/extraindus400l.jpg"
  ],
  "extraindus-200l": [
    "/images/orbit/extraindus200l.jpg",
    "/images/orbit/extraindus25l.jpg",
    "/images/orbit/extraindus100l.jpg",
    "/images/orbit/extraindus400l.jpg"
  ],
  "extraindus-25l": [
    "/images/orbit/extraindus25l.jpg",
    "/images/orbit/extraindus50l.jpg",
    "/images/orbit/extraindus100l.jpg",
    "/images/orbit/extraindus200l.jpg",
    "/images/orbit/extraindus400l.jpg"
  ],
  "extraindus-400l": [
    "/images/orbit/extraindus400l.jpg",
    "/images/orbit/extraindus25l.jpg",
    "/images/orbit/extraindus100l.jpg",
    "/images/orbit/extraindus200l.jpg"
  ],
  "extraindus-50l": [
    "/images/orbit/extraindus50l.jpg",
    "/images/orbit/extraindus25l.jpg",
    "/images/orbit/extraindus100l.jpg",
    "/images/orbit/extraindus200l.jpg",
    "/images/orbit/extraindus400l.jpg"
  ],
  "extralab-1-l-to-2-l": [
    "/images/orbit/ExtraLab-1L-to-2L.jpg",
    "/images/orbit/ExtraLab-50-to-500-ML.jpg",
    "/images/orbit/ExtraLab-5L.jpg",
    "/images/orbit/ExtraLab-10L.jpg"
  ],
  "extralab-10-l": [
    "/images/orbit/ExtraLab-10L.jpg",
    "/images/orbit/ExtraLab-50-to-500-ML.jpg",
    "/images/orbit/ExtraLab-1L-to-2L.jpg",
    "/images/orbit/ExtraLab-5L.jpg"
  ],
  "extralab-5-l": [
    "/images/orbit/ExtraLab-5L.jpg",
    "/images/orbit/ExtraLab-50-to-500-ML.jpg",
    "/images/orbit/ExtraLab-1L-to-2L.jpg",
    "/images/orbit/ExtraLab-10L.jpg"
  ],
  "extralab-50-to-500ml": [
    "/images/orbit/ExtraLab-50-to-500-ML.jpg",
    "/images/orbit/ExtraLab-1L-to-2L.jpg",
    "/images/orbit/ExtraLab-5L.jpg",
    "/images/orbit/ExtraLab-10L.jpg"
  ],
  "air-compressor": [
    "/images/orbit/labtech-1.png",
    "/images/orbit/Air-Compressor-1.jpg",
    "/images/orbit/Hydrogen-Gas-Generator-LMH-series.jpg",
    "/images/orbit/Nitrogen-Gas-Generator-LMH-series.jpg",
    "/images/orbit/Zero-Air-Gas-Generator.jpg",
    "/images/orbit/Liquid-Nitrogen-Generator.jpg"
  ],
  "analytical-balances": [
    "/images/orbit/AD-Borealis-BA-TBA-Series.jpg",
    "/images/orbit/BM-Series.jpg",
    "/images/orbit/gh-series.jpg",
    "/images/orbit/AD-Apollo-GX-AE-WP-GF-AWP-Series.jpg",
    "/images/orbit/AD-Fortis-FZ-WP-FX-WP-Series.jpg"
  ],
  "hydrogen-gas-generator": [
    "/images/orbit/labtech-1.png",
    "/images/orbit/Hydrogen-Gas-Generator-LMH-series.jpg",
    "/images/orbit/Nitrogen-Gas-Generator-LMH-series.jpg",
    "/images/orbit/Zero-Air-Gas-Generator.jpg",
    "/images/orbit/Liquid-Nitrogen-Generator.jpg",
    "/images/orbit/Air-Compressor-1.jpg"
  ],
  "liquid-nitrogen-gas-generator": [
    "/images/orbit/labtech-1.png",
    "/images/orbit/Liquid-Nitrogen-Generator.jpg",
    "/images/orbit/Hydrogen-Gas-Generator-LMH-series.jpg",
    "/images/orbit/Nitrogen-Gas-Generator-LMH-series.jpg",
    "/images/orbit/Zero-Air-Gas-Generator.jpg",
    "/images/orbit/Air-Compressor-1.jpg"
  ],
  "nitrogen-gas-generator-ln-series": [
    "/images/orbit/labtech-1.png",
    "/images/orbit/Nitrogen-Gas-Generator-LMH-series.jpg",
    "/images/orbit/Hydrogen-Gas-Generator-LMH-series.jpg",
    "/images/orbit/Zero-Air-Gas-Generator.jpg",
    "/images/orbit/Liquid-Nitrogen-Generator.jpg",
    "/images/orbit/Air-Compressor-1.jpg"
  ],
  "zero-air-gas-generator-lza-series": [
    "/images/orbit/labtech-1.png",
    "/images/orbit/Zero-Air-Gas-Generator.jpg",
    "/images/orbit/Catalogue-5.jpg",
    "/images/orbit/Hydrogen-Gas-Generator-LMH-series.jpg",
    "/images/orbit/Nitrogen-Gas-Generator-LMH-series.jpg",
    "/images/orbit/Liquid-Nitrogen-Generator.jpg"
  ],
  "high-temperature-high-pressure-reactor-systems": [
    "/images/orbit/Stirred-Reactor-PNG.png",
    "/images/orbit/ExtraLab-50-to-500-ML.jpg",
    "/images/orbit/2222.jpg"
  ],
  "high-temperature-tube-furnace-ht-1500": [
    "/images/orbit/Tube.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-11.jpg"
  ],
  "high-temperature-tube-furnace-ht-1800": [
    "/images/orbit/Tube.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-11.jpg"
  ],
  "bm-series-2": [
    "/images/orbit/BM-Series.jpg"
  ],
  "high-energy-planetary-ball-mill-grinding-machine": [
    "/images/orbit/High-Energy-Planetary-Ball-Mill-Grinding-Machine.jpg",
    "/images/orbit/Orbpbm-PLANETARY-BALL-MILL.jpg",
    "/images/orbit/ORBMicroball-mill.jpg",
    "/images/orbit/Planetery-Ball-Mill.jpg",
    "/images/orbit/High-energy-Laboratory-Planetary-Ball-Mill.jpg",
    "/images/orbit/Lab-Planetary-Ball-Mill-With-4-grinding-station-output.jpg"
  ],
  "lab-planetary-ball-mill-with-4-grinding-station": [
    "/images/orbit/Lab-Planetary-Ball-Mill-With-4-grinding-station-output.jpg",
    "/images/orbit/Orbpbm-PLANETARY-BALL-MILL.jpg",
    "/images/orbit/ORBMicroball-mill.jpg",
    "/images/orbit/Planetery-Ball-Mill.jpg",
    "/images/orbit/High-energy-Laboratory-Planetary-Ball-Mill.jpg",
    "/images/orbit/High-Energy-Planetary-Ball-Mill-Grinding-Machine.jpg"
  ],
  "cyclone-mill-2": [
    "/images/orbit/Cyclone-Mill.jpg",
    "/images/orbit/MULTI-PURPOSE-MILL.jpg",
    "/images/orbit/Vibrating-Mill.jpg",
    "/images/orbit/Vibratory-DISC-Mill.jpg",
    "/images/orbit/Motor-Grinding.jpg",
    "/images/orbit/Cutting-Mill.jpg"
  ],
  "discmill": [
    "/images/orbit/DISC-MILL.jpg",
    "/images/orbit/Laboratory-disc-mill.jpg"
  ],
  "roll-crusher": [
    "/images/orbit/DOUBLE-ROLLER-MILL_WS.jpg",
    "/images/orbit/Cone-crusher.jpg"
  ],
  "oxygen-flask-combustion-unit": [
    "/images/orbit/Oxygen-Flask-Combustion-Unit-OFCU.jpg"
  ],
  "ad-apollo-gx-ae-wp-gf-awp-series": [
    "/images/orbit/AD-Apollo-GX-AE-WP-GF-AWP-Series.jpg"
  ],
  "ej-series": [
    "/images/orbit/labtech-1.png",
    "/images/orbit/entry-level.jpg"
  ],
  "ad-fortis-fz-wp-fx-wp-series": [
    "/images/orbit/AD-Fortis-FZ-WP-FX-WP-Series.jpg"
  ],
  "ba-t-ba-series": [
    "/images/orbit/AD-Borealis-BA-TBA-Series.jpg",
    "/images/orbit/BH-T-BH-Series.jpg"
  ],
  "bh-t-bh-series-2": [
    "/images/orbit/BH-T-BH-Series.jpg",
    "/images/orbit/AD-Borealis-BA-TBA-Series.jpg"
  ],
  "a2000g-high-pressure-electrolyzes-cell": [
    "/images/orbit/parr-1.png",
    "/images/orbit/A2000G.jpg",
    "/images/orbit/Series-4660-1-2-G-General-Purpose-Reactor-img.jpg",
    "/images/orbit/Series-4680-1-1.8-L-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4670-11.5-G-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4675-2.6-5G-General-Purpose-Reactor-im.jpg"
  ],
  "apparatus-for-rate-of-pressure-change": [
    "/images/orbit/parr-1.png",
    "/images/orbit/apparatus-for-rate-of-pressure-change-img.jpg",
    "/images/orbit/power-compensation-reaction-calorimeter-img.jpg",
    "/images/orbit/tri-axial-core-holder-img.jpg",
    "/images/orbit/A2000G-High-Pressure-Electrolyzes-Cell-img.jpg",
    "/images/orbit/apparatus-for-vapor-pressure-determination-img.jpg"
  ],
  "apparatus-for-vapor-pressure-determination": [
    "/images/orbit/parr-1.png",
    "/images/orbit/apparatus-for-vapor-pressure-determination-img.jpg",
    "/images/orbit/disbonding-apparatus.jpg",
    "/images/orbit/pressure-extraction-vessel.jpg",
    "/images/orbit/horizontal-reactor-fullPI2-0699.jpg"
  ],
  "disbonding-apparatus": [
    "/images/orbit/parr-1.png",
    "/images/orbit/disbonding-apparatus.jpg",
    "/images/orbit/Catalogue-13.jpg",
    "/images/orbit/Reactor-system-for-biofuel-and-alternative-fuel-research-img.jpg",
    "/images/orbit/horizontal-reactor-fullPI2-0699.jpg",
    "/images/orbit/GTL-gas-to-liquid-reactor-system-img.jpg"
  ],
  "gtl-gas-to-liquid-reactor-system": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Reactor-system-for-biofuel-and-alternative-fuel-research-img.jpg",
    "/images/orbit/pressure-extraction-vessel.jpg",
    "/images/orbit/apparatus-for-rate-of-pressure-change-img.jpg",
    "/images/orbit/power-compensation-reaction-calorimeter-img.jpg",
    "/images/orbit/tri-axial-core-holder-img.jpg"
  ],
  "horizontal-reactor-systems": [
    "/images/orbit/parr-1.png",
    "/images/orbit/horizontal-reactor-fullPI2-0699.jpg",
    "/images/orbit/Catalogue-14.jpg",
    "/images/orbit/GTL-gas-to-liquid-reactor-system-img.jpg",
    "/images/orbit/pressure-extraction-vessel.jpg",
    "/images/orbit/apparatus-for-rate-of-pressure-change-img.jpg"
  ],
  "power-compensation-reaction-calorimeter": [
    "/images/orbit/parr-1.png",
    "/images/orbit/power-compensation-reaction-calorimeter-img.jpg",
    "/images/orbit/power-consumption-catalog.jpg",
    "/images/orbit/tri-axial-core-holder-img.jpg",
    "/images/orbit/A2000G-High-Pressure-Electrolyzes-Cell-img.jpg",
    "/images/orbit/apparatus-for-vapor-pressure-determination-img.jpg"
  ],
  "pressure-etraction-vessel": [
    "/images/orbit/parr-1.png",
    "/images/orbit/pressure-extraction-vessel.jpg",
    "/images/orbit/apparatus-for-rate-of-pressure-change-img.jpg",
    "/images/orbit/power-compensation-reaction-calorimeter-img.jpg",
    "/images/orbit/tri-axial-core-holder-img.jpg",
    "/images/orbit/A2000G-High-Pressure-Electrolyzes-Cell-img.jpg"
  ],
  "reactor-system-for-biofuel-and-alternative-fuel-research": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Reactor-system-for-biofuel-and-alternative-fuel-research-img.jpg",
    "/images/orbit/Catalogue-15.jpg",
    "/images/orbit/horizontal-reactor-fullPI2-0699.jpg",
    "/images/orbit/GTL-gas-to-liquid-reactor-system-img.jpg",
    "/images/orbit/pressure-extraction-vessel.jpg"
  ],
  "tri-axial-core-holder": [
    "/images/orbit/parr-1.png",
    "/images/orbit/tri-axial-core-holder-img.jpg",
    "/images/orbit/Catalogue-16.jpg",
    "/images/orbit/A2000G-High-Pressure-Electrolyzes-Cell-img.jpg",
    "/images/orbit/apparatus-for-vapor-pressure-determination-img.jpg",
    "/images/orbit/disbonding-apparatus.jpg"
  ],
  "series-5100-160-1500ml-glass-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/tga-3000-GLASS-REACTOR.jpg",
    "/images/orbit/Series-5100-160-1500ml-Glass-Reactors-_-Catalogue.jpg",
    "/images/orbit/Series-4740-25-75-ml-HP-HT-Pressure-vessel-img.jpg",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel-img.jpg",
    "/images/orbit/Series-4750-125-200-ml-General-purpose-Pressure-vessel-img.jpg"
  ],
  "series-4600-1-2-l-general-purpose-hp-reactor": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4600-1-2-L-General-Purpose-HP-Reactor-img.jpg",
    "/images/orbit/Series-4600-1-2-L-General-Purpose-HP-Reactor-Catalogue.jpg",
    "/images/orbit/Series-4660-1-2-G-General-Purpose-Reactor-img.jpg",
    "/images/orbit/Series-4680-1-1.8-L-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4670-11.5-G-HP-HT-Reactor-img.jpg"
  ],
  "series-4625-600-1200-ml-hp-reactor": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4625-600-1200-ml-HP-Reactor-img.jpg",
    "/images/orbit/Series-4625-600-1200-ml-HP-Reactor-Catalogue.jpg",
    "/images/orbit/Series-4600-1-2-L-General-Purpose-HP-Reactor-img.jpg",
    "/images/orbit/Series-4660-1-2-G-General-Purpose-Reactor-img.jpg",
    "/images/orbit/Series-4680-1-1.8-L-HP-HT-Reactor-img.jpg"
  ],
  "series-4650-250-1000-ml-hp-ht-pressure-vessel": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4650-250-1000-ml-HP-HT-Pressure-Vessel-img.jpg",
    "/images/orbit/Series-4650-250-1000-ml-HP-HT-Pressure-Vessel-_-Catalogue.jpg",
    "/images/orbit/Series-4625-600-1200-ml-HP-Reactor-img.jpg",
    "/images/orbit/Series-4600-1-2-L-General-Purpose-HP-Reactor-img.jpg",
    "/images/orbit/Series-4660-1-2-G-General-Purpose-Reactor-img.jpg"
  ],
  "series-4660-1-2-g-general-purpose-reactor": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4660-1-2-G-General-Purpose-Reactor-img.jpg",
    "/images/orbit/Series-4660-1-2-G-General-Purpose-Reactor-_-Catalogue-.jpg",
    "/images/orbit/Series-4680-1-1.8-L-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4670-11.5-G-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4675-2.6-5G-General-Purpose-Reactor-im.jpg"
  ],
  "series-4670-11-5-g-hp-ht-reactor": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4670-11.5-G-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4670-11.5-G-HP-HT-Reactor-_-Catalogue.jpg",
    "/images/orbit/Series-4675-2.6-5G-General-Purpose-Reactor-im.jpg",
    "/images/orbit/Series-4700-22-45-ml-General-purpose-pressure-vessel-img.jpg",
    "/images/orbit/Series-4740-25-75-ml-HP-HT-Pressure-vessel-img.jpg"
  ],
  "series-4675-2-6-5-g-general-purpose-reactor": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4675-2.6-5G-General-Purpose-Reactor-im.jpg",
    "/images/orbit/Series-4675-2.6-5-G-General-Purpose-Reactor-_-Catalogue.jpg",
    "/images/orbit/Series-4700-22-45-ml-General-purpose-pressure-vessel-img.jpg",
    "/images/orbit/Series-4740-25-75-ml-HP-HT-Pressure-vessel-img.jpg",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel-img.jpg"
  ],
  "series-4680-11-8-l-hp-ht-reactor": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4680-1-1.8-L-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4680-11.8-L-HP-HT-Reactor-_-Catalogue.jpg",
    "/images/orbit/Series-4670-11.5-G-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4675-2.6-5G-General-Purpose-Reactor-im.jpg",
    "/images/orbit/Series-4700-22-45-ml-General-purpose-pressure-vessel-img.jpg"
  ],
  "series-4700-22-45-ml-general-purpose-pressure-vessel": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4700-22-45-ml-General-purpose-pressure-vessel-img.jpg",
    "/images/orbit/Series-4700-22-45-ml-General-purpose-pressure-vessel-_-Catalogue.jpg",
    "/images/orbit/Series-4740-25-75-ml-HP-HT-Pressure-vessel-img.jpg",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel-img.jpg",
    "/images/orbit/Series-4750-125-200-ml-General-purpose-Pressure-vessel-img.jpg"
  ],
  "series-4703-4714-general-purpose-pressure-vessels": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4703-4714-pic.jpg",
    "/images/orbit/Series-4555-10-20-L-General-Purpose-Floor-Stand-Reactors-pic.jpg",
    "/images/orbit/Series-4590-25-100-mL-Micro-Reactor-Systems-pic.jpg",
    "/images/orbit/Series-4530-1-2-L-General-Purpose-Floor-Stand-Reactors-pic.jpg",
    "/images/orbit/Series-4560-100-600-mL-Mini-Reactor-Systems-pic.jpg"
  ],
  "series-4740-25-75-ml-hp-ht-pressure-vessel": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4740-25-75-ml-HP-HT-Pressure-vessel-img.jpg",
    "/images/orbit/Series-4740-25-75-ml-HP-HT-Pressure-vessel-_-Catalogue.jpg",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel-img.jpg",
    "/images/orbit/Series-4750-125-200-ml-General-purpose-Pressure-vessel-img.jpg",
    "/images/orbit/Series-4760-100-600-ml-General-Purpose-HP-HT-pressure-vessel-img.jpg"
  ],
  "series-4750-125-200-ml-general-purpose-pressure-vessel": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4750-125-200-ml-General-purpose-Pressure-vessel-img.jpg",
    "/images/orbit/Series-4750-125-200-ml-General-purpose-Pressure-vessel-_-Catalogue.jpg",
    "/images/orbit/Series-4760-100-600-ml-General-Purpose-HP-HT-pressure-vessel-img.jpg",
    "/images/orbit/Series-4650-250-1000-ml-HP-HT-Pressure-Vessel-img.jpg",
    "/images/orbit/Series-4625-600-1200-ml-HP-Reactor-img.jpg"
  ],
  "series-4760-100-600-ml-general-purpose-hp-ht-pressure-vessel": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4760-100-600-ml-General-Purpose-HP-HT-pressure-vessel-img.jpg",
    "/images/orbit/Series-4760-100-600-ml-General-Purpose-HP-HT-pressure-vessel-_-Catalogue.jpg",
    "/images/orbit/Series-4650-250-1000-ml-HP-HT-Pressure-Vessel-img.jpg",
    "/images/orbit/Series-4625-600-1200-ml-HP-Reactor-img.jpg",
    "/images/orbit/Series-4600-1-2-L-General-Purpose-HP-Reactor-img.jpg"
  ],
  "series-4790-25-100ml-general-purpose-hp-ht-pressure-vessel": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel-img.jpg",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel-_-Catalogue.jpg",
    "/images/orbit/Series-4750-125-200-ml-General-purpose-Pressure-vessel-img.jpg",
    "/images/orbit/Series-4760-100-600-ml-General-Purpose-HP-HT-pressure-vessel-img.jpg",
    "/images/orbit/Series-4650-250-1000-ml-HP-HT-Pressure-Vessel-img.jpg"
  ],
  "series-4520-1-2-l-general-purpose-bench-top-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
    "/images/orbit/Catalogue-17.jpg",
    "/images/orbit/Series-4530-1-2-L-General-Purpose-Floor-Stand-Reactor.jpg",
    "/images/orbit/Series-High-4540-600-1200ml-Pressure-Reactors.jpg",
    "/images/orbit/Series-4550-1-2-Gallon-General-Purpose-Reactor.jpg"
  ],
  "series-4530-1-2-l-general-purpose-floor-stand-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4530-1-2-L-General-Purpose-Floor-Stand-Reactor.jpg",
    "/images/orbit/Catalogue-18.jpg",
    "/images/orbit/Series-High-4540-600-1200ml-Pressure-Reactors.jpg",
    "/images/orbit/Series-4550-1-2-Gallon-General-Purpose-Reactor.jpg",
    "/images/orbit/Series-4555-10-20-L-General-Purpose-Floor-stand-Reactors.jpg"
  ],
  "series-4540-600-1200-ml-high-pressure-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-High-4540-600-1200ml-Pressure-Reactors.jpg",
    "/images/orbit/Catalogue-20.jpg",
    "/images/orbit/Series-4550-1-2-Gallon-General-Purpose-Reactor.jpg",
    "/images/orbit/Series-4555-10-20-L-General-Purpose-Floor-stand-Reactors.jpg",
    "/images/orbit/Series-4560-100-600ml-mini-reactor.jpg"
  ],
  "series-4550-1-2-gallon-general-purpose-reactor-2": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel.jpg",
    "/images/orbit/Catalogue-19.jpg",
    "/images/orbit/Series-4555-10-20-L-General-Purpose-Floor-stand-Reactors.jpg",
    "/images/orbit/Series-4560-100-600ml-mini-reactor.jpg",
    "/images/orbit/Series-4570-250-1800ml-HP-HT-Reactors.jpg"
  ],
  "series-4555-10-20-l-general-purpose-floor-stand-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4555-10-20-L-General-Purpose-Floor-stand-Reactors.jpg",
    "/images/orbit/Catalogue-21.jpg",
    "/images/orbit/Series-4560-100-600ml-mini-reactor.jpg",
    "/images/orbit/Series-4570-250-1800ml-HP-HT-Reactors.jpg",
    "/images/orbit/Series-4580-1-1.5G-HT-Reactors.jpg"
  ],
  "series-4560-100-600-ml-mini-reactor-systems": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4560-100-600ml-mini-reactor.jpg",
    "/images/orbit/Catalogue-22.jpg",
    "/images/orbit/Series-4570-250-1800ml-HP-HT-Reactors.jpg",
    "/images/orbit/Series-4580-1-1.5G-HT-Reactors.jpg",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel.jpg"
  ],
  "series-4570-250-1800-ml-high-pressure-high-temperature-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4570-250-1800ml-HP-HT-Reactors.jpg",
    "/images/orbit/Catalogue-23.jpg",
    "/images/orbit/Series-4580-1-1.5G-HT-Reactors.jpg",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel.jpg",
    "/images/orbit/Series-5500-25-600ml-compact-reactors.jpg"
  ],
  "series-4580-1-1-5-g-ht-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4580-1-1.5G-HT-Reactors.jpg",
    "/images/orbit/Catalogue-24.jpg",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel.jpg",
    "/images/orbit/Series-5500-25-600ml-compact-reactors.jpg",
    "/images/orbit/Series-8500-50100-L-Floor-stand-reactors.jpg"
  ],
  "series-4590-25-100ml-mini-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4790-25-100ml-General-Purpose-HP-HT-pressure-vessel.jpg",
    "/images/orbit/Catalogue-25.jpg",
    "/images/orbit/Series-5500-25-600ml-compact-reactors.jpg",
    "/images/orbit/Series-8500-50100-L-Floor-stand-reactors.jpg",
    "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg"
  ],
  "series-5500-high-pressure-compact-laboratory-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-5500-25-600ml-compact-reactors.jpg",
    "/images/orbit/Catalogue-26.jpg",
    "/images/orbit/Series-8500-50100-L-Floor-stand-reactors.jpg",
    "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
    "/images/orbit/Series-4530-1-2-L-General-Purpose-Floor-Stand-Reactor.jpg"
  ],
  "series8500-50100-l-floor-stand-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
    "/images/orbit/Catalogue-27.jpg",
    "/images/orbit/Series-4530-1-2-L-General-Purpose-Floor-Stand-Reactor.jpg",
    "/images/orbit/Series-High-4540-600-1200ml-Pressure-Reactors.jpg",
    "/images/orbit/Series-4550-1-2-Gallon-General-Purpose-Reactor.jpg"
  ],
  "apparatus-for-corrosion-studies": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Apparatus-for-Corrosion-Stu-1.jpg",
    "/images/orbit/High-Pressure-High-Temperat.jpg",
    "/images/orbit/Rotating-cage-apparatus-1.jpg",
    "/images/orbit/NanoCorr-CMAS-as-per-ASTM-G.jpg",
    "/images/orbit/apparatus-for-vapor-pressure-determination-img.jpg"
  ],
  "high-pressure-high-temperature-rotating-cylinder-electrode-rce-system": [
    "/images/orbit/parr-1.png",
    "/images/orbit/High-Pressure-High-Temperat.jpg",
    "/images/orbit/Rotating-cage-apparatus-1.jpg",
    "/images/orbit/Apparatus-for-Corrosion-Stu-1.jpg",
    "/images/orbit/NanoCorr-CMAS-as-per-ASTM-G.jpg",
    "/images/orbit/apparatus-for-vapor-pressure-determination-img.jpg"
  ],
  "nanocorr-cmas-as-per-astm-g217": [
    "/images/orbit/corr-1.png",
    "/images/orbit/NanoCorr-CMAS-as-per-ASTM-G.jpg",
    "/images/orbit/High-Pressure-High-Temperat.jpg",
    "/images/orbit/Rotating-cage-apparatus-1.jpg",
    "/images/orbit/Apparatus-for-Corrosion-Stu-1.jpg",
    "/images/orbit/apparatus-for-vapor-pressure-determination-img.jpg"
  ],
  "rotating-cage-apparatus": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Rotating-cage-apparatus-1.jpg",
    "/images/orbit/High-Pressure-High-Temperat.jpg",
    "/images/orbit/Apparatus-for-Corrosion-Stu-1.jpg",
    "/images/orbit/NanoCorr-CMAS-as-per-ASTM-G.jpg",
    "/images/orbit/apparatus-for-vapor-pressure-determination-img.jpg"
  ],
  "4744-general-purpose-acid-digestion-vessel-45-ml": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4744.jpg",
    "/images/orbit/Catalogue-35.jpg",
    "/images/orbit/4748.jpg",
    "/images/orbit/4748a.jpg",
    "/images/orbit/4745.jpg"
  ],
  "4745-general-purpose-acid-digestion-vessel-23-ml-1200-psig": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4745.jpg",
    "/images/orbit/Catalogue-35.jpg",
    "/images/orbit/4744.jpg",
    "/images/orbit/4748.jpg",
    "/images/orbit/4746.jpg"
  ],
  "4746-high-pressure-acid-digestion-vessel-23-ml-5000-psig": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4746.jpg",
    "/images/orbit/Catalogue-35.jpg",
    "/images/orbit/4744.jpg",
    "/images/orbit/4748.jpg",
    "/images/orbit/4749.jpg"
  ],
  "4747-high-pressure-acid-digestion-vessel-23-ml-33000-psig": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4747.jpg",
    "/images/orbit/Catalogue-35.jpg",
    "/images/orbit/4744.jpg",
    "/images/orbit/4748.jpg",
    "/images/orbit/4748a.jpg"
  ],
  "4748-large-capacity-acid-digestion-vessels-125-ml": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4748.jpg",
    "/images/orbit/Catalogue-35.jpg",
    "/images/orbit/4744.jpg",
    "/images/orbit/4748a.jpg",
    "/images/orbit/4745.jpg"
  ],
  "4748a-large-capacity-acid-digestion-vessels-200-ml": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4748a.jpg",
    "/images/orbit/Catalogue-35.jpg",
    "/images/orbit/4744.jpg",
    "/images/orbit/4748.jpg",
    "/images/orbit/4745.jpg"
  ],
  "4749-general-purpose-acid-digestion-vessels-23-ml": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4749.jpg",
    "/images/orbit/Catalogue-35.jpg",
    "/images/orbit/4744.jpg",
    "/images/orbit/4748.jpg",
    "/images/orbit/4748a.jpg"
  ],
  "4635-cell-disruption-vessel-920ml": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4635.jpg",
    "/images/orbit/Catalogue-33.jpg",
    "/images/orbit/4636.jpg",
    "/images/orbit/4638.jpg",
    "/images/orbit/4639.jpg"
  ],
  "4636-cell-disruption-vessels-1850-ml": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4636.jpg",
    "/images/orbit/Catalogue-33.jpg",
    "/images/orbit/4635.jpg",
    "/images/orbit/4638.jpg",
    "/images/orbit/4639.jpg"
  ],
  "4637-cell-disruption-vessels-1-gallon": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4638.jpg",
    "/images/orbit/Catalogue-33.jpg",
    "/images/orbit/4635.jpg",
    "/images/orbit/4636.jpg",
    "/images/orbit/4639.jpg"
  ],
  "4638-cell-disruption-vessels-2-gallon": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4638.jpg",
    "/images/orbit/Catalogue-33.jpg",
    "/images/orbit/4635.jpg",
    "/images/orbit/4636.jpg",
    "/images/orbit/4639.jpg"
  ],
  "4639-cell-disruption-vessel": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4639.jpg",
    "/images/orbit/Catalogue-33.jpg",
    "/images/orbit/4635.jpg",
    "/images/orbit/4636.jpg",
    "/images/orbit/4638.jpg"
  ],
  "4781-microwave-acid-digestion-vessels-23ml": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4781-MADV.jpg",
    "/images/orbit/Catalogue-35.jpg",
    "/images/orbit/4782-MADV.jpg",
    "/images/orbit/4748.jpg",
    "/images/orbit/4748a.jpg"
  ],
  "4782-microwave-acid-digestion-vessels-45-ml": [
    "/images/orbit/parr-1.png",
    "/images/orbit/4782-MADV.jpg",
    "/images/orbit/Catalogue-35.jpg",
    "/images/orbit/4781-MADV.jpg",
    "/images/orbit/4748.jpg",
    "/images/orbit/4748a.jpg"
  ],
  "series-3910-shaker-hydrogenation-apparatus": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-3910-Shaker-Hydrogen.jpg",
    "/images/orbit/Series-3910-Shaker-Hydrogenation-Apparatus-Catalogue.jpg",
    "/images/orbit/Series-3920-Shaker-Hydrogen.jpg",
    "/images/orbit/Series-4680-1-1.8-L-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4670-11.5-G-HP-HT-Reactor-img.jpg"
  ],
  "series-3920-shaker-hydrogenation-apparatus": [
    "/images/orbit/parr-1.png",
    "/images/orbit/Series-3910-Shaker-Hydrogen.jpg",
    "/images/orbit/Catalogue-34.jpg",
    "/images/orbit/Series-4680-1-1.8-L-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4670-11.5-G-HP-HT-Reactor-img.jpg",
    "/images/orbit/Series-4675-2.6-5G-General-Purpose-Reactor-im.jpg"
  ],
  "supercritical-co2-extraction-systems": [
    "/images/orbit/super-critical-1.jpg"
  ],
  "5400-continuous-flow-tubular-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/5400-Continuous-Flow-Tubula.jpg",
    "/images/orbit/5400-Continuous-Flow-Tubular-Reactors-Catalogue.jpg",
    "/images/orbit/5420-Continuous-Flow-Tubula.jpg",
    "/images/orbit/5410-Fluidized-Bed-reactors.jpg",
    "/images/orbit/NanoCorr-CMAS-as-per-ASTM-G.jpg"
  ],
  "5410-fluidizedbed-reactors": [
    "/images/orbit/parr-1.png",
    "/images/orbit/5410-Fluidized-Bed-reactors.jpg",
    "/images/orbit/5410-fluidizedbed-reactors-Catalogue.jpg",
    "/images/orbit/5400-Continuous-Flow-Tubula.jpg",
    "/images/orbit/5420-Continuous-Flow-Tubula.jpg",
    "/images/orbit/NanoCorr-CMAS-as-per-ASTM-G.jpg"
  ],
  "5420-continuous-flow-tubular-reactor-with-touch-screen": [
    "/images/orbit/parr-1.png",
    "/images/orbit/5420-Continuous-Flow-Tubula.jpg",
    "/images/orbit/5420-Continuous-Flow-Tubular-Reactor-with-touch-Screen-catalogue.jpg",
    "/images/orbit/5400-Continuous-Flow-Tubula.jpg",
    "/images/orbit/5410-Fluidized-Bed-reactors.jpg",
    "/images/orbit/NanoCorr-CMAS-as-per-ASTM-G.jpg"
  ],
  "gh-series": [
    "/images/orbit/gh-series.jpg"
  ],
  "gr-series": [
    "/images/orbit/gr-series.jpg"
  ],
  "hr-i-series": [
    "/images/orbit/HR-i-Series.jpg"
  ],
  "laboratory-sieve-shaker": [
    "/images/orbit/SIEVE-SHAKER-ASM-200.jpg",
    "/images/orbit/ANALYTICAL-SCREENING-MACHINE.jpg",
    "/images/orbit/SIEVE-SHAKER-ASM-400-1.jpg",
    "/images/orbit/LARGE-ANALYTICAL-SCREENING-MACHINE.jpg"
  ],
  "split-tub-furnace": [
    "/images/orbit/TUBE-FURNACE-_-SINGLE-ZONE-1200_c-to-1850-_c-1.png",
    "/images/orbit/Split-Tube-Furnace-_-Single-Zone-1100_c-1200-_c-1700-1.png",
    "/images/orbit/Vacuum-Tube-Furnaces-_-Single-zone-1200_c-1500-_c-1.png"
  ],
  "ad-fortis-fz-wp-fx-wpseries": [
    "/images/orbit/AD-Fortis-FZ-WP-FX-WP-Series.jpg"
  ],
  "tga-1500-thermogravimetric-analyzer": [
    "/images/orbit/TGA1500.png",
    "/images/orbit/Tga-1500-Catalogue.jpg"
  ],
  "tga-3000-thermogravimetric-analyzer": [
    "/images/orbit/TGA-images-450-x-515-px.jpg",
    "/images/orbit/tga-3000.jpg",
    "/images/orbit/tga-3000-thermogravimetric-analyzer-pdf.jpg"
  ],
  "tube-furnace-single-zone-1200c-to-1850-c": [
    "/images/orbit/Tube.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-11.jpg"
  ],
  "multi-zone-tube-furnaces": [
    "/images/orbit/air-re-circulating-furnaces.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces.jpg",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/high-temperature-chamber-furnaces.jpg"
  ],
  "single-zone-tube-furnaces": [
    "/images/orbit/air-re-circulating-furnaces.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces.jpg",
    "/images/orbit/rapid-heating-chamber-furnaces.jpg",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/high-temperature-chamber-furnaces.jpg"
  ],
  "split-tube-furnace-single-zone-tshh-12": [
    "/images/orbit/elite.png",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-11.jpg",
    "/images/orbit/vertical-split-tube-furnaces-single-zone-tsvh-11.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-12.jpg",
    "/images/orbit/vertical-split-tube-furnaces-single-zone-tsvh-12.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tsvh-17.jpg"
  ],
  "split-tube-furnace-single-zone-tsvh-17": [
    "/images/orbit/elite.png",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-11.jpg",
    "/images/orbit/vertical-split-tube-furnaces-single-zone-tsvh-11.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-12.jpg",
    "/images/orbit/vertical-split-tube-furnaces-single-zone-tsvh-12.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tsvh-17.jpg"
  ],
  "split-tube-furnaces-single-zone-tshh-11": [
    "/images/orbit/elite.png",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-11.jpg",
    "/images/orbit/vertical-split-tube-furnaces-single-zone-tsvh-11.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-12.jpg",
    "/images/orbit/vertical-split-tube-furnaces-single-zone-tsvh-12.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tsvh-17.jpg"
  ],
  "split-tube-furnaces-single-zone-tsvh-12": [
    "/images/orbit/elite.png",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-11.jpg",
    "/images/orbit/vertical-split-tube-furnaces-single-zone-tsvh-11.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-12.jpg",
    "/images/orbit/vertical-split-tube-furnaces-single-zone-tsvh-12.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tsvh-17.jpg"
  ],
  "vertical-split-tube-furnace-single-zone-tsvh-11": [
    "/images/orbit/elite.png",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-11.jpg",
    "/images/orbit/vertical-split-tube-furnaces-single-zone-tsvh-11.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-12.jpg",
    "/images/orbit/vertical-split-tube-furnaces-single-zone-tsvh-12.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tsvh-17.jpg"
  ],
  "vacuum-tube-furnaces-tshvc-12": [
    "/images/orbit/elite.png",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg"
  ],
  "vacuum-tube-furnaces-tshvc-15": [
    "/images/orbit/elite.png",
    "/images/orbit/general-purpose-chamber-furnaces-1.jpg",
    "/images/orbit/economy-chamber-furnaces.jpg"
  ],
  "vacuum-tube-furnaces-single-zone-1200c-1500-c": [
    "/images/orbit/Tube.jpg",
    "/images/orbit/split-tube-furnaces-single-zone-tshh-11.jpg"
  ],
  "electric-fluxer": [
    "/images/orbit/eq.png",
    "/images/orbit/Electric-Fluxer.jpg",
    "/images/orbit/Manual-Pellet-Press.jpg",
    "/images/orbit/Semiautomatic-Pellet-Press.jpg",
    "/images/orbit/Semiautomatic-Pellet-Ultrapress.jpg",
    "/images/orbit/EQP-30-Manual-Pellet-Press.jpg"
  ],
  "eqp-30-manual-pellet-press": [
    "/images/orbit/eq.png",
    "/images/orbit/EQP-30-Manual-Pellet-Press.jpg",
    "/images/orbit/Manual-Pellet-Press.jpg",
    "/images/orbit/Semiautomatic-Pellet-Press.jpg",
    "/images/orbit/Semiautomatic-Pellet-Ultrapress.jpg",
    "/images/orbit/Electric-Fluxer.jpg"
  ],
  "manual-pellet-press": [
    "/images/orbit/eq.png",
    "/images/orbit/Manual-Pellet-Press.jpg",
    "/images/orbit/Electric-Fluxer.jpg",
    "/images/orbit/Semiautomatic-Pellet-Press.jpg",
    "/images/orbit/Semiautomatic-Pellet-Ultrapress.jpg",
    "/images/orbit/EQP-30-Manual-Pellet-Press.jpg"
  ],
  "carbon-sulfur-analyzers": [
    "/images/orbit/Combustion-Master-CS.png",
    "/images/orbit/CHNSo-analyzers.jpg",
    "/images/orbit/Fusion-Master-ONH.png",
    "/images/orbit/IRMS.jpg"
  ],
  "chns-o-analyzers": [
    "/images/orbit/Combustion-Master-CS.png",
    "/images/orbit/CHNSo-analyzers.jpg",
    "/images/orbit/Fusion-Master-ONH.png",
    "/images/orbit/IRMS.jpg"
  ],
  "eatc16": [
    "/images/orbit/IF2000G.jpg"
  ],
  "ash-fusion-determinator-eatc17": [
    "/images/orbit/IF2000G.jpg"
  ],
  "high-pressure-chambers": [
    "/images/orbit/very-high-pressure-chambers.jpg",
    "/images/orbit/pressure-test-bench.jpg",
    "/images/orbit/pressure-testing-facilities.jpg",
    "/images/orbit/underwater-applications.jpg"
  ],
  "pressure-test-bench": [
    "/images/orbit/pressure-test-bench.jpg",
    "/images/orbit/very-high-pressure-chambers.jpg",
    "/images/orbit/pressure-testing-facilities.jpg",
    "/images/orbit/underwater-applications.jpg"
  ],
  "pressure-testing-facility": [
    "/images/orbit/pressure-testing-facilities.jpg",
    "/images/orbit/very-high-pressure-chambers.jpg",
    "/images/orbit/pressure-test-bench.jpg",
    "/images/orbit/underwater-applications.jpg"
  ],
  "under-water-applications": [
    "/images/orbit/underwater-applications.jpg",
    "/images/orbit/very-high-pressure-chambers.jpg",
    "/images/orbit/pressure-test-bench.jpg",
    "/images/orbit/pressure-testing-facilities.jpg"
  ],
  "continuous-flow-tubular-reactors-5400": [
    "/images/orbit/Stirred-Reactor-PNG.png",
    "/images/orbit/5100-Glass-Reactor.png",
    "/images/orbit/3910-Shaker-Hydrogenation-PNG.png",
    "/images/orbit/Reactor-system-for-biofuel-and-alternative-fuel-research-img.jpg",
    "/images/orbit/Rotating-Cage-Apparatus-PNG.png",
    "/images/orbit/Tubular-Reactor-PNG.png"
  ],
  "vibratory-sieve-shaker": [
    "/images/orbit/SIEVE-SHAKER-ASM-200.jpg",
    "/images/orbit/Airjet-Sieve-Shaker.jpg"
  ],
  "jaw-crusher": [
    "/images/orbit/JAW-CRUSHER.jpg",
    "/images/orbit/Cone-crusher.jpg",
    "/images/orbit/Hammer-Mill.jpg",
    "/images/orbit/MULTI-PURPOSE-MILL.jpg",
    "/images/orbit/DISC-MILL.jpg",
    "/images/orbit/Vibrating-Mill.jpg"
  ],
  "hydraulic-pellet-press": [
    "/images/orbit/Manual-Pellet-Press.jpg",
    "/images/orbit/Semiautomatic-Pellet-Press.jpg"
  ],
  "chamber-furnace": [
    "/images/orbit/laboratory-chamber-furnaces.jpg",
    "/images/orbit/industrial-chamber-furnaces.jpg",
    "/images/orbit/ashing-furnaces.jpg"
  ],
  "certified-reference-materials": [
    "/images/orbit/CSRM-1.jpg",
    "/images/orbit/CSRM-3.jpg",
    "/images/orbit/CSRM-2.jpg",
    "/images/orbit/CSRM-4.jpg",
    "/images/orbit/CSRM-5.jpg",
    "/images/orbit/CSRM-6.jpg"
  ],
  "laboratory-consumables-and-labware": [
    "/images/orbit/ExtraLab-50-to-500-ML.jpg",
    "/images/orbit/ExtraLab-1L-to-2L.jpg",
    "/images/orbit/ExtraLab-5L.jpg",
    "/images/orbit/ExtraLab-10L.jpg"
  ]
};

/**
 * Category banner & thumbnail images mapped directly from orbitindia.com.
 */
export const CATEGORY_IMAGE_MAP: Record<string, string> = {
  "advanced-level-analytical": "/images/orbit/AD-Apollo-GX-AE-WP-GF-AWP-Series.jpg",
  "analytical-instruments": "/images/orbit/Bomb-PNG.png",
  "ash-fusion-analyzers": "/images/orbit/IF2000G.jpg",
  "calorimeter": "/images/orbit/PARR-7400-1.jpg",
  "calorimeter/bomb-calorimeters": "/images/orbit/PARR-7400-1.jpg",
  "calorimeter/detonation-calorimeter": "/images/orbit/6790-Detonation-Calorimeter.jpg",
  "calorimeter/semimicro-and-solution-calorimeters": "/images/orbit/6725.jpg",
  "certified-and-standard-reference-materials": "/images/orbit/CSRM-1.jpg",
  "chamber-furnaces": "/images/orbit/laboratory-chamber-furnaces.jpg",
  "chamber-furnaces/ashing-furnace": "/images/orbit/light-industrial-chamber-furnaces-1400-c-to-1700-c-maximum.jpg",
  "chamber-furnaces/industrial-chamber-furnace": "/images/orbit/light-industrial-chamber-furnaces-1400-c-to-1700-c-maximum.jpg",
  "chamber-furnaces/laboratory-chamber-furnace": "/images/orbit/air-re-circulating-furnaces.jpg",
  "coal-and-coke-testing-instruments": "/images/orbit/minimum-free-space-oven.png",
  "crms-srms-laboratory-accessories": "/images/orbit/Laboratory-Accessories.png",
  "elemental-analyzers": "/images/orbit/Combustion-Master-CS.png",
  "elemental-analyzers/carbon-and-sulfur-analyzers": "/images/orbit/CSbox.jpg",
  "elemental-analyzers/chns-analyzers": "/images/orbit/ECS-4024.jpg",
  "elemental-analyzers/onh-analyzer": "/images/orbit/Fusion-Master-ONH.png",
  "extratex/industrial": "/images/orbit/extraindus25l.jpg",
  "extratex/laboratory": "/images/orbit/ExtraLab-50-to-500-ML.jpg",
  "furnace-heating-systems": "/images/orbit/General-Purpose-Furnace-1200_c.png",
  "gas-generators": "/images/orbit/Hydrogen-Gas-Generator-LMH-series.jpg",
  "high-temperature-tube-furnace": "/images/orbit/Tube.jpg",
  "laboratory-accessories": "/images/orbit/pumps.jpg",
  "light-industrial-chamber-furnace-1400c-to-1700-c": "/images/orbit/Bomb-PNG.png",
  "melting-furnaces": "/images/orbit/tga1500.jpg",
  "metal-sample-preparation-equipment": "/images/orbit/Metallic-Samples-Processing-Unit.jpg",
  "micro-analytical": "/images/orbit/BM-Series.jpg",
  "milling-pulverising": "/images/orbit/JAW-CRUSHER.jpg",
  "milling-pulverising/ball-mill": "/images/orbit/Orbpbm-PLANETARY-BALL-MILL.jpg",
  "muffle-furnace": "/images/orbit/tga1500.jpg",
  "other-instruments": "/images/orbit/Oxygen-Flask-Combustion-Unit-OFCU.jpg",
  "ovens": "/images/orbit/laboratory-chamber-furnaces.jpg",
  "precision-balances": "/images/orbit/Advanced-Level.jpg",
  "precision-balances/advanced-level-precision": "/images/orbit/AD-Apollo-GX-AE-WP-GF-AWP-Series.jpg",
  "precision-balances/entry-level-precision": "/images/orbit/entry-level.jpg",
  "precision-balances/standard-level-precision": "/images/orbit/Standard-Level.jpg",
  "premium-level-micro-semi-micro": "/images/orbit/AD-Borealis-BA-TBA-Series.jpg",
  "rapid-heating-chamber-furnaces-1200": "/images/orbit/Bomb-PNG.png",
  "reactors": "/images/orbit/Stirred-Reactor-PNG.png",
  "reactors/customized-reactors": "/images/orbit/Reactor-system-for-biofuel-and-alternative-fuel-research-img.jpg",
  "reactors/glass-reactors": "/images/orbit/tga-3000-GLASS-REACTOR.jpg",
  "reactors/hp-ht-reactors": "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
  "reactors/hp-ht-reactors/non-stirred-pressure-vessels": "/images/orbit/Series-4700-22-45-ml-General-purpose-pressure-vessel-img.jpg",
  "reactors/hp-ht-reactors/stirred-reactors": "/images/orbit/Series-4520-1-2-L-General-Purpose-Benchtop-Reactor.jpg",
  "reactors/reactor-systems-for-corrosion-monitoring-studies": "/images/orbit/High-Pressure-High-Temperat.jpg",
  "reactors/sample-preparation-vessels/acid-digestion-vessels": "/images/orbit/4744.jpg",
  "reactors/sample-preparation-vessels/cell-disruption-vessels": "/images/orbit/4635.jpg",
  "reactors/sample-preparation-vessels/microwave-digestion-vessels": "/images/orbit/4781-MADV.jpg",
  "reactors/shaker-hydrogenation-apparatus": "/images/orbit/Series-3910-Shaker-Hydrogen.jpg",
  "reactors/tubular-reactors": "/images/orbit/5400-Continuous-Flow-Tubula.jpg",
  "retort-furnace": "/images/orbit/tga1500.jpg",
  "semi-micro-analytical": "/images/orbit/gh-series.jpg",
  "sieving": "/images/orbit/SIEVE-SHAKER-ASM-200.jpg",
  "sintering-furnace": "/images/orbit/tga1500.jpg",
  "special-analyzers": "/images/orbit/AOX-analyzer.jpg",
  "standard-level-analytical": "/images/orbit/AD-Fortis-FZ-WP-FX-WP-Series.jpg",
  "tga-proximate-analyzers": "/images/orbit/tga-3000.jpg",
  "tube-furnace": "/images/orbit/TUBE-FURNACE-_-SINGLE-ZONE-1200_c-to-1850-_c-1.png",
  "tube-furnaces": "/images/orbit/TUBE-FURNACE-_-SINGLE-ZONE-1200_c-to-1850-_c-1.png",
  "tube-furnaces/split-tube-furnaces": "/images/orbit/air-re-circulating-furnaces.jpg",
  "tube-furnaces/vacuum-tube-furnaces": "/images/orbit/air-re-circulating-furnaces.jpg",
  "xrf-icp-sample-preparation-equipment": "/images/orbit/eq.png",
  "extratex": "/images/orbit/ExtraLab-50-to-500-ML.jpg",
  "reactors/sample-preparation-vessels": "/images/orbit/parr-1.png",
  "denatec": "/images/orbit/very-high-pressure-chambers.jpg",
  "analytical-balances": "/images/orbit/Bomb-PNG.png",
  "labware": "/images/orbit/Bomb-PNG.png"
};

export const DEFAULT_STANDARDS: TechnicalMethod[] = [
  {
    standard: "ASTM D5865 / D5865M",
    organization: "ASTM International",
    title: "Standard Test Method for Gross Calorific Value of Coal and Coke",
    applicableRange: "Solid mineral fuels, calorific value determination with high precision",
  },
  {
    standard: "ISO 1928:2020",
    organization: "ISO",
    title: "Solid mineral fuels — Determination of gross calorific value by bomb calorimetric method",
    applicableRange: "International standard for coal, coke and solid biofuels",
  },
  {
    standard: "DIN 51900",
    organization: "DIN (German Institute for Standardization)",
    title: "Testing of solid and liquid fuels — Determination of gross calorific value",
    applicableRange: "Isoperibolic and static jacket oxygen combustion vessels",
  },
  {
    standard: "IS 1350 (Part-II)",
    organization: "Bureau of Indian Standards (BIS)",
    title: "Methods of Test for Coal and Coke: Determination of Calorific Value",
    applicableRange: "Mandatory standard for Indian thermal power plants and mining labs",
  },
  {
    standard: "ASTM D3172 / D7582",
    organization: "ASTM International",
    title: "Standard Practice for Proximate Analysis of Coal and Coke",
    applicableRange: "Moisture, volatile matter, and ash determination in solid fuels",
  },
  {
    standard: "ASTM D1857 / ISO 540",
    organization: "ASTM International",
    title: "Standard Test Method for Fusibility of Coal and Coke Ash",
    applicableRange: "Initial deformation, softening, hemispherical and fluid temperatures",
  },
  {
    standard: "ASTM E1019",
    organization: "ASTM International",
    title: "Determination of Carbon, Sulfur, Nitrogen, and Oxygen in Steel, Iron, Nickel, and Cobalt Alloys",
    applicableRange: "Combustion infrared absorption and inert gas fusion thermal conductivity",
  },
];

export const DEFAULT_BROCHURES: ProductBrochure[] = [
  {
    title: "Technical Specification Sheet & Architecture Guide",
    size: "2.4 MB",
    type: "PDF Document",
    description: "Full engineering tolerances, installation prerequisites, electrical, and gas supply specifications.",
  },
  {
    title: "Comprehensive Application Handbook",
    size: "4.1 MB",
    type: "PDF Document",
    description: "Sample preparation protocols, combustion vessel handling, and ASTM/ISO standard compliance guidelines.",
  },
  {
    title: "Laboratory Pre-Installation & Site Readiness Checklist",
    size: "1.2 MB",
    type: "PDF Document",
    description: "Bench space, water chiller requirements, oxygen purity, and electrical earthing specifications.",
  },
  {
    title: "Preventive Maintenance & Hydrotesting Protocol",
    size: "850 KB",
    type: "PDF Document",
    description: "Annual maintenance schedule, oxygen bomb inspection thresholds, and calibration certificate guidelines.",
  },
];

export const DEFAULT_FAQS = [
  {
    q: "How does the true isoperibol measurement principle differ from static jacket calorimeters?",
    a: "In a true isoperibol calorimeter, the jacket temperature is continuously regulated to maintain an exact, constant temperature surrounding the bucket throughout the entire test. Highly accurate thermistors measure heat transfer across the fixed temperature gradient, allowing the microprocessor to apply rigorous thermal leakage corrections for high precision (0.1% RSD class).",
  },
  {
    q: "What are the oxygen combustion vessel inspection and hydrotesting requirements?",
    a: "Under international safety regulations (ASTM and ASME vessel codes), combustion bombs must undergo routine inspection every 500 firings and annual hydrostatic pressure testing up to 300 bar (4,500 psi). Orbit Technologies provides factory-authorized hydrostatic testing, seal re-facing, and certification in India in direct collaboration with Parr Instrument Company.",
  },
  {
    q: "What utilities and lab infrastructure are required for installation?",
    a: "Requirements include a stable laboratory bench capable of supporting 50 kg, a 230V / 50Hz clean regulated power supply with dedicated grounding, high-purity commercial oxygen (minimum 99.5% purity) regulated between 400–450 psi, and deionised water for bucket filling and cooling circulation.",
  },
  {
    q: "Can this instrument be interfaced with analytical balances and Laboratory Information Management Systems (LIMS)?",
    a: "Yes. The instrument features standard RS-232, dual USB ports, and a TCP/IP Ethernet network interface. It connects directly to analytical balances (such as A&D, Mettler, or Sartorius) to automatically capture tare and sample weights, and outputs structured test results directly to LIMS databases.",
  },
  {
    q: "What sample types can be tested with this system?",
    a: "It accommodates solid and liquid combustible samples including bituminous coal, anthracite, lignite, metallurgical coke, petroleum products (heavy fuel oils, diesel, aviation kerosene), solid biofuels (pellets, bagasse, wood chips), refuse-derived fuel (RDF), and food/feed nutritionals.",
  },
  {
    q: "What after-sales service and warranty support is provided by Orbit Technologies?",
    a: "All instruments supplied by Orbit Technologies include comprehensive manufacturer warranty, on-site installation and commissioning by certified engineers, hands-on user training, application support, and availability of genuine replacement seals, ignition wires, and crucibles stocked locally in Hyderabad.",
  },
];
