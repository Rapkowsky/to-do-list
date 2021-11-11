{
	const tasks = [];

	const addNewTask = (newTaskContent) => {
		tasks.push({
			content: newTaskContent,
		});
		render();
	};

	const deleteTask = (taskIndex) => {
		tasks.splice(taskIndex, 1);
		render();
	};

	const toggleTaskDone = (taskIndex) => {
		tasks[taskIndex].done = !tasks[taskIndex].done;
		render();
	};

	const assignRemoveEvents = () => {
		const removeButtons = document.querySelectorAll(".js-remove");

		removeButtons.forEach((removeButton, taskIndex) => {
			removeButton.addEventListener("click", () => {
				deleteTask(taskIndex);
			});
		});
	};

	const bindToggleDoneEvents = () => {
		const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

		toggleDoneButtons.forEach((toggleDonebutton, taskIndex) => {
			toggleDonebutton.addEventListener("click", () => {
				toggleTaskDone(taskIndex);
			});
		});
	};

	const render = () => {
		let htmlTaskListContent = "";

		for (const task of tasks) {
			htmlTaskListContent += `
			<li class="tasks__item js-task">
			<button class="tasks__button tasks__button--toggleDone js-toggleDone">				
				${task.done ? "✔" : ""}
			</button>
			<span class="tasks__content
				${task.done ? "tasks__content--done" : ""}">
				${task.content}
			</span>
			<button class="tasks__button tasks__button--remove js-remove">🗑
			</button>
			</li>
			`;
		}
		document.querySelector(".js-tasks").innerHTML = htmlTaskListContent;

		assignRemoveEvents();
		bindToggleDoneEvents();
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const newTaskElement = document.querySelector(".js-newTask");
		const newTaskContent = newTaskElement.value.trim();

		if (newTaskContent !== "") {
			addNewTask(newTaskContent);
			newTaskElement.value = "";
		}
		newTaskElement.focus();
	};

	const init = () => {
		render();
		const form = document.querySelector(".js-form");

		form.addEventListener("submit", onFormSubmit);
	};

	init();
}
