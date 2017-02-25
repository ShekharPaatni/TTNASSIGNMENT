function remove(){
var str=document.getElementById("tex").value;
var temp=str[0];
console.log(str.length);
for(var i=1;i<str.length;i++){
	var count=0;
	for(var j=0;j<temp.length;j++){
				
		if(temp[j]==str[i])
		{ 
			count++;
		}			
	}	
	if(count==0)
	{
	temp+=str[i];
	}	

}
console.log(temp);


}
