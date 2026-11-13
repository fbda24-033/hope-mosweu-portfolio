
// =====================================
// HOPE MOSWEU - PORTFOLIO JAVASCRIPT
// =====================================


// 1. MOBILE NAVIGATION MENU

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}



// 2. TYPING EFFECT ON HOMEPAGE

const typingText = document.querySelector(".typing-text");

if (typingText) {

    const phrases = [
        "Business Intelligence Student",
        "Aspiring Data Analyst",
        "Machine Learning Enthusiast",
        "Data Visualisation Learner"
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentPhrase = phrases[phraseIndex];

        if (deleting) {

            characterIndex--;

        } else {

            characterIndex++;

        }

        typingText.textContent =
            currentPhrase.substring(0, characterIndex);


        let speed = deleting ? 45 : 90;


        // Pause after completing a phrase

        if (!deleting && characterIndex === currentPhrase.length) {

            deleting = true;

            speed = 1400;

        }

        // Move to the next phrase

        else if (deleting && characterIndex === 0) {

            deleting = false;

            phraseIndex = (phraseIndex + 1) % phrases.length;

            speed = 400;

        }

        setTimeout(typeEffect, speed);

    }

    typeEffect();

}



// 3. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".project-card, .project-detail, .skill-card, .service-card, .timeline-item"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.12

    });


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

}



// 4. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}



// 5. CONTACT FORM - PREPARE EMAIL

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Stop the browser from submitting the form normally

        event.preventDefault();


        // Get the information entered by the visitor

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();


        // Email address that will receive the message

        const recipient = "hopemosweu6@gmail.com";


        // Prepare the email content

        const emailSubject = encodeURIComponent(subject);

        const emailBody = encodeURIComponent(

            "Hello Hope,\n\n" +

            message + "\n\n" +

            "Kind regards,\n" +

            name + "\n" +

            "Sender's email: " + email

        );


        // Create the email link

        const mailtoLink =
            `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;


        // Update the message displayed below the button

        const formStatus = document.getElementById("formStatus");

        if (formStatus) {

            formStatus.textContent =
                "Your email application is opening with your message prepared.";

        }


        // Open the visitor's email application

        window.location.href = mailtoLink;

    });

}
