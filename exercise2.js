var arr=[1,2,3,4,5];
var i=0;

id=setInterval(pick,3000);

function pick()
{
    document.getElementById('demo').innerHTML=arr[i];
    i++;
    if(i==5) clearInterval(id);
  
}

    
