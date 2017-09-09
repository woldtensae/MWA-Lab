
const http = require('http');
const os = require('os');
const path = require('path');
const Rx  = require('@reactivex/rxjs');

var systemCore = os.cpus();

http.createServer(function(req, res){
   //using observable 
  Rx.Observable.fromPromise(checkSystem()).subscribe((data) => console.log(data));
  //using promise
        /*checkSystem().then((data) => {
        console.log(data);
        }).catch((err) => console.log(err));
    */
       console.log("Checking your system....");
    res.end();
}).listen(5555, (err, suc) => console.log("connected"));


function checkSystem () {
 return new Promise(function(resolve, reject){
        setTimeout(function(){
            if((os.totalmem())/(1024*1024*1024) < 6)
                resolve("This app at least needs 2GB of RAM");
            else if(systemCore.length > 2 && (os.totalmem())/(1024*1024*1024) > 6)
                resolve("system is checked sucessfully");
            else
                reject("process is not supported");
        }, 5000);
    });
} 





