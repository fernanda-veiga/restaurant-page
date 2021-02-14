function loadFirstPage() {
    const pageContent = document.querySelector("#content");
    pageContent.style.backgroundImage = 'url("https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80")';

    //Generate the navbar
    let navBar = generateNavBar();
    pageContent.appendChild(navBar);

    //Generate the social media links
    let socialMediaContainer = generateSocialMediaLinks();
    pageContent.appendChild(socialMediaContainer);
}

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

function generateSocialMediaLinks() {
    let socialMediaContainer = document.createElement("div");
    socialMediaContainer.classList.add("social-media-links");

    let facebookLink = document.createElement("div");
    facebookLink.classList.add("social-media");
    facebookLink.innerHTML = '<a href=#><i class="fab fa-facebook-f"></i></a>';

    let instagramLink = document.createElement("div");
    instagramLink.classList.add("social-media");
    instagramLink.innerHTML = '<a href=#><i class="fab fa-instagram"></i></a>';

    let twitterLink = document.createElement("div");
    twitterLink.classList.add("social-media");
    twitterLink.innerHTML = '<a href=#><i class="fab fa-twitter"></i></a>';

    socialMediaContainer.appendChild(facebookLink);
    socialMediaContainer.appendChild(instagramLink);
    socialMediaContainer.appendChild(twitterLink);

    return socialMediaContainer;
}

export {loadFirstPage}