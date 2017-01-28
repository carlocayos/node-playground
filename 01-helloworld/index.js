"use strict";

console.log("Callback Test. Throws error if parameter is equal to 1");

var myFunction = function (inputParam, callback) {

  if (inputParam == 1) {
    setTimeout(function () {
      callback(new Error("Parameter is 1"));
    }, 1000);
  }
  else {
    setTimeout(function () {
      callback(null, "Parameter is " + inputParam)
    }, 1000);
  }

}


var handleResult = function (err, results) {
  if (err) {
    console.log("Error caught. Message: " + err.message);
  }
  else {
    console.log("No error: " + results);
  }
}


myFunction(1, handleResult);
myFunction(2, handleResult);
