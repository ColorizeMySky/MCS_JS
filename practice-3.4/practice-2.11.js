//Программа спросит сколько у вас с собой есть денег и сохранит данные в переменную
let cash = prompt('Hou much cash do you have?');

// Программа спросит сколько вы купили яблок и сохранит ответ в переменную
let apples = prompt('How many apples did you buy?');

//Программа спросит сколько вы купили батонов хлеба и сохранит ответ в переменную
let bread = prompt('How many loaves of bread did you buy?');

//Программа спросит сколько стоит одно яблоко и сохранит стоимость всех яблок в отдельную переменную
let applesCost = apples*parseFloat(prompt('Tell me the price of one apple:'));

//Программа спросит сколько стоит один батон хлеба и сохранит стоимость всех батонов в отдельную переменную
let breadCost = bread *parseFloat(prompt('Tell me the price of one loaf of bread:'));

//Программа сравнит сколько у вас есть денег и ваши общие затраты и сохранит результат сравнения в переменную
let checkMoney = cash > (applesCost + breadCost);

//Программа выведет в body документа true или false в зависимости от того, хватает вам денег или нет
document.write(checkMoney);