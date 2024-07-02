document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    let lastClickTime = 0;
    const placeElement = document.getElementById('place');
    const fatherElement = document.getElementById('father');
    const videoContainer = document.getElementById('video-container');
    const videoContainerfather = document.getElementById('video-container-father');
    const closeBtn = document.getElementById('close-btn');
    const closeBtn = document.getElementById('close-btnf');

    placeElement.addEventListener('click', () => {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < 1000) {
            clickCount++;
            if (clickCount === 5) {
                videoContainer.style.display = 'flex';
                createConfetti();
            }
        } else {
            clickCount = 1; // Start counting again if more than 20 seconds since last click
        }
        lastClickTime = currentTime;
    });

        fatherElement.addEventListener('click', () => {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < 1000) {
            clickCount++;
            if (clickCount === 5) {
                videoContainerfather.style.display = 'flex';
                createConfetti();
            }
        } else {
            clickCount = 1; // Start counting again if more than 20 seconds since last click
        }
        lastClickTime = currentTime;
    });

    closeBtn.addEventListener('click', () => {
        videoContainer.style.display = 'none';
        removeConfetti();
        clickCount = 0; // Reset click count on close
    });

    closeBtnf.addEventListener('click', () => {
        videoContainerfather.style.display = 'none';
        removeConfetti();
        clickCount = 0; // Reset click count on close
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

    function removeConfetti() {
        const confettis = document.querySelectorAll('.confetti');
        confettis.forEach(confetti => confetti.remove());
    }
});
