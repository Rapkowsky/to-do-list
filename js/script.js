{
	const tasks = [
		{
			content: "niewykonane zadanie",
			done: false,
		},
		{
			content: "wykonane zadanie",
			done: true,
		},
	];

	const render = () => {
		let htmlText = "";

		for (const ticket of tasks) {
			htmlText += `
			<li ${ticket.done ? 'style="text-decoration: line-through"' : ""}>
				${ticket.content}
			</li>
			`;
		}
		document.querySelector(".js-tasks").innerHTML = htmlText;
	};

	const addNewTask = (newTicketContent) => {
		tasks.push({
			content: newTicketContent,
		});
		render();
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const newTicketContent = document.querySelector(".js-newTask").value.trim();
		if (newTicketContent === "") {
			return;
		}
		addNewTask(newTicketContent);
	};

	const init = () => {
		render();
		const form = document.querySelector(".js-form");

		form.addEventListener("submit", onFormSubmit);
	};

	init();
}
