function validate(){

try{
var name=document.getElementById("first").value;

if(!(/^[a-zA-Z]*$/).test(name)) throw "First Name is not correct"
var last=document.getElementById("second").value;
if(!(/^[a-zA-z]*$/).test(last)) throw "last Name is not correct"
var num=document.getElementById("contact").value;
if(!(/^[0-9]+$/).test(num)&& num.length==10) throw "Number is not valid"

alert("The data Successfully submitted");
	}
catch(err)
{
alert(err);

} 
}


