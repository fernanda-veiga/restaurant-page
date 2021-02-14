function generateNavBar() {
    let navBar = document.createElement("nav");

    //Generate the logo
    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");

    let logoText = document.createElement("h1");
    logoText.textContent = "sweet escape";

    logoDiv.appendChild(logoText);


    //Generate nav links
    let navLinksDiv = document.createElement("div");
    let navLinks = [];

    for(let i = 0; i < 4; i++) {
        navLinks.push(document.createElement("a"));
        navLinks[i].setAttribute("href", "#");
        navLinks[i].classList.add("nav-links");
    }

    navLinks[0].textContent = "ABOUT US"
    navLinks[1].textContent = "MENU";
    navLinks[2].textContent = "LOCATION";
    navLinks[3].textContent = "CONTACT";

    navLinks.forEach(item => navLinksDiv.appendChild(item));


    //Append the divs to the navbar
    navBar.appendChild(logoDiv);
    navBar.appendChild(navLinksDiv);


    return navBar;
}

export {generateNavBar};