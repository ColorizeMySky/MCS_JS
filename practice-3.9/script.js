//Вызовет prompt с вопросом “Какой будет фон у страницы?” и заменит на введенный цвет фон body
document.body.style['background-color'] = prompt('Какой будет фон у страницы?');

//Вызовет prompt с вопросом “Какой будет цвет текста на странице?” и заменит цвет текста у всего .page на введенный
document.body.style.color = prompt('Какой будет цвет текста на странице?');

//Вызовет prompt с вопросом “Как зовут человека, который вас вдохновляет” и вставит введенное имя в span с классом name
document.querySelector('span').innerHTML = prompt('Как зовут человека, который вас вдохновляет?');

//Вызовет prompt с вопросом “Введите адрес картинки” и подставит введенную картинку в тег img, изменив текущий атрибут
document.querySelector('img').setAttribute('src', (prompt('Введите адрес картинки')));

//Вызовет prompt с вопросом “Введите текст страницы” и вставит введенный текст в блок .shortBio
document.querySelector('.shortBio').innerHTML = prompt('Введите текст страницы');

//Присвоит класс animated к элементу с классом shortBio, так чтобы анимация границы заработала, а текущие стили параграфа сохранились
document.querySelector('.shortBio').className += ' animated';