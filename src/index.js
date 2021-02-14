import {generateNavBar} from "./nav-bar"
import {generateHomepage} from "./homepage"
import {deleteAllContent} from "./delete-all-content"
import {generateAboutUsPage} from "./about-us"

const pageContent = document.querySelector("#content");

//Generate the navbar
let navBar = generateNavBar();
pageContent.appendChild(navBar);

//Generate first page
let homepageContent = generateHomepage();
pageContent.appendChild(homepageContent);

//Generate event listeners
let navLinks = document.querySelectorAll(".nav-links");

let aboutUsLink = navLinks[0];
let menuLink = navLinks[1];
let locationLink = navLinks[2];
let contactLink = navLinks[3];

aboutUsLink.addEventListener("click", () => {
    deleteAllContent();
    let aboutUsPage = generateAboutUsPage();
    pageContent.appendChild(aboutUsPage);
})



