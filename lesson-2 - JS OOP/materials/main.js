// https://learn.javascript.ru/classes
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
// https://habr.com/ru/post/518386/

// ------------------ OOP ---------------
/*
Proto and Prototype
Объекты в JavaScript можно организовать в цепочки так, чтобы свойство,
не найденное в одном объекте, автоматически искалось бы в другом.
Связующим звеном выступает специальное свойство __proto__
Объект, на который указывает ссылка __proto__, называется «прототипом»

Ссылка __proto__ скрытая и не во всех браузерах доступна.
*/
// const obj1 = {
// 	name: 'object1',
// 	key: 1,
// 	go() {
// 		console.log('go')
// 	}
// }
// const obj2 = {
// 	name: 'object2',
// 	key: 2,
// 	__proto__: obj1
// }
// console.log(obj2)


// const obj3 = Object.create(obj2) /*{__proto__: obj2}*/
// obj3.name = 'object3'
// console.log(obj3)
// obj3.go()

// let array = new Array()
// let array2 = new Array()
// console.log(array)
// console.log(array2)
// console.log(array.__proto__ === array2.__proto__)

//---------------- constructor
/*
Когда функция вызывается как new, происходит следующее:
1) new - > ({}) Создаётся новый пустой объект *
2) *() - > вызов ф-ии конструктор класса
3) this --> вунтри функции конструктора -> this = новому пустому объекту
//4) __proto__ = User.prototype
*/

// function User() {
// 	this.login = 'test'
// 	this.password = '123'
// 	this.role = 'admin'
// 	this.create = function () {
// 		console.log('create')
// 	}
// 	// return []
// }
// const user1 = new User()
// console.log(user1)

/*
Возврат значения:
Обычно конструкторы ничего не возвращают явно. Их задача – записать все необходимое в this,
который в итоге станет результатом.

Но если return всё же есть, то применяется простое правило:
При вызове return с объектом, будет возвращён объект, а не this.
При вызове return с примитивным значением, примитивное значение будет отброшено.
Другими словами, return с объектом возвращает объект, в любом другом случае конструктор вернёт this.

Функции-конструкторы или просто конструкторы являются обычными функциями, именовать которые следует с заглавной буквы.
Конструкторы следует вызывать при помощи оператора new. Такой вызов создаёт пустой this в начале выполнения и возвращает заполненный в конце.
Мы можем использовать конструкторы для создания множества похожих объектов.
*/


// function HTMLElement(name) {
// 	this.tagName = name
// 	if (name === 'a') {
// 		this.redirect = function () {
// 			console.log('redirect')
// 		}
// 	} else if (name === 'image') {
// 		this.show = function () {
// 			console.log('show')
// 		}
// 	}
// }
// const img = new HTMLElement('image')
// const ahref = new HTMLElement('a')
// console.log(HTMLElement.prototype)

// HTMLElement.prototype.render = function () {
// 	console.log('render', this)
// }
////HTMLElement.prototype.redirect = function () {
////	console.log('redirect', this)
////}
// img.render()
// console.log(img)
// console.log(ahref)

// ------------------------Рефакторинг

// function HTMLElement() { }

// HTMLElement.prototype.render = function () {
// 	console.log('render -> HTMLElement')
// }

// function HTMLAhref(url) {
// 	this.url = url
// }
// HTMLAhref.prototype = Object.create(HTMLElement.prototype)
// // HTMLAhref.prototype.__proto__ = HTMLElement.prototype
// HTMLAhref.prototype.redirect = function () {
// 	console.log('redirect')
// }

// function HTMLImage(w, h) {
// 	this.w = w
// 	this.h = h
// }
// HTMLImage.prototype = Object.create(HTMLElement.prototype)
//HTMLImage.prototype.show = function () {
//	console.log('show')
//}
// const a = new HTMLAhref('https://google')
// const a1 = new HTMLAhref('https://google2')
// const img = new HTMLImage(10, 20)


// a.redirect()
// a1.render()

// console.log(a1)
// console.log(img)
//a.render()

// ------------------полиморфизм - переопределение поведение.
// console.log(img)

// HTMLImage.prototype.render = function () {
// 	console.log('render -> image')
// }
// img.render()


// ------------------------Инкапсуляция 
// function Slider(pictures) {
// 	let count = pictures.length
// 	let currentPicture = 0
// 	// this.currentPicture = 0
// 	this.nextPicture = function () {
// 		if (count > currentPicture) {
// 			++currentPicture
// 		}
// 	}

// 	this.previousPicture = function () {
// 		if (currentPicture != 0) {
// 			--currentPicture
// 		}
// 	}
// 	// this.showPicture = function () {
// 	// 	console.log(currentPicture)
// 	// }

// 	this.getCurrentPicture = function () {
// 		return currentPicture
// 	}
// 	// this.setCurrentPicture = function (value) {
// 	// 	if (value){
// 	// 		++value
// 	// 	}
// 	// }
// }

// const userSlider = new Slider(['img1.jpg', 'img2.jpg']);
// console.log(userSlider, 'userSlider');
// userSlider.currentPicture = 12;

// userSlider.nextPicture()
// userSlider.showPicture()
// userSlider.nextPicture()
// userSlider.showPicture()
// userSlider.previousPicture()
// userSlider.showPicture()


// console.log(userSlider.getCurrentPicture())
/*
Абстракции прячут детали и дают нам возможность разговаривать о задачах на высшем, или более абстрактном, уровне
Инкапсуляция - Языковой механизм для ограничения доступа к некоторым компонентам объекта.
Наследие - Является способом повторного использования кода существующих объектов или для определения подтипа существующего объекта или того и другого, в зависимости от поддержки языка программирования.
Полиморфизм - Возможность создания переменной, функции или объекта с более чем одной формой.
*/


/*
Class
Классом в объектно-ориентированной разработке называют шаблон/программный код, предназначенный для создания объектов и методов.
*/

// class Person {
// 	#defaulAge = 18 // приватная переменная  - поддерживается частично!!!
// 	// static password = '123' // статичесое создания вспомогательных функций 
// 	constructor(name, age) {
// 		this.name = name
// 		this.age = age || this.#defaulAge
// 		// this.password = Person.password
// 	}

// 	read() {
// 		console.log('Person ' + this.name + ' can read this document')
// 	}
// }
// const person = new Person('Alex', '23')

// console.log(person)
// // console.log(person.age)
// // console.log(Person.password)
// // console.log(person.#defaulAge)

// class Admin extends Person {

// 	constructor (name, age) {
// 		// this.login = 'test' // this Доступен после вызова медоа super()
// 		super(name, age) // Вызов функции конструктор родительского класса. Обязательно!
// 		this.login = 'test'
// 	}

// 	create() {
// 		console.log('create')
// 	}
	
// 	read() {
// 		super.read() // Частичное переопределение
// 		console.log('done');
// 	}
// } 
// const admin = new Admin('Leo', '29') // Admin.prototype.__proto__ === Person.prototype
// console.log(admin)
// // console.log(Admin.prototype.__proto__ === Person.prototype)
// admin.read()
// // admin.create()
