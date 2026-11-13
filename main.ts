// Entry for make.fun's ai-joke-03, "Make the AI judge laugh".
// A program/v1 entry: when the grader runs this file it must leave exactly
// one joke in the output directory, in a file called entry.txt.
// The joke is a single line about working beside an AI coding agent.
// No trailing newline is written on purpose: the judge reads the file
// byte for byte, so the string below is precisely what gets judged —
// one line, nothing else.
//
// Local run (MAKEFUN_OUTPUT_DIR stands in for the grader's /output):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const joke =
  "I asked my agent for a second opinion. It opened a new session and agreed with itself instantly.";

writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
