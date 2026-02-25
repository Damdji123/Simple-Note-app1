export function humbergu() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    // Toggle menu
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("show");
    });

    // Close menu when clicking outside
    document.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

    // Prevent closing when clicking menu itself
    navMenu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
}
humbergu();