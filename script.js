// Define the path to your music file
const musicFilePath = 'About you.mp3';  // Replace with the path to your music file

// Create an audio element
const audio = new Audio(musicFilePath);

// Set audio properties
audio.loop = true;  // Loop the audio

// Handle errors
audio.onerror = function() {
    console.error('Error loading audio file. Please check the file path and format.');
};

// Check if audio is playing
audio.oncanplaythrough = function() {
    console.log('Audio is ready to play.');
};

// Append the audio element to the body (it won't be visible)
document.body.appendChild(audio);

// Function to create hearts
const pinkShades = [
    '#FFB6C1', '#FFC0CB', '#FF69B4', '#FFDAB9', '#FF1493', '#FF00FF',
    '#FA8072', '#FFDAB9', '#FF7F50', '#D8BFD8', '#FF69B4', '#E75480',
    '#FFA07A', '#FF00FF', '#DDA0DD', '#DA70D6', '#FFC0CB', '#FF6347',
    '#FFB6C1', '#FFCCE5', '#DA70D6', '#F08080', '#E6E6FA', '#FFA07A',
    '#FF6666', '#DB7093', '#FF82AB', '#FF1493', '#FFB6C1', '#FF00FF'
];

function createHeart() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('loader');

    // Randomize the size and position
    const size = Math.random() * 1.5 + 0.5 + 'em';
    heart.style.width = size;
    heart.style.height = `calc(${size} * 5 / 7)`; // Maintain the aspect ratio
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 4 + 's';
    heart.style.opacity = Math.random() * 0.7 + 0.3;

    // Randomize the color from the pinkShades array
    const color = pinkShades[Math.floor(Math.random() * pinkShades.length)];
    heart.style.setProperty('--heart-color', color);

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Function to change the text
const messages = [
    "The longer I'm with you  the more I love you",
    "I’m always here for you, no matter how busy you get. Just remember, you’ve got this!",
    "Even when things get overwhelming, know that I’m cheering you on every step of the way.",
    "You’re doing an amazing job, and I’m proud of you. I’m here to support you through it all.",
    "No matter how hectic things get, I’m just a call away if you need a break or a smile.",
    "You’re handling everything so well. I’m here for you, and we’ll get through this together."
];

let currentIndex = 0;

function changeText() {
    const textElement = document.querySelector('.text');
    textElement.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}

// Button click event to reveal content
document.getElementById('reveal-button').addEventListener('click', function() {
    document.getElementById('content').classList.remove('hidden');
    this.style.display = 'none'; // Hide the button
    audio.play(); // Start playing the music
    setInterval(createHeart, 100); // Start creating hearts

    // Change text every 8 seconds
    setInterval(changeText, 8000);
});
