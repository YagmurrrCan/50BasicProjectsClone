
const sounds = ["Gibi - Seni Yerim", "Birds", "Ne yapacaksın gladyatör olup?", "Rain", "Wave"];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound

    //add sound
    btn.addEventListener("click", () => {

        stopSound();

        document.getElementById(sound).play();
    })

    document.getElementById("buttons").appendChild(btn);
})

function stopSound() {
      sounds.forEach( (sound) => {
          const song = document.getElementById(sound)
          song.pause();
          song.currentTime = 0;
      })
}