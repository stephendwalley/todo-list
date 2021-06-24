import { todoPage } from "./displayTodoItem";

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
			todoPage(todoItem);
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

export { displayProject };
