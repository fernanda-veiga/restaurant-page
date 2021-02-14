import {generateNavBar} from "./generate-nav-bar"
import {loadFirstPage} from "./initial-page"

generateNavBar();
//loadFirstPage();



function wipeAllContent() {
    let pageContent = document.querySelector("#content");
    pageContent.innerHTML = "";
}

