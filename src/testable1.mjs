const millisPerDay = 24 * 60 * 60 * 1000;
// Code did not have any parameters. Results were depending on the date that code was ran.
// Having date as a parameter makes the code testable.
export function daysUntilChristmas(year, month, day) {
  const now = new Date(year, month - 1, day);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const christmasDay = new Date(now.getFullYear(), 12 - 1, 25);
  if (today.getTime() > christmasDay.getTime()) {
    christmasDay.setFullYear(new Date().getFullYear() + 1);
  }
  const diffMillis = christmasDay.getTime() - today.getTime();
  return Math.floor(diffMillis / millisPerDay);
}
