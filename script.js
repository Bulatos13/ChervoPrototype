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
		} else {
			return;
		}
	})
}