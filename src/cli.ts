import { readFileSync } from "node:fs";
import path from "node:path";
import { Command } from "commander";
import { runScanCommand } from "./commands/scan";

function readPackageVersion(): string {
  const packageJsonPath = path.resolve(__dirname, "../package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8")) as {
    version?: string;
  };

  return packageJson.version ?? "0.0.0";
}

export function createCli(): Command {
  const program = new Command();

  program
    .name("pp-scan")
    .description("Scan a project for Permission Protocol integration opportunities.")
    .version(readPackageVersion());

  program
    .command("scan")
    .description("Scan a project path.")
    .argument("[path]", "Path to scan", ".")
    .action(async (scanPath: string) => {
      await runScanCommand(scanPath);
    });

  return program;
}

async function main(): Promise<void> {
  await createCli().parseAsync(process.argv);
}

void main();
