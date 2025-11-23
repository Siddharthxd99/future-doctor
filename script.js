// Auto-play audio when page loads
window.addEventListener("load", () => {
    const audio = document.getElementById("greetAudio");
    audio.volume = 1.0;

    // Attempt to play automatically
    audio.play().catch(() => {
        console.log("Autoplay blocked by browser, still okay.");
    });
});

// Click "Open Letter" button → hide button & show letter
document.getElementById("openBtn").addEventListener("click", () => {
    const button = document.getElementById("openBtn");
    const letter = document.getElementById("letter");

    button.style.display = "none";   // hide button
    letter.classList.remove("hidden"); // show letter
});
