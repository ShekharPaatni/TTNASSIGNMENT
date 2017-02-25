(function(){
'use strict';
var str=prompt("Enter tht string to check the string is pallidrome");
var splitstr=str.split("").reverse().join("");
str==splitstr ? document.write("It is Pallidrome"): document.write("It is not pallidrome");
}());
