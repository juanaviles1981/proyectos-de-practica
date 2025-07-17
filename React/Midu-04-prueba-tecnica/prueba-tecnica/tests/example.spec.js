// @ts-check
import { test, expect } from "@playwright/test";
import { start } from "repl";

const LOCALHOST_URL = "http://localhost:5173";
const CAT_FREFIX_IMAGE_URL = "https://catass.com";

test("app shows random fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph");

  const image = await page.getByRole("img");

  const textContent = await text.textContent();

  const imageSrc = await image.getAttribute("src");
  
  console
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_FREFIX_IMAGE_URL)).toBeTruthy;
});
