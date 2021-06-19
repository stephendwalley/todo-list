// Projects where todo list items can be kept. Projects can be created and deleted. Default project created initially and todo items are auto added

const project = (name) => {
    let projectList = [];

	const addTodoItem = function (item) {
        console.log(this.projectList)
        this.projectList.push(item);
    };

    const removeTodoItem = function (item) {
        // remove todo item (use local storage with index of)
    }

	return { name, projectList, addTodoItem };
};


export default project;