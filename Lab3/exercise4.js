
const fs = require('fs');
const zlib = require('zlib');


// const gzib = zlib.createGzip();

const guzib = zlib.createGunzip();

var readable = fs.createReadStream(__dirname + '/files/destination.txt.gz');
var unCompressed = fs.createWriteStream(__dirname + '/filesUnzip/destination.txt');


readable.pipe(guzib).pipe(unCompressed);