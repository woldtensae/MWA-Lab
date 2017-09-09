
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

http.createServer(function(req, res){
    
    let myUrlObject = url.parse(req.url, true);
    
    let filePath = myUrlObject.query.url;
    console.log("'" + filePath + "'");
    fs.createReadStream(path.join(__dirname, filePath)).pipe(res);
    //res.write(queryObject.query.toString);
    //res.end();

}).listen(4000, (err, success) => {console.log("listening at 4000")})

