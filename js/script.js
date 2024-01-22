"use strict";

let num = 50;

//while(num <= 55) {
  // console.log(num);
  // num++;
//}

/*do {
   console.log(num);
   num++;
}
while (num < 55);*/

for (let i = 1; i < 10; i++) {
   if (i === 6) {
      // break;
      continue;
   }
   
   console.log(i);
   
}









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


console.log(personalMoviDB);*/
   


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




