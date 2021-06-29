import { todoPage } from "./displayTodoItem";
import { projectList } from "./project";
import { initiateStorage, updateStorage } from "./localStorage";
import "./style.css";

// displays individual projects on page
const displayProject = function (project) {
	const todoItemList = document.createElement("ul");

	const content = document.getElementById("content");

	// clear content
	content.innerHTML = "";

	let projectName = document.createElement("h2");
	projectName.classList.add("todoItemListHeader");
	projectName.innerHTML = project.name;

	for (let i = 0; i < project.projectList.length; i++) {
		let todoItem = project.projectList[i];
		let todoItemDiv = document.createElement("li");
		todoItemDiv.classList.add("todoItemList");

		todoItemDiv.onclick = function () {
			// calls more information to the page in form of modal which can then be edited
			todoPage(todoItem);
		};

		let todoItemMainInfo = document.createElement("div");

		let todoTitle = document.createElement("div");
		todoTitle.innerHTML = todoItem.title;

		// Make it check if there is scheduled date: if scheduled display date, if not then display button to schedule task
		let todoDueDate = document.createElement("div");
		if (todoItem.dueDate == null) {
			todoItemMainInfo.append(todoTitle);
			console.log("no due date");
		} else {
			todoDueDate.innerHTML = todoItem.dueDate;
			todoItemMainInfo.append(todoTitle, todoDueDate);
		}

		const removeTodoBtn = document.createElement("span");
		removeTodoBtn.innerHTML = "&times;";
		removeTodoBtn.classList.add("remove-todo");

		removeTodoBtn.onclick = function () {
			project.removeTodoItem(`${i}`);
			displayProject(project);
			updateStorage(projectList.projectList);
		};

		todoItemDiv.append(todoItemMainInfo, removeTodoBtn);

		todoItemList.append(todoItemDiv);
	}
	content.append(projectName, todoItemList);

	return content;
};

const displayProjectNames = function () {
	let getProjectList = projectList.projectList;

	let displayProjectListDiv = document.getElementById("projectNavList");
	// clears project list
	displayProjectListDiv.innerHTML = "";

	let displayProjectList = document.createElement("ul");

	for (let i = 0; i < getProjectList.length; i++) {
		let currentProject = getProjectList[i];
		console.log(currentProject);
		let displayProjectName = document.createElement("li");
		displayProjectName.classList.add("sideNavLinks");
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

export { displayProject, displayProjectNames };
