function LongestWord(sen) { 
  sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');

  senArray = sen.split(' ');

  let longestWord = '';
  
  for (let i = 0; i < senArray.length; i++){
    let testWord = senArray[i];
    
    if (testWord.length > longestWord.length){
      longestWord = testWord
    }
  }

  // code goes here  
  return longestWord; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
