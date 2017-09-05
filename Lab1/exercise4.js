
String.prototype.filter = function(words){
    var myStr = this;
    for(let word in words){
        myStr.replace(word, "*****");
    }
    return myStr; 
}

console.log("this house is nice".filter(["nice", "house"]));

