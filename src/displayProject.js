import { todoPage } from "./displayTodoItem";
import { projectList } from "./project";

// displays individual projects on page
const displayProject = function (project) {
	const todoItemList = document.createElement("ul");
	const content = document.getElementById("content");

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
			todoPage(todoItem);
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
	let getProjectList = projectList.projectList;

	let displayProjectList = document.getElementById("projectNavList");

	for (let i = 0; i < getProjectList.length; i++) {
		let currentProject = getProjectList[i];
		console.log(currentProject);
		let displayProjectName = `<li>${currentProject.getName()}</li>`;
		displayProjectList.innerHTML += displayProjectName;
		console.log(displayProjectName);
	}
	console.log(displayProjectList);
	return displayProjectList;
};

export { displayProject, displayProjectNames };
