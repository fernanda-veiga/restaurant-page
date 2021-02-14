/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateAboutUsPage\": () => (/* binding */ generateAboutUsPage)\n/* harmony export */ });\nfunction generateAboutUsPage() {\r\n    let aboutUsPage = document.createElement(\"div\");\r\n    aboutUsPage.classList.add(\"about-us-content\");\r\n\r\n    //Generate images\r\n    let imageDiv = document.createElement(\"div\");\r\n    imageDiv.classList.add(\"about-us-image-div\");\r\n\r\n    let image = document.createElement(\"img\");\r\n    image.setAttribute(\"src\", \"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80\");\r\n    image.setAttribute(\"id\", \"about-us-image\");\r\n\r\n    imageDiv.appendChild(image);\r\n\r\n    //Generate text\r\n    let textDiv = document.createElement(\"div\");\r\n    textDiv.classList.add(\"text-div\");\r\n\r\n    let textHeader3 = document.createElement(\"h3\");\r\n    textHeader3.textContent = \"About Us\";\r\n    let textParagraph = document.createElement(\"p\");\r\n    textParagraph.textContent = \"Quisque volutpat sit amet libero vitae sollicitudin. Nunc ultricies turpis lacus, dapibus tempus nisl ultricies nec. Cras convallis volutpat nisi vel efficitur. Fusce porttitor eget lectus sed ultrices. Nunc eu libero diam. Maecenas elementum in metus id vehicula. Cras sit amet condimentum tellus. Sed sed turpis eget leo feugiat interdum. Mauris ornare tortor diam, et consequat sem varius in. Phasellus laoreet elit eu ornare porta. Vestibulum suscipit ante et lectus feugiat, ac consequat arcu rutrum. Maecenas placerat pharetra turpis, quis ultricies nibh ultrices porttitor. Nulla a bibendum ante. Phasellus nec purus nisi. Etiam non urna vitae justo eleifend faucibus.\";\r\n\r\n    //Generate social media links\r\n    let socialMediaDiv = document.createElement(\"div\");\r\n    socialMediaDiv.classList.add(\"social-media-div\");\r\n\r\n    let facebookLink = document.createElement(\"div\");\r\n    facebookLink.classList.add(\"social-media-link\");\r\n    facebookLink.innerHTML = '<a href=#><i class=\"fab fa-facebook-f\"></i></a>';\r\n\r\n    let instagramLink = document.createElement(\"div\");\r\n    instagramLink.classList.add(\"social-media-link\");\r\n    instagramLink.innerHTML = '<a href=#><i class=\"fab fa-instagram\"></i></a>';\r\n\r\n    let twitterLink = document.createElement(\"div\");\r\n    twitterLink.classList.add(\"social-media-link\");\r\n    twitterLink.innerHTML = '<a href=#><i class=\"fab fa-twitter\"></i></a>';\r\n\r\n    socialMediaDiv.appendChild(facebookLink);\r\n    socialMediaDiv.appendChild(instagramLink);\r\n    socialMediaDiv.appendChild(twitterLink);\r\n\r\n    //Append children\r\n    textDiv.appendChild(textHeader3);\r\n    textDiv.appendChild(textParagraph);\r\n    textDiv.appendChild(socialMediaDiv);\r\n\r\n    //Append children to the main page\r\n    aboutUsPage.appendChild(imageDiv);\r\n    aboutUsPage.appendChild(textDiv);\r\n\r\n    return aboutUsPage;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about-us.js?");

/***/ }),

