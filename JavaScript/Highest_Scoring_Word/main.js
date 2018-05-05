/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the 
alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in 
the original string.

All letters will be lowercase and all inputs will be valid.*/


const high=x=>{
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let wordScores = [];
  let highScore = 0;
  let stringOut = "";
  
  x = x.toLowerCase();
  let xArray = x.split(" ");

  for (let wordLoop in xArray)
  {
    wordScores[wordLoop]=0;
    for (let lettersLoop in xArray[wordLoop])
    {
      console.log (xArray[wordLoop][lettersLoop]);
      if(alphabet.indexOf(xArray[wordLoop][lettersLoop])!==-1)
        wordScores[wordLoop]+= alphabet.indexOf(xArray[wordLoop][lettersLoop])+1;
    }
    console.log (wordScores);
  }
  
  for (let loop in xArray)
    if (wordScores[loop]>highScore)
    {
      highScore = wordScores[loop];
      stringOut = xArray[loop];
    }
    
  return stringOut;
}

high('what time are we climbing up the volcano')