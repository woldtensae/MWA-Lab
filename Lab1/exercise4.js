
String.prototype.filter = function(words){
    var myStr = this.toString();
    for(let word of words){
       myStr = myStr.replace(word, "*****");
    }
    return myStr; 
}

console.log("this house is nice".filter(["nice", "house"]));

