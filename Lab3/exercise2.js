var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./bigFile', (err, data)=>{
        if(err) throw err;
        res.end(data);
        res.close();
    });
}).listen(8000, (err, ok) => console.log("server started at 8000"));
