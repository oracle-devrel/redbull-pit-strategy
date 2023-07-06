#!/usr/bin/env zx

import { exitWithError, readEnvJson } from "./lib/utils.mjs";

const shell = process.env.SHELL | "/bin/zsh";
$.shell = shell;
$.verbose = false;

const { regionName, tenancyId, desiredNumberCPUs, compartmentId } =
  await readEnvJson();

try {
  let { exitCode, stderr } =
    await $`sed 's/TENANCY_OCID/${tenancyId}/' dev/terraform/terraform.tfvars.template \
                   | sed 's/REGION/${regionName}/' \
                   | sed 's/COMPARTMENT_OCID/${compartmentId}/' \
                   | sed 's/DESIRED_NUMBER_CPU/${desiredNumberCPUs}/' > dev/terraform/terraform.tfvars`;
  if (exitCode !== 0) {
    exitWithError(`Error creating dev/terraform/terraform.tfvars: ${stderr}`);
  }
  console.log(`${chalk.green("dev/terraform/terraform.tfvars")} created.`);
} catch (error) {
  exitWithError(error.stderr);
}
