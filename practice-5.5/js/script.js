// Создайте форму, которая будет по сабмиту рассчитывать синус введенного в input угла.
// Вам понадобится найти этот метод объекта Math

const form = document.forms[0];
var result = document.querySelector('.total');

form.onsubmit = function(degree) {
	degree.preventDefault();
	result.innerHTML = Math.sin(form.elements.angle.value*Math.PI/180).toFixed(2);
}