//Напишите скрипт, который выведет на страницу все числа, которые делятся на 6 без остатка от 1 до 100 000
let numbers = '';

for (var i = 1; i <= 100000; i++) {
	if (i % 6 == 0) {
		numbers = numbers + i + ', ';
	}
}