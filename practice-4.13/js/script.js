// Написать такой JS, который по нажатию на кнопку с классом .request изменит стиль блока .popup на строку flex
document.querySelector('.request').onclick = function() {
	document.querySelector('.popup').style.display = 'flex' ;
}

// ﻿По нажатию на элемент с классом closePopup — изменит стиль .popup обратно на ‘none’
document.querySelector('.closePopup').onclick = function() {
	document.querySelector('.popup').style.display = 'none' ;
}

// По нажатию на элемент .openMenu изменит свойство left у элемента .menu на значение 0
document.querySelector('.openMenu').onclick = function() {
	document.querySelector('.menu').style.left = '0' ;
}

// По нажатию на элемент .closeMenu — изменит свойство left у .menu обратно на строку ‘-50vw’
document.querySelector('.closeMenu').onclick = function() {
	document.querySelector('.menu').style.left = '-50vw' ;
}