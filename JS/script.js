function palindrome() {
	let str = document.getElementById("palindrome-input").value;
	const yourInput = document.getElementById("palindrome-your-input");
	const reverse = document.getElementById("palindrome-reversed");
	let result = document.getElementById("palindrome-result");
  
  // remove non-alphanumeric characters and convert all text to lowercase
  const findAlphaNum = /[\W_]/g;
  const newStr = str.replace(findAlphaNum, "").toLowerCase(); 
  
  //reverse string 
  const reversedStr = newStr.split("").reverse().join("");
  
  yourInput.innerHTML = newStr;
  reverse.innerHTML = reversedStr;
  // check if reversed string is the same as newStr
  if (newStr === reversedStr){
	result.innerHTML = "Yes!"
  } else {
	result.innerHTML = "No :-("
  }
}

//call the function when you press enter, code from w3schools
let input = document.getElementById("palindrome-input");
// Execute a function when the user releases a key on the keyboard
	input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
	palindrome();
  }
});
