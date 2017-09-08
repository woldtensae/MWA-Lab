
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(req, res){
    let myUrlObject = url.parse(req.toString(),true);
    let queryObject = myUrlObject.query;
    res.write(queryObject.query);
    res.end();

}).listen(4000, (err, success) => {console.log("listening at 4000")})

