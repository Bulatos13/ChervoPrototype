// PAGE SELECTOR BUTTONS

//create
let page = document.getElementsByClassName('page');

let pageSelector = document.getElementById('page-selector');

for(let i = 0; i < page.length; i++){
	let pageSelectorButton = document.createElement('div');
	pageSelectorButton.setAttribute('class', 'page-selector-button hover-shadow');

	pageSelector.appendChild(pageSelectorButton);
}

//work
//visible-page-position-box heihgt
let visiblePage = document.getElementById('visible-page-position');

let visibleHeight = document.getElementById('visible-page');
console.log(visibleHeight.children[0].clientHeight);
function giveHeight(e){
	visiblePage.style.height = e.children[0].clientHeight + 30 + `px`;
}
giveHeight(visibleHeight);
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
			pageBtn[i].setAttribute('id', 'active-button');
			giveHeight(page[i]);
		}
	
	})
}
