


// PROTECT DASHBOARDS
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (window.location.pathname.includes("farmer")) {
  if (!currentUser || currentUser.role !== "farmer") {
    window.location.href = "../login.html";
  }
}

if (window.location.pathname.includes("buyer")) {
  if (!currentUser || currentUser.role !== "buyer") {
    window.location.href = "../login.html";
  }
}

//captcha only for registration page
const registerForm = document.getElementById("registerForm");

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

const captchaQuestion = document.getElementById("captchaQuestion");
if (captchaQuestion) {
  captchaQuestion.innerText = `What is ${num1} + ${num2}?`;
}


//registration logic
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const captchaInput = document.getElementById("captchaAnswer").value;

    if (parseInt(captchaInput) !== num1 + num2) {
      alert("Captcha incorrect");
      return;
    }

    const user = {
      name: document.getElementById("name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      password: document.getElementById("password").value.trim(),
      village: document.getElementById("village").value.trim(),
      role: document.getElementById("role").value
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

  //it prevents duplicate login
    const existingUser = users.find(u => u.phone === user.phone);
    if (existingUser) {
      alert("User already exists with this phone number");
      return;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");

    localStorage.setItem("currentUser", JSON.stringify(user));

    if (user.role === "farmer") {
      window.location.href = "farmer/dashboard.html";
    } else {
      window.location.href = "buyer/dashboard.html";
    }
  });
}



//login logic
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      u => u.phone === phone && u.password === password
    );

    if (!user) {
      alert("Invalid phone number or password");
      return;
    }

    //correct key name
    localStorage.setItem("currentUser", JSON.stringify(user));

    if (user.role === "farmer") {
      window.location.href = "farmer/dashboard.html";
    } else {
      window.location.href = "buyer/dashboard.html";
    }
  });
}
