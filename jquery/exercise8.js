$(document).ready(function(){
$(":button").on("click",function(){
$("body").append("<br><br>");
$("body").append($(":button").first().clone(true,true));

});

});
