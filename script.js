"use strict";


const SummaryComponents = document.querySelectorAll(".summary__list");
const mainNumbers = document.querySelectorAll(".summary__main-number");
const ImgsArray = [
    "./assets/images/icon-reaction.svg",
    "./assets/images/icon-memory.svg",
    "./assets/images/icon-verbal.svg",
    "./assets/images/icon-visual.svg",
];

const TitlesArray = [
    "Reaction","Memory","Verbal","Visual",
];

const NumbersArray = [
    "80","92","61","72",
];

//########################################################

SummaryComponents.forEach((Component,i)=>{
    Component.firstElementChild.src = ImgsArray[i];
    Component.firstElementChild.nextElementSibling.textContent = TitlesArray[i];
    mainNumbers[i].textContent = NumbersArray[i];
});