const buttonTexts = document.querySelectorAll(".button-text");

buttonTexts.forEach((buttonText) => {
  const buttonTextArray = buttonText.textContent.split("");
  console.log(buttonTextArray)
  buttonText.textContent = "";
  buttonTextArray.forEach((buttonTextArrayElement) => {
    buttonText.innerHTML += `<span>${buttonTextArrayElement}</span>`;
  })
})