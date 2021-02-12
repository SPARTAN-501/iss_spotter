// index.js


const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

let myIP = "";
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  myIP = ip;
  console.log(myIP);
  console.log('It worked! Returned IP:' , ip);
});

let myCoords = {};
fetchCoordsByIP(myIP, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  const coords = { latitude: data.latitude, longitude: data.longitude };
  myCoords = coords;
  console.log('It worked! Returned coordinates: ' + coords);
});

let flyOver = [];
fetchISSFlyOverTimes({ latitude: 9, longitude: 12 }, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  const flyOverTimes = data.response;
  flyOver = flyOverTimes;
  console.log('It worked! Returned responses: ' + flyOver);
});

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

module.exports = { printPassTimes };