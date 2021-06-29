import { todoItem } from "./todoItems";
import { project, projectList } from "./project";

const updateStorage = function (data) {
	const APP_DATA_KEY = "projectData";

	if (typeof data == "object") {
		data = JSON.stringify(data);
	}

	localStorage.setItem(APP_DATA_KEY, data);
};

const initiateStorage = function () {
	// Get data;
	// loop through array and create new projects;
	// loop through project lists and create new todo items
	
	const APP_DATA_KEY = "projectData";

	let data = localStorage.getItem(APP_DATA_KEY);
	

	let initialData = JSON.parse(data);
	for (let i = 0; i < initialData.length; i++) {
		let newProject = project(initialData[i].name);
		console.log(initialData[i].name);
		console.log(newProject);
		for (let j = 0; j < initialData[i].projectList.length; j++) {
			let getTodo = initialData[i].projectList[j];
			let newTodo = todoItem(getTodo.title, getTodo.description, getTodo.dueDate, getTodo.priority);
			console.log(initialData[i].projectList[j]);
			console.log(newTodo);
			newProject.addTodoItem(newTodo);
			console.log(newProject);
		}
		console.log(newProject)
		projectList.addProject(newProject);
	}

	console.log(projectList.projectList);
};

export { updateStorage, initiateStorage };
