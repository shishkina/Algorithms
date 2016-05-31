function convertTime(time){
	var newTime = time.split(":");
	if(newTime[newTime.length-1] === "pm") {
		newTime[0] = (parseInt(newTime[0]) + 12).toString();
		console.log(newTime);
	}
	newTime.pop();
	var nTime = newTime.join(", ").replace(/, /g, ":");
	return nTime;
}

convertTime("02:00:am");

/*
Submitted by
Caroline: https://github.com/captainm
Samantha: https://github.com/samantids
Katherine: https://github.com/shishkina
*/
