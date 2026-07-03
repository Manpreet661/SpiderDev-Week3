const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light");
    toggleBtn.textContent = "🌙 Dark Mode";
} else {
    toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    const isLight = body.classList.contains("light");

    toggleBtn.textContent = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";

    localStorage.setItem("theme", isLight ? "light" : "dark");
});