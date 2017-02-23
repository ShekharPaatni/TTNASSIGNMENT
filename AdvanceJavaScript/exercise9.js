function check(){
var str=document.getElementById("texty").value;
var max=[];


for(var i=0;i<str.length;i++){

if(str[i] in max)
{
  max[str[i]]++;
}else{
  max[str[i]]=1;
}
}
var maximum=0;
var val=0;
for(var i in max){
    if(maximum<max[i]){
      maximum=max[i];
      val=i;
    }
  }
console.log(val);

}
