// PAGE SELECTOR BUTTONS

//create
let page = document.getElementsByClassName('page');
let pageSelector = document.getElementById('page-selector');

//work
//visible-page-position-box heihgt

let visiblePage = document.getElementById('visible-page-position');
let visibleHeight = document.getElementById('visible-page');

let btnLid = document.getElementsByClassName('btn-lid');
for(let i = 0; i < page.length; i++){
	let pageSelectorButton = document.createElement('div');
	pageSelectorButton.setAttribute('class', 'page-selector-button hover-shadow');
	pageSelector.appendChild(pageSelectorButton);

	let div1 = document.createElement('div');
	div1.setAttribute('class', 'btn-shadow');
	let div2 = document.createElement('div');
	div2.setAttribute('class', 'btn-lid');

	pageSelectorButton.appendChild(div1);
	pageSelectorButton.appendChild(div2);

	btnLid[i].style.transform = `translate(10px, -6px)`;
	btnLid[i].innerHTML = i + 1;
	btnLid[0].style.background = 'white';
	btnLid[0].style.color = 'black';
	console.log(btnLid[i].innerHTML);
}

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
		btnAnimation(btnLid[i]);
		if(page[i].id != 'visible-page'){

			for(let i = 0; i < page.length; i++){
				page[i].removeAttribute('id');
				pageBtn[i].removeAttribute('id');
				btnLid[i].style.background = 'green';
				btnLid[i].style.color = 'black';
			}
			page[i].setAttribute('id', 'visible-page');
			giveHeight(page[i]);
			btnLid[i].style.background = 'white';
			btnLid[i].style.color = 'black';
		}
	
	})
}
