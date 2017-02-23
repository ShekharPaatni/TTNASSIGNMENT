$(document).ready((function(){
setInterval(function(){var today=new Date();
var date=today.getDate();
var month=today.getMonth()+1;
var year=today.getFullYear();
var hour=today.getHours();
var mins=today.getMinutes();
var sec=today.getSeconds();

if(mins<10){
  mins='0'+mins;
}
if(sec<10){
  sec='0'+sec;
}

if(date<10){
  date='0'+date;
}
if(month<10){
  month='0'+month;
}

var dat=" "
dat=date+"/"+month+"/"+year;
$("#wat").html("<br>"+dat+"<br><br>"+hour+" : "+mins+" : "+sec)},0);

}()));
