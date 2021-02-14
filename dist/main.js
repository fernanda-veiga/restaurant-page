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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page */ \"./src/initial-page.js\");\n\r\n\r\n(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.loadFirstPage)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFirstPage\": () => (/* binding */ loadFirstPage)\n/* harmony export */ });\nfunction loadFirstPage() {\r\n    const pageContent = document.querySelector(\"#content\");\r\n    pageContent.style.backgroundImage = 'url(\"https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80\")';\r\n\r\n    //Generate the navbar\r\n    let navBar = generateNavBar();\r\n    pageContent.appendChild(navBar);\r\n\r\n    //Generate the social media links\r\n    let socialMediaContainer = generateSocialMediaLinks();\r\n    pageContent.appendChild(socialMediaContainer);\r\n}\r\n\r\nfunction generateNavBar() {\r\n    let navBar = document.createElement(\"nav\");\r\n\r\n    let navLink1 = document.createElement(\"a\");\r\n    navLink1.setAttribute(\"href\", \"#\");\r\n    navLink1.classList.add(\"nav-links\");\r\n    navLink1.textContent = \"ABOUT US\";\r\n\r\n    let navLink2 = document.createElement(\"a\");\r\n    navLink2.setAttribute(\"href\", \"#\");\r\n    navLink2.classList.add(\"nav-links\");\r\n    navLink2.textContent = \"MENU\";\r\n\r\n    let navLink3 = document.createElement(\"a\");\r\n    navLink3.setAttribute(\"href\", \"#\");\r\n    navLink3.classList.add(\"nav-links\");\r\n    navLink3.textContent = \"LOCATION\";\r\n\r\n    let navLink4 = document.createElement(\"a\");\r\n    navLink4.setAttribute(\"href\", \"#\");\r\n    navLink4.classList.add(\"nav-links\");\r\n    navLink4.textContent = \"CONTACT\";\r\n\r\n    let logo = document.createElement(\"div\");\r\n    logo.classList.add(\"logo\");\r\n    let logoText1 = document.createElement(\"p\");\r\n    logoText1.setAttribute(\"id\", \"restaurant-name\");\r\n    logoText1.textContent = \"KYOTO\";\r\n    let logoText2 = document.createElement(\"p\");\r\n    logoText2.textContent = \"JAPANESE FOOD\";\r\n    logo.appendChild(logoText1);\r\n    logo.appendChild(logoText2);\r\n\r\n    navBar.appendChild(navLink1);\r\n    navBar.appendChild(navLink2);\r\n    navBar.appendChild(logo);\r\n    navBar.appendChild(navLink3);\r\n    navBar.appendChild(navLink4);\r\n\r\n    return navBar;\r\n}\r\n\r\nfunction generateSocialMediaLinks() {\r\n    let socialMediaContainer = document.createElement(\"div\");\r\n    socialMediaContainer.classList.add(\"social-media-links\");\r\n\r\n    let facebookLink = document.createElement(\"div\");\r\n    facebookLink.classList.add(\"social-media\");\r\n    facebookLink.innerHTML = '<a href=#><i class=\"fab fa-facebook-f\"></i></a>';\r\n\r\n    let instagramLink = document.createElement(\"div\");\r\n    instagramLink.classList.add(\"social-media\");\r\n    instagramLink.innerHTML = '<a href=#><i class=\"fab fa-instagram\"></i></a>';\r\n\r\n    let twitterLink = document.createElement(\"div\");\r\n    twitterLink.classList.add(\"social-media\");\r\n    twitterLink.innerHTML = '<a href=#><i class=\"fab fa-twitter\"></i></a>';\r\n\r\n    socialMediaContainer.appendChild(facebookLink);\r\n    socialMediaContainer.appendChild(instagramLink);\r\n    socialMediaContainer.appendChild(twitterLink);\r\n\r\n    return socialMediaContainer;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/initial-page.js?");

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