"use strict";
// ООП Прототипно - орентированное наследование.

let str = "some";
let strObj = new String(str);

//console.log(typeof(str));
//console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
      console.log("Hello");
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//    health: 100
// };

//jonh.__proto__ = soldier; старый вариант создания прототипа

//Object.setPrototypeOf(jonh,soldier); // новый вариант создания прототипа

//console.log(jonh.armor);
jonh.sayHello();







// Передача ссылки или значения
/*let a = 5;
  b = a;


b = b + 5;

console.log(b);
console.log(a);

const obj = {
   a: 5,
   b: 1
};*/

//const copy = obj; //Ссылку 

//copy.a = 10;

//console.log(copy);
//console.log(obj);

/*function copy(mainObj) {
  let objCopy = {};

  let key;
  for(key in mainObj) {
     objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
       x: 7,
       y: 4
   }
};

const newNumbers =  copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);*/


// Массивы и псевдомассивы

//const arr = [2, 13, 26, 8, 10];
//arr.sort(compareNum);
//console.log(arr);

//function compareNum(a, b) {
   //return a - b;
//}
//arr[99] = 0;
//console.log(arr.length);
//console.log(arr);

//arr. forEach(function(iten, i, arr) {
  // console.log(`${i}:  ${iten}  внутри массива ${arr}`)
//});

//arr.pop();
//arr.push(10);

//console.log(arr);

//for(let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
//}

//for(let vaiue of arr) {
  // console.log(vaiue);
//}


//const str = prompt("", "");
//const products = str.split(", ");
//products.sort();
//console.log(products.join('; '));


 


/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
      border: 'black',
      bg: 'red'
    },
    makeTest: function () {
      console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);*/


//console.log(Object.keys(options).length);

//console.log(options["colors"]["border"]);

//delete options.name;

//console.log(options);

//let counter = 0;
//for (let key in options) {
   //if(typeof (options[key]) ===  'object') {
     // for(let i in options[key] ) {
      //   console.log(`Свойство ${i} имеет значение ${options [key][i]}`);
         //counter++;
     // }
  // } else {
  //    console.log(`Свойство ${key} имеет значение ${options [key]} `);
      //counter++;
 //  }
   
//}
//console.log(counter);







// Callback функции.

/*"use strict";

function first() {
   // Do something
   setTimeout(function() {
      console.log(1);
   }, 500);
}

function second() {
   console.log(2);
}

first();
second();

function learnJS(lang,callback) {
   console.log(`Я учу: ${lang} `);
   callback();
}

function done() {
   console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);*/
   




/* Практика №2.

1) Первую часть задания повторить по уроку.

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводить в консоль главный обьект программы.

3)Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жандр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функцию вызывать не обязательно 
 
"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');    
   }

}  
start();


   const personalMoviDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
   
};



function rememberMyFilms() {
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
}

//rememberMyFilms();



function detectPersonLevel() {
   if(personalMoviDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
        console.log("Вы классический зритель");
   } else if (personalMoviDB.count >= 30) {
      console.log("Вы киноман");
   }else{
      console.log("Произошла ошибка");
   }
}

//detectPersonLevel();

function showMyDB (hidden) {
   if (!hidden) {
      console.log(personalMoviDB);
   }
}

showMyDB(personalMoviDB.privat);

function writeYourGenres() {
   for(let i = 1; i <= 3; i++ ) {
      personalMoviDB.genres[i - 1] = prompt(`Ваш любимый жандр под номером ${i}`);
   }
}


writeYourGenres(); */



//*********************************************************************************** */





//"use strict"
//Методы и свойства чисел.

//const str = "teSt";
//const arr = [1, 2, 4]


//console.log(str[2] = 'd');

//console.log(str.toUpperCase());

//console.log(str.toLowerCase());
//console.log(str);

//const fruit = "Some fruit";

//console.log(fruit.indexOf("q"));

//const logg = "Hello world";

//console.log(logg.slice(6, 11));

//console.log(logg.substring(6, 11));

//console.log(logg.substr(6, 5));

//const num = 12.2;
//console.log(Math.round(num));

//const test = "12.2px";
//console.log(parseInt(test));
//console.log(parseFloat(test));






/*let num = 20;

function showFirstMessage(text) {
   console.log(text);
    console.log(num);
    
}

showFirstMessage("Hello World!");
console.log(num);*/

/*console.log(calc(4, 3));
console.log(calc(5 ,6));
console.log(calc(10 ,6));


function calc(a,b) {
   return(a + b);
}*/


/*function ret() {
   let num = 50;
  
   return num;
}


const anotherNum = ret();
console.log(anotherNum);

// Пример функция EXPRESSION

const logger = function() {
      console.log("Hello");
};

logger();/*


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

/* Практика 3.

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



console.log(personalMoviDB);*/
//****************************
//console.log(personalMoviDB);





/* Практика №4.


Задача №1.
У вас есть рабочее приложение, состоящее из отдельных функцийю Представте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта
personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архетектуре программы

Задача №2.
Создать метод tooggleVisibleMyDB, который при вызове будет проверять свойство privat. Если
оно false - он  переключает его в true, если true - переключает в false.
Протестировать вместе с showMyDB.

Задача №3.
В методике writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять
пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр # (номер по порядку, начиная с 1) - это(название из массива)"*/


'use strict';

   const personalMoviDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      personalMoviDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
      while(personalMoviDB == '' || personalMoviDB.count == null || isNaN
      (personalMoviDB.count)) {
         personalMoviDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');    
     }
  
  }, 
  rememberMyFilms:function () {
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
},
detectPersonLevel: function() {
   if(personalMoviDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
        console.log("Вы классический зритель");
   } else if (personalMoviDB.count >= 30) {
      console.log("Вы киноман");
   }else{
      console.log("Произошла ошибка");
   }
}, 
showMyDB: function (hidden) {
   if (!hidden) {
      console.log(personalMoviDB);
   }
},
tooggleVisibleMyDB: function() {
      if(personalMoviDB.privat) {
         personalMoviDB.privat = false;
      } else {
         personalMoviDB.privat = true;
      }
},
writeYourGenres: function() {
   for(let i = 1; i < 2; i++ ) {
   //   let genre = prompt(`Ваш любимый жандр под номером ${i}`);

   //   if(genre === '' || genre === null) {
     //    console.log('Вы вели некорректные данные или не ввели их вовсе');
       //  i--;
     // }else {
     //    personalMoviDB.genres[i - 1] = genre;
    //  } 
    
    let genres = prompt(`Введите ваши любимые жандры через запятую`).toLocaleLowerCase();
       if(genres === '' || genres === null) {
         console.log('Вы вели некорректные данные или не ввели их вовсе');
         i--;
      }else {
         personalMoviDB.genres = genres.split(', ');
         personalMoviDB.genres.sort();
      } 


   }

   personalMoviDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
   });
}
   
};















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




