(function(){
var employee=[{name:"Shekhar",age:"24",salary:"8500",DOB:"25-06-1992"},
	      {name:"Bhupindra",age:"24",salary:"8000",DOB:"18-10-1992"},
	      {name:"Sunny",age:"23",salary:"7500",DOB:"13-07-1993"},
	      {name:"Sourabh",age:"23",salary:"6500",DOB:"12-06-1993"},
	      {name:"Raj",age:"23",salary:"5500",DOB:"25-02-1993"},
	      {name:"Vishal",age:"27",salary:"4000",DOB:"25-06-1990"},
	      {name:"Sunita",age:"26",salary:"800",DOB:"18-07-1991"},
              {name:"Lata",age:"22",salary:"7500",DOB:"18-07-1994"},
              {name:"mukesh",age:"23",salary:"500",DOB:"25-06-1992"}
];
var size=employee.length;
var count=1;
//Exercise 5.1
document.write("<b>Name, age, salary ,DOB</b>");
document.write("<br>");
document.write("<br>");
for(var i=0; i<size;i++)
{
document.write(count +" Name: "+employee[i].name+""+" Age: "+employee[i].age+ " Salary: "+employee[i].salary+" DOB"+ employee[i].DOB);
document.write("<br>");
count++;
}
document.write("<br>");
document.write("<br>");
var count=1;
//Exercise 5.2
document.write("<b>Filter all employees with salary greater than 5000</b><br><br>");
for(var i=0; i<size;i++)
{
if(employee[i].salary>5000)
{
document.write(count +" Name: "+employee[i].name+""+" Age: "+employee[i].age+ " Salary: "+employee[i].salary+" DOB"+ employee[i].DOB);
document.write("<br>");

count++;
}
}

//Exercise 5.3


Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    var val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}
console.log('myList.groupBy("age") = ', employee.groupBy('age'));


// Exercise 5.4
document.write("<br>");document.write("<br>");
document.write("<b>Fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.</b>");
document.write("<br>");document.write("<br>");
size=employee.length;
 count=1;
for(var i=0; i<size;i++)
{
if(employee[i].salary<1000 && employee[i].age>20){
employee[i].salary=employee[i].salary*5;
document.write(count +" Name: "+employee[i].name+""+" Age: "+employee[i].age+ " Salary: "+employee[i].salary+" DOB"+ employee[i].DOB);
document.write("<br>");
count++;
}
}
}());
