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
		inputProject();
		console.log("Create new project");
	});

	content.append(addTask, addProject);
	document.body.appendChild(content);
})();

const inputTask = () => {
	// creates DOM elements which can take inputs for new task which can then call todo item functions
	let content = document.getElementById("content");

	let titleInput = document.createElement("input");
	titleInput.id = "titleInput";
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

		let todoItemTitle = document.getElementById("titleInput").value;

		let newTodoItem = (0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.todoItem)(`${todoItemTitle}`);
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
	let content = document.getElementById("content");

	let projectTitleInput = document.createElement("input");
	projectTitleInput.id = "projectTitleInput";
	projectTitleInput.type = "text";
	projectTitleInput.placeholder = "New Project Name";


	let addProjectBtn = document.createElement("button");
	addProjectBtn.innerHTML = "Create New Project";
	addProjectBtn.addEventListener("click", () => {
		console.log(projectTitleInput.value)
		let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(`${projectTitleInput.value}`)
		console.log(newProject)
		_project__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(newProject);
		console.log(_project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList)
		return newProject;
	});

	content.append(projectTitleInput, addProjectBtn);
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

const projectList = (() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUhvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNWOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixLQUFLLG9FQUE4QixDQUFDO0FBQ3BEO0FBQ0Esc0JBQXNCLDZEQUF1QjtBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2REFBdUI7O0FBRS9DOztBQUVBLG9CQUFvQixvREFBUSxJQUFJLGNBQWM7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQU8sSUFBSSx3QkFBd0I7QUFDdEQ7QUFDQSxFQUFFLDREQUFzQjtBQUN4QixjQUFjLDZEQUF1QjtBQUNyQztBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixnQ0FBZ0M7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLDBEQUFRO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixFQUFFO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEI7Ozs7Ozs7Ozs7Ozs7OztBQ2pDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QixrQkFBa0IsWUFBWTtBQUM5QixrQkFBa0IsUUFBUTtBQUMxQixrQkFBa0IsU0FBUztBQUMzQixrQkFBa0IsTUFBTTtBQUN4Qjs7QUFFQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCcEI7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNULENBQUM7O0FBRStCOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7VUNoQ3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNVO0FBQ0M7QUFDTDtBQUNBOztBQUU3QyxxQkFBcUIsaURBQU87QUFDNUIsNERBQXNCO0FBQ3RCOztBQUVBLHVCQUF1QixpREFBTztBQUM5Qiw0REFBc0I7O0FBRXRCLGVBQWUsb0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtEQUFjOztBQUVkLFlBQVksaURBQVciLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuXG5jb25zdCBob21lUGFnZSA9ICgoKSA9PiB7XG5cdC8vIGhvbWUgcGFnZSBleHRyYSBpbmZvcm1hdGlvbiBkaXNwbGF5XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXHRjb250ZW50LmlubmVySFRNTCA9IFwiY29udGVudCBodG1sIHN0dWZmXCI7XG5cblx0bGV0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRhZGRUYXNrLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcblx0YWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdC8vIFByb2plY3QgYWRkIHRvZG8gaXRlbSBET00gZWxlbWVudCB3aGljaCB0aGVuIGNhbGxzIHRoZSBwcm9qZWN0IGFkZCB0b2RvIGl0ZW0gZXZlbnRcblx0XHRpbnB1dFRhc2soKTtcblx0XHRjb25zb2xlLmxvZyhcIlByb2plY3QgYWRkIHRvZG8gaXRlbVwiKTtcblx0fSk7XG5cblx0bGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRhZGRQcm9qZWN0LmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIjtcblx0YWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdC8vIENhbGxzIG5ldyBET00gZXZlbnQgdG8gaGFuZGxlIHByb2plY3QgYWRkIHdoaWNoIHRoZW4gY2FsbHMgdGhlIG5ldyBwcm9qZWN0IGZ1bmN0aW9uXG5cdFx0aW5wdXRQcm9qZWN0KCk7XG5cdFx0Y29uc29sZS5sb2coXCJDcmVhdGUgbmV3IHByb2plY3RcIik7XG5cdH0pO1xuXG5cdGNvbnRlbnQuYXBwZW5kKGFkZFRhc2ssIGFkZFByb2plY3QpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufSkoKTtcblxuY29uc3QgaW5wdXRUYXNrID0gKCkgPT4ge1xuXHQvLyBjcmVhdGVzIERPTSBlbGVtZW50cyB3aGljaCBjYW4gdGFrZSBpbnB1dHMgZm9yIG5ldyB0YXNrIHdoaWNoIGNhbiB0aGVuIGNhbGwgdG9kbyBpdGVtIGZ1bmN0aW9uc1xuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuXHRsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0dGl0bGVJbnB1dC5pZCA9IFwidGl0bGVJbnB1dFwiO1xuXHR0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0dGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCI7XG5cblx0bGV0IHNlbGVjdFByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblx0c2VsZWN0UHJvamVjdE1lbnUuaWQgPSBcInNlbGVjdFByb2plY3RNZW51XCI7XG5cdHNlbGVjdFByb2plY3RNZW51Lm5hbWUgPSBcInByb2plY3RTZWxlY3RlZFwiO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBzaW1wbGlmeSBwcm9qZWN0IGxpc3Qgb3V0cHV0XG5cdFx0bGV0IHNlbGVjdFByb2plY3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdFtpXTtcblx0XHRjb25zb2xlLmxvZyhzZWxlY3RQcm9qZWN0KTtcblxuXHRcdGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdG9wdGlvbi5pbm5lckhUTUwgPSBzZWxlY3RQcm9qZWN0Lm5hbWU7XG5cblx0XHRzZWxlY3RQcm9qZWN0TWVudS5hcHBlbmQob3B0aW9uKTtcblx0fVxuXG5cdGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG5cdGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRsZXQgc2VsZWN0ZWRQcm9qZWN0SW5kZXggPVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RQcm9qZWN0TWVudVwiKS5zZWxlY3RlZEluZGV4O1xuXHRcdGxldCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdFtzZWxlY3RlZFByb2plY3RJbmRleF07XG5cblx0XHRsZXQgdG9kb0l0ZW1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZTtcblxuXHRcdGxldCBuZXdUb2RvSXRlbSA9IHRvZG9JdGVtKGAke3RvZG9JdGVtVGl0bGV9YCk7XG5cdFx0c2VsZWN0ZWRQcm9qZWN0LmFkZFRvZG9JdGVtKG5ld1RvZG9JdGVtKTtcblxuXHRcdGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdEluZGV4KTtcblx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpO1xuXG5cdFx0Y29uc29sZS5sb2coXCJhZGRpbmcgdG9kbyB0byBwcm9qZWN0XCIpO1xuXHRcdGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdCk7XG5cdH0pO1xuXG5cdGNvbnRlbnQuYXBwZW5kKHRpdGxlSW5wdXQsIHNlbGVjdFByb2plY3RNZW51LCBhZGRUYXNrQnRuKTtcbn07XG5cbmNvbnN0IGlucHV0UHJvamVjdCA9ICgpID0+IHtcblx0Ly8gY3JlYXRlcyBET00gZWxlbWVudHMgd2hpY2ggY2FuIHRha2UgaW5wdXRzIGZvciBuZXcgcHJvamVjdCB0byBjYWxsIG5ldyBwcm9qZWN0IGZ1bmN0aW9uXG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cdGxldCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0cHJvamVjdFRpdGxlSW5wdXQuaWQgPSBcInByb2plY3RUaXRsZUlucHV0XCI7XG5cdHByb2plY3RUaXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0cHJvamVjdFRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0IE5hbWVcIjtcblxuXG5cdGxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YWRkUHJvamVjdEJ0bi5pbm5lckhUTUwgPSBcIkNyZWF0ZSBOZXcgUHJvamVjdFwiO1xuXHRhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2cocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpXG5cdFx0bGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0KGAke3Byb2plY3RUaXRsZUlucHV0LnZhbHVlfWApXG5cdFx0Y29uc29sZS5sb2cobmV3UHJvamVjdClcblx0XHRwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXHRcdGNvbnNvbGUubG9nKHByb2plY3RMaXN0LnByb2plY3RMaXN0KVxuXHRcdHJldHVybiBuZXdQcm9qZWN0O1xuXHR9KTtcblxuXHRjb250ZW50LmFwcGVuZChwcm9qZWN0VGl0bGVJbnB1dCwgYWRkUHJvamVjdEJ0bik7XG59O1xuXG5leHBvcnQgeyBob21lUGFnZSwgaW5wdXRUYXNrLCBpbnB1dFByb2plY3QgfTtcbiIsImltcG9ydCB7IHRvZG9QYWdlIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9JdGVtXCI7XG5cbi8vIGRpc3BsYXlzIGluZGl2aWR1YWwgcHJvamVjdHMgb24gcGFnZVxuY29uc3QgZGlzcGxheVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuXHRjb25zb2xlLmxvZyhwcm9qZWN0KTtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRvZG9JdGVtID0gcHJvamVjdC5wcm9qZWN0TGlzdFtpXTtcblx0XHRjb25zdCB0b2RvVGl0bGUgPSB0b2RvSXRlbS50aXRsZTtcblx0XHRjb25zdCB0b2RvRHVlRGF0ZSA9IHRvZG9JdGVtLmR1ZURhdGU7XG5cblx0XHRjb25zdCBtb3JlSW5mb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0bW9yZUluZm9CdG4uaW5uZXJIVE1MID0gXCJNb3JlIEluZm9ybWF0aW9uXCI7XG5cblx0XHRtb3JlSW5mb0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dG9kb1BhZ2UodG9kb0l0ZW0pO1xuXHRcdH07XG5cblx0XHRjb25zdCByZW1vdmVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRyZW1vdmVUb2RvQnRuLmlubmVySFRNTCA9IFwiUmVtb3ZlIFRvZG9cIjtcblxuXHRcdHJlbW92ZVRvZG9CdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHByb2plY3QucmVtb3ZlVG9kb0l0ZW0oYCR7aX1gKTtcblx0XHRcdGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuXHRcdH07XG5cblx0XHRlbGVtZW50LmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EdWVEYXRlLCBtb3JlSW5mb0J0biwgcmVtb3ZlVG9kb0J0bik7XG5cdH1cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdCB9O1xuIiwiLy8gRGlzcGxheSBkZXN0YWlsZWQgaW5mb3JtYXRpb24gZm9yIHRvZG8gaXRlbVxuXG5jb25zdCB0b2RvUGFnZSA9ICh0b2RvKSA9PiB7XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuXHRsZXQgdGl0bGUgPSB0b2RvLnRpdGxlO1xuXHRsZXQgZGVzY3JpcHRpb24gPSB0b2RvLmRlc2NyaXB0aW9uO1xuXHRsZXQgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcblx0bGV0IHByaW9yaXR5ID0gdG9kby5wcmlvcml0eTtcblx0bGV0IG5vdGVzID0gdG9kby5ub3RlcztcblxuXHRjb250ZW50LmlubmVySFRNTCArPSBgPHVsPlxuICAgICAgICAgICAgPGxpPiR7dGl0bGV9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke2Rlc2NyaXB0aW9ufTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtkdWVEYXRlfTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtwcmlvcml0eX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7bm90ZXN9PC9saT5cbiAgICAgICAgPC91bD5gO1xuXG5cdHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IHsgdG9kb1BhZ2UgfTtcbiIsIi8vIFByb2plY3RzIHdoZXJlIHRvZG8gbGlzdCBpdGVtcyBjYW4gYmUga2VwdC4gUHJvamVjdHMgY2FuIGJlIGNyZWF0ZWQgYW5kIGRlbGV0ZWQuIERlZmF1bHQgcHJvamVjdCBjcmVhdGVkIGluaXRpYWxseSBhbmQgdG9kbyBpdGVtcyBhcmUgYXV0byBhZGRlZFxuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcblx0bGV0IHByb2plY3RMaXN0ID0gW107IC8vIHNob3VsZCBjaGFuZ2UgdG8gdG9kb2xpc3RcblxuXHRjb25zdCBhZGRUb2RvSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdCk7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKGl0ZW0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZVRvZG9JdGVtID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0Y29uc29sZS5sb2coXCJyZW1vdmVkIHRvZG8gaXRlbSBzdWNjZXNzIHlheSFcIik7XG5cdFx0Y29uc29sZS5sb2coYCR7dGhpcy5wcm9qZWN0TGlzdFtpbmRleF19YCk7XG5cdFx0Ly8gcmVtb3ZlIHRvZG8gaXRlbSAodXNlIGxvY2FsIHN0b3JhZ2Ugd2l0aCBpbmRleCBvZilcblx0XHR0aGlzLnByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdH07XG5cblx0cmV0dXJuIHsgbmFtZSwgcHJvamVjdExpc3QsIGFkZFRvZG9JdGVtLCByZW1vdmVUb2RvSXRlbSB9O1xufTtcblxuLy8gUHJvamVjdCBsaXN0IG9mIGFsbCB0aGUgcHJvamVjdHM6XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCgpID0+IHtcblx0bGV0IHByb2plY3RMaXN0ID0gW107XG5cblx0Y29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuXHR9O1xuXG5cdGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge307XG5cblx0cmV0dXJuIHsgcHJvamVjdExpc3QsIGFkZFByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9O1xuIiwiLy8gQ3JlYXRlcyB0aGUgdG9kbyBpdGVtcyB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24uXG5cbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG5cdC8vIHRvZG8gSXRlbSBjb25zdHJ1Y3RvclxuXG5cdGNvbnN0IGVkaXRUaXRsZSA9IGZ1bmN0aW9uICh1cGRhdGVkVGl0bGUpIHtcblx0XHR0aGlzLnRpdGxlID0gdXBkYXRlZFRpdGxlO1xuXHRcdHJldHVybiB0aGlzLnRpdGxlO1xuXHR9O1xuXG5cdGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICh1cGRhdGVkRGVzY3JpcHRpb24pIHtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gdXBkYXRlZERlc2NyaXB0aW9uO1xuXHRcdHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuXHR9O1xuXG5cdGNvbnN0IGVkaXREdWVEYXRlID0gZnVuY3Rpb24gKHVwZGF0ZWREdWVEYXRlKSB7XG5cdFx0dGhpcy5kdWVEYXRlID0gdXBkYXRlZER1ZURhdGU7XG5cdFx0cmV0dXJuIHRoaXMuZHVlRGF0ZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZURhdGUsXG5cdFx0cHJpb3JpdHksXG5cdFx0bm90ZXMsXG5cdFx0ZWRpdFRpdGxlLFxuXHRcdGVkaXREZXNjcmlwdGlvbixcblx0XHRlZGl0RHVlRGF0ZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7IHRvZG9JdGVtIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5pbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheVByb2plY3RcIjtcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vZGlzcGxheUhvbWVQYWdlXCI7XG5pbXBvcnQgeyB0b2RvUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvSXRlbVwiO1xuXG5sZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xucHJvamVjdExpc3QuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbmxldCBzZWNvbmRhcnlQcm9qZWN0ID0gcHJvamVjdChcIlNlY29uZGFyeSBQcm9qZWN0XCIpO1xucHJvamVjdExpc3QuYWRkUHJvamVjdChzZWNvbmRhcnlQcm9qZWN0KTtcblxuY29uc3QgcG90YXRvID0gdG9kb0l0ZW0oXG5cdFwiUG90YXRvIFRpdGxlXCIsXG5cdFwidGhpcyBpcyBkZXNjcmlwdGlvblwiLFxuXHRcIjEyLzA0LzIwMjVcIixcblx0XCJUb3AgcHJpb3JpdHlcIixcblx0XCJSYW5kb20gTm90ZXNcIixcblx0XCJDb21wbGV0ZVwiXG4pO1xuXG5jb25zdCBwb3RhdG8yID0gdG9kb0l0ZW0oXG5cdFwiUG90YXRvIFRpdGxlXCIsXG5cdFwidGhpcyBpcyBkZXNjcmlwdGlvblwiLFxuXHRcIjEyLzA0LzIwMjVcIixcblx0XCJUb3AgcHJpb3JpdHlcIixcblx0XCJSYW5kb20gTm90ZXNcIixcblx0XCJDb21wbGV0ZVwiXG4pO1xuXG5wb3RhdG8uZWRpdFRpdGxlKFwibmV3UG90YXRvVGl0bGVcIik7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbShwb3RhdG8pO1xuZGVmYXVsdFByb2plY3QuYWRkVG9kb0l0ZW0ocG90YXRvMik7XG5kaXNwbGF5UHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=