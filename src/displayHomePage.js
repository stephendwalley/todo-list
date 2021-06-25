import { project, projectList } from "./project";
import { displayProject, displayProjectNames } from "./displayProject";
import { todoItem } from "./todoItems";

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
	let content = document.getElementById("content");

	let projectTitleInput = document.createElement("input");
	projectTitleInput.id = "projectTitleInput";
	projectTitleInput.type = "text";
	projectTitleInput.placeholder = "New Project Name";

	let addProjectBtn = document.createElement("button");
	addProjectBtn.innerHTML = "Create New Project";
	addProjectBtn.addEventListener("click", () => {
		console.log(projectTitleInput.value);
		let newProject = project(`${projectTitleInput.value}`);
		console.log(newProject);
		projectList.addProject(newProject);
		console.log(projectList.projectList);
		displayProjectNames();
		return newProject;
	});

	content.append(projectTitleInput, addProjectBtn);
};

export { homePage, inputTask, inputProject };
