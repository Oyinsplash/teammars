// Large screen options
const option = document.querySelector("option");
const footerLarge = document.querySelector("footer-large-first");


    
   
    // if (e.target.parentElement.classList.contains("option-title right")) {
    //     console.log("you get am!!!")
    // }
 

// small screen options
const people = document.querySelector(".people");
const options = document.querySelector(".footer-mobile-options");
const plusBtn = document.querySelector(".plus-btn");

const footerTitle = () => {
    console.log("skfkkgjtj!!!!!");
}

options.addEventListener("click",  (e) => {
    console.log(e.target);
    if (e.target.classList.contains("plus-btn")) {
        console.log(e.target.nextElementSibling);
        if (e.target.parentElement.nextElementSibling.classList.contains("hide")) {
            e.target.parentElement.nextElementSibling.classList.remove("hide");
            e.target.innerHTML = "-";
        }else {
            e.target.parentElement.nextElementSibling.classList.add("hide");
            e.target.innerHTML = "+";
        }
    } 
});

footerLarge.addEventListener("click", footerTitle);
