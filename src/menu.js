function generateMenuPage() {
    let menuPage = document.createElement("div");
    menuPage.classList.add("menu-content");

    //Generate menu title
    let menuTitle = document.createElement("h1");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu"
    menuPage.appendChild(menuTitle);

    //Generate menu
    let menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");

    let menuItem1 = document.createElement("div");
    menuItem1.classList.add("menu-item-div");
    let menuItem2 = document.createElement("div");
    menuItem2.classList.add("menu-item-div");
    let menuItem3 = document.createElement("div");
    menuItem3.classList.add("menu-item-div");
    let menuItem4 = document.createElement("div");
    menuItem4.classList.add("menu-item-div");

    menuItem1.innerHTML = `<h5>STRAWBERRY CHEESECAKE</h5>
    <p>Cras egestas euismod nulla, nec tempus risus auctor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`;
    menuItem2.innerHTML = `<h5>RED VELVET CAKE</h5>
    <p>Cras egestas euismod nulla, nec tempus risus auctor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`;
    menuItem3.innerHTML = `<h5>CHOCOLATE CUPCAKE</h5>
    <p>Cras egestas euismod nulla, nec tempus risus auctor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`;
    menuItem4.innerHTML = `<h5>BIRTHDAY CAKE</h5>
    <p>Cras egestas euismod nulla, nec tempus risus auctor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`;

    //Generate images
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("menu-image-div");

    let image = document.createElement("img");
    image.setAttribute("src", "https://images.unsplash.com/photo-1578775887804-699de7086ff9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlY2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    image.setAttribute("id", "menu-image");

    imageDiv.appendChild(image);

    //Append children
    menuDiv.appendChild(menuItem1);
    menuDiv.appendChild(menuItem2);
    menuDiv.appendChild(menuItem3);
    menuDiv.appendChild(menuItem4);
    menuDiv.appendChild(imageDiv);

    menuPage.appendChild(menuDiv);

    return menuPage;
}

export {generateMenuPage};