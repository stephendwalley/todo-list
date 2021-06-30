import { homePage } from "./displayHomePage";
import { todoItem } from "./todoItems";
import { initiateStorage, updateStorage } from "./localStorage";
import { projectList } from "./project";
import "./style.css";

import { format } from "date-fns";
// Display destailed information for todo item

const todoPage = (todo) => {
	let content = document.getElementById("content");

	let detailsModal = document.createElement("div");
	detailsModal.classList.add("modal");
	let detailsModalContent = document.createElement("div");
	detailsModalContent.classList.add("modal-content");
	let spanClose = document.createElement("span");
	spanClose.innerHTML = "&times;";
	spanClose.classList.add("close");

	spanClose.onclick = () => {
		detailsModal.remove();
	};

	window.onclick = function (event) {
		if (event.target == detailsModal) {
			detailsModal.remove();
		}
	};

	let todoInformation = document.createElement("p");

	detailsModal.appendChild(detailsModalContent);
	detailsModalContent.append(spanClose, todoInformation);

	let title = document.createElement("div");
	title.id = "title";

	title.innerHTML = todo.title;
	title.onclick = function () {
		title.onclick = "";

		let editTitleDiv = document.createElement("input");
		editTitleDiv.type = "text";
		editTitleDiv.value = todo.title;

		let saveTitle = document.createElement("button");
		saveTitle.innerHTML = "Save";
		saveTitle.onclick = function () {
			let updatedTitle = editTitleDiv.value;
			console.log(updatedTitle);
			todo.editTitle(updatedTitle);
			detailsModal.remove();
			todoPage(todo);
			updateStorage(projectList.projectList);

			// Find a way to reload the project list page after closing modal
		};

		let cancelTitle = document.createElement("button");
		cancelTitle.innerHTML = "Cancel";
		cancelTitle.onclick = function () {
			detailsModal.remove();
			todoPage(todo);
		};

		title.innerHTML = "";
		title.append(editTitleDiv, saveTitle, cancelTitle);
	};

	let description = document.createElement("div");
	description.innerHTML = todo.description;
	description.onclick = function () {
		description.onclick = "";

		let editDescriptionDiv = document.createElement("input");
		editDescriptionDiv.type = "text";
		editDescriptionDiv.value = todo.description;

		let saveDescription = document.createElement("button");
		saveDescription.innerHTML = "Save";
		saveDescription.onclick = function () {
			let updatedDescription = editDescriptionDiv.value;
			todo.editDescription(updatedDescription);
			detailsModal.remove();
			todoPage(todo);
			updateStorage(projectList.projectList);
		};

		let cancelDescription = document.createElement("button");
		cancelDescription.innerHTML = "Cancel";
		cancelDescription.onclick = function () {
			detailsModal.remove();
			todoPage(todo);
		};

		description.innerHTML = "";
		description.append(
			editDescriptionDiv,
			saveDescription,
			cancelDescription
		);
	};

	let dueDate = document.createElement("div");
	if (todo.dueDate != null) {
		dueDate.innerHTML = format(new Date(todo.dueDate), "MMM d");
	} else {
		dueDate.innerHTML = "Add Due Date";
	}

	dueDate.onclick = function () {
		dueDate.onclick = "";

		let editDateDiv = document.createElement("input");
		editDateDiv.type = "date";

		let saveDate = document.createElement("button");
		saveDate.innerHTML = "Save";
		saveDate.onclick = function () {
			let updatedDate = format(new Date(editDateDiv.value), "MMM d");
			todo.editDueDate(updatedDate);
			detailsModal.remove();
			todoPage(todo);
			updateStorage(projectList.projectList);
		};

		let cancelDate = document.createElement("button");
		cancelDate.innerHTML = "Cancel";
		cancelDate.onclick = function () {
			detailsModal.remove();
			todoPage(todo);
		};

		dueDate.innerHTML = "";
		dueDate.append(editDateDiv, saveDate, cancelDate);
	};

	let priority = document.createElement("div");
	priority.innerHTML = todo.priority;

	todoInformation.append(title, description, dueDate, priority);

	content.appendChild(detailsModal);

	return content;
};

export { todoPage };
