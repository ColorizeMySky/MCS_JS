//Напишите функцию, которая на вход получает число, потом возводит его в случайную целую степень от 1 до 10 (не включая 10), 
// а потом возвращает модуль результата при помощи метода abs() объекта Math
function myFunk(number) {
	return Math.abs(number**(Math.floor(Math.random()*(10 - 1) + 1)));
}