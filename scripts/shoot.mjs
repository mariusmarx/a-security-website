import { chromium } from "playwright";
import { mkdirSync } from "fs";

const BASE = process.env.BASE || "http://localhost:4321";
const OUT = ".qa";
mkdirSync(OUT, { recursive: true });

const pages = [
  { path: "/", name: "home" },
  { path: "/sicherheit", name: "sicherheit" },
  { path: "/reinigung", name: "reinigung" },
  { path: "/eventsupport", name: "eventsupport" },
  { path: "/impressum", name: "impressum" },
];

const viewports = [
  { id: "desktop", width: 1440, height: 900 },
  { id: "mobile", width: 390, height: 844 },
];

async function autoScroll(page) {
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const step = Math.round(window.innerHeight * 0.8);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await sleep(160);
    }
    window.scrollTo(0, document.body.scrollHeight);
    await sleep(400);
    window.scrollTo(0, 0);
    await sleep(400);
  });
}

const browser = await chromium.launch();
for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  for (const p of pages) {
    // mobile: skip a couple to keep it quick
    if (vp.id === "mobile" && ["impressum"].includes(p.name)) continue;
    await page.goto(`${BASE}${p.path}`, { waitUntil: "networkidle" });
    // capture hero (above the fold) before scrolling
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${OUT}/${p.name}-${vp.id}-hero.png` });
    await autoScroll(page);
    await page.waitForTimeout(300);
    await page.screenshot({
      path: `${OUT}/${p.name}-${vp.id}-full.png`,
      fullPage: true,
    });
    console.log(`shot ${p.name} @ ${vp.id}`);
  }
  await ctx.close();
}
await browser.close();
console.log("done");
