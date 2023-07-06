#!/usr/bin/env zx

import {
  getRegions,
  getTenancyId,
  searchCompartmentIdByName,
} from "./lib/oci.mjs";
import {
  checkRequiredProgramsExist,
  setVariableFromEnvOrPrompt,
  writeEnvJson,
  readEnvJson,
  printRegionNames,
} from "./lib/utils.mjs";

const shell = process.env.SHELL | "/bin/zsh";
$.shell = shell;
$.verbose = false;

let properties = await readEnvJson();

console.log("Check dependencies...");
const dependencies = ["git", "unzip", "oci"];
await checkRequiredProgramsExist(dependencies);

const tenancyId = await getTenancyId();
properties = { ...properties, tenancyId };
await writeEnvJson(properties);

const regions = await getRegions();
const regionName = await setVariableFromEnvOrPrompt(
  "OCI_REGION",
  "OCI Region name",
  async () => printRegionNames(regions)
);
properties = { ...properties, regionName };
await writeEnvJson(properties);

const compartmentName = await setVariableFromEnvOrPrompt(
  "RBR_COMPARTMENT_NAME",
  "Compartment Name (root)"
);

const compartmentId = await searchCompartmentIdByName(
  compartmentName || "root"
);
properties = { ...properties, compartmentId };
await writeEnvJson(properties);

const desiredNumberCPUs = await setVariableFromEnvOrPrompt(
  "RBR_NUMBER_CPU",
  "Data Science CPU number"
);

properties = { ...properties, desiredNumberCPUs: desiredNumberCPUs || 1 };
await writeEnvJson(properties);
