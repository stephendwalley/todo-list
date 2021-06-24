import { project, projectList } from "./project";
import { todoItem } from "./todoItems";

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
	titleInput.id = "titleInput";
	titleInput.type = "text";
	titleInput.placeholder = "Task name";

	let selectProjectMenu = document.createElement("select");
	selectProjectMenu.id = "selectProjectMenu";
	selectProjectMenu.name = "projectSelected";

	for (let i = 0; i < projectList.projectList.length; i++) {
		// simplify project list output
		let selectProject = projectList.projectList[i];
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
		let selectedProject = projectList.projectList[selectedProjectIndex];

		let todoItemTitle = document.getElementById("titleInput").value;

		let newTodoItem = todoItem(`${todoItemTitle}`);
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

export { homePage, inputTask, inputProject };
