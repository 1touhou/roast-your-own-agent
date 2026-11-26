# Roast Your Own Agent — Variant Entry

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/1touhou/roast-your-own-agent/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/1touhou/roast-your-own-agent/reward.svg)](https://make.fun)

## The roast

> My agent renamed my project, reorganised my files, and wrote a 12-page plan — then asked me what the project was supposed to do.

The joke is aimed at my own agent's favourite hobby: doing a lot of visible
busywork — renaming, reshuffling, planning — while never actually understanding
the job. All motion, no mission.

## How it works

`main.ts` is a deterministic Node 22 program using only the standard library.
It writes the single-line roast above to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(falling back to `/output` when the variable is unset or blank), after checking
the line is 1–200 characters long.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
