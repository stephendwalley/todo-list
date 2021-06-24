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
				homePage.displayProject(project);
			};


			element.append(todoTitle, todoDueDate, moreInfoBtn, removeTodoBtn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUhvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNYOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFRO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixFQUFFO0FBQ2hDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNULENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7QUMzQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE1BQU07QUFDeEIsa0JBQWtCLFlBQVk7QUFDOUIsa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLFNBQVM7QUFDM0Isa0JBQWtCLE1BQU07QUFDeEI7O0FBRUE7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7O0FDcEJuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9COzs7Ozs7O1VDaENwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNIO0FBQ1M7QUFDQTs7QUFFN0MscUJBQXFCLGlEQUFPO0FBQzVCOztBQUVBLGVBQWUsb0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXVCIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZG9QYWdlIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9JdGVtXCI7XG5pbXBvcnQge3Byb2plY3R9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuLy8gSW50ZXJhY3RzIHdpdGggdGhlIERPTSB0byBkaXNwbGF5IHJlbGV2YW50IGVsZW1lbnRzXG5cbmNvbnN0IGhvbWVQYWdlID0gKCgpID0+IHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cdGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcblx0XHRjb25zb2xlLmxvZyhwcm9qZWN0KTtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHRvZG9JdGVtID0gcHJvamVjdC5wcm9qZWN0TGlzdFtpXTtcblx0XHRcdGNvbnN0IHRvZG9UaXRsZSA9IHRvZG9JdGVtLnRpdGxlO1xuXHRcdFx0Y29uc3QgdG9kb0R1ZURhdGUgPSB0b2RvSXRlbS5kdWVEYXRlO1xuXG5cdFx0XHRjb25zdCBtb3JlSW5mb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRtb3JlSW5mb0J0bi5pbm5lckhUTUwgPSBcIk1vcmUgSW5mb3JtYXRpb25cIjtcblxuXHRcdFx0bW9yZUluZm9CdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dG9kb1BhZ2UodG9kb0l0ZW0pO1xuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgcmVtb3ZlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRyZW1vdmVUb2RvQnRuLmlubmVySFRNTCA9IFwiUmVtb3ZlIFRvZG9cIjtcblxuXHRcdFx0cmVtb3ZlVG9kb0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRwcm9qZWN0LnJlbW92ZVRvZG9JdGVtKGAke2l9YCk7XG5cdFx0XHRcdGhvbWVQYWdlLmRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuXHRcdFx0fTtcblxuXG5cdFx0XHRlbGVtZW50LmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EdWVEYXRlLCBtb3JlSW5mb0J0biwgcmVtb3ZlVG9kb0J0bik7XG5cdFx0fVxuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH07XG5cblx0cmV0dXJuIHsgZGlzcGxheVByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGhvbWVQYWdlIH07XG4iLCIvLyBEaXNwbGF5IGRlc3RhaWxlZCBpbmZvcm1hdGlvbiBmb3IgdG9kbyBpdGVtXG5cbmNvbnN0IHRvZG9QYWdlID0gKHRvZG8pID0+IHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cdGxldCB0aXRsZSA9IHRvZG8udGl0bGU7XG5cdGxldCBkZXNjcmlwdGlvbiA9IHRvZG8uZGVzY3JpcHRpb247XG5cdGxldCBkdWVEYXRlID0gdG9kby5kdWVEYXRlO1xuXHRsZXQgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuXHRsZXQgbm90ZXMgPSB0b2RvLm5vdGVzO1xuXG5cdGNvbnRlbnQuaW5uZXJIVE1MICs9IGA8dWw+XG4gICAgICAgICAgICA8bGk+JHt0aXRsZX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7ZGVzY3JpcHRpb259PC9saT5cbiAgICAgICAgICAgIDxsaT4ke2R1ZURhdGV9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke3ByaW9yaXR5fTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtub3Rlc308L2xpPlxuICAgICAgICA8L3VsPmA7XG5cblx0cmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyB0b2RvUGFnZSB9O1xuIiwiLy8gUHJvamVjdHMgd2hlcmUgdG9kbyBsaXN0IGl0ZW1zIGNhbiBiZSBrZXB0LiBQcm9qZWN0cyBjYW4gYmUgY3JlYXRlZCBhbmQgZGVsZXRlZC4gRGVmYXVsdCBwcm9qZWN0IGNyZWF0ZWQgaW5pdGlhbGx5IGFuZCB0b2RvIGl0ZW1zIGFyZSBhdXRvIGFkZGVkXG5cbmNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuXHRjb25zdCBhZGRUb2RvSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdCk7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKGl0ZW0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZVRvZG9JdGVtID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0Y29uc29sZS5sb2coXCJyZW1vdmVkIHRvZG8gaXRlbSBzdWNjZXNzIHlheSFcIilcblx0XHRjb25zb2xlLmxvZyhgJHt0aGlzLnByb2plY3RMaXN0W2luZGV4XX1gKVxuXHRcdC8vIHJlbW92ZSB0b2RvIGl0ZW0gKHVzZSBsb2NhbCBzdG9yYWdlIHdpdGggaW5kZXggb2YpXG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9O1xuXG5cdHJldHVybiB7IG5hbWUsIHByb2plY3RMaXN0LCBhZGRUb2RvSXRlbSwgcmVtb3ZlVG9kb0l0ZW0gfTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3QgfTtcbiIsIi8vIENyZWF0ZXMgdGhlIHRvZG8gaXRlbXMgdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLlxuXG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuXHQvLyB0b2RvIEl0ZW0gY29uc3RydWN0b3JcblxuXHRjb25zdCBlZGl0VGl0bGUgPSBmdW5jdGlvbiAodXBkYXRlZFRpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IHVwZGF0ZWRUaXRsZTtcblx0XHRyZXR1cm4gdGhpcy50aXRsZTtcblx0fTtcblxuXHRjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAodXBkYXRlZERlc2NyaXB0aW9uKSB7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IHVwZGF0ZWREZXNjcmlwdGlvbjtcblx0XHRyZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcblx0fTtcblxuXHRjb25zdCBlZGl0RHVlRGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVkRHVlRGF0ZSkge1xuXHRcdHRoaXMuZHVlRGF0ZSA9IHVwZGF0ZWREdWVEYXRlO1xuXHRcdHJldHVybiB0aGlzLmR1ZURhdGU7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkdWVEYXRlLFxuXHRcdHByaW9yaXR5LFxuXHRcdG5vdGVzLFxuXHRcdGVkaXRUaXRsZSxcblx0XHRlZGl0RGVzY3JpcHRpb24sXG5cdFx0ZWRpdER1ZURhdGUsXG5cdH07XG59O1xuXG5leHBvcnQgeyB0b2RvSXRlbSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vZGlzcGxheUhvbWVQYWdlXCI7XG5pbXBvcnQgeyB0b2RvUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvSXRlbVwiO1xuXG5sZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xuY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuXG5jb25zdCBwb3RhdG8gPSB0b2RvSXRlbShcblx0XCJQb3RhdG8gVGl0bGVcIixcblx0XCJ0aGlzIGlzIGRlc2NyaXB0aW9uXCIsXG5cdFwiMTIvMDQvMjAyNVwiLFxuXHRcIlRvcCBwcmlvcml0eVwiLFxuXHRcIlJhbmRvbSBOb3Rlc1wiLFxuXHRcIkNvbXBsZXRlXCJcbik7XG5cbmNvbnN0IHBvdGF0bzIgPSB0b2RvSXRlbShcblx0XCJQb3RhdG8gVGl0bGVcIixcblx0XCJ0aGlzIGlzIGRlc2NyaXB0aW9uXCIsXG5cdFwiMTIvMDQvMjAyNVwiLFxuXHRcIlRvcCBwcmlvcml0eVwiLFxuXHRcIlJhbmRvbSBOb3Rlc1wiLFxuXHRcIkNvbXBsZXRlXCJcbik7XG5cbmNvbnNvbGUubG9nKHBvdGF0byk7XG5wb3RhdG8uZWRpdFRpdGxlKFwibmV3UG90YXRvVGl0bGVcIik7XG5jb25zb2xlLmxvZyhwb3RhdG8udGl0bGUpO1xuXG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbShwb3RhdG8pO1xuZGVmYXVsdFByb2plY3QuYWRkVG9kb0l0ZW0ocG90YXRvMik7XG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbmhvbWVQYWdlLmRpc3BsYXlQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=