// PAGE SELECTOR BUTTONS

//create
let page = document.getElementsByClassName('page');

let pageSelector = document.getElementById('page-selector');

function btnAnimationElementsCreate(e){
	let div1 = document.createElement('div');
	div1.setAttribute('class', 'btn-shadow');

	let div2 = document.createElement('div');
	div2.setAttribute('class', 'btn-lid');

	e.appendChild(div1);
	e.appendChild(div2);
}

let btnLid = document.getElementsByClassName('btn-lid');

for(let i = 0; i < page.length; i++){
	let pageSelectorButton = document.createElement('div');
	pageSelectorButton.setAttribute('class', 'page-selector-button hover-shadow');

	btnAnimationElementsCreate(pageSelectorButton);
	pageSelector.appendChild(pageSelectorButton);
	btnLid[i].style.transform = `translate(10px, -6px)`;
}

//work
//visible-page-position-box heihgt

let visiblePage = document.getElementById('visible-page-position');
let visibleHeight = document.getElementById('visible-page');
let decoration = document.getElementsByClassName('decoration');

function giveHeight(e){
	visiblePage.style.height = e.children[0].clientHeight + 30 + `px`;
}
giveHeight(visibleHeight);

function btnAnimation(e){
	e.style.transform = `translate(0, 0)`;
	setTimeout(() => {e.style.transform = `translate(10px,-6px)`}, 550);
}

let pageBtn = document.getElementsByClassName('page-selector-button');
pageBtn[0].setAttribute('id', 'active-button');

for(let i = 0; i < page.length; i++){
	pageBtn[i].addEventListener('click', () => {

		if(page[i].id != 'visible-page'){

			for(let i = 0; i < page.length; i++){
				page[i].removeAttribute('id');
				pageBtn[i].removeAttribute('id');

			}
			page[i].setAttribute('id', 'visible-page');
			btnAnimation(btnLid[i]);
			giveHeight(page[i]);

			decoration[0].style.height = document.clientHeight + 50 + `px`;
		}
	
	})
}
