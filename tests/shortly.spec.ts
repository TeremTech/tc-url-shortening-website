import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await expect(page).toHaveTitle(/Shortly/);
});

test("more than just shorter links", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await expect(
    page.getByRole("heading", { name: "More than just shorter links" })
  ).toBeVisible();

  await expect(page.locator("input")).toHaveValue("");
});

test("shorten links", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.locator("input").fill("https://playwright.dev/python/docs/input");
  await page.getByRole("button", { name: "Shorten It!" }).click();

  await expect(
    page.getByTestId("shortlinks").locator("span.text-accent")
  ).toHaveCount(1);
});

test("copy link to clipboard", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.locator("input").fill("https://playwright.dev/python/docs/input");
  await page.getByRole("button", { name: "Shorten It!" }).click();

  await page
    .getByTestId("shortlinks")
    .getByRole("button", { name: "Copy" })
    .click();

  let clipboardText = await page.evaluate("navigator.clipboard.readText()");
  expect(clipboardText).toContain("https://cleanuri.com/wyDn5k");
});
