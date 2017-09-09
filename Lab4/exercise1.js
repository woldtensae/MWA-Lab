
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const { fork } = require('child_process');

http.createServer(function(req, res){
    
    let myUrlObject = url.parse(req.url, true);
    
    let filePath = myUrlObject.query.url;
    /*if(filePath){
        fs.createReadStream(path.join(__dirname,filePath)).pipe(res);        
    }*/
    const childProcess = fork('streamOperation.js');
    childProcess.send('start');
    childProcess.on('message', data => {
        res.end(data);
    });

}).listen(4000, (err, success) => {console.log("listening at 4000")})

