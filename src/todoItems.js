// Creates the todo items using a factory function.

const todoItem = (title, description, dueDate, priority, notes, checklist) => {
	// todo Item constructor

	const editTitle = function (updatedTitle) {
		this.title = updatedTitle;
		return this.title;
	};

	const editDescription = function (updatedDescription) {
		this.description = updatedDescription;
		return this.description;
	};

	const editDueDate = function (updatedDueDate) {
		this.dueDate = updatedDueDate;
		return this.dueDate;
	};

	return {
		title,
		description,
		dueDate,
		priority,
		notes,
		checklist,
		editTitle,
        editDescription,
        editDueDate,
	};
};

export default todoItem;
