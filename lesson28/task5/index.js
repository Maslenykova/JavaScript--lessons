const shmoment = (initialDate) => {
  let currentDate = new Date(initialDate);

  const timeUnits = {
    years: 365 * 24 * 60 * 60 * 1000,
    months: 30 * 24 * 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000,
    hours: 60 * 60 * 1000,
    minutes: 60 * 1000,
    seconds: 1000,
    milliseconds: 1,
  };

  return {
    add(unit, value) {
      if (unit === "years") {
        currentDate.setFullYear(currentDate.getFullYear() + value);
      } else if (unit === "months") {
        currentDate.setMonth(currentDate.getMonth() + value);
      } else {
        currentDate = new Date(currentDate.getTime() + value * timeUnits[unit]);
      }
      return this;
    },

    subtract(unit, value) {
      if (unit === "years") {
        currentDate.setFullYear(currentDate.getFullYear() - value);
      } else if (unit === "months") {
        currentDate.setMonth(currentDate.getMonth() - value);
      } else {
        currentDate = new Date(currentDate.getTime() - value * timeUnits[unit]);
      }
      return this;
    },

    result() {
      return currentDate;
    },
  };
};

console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result());
