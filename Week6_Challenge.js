function charCount(myChar, str) {
	let strArr = str.split("");
	let charCount = 0;
	while (strArr.includes(myChar)){
		charCount++
		strArr.splice(strArr.indexOf(myChar), 1);
	}
	return charCount
}
