import { todoItem } from "./todoItems";
import { project } from "./project";
import {displayProject } from "./displayProject";
import { homePage } from "./displayHomePage";
import { todoPage } from "./displayTodoItem";

let defaultProject = project("Default Project");
console.log(defaultProject);

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

console.log(potato);
potato.editTitle("newPotatoTitle");
console.log(potato.title);

defaultProject.addTodoItem(potato);
defaultProject.addTodoItem(potato2);
console.log(defaultProject);

displayProject(defaultProject);
