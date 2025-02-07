// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers){return drivers.slice(0,2)});

const returnLastTwoDrivers = (function(drivers){return drivers.slice(-2)});

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
  return function(num){
    return num * int;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn){
  return fn(drivers);
}
