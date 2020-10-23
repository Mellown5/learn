


//let number = 5;
//const leftBorderWidth = 1;

//number = 10;
//console.log(number);

//const obj = {
//    a: 50
//};

//obj.a = 10;
//console.log(obj);



//{
  //  var result = 50;
//}
//console.log(result);

//alert(5);
//[].push('a');

// Типы данных


//Современный режим/строгий режим 
//(Устранены возможные неточности в старых версиях)
"use strict";

let number = 4;

console.log(-4/0);
console.log('string' * 9);

const persone = "Alex";
console.log(persone);
// `` "" '' если внутри цифра, то это строка

const bool = true;

//console.log(something); // не найден (null)

let und;
console.log(und); // есть коробка, но внутри ничего нет (undefind)

// Тип данных - объект (комплексный)

const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(obj.name); //так лучше, чем нижу
//console.log(obj["name"]);

// массив            Нумерация идет не с 1, а с 0
let arr = ['plum.png', 'orange.jpg' , 6 , 'apple.bmp' , [] , {}];
console.log(arr[1]);







// Простое Общение с пользователем

//alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// Выводится тип данных строка
// typeof - определяет тип данных. 
//Вся информация от пользователя будет как strong(строка)
// Если добавть к promt +     (+promt, то тип данных меняется на числовое)
//const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// Склеивание answer и 5
//console.log(answer + 5);



const answers = [];
// переменые confirm,prompt and alert существуют только в браузере
//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваша фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');

//document.write(answers);
console.log(typeof(answers));



// конкатенация 
const category = 'toys';
//console.log('https://someurl.com/' + category + '/' + '4'); ТАК РАНЬШЕ
console.log(`https://someurl.com/${category}/5`); 

const user = 'Dmitry';
alert(`Привет, ${user}`);





// Операторы JS
console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + + "5");

let incr = 10,
    decr = 10;

// префиксная
incr++;
decr--;
//или 
//incr++; постфиксная
//decr--;
// постфиксная форма в консоль логе изменяется после выходных данных
// а префиксная изменяется до выходных данных
//console.log(++incr);
//console.log(--decr);
//console.log(incr++);
//console.log(decr--);
console.log(incr);
console.log(decr);


console.log(5%2); // остаток после деления

console.log(2*4 == 8); // сравнение это ==, а строгое сравнение типов данных ===
console.log(2*4 === '8'); // тут число сравнивается со строкой

const isChecked = true, //Здесь оператор и (&&)
      isClose = false;
console.log(isChecked && isClose);
console.log(isChecked || isClose); // оператор или (||)
console.log(isChecked || !isClose);//отрицание и обращает значение в обратное

console.log(2*4 !== 6); // 8 неравно 6

// начало работы. git and github

