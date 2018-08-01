//У вас есть данные
//На их основе создайте страницу, демонстрирующую сравнение курсов криптовалюты
// — Заголовок берем из name
// — Цену пишем в параграф
// — Устанавливаем на странице цветной блок, ширина которого привязана к цене валюты

const names = document.querySelectorAll('.crypto h1');
const rates = document.querySelectorAll('.crypto p');
const scales = document.querySelectorAll('.crypto div');
console.log(scales);

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

for (var i = 0; i < crypto.length; i++) {
	names[i].innerHTML = crypto[i].name;
	rates[i].innerHTML = crypto[i].price;
}

var maxWidth
if (crypto[0].price > crypto[1].price && crypto[0].price > crypto[2].price) {
	scales[0].style.width = '75%';
	scales[1].style.width = scales[0].clientWidth*crypto[1].price/crypto[0].price + 'px';
	scales[2].style.width = scales[0].clientWidth*crypto[2].price/crypto[0].price + 'px';
}
else if (crypto[1].price > crypto[2].cprice && crypto[1].price > crypto[0].price) {
	scales[1].style.width = '75%';
	scales[0].style.width = scales[1].clientWidth*crypto[0].price/crypto[1].price + 'px';
	scales[2].style.width = scales[1].clientWidth*crypto[2].price/crypto[1].price + 'px';
}
else {
	scales[2].style.width = '75%';
	scales[1].style.width = scales[2].clientWidth*crypto[1].price/crypto[2].price + 'px';
	scales[0].style.width = scales[2].clientWidth*crypto[0].price/crypto[2].price + 'px';
}