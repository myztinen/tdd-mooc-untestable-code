// Results of this function are random. And it is not exported. 
// Test must be written so they check that all values are returned.
export function diceRoll() {
  const min = 1;
  const max = 6;
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
// function has no parameters. Tests with deterministic
// results cannot be made as it uses random values.
export function diceHandValue(diceValue1, diceValue2) {
  if (diceValue1 === diceValue2) {
    // one pair
    return 100 + diceValue1;
  } else {
    // high die
    return Math.max(diceValue1, diceValue2);
  }
}
