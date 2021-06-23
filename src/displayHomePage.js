import {todoPage} from './displayTodoItem'

// Interacts with the DOM to display relevant elements

const homePage = (() => {
	let content = document.createElement("div");
	document.body.appendChild(content);
	
	const displayProject = function (project) {
		console.log(project);

		for (let i = 0; i < project.projectList.length; i++) {
			let element = project.projectList[i];

			let button = document.createElement("button");
			button.innerHTML = "Info"
			button.onclick = function () {
				todoPage.displayTodoItem(element)
			}
			content.appendChild(button);

			
			content.innerHTML += `<li>${element.title}</li>
			<button onclick = "todoPage.displayTodoItem"></button>
			<button id = "${i}" > More Information </button>`;
		}
	};

	return { displayProject };
})();


export { homePage};
