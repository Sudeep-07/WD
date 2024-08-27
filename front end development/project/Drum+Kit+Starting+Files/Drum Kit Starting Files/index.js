 // detecting button press
 
 var numberOfDrumButton = document.querySelectorAll(".drum").length;
 for (var i = 0; i<numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleDrum);
    function handleDrum(){
        var InnerHTML = this.innerHTML;
        makeSound(InnerHTML);
        buttonAnimator(InnerHTML);
 
        
    }
 }

 // Detecting keyboard press

 document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimator(event.key);
 });

 // detecting the sound for which key or click

 function makeSound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio('./sounds/crash.mp3');
            audio1.play();
            break;
            case "a":
                var audio2 = new Audio('./sounds/kick-bass.mp3');
                audio2.play();
                break;
                case "s":
                    var audio3 = new Audio('./sounds/snare.mp3');
                    audio3.play();
                    break;
                    case "d":
                        var audio4 = new Audio('./sounds/tom-1.mp3');
                        audio4.play();
                        break;
                        case "j":
                            var audio5 = new Audio('./sounds/tom-2.mp3');
                            audio5.play();
                            break;
                            case "k":
                                var audio6 = new Audio('./sounds/tom-3.mp3');
                                audio6.play();
                                break;
                                case "l":
                                    var audio7 = new Audio('./sounds/tom-4.mp3');
                                    audio7.play();
                                    break;

    
        default: console.log(buttonInnerHTML);
            break;
    }
 }

 function buttonAnimator(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
 }




// //  var audio = new Audio('./sounds/tom-1.mp3');
// //  audio.play();
// use to play sound
// this.style.color = "white"; to select the particular item