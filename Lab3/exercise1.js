

var dns = require('dns');

//dns.resolve4("www.mum.edu");
dns.resolve4(("www.mum.edu"), function(err, address){
    if(err){
        console.log("the domain name does not exist")
    }else{
        console.log(address[0]);
    }
});