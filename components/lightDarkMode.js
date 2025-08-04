const toggleBtn = document.getElementById("toggle-theme");

console.log(toggleBtn);

toggleBtn.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark-mode");

    const darkMode = document.documentElement.classList.contains("dark-mode");
    toggleBtn.textContent = darkMode ? "☀️" : "🌙";
})