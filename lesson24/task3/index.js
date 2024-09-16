'use strict';

const getDiff = (startDate, endDate) =>{
  let diffInMilliseconds = Math.abs(endDate.getTime() - startDate.getTime()); 

  const millisecondsInSecond = 1000;
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;

  const days = Math.floor(diffInMilliseconds / (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay));
  diffInMilliseconds -= days * millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay;

  const hours = Math.floor(diffInMilliseconds / (millisecondsInSecond * secondsInMinute * minutesInHour));
  diffInMilliseconds -= hours * millisecondsInSecond * secondsInMinute * minutesInHour;

  const minutes = Math.floor(diffInMilliseconds / (millisecondsInSecond * secondsInMinute));
  diffInMilliseconds -= minutes * millisecondsInSecond * secondsInMinute;

  const seconds = Math.floor(diffInMilliseconds / millisecondsInSecond);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const startDate = new Date('2023-01-01T12:00:00');
const endDate = new Date('2023-10-01T18:30:30');

console.log(getDiff(startDate, endDate));
