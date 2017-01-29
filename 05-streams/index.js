"use strict";

const request = require('request');
const fs = require('fs');
const zlib = require('zlib'); // this can be used.

// output the ReadableStream result to a WriteableStream (process.stdout)
request('http://www.carlocayos.com').pipe(process.stdout);

// output the ReadableStream result to a WriteableStream (fs)
request('http://www.carlocayos.com').pipe(fs.createWriteStream("result.html"));