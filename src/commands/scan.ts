import chalk from "chalk";
import { analyzePermissionGaps } from "../analyzer";
import { detectFramework } from "../detector";
import { formatReport } from "../reporter";

export async function runScanCommand(scanPath: string): Promise<void> {
  const detection = await detectFramework(scanPath);
  const analysis = await analyzePermissionGaps(scanPath, detection);
  const output = formatReport(scanPath, detection, analysis);

  console.log(chalk.cyan(`scanning ${scanPath}...`));
  console.log(output);
}
