function generateAboutUsPage() {
    const pageContent = document.querySelector("#content");
    pageContent.style.backgroundImage = 'url("https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80")';

    //Generate the navbar
    let navBar = generateNavBar();
    pageContent.appendChild(navBar);

    //Generate the social media links
    let socialMediaContainer = generateSocialMediaLinks();
    pageContent.appendChild(socialMediaContainer);
}