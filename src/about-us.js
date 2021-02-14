function generateAboutUsPage() {
    let aboutUsPage = document.createElement("div");
    aboutUsPage.classList.add("about-us-content");

    //Generate images
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("about-us-image-div");

    let image = document.createElement("img");
    image.setAttribute("src", "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80");
    image.setAttribute("id", "about-us-image");

    imageDiv.appendChild(image);

    //Generate text
    let textDiv = document.createElement("div");
    textDiv.classList.add("text-div");

    let textHeader3 = document.createElement("h3");
    textHeader3.textContent = "About Us";
    let textParagraph = document.createElement("p");
    textParagraph.textContent = "Quisque volutpat sit amet libero vitae sollicitudin. Nunc ultricies turpis lacus, dapibus tempus nisl ultricies nec. Cras convallis volutpat nisi vel efficitur. Fusce porttitor eget lectus sed ultrices. Nunc eu libero diam. Maecenas elementum in metus id vehicula. Cras sit amet condimentum tellus. Sed sed turpis eget leo feugiat interdum. Mauris ornare tortor diam, et consequat sem varius in. Phasellus laoreet elit eu ornare porta. Vestibulum suscipit ante et lectus feugiat, ac consequat arcu rutrum. Maecenas placerat pharetra turpis, quis ultricies nibh ultrices porttitor. Nulla a bibendum ante. Phasellus nec purus nisi. Etiam non urna vitae justo eleifend faucibus.";

    //Generate social media links
    let socialMediaDiv = document.createElement("div");
    socialMediaDiv.classList.add("social-media-div");

    let facebookLink = document.createElement("div");
    facebookLink.classList.add("social-media-link");
    facebookLink.innerHTML = '<a href=#><i class="fab fa-facebook-f"></i></a>';

    let instagramLink = document.createElement("div");
    instagramLink.classList.add("social-media-link");
    instagramLink.innerHTML = '<a href=#><i class="fab fa-instagram"></i></a>';

    let twitterLink = document.createElement("div");
    twitterLink.classList.add("social-media-link");
    twitterLink.innerHTML = '<a href=#><i class="fab fa-twitter"></i></a>';

    socialMediaDiv.appendChild(facebookLink);
    socialMediaDiv.appendChild(instagramLink);
    socialMediaDiv.appendChild(twitterLink);

    //Append children
    textDiv.appendChild(textHeader3);
    textDiv.appendChild(textParagraph);
    textDiv.appendChild(socialMediaDiv);

    //Append children to the main page
    aboutUsPage.appendChild(imageDiv);
    aboutUsPage.appendChild(textDiv);

    return aboutUsPage;
}

export {generateAboutUsPage};