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
		(0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProjectNames)();
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
	content.innerHTML = "";

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
	// clears project list
	displayProjectListDiv.innerHTML = "";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUhvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDc0I7QUFDaEM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsS0FBSyxvRUFBOEIsQ0FBQztBQUNwRDtBQUNBLHNCQUFzQiw2REFBdUI7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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ImltcG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QsIGRpc3BsYXlQcm9qZWN0TmFtZXMgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcblxuY29uc3QgaG9tZVBhZ2UgPSAoKCkgPT4ge1xuXHQvLyBob21lIHBhZ2UgZXh0cmEgaW5mb3JtYXRpb24gZGlzcGxheVxuXHRsZXQgdG9wTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bGV0IHNpZGVOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXG5cdGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bG9nby5pbm5lckhUTUwgPSBcIlRyZWxsaXN0XCI7XG5cblx0bGV0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRhZGRUYXNrLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcblx0YWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdC8vIFByb2plY3QgYWRkIHRvZG8gaXRlbSBET00gZWxlbWVudCB3aGljaCB0aGVuIGNhbGxzIHRoZSBwcm9qZWN0IGFkZCB0b2RvIGl0ZW0gZXZlbnRcblx0XHRpbnB1dFRhc2soKTtcblx0XHRjb25zb2xlLmxvZyhcIlByb2plY3QgYWRkIHRvZG8gaXRlbVwiKTtcblx0fSk7XG5cblx0bGV0IHByb2plY3ROYXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0cHJvamVjdE5hdlRpdGxlLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcblxuXHRsZXQgcHJvamVjdE5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0TmF2TGlzdC5pZCA9IFwicHJvamVjdE5hdkxpc3RcIjtcblxuXHRsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGFkZFByb2plY3QuaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiO1xuXHRhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Ly8gQ2FsbHMgbmV3IERPTSBldmVudCB0byBoYW5kbGUgcHJvamVjdCBhZGQgd2hpY2ggdGhlbiBjYWxscyB0aGUgbmV3IHByb2plY3QgZnVuY3Rpb25cblx0XHRpbnB1dFByb2plY3QoKTtcblx0XHRjb25zb2xlLmxvZyhcIkNyZWF0ZSBuZXcgcHJvamVjdFwiKTtcblx0fSk7XG5cblx0dG9wTmF2QmFyLmFwcGVuZChsb2dvLCBhZGRUYXNrKTtcblx0c2lkZU5hdkJhci5hcHBlbmQocHJvamVjdE5hdlRpdGxlLCBwcm9qZWN0TmF2TGlzdCwgYWRkUHJvamVjdCk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHRvcE5hdkJhciwgc2lkZU5hdkJhciwgY29udGVudCk7XG59KSgpO1xuXG5jb25zdCBpbnB1dFRhc2sgPSAoKSA9PiB7XG5cdC8vIGNyZWF0ZXMgRE9NIGVsZW1lbnRzIHdoaWNoIGNhbiB0YWtlIGlucHV0cyBmb3IgbmV3IHRhc2sgd2hpY2ggY2FuIHRoZW4gY2FsbCB0b2RvIGl0ZW0gZnVuY3Rpb25zXG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cdGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHR0aXRsZUlucHV0LmlkID0gXCJ0aXRsZUlucHV0XCI7XG5cdHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHR0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcblxuXHRsZXQgc2VsZWN0UHJvamVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXHRzZWxlY3RQcm9qZWN0TWVudS5pZCA9IFwic2VsZWN0UHJvamVjdE1lbnVcIjtcblx0c2VsZWN0UHJvamVjdE1lbnUubmFtZSA9IFwicHJvamVjdFNlbGVjdGVkXCI7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdC8vIHNpbXBsaWZ5IHByb2plY3QgbGlzdCBvdXRwdXRcblx0XHRsZXQgc2VsZWN0UHJvamVjdCA9IHByb2plY3RMaXN0LnByb2plY3RMaXN0W2ldO1xuXHRcdGNvbnNvbGUubG9nKHNlbGVjdFByb2plY3QpO1xuXG5cdFx0bGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0b3B0aW9uLmlubmVySFRNTCA9IHNlbGVjdFByb2plY3QubmFtZTtcblxuXHRcdHNlbGVjdFByb2plY3RNZW51LmFwcGVuZChvcHRpb24pO1xuXHR9XG5cblx0bGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRhZGRUYXNrQnRuLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcblx0YWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGxldCBzZWxlY3RlZFByb2plY3RJbmRleCA9XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFByb2plY3RNZW51XCIpLnNlbGVjdGVkSW5kZXg7XG5cdFx0bGV0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RMaXN0LnByb2plY3RMaXN0W3NlbGVjdGVkUHJvamVjdEluZGV4XTtcblxuXHRcdGxldCB0b2RvSXRlbVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpLnZhbHVlO1xuXG5cdFx0bGV0IG5ld1RvZG9JdGVtID0gdG9kb0l0ZW0oYCR7dG9kb0l0ZW1UaXRsZX1gKTtcblx0XHRzZWxlY3RlZFByb2plY3QuYWRkVG9kb0l0ZW0obmV3VG9kb0l0ZW0pO1xuXG5cdFx0Y29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0SW5kZXgpO1xuXHRcdGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdCk7XG5cblx0XHRjb25zb2xlLmxvZyhcImFkZGluZyB0b2RvIHRvIHByb2plY3RcIik7XG5cdFx0Y29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcblx0fSk7XG5cblx0Y29udGVudC5hcHBlbmQodGl0bGVJbnB1dCwgc2VsZWN0UHJvamVjdE1lbnUsIGFkZFRhc2tCdG4pO1xufTtcblxuY29uc3QgaW5wdXRQcm9qZWN0ID0gKCkgPT4ge1xuXHQvLyBjcmVhdGVzIERPTSBlbGVtZW50cyB3aGljaCBjYW4gdGFrZSBpbnB1dHMgZm9yIG5ldyBwcm9qZWN0IHRvIGNhbGwgbmV3IHByb2plY3QgZnVuY3Rpb25cblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblx0bGV0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRwcm9qZWN0VGl0bGVJbnB1dC5pZCA9IFwicHJvamVjdFRpdGxlSW5wdXRcIjtcblx0cHJvamVjdFRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHRwcm9qZWN0VGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiTmV3IFByb2plY3QgTmFtZVwiO1xuXG5cdGxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YWRkUHJvamVjdEJ0bi5pbm5lckhUTUwgPSBcIkNyZWF0ZSBOZXcgUHJvamVjdFwiO1xuXHRhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2cocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpO1xuXHRcdGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdChgJHtwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZX1gKTtcblx0XHRjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcblx0XHRwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXHRcdGNvbnNvbGUubG9nKHByb2plY3RMaXN0LnByb2plY3RMaXN0KTtcblx0XHRkaXNwbGF5UHJvamVjdE5hbWVzKCk7XG5cdFx0cmV0dXJuIG5ld1Byb2plY3Q7XG5cdH0pO1xuXG5cdGNvbnRlbnQuYXBwZW5kKHByb2plY3RUaXRsZUlucHV0LCBhZGRQcm9qZWN0QnRuKTtcbn07XG5cbmV4cG9ydCB7IGhvbWVQYWdlLCBpbnB1dFRhc2ssIGlucHV0UHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgdG9kb1BhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5VG9kb0l0ZW1cIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG4vLyBkaXNwbGF5cyBpbmRpdmlkdWFsIHByb2plY3RzIG9uIHBhZ2VcbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcblx0Y29uc3QgdG9kb0l0ZW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cdC8vIGNsZWFyIGNvbnRlbnRcblx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0cHJvamVjdE5hbWUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB0b2RvSXRlbSA9IHByb2plY3QucHJvamVjdExpc3RbaV07XG5cdFx0bGV0IHRvZG9JdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG5cdFx0bGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dG9kb1RpdGxlID0gdG9kb0l0ZW0udGl0bGU7XG5cdFx0bGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0b2RvRHVlRGF0ZSA9IHRvZG9JdGVtLmR1ZURhdGU7XG5cblx0XHRjb25zdCBtb3JlSW5mb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0bW9yZUluZm9CdG4uaW5uZXJIVE1MID0gXCJNb3JlIEluZm9ybWF0aW9uXCI7XG5cblx0XHRtb3JlSW5mb0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dG9kb1BhZ2UodG9kb0l0ZW0pO1xuXHRcdH07XG5cblx0XHRjb25zdCByZW1vdmVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRyZW1vdmVUb2RvQnRuLmlubmVySFRNTCA9IFwiUmVtb3ZlIFRvZG9cIjtcblxuXHRcdHJlbW92ZVRvZG9CdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHByb2plY3QucmVtb3ZlVG9kb0l0ZW0oYCR7aX1gKTtcblx0XHRcdGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuXHRcdH07XG5cblx0XHR0b2RvSXRlbURpdi5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRHVlRGF0ZSwgbW9yZUluZm9CdG4sIHJlbW92ZVRvZG9CdG4pO1xuXG5cdFx0dG9kb0l0ZW1MaXN0LmFwcGVuZCh0b2RvSXRlbURpdik7XG5cdH1cblx0Y29udGVudC5hcHBlbmQocHJvamVjdE5hbWUsIHRvZG9JdGVtTGlzdCk7XG5cblx0cmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdE5hbWVzID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgZ2V0UHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdDtcblxuXHRsZXQgZGlzcGxheVByb2plY3RMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmF2TGlzdFwiKTtcblx0Ly8gY2xlYXJzIHByb2plY3QgbGlzdFxuXHRkaXNwbGF5UHJvamVjdExpc3REaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRsZXQgZGlzcGxheVByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0UHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgY3VycmVudFByb2plY3QgPSBnZXRQcm9qZWN0TGlzdFtpXTtcblx0XHRjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG5cdFx0bGV0IGRpc3BsYXlQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRkaXNwbGF5UHJvamVjdE5hbWUuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3QuZ2V0TmFtZSgpO1xuXHRcdGRpc3BsYXlQcm9qZWN0TmFtZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZGlzcGxheVByb2plY3QoY3VycmVudFByb2plY3QpO1xuXHRcdH07XG5cdFx0ZGlzcGxheVByb2plY3RMaXN0LmFwcGVuZENoaWxkKGRpc3BsYXlQcm9qZWN0TmFtZSk7XG5cdFx0Y29uc29sZS5sb2coZGlzcGxheVByb2plY3ROYW1lKTtcblx0fVxuXHRjb25zb2xlLmxvZyhkaXNwbGF5UHJvamVjdExpc3QpO1xuXHRkaXNwbGF5UHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQoZGlzcGxheVByb2plY3RMaXN0KTtcblx0cmV0dXJuIGRpc3BsYXlQcm9qZWN0TGlzdERpdjtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5UHJvamVjdE5hbWVzIH07XG4iLCIvLyBEaXNwbGF5IGRlc3RhaWxlZCBpbmZvcm1hdGlvbiBmb3IgdG9kbyBpdGVtXG5cbmNvbnN0IHRvZG9QYWdlID0gKHRvZG8pID0+IHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cdGxldCB0aXRsZSA9IHRvZG8udGl0bGU7XG5cdGxldCBkZXNjcmlwdGlvbiA9IHRvZG8uZGVzY3JpcHRpb247XG5cdGxldCBkdWVEYXRlID0gdG9kby5kdWVEYXRlO1xuXHRsZXQgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuXHRsZXQgbm90ZXMgPSB0b2RvLm5vdGVzO1xuXG5cdGNvbnRlbnQuaW5uZXJIVE1MICs9IGA8dWw+XG4gICAgICAgICAgICA8bGk+JHt0aXRsZX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7ZGVzY3JpcHRpb259PC9saT5cbiAgICAgICAgICAgIDxsaT4ke2R1ZURhdGV9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke3ByaW9yaXR5fTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtub3Rlc308L2xpPlxuICAgICAgICA8L3VsPmA7XG5cblx0cmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyB0b2RvUGFnZSB9O1xuIiwiLy8gUHJvamVjdHMgd2hlcmUgdG9kbyBsaXN0IGl0ZW1zIGNhbiBiZSBrZXB0LiBQcm9qZWN0cyBjYW4gYmUgY3JlYXRlZCBhbmQgZGVsZXRlZC4gRGVmYXVsdCBwcm9qZWN0IGNyZWF0ZWQgaW5pdGlhbGx5IGFuZCB0b2RvIGl0ZW1zIGFyZSBhdXRvIGFkZGVkXG5cbmNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBbXTsgLy8gc2hvdWxkIGNoYW5nZSB0byB0b2RvbGlzdFxuXG5cdGNvbnN0IGFkZFRvZG9JdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb2plY3RMaXN0KTtcblx0XHR0aGlzLnByb2plY3RMaXN0LnB1c2goaXRlbSk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlVG9kb0l0ZW0gPSBmdW5jdGlvbiAoaW5kZXgpIHtcblx0XHRjb25zb2xlLmxvZyhcInJlbW92ZWQgdG9kbyBpdGVtIHN1Y2Nlc3MgeWF5IVwiKTtcblx0XHRjb25zb2xlLmxvZyhgJHt0aGlzLnByb2plY3RMaXN0W2luZGV4XX1gKTtcblx0XHQvLyByZW1vdmUgdG9kbyBpdGVtICh1c2UgbG9jYWwgc3RvcmFnZSB3aXRoIGluZGV4IG9mKVxuXHRcdHRoaXMucHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0fTtcblxuXHRjb25zdCBnZXROYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuYW1lO1xuXHR9O1xuXG5cdHJldHVybiB7IGdldE5hbWUsIG5hbWUsIHByb2plY3RMaXN0LCBhZGRUb2RvSXRlbSwgcmVtb3ZlVG9kb0l0ZW0gfTtcbn07XG5cbi8vIFByb2plY3QgbGlzdCBvZiBhbGwgdGhlIHByb2plY3RzOlxuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgoKSA9PiB7XG5cdGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5cdGNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuXHRcdHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcblx0fTtcblxuXHRjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uICgpIHt9O1xuXG5cdHJldHVybiB7IHByb2plY3RMaXN0LCBhZGRQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdCwgcHJvamVjdExpc3QgfTtcbiIsIi8vIENyZWF0ZXMgdGhlIHRvZG8gaXRlbXMgdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLlxuXG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuXHQvLyB0b2RvIEl0ZW0gY29uc3RydWN0b3JcblxuXHRjb25zdCBlZGl0VGl0bGUgPSBmdW5jdGlvbiAodXBkYXRlZFRpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IHVwZGF0ZWRUaXRsZTtcblx0XHRyZXR1cm4gdGhpcy50aXRsZTtcblx0fTtcblxuXHRjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAodXBkYXRlZERlc2NyaXB0aW9uKSB7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IHVwZGF0ZWREZXNjcmlwdGlvbjtcblx0XHRyZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcblx0fTtcblxuXHRjb25zdCBlZGl0RHVlRGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVkRHVlRGF0ZSkge1xuXHRcdHRoaXMuZHVlRGF0ZSA9IHVwZGF0ZWREdWVEYXRlO1xuXHRcdHJldHVybiB0aGlzLmR1ZURhdGU7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkdWVEYXRlLFxuXHRcdHByaW9yaXR5LFxuXHRcdG5vdGVzLFxuXHRcdGVkaXRUaXRsZSxcblx0XHRlZGl0RGVzY3JpcHRpb24sXG5cdFx0ZWRpdER1ZURhdGUsXG5cdH07XG59O1xuXG5leHBvcnQgeyB0b2RvSXRlbSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCwgZGlzcGxheVByb2plY3ROYW1lcyB9IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0XCI7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlIb21lUGFnZVwiO1xuaW1wb3J0IHsgdG9kb1BhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5VG9kb0l0ZW1cIjtcblxubGV0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdChcIkRlZmF1bHQgUHJvamVjdFwiKTtcbnByb2plY3RMaXN0LmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuXG5sZXQgc2Vjb25kYXJ5UHJvamVjdCA9IHByb2plY3QoXCJTZWNvbmRhcnkgUHJvamVjdFwiKTtcbnByb2plY3RMaXN0LmFkZFByb2plY3Qoc2Vjb25kYXJ5UHJvamVjdCk7XG5cbmNvbnN0IHBvdGF0byA9IHRvZG9JdGVtKFxuXHRcIlBvdGF0byBUaXRsZVwiLFxuXHRcInRoaXMgaXMgZGVzY3JpcHRpb25cIixcblx0XCIxMi8wNC8yMDI1XCIsXG5cdFwiVG9wIHByaW9yaXR5XCIsXG5cdFwiUmFuZG9tIE5vdGVzXCIsXG5cdFwiQ29tcGxldGVcIlxuKTtcblxuY29uc3QgcG90YXRvMiA9IHRvZG9JdGVtKFxuXHRcIlBvdGF0byBUaXRsZVwiLFxuXHRcInRoaXMgaXMgZGVzY3JpcHRpb25cIixcblx0XCIxMi8wNC8yMDI1XCIsXG5cdFwiVG9wIHByaW9yaXR5XCIsXG5cdFwiUmFuZG9tIE5vdGVzXCIsXG5cdFwiQ29tcGxldGVcIlxuKTtcblxucG90YXRvLmVkaXRUaXRsZShcIm5ld1BvdGF0b1RpdGxlXCIpO1xuZGVmYXVsdFByb2plY3QuYWRkVG9kb0l0ZW0ocG90YXRvKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHBvdGF0bzIpO1xuXG5kaXNwbGF5UHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5kaXNwbGF5UHJvamVjdE5hbWVzKCk7XG5cbmNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=