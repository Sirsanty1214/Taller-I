
const imagenesPersonajes = document.querySelectorAll('.imagen-personaje');
const audio = document.getElementById('audio');

imagenesPersonajes.forEach(img => {
    img.addEventListener('mouseover', function() {
        const audioSrc = img.getAttribute('data-audio');
        audio.src = audioSrc;
        audio.play();
    });

    img.addEventListener('mouseout', function() {
        audio.pause();
        audio.currentTime = 0; 
    });
});
