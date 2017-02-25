$(document).ready(function(){
$("#table td").each(function(){
var temp=$(this).text();
if(temp>10){
$(this).css("background-color","red");
}
});
});
