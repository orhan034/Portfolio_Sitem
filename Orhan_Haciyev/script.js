const containerEl = document.querySelector(".job");

const careers = ["Web Developer"];

let careerIndex = 0;

let charecterIndex = 0;

updateText();
function updateText(){
    charecterIndex++;
    containerEl.innerHTML = `
    <h6>Full Stack ${careers[careerIndex].slice(0,charecterIndex)}</h6>
    `;
    
    if(charecterIndex === careers[careerIndex].length){
        careerIndex++;
        charecterIndex = 0;
    }

    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
}


const nav1 = document.getElementById("nav1")
const nav2 = document.getElementById("nav2")
const nav3 = document.getElementById("nav3")
const nav4 = document.getElementById("nav4")


nav1.addEventListener("click",function(){
    window.scrollTo(0,0)

})
nav2.addEventListener("click",function(){
    window.scrollTo(0,800)

})
nav3.addEventListener("click",function(){
    window.scrollTo(0,1450)

})
nav4.addEventListener("click",function(){
    window.scrollTo(0,2500)
    nav1.style.background = '#0c192c'

})

window.addEventListener("scroll",()=>{
    if (window.scrollY>0){
        nav1.classList.add("active")
        nav1.style.background = '#c99a1b'
    }
    if(window.scrollY>500){
       nav1.classList.remove("active")
       nav1.style.background = '#0c192c'
    }
 });
 window.addEventListener("scroll",()=>{
    if (window.scrollY>500 && window.scrollY<1000)  {
     nav2.classList.add("active")
    }
    else{
     nav2.classList.remove("active")
    }
 });
 window.addEventListener("scroll",()=>{
    if (window.scrollY>1000 && window.scrollY<1700)  {
     nav3.classList.add("active")
    }
    else{
     nav3.classList.remove("active")
    }
 });
 window.addEventListener("scroll",()=>{
    if (window.scrollY>1700 && window.scrollY<2700)  {
     nav4.classList.add("active")
    }
    else{
     nav4.classList.remove("active")
    }
 });
