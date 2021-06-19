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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ \"./src/todoItems.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\nlet defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Default Project\")\nconsole.log(defaultProject)\n\n\nconst potato = (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.default)(\n\t\"Potato Title\",\n\t\"this is description\",\n\t\"12/04/2025\",\n\t\"Top priority\",\n\t\"Random Notes\",\n\t\"Complete\"\n);\nconsole.log(potato);\npotato.editTitle(\"newPotatoTitle\");\nconsole.log(potato.title);\n\n\ndefaultProject.addTodoItem(potato)\nconsole.log(defaultProject)\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Projects where todo list items can be kept. Projects can be created and deleted. Default project created initially and todo items are auto added\n\nconst project = (name) => {\n    let projectList = [];\n\n\tconst addTodoItem = function (item) {\n        console.log(this.projectList)\n        this.projectList.push(item);\n    };\n\n    const removeTodoItem = function (item) {\n        // remove todo item (use local storage with index of)\n    }\n\n\treturn { name, projectList, addTodoItem };\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Creates the todo items using a factory function.\n\nconst todoItem = (title, description, dueDate, priority, notes, checklist) => {\n\t// todo Item constructor\n\n\tconst editTitle = function (updatedTitle) {\n\t\tthis.title = updatedTitle;\n\t\treturn this.title;\n\t};\n\n\tconst editDescription = function (updatedDescription) {\n\t\tthis.description = updatedDescription;\n\t\treturn this.description;\n\t};\n\n\tconst editDueDate = function (updatedDueDate) {\n\t\tthis.dueDate = updatedDueDate;\n\t\treturn this.dueDate;\n\t};\n\n\treturn {\n\t\ttitle,\n\t\tdescription,\n\t\tdueDate,\n\t\tpriority,\n\t\tnotes,\n\t\tchecklist,\n\t\teditTitle,\n        editDescription,\n        editDueDate,\n\t};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);\n\n\n//# sourceURL=webpack://todo-list/./src/todoItems.js?");

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