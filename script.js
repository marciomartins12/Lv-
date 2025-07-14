document.addEventListener('DOMContentLoaded', () => {
    // --- Music Player ---
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    // Replace 'your_song_url.mp3' with the actual URL to your audio file
    const audio = new Audio('./farol_das_estrelas.mp3'); 
    audio.loop = true; // Loop the song

    playButton.addEventListener('click', () => {
        audio.play().catch(e => console.error("Error playing audio:", e));
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
    });

    // --- Image Carousel ---
    const carouselImage = document.getElementById('carouselImage');
    const images = [
        'placeholder1.jpeg', // Replace with your actual image URLs
        'placeholder2.jpeg',
        'placeholder3.jpeg',
        'placeholder4.jpeg',
        'placeholder5.jpeg',
        'placeholder6.jpeg',
        'placeholder7.jpeg',
        'placeholder8.jpeg',
        'placeholder9.jpeg',
        // Add more image URLs here
    ];
    let currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        carouselImage.style.opacity = 0; // Fade out
        setTimeout(() => {
            carouselImage.src = images[currentImageIndex];
            carouselImage.style.opacity = 1; // Fade in
        }, 1000); // Match this with the transition duration in CSS
    }

    // Change image every 5 seconds (adjust as needed)
    setInterval(changeImage, 5000);

    // Initial image load
    carouselImage.src = images[currentImageIndex];


    // --- Love Timer ---
    // Start date: July 13, 2025, at 00:00:00
    const startDate = new Date('2025-07-17T00:00:00');
    const loveTimerDisplay = document.getElementById('loveTimer');

    function updateLoveTimer() {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30.44); // Average days in a month
        const years = Math.floor(days / 365.25); // Average days in a year (accounting for leap years)

        const remainingDays = days % 30.44; // Remaining days after months
        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;

        let timerText = '';
        if (years > 0) {
            timerText += `${years} ano${years !== 1 ? 's' : ''}, `;
        }
        if (months > 0) {
            timerText += `${Math.floor(months)} mês${Math.floor(months) !== 1 ? 'es' : ''}, `;
        }
        timerText += `${Math.floor(remainingDays)} dia${Math.floor(remainingDays) !== 1 ? 's' : ''}, `;
        timerText += `${remainingHours} hora${remainingHours !== 1 ? 's' : ''} e `;
        timerText += `${remainingSeconds} segundo${remainingSeconds !== 1 ? 's' : ''}`;

        loveTimerDisplay.textContent = timerText;
    }

    // Update timer every second
    setInterval(updateLoveTimer, 1000);

    // Initial timer update
    updateLoveTimer();
});