function generateHomepage() {
    let homepageContent = document.createElement("div");
    homepageContent.classList.add("homepage-content");

    //Generate text
    let textDiv = document.createElement("div");
    textDiv.classList.add("text-div");

    let textHeader3 = document.createElement("h3");
    textHeader3.textContent = "Delicious";

    let textHeader4 = document.createElement("h4");
    textHeader4.textContent = "━ CAKES FOR YOU!";

    let textParagraph = document.createElement("p");
    textParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, ex vel vestibulum ultricies, est sem aliquam tortor, in maximus nulla quam non augue.";

    textDiv.appendChild(textHeader3);
    textDiv.appendChild(textHeader4);
    textDiv.appendChild(textParagraph);

    //Generate button
    let orderNowButton = document.createElement("button");
    orderNowButton.setAttribute("type", "button");
    orderNowButton.textContent = "ORDER NOW!"
    textDiv.appendChild(orderNowButton);

    //Generate images
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");

    let image1 = document.createElement("img");
    image1.setAttribute("src", "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80");
    image1.setAttribute("id", "image1");

    let image2 = document.createElement("img");
    image2.setAttribute("src", "https://images.unsplash.com/photo-1547607700-14bf9e038209?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGN1cGNha2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    image2.setAttribute("id", "image2");

    
    imageDiv.appendChild(image1);
    imageDiv.appendChild(image2);

    homepageContent.appendChild(textDiv);
    homepageContent.appendChild(imageDiv);

    return homepageContent;
}

export {generateHomepage}