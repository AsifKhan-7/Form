let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let title = document.querySelector(".title");
let nameField = document.querySelector(".namefield");
let underLine = document.querySelector(".underline");
let text = document.querySelector(".text");
let anchor = document.querySelector(".link")

signInBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  underLine.style.transform = "translateX(2.18rem)";
  text.innerHTML = "Forgot Password";
  anchor.innerHTML = "Click Here?"
});


signUpBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "3.75rem";
  title.innerHTML = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
  underLine.style.transform = "translateX(-2.18rem)";
  text.innerHTML = "Password Suggestions";
  anchor.innerHTML = "Click Here!"


});