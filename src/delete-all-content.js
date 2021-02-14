function deleteAllContent() {
    let pageContent = document.querySelector("#content");
    let pageContentChildren = pageContent.childNodes;
    
    pageContent.removeChild(pageContentChildren[1]);
}

export {deleteAllContent};