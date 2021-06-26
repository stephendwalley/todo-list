import "./style.css";
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
	title.innerHTML = todo.title;
	title.onclick = function () {
		let editTitleDiv = document.createElement("input");
		editTitleDiv.type = "text";
		editTitleDiv.value = todo.title;

		let saveTitle = document.createElement("button");
		saveTitle.innerHTML = "Save";
		saveTitle.onclick = function () {};

		let cancelTitle = document.createElement("button");
		cancelTitle.innerHTML = "Cancel";
		cancelTitle.onclick = function () {};

		title.innerHTML = "";
		title.append(editTitleDiv, saveTitle, cancelTitle);
	};

	let description = document.createElement("div");
	description.innerHTML = todo.description;

	let dueDate = document.createElement("div");
	dueDate.innerHTML = todo.dueDate;

	let priority = document.createElement("div");
	priority.innerHTML = todo.priority;

	let notes = document.createElement("div");
	notes.innerHTML = todo.notes;

	todoInformation.append(title, description, dueDate, priority, notes);
	// todoInformation.innerHTML += `<ul>
	//         <li>${title}</li>
	//         <li>${description}</li>
	//         <li>${dueDate}</li>
	//         <li>${priority}</li>
	//         <li>${notes}</li>
	//     </ul>`;

	content.appendChild(detailsModal);

	return content;
};

export { todoPage };
