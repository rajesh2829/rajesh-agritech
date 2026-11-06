"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  Droplets,
  Timer,
  Gauge,
  Info,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ToolTab = "crop-water" | "drip-duration" | "pipe-friction";

export function IrrigationTools() {
  const [activeTool, setActiveTool] = useState<ToolTab>("crop-water");

  // ===========================================================================
  // 1. CROP WATER REQUIREMENT STATE
  // ===========================================================================
  const [et0, setEt0] = useState<number>(6.5); // mm/day (typical summer/arid)
  const [kc, setKc] = useState<number>(0.9); // crop coefficient
  const [areaVal, setAreaVal] = useState<number>(1); // area value
  const [areaUnit, setAreaUnit] = useState<"ha" | "acre" | "sqm">("ha");
  const [efficiency, setEfficiency] = useState<number>(90); // % for drip

  // Presets for Kc
  const cropPresets = [
    { name: "Date Palm", kc: 0.95 },
    { name: "Tomato (Mid)", kc: 1.15 },
    { name: "Citrus (Orchard)", kc: 0.70 },
    { name: "Wheat (Booting)", kc: 1.10 },
    { name: "Olive", kc: 0.65 },
    { name: "Greenhouse Veg", kc: 0.85 },
  ];

  const cropWaterResults = useMemo(() => {
    // Convert area to square meters
    let areaInSqm = areaVal;
    if (areaUnit === "ha") areaInSqm = areaVal * 10000;
    if (areaUnit === "acre") areaInSqm = areaVal * 4046.86;

    const safeEt0 = Math.max(0.1, et0 || 0);
    const safeKc = Math.max(0.1, kc || 0);
    const safeEff = Math.min(100, Math.max(10, efficiency || 90)) / 100;

    const etcMm = safeEt0 * safeKc; // mm/day
    // Net volume in m3: mm * m2 / 1000
    const netVolumeM3 = (etcMm * areaInSqm) / 1000;
    const grossVolumeM3 = netVolumeM3 / safeEff;
    const grossVolumeLiters = grossVolumeM3 * 1000;
    const grossDepthMm = etcMm / safeEff;

    return {
      etcMm: etcMm.toFixed(2),
      netVolumeM3: Math.round(netVolumeM3).toLocaleString(),
      grossVolumeM3: Math.round(grossVolumeM3).toLocaleString(),
      grossVolumeLiters: Math.round(grossVolumeLiters).toLocaleString(),
      grossDepthMm: grossDepthMm.toFixed(2),
    };
  }, [et0, kc, areaVal, areaUnit, efficiency]);

  // ===========================================================================
  // 2. DRIP DURATION & FLOW RATE STATE
  // ===========================================================================
  const [dripAreaSqm, setDripAreaSqm] = useState<number>(5000); // 0.5 ha
  const [rowSpacing, setRowSpacing] = useState<number>(2.5); // meters
  const [emitterSpacing, setEmitterSpacing] = useState<number>(0.6); // meters
  const [emitterDischarge, setEmitterDischarge] = useState<number>(2.0); // L/h
  const [targetDailyDepth, setTargetDailyDepth] = useState<number>(5.5); // mm/day

  const dripResults = useMemo(() => {
    const area = Math.max(1, dripAreaSqm || 1);
    const rSpacing = Math.max(0.1, rowSpacing || 1);
    const eSpacing = Math.max(0.1, emitterSpacing || 0.5);
    const qEmitter = Math.max(0.2, emitterDischarge || 2.0);
    const depth = Math.max(0.1, targetDailyDepth || 5.0);

    const emitterArea = rSpacing * eSpacing; // m2 per emitter
    const totalEmitters = Math.round(area / emitterArea);
    const totalSystemFlowLph = totalEmitters * qEmitter;
    const totalSystemFlowM3h = totalSystemFlowLph / 1000;

    // Precipitation / Application rate in mm/h = q (L/h) / Area (m2)
    const applicationRateMmh = qEmitter / emitterArea;

    // Operating time (hours) = Depth (mm) / Application Rate (mm/h)
    const requiredHours = depth / applicationRateMmh;
    const wholeHours = Math.floor(requiredHours);
    const remainingMins = Math.round((requiredHours - wholeHours) * 60);

    return {
      totalEmitters: totalEmitters.toLocaleString(),
      systemFlowM3h: totalSystemFlowM3h.toFixed(1),
      systemFlowLph: Math.round(totalSystemFlowLph).toLocaleString(),
      applicationRateMmh: applicationRateMmh.toFixed(2),
      hoursText: `${wholeHours}h ${remainingMins}m`,
      decimalHours: requiredHours.toFixed(2),
    };
  }, [dripAreaSqm, rowSpacing, emitterSpacing, emitterDischarge, targetDailyDepth]);

  // ===========================================================================
  // 3. PIPE FRICTION LOSS STATE (Hazen-Williams)
  // ===========================================================================
  const [pipeLength, setPipeLength] = useState<number>(120); // meters
  const [pipeDiameterMm, setPipeDiameterMm] = useState<number>(63); // mm internal
  const [flowRateM3h, setFlowRateM3h] = useState<number>(14); // m3/h
  const [cFactor, setCFactor] = useState<number>(150); // PVC=150, HDPE=140

  const pipePresets = [
    { label: "16mm Lateral (LDPE)", d: 13.6, c: 140 },
    { label: "32mm Submain (HDPE)", d: 28.0, c: 140 },
    { label: "50mm PVC Main", d: 45.2, c: 150 },
    { label: "63mm PVC Main", d: 57.0, c: 150 },
    { label: "90mm Mainline", d: 81.4, c: 150 },
    { label: "110mm Mainline", d: 99.4, c: 150 },
  ];

  const frictionResults = useMemo(() => {
    const L = Math.max(1, pipeLength || 1); // m
    const D_mm = Math.max(5, pipeDiameterMm || 20); // mm
    const D_m = D_mm / 1000; // m
    const Q_m3h = Math.max(0.1, flowRateM3h || 1); // m3/h
    const Q_m3s = Q_m3h / 3600; // m3/s
    const C = Math.max(50, cFactor || 150);

    // Hazen-Williams formula (SI units):
    // hf = 10.67 * L * Q^1.852 / (C^1.852 * D^4.8704)
    const hf =
      (10.67 * L * Math.pow(Q_m3s, 1.852)) /
      (Math.pow(C, 1.852) * Math.pow(D_m, 4.8704));

    // Pressure drop: 10 m head ≈ 1 bar (exact: 1 m head = 0.0980665 bar)
    const deltaPBar = hf * 0.0980665;

    // Velocity: V = Q / Area = (4 * Q) / (pi * D^2)
    const area = (Math.PI * Math.pow(D_m, 2)) / 4;
    const velocity = Q_m3s / area;

    let velocityStatus = "optimal";
    let velocityMsg = "Optimal velocity (safe against water hammer and pipe scour)";
    if (velocity < 0.6) {
      velocityStatus = "low";
      velocityMsg = "Low velocity: Risk of silt sedimentation in pipes";
    } else if (velocity > 2.0) {
      velocityStatus = "danger";
      velocityMsg =
        "High velocity (> 2.0 m/s): Severe water hammer risk and excessive head loss. Recommend upsizing pipe.";
    } else if (velocity > 1.5) {
      velocityStatus = "caution";
      velocityMsg = "Acceptable upper limit for mainline delivery lines";
    }

    return {
      hfMeters: hf.toFixed(2),
      deltaPBar: deltaPBar.toFixed(2),
      deltaPkPa: (deltaPBar * 100).toFixed(1),
      velocity: velocity.toFixed(2),
      velocityStatus,
      velocityMsg,
      headLossPer100m: ((hf / L) * 100).toFixed(2),
    };
  }, [pipeLength, pipeDiameterMm, flowRateM3h, cFactor]);

  return (
    <div className="mt-14 pt-14 border-t border-border">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-surface-soft text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
            <Calculator className="h-3 w-3 text-accent" />
            <span>Interactive Agri-Engineering Tools</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            Irrigation Hydraulic & Water Calculators
          </h3>
          <p className="text-xs sm:text-sm text-muted mt-1 max-w-xl">
            Live client-side engineering tools built with TypeScript to calculate crop evapotranspiration water budgets, drip duration, and Hazen-Williams friction loss.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl border border-border bg-surface-soft/80 backdrop-blur-xs">
          <button
            type="button"
            onClick={() => setActiveTool("crop-water")}
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200",
              activeTool === "crop-water"
                ? "bg-primary text-white shadow-xs"
                : "text-muted hover:text-foreground hover:bg-surface"
            )}
          >
            <Droplets className="h-3.5 w-3.5" />
            <span>Crop Water (ET)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTool("drip-duration")}
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200",
              activeTool === "drip-duration"
                ? "bg-primary text-white shadow-xs"
                : "text-muted hover:text-foreground hover:bg-surface"
            )}
          >
            <Timer className="h-3.5 w-3.5" />
            <span>Drip Flow & Duration</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTool("pipe-friction")}
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200",
              activeTool === "pipe-friction"
                ? "bg-primary text-white shadow-xs"
                : "text-muted hover:text-foreground hover:bg-surface"
            )}
          >
            <Gauge className="h-3.5 w-3.5" />
            <span>Pipe Friction (Hazen-Williams)</span>
          </button>
        </div>
      </div>

      {/* CALCULATOR 1: CROP WATER REQUIREMENT */}
      {activeTool === "crop-water" && (
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Engineering Input Parameters
                </span>
                <span className="text-[11px] text-muted font-mono">
                  Formula: ETc = ET0 × Kc
                </span>
              </div>

              {/* Crop Presets */}
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">
                  Quick Crop Presets (Select to load Kc)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {cropPresets.map((crop) => (
                    <button
                      key={crop.name}
                      type="button"
                      onClick={() => setKc(crop.kc)}
                      className={cn(
                        "px-2.5 py-1 text-xs rounded-lg border transition-colors",
                        kc === crop.kc
                          ? "bg-primary/10 border-primary text-primary font-bold"
                          : "border-border bg-surface-soft text-muted hover:text-foreground"
                      )}
                    >
                      {crop.name} ({crop.kc})
                    </button>
                  ))}
                </div>
              </div>

              {/* ET0 & Kc Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Reference ET (ET0) [mm/day]
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    max="15"
                    value={et0}
                    onChange={(e) => setEt0(parseFloat(e.target.value) || 0)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                  <span className="text-[11px] text-muted mt-1 block">
                    Dubai typical summer: 6.0 – 9.0 mm/day
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Crop Coefficient (Kc)
                  </label>
                  <input
                    type="number"
                    step="0.05"
                    min="0.1"
                    max="1.5"
                    value={kc}
                    onChange={(e) => setKc(parseFloat(e.target.value) || 0)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                  <span className="text-[11px] text-muted mt-1 block">
                    FAO-56 growth stage coefficient
                  </span>
                </div>
              </div>

              {/* Area & Unit Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Plot / Field Area
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={areaVal}
                      onChange={(e) => setAreaVal(parseFloat(e.target.value) || 0)}
                      className="flex-1 px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                    />
                    <select
                      value={areaUnit}
                      onChange={(e) =>
                        setAreaUnit(e.target.value as "ha" | "acre" | "sqm")
                      }
                      className="px-3 py-2 text-xs font-semibold rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="ha">Hectares (ha)</option>
                      <option value="acre">Acres</option>
                      <option value="sqm">Sq. Meters (m²)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Irrigation Efficiency (Ea) [%]
                  </label>
                  <input
                    type="number"
                    min="40"
                    max="98"
                    value={efficiency}
                    onChange={(e) => setEfficiency(parseFloat(e.target.value) || 0)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                  <span className="text-[11px] text-muted mt-1 block">
                    Drip: 90% · Sprinkler: 75% · Surface: 60%
                  </span>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-primary/20">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Calculated Water Budget
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white">
                  Instant Output
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-muted">Crop Evapotranspiration (ETc)</div>
                  <div className="font-serif text-3xl font-extrabold text-foreground flex items-baseline gap-1.5">
                    <span>{cropWaterResults.etcMm}</span>
                    <span className="text-xs font-sans font-medium text-muted">mm/day</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-xs text-muted">Daily Net Water Requirement</div>
                  <div className="font-serif text-2xl font-bold text-foreground">
                    {cropWaterResults.netVolumeM3} <span className="text-sm font-sans text-muted">m³/day</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-xs font-bold text-primary">
                    Gross Irrigation Water Needed (at {efficiency}% efficiency)
                  </div>
                  <div className="font-serif text-3xl font-black text-primary">
                    {cropWaterResults.grossVolumeM3}{" "}
                    <span className="text-base font-sans font-bold text-primary">m³/day</span>
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    Equivalent to {cropWaterResults.grossVolumeLiters} Liters/day ({cropWaterResults.grossDepthMm} mm gross depth)
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface border border-border text-[11px] text-muted flex items-start gap-2">
                <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> Estimates reflect FAO Penman-Monteith methodology. Actual field volume should also account for leaching fraction (LF) if using saline groundwater.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 2: DRIP FLOW RATE & OPERATING DURATION */}
      {activeTool === "drip-duration" && (
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Drip Network Specifications
                </span>
                <span className="text-[11px] text-muted font-mono">
                  Duration = Depth / Application Rate
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Plot Area [m²]
                  </label>
                  <input
                    type="number"
                    step="100"
                    min="100"
                    value={dripAreaSqm}
                    onChange={(e) => setDripAreaSqm(parseFloat(e.target.value) || 0)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                  <span className="text-[11px] text-muted mt-1 block">
                    1 Hectare = 10,000 m²
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Target Daily Water Depth [mm/day]
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    min="0.5"
                    max="20"
                    value={targetDailyDepth}
                    onChange={(e) =>
                      setTargetDailyDepth(parseFloat(e.target.value) || 0)
                    }
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                  <span className="text-[11px] text-muted mt-1 block">
                    Gross depth from crop water calculation
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Row Spacing [m]
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.3"
                    max="10"
                    value={rowSpacing}
                    onChange={(e) => setRowSpacing(parseFloat(e.target.value) || 0)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                  <span className="text-[11px] text-muted mt-1 block">
                    Distance between laterals
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Emitter Spacing [m]
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.2"
                    max="5"
                    value={emitterSpacing}
                    onChange={(e) =>
                      setEmitterSpacing(parseFloat(e.target.value) || 0)
                    }
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                  <span className="text-[11px] text-muted mt-1 block">
                    Distance along lateral
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Emitter Discharge [L/h]
                  </label>
                  <select
                    value={emitterDischarge}
                    onChange={(e) =>
                      setEmitterDischarge(parseFloat(e.target.value) || 2.0)
                    }
                    className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value={1.2}>1.2 L/h (Low Flow)</option>
                    <option value={1.6}>1.6 L/h (PC In-line)</option>
                    <option value={2.0}>2.0 L/h (Standard)</option>
                    <option value={4.0}>4.0 L/h (Orchard)</option>
                    <option value={8.0}>8.0 L/h (Trees)</option>
                  </select>
                  <span className="text-[11px] text-muted mt-1 block">
                    Rated at 1.0 – 1.5 bar
                  </span>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-primary/20">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  System Capacity & Duration
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white">
                  Required Runtime
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-primary">
                    Required Daily Operating Duration
                  </div>
                  <div className="font-serif text-3xl font-black text-primary flex items-baseline gap-2">
                    <span>{dripResults.hoursText}</span>
                    <span className="text-xs font-sans font-normal text-muted">
                      ({dripResults.decimalHours} hrs/day)
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-muted">System Flow Rate</div>
                    <div className="font-serif text-xl font-bold text-foreground">
                      {dripResults.systemFlowM3h}{" "}
                      <span className="text-xs font-sans text-muted">m³/h</span>
                    </div>
                    <div className="text-[11px] text-muted">
                      {dripResults.systemFlowLph} L/h
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-muted">Application Rate</div>
                    <div className="font-serif text-xl font-bold text-foreground">
                      {dripResults.applicationRateMmh}{" "}
                      <span className="text-xs font-sans text-muted">mm/h</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-xs text-muted">Estimated Total Emitter Count</div>
                  <div className="font-serif text-xl font-bold text-foreground">
                    {dripResults.totalEmitters}{" "}
                    <span className="text-xs font-sans text-muted">emitters</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface border border-border text-[11px] text-muted flex items-start gap-2">
                <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Hydraulic Rule:</strong> If total required runtime exceeds 16 hours/day, subdivide the field into separate valve zones to prevent pump overheating.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 3: PIPE FRICTION LOSS (HAZEN-WILLIAMS) */}
      {activeTool === "pipe-friction" && (
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Pipe Hydraulic Parameters
                </span>
                <span className="text-[11px] text-muted font-mono">
                  Hazen-Williams Equation
                </span>
              </div>

              {/* Presets */}
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">
                  Standard Pipe Presets (Click to load ID & C-factor)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {pipePresets.map((pipe) => (
                    <button
                      key={pipe.label}
                      type="button"
                      onClick={() => {
                        setPipeDiameterMm(pipe.d);
                        setCFactor(pipe.c);
                      }}
                      className={cn(
                        "px-2.5 py-1 text-xs rounded-lg border transition-colors",
                        pipeDiameterMm === pipe.d
                          ? "bg-primary/10 border-primary text-primary font-bold"
                          : "border-border bg-surface-soft text-muted hover:text-foreground"
                      )}
                    >
                      {pipe.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Pipe Length (L) [m]
                  </label>
                  <input
                    type="number"
                    step="5"
                    min="1"
                    max="2000"
                    value={pipeLength}
                    onChange={(e) => setPipeLength(parseFloat(e.target.value) || 0)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                  <span className="text-[11px] text-muted mt-1 block">
                    Straight pipe run length
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Pipe Internal Diameter (D) [mm]
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="10"
                    max="500"
                    value={pipeDiameterMm}
                    onChange={(e) =>
                      setPipeDiameterMm(parseFloat(e.target.value) || 0)
                    }
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                  <span className="text-[11px] text-muted mt-1 block">
                    Actual internal bore (ID), not nominal OD
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Flow Rate (Q) [m³/h]
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    min="0.1"
                    max="300"
                    value={flowRateM3h}
                    onChange={(e) => setFlowRateM3h(parseFloat(e.target.value) || 0)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                  <span className="text-[11px] text-muted mt-1 block">
                    1 m³/h ≈ 0.278 L/s
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Roughness Coefficient (C)
                  </label>
                  <select
                    value={cFactor}
                    onChange={(e) => setCFactor(parseInt(e.target.value) || 150)}
                    className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-border bg-surface-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value={150}>C = 150 (Smooth PVC / New Plastic)</option>
                    <option value={140}>C = 140 (HDPE Polyethylene)</option>
                    <option value={120}>C = 120 (Galvanized Iron / Steel)</option>
                    <option value={100}>C = 100 (Aged Cast Iron / Concrete)</option>
                  </select>
                  <span className="text-[11px] text-muted mt-1 block">
                    Hazen-Williams roughness coefficient
                  </span>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-primary/20">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Hydraulic Friction Results
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white">
                  Head Loss
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-muted">Total Friction Head Loss (hf)</div>
                  <div className="font-serif text-3xl font-black text-foreground flex items-baseline gap-1.5">
                    <span>{frictionResults.hfMeters}</span>
                    <span className="text-sm font-sans font-semibold text-muted">
                      meters of head
                    </span>
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    Pressure Drop: <strong>{frictionResults.deltaPBar} bar</strong> ({frictionResults.deltaPkPa} kPa)
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-xs text-muted">Flow Velocity in Pipe</div>
                  <div className="font-serif text-2xl font-bold text-foreground flex items-baseline gap-1.5">
                    <span>{frictionResults.velocity}</span>
                    <span className="text-xs font-sans text-muted">m/s</span>
                  </div>

                  {/* Velocity feedback badge */}
                  <div
                    className={cn(
                      "mt-2 p-2.5 rounded-xl text-xs flex items-start gap-2 border",
                      frictionResults.velocityStatus === "danger"
                        ? "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400"
                        : frictionResults.velocityStatus === "caution"
                        ? "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400"
                        : "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400"
                    )}
                  >
                    {frictionResults.velocityStatus === "danger" ? (
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    )}
                    <span>{frictionResults.velocityMsg}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted">
                  <span>Unit Head Loss Gradient:</span>
                  <span className="font-mono font-bold text-foreground">
                    {frictionResults.headLossPer100m} m / 100m
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface border border-border text-[11px] text-muted flex items-start gap-2">
                <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Hazen-Williams Note:</strong> Does not include localized minor head losses across fittings, tees, and valves (typically add 10%–15% equivalent length).
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