/***/ "./src/delete-all-content.js":
/*!***********************************!*\
  !*** ./src/delete-all-content.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteAllContent\": () => (/* binding */ deleteAllContent)\n/* harmony export */ });\nfunction deleteAllContent() {\r\n    let pageContent = document.querySelector(\"#content\");\r\n    let pageContentChildren = pageContent.childNodes;\r\n    \r\n    pageContent.removeChild(pageContentChildren[1]);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/delete-all-content.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateHomepage\": () => (/* binding */ generateHomepage)\n/* harmony export */ });\nfunction generateHomepage() {\r\n    let homepageContent = document.createElement(\"div\");\r\n    homepageContent.classList.add(\"homepage-content\");\r\n\r\n    //Generate text\r\n    let textDiv = document.createElement(\"div\");\r\n    textDiv.classList.add(\"text-div\");\r\n\r\n    let textHeader3 = document.createElement(\"h3\");\r\n    textHeader3.textContent = \"Delicious\";\r\n\r\n    let textHeader4 = document.createElement(\"h4\");\r\n    textHeader4.textContent = \"━ CAKES FOR YOU!\";\r\n\r\n    let textParagraph = document.createElement(\"p\");\r\n    textParagraph.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, ex vel vestibulum ultricies, est sem aliquam tortor, in maximus nulla quam non augue.\";\r\n\r\n    textDiv.appendChild(textHeader3);\r\n    textDiv.appendChild(textHeader4);\r\n    textDiv.appendChild(textParagraph);\r\n\r\n    //Generate button\r\n    let orderNowButton = document.createElement(\"button\");\r\n    orderNowButton.setAttribute(\"type\", \"button\");\r\n    orderNowButton.textContent = \"ORDER NOW!\"\r\n    textDiv.appendChild(orderNowButton);\r\n\r\n    //Generate images\r\n    let imageDiv = document.createElement(\"div\");\r\n    imageDiv.classList.add(\"image-div\");\r\n\r\n    let image1 = document.createElement(\"img\");\r\n    image1.setAttribute(\"src\", \"https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80\");\r\n    image1.setAttribute(\"id\", \"image1\");\r\n\r\n    let image2 = document.createElement(\"img\");\r\n    image2.setAttribute(\"src\", \"https://images.unsplash.com/photo-1547607700-14bf9e038209?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGN1cGNha2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60\");\r\n    image2.setAttribute(\"id\", \"image2\");\r\n\r\n    \r\n    imageDiv.appendChild(image1);\r\n    imageDiv.appendChild(image2);\r\n\r\n    homepageContent.appendChild(textDiv);\r\n    homepageContent.appendChild(imageDiv);\r\n\r\n    return homepageContent;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar */ \"./src/nav-bar.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _delete_all_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-all-content */ \"./src/delete-all-content.js\");\n/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us */ \"./src/about-us.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst pageContent = document.querySelector(\"#content\");\r\n\r\n//Generate the navbar\r\nlet navBar = (0,_nav_bar__WEBPACK_IMPORTED_MODULE_0__.generateNavBar)();\r\npageContent.appendChild(navBar);\r\n\r\n//Generate first page\r\nlet homepageContent = (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.generateHomepage)();\r\npageContent.appendChild(homepageContent);\r\n\r\n//Generate event listeners\r\nlet navLinks = document.querySelectorAll(\".nav-links\");\r\n\r\nlet homepageLink = navLinks[0];\r\nlet aboutUsLink = navLinks[1];\r\nlet menuLink = navLinks[2];\r\n\r\nhomepageLink.addEventListener(\"click\", () => {\r\n    (0,_delete_all_content__WEBPACK_IMPORTED_MODULE_2__.deleteAllContent)();\r\n    let homepage = (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.generateHomepage)();\r\n    pageContent.appendChild(homepage);\r\n})\r\n\r\naboutUsLink.addEventListener(\"click\", () => {\r\n    ;(0,_delete_all_content__WEBPACK_IMPORTED_MODULE_2__.deleteAllContent)();\r\n    let aboutUsPage = (0,_about_us__WEBPACK_IMPORTED_MODULE_3__.generateAboutUsPage)();\r\n    pageContent.appendChild(aboutUsPage);\r\n})\r\n\r\nmenuLink.addEventListener(\"click\", () => {\r\n    ;(0,_delete_all_content__WEBPACK_IMPORTED_MODULE_2__.deleteAllContent)();\r\n    let menuPage = (0,_menu__WEBPACK_IMPORTED_MODULE_4__.generateMenuPage)();\r\n    pageContent.appendChild(menuPage);\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateMenuPage\": () => (/* binding */ generateMenuPage)\n/* harmony export */ });\nfunction generateMenuPage() {\r\n    let menuPage = document.createElement(\"div\");\r\n    menuPage.classList.add(\"menu-content\");\r\n\r\n    //Generate menu title\r\n    let menuTitle = document.createElement(\"h1\");\r\n    menuTitle.classList.add(\"menu-title\");\r\n    menuTitle.textContent = \"Menu\"\r\n    menuPage.appendChild(menuTitle);\r\n\r\n    //Generate menu\r\n    let menuDiv = document.createElement(\"div\");\r\n    menuDiv.classList.add(\"menu-div\");\r\n\r\n    let menuItem1 = document.createElement(\"div\");\r\n    menuItem1.classList.add(\"menu-item-div\");\r\n    let menuItem2 = document.createElement(\"div\");\r\n    menuItem2.classList.add(\"menu-item-div\");\r\n    let menuItem3 = document.createElement(\"div\");\r\n    menuItem3.classList.add(\"menu-item-div\");\r\n    let menuItem4 = document.createElement(\"div\");\r\n    menuItem4.classList.add(\"menu-item-div\");\r\n\r\n    menuItem1.innerHTML = `<h5>STRAWBERRY CHEESECAKE</h5>\r\n    <p>Cras egestas euismod nulla, nec tempus risus auctor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`;\r\n    menuItem2.innerHTML = `<h5>RED VELVET CAKE</h5>\r\n    <p>Cras egestas euismod nulla, nec tempus risus auctor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`;\r\n    menuItem3.innerHTML = `<h5>CHOCOLATE CUPCAKE</h5>\r\n    <p>Cras egestas euismod nulla, nec tempus risus auctor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`;\r\n    menuItem4.innerHTML = `<h5>BIRTHDAY CAKE</h5>\r\n    <p>Cras egestas euismod nulla, nec tempus risus auctor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`;\r\n\r\n    //Generate images\r\n    let imageDiv = document.createElement(\"div\");\r\n    imageDiv.classList.add(\"menu-image-div\");\r\n\r\n    let image = document.createElement(\"img\");\r\n    image.setAttribute(\"src\", \"https://images.unsplash.com/photo-1578775887804-699de7086ff9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlY2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60\");\r\n    image.setAttribute(\"id\", \"menu-image\");\r\n\r\n    imageDiv.appendChild(image);\r\n\r\n    //Append children\r\n    menuDiv.appendChild(menuItem1);\r\n    menuDiv.appendChild(menuItem2);\r\n    menuDiv.appendChild(menuItem3);\r\n    menuDiv.appendChild(menuItem4);\r\n    menuDiv.appendChild(imageDiv);\r\n\r\n    menuPage.appendChild(menuDiv);\r\n\r\n    return menuPage;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav-bar.js":
/*!************************!*\
  !*** ./src/nav-bar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateNavBar\": () => (/* binding */ generateNavBar)\n/* harmony export */ });\nfunction generateNavBar() {\r\n    let navBar = document.createElement(\"nav\");\r\n\r\n    //Generate the logo\r\n    let logoDiv = document.createElement(\"div\");\r\n    logoDiv.classList.add(\"logo\");\r\n\r\n    let logoText = document.createElement(\"h1\");\r\n    logoText.textContent = \"sweet escape\";\r\n\r\n    logoDiv.appendChild(logoText);\r\n\r\n\r\n    //Generate nav links\r\n    let navLinksDiv = document.createElement(\"div\");\r\n    let navLinks = [];\r\n\r\n    for(let i = 0; i < 3; i++) {\r\n        navLinks.push(document.createElement(\"a\"));\r\n        navLinks[i].setAttribute(\"href\", \"#\");\r\n        navLinks[i].classList.add(\"nav-links\");\r\n    }\r\n\r\n    navLinks[0].textContent = \"HOMEPAGE\"\r\n    navLinks[1].textContent = \"ABOUT US\"\r\n    navLinks[2].textContent = \"MENU\";\r\n    //navLinks[2].textContent = \"LOCATION\";\r\n    //navLinks[3].textContent = \"CONTACT\";\r\n\r\n    navLinks.forEach(item => navLinksDiv.appendChild(item));\r\n\r\n\r\n    //Append the divs to the navbar\r\n    navBar.appendChild(logoDiv);\r\n    navBar.appendChild(navLinksDiv);\r\n\r\n\r\n    return navBar;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/nav-bar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;