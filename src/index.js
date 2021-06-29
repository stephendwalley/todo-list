import { todoItem } from "./todoItems";
import { project, projectList } from "./project";
import { displayProject, displayProjectNames } from "./displayProject";
import { homePage } from "./displayHomePage";
import { todoPage } from "./displayTodoItem";
import { updateStorage, initiateStorage } from "./localStorage"
import "./style.css";

// let defaultProject = project("Default Project");
// projectList.addProject(defaultProject);
// console.log(defaultProject);

// let secondaryProject = project("Secondary Project");
// projectList.addProject(secondaryProject);

// const potato = todoItem(
// 	"Potato Title",
// 	"this is description",
// 	"12/04/2025",
// 	"Top priority"
// );

// const potato2 = todoItem(
// 	"Potato Title",
// 	"this is description",
// 	"12/04/2025",
// 	"Top priority"
// );

// potato.editTitle("newPotatoTitle");
// defaultProject.addTodoItem(potato);
// defaultProject.addTodoItem(potato2);
initiateStorage();
displayProject(projectList.projectList[0]);
displayProjectNames();

// console.log(projectList);


