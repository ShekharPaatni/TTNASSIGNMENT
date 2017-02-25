(function(){
'use strict';
var si=0;
var  amount =0;
amount=prompt("Enter the amount");
var interestrate=0;
interestrate=prompt("Enter the rate of interest");
var no_of_year=0;
no_of_year=prompt("Enter the no. of year");
si=(amount*interestrate*no_of_year)/100;
document.write("The Simple Intereset is:"+si);
}());
