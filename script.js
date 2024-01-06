
// CONTAINER HEIGHT
/*
let windowHeight = window.innerHeight;

let container = document.getElementById('container');
container.style.height = innerHeight + `px`;

let header = document.getElementById('header');
let footer = document.getElementById('footer');

let main = document.getElementById('main');
main.style.height = windowHeight - header.clientHeight - footer.clientHeight + `px`;
console.log(main.style.height = windowHeight - header.clientHeight - footer.clientHeight + `px`);
*/
// PAGE BUTTONS

let pages = document.getElementsByClassName('page');

let pageButtons = document.getElementById('page-buttons-color');

for(let i = 0; i < pages.length; i++){
	let pageButton = document.createElement('div');
	pageButton.classList.toggle('page-button');

	pageButtons.appendChild(pageButton);
}

	// PAGE BUTTONS WORKS

	let Buttons = document.getElementsByClassName('page-button');

	for(let i = 0; i < pages.length; i++){
		Buttons[i].addEventListener('click', () => {
			for(let i = 0; i < pages.length; i++){
				pages[i].removeAttribute('id');
			}
			pages[i].setAttribute('id', 'visible-page');
		})
	}

//SLIDER1

let slider1 = document.getElementById('slider-1');

let slideS = document.getElementsByClassName('slider-1-slide');

let slide_Id_s = ['slide-1', 'slide-2', 'slide-3'];

function change_Id(){
	for (let i = 0; i < slideS.length; i++){
		if (slideS[i].id == 'slide-1'){

			slideS[i].removeAttribute('id');

			i += 1;
			if (i == 7){
				i = 0;
				slideS[i].setAttribute('id', 'slide-2');
			} else {
				slideS[i].setAttribute('id', 'slide-2');
			}
			let i2 = i + 1;
			if (i2 == 7){
				i2 = 0;
				slideS[i2].setAttribute('id', 'slide-2');
			} else {
				slideS[i2].setAttribute('id', 'slide-2');
			}

			let i3 = i + 2;
			if(i3 == 7){
				i3 = 0;
				slideS[i].setAttribute('id', 'slide-3');
			} else {
				slideS[i].setAttribute('id', 'slide-3');
			}
		}
	}
}

slider1.addEventListener('click', change_Id);