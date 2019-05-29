const eye = document.querySelectorAll(".eye");
const eyelidL = document.getElementById("eyelidL");
const eyelidR = document.getElementById("eyelidR");
const mouth = document.querySelector(".mouth");
const speech = document.getElementById("talkbubble");

for (let i = 0; i < eye.length; i++){
    eye[i].addEventListener("mouseover", function(){
        eyelidL.style.visibility = "visible";
        eyelidR.style.visibility = "visible";
    })
    eye[i].addEventListener("mouseout", function(){
        eyelidL.style.visibility = "hidden";
        eyelidR.style.visibility = "hidden";
    })
}

mouth.addEventListener("mouseover", function(){
    const name = prompt("Hello, who are you?", "Type Name Here")
    speech.style.visibility = "visible";
    speech.innerHTML = "Hello " + name + ", it's nice to meet you!"
})

mouth.addEventListener("mouseout", function(){
    speech.style.visibility = "hidden";
})