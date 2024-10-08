const formatter = new Intl.DateTimeFormat("en", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "UTC",
});

const getTime = (date) => formatter.format(date);

console.log(getTime(new Date()));
