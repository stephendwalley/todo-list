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
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject */ "./src/displayProject.js");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");




const homePage = (() => {
	// home page extra information display
	let topNavBar = document.createElement("div");
	let sideNavBar = document.createElement("div");

	let content = document.createElement("div");
	content.id = "content";

	let logo = document.createElement("div");
	logo.innerHTML = "Trellist";

	let addTask = document.createElement("button");
	addTask.innerHTML = "Add Task";
	addTask.addEventListener("click", () => {
		// Project add todo item DOM element which then calls the project add todo item event
		inputTask();
		console.log("Project add todo item");
	});

	let projectNavTitle = document.createElement("h3");
	projectNavTitle.innerHTML = "Projects";

	let projectNavList = document.createElement("div");
	projectNavList.id = "projectNavList";

	let addProject = document.createElement("button");
	addProject.innerHTML = "Add Project";
	addProject.addEventListener("click", () => {
		// Calls new DOM event to handle project add which then calls the new project function
		inputProject();
		console.log("Create new project");
	});

	topNavBar.append(logo, addTask);
	sideNavBar.append(projectNavTitle, projectNavList, addProject);
	document.body.append(topNavBar, sideNavBar, content);
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

		let newTodoItem = (0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.todoItem)(`${todoItemTitle}`);
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
		console.log(projectTitleInput.value);
		let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(`${projectTitleInput.value}`);
		console.log(newProject);
		_project__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(newProject);
		console.log(_project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList);
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
/* harmony export */   "displayProject": () => (/* binding */ displayProject),
/* harmony export */   "displayProjectNames": () => (/* binding */ displayProjectNames)
/* harmony export */ });
/* harmony import */ var _displayTodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodoItem */ "./src/displayTodoItem.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



// displays individual projects on page
const displayProject = function (project) {
	const todoItemList = document.createElement("ul");
	const content = document.getElementById("content");

	// clear content
	content.innerHTML = ""

	let projectName = document.createElement("h2");
	projectName.innerHTML = project.name;

	for (let i = 0; i < project.projectList.length; i++) {
		let todoItem = project.projectList[i];
		let todoItemDiv = document.createElement("li");

		let todoTitle = document.createElement("div");
		todoTitle = todoItem.title;
		let todoDueDate = document.createElement("div");
		todoDueDate = todoItem.dueDate;

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

		todoItemDiv.append(todoTitle, todoDueDate, moreInfoBtn, removeTodoBtn);

		todoItemList.append(todoItemDiv);
	}
	content.append(projectName, todoItemList);

	return content;
};

