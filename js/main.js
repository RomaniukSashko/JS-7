// Створити масив з трьох чисел. 
// Змінити значення другого елемента масиву на 10.

const first = [3, 2, 9];
first[1] = 10;
console.log(first);

// Створити масив із трьох рядків. 
// Додати до масиву ще одну рядків.

const vegetables = ["Tomato", "Cucumber", "Carrot"];
vegetables[vegetables.length] = "Potato";
console.log(vegetables);

// Створити скрипт який поверне суму всіх чисел в масиві.

const numbers = [3, 8, 35, 4, 1];
let sum = 0;

for (let k = 0; k < numbers.length; k += 1){
    sum += numbers[k];
}

console.log(sum);

// Створити масив з 5-ти чисел. 
// Вивести на екран всі елементи масиву за допомогою циклу for.

const fourth = [2, 5, 1, 88, 57];

for (let i = 0; i < fourth.length; i += 1) {
    console.log(fourth[i]);
}

// Створити масив із 5-ти рядків. 
// Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const countries = ["UK", "USA", "Australia", "Canada", "New Zealand"];

for (let j = 0; j < countries.length; j += 1) {
    if (countries[j].length <= 5) {
        continue;
    }
    console.log(countries[j]);
}

// Створити масив з 10-ти чисел. 
// Знайти та вивести на екран максимальне значення з масиву.

const sixth = [2, 93, 454, 232, 21, 12, 44, 123, 32, 64];
let max = sixth[0];

for (let k = 1; k < sixth.length; k += 1) {
    if (sixth[k] > max) {
        max = sixth[k];
    }
}

console.log(max);

// Створити масив з 10-ти чисел. 
// Знайти всі парні числа в масиві та вивести їх на екран.

const seventh = [42, 7, 89, 23, 56, 14, 68, 3, 77, 31];

for (let i = 0; i < seventh.length; i += 1) {
    if (seventh[i] % 2 === 1) {
        continue;
    }
    console.log(seventh[i]);
}