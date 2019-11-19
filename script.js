var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.className = 'listItem';
	ul.appendChild(li);
	input.value = "";
	createListButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	let eventTarget = event.target;
	if (eventTarget.classList.contains('listItem')) {
		event.target.classList.toggle('done');
		console.log(event.target);
	}
}

function createListButton(li) {
	var btn = document.createElement('button');
	btn.appendChild(document.createTextNode('Delete'));
	btn.className = 'btn';
	li.appendChild(btn);
}

function deleteListItem(event) {
	let eventTarget = event.target;
	if (eventTarget.classList.contains('btn')) {
		eventTarget.parentNode.remove();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', toggleDone);

ul.addEventListener('click', deleteListItem);