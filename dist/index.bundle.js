/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayHomePage.js":
/*!********************************!*\
  !*** ./src/displayHomePage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _displayTodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodoItem */ "./src/displayTodoItem.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



// Interacts with the DOM to display relevant elements

const homePage = (() => {
	let content = document.createElement("div");
	document.body.appendChild(content);

	// const displayProject = function (project) {
	// 	console.log(project);
	// 	const element = document.createElement("div");

	// 	for (let i = 0; i < project.projectList.length; i++) {
	// 		let todoItem = project.projectList[i];
	// 		const todoTitle = todoItem.title;
	// 		const todoDueDate = todoItem.dueDate;

	// 		const moreInfoBtn = document.createElement("button");
	// 		moreInfoBtn.innerHTML = "More Information";

	// 		moreInfoBtn.onclick = function () {
	// 			todoPage(todoItem);
	// 		};

	// 		const removeTodoBtn = document.createElement("button");
	// 		removeTodoBtn.innerHTML = "Remove Todo";

	// 		removeTodoBtn.onclick = function () {
	// 			project.removeTodoItem(`${i}`);
	// 			homePage.displayProject(project);
	// 		};

	// 		element.append(todoTitle, todoDueDate, moreInfoBtn, removeTodoBtn);
	// 	}
	// 	content.appendChild(element);
	// 	return content;
	// };

	// return { displayProject };
})();




/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProject": () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _displayTodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodoItem */ "./src/displayTodoItem.js");



const displayProject = function (project) {
	console.log(project);
	const element = document.createElement("div");

	for (let i = 0; i < project.projectList.length; i++) {
		let todoItem = project.projectList[i];
		const todoTitle = todoItem.title;
		const todoDueDate = todoItem.dueDate;

		const moreInfoBtn = document.createElement("button");
		moreInfoBtn.innerHTML = "More Information";

		moreInfoBtn.onclick = function () {
			(0,_displayTodoItem__WEBPACK_IMPORTED_MODULE_0__.todoPage)(todoItem);
		};

		const removeTodoBtn = document.createElement("button");
		removeTodoBtn.innerHTML = "Remove Todo";

		removeTodoBtn.onclick = function () {
			project.removeTodoItem(`${i}`);
			displayProject(project);
		};

		element.append(todoTitle, todoDueDate, moreInfoBtn, removeTodoBtn);
	}
	document.body.appendChild(element);
	return element;
};




/***/ }),

/***/ "./src/displayTodoItem.js":
/*!********************************!*\
  !*** ./src/displayTodoItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoPage": () => (/* binding */ todoPage)
/* harmony export */ });
// Display destailed information for todo item

const todoPage = (todo) => {
	let content = document.createElement("div");
	document.body.appendChild(content);

	let title = todo.title;
	let description = todo.description;
	let dueDate = todo.dueDate;
	let priority = todo.priority;
	let notes = todo.notes;

	content.innerHTML += `<ul>
            <li>${title}</li>
            <li>${description}</li>
            <li>${dueDate}</li>
            <li>${priority}</li>
            <li>${notes}</li>
        </ul>`;

	return content;
};




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
// Projects where todo list items can be kept. Projects can be created and deleted. Default project created initially and todo items are auto added

const project = (name) => {
	let projectList = [];

	const addTodoItem = function (item) {
		console.log(this.projectList);
		this.projectList.push(item);
	};

	const removeTodoItem = function (index) {
		console.log("removed todo item success yay!")
		console.log(`${this.projectList[index]}`)
		// remove todo item (use local storage with index of)
		this.projectList.splice(index, 1);
		
	};

	return { name, projectList, addTodoItem, removeTodoItem };
};




/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
// Creates the todo items using a factory function.

