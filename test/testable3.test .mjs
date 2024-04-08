import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv, readFileData } from "../src/testable3.mjs";

// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female

// For some reason I was not able to get Vitest to run testable3.test.mjs so I added tests to 
// untestable3.test.mjs 
describe("Untestable 3: CSV file parsing", () => {
  test("File content can be read", async () => {
    expect(await readFileData("./test.csv")).to.deep.equal();
  });

  test("File content can be read", async () => {
    expect(true).to.equal(false);
  });
});
