let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");
let clapPic = document.getElementById("clapPic");
let drumSticks = document.getElementById("drumSticks");

document.addEventListener('keypress', (keyValue) => {
    if (keyValue.keyCode == 113) {
        boom.pause()
        boom.currentTime = 0
        boom.play();}
    else if (keyValue.keyCode == 119) {
        clapPic.style.visibility = "visible"
        setTimeout(() => {clapPic.style.visibility = "hidden"}, 200)
        clap.pause()
        clap.currentTime = 0
        clap.play();}
    else if (keyValue.keyCode == 101) {
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();}
    else if (keyValue.keyCode == 114) {
        kick.pause()
        kick.currentTime = 0
        kick.play();} 
    else if (keyValue.keyCode == 116) {
            openhat.pause()
            openhat.currentTime = 0
            openhat.play();}
    else if (keyValue.keyCode == 121) {
        ride.pause()
        ride.currentTime = 0
        ride.play();}
    else if (keyValue.keyCode == 117) {
        snare.pause()
        snare.currentTime = 0
        snare.play();}
    else if (keyValue.keyCode == 111) {
        drumSticks.style.visibility = "visible"
        setTimeout(() => {drumSticks.style.visibility = "hidden"}, 200)
        tink.pause()
        tink.currentTime = 0
        tink.play();}
    else if (keyValue.keyCode == 105) {
            tom.pause()
            tom.currentTime = 0
            tom.play();}
      })
    
let count = 0