const todoItem = (title, description, dueDate, priority, notes) => {
	// todo Item constructor

	const editTitle = function (updatedTitle) {
		this.title = updatedTitle;
		return this.title;
	};

	const editDescription = function (updatedDescription) {
		this.description = updatedDescription;
		return this.description;
	};

	const editDueDate = function (updatedDueDate) {
		this.dueDate = updatedDueDate;
		return this.dueDate;
	};

	return {
		title,
		description,
		dueDate,
		priority,
		notes,
		editTitle,
		editDescription,
		editDueDate,
	};
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayProject */ "./src/displayProject.js");
/* harmony import */ var _displayHomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayHomePage */ "./src/displayHomePage.js");
/* harmony import */ var _displayTodoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayTodoItem */ "./src/displayTodoItem.js");






let defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)("Default Project");
console.log(defaultProject);

const potato = (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.todoItem)(
	"Potato Title",
	"this is description",
	"12/04/2025",
	"Top priority",
	"Random Notes",
	"Complete"
);

const potato2 = (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.todoItem)(
	"Potato Title",
	"this is description",
	"12/04/2025",
	"Top priority",
	"Random Notes",
	"Complete"
);

console.log(potato);
potato.editTitle("newPotatoTitle");
console.log(potato.title);

defaultProject.addTodoItem(potato);
defaultProject.addTodoItem(potato2);
console.log(defaultProject);

