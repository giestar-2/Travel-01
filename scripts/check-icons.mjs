/*
 * Dev utility: makes sure every `data-lucide="..."` name used in the project can be
 * resolved by the registry in lib/icons.ts (lucide 1.x dropped the brand icons, so
 * this catches a typo or an icon that needs to be added to lib/brand-icons.ts).
 *
 * Run with: node scripts/check-icons.mjs
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

import * as lucide from "lucide";

const toCamelCase = (string) => {
  let out = "";
  let upperNext = false;
  for (const ch of string) {
    if (ch === "-" || ch === "_" || ch <= " ") {
      upperNext = out.length > 0;
      continue;
    }
    out += out.length === 0 ? ch.toLowerCase() : upperNext ? ch.toUpperCase() : ch;
    upperNext = false;
  }
  return out;
};
const toPascalCase = (name) => {
  const camel = toCamelCase(name);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
};

const source = readFileSync(new URL("../lib/icons.ts", import.meta.url), "utf8");
const registered = new Set(
  [...source.matchAll(/^\s{2}([A-Za-z0-9]+)\s*[,:]/gm)].map((match) => match[1])
);

const walk = (dir) => {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) return walk(path);
    return /\.tsx?$/.test(path) ? [path] : [];
  });
};

const files = walk(new URL("../app", import.meta.url).pathname.replace(/^\//, "")).concat(
  walk(new URL("../components", import.meta.url).pathname.replace(/^\//, ""))
);

const used = new Map();
for (const file of files) {
  const content = readFileSync(file, "utf8");
  for (const match of content.matchAll(/data-lucide=(?:"([^"]+)"|\{([^}]+)\})/g)) {
    const literal = match[1];
    // skip prose in comments such as data-lucide="..."
    if (literal !== undefined && !/^[a-z0-9-]+$/.test(literal)) continue;
    const key = literal ?? "<dynamic>";
    used.set(key, (used.get(key) ?? new Set()).add(file));
  }
}

let failed = false;
for (const [name, where] of used) {
  if (name === "<dynamic>") {
    // dynamic names (e.g. the feature/contact lists) are checked through their source data
    continue;
  }
  const component = toPascalCase(name);
  const inLucide = component in lucide;
  const inRegistry = registered.has(component);
  if (!inRegistry) {
    failed = true;
    console.log(`MISSING in lib/icons.ts: ${name} (${component}) used in ${[...where].join(", ")}`);
  } else if (!inLucide && !["Instagram", "Twitter", "Facebook", "Youtube"].includes(component)) {
    failed = true;
    console.log(`NOT PROVIDED BY lucide: ${name} (${component})`);
  }
}

// dynamic values passed to data-lucide={...}
for (const [file, names] of [
  ["components/SharedSections.tsx", ["shield-check", "compass", "wallet", "headphones", "calendar-check", "globe-2"]],
  ["app/contact/page.tsx", ["instagram", "twitter", "facebook", "youtube"]],
  ["app/destination-detail/page.tsx", ["sunset", "wine", "waves", "camera"]],
]) {
  for (const name of names) {
    if (!registered.has(toPascalCase(name))) {
      failed = true;
      console.log(`MISSING in lib/icons.ts: ${name} (${toPascalCase(name)}) used dynamically in ${file}`);
    }
  }
}

console.log(
  failed
    ? "Icon check FAILED"
    : `Icon check OK - ${used.size} distinct data-lucide names, ${registered.size} registered icons`
);
process.exit(failed ? 1 : 0);
