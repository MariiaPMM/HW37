'use strist';
// Завдання:
// 1. Перевірка на парність числа. Напишіть функцію isEven, яка приймає число, яке вводить користувач, в якості аргументу і повертає проміс, яка поверне "Це парне число", якщо число парне (resolve), і "Помилка, число не парне", якщо число непарне (reject).

// const isEven = number => {
// 	return new Promise((resolve, reject) => {
// 		number % 2 === 0
// 			? resolve('Це парне число')
// 			: reject('Помилка,число не парне');
// 	});
// };
// const number = +prompt('Введіть число:');
// isEven(number)
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err))
// 	.finally(() => console.log('Виконано'));

// 2. Випадкова затримка. Напишіть функцію, яка повертає проміс з випадковою затримкою від 1 до 5 секунд.

// const randomDelay = () => {
// 	return new Promise(resolve => {
// 		const delay = Math.floor(Math.random() * 4000) + 1000;
// 		setTimeout(() => {
// 			resolve(`Затримка ${delay / 1000} секунд`);
// 		}, delay);
// 	});
// };
// randomDelay()
// 	.then(message => console.log(message))
// 	.catch(err => console.error(err));

// 3. Виконання промісу з ймовірністю успіху. Напишіть функцію, яка повертає проміс, яка має вказану ймовірність успішного виконання (наприклад, 70%). Успішне виконання повинно повертати "Успіх", а невдачу - "Помилка".

// const probability = successProbability => {
// 	return new Promise((resolve, reject) => {
// 		const random = Math.random() * 100;
// 		if (random < successProbability) {
// 			resolve('Успіх');
// 		} else {
// 			reject('Помилка');
// 		}
// 	});
// };

// probability(70)
// 	.then(message => console.log(message))
// 	.catch(error => console.error(error));

// 4.* Виконання послідовних операцій. Напишіть послідовність з чотирьох промісів, де перший повертає випадкове число від 1 до 100, другий множить його на 10, третій перетворює результат в масив чисел, а четвертий сортує числа по зростанню. 87 -> 870 -> [8, 7, 0] -> [0, 7, 8]. Затримка кожного промісу має бути більше на 1с за затримку минулого і на кожному етапі має виводитись в консоль проміжний результат.

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// const getRandomNumber = () => {
// 	const number = Math.floor(Math.random() * 100) + 1;
// 	console.log(`Random number: ${number}`);
// 	return delay(1000).then(() => number);
// };
// const multiplyByTen = number => {
// 	const result = number * 10;
// 	console.log(`Multiplied by 10: ${result}`);
// 	return delay(2000).then(() => result);
// };
// const numberToArray = number => {
// 	const array = Array.from(String(number), Number);
// 	console.log(`Number to array: [${array.join(', ')}]`);
// 	return delay(3000).then(() => array);
// };
// const sortArray = array => {
// 	const sortedArray = array.sort((a, b) => a - b);
// 	console.log(`Sorted array: [${sortedArray.join(', ')}]`);
// 	return delay(4000).then(() => sortedArray);
// };
// getRandomNumber()
// 	.then(multiplyByTen)
// 	.then(numberToArray)
// 	.then(sortArray)
// 	.then(sortedArray => console.log('Final sorted array:', sortedArray))
// 	.catch(err => console.error('Error:', err));

// 5. Завдання зі статті: https://uk.javascript.info/promise-basics
