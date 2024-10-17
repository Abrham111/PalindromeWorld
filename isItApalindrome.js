const resultShow = document.getElementById("result");
const btnCheck = document.getElementById("check-btn");

function isPalindrome (){
  const textInput = document.getElementById("text-input").value;
  const cleanedInput = textInput.replace(/[^a-zA-Z0-9]/g,"");
  let reversedWord = cleanedInput.split('').reverse().join('');
  if (textInput.trim() === "") {
    alert("Please input a value");
    return;
  }
  if (cleanedInput.length === 1){
resultShow.innerText = `${textInput} is a palindrome`;
  }
else if (cleanedInput.toLowerCase() === reversedWord.toLowerCase()){
  resultShow.innerText = `${textInput} is a palindrome`;
}
else {
  resultShow.innerText = `${textInput} is not a palindrome`;
}
}

btnCheck.addEventListener("click",isPalindrome);