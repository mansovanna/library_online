// app.js
import './js/typingText.js';


const buttonShow = document.getElementById("password-btn");
const password = document.getElementById("password");
const svg1 = document.getElementById("svg-pass1");
const svg2 = document.getElementById("svg-pass2");

if (buttonShow && password && svg1 && svg2) {
    buttonShow.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text"; 
            svg1.style.display = "none"; 
            svg2.style.display = "flex"; 
            svg2.style.stroke = "red";
        } else {
            password.type = "password"; 
            svg1.style.display = "flex"; 
            svg2.style.display = "none"; 
            svg2.style.stroke = "red";
        }
    });
}
