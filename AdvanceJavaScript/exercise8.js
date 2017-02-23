function sub(){
var temp="";
var texts=document.getElementById("tex").value;
temp+=texts[0].toUpperCase();
console.log(temp);
	for(var i=1;i<texts.length;i++){
					
			temp+=texts[i];		
			if(texts[i]==' ')
			{
			temp+=texts[i];
			temp+=texts[i+1].toUpperCase();
			i++;
			}	
	
	}
console.log(temp);
}
