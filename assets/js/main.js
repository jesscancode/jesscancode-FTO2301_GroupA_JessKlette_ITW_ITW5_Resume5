// NAVIGATION // creates a click event listener for an HTML element with the class name "hamburger". When the "hamburger" element is clicked, the code inside the function will execute. The code inside the function finds an HTML element with the class name "nav-bar" and toggles its class between "nav-bar" and "nav-bar active", and logs "hello" to the console.

const hamburger = document.querySelector(".hamburger");      // finds the first HTML element in the document with a class name of "hamburger" and assigns it to a constant variable named hamburger.

hamburger.onclick = function() {                             //  sets a click event listener on the hamburger element. When the element is clicked, the function inside the curly braces will execute.
        const navBar = document.querySelector(".nav-bar");   //  finds the first HTML element in the document with a class name of "nav-bar" and assigns it to a constant variable named navBar.
        navBar.classList.toggle("active");                   // toggles the class "active" on the navBar element. If the element already has the class "active", it will be removed. If it does not have the class "active", it will be added.
        console.log("hello")
}

// HERO HOVER || creates an event listener for the mouse movement over each link inside an HTML element with the tag name "nav". When the mouse moves over a link, an image associated with that link will move with the mouse cursor.

const hero = document.getElementById("hero");               // finds the HTML element with an id of "hero" and assigns it to a constant variable named hero.

for(const link of nav.getElementsByTagName("a")) {          // This for loop iterates over each HTML element with a tag name of "a" inside an HTML element with a tag name of "nav". For each link, the code inside the curly braces will execute.
  link.onmousemove = e => {                                 // sets an event listener for the "mousemove" event on the current link. When the mouse moves over the link, the function inside the curly braces will execute. The function takes an event object as a parameter, which is assigned to the variable e.

    const rect = link.getBoundingClientRect(),              // assigns two variables: rect is assigned the result of the getBoundingClientRect() method called on the current link, which returns an object with information about the size and position of the link relative to the viewport. img is assigned the first img element found inside the current link.
          img = link.querySelector("img");
    
    img.style.left = `${e.clientX - rect.left}px`;          // sets the CSS left property of the image to the difference between the clientX property of the event object (which represents the horizontal coordinate of the mouse cursor) and the left property of the rect object (which represents the horizontal coordinate of the link relative to the viewport), expressed in pixels. This causes the image to move horizontally with the mouse cursor.
    img.style.top = `${e.clientY - rect.top}px`;            //sets the CSS top property of the image to the difference between the clientY property of the event object (which represents the vertical coordinate of the mouse cursor) and the top property of the rect object (which represents the vertical coordinate of the link relative to the viewport), expressed in pixels. This causes the image to move vertically with the mouse cursor.
  }
}

// TYPING SOUND AND MOVEMENT OVER LOGO HOVER

// const logo = document.querySelectorAll(".jesscancode-logo")[0]
// const audio = new Audio("./assets/sounds/typing.mp3");

// logo.addEventListener("mouseover", function(){
//     audio.play();
// })

// logo.addEventListener("mouseover", function(){
//   audio.pause();
// })

const logo = document.querySelectorAll(".jesscancode-logo")[0]
var audio = new Audio("./assets/sounds/typing.mp3");

logo.addEventListener("mouseover", function(){
    audio.play();
})

logo.addEventListener("mouseout", function(){
    audio.pause();
})

