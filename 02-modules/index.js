const math = require("./myownmodule"); // user-created module
const request = require('request'); // third-party module

console.log(math.myaddfunction(1, 5));

request('http://www.carlocayos.com', function (error, response, body) {

  if (!error && response.statusCode === 200) {
    console.log(body);
  }
});