const boxes = document.querySelectorAll('.box');
const targets = document.querySelectorAll('.target');

function dragStart(e) {
	e.dataTransfer.setData('text', this.id);
	setTimeout(() => this.style.display = 'none', 0);
	this.classList.add('width-height');
};

function dragEnd() {
	for(let box of this.children) {
		if(this.classList[0] !== 'target') {
			box.classList.remove('width-height');
		}
	};

	boxes.forEach(box => {
		box.removeAttribute('style');	
	});
};

function dragOver(e) {
	e.preventDefault();
};

function dragDrop(e) {
	e.preventDefault();

	const id = e.dataTransfer.getData('text');
	const el = document.getElementById(id); 

	if(this.children.length === 0) {
		this.appendChild(el);
		el.classList.add('width-height');
	}

	if(this.classList[0] === 'section-b') {
		this.appendChild(el);	
		el.classList.remove('width-height');
	}

	el.removeAttribute('style');
};

boxes.forEach(box => {
	box.addEventListener('dragstart', dragStart);
})

targets.forEach(target => {
	target.addEventListener('dragover', dragOver);
	target.addEventListener('dragend', dragEnd);
	target.addEventListener('drop', dragDrop);
});