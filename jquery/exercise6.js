$(document).ready(function(){

var justfun=$("#second").text();
$("#second").empty().append($("#first").text());
$("#first").empty().append(justfun);

});
