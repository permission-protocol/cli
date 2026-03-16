import chalk from "chalk";
import type { AnalysisResult } from "../analyzer";
import type { DetectionResult } from "../detector";

export function formatReport(
  scanPath: string,
  detection: DetectionResult,
  analysis: AnalysisResult
): string {
  const framework = detection.framework ?? "unidentified";

  return [
    chalk.bold("Scan report"),
    `Path: ${scanPath}`,
    `Framework: ${framework}`,
    `Confidence: ${detection.confidence}`,
    `Summary: ${analysis.summary}`
  ].join("\n");
}
