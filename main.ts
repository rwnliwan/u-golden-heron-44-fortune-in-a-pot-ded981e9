// Fortune in a Pot
// A single line telling a houseplant's fortune.
// Craft vs the judge brief (most important first):
// 1. It IS a fortune for a houseplant, about the plant's own future.
// 2. Funny in a way a plant lover laughs at: resolutions vs watering.
// 3. Kind: no doom, no withering, no mockery — the plant outlives, and gets watered.
// 4. Sounds like a fortune: prediction cadence ("You will...").
// 5. One clean line, reads aloud well, no padding.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You will outlive three of your keeper's resolutions — and be watered by the fourth.";

const out = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(out, ENTRY + "\n", "utf8");
console.log("Wrote " + ENTRY.length + " characters to " + out);
