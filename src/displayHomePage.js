import { todoPage } from "./displayTodoItem";

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

			const btn = document.createElement("button");
			btn.innerHTML = "Click me and check the console!";

			btn.onclick = function () {
				todoPage(todoItem);
			};
			element.append(todoTitle, todoDueDate, btn);
			
		}
		content.appendChild(element);
		return content;
	};

	return { displayProject };
})();

export { homePage };
