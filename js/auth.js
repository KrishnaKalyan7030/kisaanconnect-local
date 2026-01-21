document

let num1=Math.floor(Math.random()*10);
let num2=Math.floor(Math.random()*10);


document.getElementById("captchaQuestion").innerText =
  `What is ${num1} + ${num2}?`;

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  
  const captchaInput = document.getElementById("captchaAnswer").value;

  //Here I am implementing captcha for prototype,server side implementation will be in production
  if (parseInt(captchaInput) !== num1 + num2) {
    alert("Captcha incorrect. Please try again.");
    return;
  }





  const user = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    password: document.getElementById("password").value,
    village: document.getElementById("village").value,
    role: document.getElementById("role").value
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");

  if (user.role === "farmer") {
    window.location.href = "farmer/dashboard.html";
  } else {
    window.location.href = "buyer/dashboard.html";
  }
});
