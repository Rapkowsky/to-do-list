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
			<li>
				${ticket.content}
			</li>
			`;
		}
		document.querySelector(".js-tasks").innerHTML = htmlText;
	};
	

	const init = () => {
		render();
	};

	init();
}
