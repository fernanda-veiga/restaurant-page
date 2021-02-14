function generateNavBar() {
    let navBar = document.createElement("nav");

    let navLink1 = document.createElement("a");
    navLink1.setAttribute("href", "#");
    navLink1.classList.add("nav-links");
    navLink1.textContent = "ABOUT US";

    let navLink2 = document.createElement("a");
    navLink2.setAttribute("href", "#");
    navLink2.classList.add("nav-links");
    navLink2.textContent = "MENU";

    let navLink3 = document.createElement("a");
    navLink3.setAttribute("href", "#");
    navLink3.classList.add("nav-links");
    navLink3.textContent = "LOCATION";

    let navLink4 = document.createElement("a");
    navLink4.setAttribute("href", "#");
    navLink4.classList.add("nav-links");
    navLink4.textContent = "CONTACT";

    let logo = document.createElement("div");
    logo.classList.add("logo");
    let logoText1 = document.createElement("p");
    logoText1.setAttribute("id", "restaurant-name");
    logoText1.textContent = "KYOTO";
    let logoText2 = document.createElement("p");
    logoText2.textContent = "JAPANESE FOOD";
    logo.appendChild(logoText1);
    logo.appendChild(logoText2);

    navBar.appendChild(navLink1);
    navBar.appendChild(navLink2);
    navBar.appendChild(logo);
    navBar.appendChild(navLink3);
    navBar.appendChild(navLink4);

    return navBar;
}

export {generateNavBar};