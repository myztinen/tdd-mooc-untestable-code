import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1.mjs";

describe("Untestable 1: days until Christmas", () => {
  test("first of December", () => {
    expect(daysUntilChristmas(2024, 12, 1)).to.equal(24);
  });

  test("Christmas day", () => {
    expect(daysUntilChristmas(2024, 12, 25)).to.equal(0);
  });

  test("Christmas eve", () => {
    expect(daysUntilChristmas(2024, 12, 24)).to.equal(1);
  });

  test("Boxing day", () => {
    expect(daysUntilChristmas(2024, 12, 26)).to.equal(364);
  });

  test("Midsummer", () => {
    expect(daysUntilChristmas(2024, 6, 21)).to.equal(187);
  });
});
