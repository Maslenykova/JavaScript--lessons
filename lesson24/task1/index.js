const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);
  const weekDay = [ "Sun", "Mon", "Tu", "We", "Th", "Fr", "St"];
  return weekDay[new Date(dayInFuture).getDay()];
};
const result = dayOfWeek(new Date(2025, 2, 6), 20);
console.log(`'${result}'`);
const result1 = dayOfWeek(new Date(2025, 2, 6), 0);
console.log(result1);
console.log(dayOfWeek(new Date(2025, 2, 6), 20));
