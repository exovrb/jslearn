const abc = {
    a: 10,
    b: true
}

// Хранит только ссылку на объект

const abcd = [1, 2, 3]

// Хранит только ссылку на массив

const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA // делаем копию объекта

console.log(copyOfA) // выводим копию объекта в консоль

copyOfA.a = 20 // меняем значение 'a' в копии, автоматически меняется в objectOfF

console.log(objectA.a) // выводим значение 'a' в основном объекте

copyOfA.c = 'abc' // добавляем новое свойство в копии objectA

console.log(objectA) // выводим основной объект, в который добавили новую функцию через copyOfA
