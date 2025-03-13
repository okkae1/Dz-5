//Задание 1: Приветствие
//Запрашиваем имя пользователя через prompt
const name = prompt("Введите ваше имя:");

// Выводим приветствие с именем в alert
alert("Привет, " + name + "!");

// Записываем имя в консоль
console.log(name);
//Задание 2: Проверка возраста
function checkAge() {
    // Запрашиваем возраст пользователя
    const age = parseInt(prompt("Введите ваш возраст:"));

    // Проверяем возраст и выводим соответствующее сообщение
    if (age >= 18) {
        alert("Доступ разрешен.");
    } else {
        alert("Доступ запрещен.");
    }
}

// Вызываем функцию для проверки возраста
checkAge();
//Задание 3: Калькулятор
// Запрашиваем два числа у пользователя
const num1 = parseFloat(prompt("Введите первое число:"));
const num2 = parseFloat(prompt("Введите второе число:"));

// Выполняем операции
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num2 !== 0 ? num1 / num2 : "На ноль делить нельзя";

// Выводим результаты в консоль
console.log("Сумма: " + sum);
console.log("Разность: " + difference);
console.log("Произведение: " + product);
console.log("Частное: " + quotient);
//Задание 4: Генератор случайного числа
// Генерируем случайное число от 1 до 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Запрашиваем число у пользователя
const userGuess = parseInt(prompt("Угадайте число от 1 до 100:"));

// Сравниваем введенное число с загаданнымv
if (userGuess === randomNumber) {
    alert("Поздравляем! Вы угадали число!");
} else {
    alert("К сожалению, вы не угадали. Загаданное число было: " + randomNumber);
}