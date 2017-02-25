function Person(){
  this.name = "aman";
}

function Employee(){
 this.id = 1;
}
Employee.prototype = new Person();
Employee.prototype.constructor=Employee;

function Developer(){
  this.field = "android";
}
Developer.prototype = new Employee();
Developer.prototype.constructor=Developer;

var dev = new Developer();
console.log(dev.name);
console.log(dev.id);
console.log(dev.field);

document.getElementById('demo').innerHTML="Developer's details :<br><br> Name : "+dev.name+"<br>Id : "+dev.id+"<br>Field : "+dev.field;

