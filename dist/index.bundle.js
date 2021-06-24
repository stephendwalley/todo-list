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
/* harmony export */   "homePage": () => (/* binding */ homePage),
/* harmony export */   "inputTask": () => (/* binding */ inputTask),
/* harmony export */   "inputProject": () => (/* binding */ inputProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");



const homePage = (() => {
	// home page extra information display
	let content = document.createElement("div");
	content.id = "content";
	content.innerHTML = "content html stuff";

	let addTask = document.createElement("button");
	addTask.innerHTML = "Add Task";
	addTask.addEventListener("click", () => {
		// Project add todo item DOM element which then calls the project add todo item event
		inputTask();
		console.log("Project add todo item");
	});

	let addProject = document.createElement("button");
	addProject.innerHTML = "Add Project";
	addProject.addEventListener("click", () => {
		// Calls new DOM event to handle project add which then calls the new project function

		console.log("Create new project");
	});

	content.append(addTask, addProject);
	document.body.appendChild(content);
})();

const inputTask = () => {
	// creates DOM elements which can take inputs for new task which can then call todo item functions
	let content = document.getElementById("content");

	let titleInput = document.createElement("input");
	titleInput.id = "titleInput"
	titleInput.type = "text";
	titleInput.placeholder = "Task name";

	let selectProjectMenu = document.createElement("select");
	selectProjectMenu.id = "selectProjectMenu";
	selectProjectMenu.name = "projectSelected";

	for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList.length; i++) {
		// simplify project list output
		let selectProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList[i];
		console.log(selectProject);

		let option = document.createElement("option");
		option.innerHTML = selectProject.name;

		selectProjectMenu.append(option);
	}

	let addTaskBtn = document.createElement("button");
	addTaskBtn.innerHTML = "Add Task";
	addTaskBtn.addEventListener("click", () => {
		let selectedProjectIndex =
			document.getElementById("selectProjectMenu").selectedIndex;
		let selectedProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList[selectedProjectIndex];

		let todoItemTitle = document.getElementById("titleInput").value

		let newTodoItem = (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.todoItem)(`${todoItemTitle}`)
		selectedProject.addTodoItem(newTodoItem);

		console.log(selectedProjectIndex);
		console.log(selectedProject);

		console.log("adding todo to project");
		console.log(selectedProject);
	});

	content.append(titleInput, selectProjectMenu, addTaskBtn);
};

const inputProject = () => {
	// creates DOM elements which can take inputs for new project to call new project function
};




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


// displays individual projects on page
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
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
// Projects where todo list items can be kept. Projects can be created and deleted. Default project created initially and todo items are auto added

const project = (name) => {
	let projectList = []; // should change to todolist

	const addTodoItem = function (item) {
		console.log(this.projectList);
		this.projectList.push(item);
	};

	const removeTodoItem = function (index) {
		console.log("removed todo item success yay!");
		console.log(`${this.projectList[index]}`);
		// remove todo item (use local storage with index of)
		this.projectList.splice(index, 1);
	};

	return { name, projectList, addTodoItem, removeTodoItem };
};

// Project list of all the projects:

const projectList = ((project) => {
	let projectList = [];

	const addProject = function (project) {
		this.projectList.push(project);
	};

	const getCurrentProject = function () {};

	return { projectList, addProject, getCurrentProject };
})();




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
_project__WEBPACK_IMPORTED_MODULE_1__.projectList.addProject(defaultProject);
console.log(defaultProject);

let secondaryProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)("Secondary Project");
_project__WEBPACK_IMPORTED_MODULE_1__.projectList.addProject(secondaryProject);

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

potato.editTitle("newPotatoTitle");
defaultProject.addTodoItem(potato);
defaultProject.addTodoItem(potato2);
(0,_displayProject__WEBPACK_IMPORTED_MODULE_2__.displayProject)(defaultProject);

