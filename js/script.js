"use strict"

let num = 20;

function showFirstMessage(text) {
   console.log(text);
    console.log(num);
    
}

showFirstMessage("Hello World!");
console.log(num);

/*console.log(calc(4, 3));
console.log(calc(5 ,6));
console.log(calc(10 ,6));


function calc(a,b) {
   return(a + b);
}*/


function ret() {
   let num = 50;
  
   return num;
}


const anotherNum = ret();
console.log(anotherNum);

// Пример функция EXPRESSION

const logger = function() {
      console.log("Hello");
};

logger();


// Пример стрелочная функция.

const calc = (a, b) => {
   console.log('1');
   return a + b;
};










//"use strict";

// Тема циклы и условия

//let num = 50;

//while(num <= 55) {
  // console.log(num);
  // num++;
//}

/*do {
   console.log(num);
   num++;
}
while (num < 55);*/

/*for (let i = 1; i < 10; i++) {
   if (i === 6) {
      // break;
      continue;
   }
   
   console.log(i);
   
}*/






/*if(1){
   console.log('Ок!');
} else {
console.log('Error');
}



if(num < 49) {
   console.log('Error');
} else if(num > 100){
   console.log('Много')
} else {
   console.log('Ок')
}

(num === 50) ? console.log('Ок') : console.log('Error'); // Тернарный оператор*/

/*const num = 50;

switch(num) {
   case 49:
      console.log('Неверно');
      break;
   case 100:
      console.log('Неверно');
      break;
   case 51:
      console.log('В точку!');
      break;
   default:
      console.log('Не в этот раз');
      break;
}*/


// *********************************************************************

// Практика 1.

/* Задача №1.
 Создать переменную numberOfFilms и в неё поместить ответот пользователя на вопрос:
 'Сколько фильмов вы уже смотрели?'*/

/*const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');*/


/* Задача №2.
 Создать объект personalMovieDB и в него поместить такие свойства:
 - count - сюда передается ответ на первый  вопрос
 - movies - в это свойство поместить пустой объект
 - actors - тоже переместить пустой обьект
 - genres - сюда поместить пустой массив
 - privat - в это свойство поместить boolean(логическое) значение false*/

/*const personalMoviDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}; */

/* Задача №3.
 Задайте пользователь по два раза вопросы:
   - 'Один из последних просмотренных фильмов?'
   - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
 Записать ответы в обьект movies в формате:

   movies: {
      'logan': '8.1'
 }
 Проверить, чтобы все работало без ошибок в консоли*/

 /*const a = prompt('Один из последних просмотренных фильмов 1?', ''),
       b = prompt('На сколько оцените его 1?', ''),
       c = prompt('Один из последних просмотренных фильмов 2?', ''),
       d = prompt('На сколько оцените его 2?', '');
personalMoviDB.movies[a] = b;
personalMoviDB.movies[c] = d;


<<<<<<< HEAD
console.log(personalMoviDB);5
   

10
=======
console.log(personalMoviDB);*/

//************************************************************************* */

/* Практика 2.

Задача №1.
Автоматизировать вопросы пользователю про фильмы при помощи цикла.

Задача №2.
Сделать так, чтобы пользователь не смог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять.(К любой строке можно обратиться как
   str.length - и получить её длину)
 
 Задача №3.
 При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести
 сообщение
 "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если
 больше - "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка".
 
 Задача №4.
 Потренироваться и переписать цикл еще двумя способам */

/*"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}; 

for(let i = 0; i < 2; i++) {
   const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его ?', '');

   //        не       и            и    не    и    не    и
         if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMoviDB.movies[a] = b;
            console.log('done');
         }  else{
            console.log('error');
            i--;
         }   
}

if(personalMoviDB.count < 10) {

   console.log("Просмотрено довольно мало фильмов");
} else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
     console.log("Вы классический зритель");
} else if (personalMoviDB.count >= 30) {
   console.log("Вы киноман");
}else{
   console.log("Произошла ошибка");
}


<<<<<<< HEAD
console.log(personalMoviDB);*/
=======
console.log(personalMoviDB);
>>>>>>> f5e5a3b5899e03b8026e62529294ff94f1b7b16b
>>>>>>> 5c85f2282e0ab67e5a3158b2f1d0bf9ed2535364








 //"use strict";


//console.log('arr' + "- object");
//console.log(4 +  + "5");

//let incr = 10,
   // decr = 10;

   //++ incr;
   //-- decr;
    
   // console.log(++incr);
   // console.log(--decr);

   // console.log(5%2);

    //console.log(2 + 2 * 2 !== '6');
    
   // && - и
   // || - или

 //  const isChecked = false,
         //isClose = false;
        
  // console.log(isChecked || !isClose);      
    

//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);

//const user = "Ivan";

//alert(`Привет, ${user}`);



//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = + prompt("Вам есть 18?", "18"); 
//console.log(answer + 5 );

//const answers = [];

//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваше фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');

//console.log(typeof(answers));
//console.log(typeof(null));
//let number = 4.6;

//console.log(-4/0);
//console.log('string' * 9);
//const persone = `5`;

//const bool = false;

//console.log(something);

//let und;
//console.log(und);

//const obj = {
   // name: "John",
   // age: 25,
   // isMarried: false
//};

//console.log(obj.name);
//console.log(obj["name"]);


//let arr = ['plum.png','orang.jpg', 6, 'apple.bmp', {}, []];
//console.log(arr[1]);




