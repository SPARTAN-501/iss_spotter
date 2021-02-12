// index.js

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

/*
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

let myIP = "";
let myCoords = {};
let flyOver = [];

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  myIP = ip;
  console.log(myIP);
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP(myIP, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  const coords = { latitude: data.latitude, longitude: data.longitude };
  myCoords = coords;
  console.log('It worked! Returned coordinates: ' + coords);
});

fetchISSFlyOverTimes({ latitude: 9, longitude: 12 }, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  const flyOverTimes = data.response;
  flyOver = flyOverTimes;
  console.log('It worked! Returned responses: ' + flyOver);
});
*/