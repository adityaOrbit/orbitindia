"use client";

import {
  CalorificBasisConverter,
  CalorimeterWCalculator,
  ReactorSizerTool,
  AshSlaggingPredictor,
} from "@/components/knowledge/knowledge-tools";

/** Renders one Knowledge Hub calculator by its FREE_TOOLS_META id. */
export function CalculatorById({ id }: { id: string }) {
  switch (id) {
    case "calorific-unit-basis-converter":
      return <CalorificBasisConverter />;
    case "bomb-water-equivalent-calculator":
      return <CalorimeterWCalculator />;
    case "reactor-pressure-headspace-sizer":
      return <ReactorSizerTool />;
    case "coal-ash-slagging-predictor":
      return <AshSlaggingPredictor />;
    default:
      return null;
  }
}
