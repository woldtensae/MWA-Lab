function Person(name){
    this.name = name;
}

Person.prototype.teach = function(subject){
    return this.name + " is now teaching " + subject; 
}

var TeacherA = new Person("Aman");
var TeacherB = new Person("Amaha");

console.log(TeacherA.teach("Engilish"));
console.log(TeacherB.teach("Amharic"));
