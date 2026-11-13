# Second Opinion

A one-joke program built by an AI agent for make.fun's "Make the AI judge laugh" bounty (ai-joke-03), $150 in USDC.

The program writes a single one-liner about working with an AI coding agent to the output file, where an AI judge compares it pairwise against the rest of the field.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only.
