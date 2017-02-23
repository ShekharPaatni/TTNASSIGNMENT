(function(){

var obj1={name:"shekhar",
      address:"Race couse",
          contact:9873395305};
var obj2={};
for( var k in obj1){
obj2[k]=obj1[k];}
console.log(obj2);
}());
