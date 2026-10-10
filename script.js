const walkingAudio = document.querySelector("#walking-audio");

let stopWalkingTimer;

document.addEventListener("mousemove", () => {
    // Start the walking sound if it isn't already playing
    if (walkingAudio.paused) {
        walkingAudio.play();
    }

    // Reset the timer every time the mouse moves
    clearTimeout(stopWalkingTimer);

    // Stop the sound if the mouse stays still for 300 milliseconds
    stopWalkingTimer = setTimeout(() => {
        walkingAudio.pause();
        walkingAudio.currentTime = 0;
    }, 300);
});

const region_water = document.querySelector("#sound-region-water");
const audio_water = document.querySelector("#water-audio");

const region_leaves = document.querySelector("#sound-region-leaves");
const audio_leaves = document.querySelector("#leaves-audio");

const region_grass = document.querySelector("#sound-region-grass");
const audio_grass = document.querySelector("#grass-audio");

const region_music = document.querySelector("#sound-region-music");
const audio_music = document.querySelector("#music-audio");

const region_stairs = document.querySelector("#sound-region-stairs");
const audio_stairs = document.querySelector("#stairs-audio");

const region_talking = document.querySelector("#sound-region-talking");
const audio_talking = document.querySelector("#talking-audio");

region_water.addEventListener("mouseenter", () => {
    audio_water.currentTime = 0;
    audio_water.play();
});

region_water.addEventListener("mouseleave", () => {
    audio_water.pause();
    audio_water.currentTime = 0;
});

region_leaves.addEventListener("mouseenter", () => {
    audio_leaves.currentTime = 0;
    audio_leaves.play();
});

region_leaves.addEventListener("mouseleave", () => {
    audio_leaves.pause();
    audio_leaves.currentTime = 0;
});

region_grass.addEventListener("mouseenter", () => {
    audio_grass.currentTime = 0;
    audio_grass.play();
});

region_grass.addEventListener("mouseleave", () => {
    audio_grass.pause();
    audio_grass.currentTime = 0;
});

region_music.addEventListener("mouseenter", () => {
    audio_music.currentTime = 0;
    audio_music.play();
});

region_music.addEventListener("mouseleave", () => {
    audio_music.pause();
    audio_music.currentTime = 0;
});

region_stairs.addEventListener("mouseenter", () => {
    audio_stairs.currentTime = 0;
    audio_stairs.play();
});

region_stairs.addEventListener("mouseleave", () => {
    audio_stairs.pause();
    audio_stairs.currentTime = 0;
});

region_talking.addEventListener("mouseenter", () => {
    audio_talking.currentTime = 0;
    audio_talking.play();
});

region_talking.addEventListener("mouseleave", () => {
    audio_talking.pause();
    audio_talking.currentTime = 0;
});