console.log(_project__WEBPACK_IMPORTED_MODULE_1__.projectList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUhvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNWOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLEtBQUssb0VBQThCLENBQUM7QUFDcEQ7QUFDQSxzQkFBc0IsNkRBQXVCO0FBQzdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZEQUF1Qjs7QUFFL0M7O0FBRUEsb0JBQW9CLG9EQUFRLElBQUksY0FBYztBQUM5Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUU2Qzs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGdDQUFnQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUcsMERBQVE7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLEVBQUU7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQjs7Ozs7Ozs7Ozs7Ozs7O0FDakMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCLGtCQUFrQixZQUFZO0FBQzlCLGtCQUFrQixRQUFRO0FBQzFCLGtCQUFrQixTQUFTO0FBQzNCLGtCQUFrQixNQUFNO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJwQjs7QUFFQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1QsQ0FBQzs7QUFFK0I7Ozs7Ozs7Ozs7Ozs7OztBQ2xDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvQjs7Ozs7OztVQ2hDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ1U7QUFDQztBQUNMO0FBQ0E7O0FBRTdDLHFCQUFxQixpREFBTztBQUM1Qiw0REFBc0I7QUFDdEI7O0FBRUEsdUJBQXVCLGlEQUFPO0FBQzlCLDREQUFzQjs7QUFFdEIsZUFBZSxvREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isb0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0RBQWM7O0FBRWQsWUFBWSxpREFBVyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5cbmNvbnN0IGhvbWVQYWdlID0gKCgpID0+IHtcblx0Ly8gaG9tZSBwYWdlIGV4dHJhIGluZm9ybWF0aW9uIGRpc3BsYXlcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5cdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJjb250ZW50IGh0bWwgc3R1ZmZcIjtcblxuXHRsZXQgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGFkZFRhc2suaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiO1xuXHRhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Ly8gUHJvamVjdCBhZGQgdG9kbyBpdGVtIERPTSBlbGVtZW50IHdoaWNoIHRoZW4gY2FsbHMgdGhlIHByb2plY3QgYWRkIHRvZG8gaXRlbSBldmVudFxuXHRcdGlucHV0VGFzaygpO1xuXHRcdGNvbnNvbGUubG9nKFwiUHJvamVjdCBhZGQgdG9kbyBpdGVtXCIpO1xuXHR9KTtcblxuXHRsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGFkZFByb2plY3QuaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiO1xuXHRhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Ly8gQ2FsbHMgbmV3IERPTSBldmVudCB0byBoYW5kbGUgcHJvamVjdCBhZGQgd2hpY2ggdGhlbiBjYWxscyB0aGUgbmV3IHByb2plY3QgZnVuY3Rpb25cblxuXHRcdGNvbnNvbGUubG9nKFwiQ3JlYXRlIG5ldyBwcm9qZWN0XCIpO1xuXHR9KTtcblxuXHRjb250ZW50LmFwcGVuZChhZGRUYXNrLCBhZGRQcm9qZWN0KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn0pKCk7XG5cbmNvbnN0IGlucHV0VGFzayA9ICgpID0+IHtcblx0Ly8gY3JlYXRlcyBET00gZWxlbWVudHMgd2hpY2ggY2FuIHRha2UgaW5wdXRzIGZvciBuZXcgdGFzayB3aGljaCBjYW4gdGhlbiBjYWxsIHRvZG8gaXRlbSBmdW5jdGlvbnNcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblx0bGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlSW5wdXRcIlxuXHR0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0dGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCI7XG5cblx0bGV0IHNlbGVjdFByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblx0c2VsZWN0UHJvamVjdE1lbnUuaWQgPSBcInNlbGVjdFByb2plY3RNZW51XCI7XG5cdHNlbGVjdFByb2plY3RNZW51Lm5hbWUgPSBcInByb2plY3RTZWxlY3RlZFwiO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBzaW1wbGlmeSBwcm9qZWN0IGxpc3Qgb3V0cHV0XG5cdFx0bGV0IHNlbGVjdFByb2plY3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdFtpXTtcblx0XHRjb25zb2xlLmxvZyhzZWxlY3RQcm9qZWN0KTtcblxuXHRcdGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdG9wdGlvbi5pbm5lckhUTUwgPSBzZWxlY3RQcm9qZWN0Lm5hbWU7XG5cblx0XHRzZWxlY3RQcm9qZWN0TWVudS5hcHBlbmQob3B0aW9uKTtcblx0fVxuXG5cdGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG5cdGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRsZXQgc2VsZWN0ZWRQcm9qZWN0SW5kZXggPVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RQcm9qZWN0TWVudVwiKS5zZWxlY3RlZEluZGV4O1xuXHRcdGxldCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdFtzZWxlY3RlZFByb2plY3RJbmRleF07XG5cblx0XHRsZXQgdG9kb0l0ZW1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZVxuXG5cdFx0bGV0IG5ld1RvZG9JdGVtID0gdG9kb0l0ZW0oYCR7dG9kb0l0ZW1UaXRsZX1gKVxuXHRcdHNlbGVjdGVkUHJvamVjdC5hZGRUb2RvSXRlbShuZXdUb2RvSXRlbSk7XG5cblx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3RJbmRleCk7XG5cdFx0Y29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcblxuXHRcdGNvbnNvbGUubG9nKFwiYWRkaW5nIHRvZG8gdG8gcHJvamVjdFwiKTtcblx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpO1xuXHR9KTtcblxuXHRjb250ZW50LmFwcGVuZCh0aXRsZUlucHV0LCBzZWxlY3RQcm9qZWN0TWVudSwgYWRkVGFza0J0bik7XG59O1xuXG5jb25zdCBpbnB1dFByb2plY3QgPSAoKSA9PiB7XG5cdC8vIGNyZWF0ZXMgRE9NIGVsZW1lbnRzIHdoaWNoIGNhbiB0YWtlIGlucHV0cyBmb3IgbmV3IHByb2plY3QgdG8gY2FsbCBuZXcgcHJvamVjdCBmdW5jdGlvblxufTtcblxuZXhwb3J0IHsgaG9tZVBhZ2UsIGlucHV0VGFzaywgaW5wdXRQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyB0b2RvUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvSXRlbVwiO1xuXG4vLyBkaXNwbGF5cyBpbmRpdmlkdWFsIHByb2plY3RzIG9uIHBhZ2VcbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcblx0Y29uc29sZS5sb2cocHJvamVjdCk7XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB0b2RvSXRlbSA9IHByb2plY3QucHJvamVjdExpc3RbaV07XG5cdFx0Y29uc3QgdG9kb1RpdGxlID0gdG9kb0l0ZW0udGl0bGU7XG5cdFx0Y29uc3QgdG9kb0R1ZURhdGUgPSB0b2RvSXRlbS5kdWVEYXRlO1xuXG5cdFx0Y29uc3QgbW9yZUluZm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdG1vcmVJbmZvQnRuLmlubmVySFRNTCA9IFwiTW9yZSBJbmZvcm1hdGlvblwiO1xuXG5cdFx0bW9yZUluZm9CdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRvZG9QYWdlKHRvZG9JdGVtKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVtb3ZlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0cmVtb3ZlVG9kb0J0bi5pbm5lckhUTUwgPSBcIlJlbW92ZSBUb2RvXCI7XG5cblx0XHRyZW1vdmVUb2RvQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRwcm9qZWN0LnJlbW92ZVRvZG9JdGVtKGAke2l9YCk7XG5cdFx0XHRkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcblx0XHR9O1xuXG5cdFx0ZWxlbWVudC5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRHVlRGF0ZSwgbW9yZUluZm9CdG4sIHJlbW92ZVRvZG9CdG4pO1xuXHR9XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3QgfTtcbiIsIi8vIERpc3BsYXkgZGVzdGFpbGVkIGluZm9ybWF0aW9uIGZvciB0b2RvIGl0ZW1cblxuY29uc3QgdG9kb1BhZ2UgPSAodG9kbykgPT4ge1xuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cblx0bGV0IHRpdGxlID0gdG9kby50aXRsZTtcblx0bGV0IGRlc2NyaXB0aW9uID0gdG9kby5kZXNjcmlwdGlvbjtcblx0bGV0IGR1ZURhdGUgPSB0b2RvLmR1ZURhdGU7XG5cdGxldCBwcmlvcml0eSA9IHRvZG8ucHJpb3JpdHk7XG5cdGxldCBub3RlcyA9IHRvZG8ubm90ZXM7XG5cblx0Y29udGVudC5pbm5lckhUTUwgKz0gYDx1bD5cbiAgICAgICAgICAgIDxsaT4ke3RpdGxlfTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtkZXNjcmlwdGlvbn08L2xpPlxuICAgICAgICAgICAgPGxpPiR7ZHVlRGF0ZX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7cHJpb3JpdHl9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke25vdGVzfTwvbGk+XG4gICAgICAgIDwvdWw+YDtcblxuXHRyZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7IHRvZG9QYWdlIH07XG4iLCIvLyBQcm9qZWN0cyB3aGVyZSB0b2RvIGxpc3QgaXRlbXMgY2FuIGJlIGtlcHQuIFByb2plY3RzIGNhbiBiZSBjcmVhdGVkIGFuZCBkZWxldGVkLiBEZWZhdWx0IHByb2plY3QgY3JlYXRlZCBpbml0aWFsbHkgYW5kIHRvZG8gaXRlbXMgYXJlIGF1dG8gYWRkZWRcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG5cdGxldCBwcm9qZWN0TGlzdCA9IFtdOyAvLyBzaG91bGQgY2hhbmdlIHRvIHRvZG9saXN0XG5cblx0Y29uc3QgYWRkVG9kb0l0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvamVjdExpc3QpO1xuXHRcdHRoaXMucHJvamVjdExpc3QucHVzaChpdGVtKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVUb2RvSXRlbSA9IGZ1bmN0aW9uIChpbmRleCkge1xuXHRcdGNvbnNvbGUubG9nKFwicmVtb3ZlZCB0b2RvIGl0ZW0gc3VjY2VzcyB5YXkhXCIpO1xuXHRcdGNvbnNvbGUubG9nKGAke3RoaXMucHJvamVjdExpc3RbaW5kZXhdfWApO1xuXHRcdC8vIHJlbW92ZSB0b2RvIGl0ZW0gKHVzZSBsb2NhbCBzdG9yYWdlIHdpdGggaW5kZXggb2YpXG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9O1xuXG5cdHJldHVybiB7IG5hbWUsIHByb2plY3RMaXN0LCBhZGRUb2RvSXRlbSwgcmVtb3ZlVG9kb0l0ZW0gfTtcbn07XG5cbi8vIFByb2plY3QgbGlzdCBvZiBhbGwgdGhlIHByb2plY3RzOlxuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgocHJvamVjdCkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuXHRjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcblx0XHR0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG5cdH07XG5cblx0Y29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSBmdW5jdGlvbiAoKSB7fTtcblxuXHRyZXR1cm4geyBwcm9qZWN0TGlzdCwgYWRkUHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH07XG4iLCIvLyBDcmVhdGVzIHRoZSB0b2RvIGl0ZW1zIHVzaW5nIGEgZmFjdG9yeSBmdW5jdGlvbi5cblxuY29uc3QgdG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcblx0Ly8gdG9kbyBJdGVtIGNvbnN0cnVjdG9yXG5cblx0Y29uc3QgZWRpdFRpdGxlID0gZnVuY3Rpb24gKHVwZGF0ZWRUaXRsZSkge1xuXHRcdHRoaXMudGl0bGUgPSB1cGRhdGVkVGl0bGU7XG5cdFx0cmV0dXJuIHRoaXMudGl0bGU7XG5cdH07XG5cblx0Y29uc3QgZWRpdERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKHVwZGF0ZWREZXNjcmlwdGlvbikge1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSB1cGRhdGVkRGVzY3JpcHRpb247XG5cdFx0cmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG5cdH07XG5cblx0Y29uc3QgZWRpdER1ZURhdGUgPSBmdW5jdGlvbiAodXBkYXRlZER1ZURhdGUpIHtcblx0XHR0aGlzLmR1ZURhdGUgPSB1cGRhdGVkRHVlRGF0ZTtcblx0XHRyZXR1cm4gdGhpcy5kdWVEYXRlO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0dGl0bGUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZHVlRGF0ZSxcblx0XHRwcmlvcml0eSxcblx0XHRub3Rlcyxcblx0XHRlZGl0VGl0bGUsXG5cdFx0ZWRpdERlc2NyaXB0aW9uLFxuXHRcdGVkaXREdWVEYXRlLFxuXHR9O1xufTtcblxuZXhwb3J0IHsgdG9kb0l0ZW0gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcbmltcG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5SG9tZVBhZ2VcIjtcbmltcG9ydCB7IHRvZG9QYWdlIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9JdGVtXCI7XG5cbmxldCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIik7XG5wcm9qZWN0TGlzdC5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbmNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxubGV0IHNlY29uZGFyeVByb2plY3QgPSBwcm9qZWN0KFwiU2Vjb25kYXJ5IFByb2plY3RcIik7XG5wcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHNlY29uZGFyeVByb2plY3QpO1xuXG5jb25zdCBwb3RhdG8gPSB0b2RvSXRlbShcblx0XCJQb3RhdG8gVGl0bGVcIixcblx0XCJ0aGlzIGlzIGRlc2NyaXB0aW9uXCIsXG5cdFwiMTIvMDQvMjAyNVwiLFxuXHRcIlRvcCBwcmlvcml0eVwiLFxuXHRcIlJhbmRvbSBOb3Rlc1wiLFxuXHRcIkNvbXBsZXRlXCJcbik7XG5cbmNvbnN0IHBvdGF0bzIgPSB0b2RvSXRlbShcblx0XCJQb3RhdG8gVGl0bGVcIixcblx0XCJ0aGlzIGlzIGRlc2NyaXB0aW9uXCIsXG5cdFwiMTIvMDQvMjAyNVwiLFxuXHRcIlRvcCBwcmlvcml0eVwiLFxuXHRcIlJhbmRvbSBOb3Rlc1wiLFxuXHRcIkNvbXBsZXRlXCJcbik7XG5cbnBvdGF0by5lZGl0VGl0bGUoXCJuZXdQb3RhdG9UaXRsZVwiKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHBvdGF0byk7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbShwb3RhdG8yKTtcbmRpc3BsYXlQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcblxuY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==