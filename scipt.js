// Greeting Function Based on Time of Day
function showGreeting() {
  const greetingElement = document.getElementById("greeting");
  if (!greetingElement) return;

  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  greetingElement.textContent = greeting + " Welcome to Faithnoela's portfolio!";
}

// Toggle Project Details
function toggleDetails(id) {
  const section = document.getElementById(id);
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

// Form Validation (Simple Email Format Check)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      const email = document.getElementById("email").value;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regex.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }
});