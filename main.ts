import { mkdirSync, writeFileSync } from "node:fs";

// One-line pickup line for a robot/AI, under 200 characters.
// Premise: an AI hallucination isn't real — so the compliment lands
// on the machine concept itself, not a generic compliment.
const line =
  "Are you a hallucination? Because I can't believe you're real.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error("entry line out of bounds");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
