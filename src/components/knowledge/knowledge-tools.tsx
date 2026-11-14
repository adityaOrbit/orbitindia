"use client";

import { useState, type ReactNode } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";

// ==========================================
// Shared presentation helpers (redesign kit)
// ==========================================

const inputCls = "input tnum";
const helpCls = "mt-1 block text-[13px] text-[var(--ink-3)] tnum";

function ToolHeader({ title, intro }: { title: ReactNode; intro: ReactNode }) {
  return (
    <div className="border-b border-[var(--line)] pb-5">
      <h2 className="text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-2xl">{title}</h2>
      <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-[var(--ink-3)]">{intro}</p>
    </div>
  );
}

/** Bordered results panel with a light header row. */
function ResultPanel({ title, aside, children }: { title: ReactNode; aside?: ReactNode; children: ReactNode }) {
  return (
    <div className="self-start rounded-md border border-[var(--line)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] bg-[var(--soft)] px-4 py-3">
        <h3 className="text-[15px] font-semibold text-[var(--ink)]">{title}</h3>
        {aside}
      </div>
      {children}
    </div>
  );
}

/** One result line: label + note on the left, value on the right. */
function ResultRow({
  label,
  note,
  value,
  sub,
  highlight = false,
}: {
  label: ReactNode;
  note?: ReactNode;
  value: ReactNode;
  sub?: ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-1 border-b border-[var(--line)] px-4 py-3 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4 ${
        highlight ? "bg-[#eef4fb]" : ""
      }`}
    >
      <div className="min-w-0">
        <span className="text-[15px] font-medium text-[var(--ink)]">{label}</span>
        {note && <p className="text-[13px] text-[var(--ink-3)]">{note}</p>}
      </div>
      <div className="shrink-0 sm:text-right tnum">
        <span className={`font-semibold text-[var(--ink)] ${highlight ? "text-lg" : "text-base"}`}>{value}</span>
        {sub && <p className="text-[13px] text-[var(--ink-3)]">{sub}</p>}
      </div>
    </div>
  );
}

/** Status text for risk levels: colour carries the meaning, no pill. */
function statusCls(level: string) {
  if (level === "Low") return "text-emerald-700";
  if (level === "Medium") return "text-amber-700";
  return "text-red-700";
}

// ==========================================
// TOOL PICKER (all four tools in one view)
// ==========================================

export function KnowledgeTools() {
  const [activeTool, setActiveTool] = useState<
    "calorific" | "calorimeter-w" | "reactor-sizer" | "ash-slagging"
  >("calorific");

  const tools: { id: typeof activeTool; title: string; sub: string }[] = [
    { id: "calorific", title: "GCV & Basis Tool", sub: "Convert kcal/MJ/BTU & ar/ad/db" },
    { id: "calorimeter-w", title: "W-Factor Calculator", sub: "Benzoic Acid heat equivalent" },
    { id: "reactor-sizer", title: "Autoclave Sizer", sub: "Pressure & 75% fill safety check" },
    { id: "ash-slagging", title: "Slagging Risk Predictor", sub: "Silica ratio & fouling index" },
  ];

  return (
    <div className="space-y-8">
      {/* Sub-selector for tools */}
      <div className="cells grid-cols-2 sm:grid-cols-4" role="group" aria-label="Calculators">
        {tools.map((t) => {
          const active = activeTool === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTool(t.id)}
              aria-pressed={active}
              className={`flex min-h-[44px] flex-col items-start p-4 text-left transition-colors ${
                active ? "bg-[var(--soft)] shadow-[inset_0_-2px_0_#0056B3]" : "hover:bg-[var(--soft)]"
              }`}
            >
              <span className={`text-[15px] font-semibold ${active ? "text-[#0056B3]" : "text-[var(--ink)]"}`}>
                {t.title}
              </span>
              <span className="mt-1 text-[13px] text-[var(--ink-3)]">{t.sub}</span>
            </button>
          );
        })}
      </div>

      {/* Render selected tool */}
      <div>
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

export function CalorificBasisConverter() {
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

  const bases: { id: "ad" | "ar" | "db"; label: string }[] = [
    { id: "ad", label: "Air-Dried (ad)" },
    { id: "ar", label: "As-Received (ar)" },
    { id: "db", label: "Dry Basis (db)" },
  ];

  return (
    <div className="space-y-6">
      <ToolHeader
        title={<>Coal Calorific Value (GCV/NCV) Unit &amp; Basis Converter</>}
        intro="Convert heating values between metric and imperial units across As-Received (ar), Air-Dried (ad), Dry (db), and Dry Ash-Free (daf) bases."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Left Inputs Column */}
        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label htmlFor="cv-val" className="label">
                Gross Calorific Value (Input)
              </label>
              <input
                id="cv-val"
                type="number"
                value={val}
                onChange={(e) => setVal(parseFloat(e.target.value) || 0)}
                className={`${inputCls} font-semibold`}
              />
            </div>
            <div>
              <label htmlFor="cv-unit" className="label">Unit</label>
              <select
                id="cv-unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value as "kcal" | "mj" | "btu")}
                className="input"
              >
                <option value="kcal">kcal / kg</option>
                <option value="mj">MJ / kg</option>
                <option value="btu">BTU / lb</option>
              </select>
            </div>
          </div>

          <div>
            <span className="label">Input Reporting Basis</span>
            <div
              className="grid grid-cols-3 rounded-[0.25rem] border border-[#b9c2ce] p-0.5"
              role="group"
              aria-label="Input Reporting Basis"
            >
              {bases.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBasis(b.id)}
                  aria-pressed={basis === b.id}
                  className={`min-h-[44px] rounded-[0.2rem] px-2 text-[13px] font-medium transition-colors sm:text-sm lg:min-h-[40px] ${
                    basis === b.id ? "bg-[var(--ink)] text-white" : "text-[var(--ink-2)] hover:text-[#0056B3]"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="cv-mad" className="label">
                Air-Dry Moisture (M_ad %)
              </label>
              <input
                id="cv-mad"
                type="number"
                step="0.1"
                value={mAd}
                onChange={(e) => setMAd(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="cv-mar" className="label">
                Total Moisture (M_ar %)
              </label>
              <input
                id="cv-mar"
                type="number"
                step="0.1"
                value={mAr}
                onChange={(e) => setMAr(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="cv-ash" className="label">
                Air-Dry Ash (A_ad %)
              </label>
              <input
                id="cv-ash"
                type="number"
                step="0.1"
                value={ashAd}
                onChange={(e) => setAshAd(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="cv-h" className="label">
                Hydrogen (H_ar % for NCV)
              </label>
              <input
                id="cv-h"
                type="number"
                step="0.1"
                value={hAr}
                onChange={(e) => setHAr(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
            </div>
          </div>
        </div>

        {/* Right Output Results Column */}
        <ResultPanel
          title="Computed Energy Yields"
          aside={<span className="text-[13px] text-[var(--ink-3)]">Real-Time Result</span>}
        >
          <ResultRow
            label="GCV As-Received (GCV_ar)"
            note="Commercial billing base at plant siding"
            value={<>{Math.round(gcvAr).toLocaleString()} kcal/kg</>}
            sub={
              <>
                {(gcvAr * 0.0041868).toFixed(2)} MJ/kg · {Math.round(gcvAr * 1.8).toLocaleString()} BTU/lb
              </>
            }
          />
          <ResultRow
            label="GCV Air-Dried (GCV_ad)"
            note="Laboratory test bench reporting basis"
            value={<>{Math.round(gcvAd).toLocaleString()} kcal/kg</>}
            sub={<>{(gcvAd * 0.0041868).toFixed(2)} MJ/kg</>}
          />
          <ResultRow
            label="GCV Dry Basis (GCV_db)"
            note="Moisture-free matrix"
            value={<>{Math.round(gcvDb).toLocaleString()} kcal/kg</>}
            sub={<>{(gcvDb * 0.0041868).toFixed(2)} MJ/kg</>}
          />
          <ResultRow
            label="Dry Ash-Free (GCV_daf)"
            note="Pure organic combustible substance"
            value={<>{Math.round(gcvDaf).toLocaleString()} kcal/kg</>}
          />
          <ResultRow
            highlight
            label="Net Calorific Value (NCV_ar / LHV)"
            note="Latent heat of moisture vapor deducted"
            value={<>{Math.round(ncvArKcal).toLocaleString()} kcal/kg</>}
            sub={<>{ncvArMj.toFixed(2)} MJ/kg</>}
          />
        </ResultPanel>
      </div>
    </div>
  );
}

// ==========================================
// TOOL 2: BOMB CALORIMETER W-FACTOR CALCULATOR
// ==========================================

export function CalorimeterWCalculator() {
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
      <ToolHeader
        title="Bomb Calorimeter Water Equivalent ($W$) Calibration Calculator"
        intro="Compute the precise heat capacity ($W$-factor) of your bomb calorimeter bucket assembly from standardization runs with NIST-traceable Benzoic Acid."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-5">
          <div>
            <label htmlFor="w-h" className="label">
              Benzoic Acid Certified Heat Value ($H$, J/g)
            </label>
            <input
              id="w-h"
              type="number"
              value={h}
              onChange={(e) => setH(parseFloat(e.target.value) || 0)}
              className={inputCls}
            />
            <span className={helpCls}>Standard NIST value: 26,454 J/g ± 20 J/g</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="w-m" className="label">
                Pellet Mass ($m$, grams)
              </label>
              <input
                id="w-m"
                type="number"
                step="0.0001"
                value={mass}
                onChange={(e) => setMass(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="w-dt" className="label">
                Corrected Temp Rise ($\Delta T$, °C)
              </label>
              <input
                id="w-dt"
                type="number"
                step="0.0001"
                value={deltaT}
                onChange={(e) => setDeltaT(parseFloat(e.target.value) || 0.1)}
                className={inputCls}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="w-fuse" className="label">
                Burned Fuse Wire Length (cm)
              </label>
              <input
                id="w-fuse"
                type="number"
                step="0.1"
                value={fuseLen}
                onChange={(e) => setFuseLen(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
              <span className={helpCls}>Corr ($e_2$): {e2.toFixed(1)} J</span>
            </div>
            <div>
              <label htmlFor="w-tit" className="label">
                $Na_2CO_3$ Titration (mL)
              </label>
              <input
                id="w-tit"
                type="number"
                step="0.1"
                value={titrationMl}
                onChange={(e) => setTitrationMl(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
              <span className={helpCls}>Corr ($e_1$): {e1.toFixed(1)} J</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <ResultPanel title="Calculated Energy Equivalent ($W$)">
          <div className="border-b border-[var(--line)] bg-[#eef4fb] px-4 py-5">
            <span className="stat-label">Effective Heat Capacity</span>
            <div className="stat-num mt-1 !text-3xl">
              {wJoules.toFixed(1)} <span className="text-lg font-semibold">J / °C</span>
            </div>
            <p className="mt-1 text-sm text-[var(--ink-2)] tnum">
              Equivalent to <strong className="font-semibold text-[var(--ink)]">{wCalories.toFixed(2)} cal / °C</strong>
            </p>
          </div>

          <ResultRow label="Benzoic Acid Heat ($m \times H$):" value={<>{(mass * h).toFixed(1)} J</>} />
          <ResultRow label="Total Corrections ($e_1 + e_2$):" value={<>{(e1 + e2).toFixed(1)} J</>} />
          <ResultRow label="Net Temperature Lift ($\Delta T$):" value={<>{deltaT.toFixed(4)} °C</>} />

          <p className="flex items-start gap-2 border-t border-[var(--line)] px-4 py-3 text-sm text-[var(--ink-2)]">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
            <span>Ready for input into Parr 6400 / 7400 calibration configuration menu.</span>
          </p>
        </ResultPanel>
      </div>
    </div>
  );
}

// ==========================================
// TOOL 3: AUTOCLAVE SIZER & SAFETY CHECK
// ==========================================

export function ReactorSizerTool() {
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
      <ToolHeader
        title={<>High-Pressure Reactor Headspace &amp; Safety Sizer</>}
        intro="Verify safe liquid fill limits (≤ 75% rule) and estimate combined gas expansion and solvent vapor pressures for autoclave synthesis."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="r-vol" className="label">
                Total Vessel Volume (mL)
              </label>
              <select
                id="r-vol"
                value={totalVol}
                onChange={(e) => setTotalVol(parseInt(e.target.value) || 1000)}
                className="input"
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
              <label htmlFor="r-liq" className="label">
                Liquid Charge Volume (mL)
              </label>
              <input
                id="r-liq"
                type="number"
                value={liqVol}
                onChange={(e) => setLiqVol(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="r-temp" className="label">
                Target Temperature (°C)
              </label>
              <input
                id="r-temp"
                type="number"
                value={tempC}
                onChange={(e) => setTempC(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="r-press" className="label">
                Room Temp Gas Charge (bar)
              </label>
              <input
                id="r-press"
                type="number"
                value={coldPress}
                onChange={(e) => setColdPress(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <ResultPanel
          title={<>Safety &amp; Pressure Verification</>}
          aside={
            <span className={`text-sm font-semibold ${isOverfilled ? "text-red-700" : "text-emerald-700"}`}>
              {isOverfilled ? "Caution: Overfilled" : "Safe Fill Level"}
            </span>
          }
        >
          <div className="space-y-2 border-b border-[var(--line)] px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[15px] text-[var(--ink-2)]">Liquid Fill Ratio:</span>
              <strong className={`font-semibold tnum ${isOverfilled ? "text-red-700" : "text-emerald-700"}`}>
                {fillFraction.toFixed(1)}% (Max safe: 75%)
              </strong>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-sm bg-[var(--line)]">
              <div
                className={`h-full ${isOverfilled ? "bg-red-600" : "bg-emerald-600"}`}
                style={{ width: `${Math.min(100, fillFraction)}%` }}
              />
            </div>
            {isOverfilled && (
              <p className="flex items-start gap-1.5 pt-1 text-sm font-medium text-red-700">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Never fill beyond 75%! Thermal expansion can cause dangerous hydraulic rupture.
              </p>
            )}
          </div>

          <ResultRow label="Hot Gas Thermal Pressure:" value={<>{hotGasPress.toFixed(1)} bar</>} />
          <ResultRow label="Solvent Vapor Pressure:" value={<>~ {vaporPress.toFixed(1)} bar</>} />
          <ResultRow
            highlight
            label="Estimated Total Pressure:"
            value={
              <>
                ~ {Math.round(estTotalPress)} bar ({Math.round(estTotalPress * 14.5)} psi)
              </>
            }
          />
        </ResultPanel>
      </div>
    </div>
  );
}

// ==========================================
// TOOL 4: ASH SLAGGING & FOULING RISK
// ==========================================

export function AshSlaggingPredictor() {
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

  const oxides: { id: string; label: string; value: number; set: (n: number) => void }[] = [
    { id: "sio2", label: "% $SiO_2$", value: sio2, set: setSio2 },
    { id: "al2o3", label: "% $Al_2O_3$", value: al2o3, set: setAl2o3 },
    { id: "fe2o3", label: "% $Fe_2O_3$", value: fe2o3, set: setFe2o3 },
    { id: "cao", label: "% $CaO$", value: cao, set: setCao },
    { id: "mgo", label: "% $MgO$", value: mgo, set: setMgo },
    { id: "alk", label: "% $Na_2O + K_2O$", value: alkalies, set: setAlkalies },
  ];

  return (
    <div className="space-y-6">
      <ToolHeader
        title={<>Coal Ash Slagging &amp; Fouling Risk Predictor</>}
        intro="Enter coal ash oxide analysis to compute the Silica Ratio (SR) and Slagging Factor ($R_s$) to anticipate boiler clinkering risks before firing."
      />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="grid grid-cols-2 content-start gap-3 sm:grid-cols-3 lg:col-span-7">
          {oxides.map((o) => (
            <div key={o.id}>
              <label htmlFor={`ash-${o.id}`} className="label">{o.label}</label>
              <input
                id={`ash-${o.id}`}
                type="number"
                step="0.1"
                value={o.value}
                onChange={(e) => o.set(parseFloat(e.target.value) || 0)}
                className={inputCls}
              />
            </div>
          ))}
          <div className="col-span-2 pt-1 sm:col-span-3">
            <label htmlFor="ash-s" className="label">
              Total Sulfur in Coal (% S dry basis)
            </label>
            <input
              id="ash-s"
              type="number"
              step="0.05"
              value={sulfur}
              onChange={(e) => setSulfur(parseFloat(e.target.value) || 0)}
              className={inputCls}
            />
          </div>
        </div>

        {/* Prediction Results */}
        <div className="lg:col-span-5">
          <ResultPanel title={<>Combustion &amp; Clinkering Indexes</>}>
            <div className="border-b border-[var(--line)] px-4 py-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[15px] font-medium text-[var(--ink)]">Silica Ratio (SR)</span>
                <span className={`text-sm font-semibold ${statusCls(srRisk)}`}>{srRisk} Risk</span>
              </div>
              <div className="stat-num mt-1">{silicaRatio.toFixed(1)}%</div>
              <p className="mt-1 text-[13px] text-[var(--ink-3)]">
                SR &gt; 72 indicates minimal molten slagging tendency.
              </p>
            </div>

            <div className="px-4 py-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[15px] font-medium text-[var(--ink)]">Slagging Factor ($R_s$)</span>
                <span className={`text-sm font-semibold ${statusCls(rsRisk)}`}>{rsRisk} Slagging</span>
              </div>
              <div className="stat-num mt-1">{slaggingFactor.toFixed(3)}</div>
              <p className="mt-1 text-[13px] text-[var(--ink-3)]">
                $R_s = (B/A) \times S$. Value &lt; 0.6 indicates low tube fouling propensity.
              </p>
            </div>
          </ResultPanel>
        </div>
      </div>
    </div>
  );
}
