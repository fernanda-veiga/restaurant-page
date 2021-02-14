import {generateNavBar} from "./nav-bar"
import {generateHomepage} from "./homepage"
import {deleteAllContent} from "./delete-all-content"
import {generateAboutUsPage} from "./about-us"
import {generateMenuPage} from "./menu"

const pageContent = document.querySelector("#content");

//Generate the navbar
let navBar = generateNavBar();
pageContent.appendChild(navBar);

//Generate first page
let homepageContent = generateHomepage();
pageContent.appendChild(homepageContent);

//Generate event listeners
let navLinks = document.querySelectorAll(".nav-links");

let homepageLink = navLinks[0];
let aboutUsLink = navLinks[1];
let menuLink = navLinks[2];

homepageLink.addEventListener("click", () => {
    deleteAllContent();
    let homepage = generateHomepage();
    pageContent.appendChild(homepage);
})

aboutUsLink.addEventListener("click", () => {
    deleteAllContent();
    let aboutUsPage = generateAboutUsPage();
    pageContent.appendChild(aboutUsPage);
})

menuLink.addEventListener("click", () => {
    deleteAllContent();
    let menuPage = generateMenuPage();
    pageContent.appendChild(menuPage);
})



