//Функция должна возвращать “Вам хватает денег на покупки” (если хватает) или “Вам не хватает денег”, если не хватает
function haveEnough(cash, apples, bread, applesCost, breadCost) {
	return (cash >= (apples * applesCost + bread * breadCost) ) ? 'Вам хватает денег на покупки' : 'Вам не хватает денег';
}