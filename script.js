// Event Handling: Button click
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("changeTextBtn").textContent = "You clicked me! 🎉";
  document.getElementById("changeTextBtn").style.backgroundColor = "green";
});

// Hover effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightgreen";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightcoral";
});

// Keypress detection
document.getElementById("keypressInput").addEventListener("keyup", (e) => {
  document.getElementById("keypressResult").textContent = `You typed: ${e.key}`;
});

// Secret double-click
document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("🎉 Secret unlocked! You've discovered the double-click event!");
});

// Tabs
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const tabId = tab.dataset.tab;
    contents.forEach(content => {
      content.style.display = "none";
    });
    document.getElementById(tabId).style.display = "block";
  });
});

// Form Validation
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener("input", () => {
  const emailFeedback = document.getElementById("emailFeedback");
  const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(emailInput.value)) {
    emailFeedback.textContent = "Invalid email format!";
  } else {
    emailFeedback.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  const passwordFeedback = document.getElementById("passwordFeedback");
  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
  } else {
    passwordFeedback.textContent = "";
  }
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const message = document.getElementById("formMessage");

  if (email && password.length >= 8) {
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
  } else {
    message.textContent = "❌ Please fix the errors before submitting.";
    message.style.color = "red";
  }
});
