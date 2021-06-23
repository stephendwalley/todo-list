// Display destailed information for todo item
const todoDetails = function(){}


const todoPage = (() => {
	let content = document.createElement("div");
    document.body.appendChild(content);

	const displayTodoItem = function (todo) {
		let title = todo.title;
		let description = todo.description;
		let dueDate = todo.dueDate;
		let priority = todo.priority;
		let notes = todo.notes;

		content.innerHTML += `<ul>
            <li>${title}</li>
            <li>${description}</li>
            <li>${dueDate}</li>
            <li>${priority}</li>
            <li>${notes}</li>
        </ul>`;
	};

	return { displayTodoItem };
})();

export {todoPage};
