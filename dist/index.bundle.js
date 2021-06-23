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

		for (let i = 0; i < project.projectList.length; i++) {
			let element = project.projectList[i];

			let button = document.createElement("button");
			button.innerHTML = "Info"
			button.onclick = function () {
				_displayTodoItem__WEBPACK_IMPORTED_MODULE_0__.todoPage.displayTodoItem(element)
			}
			content.appendChild(button);

			
			content.innerHTML += `<li>${element.title}</li>
			<button onclick = "todoPage.displayTodoItem"></button>
			<button id = "${i}" > More Information </button>`;
		}
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
const todoDetails = function(){}


const todoPage = (() => {
	let content = document.createElement("div");
    document.body.appendChild(content);

	const displayTodoItem = function (todo) {
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
	};

	return { displayTodoItem };
})();




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

	return { name, projectList, addTodoItem };
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






let defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)("Default Project")
console.log(defaultProject)


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


defaultProject.addTodoItem(potato)
defaultProject.addTodoItem(potato2)
console.log(defaultProject)

_displayHomePage__WEBPACK_IMPORTED_MODULE_2__.homePage.displayProject(defaultProject);

_displayTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoPage.displayTodoItem(defaultProject.projectList[0])


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUhvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDOztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQXdCO0FBQzVCO0FBQ0E7OztBQUdBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0EsbUJBQW1CLEVBQUU7QUFDckI7QUFDQTs7QUFFQSxTQUFTO0FBQ1QsQ0FBQzs7O0FBR2tCOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ25CO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QixrQkFBa0IsWUFBWTtBQUM5QixrQkFBa0IsUUFBUTtBQUMxQixrQkFBa0IsU0FBUztBQUMzQixrQkFBa0IsTUFBTTtBQUN4QjtBQUNBOztBQUVBLFNBQVM7QUFDVCxDQUFDOztBQUVpQjs7Ozs7Ozs7Ozs7Ozs7O0FDM0JsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFaUI7Ozs7Ozs7Ozs7Ozs7OztBQ2xCakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrQjs7Ozs7OztVQ2hDbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDSDtBQUNTO0FBQ0E7OztBQUcxQyxxQkFBcUIsaURBQU87QUFDNUI7OztBQUdBLGVBQWUsb0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXVCOztBQUV2QixzRUFBd0IiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0b2RvUGFnZX0gZnJvbSAnLi9kaXNwbGF5VG9kb0l0ZW0nXG5cbi8vIEludGVyYWN0cyB3aXRoIHRoZSBET00gdG8gZGlzcGxheSByZWxldmFudCBlbGVtZW50c1xuXG5jb25zdCBob21lUGFnZSA9ICgoKSA9PiB7XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblx0XG5cdGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcblx0XHRjb25zb2xlLmxvZyhwcm9qZWN0KTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGVsZW1lbnQgPSBwcm9qZWN0LnByb2plY3RMaXN0W2ldO1xuXG5cdFx0XHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdGJ1dHRvbi5pbm5lckhUTUwgPSBcIkluZm9cIlxuXHRcdFx0YnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRvZG9QYWdlLmRpc3BsYXlUb2RvSXRlbShlbGVtZW50KVxuXHRcdFx0fVxuXHRcdFx0Y29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cdFx0XHRcblx0XHRcdGNvbnRlbnQuaW5uZXJIVE1MICs9IGA8bGk+JHtlbGVtZW50LnRpdGxlfTwvbGk+XG5cdFx0XHQ8YnV0dG9uIG9uY2xpY2sgPSBcInRvZG9QYWdlLmRpc3BsYXlUb2RvSXRlbVwiPjwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvbiBpZCA9IFwiJHtpfVwiID4gTW9yZSBJbmZvcm1hdGlvbiA8L2J1dHRvbj5gO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4geyBkaXNwbGF5UHJvamVjdCB9O1xufSkoKTtcblxuXG5leHBvcnQgeyBob21lUGFnZX07XG4iLCIvLyBEaXNwbGF5IGRlc3RhaWxlZCBpbmZvcm1hdGlvbiBmb3IgdG9kbyBpdGVtXG5jb25zdCB0b2RvRGV0YWlscyA9IGZ1bmN0aW9uKCl7fVxuXG5cbmNvbnN0IHRvZG9QYWdlID0gKCgpID0+IHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cblx0Y29uc3QgZGlzcGxheVRvZG9JdGVtID0gZnVuY3Rpb24gKHRvZG8pIHtcblx0XHRsZXQgdGl0bGUgPSB0b2RvLnRpdGxlO1xuXHRcdGxldCBkZXNjcmlwdGlvbiA9IHRvZG8uZGVzY3JpcHRpb247XG5cdFx0bGV0IGR1ZURhdGUgPSB0b2RvLmR1ZURhdGU7XG5cdFx0bGV0IHByaW9yaXR5ID0gdG9kby5wcmlvcml0eTtcblx0XHRsZXQgbm90ZXMgPSB0b2RvLm5vdGVzO1xuXG5cdFx0Y29udGVudC5pbm5lckhUTUwgKz0gYDx1bD5cbiAgICAgICAgICAgIDxsaT4ke3RpdGxlfTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtkZXNjcmlwdGlvbn08L2xpPlxuICAgICAgICAgICAgPGxpPiR7ZHVlRGF0ZX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7cHJpb3JpdHl9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke25vdGVzfTwvbGk+XG4gICAgICAgIDwvdWw+YDtcblx0fTtcblxuXHRyZXR1cm4geyBkaXNwbGF5VG9kb0l0ZW0gfTtcbn0pKCk7XG5cbmV4cG9ydCB7dG9kb1BhZ2V9O1xuIiwiLy8gUHJvamVjdHMgd2hlcmUgdG9kbyBsaXN0IGl0ZW1zIGNhbiBiZSBrZXB0LiBQcm9qZWN0cyBjYW4gYmUgY3JlYXRlZCBhbmQgZGVsZXRlZC4gRGVmYXVsdCBwcm9qZWN0IGNyZWF0ZWQgaW5pdGlhbGx5IGFuZCB0b2RvIGl0ZW1zIGFyZSBhdXRvIGFkZGVkXG5cbmNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuXHRjb25zdCBhZGRUb2RvSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdCk7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKGl0ZW0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZVRvZG9JdGVtID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0Ly8gcmVtb3ZlIHRvZG8gaXRlbSAodXNlIGxvY2FsIHN0b3JhZ2Ugd2l0aCBpbmRleCBvZilcblx0XHR0aGlzLnByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdH07XG5cblx0cmV0dXJuIHsgbmFtZSwgcHJvamVjdExpc3QsIGFkZFRvZG9JdGVtIH07XG59O1xuXG5leHBvcnQge3Byb2plY3R9O1xuIiwiLy8gQ3JlYXRlcyB0aGUgdG9kbyBpdGVtcyB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24uXG5cbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG5cdC8vIHRvZG8gSXRlbSBjb25zdHJ1Y3RvclxuXG5cdGNvbnN0IGVkaXRUaXRsZSA9IGZ1bmN0aW9uICh1cGRhdGVkVGl0bGUpIHtcblx0XHR0aGlzLnRpdGxlID0gdXBkYXRlZFRpdGxlO1xuXHRcdHJldHVybiB0aGlzLnRpdGxlO1xuXHR9O1xuXG5cdGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICh1cGRhdGVkRGVzY3JpcHRpb24pIHtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gdXBkYXRlZERlc2NyaXB0aW9uO1xuXHRcdHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuXHR9O1xuXG5cdGNvbnN0IGVkaXREdWVEYXRlID0gZnVuY3Rpb24gKHVwZGF0ZWREdWVEYXRlKSB7XG5cdFx0dGhpcy5kdWVEYXRlID0gdXBkYXRlZER1ZURhdGU7XG5cdFx0cmV0dXJuIHRoaXMuZHVlRGF0ZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZURhdGUsXG5cdFx0cHJpb3JpdHksXG5cdFx0bm90ZXMsXG5cdFx0ZWRpdFRpdGxlLFxuXHRcdGVkaXREZXNjcmlwdGlvbixcblx0XHRlZGl0RHVlRGF0ZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7dG9kb0l0ZW19O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3RvZG9JdGVtfSBmcm9tIFwiLi90b2RvSXRlbXNcIlxuaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCJcbmltcG9ydCB7aG9tZVBhZ2V9IGZyb20gXCIuL2Rpc3BsYXlIb21lUGFnZVwiXG5pbXBvcnQge3RvZG9QYWdlfSBmcm9tIFwiLi9kaXNwbGF5VG9kb0l0ZW1cIlxuXG5cbmxldCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIilcbmNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KVxuXG5cbmNvbnN0IHBvdGF0byA9IHRvZG9JdGVtKFxuXHRcIlBvdGF0byBUaXRsZVwiLFxuXHRcInRoaXMgaXMgZGVzY3JpcHRpb25cIixcblx0XCIxMi8wNC8yMDI1XCIsXG5cdFwiVG9wIHByaW9yaXR5XCIsXG5cdFwiUmFuZG9tIE5vdGVzXCIsXG5cdFwiQ29tcGxldGVcIlxuKTtcblxuY29uc3QgcG90YXRvMiA9IHRvZG9JdGVtKFxuXHRcIlBvdGF0byBUaXRsZVwiLFxuXHRcInRoaXMgaXMgZGVzY3JpcHRpb25cIixcblx0XCIxMi8wNC8yMDI1XCIsXG5cdFwiVG9wIHByaW9yaXR5XCIsXG5cdFwiUmFuZG9tIE5vdGVzXCIsXG5cdFwiQ29tcGxldGVcIlxuKTtcblxuXG5cbmNvbnNvbGUubG9nKHBvdGF0byk7XG5wb3RhdG8uZWRpdFRpdGxlKFwibmV3UG90YXRvVGl0bGVcIik7XG5jb25zb2xlLmxvZyhwb3RhdG8udGl0bGUpO1xuXG5cbmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHBvdGF0bylcbmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHBvdGF0bzIpXG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdClcblxuaG9tZVBhZ2UuZGlzcGxheVByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuXG50b2RvUGFnZS5kaXNwbGF5VG9kb0l0ZW0oZGVmYXVsdFByb2plY3QucHJvamVjdExpc3RbMF0pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=