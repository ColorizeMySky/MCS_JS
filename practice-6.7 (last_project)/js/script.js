//﻿Дождаться прогрузки окна, после этого выполнять весь код программы
document.addEventListener("DOMContentLoaded", function() {
	// Создать класс Person
	//  а. ﻿Конструктор класса как аргумент содержит name
	//  b. ﻿Сам конструктор класса содержит this.name равное аргументу и this.happiness равное 0

	//Методы класса
	//hasCat() — возвращает this.happiness увеличенное на 1
	//hasRest() — возвращает this.happiness увеличенное на 1
	//hasMoney() — возвращает this.happiness увеличенное на 1 

	class Person {
		constructor(name) {
			this.name = name;
			this.happiness = 0;
		}

		hasCat() {
			return this.happiness += 1;
		}
		hasRest() {
			return this.happiness += 1;
		}
		hasMoney() {
			return this.happiness += 1;
		}

		//isSunny() — получает данные о погоде в Москве из API и в случае если температура в цельсиях больше 15 градусов?
		//увеличивает this.happiness на 1 и возвращает this.happiness 
		//(всегда возвращается this.happiness, независимо, увеличили на 1 или нет)

		isSunny() {
			var APIKey = 'f4fc5cccbe8f9f7cc66b565c343fcd31';
			var city = 'Moscow';
			var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey + '&units=metric';

			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, false);
			xhr.send();

			var weather = JSON.parse(xhr.response);

			if (weather.main.temp > 15) {
				return this.happiness += 1;
			}
			else {
				return this.happiness;
			}			
		}
	}

	//Когда мы заполняем форму в левой колонке и нажимаем submit, происходит такой алгоритм:
	const form = document.forms[0];
	//Отменяется дефолтное событие
	form.onsubmit = function(event) {
		event.preventDefault();

		//﻿Собираются в переменные все данные из формы
		let name = document.forms[0].name.value;
		let cat = document.forms[0].cat.value;
		let rest = document.forms[0].rest.value;
		let money = document.forms[0].money.value;

		//Создается экземпляр класса Person, с аргументом name взятом из поля ввода с именем
		var User = new Person(name);

		//Делаются проверки, если радиобаттоны установлены на yes в полях “Есть кот?”, “Отдыхал недавно?”, “Денег ок?”,
		//то вызываются методы hasCat(), hasRest() и hasMoney() созданного экземпляра соответственно
		if (cat == 'yes') {
			User.hasCat();
		}
		if (rest == 'yes') {
			User.hasRest();
		}
		if (money == 'yes') {
			User.hasMoney();
		}

		//Вызывается метод isSunny() созданного экземпляра
		User.isSunny();

		//Выберираются элементы .personName и .icon
		var personName = document.querySelector('.personName');
		var icon = document.querySelector('.icon');
		//В .personName вставьте namе экземпляра и знак :
		personName.innerHTML = User.name + ': '

		//Осуществляется проверка итогового значения happiness экземпляра.
		//Если значение 4 вставьте иконку :grinning_face_with_smiling_eyes: в блок .icon, если 2 или 3 — :neutral_face:,
		//в противном случае — ☹
		//Обратите внимание, что скрипт должен работать так, что при погоде ниже 15 градусов, выражение лица будет нейтральным,
		//а не счастливым. Наш человек счастлив только от хорошей погоды

		if (User.happiness == 4) {
			icon.innerHTML = '<img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/grinning-face-with-smiling-eyes_1f601.png">';
		}
		else if (User.happiness == 3 || User.happiness == 2) {
			icon.innerHTML = '<img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/neutral-face_1f610.png">';		
		}
		else {
			icon.innerHTML = '<img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/white-frowning-face_2639.png">';		
		}
	}
});