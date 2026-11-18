
/* =====================================
   LOADER
===================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }

});


/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll('nav a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function updateActiveNavigation() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);
updateActiveNavigation();


/* =====================================
   REVEAL ANIMATION
===================================== */

const reveals = document.querySelectorAll("section");

function reveal() {

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {
            section.classList.add("fade-in");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();


/* =====================================
   SCROLL TO TOP BUTTON
===================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
topBtn.setAttribute("aria-label", "Scroll to top");

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "#A855F7",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    display: "none",
    zIndex: "999"

});

window.addEventListener("scroll", () => {

    topBtn.style.display =
        window.scrollY > 500 ? "block" : "none";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================
   TYPING EFFECT
===================================== */

const professions = [

    "Computer Science Engineer",
    "Full Stack Developer",
    "Software Developer",
    "Web Developer",
    "AI Enthusiast"

];

const title = document.querySelector(".hero-content h2");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!title) return;

    const current = professions[wordIndex];

    if (!deleting) {

        title.textContent = current.substring(0, charIndex);
        charIndex++;

        if (charIndex > current.length) {

            deleting = true;
            setTimeout(typeEffect, 1500);
            return;

        }

    } else {

        title.textContent = current.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {

            charIndex = 0;
            deleting = false;
            wordIndex = (wordIndex + 1) % professions.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

if (title) {
    typeEffect();
}


/* =====================================
   CONTACT FORM SUBMISSION
   FORMSPREE INTEGRATION
===================================== */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = document.getElementById("contact-submit");
        const statusMessage = document.getElementById("form-status");

        if (!submitButton || !statusMessage) return;

        // Check form validity
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        submitButton.disabled = true;

        submitButton.innerHTML =
            'Sending... <i class="fas fa-spinner fa-spin"></i>';

        statusMessage.textContent = "Sending your message...";
        statusMessage.style.color = "#A855F7";

        try {

            const response = await fetch(contactForm.action, {

                method: "POST",

                body: new FormData(contactForm),

                headers: {
                    "Accept": "application/json"
                }

            });

            if (response.ok) {

                statusMessage.textContent =
                    "Thank you! Your message has been sent successfully.";

                statusMessage.style.color = "#22c55e";

                contactForm.reset();

            } else {

                const result = await response.json().catch(() => ({}));

                statusMessage.textContent =
                    result.errors
                        ? result.errors.map(error => error.message).join(", ")
                        : "Unable to send your message. Please try again.";

                statusMessage.style.color = "#ef4444";

            }

        } catch (error) {

            console.error("Contact form error:", error);

            statusMessage.textContent =
                "Network error. Please check your internet connection.";

            statusMessage.style.color = "#ef4444";

        } finally {

            submitButton.disabled = false;

            submitButton.innerHTML =
                'Send Message <i class="fas fa-paper-plane"></i>';

        }

    });

}


/* =====================================
   STICKY HEADER
===================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(15, 10, 30, 0.95)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";

    } else {

        header.style.background = "";
        header.style.boxShadow = "";

    }

});


/* =====================================
   PROJECT CARD HOVER
===================================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector("#navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");

        }

    });

    navbar.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}


/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log(
    "%cWelcome to BK Portfolio 🚀",
    "color:#A855F7;font-size:20px;font-weight:bold;"
);
