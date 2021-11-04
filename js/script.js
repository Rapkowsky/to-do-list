const tasks = [
	{
		content: "utworzyć zadanie",
		done: false,
	},
	{
		content: "utworzono zadanie",
		done: true,
	},
];

const render = () => {
	let htmlContent = "";

	for (const task of tasks) {
		htmlContent += `
            <li${task.done ? ' style="text-decoration:line-through"' : ""}>
            ${task.content}
            </li>
            `;
	}
	document.querySelector(".js-tasks").innerHTML = htmlContent;
};

const init = () => {
	render();

	const form = document.querySelector(".js-form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const newTaskContent = document.querySelector(".js-newTask").value.trim();
		if (newTaskContent === "") {
			return;
		}
		tasks.push({
			content: newTaskContent,
		});
		render();
	});
};

init();