const displayProjectNames = function () {
	let getProjectList = _project__WEBPACK_IMPORTED_MODULE_1__.projectList.projectList;

	let displayProjectListDiv = document.getElementById("projectNavList");
	let displayProjectList = document.createElement("ul");

	for (let i = 0; i < getProjectList.length; i++) {
		let currentProject = getProjectList[i];
		console.log(currentProject);
		let displayProjectName = document.createElement("li");
		displayProjectName.innerHTML = currentProject.getName();
		displayProjectName.onclick = function () {
			displayProject(currentProject);
		};
		displayProjectList.appendChild(displayProjectName);
		console.log(displayProjectName);
	}
	console.log(displayProjectList);
	displayProjectListDiv.appendChild(displayProjectList);
	return displayProjectListDiv;
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

	const getName = function () {
		return name;
	};

	return { getName, name, projectList, addTodoItem, removeTodoItem };
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
(0,_displayProject__WEBPACK_IMPORTED_MODULE_2__.displayProjectNames)();

console.log(_project__WEBPACK_IMPORTED_MODULE_1__.projectList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUhvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTTtBQUNoQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixLQUFLLG9FQUE4QixDQUFDO0FBQ3BEO0FBQ0Esc0JBQXNCLDZEQUF1QjtBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2REFBdUI7O0FBRS9DOztBQUVBLG9CQUFvQixvREFBUSxJQUFJLGNBQWM7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBTyxJQUFJLHdCQUF3QjtBQUN0RDtBQUNBLEVBQUUsNERBQXNCO0FBQ3hCLGNBQWMsNkRBQXVCO0FBQ3JDO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUU2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0w7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0IsZ0NBQWdDO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUcsMERBQVE7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLEVBQUU7QUFDL0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiw2REFBdUI7O0FBRTdDO0FBQ0E7O0FBRUEsZ0JBQWdCLDJCQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQzs7Ozs7Ozs7Ozs7Ozs7O0FDckUvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCLGtCQUFrQixZQUFZO0FBQzlCLGtCQUFrQixRQUFRO0FBQzFCLGtCQUFrQixTQUFTO0FBQzNCLGtCQUFrQixNQUFNO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJwQjs7QUFFQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNULENBQUM7O0FBRStCOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7VUNoQ3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNVO0FBQ3NCO0FBQzFCO0FBQ0E7O0FBRTdDLHFCQUFxQixpREFBTztBQUM1Qiw0REFBc0I7QUFDdEI7O0FBRUEsdUJBQXVCLGlEQUFPO0FBQzlCLDREQUFzQjs7QUFFdEIsZUFBZSxvREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isb0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtEQUFjO0FBQ2Qsb0VBQW1COztBQUVuQixZQUFZLGlEQUFXIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3ROYW1lcyB9IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0XCI7XG5pbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuXG5jb25zdCBob21lUGFnZSA9ICgoKSA9PiB7XG5cdC8vIGhvbWUgcGFnZSBleHRyYSBpbmZvcm1hdGlvbiBkaXNwbGF5XG5cdGxldCB0b3BOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRsZXQgc2lkZU5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5cblx0bGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRsb2dvLmlubmVySFRNTCA9IFwiVHJlbGxpc3RcIjtcblxuXHRsZXQgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGFkZFRhc2suaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiO1xuXHRhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Ly8gUHJvamVjdCBhZGQgdG9kbyBpdGVtIERPTSBlbGVtZW50IHdoaWNoIHRoZW4gY2FsbHMgdGhlIHByb2plY3QgYWRkIHRvZG8gaXRlbSBldmVudFxuXHRcdGlucHV0VGFzaygpO1xuXHRcdGNvbnNvbGUubG9nKFwiUHJvamVjdCBhZGQgdG9kbyBpdGVtXCIpO1xuXHR9KTtcblxuXHRsZXQgcHJvamVjdE5hdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRwcm9qZWN0TmF2VGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXG5cdGxldCBwcm9qZWN0TmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3ROYXZMaXN0LmlkID0gXCJwcm9qZWN0TmF2TGlzdFwiO1xuXG5cdGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YWRkUHJvamVjdC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG5cdGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHQvLyBDYWxscyBuZXcgRE9NIGV2ZW50IHRvIGhhbmRsZSBwcm9qZWN0IGFkZCB3aGljaCB0aGVuIGNhbGxzIHRoZSBuZXcgcHJvamVjdCBmdW5jdGlvblxuXHRcdGlucHV0UHJvamVjdCgpO1xuXHRcdGNvbnNvbGUubG9nKFwiQ3JlYXRlIG5ldyBwcm9qZWN0XCIpO1xuXHR9KTtcblxuXHR0b3BOYXZCYXIuYXBwZW5kKGxvZ28sIGFkZFRhc2spO1xuXHRzaWRlTmF2QmFyLmFwcGVuZChwcm9qZWN0TmF2VGl0bGUsIHByb2plY3ROYXZMaXN0LCBhZGRQcm9qZWN0KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQodG9wTmF2QmFyLCBzaWRlTmF2QmFyLCBjb250ZW50KTtcbn0pKCk7XG5cbmNvbnN0IGlucHV0VGFzayA9ICgpID0+IHtcblx0Ly8gY3JlYXRlcyBET00gZWxlbWVudHMgd2hpY2ggY2FuIHRha2UgaW5wdXRzIGZvciBuZXcgdGFzayB3aGljaCBjYW4gdGhlbiBjYWxsIHRvZG8gaXRlbSBmdW5jdGlvbnNcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblx0bGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlSW5wdXRcIjtcblx0dGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuXG5cdGxldCBzZWxlY3RQcm9qZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdHNlbGVjdFByb2plY3RNZW51LmlkID0gXCJzZWxlY3RQcm9qZWN0TWVudVwiO1xuXHRzZWxlY3RQcm9qZWN0TWVudS5uYW1lID0gXCJwcm9qZWN0U2VsZWN0ZWRcIjtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0LnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gc2ltcGxpZnkgcHJvamVjdCBsaXN0IG91dHB1dFxuXHRcdGxldCBzZWxlY3RQcm9qZWN0ID0gcHJvamVjdExpc3QucHJvamVjdExpc3RbaV07XG5cdFx0Y29uc29sZS5sb2coc2VsZWN0UHJvamVjdCk7XG5cblx0XHRsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRvcHRpb24uaW5uZXJIVE1MID0gc2VsZWN0UHJvamVjdC5uYW1lO1xuXG5cdFx0c2VsZWN0UHJvamVjdE1lbnUuYXBwZW5kKG9wdGlvbik7XG5cdH1cblxuXHRsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiO1xuXHRhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0bGV0IHNlbGVjdGVkUHJvamVjdEluZGV4ID1cblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0UHJvamVjdE1lbnVcIikuc2VsZWN0ZWRJbmRleDtcblx0XHRsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdExpc3QucHJvamVjdExpc3Rbc2VsZWN0ZWRQcm9qZWN0SW5kZXhdO1xuXG5cdFx0bGV0IHRvZG9JdGVtVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWU7XG5cblx0XHRsZXQgbmV3VG9kb0l0ZW0gPSB0b2RvSXRlbShgJHt0b2RvSXRlbVRpdGxlfWApO1xuXHRcdHNlbGVjdGVkUHJvamVjdC5hZGRUb2RvSXRlbShuZXdUb2RvSXRlbSk7XG5cblx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3RJbmRleCk7XG5cdFx0Y29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcblxuXHRcdGNvbnNvbGUubG9nKFwiYWRkaW5nIHRvZG8gdG8gcHJvamVjdFwiKTtcblx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpO1xuXHR9KTtcblxuXHRjb250ZW50LmFwcGVuZCh0aXRsZUlucHV0LCBzZWxlY3RQcm9qZWN0TWVudSwgYWRkVGFza0J0bik7XG59O1xuXG5jb25zdCBpbnB1dFByb2plY3QgPSAoKSA9PiB7XG5cdC8vIGNyZWF0ZXMgRE9NIGVsZW1lbnRzIHdoaWNoIGNhbiB0YWtlIGlucHV0cyBmb3IgbmV3IHByb2plY3QgdG8gY2FsbCBuZXcgcHJvamVjdCBmdW5jdGlvblxuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuXHRsZXQgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdHByb2plY3RUaXRsZUlucHV0LmlkID0gXCJwcm9qZWN0VGl0bGVJbnB1dFwiO1xuXHRwcm9qZWN0VGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdHByb2plY3RUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBOYW1lXCI7XG5cblx0bGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRhZGRQcm9qZWN0QnRuLmlubmVySFRNTCA9IFwiQ3JlYXRlIE5ldyBQcm9qZWN0XCI7XG5cdGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG5cdFx0bGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0KGAke3Byb2plY3RUaXRsZUlucHV0LnZhbHVlfWApO1xuXHRcdGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuXHRcdHByb2plY3RMaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5cdFx0Y29uc29sZS5sb2cocHJvamVjdExpc3QucHJvamVjdExpc3QpO1xuXHRcdHJldHVybiBuZXdQcm9qZWN0O1xuXHR9KTtcblxuXHRjb250ZW50LmFwcGVuZChwcm9qZWN0VGl0bGVJbnB1dCwgYWRkUHJvamVjdEJ0bik7XG59O1xuXG5leHBvcnQgeyBob21lUGFnZSwgaW5wdXRUYXNrLCBpbnB1dFByb2plY3QgfTtcbiIsImltcG9ydCB7IHRvZG9QYWdlIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9JdGVtXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuLy8gZGlzcGxheXMgaW5kaXZpZHVhbCBwcm9qZWN0cyBvbiBwYWdlXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG5cdGNvbnN0IHRvZG9JdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuXHQvLyBjbGVhciBjb250ZW50XG5cdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxuXG5cdGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0cHJvamVjdE5hbWUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB0b2RvSXRlbSA9IHByb2plY3QucHJvamVjdExpc3RbaV07XG5cdFx0bGV0IHRvZG9JdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG5cdFx0bGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dG9kb1RpdGxlID0gdG9kb0l0ZW0udGl0bGU7XG5cdFx0bGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0b2RvRHVlRGF0ZSA9IHRvZG9JdGVtLmR1ZURhdGU7XG5cblx0XHRjb25zdCBtb3JlSW5mb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0bW9yZUluZm9CdG4uaW5uZXJIVE1MID0gXCJNb3JlIEluZm9ybWF0aW9uXCI7XG5cblx0XHRtb3JlSW5mb0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dG9kb1BhZ2UodG9kb0l0ZW0pO1xuXHRcdH07XG5cblx0XHRjb25zdCByZW1vdmVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRyZW1vdmVUb2RvQnRuLmlubmVySFRNTCA9IFwiUmVtb3ZlIFRvZG9cIjtcblxuXHRcdHJlbW92ZVRvZG9CdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHByb2plY3QucmVtb3ZlVG9kb0l0ZW0oYCR7aX1gKTtcblx0XHRcdGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuXHRcdH07XG5cblx0XHR0b2RvSXRlbURpdi5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRHVlRGF0ZSwgbW9yZUluZm9CdG4sIHJlbW92ZVRvZG9CdG4pO1xuXG5cdFx0dG9kb0l0ZW1MaXN0LmFwcGVuZCh0b2RvSXRlbURpdik7XG5cdH1cblx0Y29udGVudC5hcHBlbmQocHJvamVjdE5hbWUsIHRvZG9JdGVtTGlzdCk7XG5cblx0cmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdE5hbWVzID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgZ2V0UHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdDtcblxuXHRsZXQgZGlzcGxheVByb2plY3RMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmF2TGlzdFwiKTtcblx0bGV0IGRpc3BsYXlQcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGdldFByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0UHJvamVjdExpc3RbaV07XG5cdFx0Y29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuXHRcdGxldCBkaXNwbGF5UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0ZGlzcGxheVByb2plY3ROYW1lLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0LmdldE5hbWUoKTtcblx0XHRkaXNwbGF5UHJvamVjdE5hbWUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRpc3BsYXlQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcblx0XHR9O1xuXHRcdGRpc3BsYXlQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChkaXNwbGF5UHJvamVjdE5hbWUpO1xuXHRcdGNvbnNvbGUubG9nKGRpc3BsYXlQcm9qZWN0TmFtZSk7XG5cdH1cblx0Y29uc29sZS5sb2coZGlzcGxheVByb2plY3RMaXN0KTtcblx0ZGlzcGxheVByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlQcm9qZWN0TGlzdCk7XG5cdHJldHVybiBkaXNwbGF5UHJvamVjdExpc3REaXY7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdCwgZGlzcGxheVByb2plY3ROYW1lcyB9O1xuIiwiLy8gRGlzcGxheSBkZXN0YWlsZWQgaW5mb3JtYXRpb24gZm9yIHRvZG8gaXRlbVxuXG5jb25zdCB0b2RvUGFnZSA9ICh0b2RvKSA9PiB7XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuXHRsZXQgdGl0bGUgPSB0b2RvLnRpdGxlO1xuXHRsZXQgZGVzY3JpcHRpb24gPSB0b2RvLmRlc2NyaXB0aW9uO1xuXHRsZXQgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcblx0bGV0IHByaW9yaXR5ID0gdG9kby5wcmlvcml0eTtcblx0bGV0IG5vdGVzID0gdG9kby5ub3RlcztcblxuXHRjb250ZW50LmlubmVySFRNTCArPSBgPHVsPlxuICAgICAgICAgICAgPGxpPiR7dGl0bGV9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke2Rlc2NyaXB0aW9ufTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtkdWVEYXRlfTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtwcmlvcml0eX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7bm90ZXN9PC9saT5cbiAgICAgICAgPC91bD5gO1xuXG5cdHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IHsgdG9kb1BhZ2UgfTtcbiIsIi8vIFByb2plY3RzIHdoZXJlIHRvZG8gbGlzdCBpdGVtcyBjYW4gYmUga2VwdC4gUHJvamVjdHMgY2FuIGJlIGNyZWF0ZWQgYW5kIGRlbGV0ZWQuIERlZmF1bHQgcHJvamVjdCBjcmVhdGVkIGluaXRpYWxseSBhbmQgdG9kbyBpdGVtcyBhcmUgYXV0byBhZGRlZFxuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcblx0bGV0IHByb2plY3RMaXN0ID0gW107IC8vIHNob3VsZCBjaGFuZ2UgdG8gdG9kb2xpc3RcblxuXHRjb25zdCBhZGRUb2RvSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdCk7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKGl0ZW0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZVRvZG9JdGVtID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0Y29uc29sZS5sb2coXCJyZW1vdmVkIHRvZG8gaXRlbSBzdWNjZXNzIHlheSFcIik7XG5cdFx0Y29uc29sZS5sb2coYCR7dGhpcy5wcm9qZWN0TGlzdFtpbmRleF19YCk7XG5cdFx0Ly8gcmVtb3ZlIHRvZG8gaXRlbSAodXNlIGxvY2FsIHN0b3JhZ2Ugd2l0aCBpbmRleCBvZilcblx0XHR0aGlzLnByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbmFtZTtcblx0fTtcblxuXHRyZXR1cm4geyBnZXROYW1lLCBuYW1lLCBwcm9qZWN0TGlzdCwgYWRkVG9kb0l0ZW0sIHJlbW92ZVRvZG9JdGVtIH07XG59O1xuXG4vLyBQcm9qZWN0IGxpc3Qgb2YgYWxsIHRoZSBwcm9qZWN0czpcblxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuXHRjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcblx0XHR0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG5cdH07XG5cblx0Y29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSBmdW5jdGlvbiAoKSB7fTtcblxuXHRyZXR1cm4geyBwcm9qZWN0TGlzdCwgYWRkUHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH07XG4iLCIvLyBDcmVhdGVzIHRoZSB0b2RvIGl0ZW1zIHVzaW5nIGEgZmFjdG9yeSBmdW5jdGlvbi5cblxuY29uc3QgdG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcblx0Ly8gdG9kbyBJdGVtIGNvbnN0cnVjdG9yXG5cblx0Y29uc3QgZWRpdFRpdGxlID0gZnVuY3Rpb24gKHVwZGF0ZWRUaXRsZSkge1xuXHRcdHRoaXMudGl0bGUgPSB1cGRhdGVkVGl0bGU7XG5cdFx0cmV0dXJuIHRoaXMudGl0bGU7XG5cdH07XG5cblx0Y29uc3QgZWRpdERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKHVwZGF0ZWREZXNjcmlwdGlvbikge1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSB1cGRhdGVkRGVzY3JpcHRpb247XG5cdFx0cmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG5cdH07XG5cblx0Y29uc3QgZWRpdER1ZURhdGUgPSBmdW5jdGlvbiAodXBkYXRlZER1ZURhdGUpIHtcblx0XHR0aGlzLmR1ZURhdGUgPSB1cGRhdGVkRHVlRGF0ZTtcblx0XHRyZXR1cm4gdGhpcy5kdWVEYXRlO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0dGl0bGUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZHVlRGF0ZSxcblx0XHRwcmlvcml0eSxcblx0XHRub3Rlcyxcblx0XHRlZGl0VGl0bGUsXG5cdFx0ZWRpdERlc2NyaXB0aW9uLFxuXHRcdGVkaXREdWVEYXRlLFxuXHR9O1xufTtcblxuZXhwb3J0IHsgdG9kb0l0ZW0gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcbmltcG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QsIGRpc3BsYXlQcm9qZWN0TmFtZXMgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5SG9tZVBhZ2VcIjtcbmltcG9ydCB7IHRvZG9QYWdlIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9JdGVtXCI7XG5cbmxldCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIik7XG5wcm9qZWN0TGlzdC5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbmNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxubGV0IHNlY29uZGFyeVByb2plY3QgPSBwcm9qZWN0KFwiU2Vjb25kYXJ5IFByb2plY3RcIik7XG5wcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHNlY29uZGFyeVByb2plY3QpO1xuXG5jb25zdCBwb3RhdG8gPSB0b2RvSXRlbShcblx0XCJQb3RhdG8gVGl0bGVcIixcblx0XCJ0aGlzIGlzIGRlc2NyaXB0aW9uXCIsXG5cdFwiMTIvMDQvMjAyNVwiLFxuXHRcIlRvcCBwcmlvcml0eVwiLFxuXHRcIlJhbmRvbSBOb3Rlc1wiLFxuXHRcIkNvbXBsZXRlXCJcbik7XG5cbmNvbnN0IHBvdGF0bzIgPSB0b2RvSXRlbShcblx0XCJQb3RhdG8gVGl0bGVcIixcblx0XCJ0aGlzIGlzIGRlc2NyaXB0aW9uXCIsXG5cdFwiMTIvMDQvMjAyNVwiLFxuXHRcIlRvcCBwcmlvcml0eVwiLFxuXHRcIlJhbmRvbSBOb3Rlc1wiLFxuXHRcIkNvbXBsZXRlXCJcbik7XG5cbnBvdGF0by5lZGl0VGl0bGUoXCJuZXdQb3RhdG9UaXRsZVwiKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHBvdGF0byk7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbShwb3RhdG8yKTtcblxuZGlzcGxheVByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuZGlzcGxheVByb2plY3ROYW1lcygpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9