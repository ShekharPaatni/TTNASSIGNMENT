$(document).ready(function(){
$("#main").bind("click",function(){
$("#main").css("display","block");
$("#main").css("background-color","red");

});

$("li").click(function(e){
$("#main").removeAttr("style");
$("#main").off("click");
});

});
