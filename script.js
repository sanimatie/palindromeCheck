function palindrome(str) {
  // remove non-alphanumeric characters and convert all text to lowercase
  const findAlphaNum = /[\W_]/g;
  const newStr = str.replace(findAlphaNum, "").toLowerCase(); 
  //reverse string 
  const reversedStr = newStr.split("").reverse().join("");
  // check if reversed string is the same as newStr
  if (newStr === reversedStr){
    console.log('palindrome');
    return true;
  } else {
    console.log(reversedStr);
    return false;
  }
}
