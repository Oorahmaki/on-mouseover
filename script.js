const eye = document.querySelectorAll(".eye");
const eyelidL = document.getElementById("eyelidL");
const eyelidR = document.getElementById("eyelidR");

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
