$(document).ready(function(){

var highest=null;
var hi=0;

$(".just").each(function(){
var h=$(this).height();
if(h>hi)
{
hi=h;
highest=$(this);
}

});

highest.css("background-color","red");

});
