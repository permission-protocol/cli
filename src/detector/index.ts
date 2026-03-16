import type { PermissionReceipt } from "@permission-protocol/sdk";

export interface DetectionResult {
  framework: string | null;
  confidence: number;
  notes: string[];
  receiptSample?: PermissionReceipt;
}

export async function detectFramework(scanPath: string): Promise<DetectionResult> {
  return {
    framework: null,
    confidence: 0,
    notes: [`Framework detection is not implemented yet for ${scanPath}.`]
  };
}
