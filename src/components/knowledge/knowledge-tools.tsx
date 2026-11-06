"use client";

import { useState } from "react";
import {
  Calculator,
  Flame,
  Gauge,
  Sliders,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export function KnowledgeTools() {
  const [activeTool, setActiveTool] = useState<
    "calorific" | "calorimeter-w" | "reactor-sizer" | "ash-slagging"
  >("calorific");

  return (
    <div className="space-y-8">
      {/* Sub-selector for tools */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <button
          type="button"
          onClick={() => setActiveTool("calorific")}
          className={`flex flex-col items-start p-4 rounded-xl border text-left transition cursor-pointer ${
            activeTool === "calorific"
              ? "border-[#c4620a] bg-[#fdeedd]/40 shadow-sm"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <Flame
              className={`h-4 w-4 ${
                activeTool === "calorific" ? "text-[#c4620a]" : "text-slate-400"
              }`}
            />
            <span className="text-xs font-bold text-[#002f49]">GCV &amp; Basis Tool</span>
          </div>
          <span className="mt-1 text-[11px] text-slate-500 line-clamp-1">
            Convert kcal/MJ/BTU &amp; ar/ad/db
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTool("calorimeter-w")}
          className={`flex flex-col items-start p-4 rounded-xl border text-left transition cursor-pointer ${
            activeTool === "calorimeter-w"
              ? "border-[#c4620a] bg-[#fdeedd]/40 shadow-sm"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <Calculator
              className={`h-4 w-4 ${
                activeTool === "calorimeter-w" ? "text-[#c4620a]" : "text-slate-400"
              }`}
            />
            <span className="text-xs font-bold text-[#002f49]">W-Factor Calculator</span>
          </div>
          <span className="mt-1 text-[11px] text-slate-500 line-clamp-1">
            Benzoic Acid heat equivalent
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTool("reactor-sizer")}
          className={`flex flex-col items-start p-4 rounded-xl border text-left transition cursor-pointer ${
            activeTool === "reactor-sizer"
              ? "border-[#c4620a] bg-[#fdeedd]/40 shadow-sm"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <Gauge
              className={`h-4 w-4 ${
                activeTool === "reactor-sizer" ? "text-[#c4620a]" : "text-slate-400"
              }`}
            />
            <span className="text-xs font-bold text-[#002f49]">Autoclave Sizer</span>
          </div>
          <span className="mt-1 text-[11px] text-slate-500 line-clamp-1">
            Pressure &amp; 75% fill safety check
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTool("ash-slagging")}
          className={`flex flex-col items-start p-4 rounded-xl border text-left transition cursor-pointer ${
            activeTool === "ash-slagging"
              ? "border-[#c4620a] bg-[#fdeedd]/40 shadow-sm"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <Sliders
              className={`h-4 w-4 ${
                activeTool === "ash-slagging" ? "text-[#c4620a]" : "text-slate-400"
              }`}
            />
            <span className="text-xs font-bold text-[#002f49]">Slagging Risk Predictor</span>
          </div>
          <span className="mt-1 text-[11px] text-slate-500 line-clamp-1">
            Silica ratio &amp; fouling index
          </span>
        </button>
      </div>

      {/* Render selected tool */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {activeTool === "calorific" && <CalorificBasisConverter />}
        {activeTool === "calorimeter-w" && <CalorimeterWCalculator />}
        {activeTool === "reactor-sizer" && <ReactorSizerTool />}
        {activeTool === "ash-slagging" && <AshSlaggingPredictor />}
      </div>
    </div>
  );
}

// ==========================================
// TOOL 1: CALORIFIC VALUE & BASIS CONVERTER
// ==========================================

function CalorificBasisConverter() {
  const [val, setVal] = useState<number>(5500);
  const [unit, setUnit] = useState<"kcal" | "mj" | "btu">("kcal");
  const [basis, setBasis] = useState<"ad" | "ar" | "db">("ad");
  const [mAd, setMAd] = useState<number>(6.0);
  const [mAr, setMAr] = useState<number>(12.0);
  const [ashAd, setAshAd] = useState<number>(28.0);
  const [hAr, setHAr] = useState<number>(3.5);

  // Convert input value to kcal/kg in the selected basis first
  const inputKcal =
    unit === "kcal"
      ? val
      : unit === "mj"
      ? val / 0.0041868
      : val / 1.8;

  // Convert to Dry Basis (db)
  let gcvDb = 0;
  if (basis === "db") {
    gcvDb = inputKcal;
  } else if (basis === "ad") {
    gcvDb = inputKcal * (100 / Math.max(1, 100 - mAd));
  } else {
    // ar
    gcvDb = inputKcal * (100 / Math.max(1, 100 - mAr));
  }

  // Derive other bases from GCV db
  const gcvAd = gcvDb * ((100 - mAd) / 100);
  const gcvAr = gcvDb * ((100 - mAr) / 100);
  const ashDb = ashAd * (100 / Math.max(1, 100 - mAd));
  const gcvDaf = gcvDb * (100 / Math.max(1, 100 - ashDb));

  // Net Calorific Value (NCV) As-Received (ASTM D5865 formula)
  // NCV_ar (kcal/kg) = GCV_ar - (50.6 * H_ar) - (5.85 * M_ar)
  const ncvArKcal = Math.max(0, gcvAr - 50.6 * hAr - 5.85 * mAr);
  const ncvArMj = ncvArKcal * 0.0041868;

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <span className="chip chip-accent text-[11px] font-bold">Standard Formula ASTM D5865 / ISO 1928</span>
        <h3 className="mt-2 text-xl font-black text-[#002f49]">
          Coal Calorific Value (GCV/NCV) Unit &amp; Basis Converter
        </h3>
        <p className="mt-1 text-xs text-slate-600">
          Seamlessly convert heating values between metric and imperial units across As-Received (ar), Air-Dried (ad), Dry (db), and Dry Ash-Free (daf) bases.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left Inputs Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label className="block text-[11px] font-bold uppercase text-slate-700">
                Gross Calorific Value (Input)
              </label>
              <input
                type="number"
                value={val}
                onChange={(e) => setVal(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm font-bold text-slate-900 focus:border-[#002f49] focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-700">Unit</label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value as "kcal" | "mj" | "btu")}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
              >
                <option value="kcal">kcal / kg</option>
                <option value="mj">MJ / kg</option>
                <option value="btu">BTU / lb</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-700">
              Input Reporting Basis
            </label>
            <div className="mt-1 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setBasis("ad")}
                className={`py-1.5 text-xs font-bold rounded-md border transition cursor-pointer ${
                  basis === "ad"
                    ? "border-[#002f49] bg-[#002f49] text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                Air-Dried (ad)
              </button>
              <button
                type="button"
                onClick={() => setBasis("ar")}
                className={`py-1.5 text-xs font-bold rounded-md border transition cursor-pointer ${
                  basis === "ar"
                    ? "border-[#002f49] bg-[#002f49] text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                As-Received (ar)
              </button>
              <button
                type="button"
                onClick={() => setBasis("db")}
                className={`py-1.5 text-xs font-bold rounded-md border transition cursor-pointer ${
                  basis === "db"
                    ? "border-[#002f49] bg-[#002f49] text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                Dry Basis (db)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Air-Dry Moisture (M_ad %)
              </label>
              <input
                type="number"
                step="0.1"
                value={mAd}
                onChange={(e) => setMAd(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs text-slate-800"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Total Moisture (M_ar %)
              </label>
              <input
                type="number"
                step="0.1"
                value={mAr}
                onChange={(e) => setMAr(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs text-slate-800"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Air-Dry Ash (A_ad %)
              </label>
              <input
                type="number"
                step="0.1"
                value={ashAd}
                onChange={(e) => setAshAd(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs text-slate-800"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Hydrogen (H_ar % for NCV)
              </label>
              <input
                type="number"
                step="0.1"
                value={hAr}
                onChange={(e) => setHAr(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs text-slate-800"
              />
            </div>
          </div>
        </div>

        {/* Right Output Results Column */}
        <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Computed Energy Yields
            </h4>
            <span className="text-[11px] font-semibold text-[#c4620a]">Real-Time Result</span>
          </div>

          <div className="grid gap-2.5 text-xs">
            {/* GCV As-Received */}
            <div className="flex items-center justify-between rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
              <div>
                <span className="font-bold text-[#002f49]">GCV As-Received (GCV_ar)</span>
                <p className="text-[10px] text-slate-500">Commercial billing base at plant siding</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-black text-[#c4620a]">
                  {Math.round(gcvAr).toLocaleString()} kcal/kg
                </span>
                <p className="text-[10px] font-medium text-slate-600">
                  {(gcvAr * 0.0041868).toFixed(2)} MJ/kg · {Math.round(gcvAr * 1.8).toLocaleString()} BTU/lb
                </p>
              </div>
            </div>

            {/* GCV Air-Dried */}
            <div className="flex items-center justify-between rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
              <div>
                <span className="font-bold text-[#002f49]">GCV Air-Dried (GCV_ad)</span>
                <p className="text-[10px] text-slate-500">Laboratory test bench reporting basis</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-black text-slate-800">
                  {Math.round(gcvAd).toLocaleString()} kcal/kg
                </span>
                <p className="text-[10px] font-medium text-slate-600">
                  {(gcvAd * 0.0041868).toFixed(2)} MJ/kg
                </p>
              </div>
            </div>

            {/* GCV Dry Basis */}
            <div className="flex items-center justify-between rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
              <div>
                <span className="font-bold text-[#002f49]">GCV Dry Basis (GCV_db)</span>
                <p className="text-[10px] text-slate-500">Moisture-free matrix</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-black text-slate-800">
                  {Math.round(gcvDb).toLocaleString()} kcal/kg
                </span>
                <p className="text-[10px] font-medium text-slate-600">
                  {(gcvDb * 0.0041868).toFixed(2)} MJ/kg
                </p>
              </div>
            </div>

            {/* GCV DAF */}
            <div className="flex items-center justify-between rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
              <div>
                <span className="font-bold text-[#002f49]">Dry Ash-Free (GCV_daf)</span>
                <p className="text-[10px] text-slate-500">Pure organic combustible substance</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-black text-slate-800">
                  {Math.round(gcvDaf).toLocaleString()} kcal/kg
                </span>
              </div>
            </div>

            {/* NCV / LHV As-Received */}
            <div className="flex items-center justify-between rounded-lg bg-[#002f49] p-3 text-white shadow-sm">
              <div>
                <span className="font-bold text-[#ffb347]">Net Calorific Value (NCV_ar / LHV)</span>
                <p className="text-[10px] text-slate-300">Latent heat of moisture vapor deducted</p>
              </div>
              <div className="text-right">
                <span className="text-base font-black text-white">
                  {Math.round(ncvArKcal).toLocaleString()} kcal/kg
                </span>
                <p className="text-[10px] text-slate-300 font-medium">
                  {ncvArMj.toFixed(2)} MJ/kg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// TOOL 2: BOMB CALORIMETER W-FACTOR CALCULATOR
// ==========================================

function CalorimeterWCalculator() {
  const [h, setH] = useState<number>(26454); // J/g Benzoic acid
  const [mass, setMass] = useState<number>(1.0028); // g
  const [deltaT, setDeltaT] = useState<number>(2.4582); // °C
  const [fuseLen, setFuseLen] = useState<number>(8.2); // cm burned
  const [titrationMl, setTitrationMl] = useState<number>(4.2); // mL of 0.0709 N Na2CO3

  // Corrections:
  // e1: Nitric acid correction = 4.184 J/mL for 0.0709 N solution
  const e1 = titrationMl * 4.184;
  // e2: Fuse wire burn = 9.6 J/cm for Ni-Cr
  const e2 = fuseLen * 9.6;

  // W = (m * H + e1 + e2) / deltaT
  const wJoules = (mass * h + e1 + e2) / Math.max(0.1, deltaT);
  const wCalories = wJoules / 4.1868;

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <span className="chip chip-accent text-[11px] font-bold">Standard Calibration: ASTM D5865 / ISO 1928</span>
        <h3 className="mt-2 text-xl font-black text-[#002f49]">
          Bomb Calorimeter Water Equivalent ($W$) Calibration Calculator
        </h3>
        <p className="mt-1 text-xs text-slate-600">
          Compute the precise heat capacity ($W$-factor) of your bomb calorimeter bucket assembly from standardization runs with NIST-traceable Benzoic Acid.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-6 space-y-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-700">
              Benzoic Acid Certified Heat Value ($H$, J/g)
            </label>
            <input
              type="number"
              value={h}
              onChange={(e) => setH(parseFloat(e.target.value) || 0)}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
            />
            <span className="text-[10px] text-slate-500">Standard NIST value: 26,454 J/g ± 20 J/g</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Pellet Mass ($m$, grams)
              </label>
              <input
                type="number"
                step="0.0001"
                value={mass}
                onChange={(e) => setMass(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Corrected Temp Rise ($\Delta T$, °C)
              </label>
              <input
                type="number"
                step="0.0001"
                value={deltaT}
                onChange={(e) => setDeltaT(parseFloat(e.target.value) || 0.1)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Burned Fuse Wire Length (cm)
              </label>
              <input
                type="number"
                step="0.1"
                value={fuseLen}
                onChange={(e) => setFuseLen(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
              />
              <span className="text-[10px] text-slate-500">Corr ($e_2$): {e2.toFixed(1)} J</span>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                $Na_2CO_3$ Titration (mL)
              </label>
              <input
                type="number"
                step="0.1"
                value={titrationMl}
                onChange={(e) => setTitrationMl(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
              />
              <span className="text-[10px] text-slate-500">Corr ($e_1$): {e1.toFixed(1)} J</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Calculated Energy Equivalent ($W$)
            </span>

            <div className="rounded-xl bg-[#002f49] p-5 text-white shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffb347]">
                Effective Heat Capacity
              </span>
              <div className="mt-2 text-3xl font-black">
                {wJoules.toFixed(1)} <span className="text-lg font-bold">J / °C</span>
              </div>
              <p className="mt-1 text-xs text-slate-300">
                Equivalent to <strong>{wCalories.toFixed(2)} cal / °C</strong>
              </p>
            </div>

            <div className="rounded-lg bg-white p-3.5 border border-slate-200 text-xs space-y-1.5">
              <div className="flex justify-between text-slate-600">
                <span>Benzoic Acid Heat ($m \times H$):</span>
                <strong>{(mass * h).toFixed(1)} J</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Total Corrections ($e_1 + e_2$):</span>
                <strong>{(e1 + e2).toFixed(1)} J</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Net Temperature Lift ($\Delta T$):</span>
                <strong>{deltaT.toFixed(4)} °C</strong>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Ready for input into Parr 6400 / 7400 calibration configuration menu.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// TOOL 3: AUTOCLAVE SIZER & SAFETY CHECK
// ==========================================

function ReactorSizerTool() {
  const [totalVol, setTotalVol] = useState<number>(1000); // mL
  const [liqVol, setLiqVol] = useState<number>(600); // mL
  const [tempC, setTempC] = useState<number>(220); // °C
  const [coldPress, setColdPress] = useState<number>(30); // bar at 25C

  const fillFraction = (liqVol / Math.max(1, totalVol)) * 100;
  const isOverfilled = fillFraction > 75;

  // Estimated Hot Gas Pressure (Gay-Lussac law: P1/T1 = P2/T2)
  const tKelvinCold = 298.15;
  const tKelvinHot = tempC + 273.15;
  const hotGasPress = coldPress * (tKelvinHot / tKelvinCold);

  // Approximate steam vapor pressure if aqueous (Magnus formula approximation)
  // At 220C, water vapor is ~23 bar; at 250C ~40 bar; at 300C ~85 bar
  let vaporPress = 0;
  if (tempC >= 100) {
    vaporPress = Math.exp(16.5362 - 3985.44 / (tempC + 234.15)) * 1.01325;
  }

  const estTotalPress = hotGasPress + vaporPress;

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <span className="chip chip-accent text-[11px] font-bold">ASME Section VIII Safety Guidelines</span>
        <h3 className="mt-2 text-xl font-black text-[#002f49]">
          High-Pressure Reactor Headspace &amp; Safety Sizer
        </h3>
        <p className="mt-1 text-xs text-slate-600">
          Verify safe liquid fill limits (≤ 75% rule) and estimate combined gas expansion and solvent vapor pressures for autoclave synthesis.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Total Vessel Volume (mL)
              </label>
              <select
                value={totalVol}
                onChange={(e) => setTotalVol(parseInt(e.target.value) || 1000)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
              >
                <option value={100}>100 mL (Micro-Reactor)</option>
                <option value={300}>300 mL (Mini-Reactor)</option>
                <option value={450}>450 mL (Parr 4560)</option>
                <option value={600}>600 mL (Parr 4540)</option>
                <option value={1000}>1,000 mL (1.0 Liter)</option>
                <option value={2000}>2,000 mL (2.0 Liter)</option>
                <option value={5000}>5,000 mL (5.0 Liter)</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Liquid Charge Volume (mL)
              </label>
              <input
                type="number"
                value={liqVol}
                onChange={(e) => setLiqVol(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Target Temperature (°C)
              </label>
              <input
                type="number"
                value={tempC}
                onChange={(e) => setTempC(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700">
                Room Temp Gas Charge (bar)
              </label>
              <input
                type="number"
                value={coldPress}
                onChange={(e) => setColdPress(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Safety &amp; Pressure Verification
            </span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                isOverfilled
                  ? "bg-red-100 text-red-800"
                  : "bg-emerald-100 text-emerald-800"
              }`}
            >
              {isOverfilled ? "Caution: Overfilled" : "Safe Fill Level"}
            </span>
          </div>

          <div className="rounded-lg bg-white p-3.5 border border-slate-200 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Liquid Fill Ratio:</span>
              <strong className={isOverfilled ? "text-red-600 font-black text-sm" : "text-emerald-700 font-bold"}>
                {fillFraction.toFixed(1)}% (Max safe: 75%)
              </strong>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full ${isOverfilled ? "bg-red-500" : "bg-emerald-500"}`}
                style={{ width: `${Math.min(100, fillFraction)}%` }}
              />
            </div>
            {isOverfilled && (
              <p className="flex items-center gap-1.5 text-[11px] text-red-600 font-semibold pt-1">
                <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                Never fill beyond 75%! Thermal expansion can cause dangerous hydraulic rupture.
              </p>
            )}
          </div>

          <div className="rounded-xl bg-[#002f49] p-4 text-white space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-300">Hot Gas Thermal Pressure:</span>
              <span className="font-bold">{hotGasPress.toFixed(1)} bar</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-300">Solvent Vapor Pressure:</span>
              <span className="font-bold">~ {vaporPress.toFixed(1)} bar</span>
            </div>
            <div className="border-t border-white/20 pt-2 flex justify-between items-center text-sm">
              <span className="font-bold text-[#ffb347]">Estimated Total Pressure:</span>
              <span className="text-lg font-black text-white">
                ~ {Math.round(estTotalPress)} bar ({Math.round(estTotalPress * 14.5)} psi)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// TOOL 4: ASH SLAGGING & FOULING RISK
// ==========================================

function AshSlaggingPredictor() {
  const [sio2, setSio2] = useState<number>(56.0);
  const [al2o3, setAl2o3] = useState<number>(25.0);
  const [fe2o3, setFe2o3] = useState<number>(6.5);
  const [cao, setCao] = useState<number>(4.2);
  const [mgo, setMgo] = useState<number>(1.8);
  const [alkalies, setAlkalies] = useState<number>(1.5); // Na2O + K2O
  const [sulfur, setSulfur] = useState<number>(0.65); // % S in coal

  // Silica Ratio SR = (SiO2 / (SiO2 + Fe2O3 + CaO + MgO)) * 100
  const denom = sio2 + fe2o3 + cao + mgo;
  const silicaRatio = denom > 0 ? (sio2 / denom) * 100 : 0;

  // Base-to-Acid Ratio B/A
  const basicOxides = fe2o3 + cao + mgo + alkalies;
  const acidicOxides = sio2 + al2o3;
  const baRatio = acidicOxides > 0 ? basicOxides / acidicOxides : 0;

  // Slagging Factor Rs = (B/A) * Sulfur
  const slaggingFactor = baRatio * sulfur;

  // Risk categorization:
  // SR > 72: Low; 65-72: Medium; < 65: High
  let srRisk: "Low" | "Medium" | "High" = "Low";
  if (silicaRatio < 65) srRisk = "High";
  else if (silicaRatio <= 72) srRisk = "Medium";

  // Rs: < 0.6 Low; 0.6 - 2.0 Med; 2.0 - 2.6 High; >= 2.6 Severe
  let rsRisk: "Low" | "Medium" | "High" | "Severe" = "Low";
  if (slaggingFactor >= 2.6) rsRisk = "Severe";
  else if (slaggingFactor >= 2.0) rsRisk = "High";
  else if (slaggingFactor >= 0.6) rsRisk = "Medium";

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <span className="chip chip-accent text-[11px] font-bold">Utility Boiler Chemistry</span>
        <h3 className="mt-2 text-xl font-black text-[#002f49]">
          Coal Ash Slagging &amp; Fouling Risk Predictor
        </h3>
        <p className="mt-1 text-xs text-slate-600">
          Enter coal ash oxide analysis to compute the Silica Ratio (SR) and Slagging Factor ($R_s$) to anticipate boiler clinkering risks before firing.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-700">% $SiO_2$</label>
            <input
              type="number"
              step="0.1"
              value={sio2}
              onChange={(e) => setSio2(parseFloat(e.target.value) || 0)}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700">% $Al_2O_3$</label>
            <input
              type="number"
              step="0.1"
              value={al2o3}
              onChange={(e) => setAl2o3(parseFloat(e.target.value) || 0)}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700">% $Fe_2O_3$</label>
            <input
              type="number"
              step="0.1"
              value={fe2o3}
              onChange={(e) => setFe2o3(parseFloat(e.target.value) || 0)}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700">% $CaO$</label>
            <input
              type="number"
              step="0.1"
              value={cao}
              onChange={(e) => setCao(parseFloat(e.target.value) || 0)}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700">% $MgO$</label>
            <input
              type="number"
              step="0.1"
              value={mgo}
              onChange={(e) => setMgo(parseFloat(e.target.value) || 0)}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700">% $Na_2O + K_2O$</label>
            <input
              type="number"
              step="0.1"
              value={alkalies}
              onChange={(e) => setAlkalies(parseFloat(e.target.value) || 0)}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
            />
          </div>
          <div className="col-span-2 sm:col-span-3 pt-1">
            <label className="block text-[11px] font-bold text-slate-700">
              Total Sulfur in Coal (% S dry basis)
            </label>
            <input
              type="number"
              step="0.05"
              value={sulfur}
              onChange={(e) => setSulfur(parseFloat(e.target.value) || 0)}
              className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-xs font-semibold text-slate-800"
            />
          </div>
        </div>

        {/* Prediction Results */}
        <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Combustion &amp; Clinkering Indexes
          </span>

          {/* Silica Ratio Card */}
          <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#002f49]">Silica Ratio (SR)</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                  srRisk === "Low"
                    ? "bg-emerald-100 text-emerald-800"
                    : srRisk === "Medium"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {srRisk} Risk
              </span>
            </div>
            <div className="mt-1 text-2xl font-black text-slate-900">
              {silicaRatio.toFixed(1)}%
            </div>
            <p className="mt-1 text-[10px] text-slate-500">
              SR &gt; 72 indicates minimal molten slagging tendency.
            </p>
          </div>

          {/* Slagging Factor Card */}
          <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#002f49]">Slagging Factor ($R_s$)</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                  rsRisk === "Low"
                    ? "bg-emerald-100 text-emerald-800"
                    : rsRisk === "Medium"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {rsRisk} Slagging
              </span>
            </div>
            <div className="mt-1 text-2xl font-black text-slate-900">
              {slaggingFactor.toFixed(3)}
            </div>
            <p className="mt-1 text-[10px] text-slate-500">
              $R_s = (B/A) \times S$. Value &lt; 0.6 indicates low tube fouling propensity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
