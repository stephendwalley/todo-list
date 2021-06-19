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

/***/ "./src/displayHomePage.js":
/*!********************************!*\
  !*** ./src/displayHomePage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayTodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodoItem */ \"./src/displayTodoItem.js\");\n\n\n// Interacts with the DOM to display relevant elements\n\nconst homePage = (() => {\n\tlet content = document.getElementById(\"content\");\n\n\tconst home = function () {\n\t\tconsole.log(\"running\");\n\t};\n\n\tconst displayProject = function (project) {\n\t\tconsole.log(project);\n\n\t\tfor (let i = 0; i < project.projectList.length; i++) {\n\t\t\tlet element = project.projectList[i];\n\n\t\t\tcontent.innerHTML += `<li>${element.title}</li>\n\t\t\t<button id = \"${i}\" > More Information </button>`;\n\n\t\t\tlet button = document.createElement(\"button\");\n\t\t\tbutton.innerHTML = \"Info\"\n\t\t\tbutton.addEventListener(\"click\", function () {\n\t\t\t\tconsole.log(\"clicked\")\n\t\t\t})\n\n\t\t\tcontent.appendChild(button);\n\n\t\t\t// let button = document.getElementById(`${i}`);\n\t\t\t// console.log(button);\n\t\t\t// button.addEventListener(\"click\", function () {\n\t\t\t// \tconsole.log(\"clicked\");\n\t\t\t// });\n\t\t}\n\n\t\t// project.projectList.forEach((element) => {\n\t\t// \tcontent.innerHTML += `<li>${element.title}</li>\n\t\t// \t<button id = \"${element.title}\" > More Information </button>`;\n\t\t// \tlet button = document.getElementById(`${element.title}`);\n\t\t// \tconsole.log(button);\n\t\t// \tbutton.addEventListener(\"click\", function () {\n\t\t// \t\tconsole.log(\"clicked\");\n\t\t// \t});\n\t\t// });\n\t};\n\n\treturn { home, displayProject };\n})();\n\nfunction tester() {\n\tconsole.log(\"tester worked\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n\n//# sourceURL=webpack://todo-list/./src/displayHomePage.js?");

/***/ }),

/***/ "./src/displayTodoItem.js":
/*!********************************!*\
  !*** ./src/displayTodoItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Display destailed information for todo item\n\nconst todoPage = (() => {\n\tlet content = document.getElementById(\"content\");\n\n\tconst displayTodoItem = function (todo) {\n        let title = todo.title\n        let description = todo.description\n        let dueDate = todo.dueDate\n        let priority = todo.priority\n        let notes = todo.notes\n        \n\t\tcontent.innerHTML += \n        `<ul>\n            <li>${title}</li>\n            <li>${description}</li>\n            <li>${dueDate}</li>\n            <li>${priority}</li>\n            <li>${notes}</li>\n        </ul>`;\n\t};\n\n\treturn { displayTodoItem };\n})();\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoPage);\n\n\n//# sourceURL=webpack://todo-list/./src/displayTodoItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ \"./src/todoItems.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _displayHomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayHomePage */ \"./src/displayHomePage.js\");\n/* harmony import */ var _displayTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTodoItem */ \"./src/displayTodoItem.js\");\n\n\n\n\n\nlet defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Default Project\")\nconsole.log(defaultProject)\n\n\nconst potato = (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.default)(\n\t\"Potato Title\",\n\t\"this is description\",\n\t\"12/04/2025\",\n\t\"Top priority\",\n\t\"Random Notes\",\n\t\"Complete\"\n);\n\nconsole.log(potato);\npotato.editTitle(\"newPotatoTitle\");\nconsole.log(potato.title);\n\n\ndefaultProject.addTodoItem(potato)\nconsole.log(defaultProject)\n\n_displayHomePage__WEBPACK_IMPORTED_MODULE_2__.default.displayProject(defaultProject);\n_displayTodoItem__WEBPACK_IMPORTED_MODULE_3__.default.displayTodoItem(defaultProject.projectList[0])\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Projects where todo list items can be kept. Projects can be created and deleted. Default project created initially and todo items are auto added\n\nconst project = (name) => {\n    let projectList = [];\n\n\tconst addTodoItem = function (item) {\n        console.log(this.projectList)\n        this.projectList.push(item);\n    };\n\n    const removeTodoItem = function (index) {\n        // remove todo item (use local storage with index of)\n        this.projectList.splice(index, 1)\n    }\n\n\treturn { name, projectList, addTodoItem };\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Creates the todo items using a factory function.\n\nconst todoItem = (title, description, dueDate, priority, notes) => {\n\t// todo Item constructor\n\n\tconst editTitle = function (updatedTitle) {\n\t\tthis.title = updatedTitle;\n\t\treturn this.title;\n\t};\n\n\tconst editDescription = function (updatedDescription) {\n\t\tthis.description = updatedDescription;\n\t\treturn this.description;\n\t};\n\n\tconst editDueDate = function (updatedDueDate) {\n\t\tthis.dueDate = updatedDueDate;\n\t\treturn this.dueDate;\n\t};\n\n\treturn {\n\t\ttitle,\n\t\tdescription,\n\t\tdueDate,\n\t\tpriority,\n\t\tnotes,\n\t\teditTitle,\n        editDescription,\n        editDueDate,\n\t};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);\n\n\n//# sourceURL=webpack://todo-list/./src/todoItems.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;