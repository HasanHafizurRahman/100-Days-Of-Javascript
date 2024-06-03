// find the longest word 
// if the input string is empty or contrains only whitespace, the function should return an false.
// the function should ignore leading and trailing whitespace when determining the longest word

const longestWord = (str)=> {
  if(str.trim().length === 0) {
    return false;
  };

  strArr = str.split(" ");
  strArr = strArr.sort();
  console.log(strArr);
}

console.log(
  longestWord("Hello world I am practicing javascript" )
);