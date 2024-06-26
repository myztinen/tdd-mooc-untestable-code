import { readFile } from "node:fs/promises";
import { parse } from "csv-parse/sync";
// Testing the parsing of CSV data is together with
// reading the file itself. File reading cand be
// separated to its own function in order to test the
// parsing more efficiently.
export async function parsePeopleCsv(filePath) {
  const csvData = await readFile(filePath, { encoding: "utf8" });
  const records = parse(csvData, {
    skip_empty_lines: true,
    trim: true,
  });
  return records.map(([firstName, lastName, age, gender]) => {
    const person = {
      firstName,
      lastName,
      gender: gender.charAt(0).toLowerCase(),
    };
    if (age !== "") {
      person.age = parseInt(age);
    }
    return person;
  });
}
