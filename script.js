/* =========================================================
   YASMINE HATEM PORTFOLIO
   Interactive JavaScript
========================================================= */


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================
   PROGRESS BARS
========================= */

const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const bar = entry.target;

            const percentage =
                bar.getAttribute("data-progress");

            setTimeout(() => {
                bar.style.width = `${percentage}%`;
            }, 200);

            observer.unobserve(bar);

        });

    },
    {
        threshold: 0.4
    }
);

progressBars.forEach((bar) => {
    progressObserver.observe(bar);
});


/* =========================
   CIRCULAR SKILLS
========================= */

const circles = document.querySelectorAll(".circle");

const circleObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const circle = entry.target;

            const percentage =
                Number(circle.dataset.percent);

            let current = 0;

            const animation = setInterval(() => {

                current += 2;

                if (current >= percentage) {

                    current = percentage;

                    clearInterval(animation);

                }

                const degrees =
                    current * 3.6;

                circle.style.background =
                    `conic-gradient(
                        #635bff 0deg,
                        #00b8d9 ${degrees}deg,
                        #e9ecf5 ${degrees}deg,
                        #e9ecf5 360deg
                    )`;

            }, 18);

            observer.unobserve(circle);

        });

    },
    {
        threshold: 0.5
    }
);

circles.forEach((circle) => {
    circleObserver.observe(circle);
});


/* =========================
   NUMBER COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const counter = entry.target;

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const duration = 1200;

            const increment =
                target / (duration / 20);

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.textContent = target;

                    return;

                }

                counter.textContent =
                    Math.floor(current);

                requestAnimationFrame(updateCounter);

            };

            updateCounter();

            observer.unobserve(counter);

        });

    },
    {
        threshold: 0.7
    }
);

counters.forEach((counter) => {
    counterObserver.observe(counter);
});


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 10px 35px rgba(44, 62, 100, 0.06)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================
   MOUSE PARALLAX
========================= */

const heroCard =
    document.querySelector(".hero-card");

if (heroCard && window.innerWidth > 900) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (window.innerWidth / 2 - event.clientX) / 80;

        const y =
            (window.innerHeight / 2 - event.clientY) / 80;

        heroCard.style.transform =
            `rotate(2deg) translate(${x}px, ${y}px)`;

    });

}


/* =========================
   PROJECT CARD TILT
========================= */

const projectCards =
    document.querySelectorAll(".project-card");

if (window.innerWidth > 900) {

    projectCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `translateY(-8px)
                 perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

}


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((anchor) => {

    anchor.addEventListener("click", (event) => {

        const targetId =
            anchor.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    updateActiveNav();

});