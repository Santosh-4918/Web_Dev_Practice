// DON'T remove the below import
import "./styles.css";

document.getElementById("subscribe-form").addEventListener("submit", function(event) {
  var emailInput = document.getElementById("email");
  var errorMessage = document.getElementById("error-message");
  var successMessage = document.getElementById("success-message");

  if (!isValidEmail(emailInput.value)) {
    errorMessage.innerText = "Please enter a valid email address.";
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
    event.preventDefault();
  } else {
    errorMessage.style.display = "none";
    successMessage.style.display = "block";
  }
});

function isValidEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
