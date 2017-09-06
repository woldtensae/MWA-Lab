function slow(callback){
    for(let i=0;i<=5e8;i++){}
    if(Math.random()> 0.5){
        return callback("Error", null);
    }
    callback(null, {id:12345})
}

function exec(fn){
    
    return {
        done: function(f1){
            f1(data);
        },
        fail: function(f2){
            f2(err)
        }
    }
}
exec(slow).done(function(data){console.log(data)})
          .fail(function(err){console.log("Error" + err)});