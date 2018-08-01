//Создайте класс Custumer, у которого будет имя в конструкторе и метод buy, выводящий в консоль слово “Куплено”.

class Custumer {
	constructor(name){
		this.name = name;
	}
	buy() {
		console.log('Куплено');
	}
}

//Создайте подкласс childCustumer, который наследует конструктор и метод Customer, но имеет собственный метод getPresent,
//который выводит в консоль фразу “Шарик в подарок”

class childCustumer extends Custumer {
	getPresent() {
		console.log('Шарик в подарок');
	}
}