import { todoItem } from "./todoItems";
import { project, projectList } from "./project";
import { displayProject } from "./displayProject";
import { homePage } from "./displayHomePage";
import { todoPage } from "./displayTodoItem";

let defaultProject = project("Default Project");
projectList.addProject(defaultProject);
console.log(defaultProject);

let secondaryProject = project("Secondary Project");
projectList.addProject(secondaryProject);

const potato = todoItem(
	"Potato Title",
	"this is description",
	"12/04/2025",
	"Top priority",
	"Random Notes",
	"Complete"
);

const potato2 = todoItem(
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
displayProject(defaultProject);

console.log(projectList);