(0,_displayProject__WEBPACK_IMPORTED_MODULE_2__.displayProject)(defaultProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUhvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDVDs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7OztBQzFDeUI7OztBQUc3QztBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGdDQUFnQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUcsMERBQVE7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLEVBQUU7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQjs7Ozs7Ozs7Ozs7Ozs7O0FDakMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCLGtCQUFrQixZQUFZO0FBQzlCLGtCQUFrQixRQUFRO0FBQzFCLGtCQUFrQixTQUFTO0FBQzNCLGtCQUFrQixNQUFNO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7QUN2QnBCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7QUNyQm5COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7VUNoQ3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNIO0FBQ2E7QUFDSjtBQUNBOztBQUU3QyxxQkFBcUIsaURBQU87QUFDNUI7O0FBRUEsZUFBZSxvREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isb0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrREFBYyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2RvUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvSXRlbVwiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuLy8gSW50ZXJhY3RzIHdpdGggdGhlIERPTSB0byBkaXNwbGF5IHJlbGV2YW50IGVsZW1lbnRzXG5cbmNvbnN0IGhvbWVQYWdlID0gKCgpID0+IHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cdC8vIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcblx0Ly8gXHRjb25zb2xlLmxvZyhwcm9qZWN0KTtcblx0Ly8gXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHQvLyBcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHQvLyBcdFx0bGV0IHRvZG9JdGVtID0gcHJvamVjdC5wcm9qZWN0TGlzdFtpXTtcblx0Ly8gXHRcdGNvbnN0IHRvZG9UaXRsZSA9IHRvZG9JdGVtLnRpdGxlO1xuXHQvLyBcdFx0Y29uc3QgdG9kb0R1ZURhdGUgPSB0b2RvSXRlbS5kdWVEYXRlO1xuXG5cdC8vIFx0XHRjb25zdCBtb3JlSW5mb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdC8vIFx0XHRtb3JlSW5mb0J0bi5pbm5lckhUTUwgPSBcIk1vcmUgSW5mb3JtYXRpb25cIjtcblxuXHQvLyBcdFx0bW9yZUluZm9CdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gXHRcdFx0dG9kb1BhZ2UodG9kb0l0ZW0pO1xuXHQvLyBcdFx0fTtcblxuXHQvLyBcdFx0Y29uc3QgcmVtb3ZlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdC8vIFx0XHRyZW1vdmVUb2RvQnRuLmlubmVySFRNTCA9IFwiUmVtb3ZlIFRvZG9cIjtcblxuXHQvLyBcdFx0cmVtb3ZlVG9kb0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHQvLyBcdFx0XHRwcm9qZWN0LnJlbW92ZVRvZG9JdGVtKGAke2l9YCk7XG5cdC8vIFx0XHRcdGhvbWVQYWdlLmRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuXHQvLyBcdFx0fTtcblxuXHQvLyBcdFx0ZWxlbWVudC5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRHVlRGF0ZSwgbW9yZUluZm9CdG4sIHJlbW92ZVRvZG9CdG4pO1xuXHQvLyBcdH1cblx0Ly8gXHRjb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHQvLyBcdHJldHVybiBjb250ZW50O1xuXHQvLyB9O1xuXG5cdC8vIHJldHVybiB7IGRpc3BsYXlQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgeyBob21lUGFnZSB9O1xuIiwiaW1wb3J0IHsgdG9kb1BhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5VG9kb0l0ZW1cIjtcblxuXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG5cdGNvbnNvbGUubG9nKHByb2plY3QpO1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdG9kb0l0ZW0gPSBwcm9qZWN0LnByb2plY3RMaXN0W2ldO1xuXHRcdGNvbnN0IHRvZG9UaXRsZSA9IHRvZG9JdGVtLnRpdGxlO1xuXHRcdGNvbnN0IHRvZG9EdWVEYXRlID0gdG9kb0l0ZW0uZHVlRGF0ZTtcblxuXHRcdGNvbnN0IG1vcmVJbmZvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRtb3JlSW5mb0J0bi5pbm5lckhUTUwgPSBcIk1vcmUgSW5mb3JtYXRpb25cIjtcblxuXHRcdG1vcmVJbmZvQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0b2RvUGFnZSh0b2RvSXRlbSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlbW92ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdHJlbW92ZVRvZG9CdG4uaW5uZXJIVE1MID0gXCJSZW1vdmUgVG9kb1wiO1xuXG5cdFx0cmVtb3ZlVG9kb0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cHJvamVjdC5yZW1vdmVUb2RvSXRlbShgJHtpfWApO1xuXHRcdFx0ZGlzcGxheVByb2plY3QocHJvamVjdCk7XG5cdFx0fTtcblxuXHRcdGVsZW1lbnQuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0R1ZURhdGUsIG1vcmVJbmZvQnRuLCByZW1vdmVUb2RvQnRuKTtcblx0fVxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0IH07XG4iLCIvLyBEaXNwbGF5IGRlc3RhaWxlZCBpbmZvcm1hdGlvbiBmb3IgdG9kbyBpdGVtXG5cbmNvbnN0IHRvZG9QYWdlID0gKHRvZG8pID0+IHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cdGxldCB0aXRsZSA9IHRvZG8udGl0bGU7XG5cdGxldCBkZXNjcmlwdGlvbiA9IHRvZG8uZGVzY3JpcHRpb247XG5cdGxldCBkdWVEYXRlID0gdG9kby5kdWVEYXRlO1xuXHRsZXQgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuXHRsZXQgbm90ZXMgPSB0b2RvLm5vdGVzO1xuXG5cdGNvbnRlbnQuaW5uZXJIVE1MICs9IGA8dWw+XG4gICAgICAgICAgICA8bGk+JHt0aXRsZX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7ZGVzY3JpcHRpb259PC9saT5cbiAgICAgICAgICAgIDxsaT4ke2R1ZURhdGV9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke3ByaW9yaXR5fTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtub3Rlc308L2xpPlxuICAgICAgICA8L3VsPmA7XG5cblx0cmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyB0b2RvUGFnZSB9O1xuIiwiLy8gUHJvamVjdHMgd2hlcmUgdG9kbyBsaXN0IGl0ZW1zIGNhbiBiZSBrZXB0LiBQcm9qZWN0cyBjYW4gYmUgY3JlYXRlZCBhbmQgZGVsZXRlZC4gRGVmYXVsdCBwcm9qZWN0IGNyZWF0ZWQgaW5pdGlhbGx5IGFuZCB0b2RvIGl0ZW1zIGFyZSBhdXRvIGFkZGVkXG5cbmNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuXHRjb25zdCBhZGRUb2RvSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdCk7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKGl0ZW0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZVRvZG9JdGVtID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0Y29uc29sZS5sb2coXCJyZW1vdmVkIHRvZG8gaXRlbSBzdWNjZXNzIHlheSFcIilcblx0XHRjb25zb2xlLmxvZyhgJHt0aGlzLnByb2plY3RMaXN0W2luZGV4XX1gKVxuXHRcdC8vIHJlbW92ZSB0b2RvIGl0ZW0gKHVzZSBsb2NhbCBzdG9yYWdlIHdpdGggaW5kZXggb2YpXG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFxuXHR9O1xuXG5cdHJldHVybiB7IG5hbWUsIHByb2plY3RMaXN0LCBhZGRUb2RvSXRlbSwgcmVtb3ZlVG9kb0l0ZW0gfTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3QgfTtcbiIsIi8vIENyZWF0ZXMgdGhlIHRvZG8gaXRlbXMgdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLlxuXG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuXHQvLyB0b2RvIEl0ZW0gY29uc3RydWN0b3JcblxuXHRjb25zdCBlZGl0VGl0bGUgPSBmdW5jdGlvbiAodXBkYXRlZFRpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IHVwZGF0ZWRUaXRsZTtcblx0XHRyZXR1cm4gdGhpcy50aXRsZTtcblx0fTtcblxuXHRjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAodXBkYXRlZERlc2NyaXB0aW9uKSB7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IHVwZGF0ZWREZXNjcmlwdGlvbjtcblx0XHRyZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcblx0fTtcblxuXHRjb25zdCBlZGl0RHVlRGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVkRHVlRGF0ZSkge1xuXHRcdHRoaXMuZHVlRGF0ZSA9IHVwZGF0ZWREdWVEYXRlO1xuXHRcdHJldHVybiB0aGlzLmR1ZURhdGU7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkdWVEYXRlLFxuXHRcdHByaW9yaXR5LFxuXHRcdG5vdGVzLFxuXHRcdGVkaXRUaXRsZSxcblx0XHRlZGl0RGVzY3JpcHRpb24sXG5cdFx0ZWRpdER1ZURhdGUsXG5cdH07XG59O1xuXG5leHBvcnQgeyB0b2RvSXRlbSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7ZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5SG9tZVBhZ2VcIjtcbmltcG9ydCB7IHRvZG9QYWdlIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9JdGVtXCI7XG5cbmxldCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIik7XG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnN0IHBvdGF0byA9IHRvZG9JdGVtKFxuXHRcIlBvdGF0byBUaXRsZVwiLFxuXHRcInRoaXMgaXMgZGVzY3JpcHRpb25cIixcblx0XCIxMi8wNC8yMDI1XCIsXG5cdFwiVG9wIHByaW9yaXR5XCIsXG5cdFwiUmFuZG9tIE5vdGVzXCIsXG5cdFwiQ29tcGxldGVcIlxuKTtcblxuY29uc3QgcG90YXRvMiA9IHRvZG9JdGVtKFxuXHRcIlBvdGF0byBUaXRsZVwiLFxuXHRcInRoaXMgaXMgZGVzY3JpcHRpb25cIixcblx0XCIxMi8wNC8yMDI1XCIsXG5cdFwiVG9wIHByaW9yaXR5XCIsXG5cdFwiUmFuZG9tIE5vdGVzXCIsXG5cdFwiQ29tcGxldGVcIlxuKTtcblxuY29uc29sZS5sb2cocG90YXRvKTtcbnBvdGF0by5lZGl0VGl0bGUoXCJuZXdQb3RhdG9UaXRsZVwiKTtcbmNvbnNvbGUubG9nKHBvdGF0by50aXRsZSk7XG5cbmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHBvdGF0byk7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbShwb3RhdG8yKTtcbmNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxuZGlzcGxheVByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==