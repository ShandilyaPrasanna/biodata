document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const placeElement = document.getElementById('place');
    const videoContainer = document.getElementById('video-container');

    placeElement.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            videoContainer.style.display = 'flex';
            createConfetti();
        }
    });

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            document.body.appendChild(confetti);
        }
    }
});
