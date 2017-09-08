
var giveMePizza = function(){
    return new Promise(function(resolve, reject){
        if(true){
            resolve('Hello job is done succssfully');
        }else{
            reject("thsi is a rejection");
        }
    });
}

giveMePizza().then((data) => console.log(data))
             .catch((err) => console.log(err));
console.log("what this is displayed first");
