const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;

  togglePassword.src =
    type === "password" ? "/images/eye open.png" : "/images/eye close.png";
});


document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector("form");
  const usernameInput = document.querySelector("input[name='username']");
  const passwordInput = document.querySelector("input[name='password']");

  // Create error message box
  let errorBox = document.createElement("div");
  errorBox.style.color = "red";
  errorBox.style.fontSize = "17px";
  errorBox.style.marginTop = "12px";
  errorBox.style.textAlign = "center";
  errorBox.style.fontFamily="arial"
  form.appendChild(errorBox);

  // Form submit event
  form.addEventListener("submit", (event) => {
    errorBox.innerHTML = ""; // Clear old messages

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Front-end validation
    if (username === "" || password === "") {
      event.preventDefault();
      errorBox.innerHTML = "⚠️ Please fill all fields.";
      return;
    }


    
  });


});

  


