/* =====================================
   LOADER
===================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});

/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* =====================================
   REVEAL ANIMATION
===================================== */

const reveals=document.querySelectorAll("section");

function reveal(){

    const windowHeight=window.innerHeight;

    reveals.forEach(sec=>{

        const top=sec.getBoundingClientRect().top;

        if(top<windowHeight-120){

            sec.classList.add("fade-in");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/* =====================================
   SCROLL TO TOP BUTTON
===================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#38bdf8";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* =====================================
   TYPING EFFECT
===================================== */

const professions=[

"Computer Science Engineer",

"Full Stack Developer",

"Software Developer",

"Web Developer",

"AI Enthusiast"

];

const title=document.querySelector(".hero-content h2");

let wordIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){

    if(!title) return;

    const current=professions[wordIndex];

    if(!deleting){

        title.textContent=current.substring(0,charIndex++);

        if(charIndex>current.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        title.textContent=current.substring(0,charIndex--);

        if(charIndex===0){

            deleting=false;

            wordIndex=(wordIndex+1)%professions.length;

        }

    }

    setTimeout(typeEffect,deleting?50:120);

}

typeEffect();

/* =====================================
   CONTACT FORM VALIDATION
===================================== */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=form.querySelectorAll("input,textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

input.style.border="2px solid red";

valid=false;

}else{

input.style.border="2px solid #38bdf8";

}

});

if(valid){

alert("Message Sent Successfully!");

form.reset();

}

});

}

/* =====================================
   STICKY HEADER
===================================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(15,23,42,.95)";

header.style.boxShadow="0 10px 25px rgba(0,0,0,.3)";

}else{

header.style.background="rgba(15,23,42,.75)";

header.style.boxShadow="none";

}

});

/* =====================================
   PROJECT CARD HOVER
===================================== */

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log("%cWelcome to BK Portfolio 🚀",
"color:#38bdf8;font-size:20px;font-weight:bold;");
/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-toggle");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

});

});