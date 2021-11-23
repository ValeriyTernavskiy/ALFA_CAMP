//// ------------- DOM Intro -----------

// console.dir(document, 'document');


const box = document.querySelector('.box');

console.log(box.nextElementSibling, 'nextElementSibling');
console.log(box.previousElementSibling, 'previousElementSibling');
console.log(box.parentMode, 'parent');


const boxes = document.querySelectorAll('.box');

// console.log(boxes, 'boxes');


const parent = document.querySelector('.parent');

// console.dir(parent, 'parent');
// console.dir(parent.children, 'children');
// console.dir(parent.childNodes, 'childNodes');

/// nodeType == 1 ==> Elements



// -------------- innerHTML, innerText -------


// console.log(box.innerHTML, 'innerHTML');


// box.innerHTML = 'Hello world';

// setTimeout(() => {
//     // box.innerHTML = '<span>Hello world</span>';
//     // box.innerText = '<span>Hello world</span>';
// }, 5000);


// ----------- attrs ----- 

// setTimeout(() => {
//     box.classList.add('hidden');
    
//     setTimeout(() => {
//         box.classList.remove('hidden');

//         setTimeout(() => {
//             box.classList.toggle('hidden');
//         }, 2000);

//     }, 2000);
// }, 1000);


// ----------------- event -------- 




// box.onclick = function() {
//     console.log('---- send email ----');
// };


// function move()  {
//     console.log('---- move----');
// }

// document.addEventListener('mousemove', move);

// document.querySelector('button').addEventListener('click', function() {
//     document.removeEventListener('mousemove', move);
// });



function handler(event)  {
    console.log('---- handler ----', event.type);
    console.log(event.clientX, 'clientX');
    console.log(event.clientY, 'clientY');

    console.log(event.pageX, 'pageX');
    console.log(event.pageY, 'pageY');


    console.log(event.offsetX, 'offsetX');
    console.log(event.offsetY, 'offsetY');

}

// box.addEventListener('mousemove', handler);
box.addEventListener('click', handler);


// --------------------------------------