let a = document.querySelector("#a")
let s = document.querySelector("#s")
let d = document.querySelector("#d")
let f = document.querySelector("#f")
let g = document.querySelector("#g")
let h = document.querySelector("#h")
let j = document.querySelector("#j")
let k = document.querySelector("#k")
let l = document.querySelector("#l")

//keyboard settings
let audio = document.querySelector("#audio")
document.addEventListener("keydown", function(event){

    if(event.key === "a") {
        audio.setAttribute("src", "sounds/boom.wav")
        audio.setAttribute("autoplay", 'enable')
        console.log(audio)
    }

    if(event.key === "s") {
        audio.setAttribute("src", "sounds/clap.wav")
        audio.setAttribute("autoplay", "enable")
        console.log(audio)
    }

    if(event.key === "d") {
        audio.setAttribute("src", "sounds/hihat.wav")
        audio.setAttribute("autoplay", "enable")
        console.log(audio)
    }

    if(event.key === "f") {
        audio.setAttribute("src", "sounds/kick.wav")
        audio.setAttribute("autoplay", "enable")
        console.log(audio)
    }

    if(event.key === "g") {
        audio.setAttribute("src", "sounds/openhat.wav")
        audio.setAttribute("autoplay", "enable")
        console.log(audio)
    }

    if(event.key === "h") {
        audio.setAttribute("src", "sounds/ride.wav")
        audio.setAttribute("autoplay", "enable")
        console.log(audio)
    }

    if(event.key === "j"){
        audio.setAttribute("src", "sounds/snare.wav")
        audio.setAttribute("autoplay", "enable")
        console.log(audio)
    }

    if(event.key === "k") {
        audio.setAttribute("src", "sounds/tink.wav")
        audio.setAttribute("autoplay", "enable")
        console.log(audio)
    }

    if(event.key === "l") {
        audio.setAttribute("src", "sounds/tom.wav")
        audio.setAttribute("autoplay", "enable")
        console.log(audio)
    }
})

a.addEventListener("click", boomA)
s.addEventListener("click", clapS)
d.addEventListener("click", hihatD)
f.addEventListener("click", kickF)
g.addEventListener("click", openhatG)
h.addEventListener("click", rideH)
j.addEventListener("click", snareJ)
k.addEventListener("click", tinkK)
l.addEventListener("click", tomL)

//Mouse settings
function boomA(){
    audio.setAttribute("src", "sounds/boom.wav")
    audio.setAttribute("autoplay", "enable")
    console.log(audio)
}

function clapS(){
    audio.setAttribute("src", "sounds/clap.wav")
    audio.setAttribute("autoplay", "enable")
    console.log(audio)
}

function hihatD(){
    audio.setAttribute("src", "sounds/hihat.wav")
    audio.setAttribute("autoplay", "enable")
    console.log(audio)
}

function kickF(){
    audio.setAttribute("src", "sounds/kick.wav")
    audio.setAttribute("autoplay", "enable")
    console.log(audio)
}

function openhatG(){
    audio.setAttribute("src", "sounds/openhat.wav")
    audio.setAttribute("autoplay", "enable")
    console.log(audio)
}

function rideH(){
    audio.setAttribute("src", "sounds/ride.wav")
    audio.setAttribute("autoplay", "enable")
    console.log(audio)
}

function snareJ(){
    audio.setAttribute("src", "sounds/snare.wav")
    audio.setAttribute("autoplay", "enable")
    console.log(audio)
}

function tinkK(){
    audio.setAttribute("src", "sounds/tink.wav")
    audio.setAttribute("autoplay", "enable")
    console.log(audio)
}

function tomL(){
    audio.setAttribute("src", "sounds/tom.wav")
    audio.setAttribute("autoplay", "enable")
    console.log(audio)
}