//A S D F G H J K L
const keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const sounds=["./sounds/clap.wav","./sounds/hihat.wav","./sounds/kick.wav","./sounds/openhat.wav",
              "./sounds/boom.wav","./sounds/ride.wav","./sounds/snare.wav","./sounds/tom.wav","./sounds/tink.wav"];
const HERE = "here";

const handleKeyEvent = (e) => {
    const keyPressed = e.keyCode;
    keys.forEach((i) => {
        if (keyPressed === i) {
            const idx = keys.indexOf(i);
            const set = document.getElementsByClassName("set")[idx];
            // console.log(set);
            set.classList.toggle(HERE);
            if (set.classList.contains(HERE)) {
                const ele = document.querySelector(".here");
                const music = new Audio(sounds[idx]);
                music.play();
                //console.log(ele);
                ele.style.boxShadow = "10px 10px 5px 5px coral";
                setTimeout(()=>{
                    set.style.boxShadow="none";
                },500);
                set.classList.remove(HERE);
              
            }
        }
    });
    //  console.log(keyPressed);
}
window.addEventListener("keydown", handleKeyEvent);