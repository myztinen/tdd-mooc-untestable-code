import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue, diceRoll} from "../src/testable2.mjs";

describe("Untestable 2: a dice game", () => {
  test("From two different value, bigger one is returned", () => {
    expect(diceHandValue(4,5)).to.be.equal(5);
  });

  test("From pair, 100 added with dice values is returned", () => {
    expect(diceHandValue(5,5)).to.be.equal(105);
  });

  test("Hundred dice rolls must have all dice values", () => {
    let diceValues = [1,2,3,4,5,6]; 
    let hunredDiceRolls = new Set();
    for(let i = 0; i<100; i++ ) {
      hunredDiceRolls.add(diceRoll());
    }
    expect(hunredDiceRolls).to.have.all.keys(diceValues);
  });
});
