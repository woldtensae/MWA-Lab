var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    // fs.readFile('bigFile.png', (err, data)=>{
    //     if(err) throw err;
    //     res.end(data);
        
    // });
    fs.createReadStream('bigFile.png').pipe(res);
    
}).listen(8000, (err, ok) => console.log("server started at 8000"));
