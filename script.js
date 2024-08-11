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
    "The longer I'm with you the more I love you",
    "I’m always here for you, no matter how busy you get. Just remember, you’ve got this!",
    "Even when things get overwhelming, know that I’m cheering you on every step of the way.",
    "You’re doing an amazing job, and I’m proud of you. I’m here to support you through it all.",
    "No matter how hectic things get, I’m just a call away if you need a break or a smile.",
    "You’re handling everything so well. I’m here for you, and we’ll get through this together.",
    "Hi, hindi ko alam if binubuksan mo ulit to but gusto ko lang sabihin na",
    "Sobrang grateful ko na nakilala kita and naniniwala ako na it's God's will na makilala ka",
    "Nasubukan ko na umalis ng comfort zone ko dahil sayo masaya ako na nagawa ko yun kasama ka",
    "Mag travel kung saan saan kahit hindi natin alam papunta Gino-google maps lang natin",
    "I wish na makapag travel pa tayo together sa mga malalayong lugar ganon",
    "Yung tipong maliligaw na tayo, but alam ko na kahit maligaw man tayo magiging masaya lang",
    "Alam mo ba na ang daya mo, minsan pag nag tatampo mag smile ka lang sakin nawawala tampo ko hmp",
    "To be honest I miss our late-night talks when we were so sleepy that we'd fall asleep on the call",
    "Tapos magigising nalang tayo hindi pa napapatay yung call",
    "But alam ko naman na busy na ngayon hindi na tulad ng dati",
    "Lagi mo pong tandaan na andito lang ako palagi i can be yung rest po",
    "I hope I can be the rest you're looking for",
    "You’re the person I want to share all my dreams with, and I’m so lucky to have you by my side.",
    "I want to be the one who’s there for you, through thick and thin, the one who makes your days a little brighter.",
    "Kung nababsa mo man to Jynne gusto sabihin na",
    "mahal na mahal kita, I wish na hindi tayo mapagod sa isa't isa",
    "na kahit pagod na pagod na tayo mag sta-stay pa rin tayo kasi pahinga natin ang isa't isa",
    "Sana hindi ka pa rin mawalan ng gana kausap ako, natatakot na ako",
    "natatakot ako na baka may magawa ako na tapos mawalan ka ng gana",
    "kaya lagi ako nag pe-pray kay God na sana i guide nya ako palagi sa mga actions ko",
    "I look forward to all the dreams we’ve yet to chase together, the places we’ll explore, and the memories we’ll create.",
    "Everyday I'm only thinking about you"
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
