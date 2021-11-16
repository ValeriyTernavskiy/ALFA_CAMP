/*
 * var, let, const
 * hoisting
 * Lexical Environment
 * scope
 * closure
 * this
 */

//  ----------- var , let, const -----------
// console.log(a, 'a');

// var a = 1;

// console.log(a, 'a');

// // console.log(b, 'b');

// b = 2;

// console.log(b, 'b'); // undefined

// var b;

// console.log(b, 'b');

// console.log(b2, 'b2');

// let b2 = 'hello world -- 2';

// b2 = 'hello world -- 3';

// const PI = 3.14;

// // PI = 4.15;

// const person = {
//   name: 'Valera',
// };

// const a = {};

// person.name = 'Pety';

// console.log(person, 'person');
// person = {
//   name: 'Pety',
// };

// -------- hoisting ----------

// console.log(a, 'a');

// a = undefined
// toDo2 = undefined

// function toDo() {
//     console.log('----toDo ----');
// }

// console.log(a, 'a');
// var a = 12;

// console.log(toDo, 'toDo');
// var toDo = function () {};

// console.log(a, 'a');

// let a = 12;

//  --- DRY ---

// console.log(b, 'b');

toDo();

// var b = 12;
toDo();

function toDo() {
  console.log('----toDo ----');
}

toDo();
// toDo();
// toDo();
// toDo();

// console.log(toDo2(), 'toDo2');

// let toDo2 = function () {
//   console.log('---- toDo2 ----');
// };

// toDo2();

// ------- Lexical Environment ------

/// -- global env ---

// let h = 13;

// console.log(b, 'b');

// if (true) {
//   (function () {
//     var b = 12;

//     console.log(b, 'b');
//   })();
// }

// if (true) {
//   let b = 12;
// }

// for() {
//     var l = 12;
// }

// console.log(b, 'b');

// -------------

let g = 'Global g';

var z = 12;

function toDo3() {
  // local env

  /*
    LE-toDo-3 = {
        outerEnv: Global-Environment
    }
  */
  let g = 'local todo - 3 g';

  /*
    LE = {
        outerEnv: Global-Environment
    }
  */

  const foo = function () {
    /*
    LE-Foo = {
        outerEnv: LE-toDo-3 
    }

  */
    console.log(window.z, 'z');
    // console.log(g, 'g');
  };

  /*
     LE-toDo-3 = {
        g:  'local todo - 3 g'
        foo: function(){}
        outerEnv:  Global-Environment
    }
  */

  foo();
  console.log(g, 'g');

  /*
    remove ->> LE
  */
}

// toDo3();
// toDo3();
// toDo3();

// console.log(g, 'g');

// -------- closure -----------

function counter() {
  let i = 0;

  //   LE-counter = { i: 0,  outerEnv: global-env }

  console.log(i, 'i');

  i = 10;

  return function () {
    //   LE = { outerEnv: LE-counter }
    i++;
    console.log(i, 'i');
  };
}

let iterator = counter();
// counter();
// counter();
// counter();

console.log(iterator, 'iterator');

iterator();
iterator();
iterator();

/// ---------- this -- context ------

// function toDo4() {
//   //   console.log(this, 'this');
// }

// toDo4();

// function run() {
//   console.log(this, 'this');
// }

// let person2 = {};

// person2.run = run;

// person2.run();


// call, apply, bind <--- homework

