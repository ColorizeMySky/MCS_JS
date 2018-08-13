//﻿Дождаться прогрузки окна, после этого выполнять весь код программы
document.addEventListener("DOMContentLoaded", function() {
	// Создать класс Person
	//  а. ﻿Конструктор класса как аргумент содержит name
	//  b. ﻿Сам конструктор класса содержит this.name равное аргументу и this.happiness равное 0
	class Person {
		constructor(name) {
			this.name = name;
			this.happiness = 0;
		}
	}

	//tests
	console.log('test');
	alert('ready');
});