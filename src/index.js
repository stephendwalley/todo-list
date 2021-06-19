import todoItem from "./todoItems"
import project from "./project"
import display from "./displayHomePage"
import todoPage from "./displayTodoItem"

let defaultProject = project("Default Project")
console.log(defaultProject)


const potato = todoItem(
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


defaultProject.addTodoItem(potato)
console.log(defaultProject)

display.displayProject(defaultProject);
todoPage.displayTodoItem(defaultProject.projectList[0])
