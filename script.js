 id="q8k2jv"
/* ==========================================================
   FRIENDSHIP DAY 2026
   PART 3A
   LOADER • REVEAL • QUOTES • MUSIC
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});

/* =========================
   ELEMENTS
========================= */

const startBtn = document.getElementById("startBtn");
const replayBtn = document.getElementById("replayBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const quote = document.getElementById("quote");

/* =========================
   SCROLL TO GREETING
========================= */

if (startBtn) {

    startBtn.addEventListener("click", () => {

        document
            .getElementById("greeting")
            .scrollIntoView({

                behavior: "smooth"

            });

        if (typeof confetti === "function") {

            confetti({

                particleCount: 180,
                spread: 90,
                origin: {

                    y: 0.6

                }

            });

        }

    });

}

/* =========================
   MUSIC
========================= */

let playing = false;

if (musicBtn && bgMusic) {

    musicBtn.addEventListener("click", () => {

        if (!playing) {

            bgMusic.play();

            musicBtn.textContent = "⏸️";

            playing = true;

        } else {

            bgMusic.pause();

            musicBtn.textContent = "🎵";

            playing = false;

        }

    });

}

/* =========================
   FRIENDSHIP QUOTES
========================= */

const quotes = [

"True friendship turns ordinary moments into unforgettable memories.",

"A real friend adds happiness to every chapter of life.",

"Friendship grows stronger through kindness and trust.",

"The best memories begin with a simple hello.",

"Good friends make every journey more meaningful.",

"Friendship is a treasure that never loses its value.",

"Life becomes brighter when shared with wonderful people.",

"Small moments create the biggest memories."

];

let quoteIndex = 0;

function changeQuote() {

    if (!quote) return;

    quote.style.opacity = "0";

    setTimeout(() => {

        quote.textContent = quotes[quoteIndex];

        quote.style.opacity = "1";

        quoteIndex++;

        if (quoteIndex >= quotes.length) {

            quoteIndex = 0;

        }

    }, 300);

}

setInterval(changeQuote, 4000);

/* =========================
   SCROLL REVEAL
========================= */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

hiddenElements.forEach((el) => {

    observer.observe(el);

});

/* =========================
   REPLAY BUTTON
========================= */

if (replayBtn) {

    replayBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   FRIENDSHIP DAY 2026
   PART 3B
   CURSOR • PARTICLES • SPARKLES • CELEBRATION
========================================================== */

/* =========================
   CURSOR GLOW
========================= */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if (!cursorGlow) return;

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});

/* =========================
   PARTICLES
========================= */

const particleContainer = document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("span");

        particle.style.position = "absolute";
        particle.style.width = Math.random() * 5 + 2 + "px";
        particle.style.height = particle.style.width;

        particle.style.borderRadius = "50%";

        particle.style.background = "rgba(255,255,255,.7)";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.animation =
            `floatParticle ${6 + Math.random() * 8}s linear infinite`;

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particleContainer.appendChild(particle);

    }

}

/* =========================
   FLOAT PARTICLES STYLE
========================= */

const particleStyle = document.createElement("style");

particleStyle.innerHTML = `

@keyframes floatParticle{

0%{

transform:translateY(0px);

opacity:0;

}

20%{

opacity:.8;

}

50%{

transform:translateY(-80px);

}

100%{

transform:translateY(-160px);

opacity:0;

}

}

`;

document.head.appendChild(particleStyle);

/* =========================
   RANDOM CONFETTI
========================= */

setInterval(() => {

    if (typeof confetti !== "function") return;

    confetti({

        particleCount: 8,

        spread: 60,

        startVelocity: 18,

        origin: {

            x: Math.random(),

            y: Math.random() * 0.5

        }

    });

}, 12000);

/* =========================
   BUTTON RIPPLE
========================= */

document.querySelectorAll("button").forEach((button) => {

    button.addEventListener("click", () => {

        button.animate([

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(.94)"

            },

            {

                transform: "scale(1.05)"

            },

            {

                transform: "scale(1)"

            }

        ], {

            duration: 300

        });

    });

});

/* =========================
   FINAL CELEBRATION
========================= */

const finalSection = document.querySelector(".final-section");

if (finalSection) {

    const finalObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                if (typeof confetti === "function") {

                    confetti({

                        particleCount: 250,

                        spread: 120,

                        origin: {

                            y: 0.6

                        }

                    });

                }

            }

        });

    }, {

        threshold: 0.5

    });

    finalObserver.observe(finalSection);

}

/* =========================
   START BUTTON GLOW
========================= */

setInterval(() => {

    if (!startBtn) return;

    startBtn.animate([

        {

            boxShadow:

            "0 0 20px rgba(108,99,255,.3)"

        },

        {

            boxShadow:

            "0 0 45px rgba(0,212,255,.8)"

        },

        {

            boxShadow:

            "0 0 20px rgba(108,99,255,.3)"

        }

    ], {

        duration: 2200

    });

}, 2400);

console.log("✨ Friendship Day 2026");
console.log("Made with 🤍 by ABHAY");
