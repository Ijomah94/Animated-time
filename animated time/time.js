const mode = document.querySelector(".mode");
const body = document.querySelector("body");
const modeText = body.querySelector(".mode-text");
const Btn = document.querySelector(".btn");
const List = document.querySelector("li");
const Link = document.querySelector(".link");

Btn.addEventListener("click", () =>{
 body.classList.toggle("dark");
 


 if(body.classList.contains("dark")){
  Btn.innerText = " Light Mode"
}else{
  Btn.innerText = "Dark Mode"
}
});