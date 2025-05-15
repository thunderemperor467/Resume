function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  function showGreeting() {
    alert("Welcome to Aditya Chauhan's Resume!");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();
  });
  