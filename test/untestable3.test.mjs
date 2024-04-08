import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv, readFileData } from "../src/testable3.mjs";


// For some reason I was not able to get Vitest to run testable2.test.mjs so I added tests to 
// this file
const input = `
      Loid,Forger,,Male
      Anya,Forger,6,Female
      Yor,Forger,27,Female`;

describe("Untestable 3: CSV file parsing", () => {
  test("File content can be read", async () => {
    expect(await readFileData("./test/test.csv")).to.equal("hello world!");
  });

  test("File can be parsed", async () => {
    expect(parsePeopleCsv(input)).to.deep.equal([
      { firstName: "Loid", lastName: "Forger", gender: "m" },
      { firstName: "Anya", lastName: "Forger", age: 6, gender: "f" },
      { firstName: "Yor", lastName: "Forger", age: 27, gender: "f" }]);
  });

  const input2 = `
         Yor,Forger,27,Female`;

  test("Sinlle lines can be parsed", async () => {
    let result = parsePeopleCsv(input2);
    expect(result).to.deep.equal([
      { firstName: "Yor", lastName: "Forger", age: 27, gender: "f" }]);
    expect(result[0].firstName).to.equal("Yor");
    expect(result[0].lastName).to.equal("Forger");
    expect(result[0].age).to.equal(27);
    expect(result[0].gender).to.equal("f");

  });

  const input3 = `
  Loid,Forger,,Male
  
  Yor,Forger,27,Female`;

  test("Empty lines are ignored", async () => {
    expect(parsePeopleCsv(input3)).to.deep.equal([
      { firstName: "Loid", lastName: "Forger", gender: "m" },
      { firstName: "Yor", lastName: "Forger", age: 27, gender: "f" }]);
  });

  const input4 = `
  Loid,Forger,,Male`;

  test("Age is not mandatory", async () => {
    expect(parsePeopleCsv(input4)[0].age).to.equal(undefined);
  });
});
