const eye = document.querySelectorAll(".eye");
const eyelid = document.querySelectorAll(".eyelid");

for (let i = 0; i < eye.length; i++){
    eye[i].addEventListener("mouseover", function(){
        eyelid.style.visibility = visible;
    })
}