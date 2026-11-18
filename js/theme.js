
/* =====================================
   DARK / LIGHT THEME TOGGLE
===================================== */

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {
    const icon = themeBtn.querySelector("i");

    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    // Toggle theme
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        const isLight = document.body.classList.contains("light-mode");

        localStorage.setItem("theme", isLight ? "light" : "dark");

        icon.classList.toggle("fa-moon", !isLight);
        icon.classList.toggle("fa-sun", isLight);
    });
}
