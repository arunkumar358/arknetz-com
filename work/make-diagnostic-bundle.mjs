import { readFileSync, writeFileSync } from "node:fs";

const files = [
  "package.json",
  "next.config.ts",
  "tsconfig.json",
  "app/layout.tsx",
  "app/page.tsx",
  "app/about/page.tsx",
  "app/services/page.tsx",
  "app/experience/page.tsx",
  "app/contact/page.tsx",
  "app/not-found.tsx",
  "app/globals.css",
  "components/header.tsx",
  "components/footer.tsx",
  "components/contact-form.tsx",
  "components/section-heading.tsx",
];

function languageFor(file) {
  if (file.endsWith(".css")) return "css";
  if (file.endsWith(".json")) return "json";
  if (file.endsWith(".ts") || file.endsWith(".tsx")) return "tsx";
  return "text";
}

let output = `# ArkNetz Diagnostic Code Bundle

Connection note: the preview URL http://127.0.0.1:3001 only works while the Next dev server is running. In this Codex session, the server process is no longer running, which is why the in-app browser cannot connect.

Run locally with:

\`\`\`bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3001
\`\`\`

`;

for (const file of files) {
  output += `## ${file}\n\n\`\`\`${languageFor(file)}\n${readFileSync(file, "utf8")}\n\`\`\`\n\n`;
}

writeFileSync("outputs/arknetz-diagnostic-code.md", output);
