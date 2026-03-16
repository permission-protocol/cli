declare module "@permission-protocol/sdk" {
  export interface PermissionReceipt {
    receiptId: string;
    tenantId: string;
    agentId: string;
    tool: string;
    operation: string;
    inputHash: string;
    decision: "APPROVED" | "DENIED" | "REQUIRES_APPROVAL";
    reasonCodes: string[];
    approver: "policy" | "human" | "founder" | "dev_mock";
    policyVersion?: string;
    createdAt: string;
    receiptSig?: string;
    sigAlg?: "ed25519" | "hmac-sha256";
  }
}
