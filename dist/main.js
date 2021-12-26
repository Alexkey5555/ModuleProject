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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('31 december 2021');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu')\n    const menu = document.querySelector('menu')\n    const closeBtn = menu.querySelector('.close-btn')\n    const menuItems = menu.querySelectorAll('ul>li>a')\n    const btnDown = document.querySelector('a[href=\"#service-block\"]>img')\n\n    btnDown.addEventListener('click', (event) => {\n        let a = event.target.parentElement.attributes.href.value.slice(1)\n        let href = document.getElementById(a)\n        href.scrollIntoView({ behavior: \"smooth\" })\n    })\n\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu')\n    }\n\n    menuBtn.addEventListener('click', handleMenu)\n    closeBtn.addEventListener('click', handleMenu)\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', (event) => {\n        event.preventDefault()\n        let linkhref = event.target.attributes.href.value.slice(1)\n        let link = document.getElementById(linkhref)\n        link.scrollIntoView({ behavior: \"smooth\" })\n        handleMenu()\n    }))\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const modal = document.querySelector('.popup')\n    const buttons = document.querySelectorAll('.popup-btn')\n    const closeBtn = modal.querySelector('.popup-close')\n    const width = document.documentElement.scrollWidth\n    modal.style.opacity = '0'\n\n    buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n            modal.style.display = 'block'\n            console.log(width);\n            let timer = setInterval(() => {\n                if (modal.style.opacity === '1') clearInterval(timer);\n                else if (width < 768) {\n                    modal.style.opacity = '1'\n\n                }\n                else {\n                    let count = +modal.style.opacity\n                    count += 0.1\n                    modal.style.opacity = count\n                }\n            }, 80)\n        })\n        closeBtn.addEventListener('click', () => {\n            modal.style.display = 'none'\n            modal.style.opacity = '0'\n        })\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\n    const timerHours = document.getElementById('timer-hours')\n    const timerMinutes = document.getElementById('timer-minutes')\n    const timerSeconds = document.getElementById('timer-seconds')\n    const timer = document.querySelectorAll('#timer span')\n    const timerDays = document.createElement('span')\n    const span = document.createElement('span')\n    let checkTime;\n    span.textContent = ' : '\n    timerDays.textContent = '00'\n    timerDays.id = 'timer-days'\n    timer[0].before(timerDays)\n    timer[0].before(span)\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadLine).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow) / 1000\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        return { timeRemaining, days, hours, minutes, seconds }\n    }\n\n    checkTime = getTimeRemaining()\n    const updateClock = () => {\n        let getTime = getTimeRemaining()\n\n        if (getTime.days < 10) {\n            timerDays.textContent = '0' + getTime.days;\n        }\n        else {\n            timerDays.textContent = getTime.days\n        }\n        if (getTime.hours < 10) {\n            timerHours.textContent = '0' + getTime.hours;\n        }\n        else {\n            timerHours.textContent = getTime.hours\n        }\n        if (getTime.minutes < 10) {\n            timerMinutes.textContent = '0' + getTime.minutes;\n        }\n        else {\n            timerMinutes.textContent = getTime.minutes\n        }\n        if (getTime.seconds < 10) {\n            timerSeconds.textContent = '0' + getTime.seconds;\n        }\n        else {\n            timerSeconds.textContent = getTime.seconds\n        }\n\n    }\n    if (checkTime.timeRemaining > 0) {\n        updateClock()\n        setInterval(updateClock, 1000)\n    }\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;