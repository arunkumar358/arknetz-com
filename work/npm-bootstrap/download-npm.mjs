import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { pipeline } from "node:stream/promises";

const url = "https://registry.npmjs.org/npm/-/npm-11.4.2.tgz";
const output = new URL("./npm.tgz", import.meta.url);

await mkdir(new URL(".", output), { recursive: true });

const response = await fetch(url);
if (!response.ok || !response.body) {
  throw new Error(`Unable to download npm: ${response.status} ${response.statusText}`);
}

await pipeline(response.body, createWriteStream(output));
console.log(output.pathname);
