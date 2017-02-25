function startTime(){

var hour=00;
var mins=01;
var secs=00;
	
	var time=setInterval(function(){

	document.getElementById("digital").innerHTML=hour+" : "+mins+" : "+ secs;
	if(hour == 0 && mins == 0 && secs == 0){
	document.getElementById("msg").innerHTML="Successfully complete";
		clearInterval(time);
		//break;
	}
	if(secs==00){
		console.log("first if condition");
		secs=60;			
		mins--;		
		}
		secs--;
		if(secs==00 && mins!=00 && hour!=00){
		console.log("second if condition");
			mins--;
			secs=60;
				if(mins==00 && !hour==0){
					console.log("update hrs");
						mins=60;
						hour--;
					}
					
				}

	

	},500);


	
}
