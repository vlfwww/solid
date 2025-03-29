// 1.
//  Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на кнопку.
//  Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide
// class DomHtml {
//     constructor(inp1, inp2) {
//         this.inp1 = inp1;
//         this.inp2 = inp2;
//     }

//     doPlus = () => this.inp1 + this.inp2;
//     doMinus = () => this.inp1 - this.inp2;
//     doMultiply = () => this.inp1 * this.inp2;
//     doDivide = () => {
//         if (this.inp2 === 0) return 'Ошибка: деление на ноль';
//         return this.inp1 / this.inp2;
//     };
// }
// const wrap = document.querySelector('.wrapper');
// const but = document.querySelector('button');
// but.addEventListener('click', function() {
//     const inp1 = parseFloat(document.querySelector('.inp1').value);
//     const inp2 = parseFloat(document.querySelector('.inp2').value); 
//     const dom = new DomHtml(inp1, inp2);
//     wrap.innerHTML = `
//         <div>Сложение: ${dom.doPlus()}</div>
//         <div>Разница: ${dom.doMinus()}</div>
//         <div>Умножение: ${dom.doMultiply()}</div>
//         <div>Деление: ${dom.doDivide()}</div>
//     `;
// });

// 2. Реализовать класс PasswordValidator с методом isStrong(password), который проверяет, 
// содержит ли пароль минимум 8 символов, хотя бы одну заглавную букву, цифру и 
// специальный символ. Получать данные из input по клику на кнопку
//  const validator = new PasswordValidator();
//  validator.isStrong("Abc!1234") // true
//  validator.isStrong("password") // false -> "Пароль слабый";
//  validator.isStrong("Short1!") // false -> "Пароль короче 8 символов"

// class PasswordValidator {
//     isStrong(password) {
//         if (password.length < 8) {
//             return "Пароль короче 8 символов";
//         }
//         if (!/[A-Z]/.test(password)) {
//             return "Пароль слабый: нет заглавной буквы";
//         }
//         if (!/[0-9]/.test(password)) {
//             return "Пароль слабый: нет цифры";
//         }
//         if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//             return "Пароль слабый: нет специального символа";
//         }
//         return true;
//     }
// }

// const validator = new PasswordValidator();
// const wrap = document.querySelector('.wrapper');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//     const password = document.querySelector('.inp').value; 
//     const result = validator.isStrong(password);
//     wrap.textContent = (result === true) ? "Пароль сильный" : result;
// });

//  3.
//  Реализовать очередь на основе массива, поддерживающую добавление элементов 
// (enqueue), удаление (dequeue) и проверку на пустоту (isEmpty).
//  const queue = new Queue();
//  queue.isEmpty() // true -> Массив пустой
//  queue.enqueue(1);
//  queue.enqueue(2);
//  queue.dequeue()

// class Queue{
//     constructor() {
//         this.arr = []; 
//     }
//     isEmpty=()=>(this.arr.length==0) ?'Массив пустой': 'Массив не пустой';
//     enqueue=(el)=>this.arr.push(el);
//     dequeue=()=>this.arr=[];
// }
//  const queue = new Queue();
// console.log(queue.isEmpty());
// console.log(queue.enqueue(1));
// console.log(queue.enqueue(2));
// console.log(queue.isEmpty());
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
 
//  4.
//  Реализовать метод factorial(n), который вычисляет факториал числа. Получать данные из 
// input по клику на кнопку
//  const fact = new FactorialCalculator();
//  fact.factorial(5) // 120
//  fact.factorial(0) // 1
//  fact.factorial(-3) // Факториал отрицательного числа не определён


// function factorial(n) {
//     if (n < 0) return 'Факториал для отрицательных чисел не определен';
//     if (n === 0 || n === 1) return 1; 
//     return n * factorial(n - 1);
// }

// const wrap = document.querySelector('.wrapper');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//     const n = document.querySelector('.inp').value; 
//     const result = factorial(n);
//     wrap.textContent = result;
// });


//  5.
//  Реализовать класс User, хранящий username и password. Добавить метод 
// checkPassword(input), который возвращает true, если пароль совпадает.
//  const user = new User("admin", "12345");
//  user.checkPassword("12345") // true
//  user.checkPassword("wrong") // false

// class User{
//     constructor(username,password){
//         this.username=username;
//         this.password=password;
//     }
//     checkPassword(input){
//         if(input==this.password) return true;
//         else return false;
//     }
// }
// const user = new User("admin", "12345");
// console.log(user.checkPassword("12345"));
// console.log(user.checkPassword("wrong"));


//  6.
//  Реализовать метод reverse(str), который переворачивает строку без использования метода 
// reverse. 
// const reverser = new StringReverser();
//  reverser.reverse("hello") // "olleh"
//  reverser.reverse("12345") // "54321«

// function reverse(str){
//     const arr = [];
//     for(let i = str.length;i>=0;i--){
//         arr.push(str[i]);
//     }
//     const rez= arr.join('');
//     console.log(rez);
// }
// reverse("hello") // "olleh"
// reverse("12345") // "54321«

//  7.
//  Реализовать метод getType(a, b, c), который определяет тип треугольника по его сторонам.
//  const triangle = new Triangle();
//  triangle.getType(3, 3, 3) // "равносторонний"
//  triangle.getType(3, 3, 5) // "равнобедренный"
//  triangle.getType(3, 4, 5) // "разносторонний"

// class Triangle{
//     getType(a,b,c){
//         if(a === b && b === c) console.log('равносторонний');
//         else if(a==b || b==c || a==c) console.log('равнобедренный');
//         else console.log('разносторонний');
//     }
// }
//  const triangle = new Triangle();
//  triangle.getType(3, 3, 3) // "равносторонний"
//  triangle.getType(3, 3, 5) // "равнобедренный"
//  triangle.getType(3, 4, 5) // "разносторонний"

//  8.
//  Реализовать метод compress(str), который сжимает строку, заменяя повторяющиеся 
// символы на {символ}{количество} (например, "aaabbc" → "a3b2c1").
//  const compressor = new StringCompressor();
//  compressor.compress("aaabbc") // "a3b2c1"
//  compressor.compress("abcdef") // "abcdef"
//  compressor.compress("aabbcc") // "a2b2c2"


class StringCompressor {
    compress(str) {
        if (str.length === 0) return '';

        let compressed = '';
        let count = 1;

        for (let i = 1; i < str.length; i++) {
            if (str[i] === str[i - 1]) {
                count++;
            } else {
                compressed += str[i - 1] + count; 
                count = 1;
            }
        }
        compressed += str[str.length - 1] + count;

        return compressed;
    }
}
const compressor = new StringCompressor();
console.log(compressor.compress("aaabbc")); // "a3b2c1"
console.log(compressor.compress("abcdef")); // "abcdef"
console.log(compressor.compress("aabbcc")); // "a2b2c2"

//  1.
//  * Реализовать метод encrypt(str, shift), который шифрует строку методом Цезаря.
//  const cipher = new CaesarCipher();
//  cipher.encrypt("abc", 3) // "def"
//  cipher.encrypt("xyz", 2) // "zab"
//  cipher.encrypt("hello", 5) // "mjqqt«
//  1.
//  * Реализовать метод transpose(matrix), который меняет строки и столбцы местами.
//  const transposer = new MatrixTranspose();
//  const matrix = [
//  [1, 2, 3],
//  [4, 5, 6]
//  ];
//  transposer.transpose(matrix) // [
//  [1, 4],
//  [2, 5],
//  [3, 6]
//  ]
