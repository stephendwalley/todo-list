import todoPage from "./displayTodoItem";

// Interacts with the DOM to display relevant elements

const homePage = (() => {
	let content = document.getElementById("content");

	const home = function () {
		console.log("running");
	};

	const displayProject = function (project) {
		console.log(project);

		for (let i = 0; i < project.projectList.length; i++) {
			let element = project.projectList[i];

			content.innerHTML += `<li>${element.title}</li>
			<button id = "${i}" > More Information </button>`;

			let button = document.createElement("button");
			button.innerHTML = "Info"
			button.addEventListener("click", function () {
				console.log("clicked")
			})

			content.appendChild(button);

			// let button = document.getElementById(`${i}`);
			// console.log(button);
			// button.addEventListener("click", function () {
			// 	console.log("clicked");
			// });
		}

		// project.projectList.forEach((element) => {
		// 	content.innerHTML += `<li>${element.title}</li>
		// 	<button id = "${element.title}" > More Information </button>`;
		// 	let button = document.getElementById(`${element.title}`);
		// 	console.log(button);
		// 	button.addEventListener("click", function () {
		// 		console.log("clicked");
		// 	});
		// });
	};

	return { home, displayProject };
})();

function tester() {
	console.log("tester worked");
}

export default homePage;
