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

		(0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProject)(selectedProject);
	});

	content.append(titleInput, selectProjectMenu, addTaskBtn);
};

const inputProject = () => {
	// creates DOM elements which can take inputs for new project to call new project function
	let content = document.getElementById("content");
	let inputProjectDiv = document.createElement("div");

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
		inputProjectDiv.innerHTML = "";
		return newProject;
	});

	inputProjectDiv.append(projectTitleInput, addProjectBtn);
	content.append(inputProjectDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUhvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDc0I7QUFDaEM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsS0FBSyxvRUFBOEIsQ0FBQztBQUNwRDtBQUNBLHNCQUFzQiw2REFBdUI7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCwgZGlzcGxheVByb2plY3ROYW1lcyB9IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0XCI7XG5pbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuXG5jb25zdCBob21lUGFnZSA9ICgoKSA9PiB7XG5cdC8vIGhvbWUgcGFnZSBleHRyYSBpbmZvcm1hdGlvbiBkaXNwbGF5XG5cdGxldCB0b3BOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRsZXQgc2lkZU5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5cblx0bGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRsb2dvLmlubmVySFRNTCA9IFwiVHJlbGxpc3RcIjtcblxuXHRsZXQgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGFkZFRhc2suaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiO1xuXHRhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Ly8gUHJvamVjdCBhZGQgdG9kbyBpdGVtIERPTSBlbGVtZW50IHdoaWNoIHRoZW4gY2FsbHMgdGhlIHByb2plY3QgYWRkIHRvZG8gaXRlbSBldmVudFxuXHRcdGlucHV0VGFzaygpO1xuXHRcdGNvbnNvbGUubG9nKFwiUHJvamVjdCBhZGQgdG9kbyBpdGVtXCIpO1xuXHR9KTtcblxuXHRsZXQgcHJvamVjdE5hdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRwcm9qZWN0TmF2VGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXG5cdGxldCBwcm9qZWN0TmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3ROYXZMaXN0LmlkID0gXCJwcm9qZWN0TmF2TGlzdFwiO1xuXG5cdGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YWRkUHJvamVjdC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG5cdGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHQvLyBDYWxscyBuZXcgRE9NIGV2ZW50IHRvIGhhbmRsZSBwcm9qZWN0IGFkZCB3aGljaCB0aGVuIGNhbGxzIHRoZSBuZXcgcHJvamVjdCBmdW5jdGlvblxuXHRcdGlucHV0UHJvamVjdCgpO1xuXHRcdGNvbnNvbGUubG9nKFwiQ3JlYXRlIG5ldyBwcm9qZWN0XCIpO1xuXHR9KTtcblxuXHR0b3BOYXZCYXIuYXBwZW5kKGxvZ28sIGFkZFRhc2spO1xuXHRzaWRlTmF2QmFyLmFwcGVuZChwcm9qZWN0TmF2VGl0bGUsIHByb2plY3ROYXZMaXN0LCBhZGRQcm9qZWN0KTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQodG9wTmF2QmFyLCBzaWRlTmF2QmFyLCBjb250ZW50KTtcbn0pKCk7XG5cbmNvbnN0IGlucHV0VGFzayA9ICgpID0+IHtcblx0Ly8gY3JlYXRlcyBET00gZWxlbWVudHMgd2hpY2ggY2FuIHRha2UgaW5wdXRzIGZvciBuZXcgdGFzayB3aGljaCBjYW4gdGhlbiBjYWxsIHRvZG8gaXRlbSBmdW5jdGlvbnNcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblx0bGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlSW5wdXRcIjtcblx0dGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgbmFtZVwiO1xuXG5cdGxldCBzZWxlY3RQcm9qZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdHNlbGVjdFByb2plY3RNZW51LmlkID0gXCJzZWxlY3RQcm9qZWN0TWVudVwiO1xuXHRzZWxlY3RQcm9qZWN0TWVudS5uYW1lID0gXCJwcm9qZWN0U2VsZWN0ZWRcIjtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0LnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gc2ltcGxpZnkgcHJvamVjdCBsaXN0IG91dHB1dFxuXHRcdGxldCBzZWxlY3RQcm9qZWN0ID0gcHJvamVjdExpc3QucHJvamVjdExpc3RbaV07XG5cdFx0Y29uc29sZS5sb2coc2VsZWN0UHJvamVjdCk7XG5cblx0XHRsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRvcHRpb24uaW5uZXJIVE1MID0gc2VsZWN0UHJvamVjdC5uYW1lO1xuXG5cdFx0c2VsZWN0UHJvamVjdE1lbnUuYXBwZW5kKG9wdGlvbik7XG5cdH1cblxuXHRsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiO1xuXHRhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0bGV0IHNlbGVjdGVkUHJvamVjdEluZGV4ID1cblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0UHJvamVjdE1lbnVcIikuc2VsZWN0ZWRJbmRleDtcblx0XHRsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdExpc3QucHJvamVjdExpc3Rbc2VsZWN0ZWRQcm9qZWN0SW5kZXhdO1xuXG5cdFx0bGV0IHRvZG9JdGVtVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWU7XG5cblx0XHRsZXQgbmV3VG9kb0l0ZW0gPSB0b2RvSXRlbShgJHt0b2RvSXRlbVRpdGxlfWApO1xuXHRcdHNlbGVjdGVkUHJvamVjdC5hZGRUb2RvSXRlbShuZXdUb2RvSXRlbSk7XG5cblx0XHRkaXNwbGF5UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuXHR9KTtcblxuXHRjb250ZW50LmFwcGVuZCh0aXRsZUlucHV0LCBzZWxlY3RQcm9qZWN0TWVudSwgYWRkVGFza0J0bik7XG59O1xuXG5jb25zdCBpbnB1dFByb2plY3QgPSAoKSA9PiB7XG5cdC8vIGNyZWF0ZXMgRE9NIGVsZW1lbnRzIHdoaWNoIGNhbiB0YWtlIGlucHV0cyBmb3IgbmV3IHByb2plY3QgdG8gY2FsbCBuZXcgcHJvamVjdCBmdW5jdGlvblxuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0bGV0IGlucHV0UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0bGV0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRwcm9qZWN0VGl0bGVJbnB1dC5pZCA9IFwicHJvamVjdFRpdGxlSW5wdXRcIjtcblx0cHJvamVjdFRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHRwcm9qZWN0VGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiTmV3IFByb2plY3QgTmFtZVwiO1xuXG5cdGxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YWRkUHJvamVjdEJ0bi5pbm5lckhUTUwgPSBcIkNyZWF0ZSBOZXcgUHJvamVjdFwiO1xuXHRhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2cocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpO1xuXHRcdGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdChgJHtwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZX1gKTtcblx0XHRjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcblx0XHRwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXHRcdGNvbnNvbGUubG9nKHByb2plY3RMaXN0LnByb2plY3RMaXN0KTtcblx0XHRkaXNwbGF5UHJvamVjdE5hbWVzKCk7XG5cdFx0aW5wdXRQcm9qZWN0RGl2LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0cmV0dXJuIG5ld1Byb2plY3Q7XG5cdH0pO1xuXG5cdGlucHV0UHJvamVjdERpdi5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQsIGFkZFByb2plY3RCdG4pO1xuXHRjb250ZW50LmFwcGVuZChpbnB1dFByb2plY3REaXYpO1xufTtcblxuZXhwb3J0IHsgaG9tZVBhZ2UsIGlucHV0VGFzaywgaW5wdXRQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyB0b2RvUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvSXRlbVwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbi8vIGRpc3BsYXlzIGluZGl2aWR1YWwgcHJvamVjdHMgb24gcGFnZVxuY29uc3QgZGlzcGxheVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuXHRjb25zdCB0b2RvSXRlbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblx0Ly8gY2xlYXIgY29udGVudFxuXHRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cblx0bGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRwcm9qZWN0TmFtZS5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWU7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRvZG9JdGVtID0gcHJvamVjdC5wcm9qZWN0TGlzdFtpXTtcblx0XHRsZXQgdG9kb0l0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cblx0XHRsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0b2RvVGl0bGUgPSB0b2RvSXRlbS50aXRsZTtcblx0XHRsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRvZG9EdWVEYXRlID0gdG9kb0l0ZW0uZHVlRGF0ZTtcblxuXHRcdGNvbnN0IG1vcmVJbmZvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRtb3JlSW5mb0J0bi5pbm5lckhUTUwgPSBcIk1vcmUgSW5mb3JtYXRpb25cIjtcblxuXHRcdG1vcmVJbmZvQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0b2RvUGFnZSh0b2RvSXRlbSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlbW92ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdHJlbW92ZVRvZG9CdG4uaW5uZXJIVE1MID0gXCJSZW1vdmUgVG9kb1wiO1xuXG5cdFx0cmVtb3ZlVG9kb0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cHJvamVjdC5yZW1vdmVUb2RvSXRlbShgJHtpfWApO1xuXHRcdFx0ZGlzcGxheVByb2plY3QocHJvamVjdCk7XG5cdFx0fTtcblxuXHRcdHRvZG9JdGVtRGl2LmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EdWVEYXRlLCBtb3JlSW5mb0J0biwgcmVtb3ZlVG9kb0J0bik7XG5cblx0XHR0b2RvSXRlbUxpc3QuYXBwZW5kKHRvZG9JdGVtRGl2KTtcblx0fVxuXHRjb250ZW50LmFwcGVuZChwcm9qZWN0TmFtZSwgdG9kb0l0ZW1MaXN0KTtcblxuXHRyZXR1cm4gY29udGVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0TmFtZXMgPSBmdW5jdGlvbiAoKSB7XG5cdGxldCBnZXRQcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0LnByb2plY3RMaXN0O1xuXG5cdGxldCBkaXNwbGF5UHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYXZMaXN0XCIpO1xuXHQvLyBjbGVhcnMgcHJvamVjdCBsaXN0XG5cdGRpc3BsYXlQcm9qZWN0TGlzdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdGxldCBkaXNwbGF5UHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBnZXRQcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBjdXJyZW50UHJvamVjdCA9IGdldFByb2plY3RMaXN0W2ldO1xuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcblx0XHRsZXQgZGlzcGxheVByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGRpc3BsYXlQcm9qZWN0TmFtZS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdC5nZXROYW1lKCk7XG5cdFx0ZGlzcGxheVByb2plY3ROYW1lLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkaXNwbGF5UHJvamVjdChjdXJyZW50UHJvamVjdCk7XG5cdFx0fTtcblx0XHRkaXNwbGF5UHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoZGlzcGxheVByb2plY3ROYW1lKTtcblx0XHRjb25zb2xlLmxvZyhkaXNwbGF5UHJvamVjdE5hbWUpO1xuXHR9XG5cdGNvbnNvbGUubG9nKGRpc3BsYXlQcm9qZWN0TGlzdCk7XG5cdGRpc3BsYXlQcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChkaXNwbGF5UHJvamVjdExpc3QpO1xuXHRyZXR1cm4gZGlzcGxheVByb2plY3RMaXN0RGl2O1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3QsIGRpc3BsYXlQcm9qZWN0TmFtZXMgfTtcbiIsIi8vIERpc3BsYXkgZGVzdGFpbGVkIGluZm9ybWF0aW9uIGZvciB0b2RvIGl0ZW1cblxuY29uc3QgdG9kb1BhZ2UgPSAodG9kbykgPT4ge1xuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cblx0bGV0IHRpdGxlID0gdG9kby50aXRsZTtcblx0bGV0IGRlc2NyaXB0aW9uID0gdG9kby5kZXNjcmlwdGlvbjtcblx0bGV0IGR1ZURhdGUgPSB0b2RvLmR1ZURhdGU7XG5cdGxldCBwcmlvcml0eSA9IHRvZG8ucHJpb3JpdHk7XG5cdGxldCBub3RlcyA9IHRvZG8ubm90ZXM7XG5cblx0Y29udGVudC5pbm5lckhUTUwgKz0gYDx1bD5cbiAgICAgICAgICAgIDxsaT4ke3RpdGxlfTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtkZXNjcmlwdGlvbn08L2xpPlxuICAgICAgICAgICAgPGxpPiR7ZHVlRGF0ZX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7cHJpb3JpdHl9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke25vdGVzfTwvbGk+XG4gICAgICAgIDwvdWw+YDtcblxuXHRyZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7IHRvZG9QYWdlIH07XG4iLCIvLyBQcm9qZWN0cyB3aGVyZSB0b2RvIGxpc3QgaXRlbXMgY2FuIGJlIGtlcHQuIFByb2plY3RzIGNhbiBiZSBjcmVhdGVkIGFuZCBkZWxldGVkLiBEZWZhdWx0IHByb2plY3QgY3JlYXRlZCBpbml0aWFsbHkgYW5kIHRvZG8gaXRlbXMgYXJlIGF1dG8gYWRkZWRcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG5cdGxldCBwcm9qZWN0TGlzdCA9IFtdOyAvLyBzaG91bGQgY2hhbmdlIHRvIHRvZG9saXN0XG5cblx0Y29uc3QgYWRkVG9kb0l0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvamVjdExpc3QpO1xuXHRcdHRoaXMucHJvamVjdExpc3QucHVzaChpdGVtKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVUb2RvSXRlbSA9IGZ1bmN0aW9uIChpbmRleCkge1xuXHRcdGNvbnNvbGUubG9nKFwicmVtb3ZlZCB0b2RvIGl0ZW0gc3VjY2VzcyB5YXkhXCIpO1xuXHRcdGNvbnNvbGUubG9nKGAke3RoaXMucHJvamVjdExpc3RbaW5kZXhdfWApO1xuXHRcdC8vIHJlbW92ZSB0b2RvIGl0ZW0gKHVzZSBsb2NhbCBzdG9yYWdlIHdpdGggaW5kZXggb2YpXG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9O1xuXG5cdGNvbnN0IGdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH07XG5cblx0cmV0dXJuIHsgZ2V0TmFtZSwgbmFtZSwgcHJvamVjdExpc3QsIGFkZFRvZG9JdGVtLCByZW1vdmVUb2RvSXRlbSB9O1xufTtcblxuLy8gUHJvamVjdCBsaXN0IG9mIGFsbCB0aGUgcHJvamVjdHM6XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCgpID0+IHtcblx0bGV0IHByb2plY3RMaXN0ID0gW107XG5cblx0Y29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuXHR9O1xuXG5cdGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge307XG5cblx0cmV0dXJuIHsgcHJvamVjdExpc3QsIGFkZFByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9O1xuIiwiLy8gQ3JlYXRlcyB0aGUgdG9kbyBpdGVtcyB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24uXG5cbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG5cdC8vIHRvZG8gSXRlbSBjb25zdHJ1Y3RvclxuXG5cdGNvbnN0IGVkaXRUaXRsZSA9IGZ1bmN0aW9uICh1cGRhdGVkVGl0bGUpIHtcblx0XHR0aGlzLnRpdGxlID0gdXBkYXRlZFRpdGxlO1xuXHRcdHJldHVybiB0aGlzLnRpdGxlO1xuXHR9O1xuXG5cdGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICh1cGRhdGVkRGVzY3JpcHRpb24pIHtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gdXBkYXRlZERlc2NyaXB0aW9uO1xuXHRcdHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuXHR9O1xuXG5cdGNvbnN0IGVkaXREdWVEYXRlID0gZnVuY3Rpb24gKHVwZGF0ZWREdWVEYXRlKSB7XG5cdFx0dGhpcy5kdWVEYXRlID0gdXBkYXRlZER1ZURhdGU7XG5cdFx0cmV0dXJuIHRoaXMuZHVlRGF0ZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZURhdGUsXG5cdFx0cHJpb3JpdHksXG5cdFx0bm90ZXMsXG5cdFx0ZWRpdFRpdGxlLFxuXHRcdGVkaXREZXNjcmlwdGlvbixcblx0XHRlZGl0RHVlRGF0ZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7IHRvZG9JdGVtIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5pbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5UHJvamVjdE5hbWVzIH0gZnJvbSBcIi4vZGlzcGxheVByb2plY3RcIjtcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vZGlzcGxheUhvbWVQYWdlXCI7XG5pbXBvcnQgeyB0b2RvUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvSXRlbVwiO1xuXG5sZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xucHJvamVjdExpc3QuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbmxldCBzZWNvbmRhcnlQcm9qZWN0ID0gcHJvamVjdChcIlNlY29uZGFyeSBQcm9qZWN0XCIpO1xucHJvamVjdExpc3QuYWRkUHJvamVjdChzZWNvbmRhcnlQcm9qZWN0KTtcblxuY29uc3QgcG90YXRvID0gdG9kb0l0ZW0oXG5cdFwiUG90YXRvIFRpdGxlXCIsXG5cdFwidGhpcyBpcyBkZXNjcmlwdGlvblwiLFxuXHRcIjEyLzA0LzIwMjVcIixcblx0XCJUb3AgcHJpb3JpdHlcIixcblx0XCJSYW5kb20gTm90ZXNcIixcblx0XCJDb21wbGV0ZVwiXG4pO1xuXG5jb25zdCBwb3RhdG8yID0gdG9kb0l0ZW0oXG5cdFwiUG90YXRvIFRpdGxlXCIsXG5cdFwidGhpcyBpcyBkZXNjcmlwdGlvblwiLFxuXHRcIjEyLzA0LzIwMjVcIixcblx0XCJUb3AgcHJpb3JpdHlcIixcblx0XCJSYW5kb20gTm90ZXNcIixcblx0XCJDb21wbGV0ZVwiXG4pO1xuXG5wb3RhdG8uZWRpdFRpdGxlKFwibmV3UG90YXRvVGl0bGVcIik7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbShwb3RhdG8pO1xuZGVmYXVsdFByb2plY3QuYWRkVG9kb0l0ZW0ocG90YXRvMik7XG5cbmRpc3BsYXlQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbmRpc3BsYXlQcm9qZWN0TmFtZXMoKTtcblxuY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==