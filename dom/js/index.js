'use strict';

//accessing
let h1 = document.querySelector('h1');
console.log(h1);

let subtitle = document.querySelector('header p');
console.log(subtitle);

//change content
h1.textContent = "I have been changed!";
subtitle.innerHTML = subtitle.textContent + "<em>Professor Ross!</em>";

//change attributes
let img = document.querySelector('img');
//img.src = "img/husky.jpg";

let links = document.querySelectorAll('a');
console.log(links);
links.forEach(function(link){
    link.target = "_blank";
});

//change style
let important = document.querySelector('.important');
important.classList.add('font-italic');
important.style.fontWeight = "bold";

let newLi = document.createElement('li');
newLi.innerHTML = '<a href="http://ischool.uw.edu/">iSchool <em>again!</em></a>';

let linkList = document.querySelector('ul');
let firstLi = document.querySelector('ul li');
linkList.insertBefore(newLi, firstLi);

function renderCookie() {
    let jar = document.querySelector('#cookie-jar');
    let cookie = document.createElement('img');
    cookie.src = "img/cookie.png";
    cookie.alt = "a cookie";

    jar.appendChild(cookie);
}

function renderCookieList(numberOfCookies) {
    let jar = document.querySelector('#cookie-jar');
    jar.innerHTML = ''; //empty the jar
    for(let i=0; i<numberOfCookies; i++){
        renderCookie(); //recreate the cookies
    }        
}


//interactivity
let state = {
    currentDog: "img/puppy.jpg",
    timesClicked: 0
}

let button1 = document.querySelector('#button1');
button1.addEventListener('click', function(event) {
    //whenever button is clicked, this function is run
    state.timesClicked += 1; //update state
    console.log(state.timesClicked);

    renderCookieList(state.timesClicked);
    console.log(event);
});

let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
    state.timesClicked += 4; //update state    
    renderCookieList(state.timesClicked);
})

img.addEventListener('click', function() {
    //check current state
    if(state.currentDog === "img/puppy.jpg"){
        //modify the state
        state.currentDog = "img/husky.jpg";
    } else {
        state.currentDog = "img/puppy.jpg";
    }

    //make display reflect the state
    img.src = state.currentDog;
})

window.addEventListener('scroll', function(event) {
    console.log(event);
})
