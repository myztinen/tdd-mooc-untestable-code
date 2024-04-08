import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv, readFileData } from "../src/testable3.mjs";
dfdg
// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female

describe("Untestable 3: CSV file parsing", () => {
  test("File content can be read", async () => {
    expect(await readFileData("./test.csv")).to.deep.equal();
  });

  test("File content can be read", async () => {
    expect(true).to.equal(false);
  });
});
