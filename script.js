const messages = [
    "You make my world brighter! 🌟",
    "Your smile is my happiness! 😊",
    "You are my dream come true! 💕",
    "You are the reason my heart beats! ❤",
    "Forever grateful for you! 😘",
    "Waiting For That Day jab tu mere samne hogi! 🥹",
    "Or haan tsnsn lene ki need ni tu bss pdhai krte reh sb ho jayega! ❤"
];

function showMessage() {
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("changing-text").innerText = randomMessage;
}

/* Page Changing Effect */
function changePage() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = "nextpage.html"; // Change this to the actual next page
    }, 1000);
}

/* Floating Hearts Animation */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);
