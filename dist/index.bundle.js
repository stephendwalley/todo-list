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


// Interacts with the DOM to display relevant elements

const homePage = (() => {
	let content = document.createElement("div");
	document.body.appendChild(content);

	const displayProject = function (project) {
		console.log(project);
		const element = document.createElement("div");

		for (let i = 0; i < project.projectList.length; i++) {
			let todoItem = project.projectList[i];
			const todoTitle = todoItem.title;
			const todoDueDate = todoItem.dueDate;

			const btn = document.createElement("button");
			btn.innerHTML = "Click me and check the console!";

			btn.onclick = function () {
				(0,_displayTodoItem__WEBPACK_IMPORTED_MODULE_0__.todoPage)(todoItem);
			};
			element.append(todoTitle, todoDueDate, btn);
			
		}
		content.appendChild(element);
		return content;
	};

	return { displayProject };
})();




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
/* harmony import */ var _displayHomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayHomePage */ "./src/displayHomePage.js");
/* harmony import */ var _displayTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTodoItem */ "./src/displayTodoItem.js");







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

_displayHomePage__WEBPACK_IMPORTED_MODULE_2__.homePage.displayProject(defaultProject);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUhvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDOztBQUU3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFRO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1QsQ0FBQzs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7OztBQ2pDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QixrQkFBa0IsWUFBWTtBQUM5QixrQkFBa0IsUUFBUTtBQUMxQixrQkFBa0IsU0FBUztBQUMzQixrQkFBa0IsTUFBTTtBQUN4Qjs7QUFFQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7O0FDdkJwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFaUI7Ozs7Ozs7Ozs7Ozs7OztBQ2xCakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrQjs7Ozs7OztVQ2hDbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDSDtBQUNNO0FBQ0c7Ozs7QUFJN0MscUJBQXFCLGlEQUFPO0FBQzVCOztBQUVBLGVBQWUsb0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXVCIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZG9QYWdlIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9JdGVtXCI7XG5cbi8vIEludGVyYWN0cyB3aXRoIHRoZSBET00gdG8gZGlzcGxheSByZWxldmFudCBlbGVtZW50c1xuXG5jb25zdCBob21lUGFnZSA9ICgoKSA9PiB7XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuXHRjb25zdCBkaXNwbGF5UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG5cdFx0Y29uc29sZS5sb2cocHJvamVjdCk7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCB0b2RvSXRlbSA9IHByb2plY3QucHJvamVjdExpc3RbaV07XG5cdFx0XHRjb25zdCB0b2RvVGl0bGUgPSB0b2RvSXRlbS50aXRsZTtcblx0XHRcdGNvbnN0IHRvZG9EdWVEYXRlID0gdG9kb0l0ZW0uZHVlRGF0ZTtcblxuXHRcdFx0Y29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdGJ0bi5pbm5lckhUTUwgPSBcIkNsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSFcIjtcblxuXHRcdFx0YnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRvZG9QYWdlKHRvZG9JdGVtKTtcblx0XHRcdH07XG5cdFx0XHRlbGVtZW50LmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EdWVEYXRlLCBidG4pO1xuXHRcdFx0XG5cdFx0fVxuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH07XG5cblx0cmV0dXJuIHsgZGlzcGxheVByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGhvbWVQYWdlIH07XG4iLCIvLyBEaXNwbGF5IGRlc3RhaWxlZCBpbmZvcm1hdGlvbiBmb3IgdG9kbyBpdGVtXG5cbmNvbnN0IHRvZG9QYWdlID0gKHRvZG8pID0+IHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cdGxldCB0aXRsZSA9IHRvZG8udGl0bGU7XG5cdGxldCBkZXNjcmlwdGlvbiA9IHRvZG8uZGVzY3JpcHRpb247XG5cdGxldCBkdWVEYXRlID0gdG9kby5kdWVEYXRlO1xuXHRsZXQgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuXHRsZXQgbm90ZXMgPSB0b2RvLm5vdGVzO1xuXG5cdGNvbnRlbnQuaW5uZXJIVE1MICs9IGA8dWw+XG4gICAgICAgICAgICA8bGk+JHt0aXRsZX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7ZGVzY3JpcHRpb259PC9saT5cbiAgICAgICAgICAgIDxsaT4ke2R1ZURhdGV9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke3ByaW9yaXR5fTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtub3Rlc308L2xpPlxuICAgICAgICA8L3VsPmA7XG5cblx0cmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyB0b2RvUGFnZSB9O1xuIiwiLy8gUHJvamVjdHMgd2hlcmUgdG9kbyBsaXN0IGl0ZW1zIGNhbiBiZSBrZXB0LiBQcm9qZWN0cyBjYW4gYmUgY3JlYXRlZCBhbmQgZGVsZXRlZC4gRGVmYXVsdCBwcm9qZWN0IGNyZWF0ZWQgaW5pdGlhbGx5IGFuZCB0b2RvIGl0ZW1zIGFyZSBhdXRvIGFkZGVkXG5cbmNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuXHRjb25zdCBhZGRUb2RvSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdCk7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKGl0ZW0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZVRvZG9JdGVtID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0Ly8gcmVtb3ZlIHRvZG8gaXRlbSAodXNlIGxvY2FsIHN0b3JhZ2Ugd2l0aCBpbmRleCBvZilcblx0XHR0aGlzLnByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdH07XG5cblx0cmV0dXJuIHsgbmFtZSwgcHJvamVjdExpc3QsIGFkZFRvZG9JdGVtLCByZW1vdmVUb2RvSXRlbSB9O1xufTtcblxuZXhwb3J0IHtwcm9qZWN0fTtcbiIsIi8vIENyZWF0ZXMgdGhlIHRvZG8gaXRlbXMgdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLlxuXG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuXHQvLyB0b2RvIEl0ZW0gY29uc3RydWN0b3JcblxuXHRjb25zdCBlZGl0VGl0bGUgPSBmdW5jdGlvbiAodXBkYXRlZFRpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IHVwZGF0ZWRUaXRsZTtcblx0XHRyZXR1cm4gdGhpcy50aXRsZTtcblx0fTtcblxuXHRjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAodXBkYXRlZERlc2NyaXB0aW9uKSB7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IHVwZGF0ZWREZXNjcmlwdGlvbjtcblx0XHRyZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcblx0fTtcblxuXHRjb25zdCBlZGl0RHVlRGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVkRHVlRGF0ZSkge1xuXHRcdHRoaXMuZHVlRGF0ZSA9IHVwZGF0ZWREdWVEYXRlO1xuXHRcdHJldHVybiB0aGlzLmR1ZURhdGU7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkdWVEYXRlLFxuXHRcdHByaW9yaXR5LFxuXHRcdG5vdGVzLFxuXHRcdGVkaXRUaXRsZSxcblx0XHRlZGl0RGVzY3JpcHRpb24sXG5cdFx0ZWRpdER1ZURhdGUsXG5cdH07XG59O1xuXG5leHBvcnQge3RvZG9JdGVtfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQge2hvbWVQYWdlfSBmcm9tIFwiLi9kaXNwbGF5SG9tZVBhZ2VcIlxuaW1wb3J0IHsgdG9kb1BhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5VG9kb0l0ZW1cIjtcblxuXG5cbmxldCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIik7XG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnN0IHBvdGF0byA9IHRvZG9JdGVtKFxuXHRcIlBvdGF0byBUaXRsZVwiLFxuXHRcInRoaXMgaXMgZGVzY3JpcHRpb25cIixcblx0XCIxMi8wNC8yMDI1XCIsXG5cdFwiVG9wIHByaW9yaXR5XCIsXG5cdFwiUmFuZG9tIE5vdGVzXCIsXG5cdFwiQ29tcGxldGVcIlxuKTtcblxuY29uc3QgcG90YXRvMiA9IHRvZG9JdGVtKFxuXHRcIlBvdGF0byBUaXRsZVwiLFxuXHRcInRoaXMgaXMgZGVzY3JpcHRpb25cIixcblx0XCIxMi8wNC8yMDI1XCIsXG5cdFwiVG9wIHByaW9yaXR5XCIsXG5cdFwiUmFuZG9tIE5vdGVzXCIsXG5cdFwiQ29tcGxldGVcIlxuKTtcblxuY29uc29sZS5sb2cocG90YXRvKTtcbnBvdGF0by5lZGl0VGl0bGUoXCJuZXdQb3RhdG9UaXRsZVwiKTtcbmNvbnNvbGUubG9nKHBvdGF0by50aXRsZSk7XG5cbmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHBvdGF0byk7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbShwb3RhdG8yKTtcbmNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxuaG9tZVBhZ2UuZGlzcGxheVByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=