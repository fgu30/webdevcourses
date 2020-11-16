// let str: string = ''
// let age: number = 12
// let show: boolean = true

// let arr: string[] = ['a', 'b']
// let arr2: Array<number> = [0]

// let arr3: [number, string] = [0, 'a']
// let arr4: any[] = ['a', 'c', 0]

// enum Color {
//   Red,
//   Green
// }

// class A {
//   state: string = 'abc'

//   foo(x: string, y: string): number {
//     return 3
//   }
// }

// const a:any = new A()

// let c: Color = Color.Green

// console.log(Color)

// function foo(x: string, y: string) {
//   return 3
// }

// let f = foo('a', 'b')

// let foo = (x: string, y: string): string => {
//   return 'a'
// }

// foo('a', 'b')

// interface Foo {
//   (x: number, y?: number) : number
// }

// let add: Foo = (x: number, y?: number): number => {
//   return x
// }

// let str = (x: string, y: string="a") => {
//   return x
// }

// str('x')

// let foo = (...rest: any[]) => {
//   console.log(rest)
// }

// foo(2, 3, 'a')

// function foo(x, y) {

// }

// function foo (x) {

// }

// foo(9, 10)
// foo(9)

// function reverse(x: number): number
// function reverse(x: string): string
// function reverse(x: string | number): string | number {
//   return x
// }

// reverse('a')

// interface Circle {
//   readonly x: number,
//   y: number,
//   radius: number,
//   result?: string,
//   [propsName: string]: any
// }

// let circle: Circle = {
//   x: 100,
//   y: 10,
//   radius: 5,
//   z: 10,
//   w: 100
// }

// // circle.x = 1000

// console.log(circle.x)

// class Animal {
//   name: string = ''
// }

// class Dog extends Animal {
//   echo(str: string): string {
//     return str + 'wang wang!'
//   }
// }

// class Cat extends Animal {
//   echo(str: string): string {
//     return str + 'miao miao!'
//   }
// }

// let dog = new Dog()
// console.log(dog.echo('erha '))
// let cat = new Cat()
// console.log(cat.echo('tom '))

// class Person {
//   name: string 
//   constructor(name: string) {
//     this.name = name
//   }

//   get getName() {
//     // console.log(this.name)
//     return this.name
//   }

//   set setName(name: string) {
//     this.name = name
//   }

//   work() {
//     console.log('i am working...')
//   }
// }

// class Student extends Person {
//   constructor(name: string) {
//     super(name)
//   } 

//   static Map = {
//     x: 0
//   }
// }

// // let person: Person = new Person('qingyao')
// let student: Student = new Student('xuemei')

// // student.setName('jiaxuan')
// // student.getName()

// student.setName = 'jiaxuan'
// console.log(student.getName)

// console.log(Student.Map.x)

// class React {
//   state = {

//   }
//   render() {

//   }
// }

// class Person {
//   public constructor(public name: string) {
//     this.name = name
//   }

//   public readonly height: number = 0

//   protected eat() {
//     console.log('I am eating...')
//   }
// }

// class Employee extends Person {
//   work() {
//     super.eat()
//     console.log('I am working...')
//   }
// }

// let p = new Employee('wangchao')
// p.height = 100


// abstract class React {
//   state = {
//     x: 0
//   }

//   abstract render(props: string): string

//   ComponentDidMount() {
//     console.log('mounted.')
//   }
// }

// class Header extends React {
//   render(props: string) {
//     return '<div></div>'
//   }

//   ComponentDidMount() {
//     console.log('child mounted.')
//   }
// }

// class Title extends Header {

// }

// let title:Header = new Title()
// title.ComponentDidMount()

// interface Alerm {
//   alerm(str: string): string
// }

// interface Light {
//   lightOn(): string
//   lightOff(): string
// }

// interface LightableAlarm extends Alerm {
//   lightOn(): string
//   lightOff(): string
// }

// class Door {

// }

// class SecurityDoor extends Door implements LightableAlarm {
//   alerm(str: string): string {
//     return 'alerm.....'
//   }

//   lightOn() {
//     return 'on'
//   }

//   lightOff() {
//     return 'off'
//   }
// }

// class Car implements Alerm, Light {
//   alerm(str: string): string {
//     return str + 'alerm...'
//   }

//   lightOn() {
//     return 'on'
//   }

//   lightOff() {
//     return 'off'
//   }
// }

// class Point {
//   x: number = 0
//   y: number = 0
// }

// interface Point3d extends Point {
//   z: number
// }

// let point3d: Point3d = {x: 1, y: 2, z: 3}

// interface Foo {
//   y: string
//   Fzz(x: string): string
// }

// let foo: Foo = {
//   y: 'abc',
//   Fzz: (x: string): string => {
//     return x
//   }
// }


// function createArray(length: number, value: any): Array<any> {
//   let arr = []
//   for (var i = 0; i < length; i++) {
//     arr[i] = value
//   }
//   return arr
// }

// console.log(createArray(3, 'x'))

// function createArray<T>(length: number, value: T): Array<T> {
//   let arr = []
//   for (var i = 0; i < length; i++) {
//     arr[i] = value
//   }
//   return arr
// }

// console.log(createArray(3, 3))

// function swap<A, B>(args: [A, B]): [B, A] {
//   return [args[1], args[0]]
// }

// console.log(swap<number, string>([7, 'abc']))

// interface likeWise {
//   length: number
// }

// function foo<T extends likeWise>(args: T): number {
//   // 100行逻辑
//   let a: number = args.length
//   // let w: T = args
//   // let len: number = 100
//   // // return args + len
//   // return w
//   return a
// }

// console.log(foo<string>('a'))

// function foo<T> (x: T, y: number): number {
//   // let num: T
//   return x + y
// }

// foo(3, 4)

// interface Foo {
//   <T>(x: T, y: number) : number
// }

// const foo: Foo = function<T>(x: T, y: number): number {
//   return x + y
// }

// foo<number>(4, 4)

// const foo: <T>(x: T, y: T) => T = (x, y) => x + y

// @strict: false
// class React<T, U> {
//   name: U
//   foo: <T>(x: T, y: T) => T

//   constructor(name: U) {
//     this.name = name
//   }
// }

// let react = new React<number, string>('a')

// react.foo = function(x, y) {
//   return x + y
// }

// react.foo = function<number>(x: number, y: number): number { return x + y }

// console.log(react.foo(undefined, undefined))

// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) {
//   return x + y;
// };

// let foo: Foo = function <T>(x: T, y: T): T {
//   return x
// }

// interface FooIn {
//   <T>(x: T, y: T) : T
// }

// class Foo<T, U> {
//   name: U
//   foo: (x: T, y: T) => T
// }

// let foo = new Foo<number, string>()

// foo.foo = 

// foo.name = 'a'
// foo.foo = function<T> (x: T, y: T) : T { return x}

// foo.foo<number>(3, 4)

// class GenericNumber {
//   add: <T>(x: T, y: T) => T
// }

// let myGenericNumber = new GenericNumber()
// // myGenericNumber.zeroValue = 0
// myGenericNumber.add = function<T>(x: T, y: T) {return x + y}

// interface Foo {
//   <T>(x: T, y: T): T
// }

// function Foo<T>(x: T, y: T): T[] {
//   return [x, y]
// }

// let foo: Foo = function<T>(x: T, y: T): T {
//   return x
// }

// class React<U, T> {
//   name: U
//   render: (x: T, y: T) => T

//   constructor(name: U, render: (x: T, y: T) => T) {
//     this.name = name
//     this.render = render
//   }
// }

// let react = new React<string, number>(
//   'a',
//   function(x) {
//     return x
//   }
// )

// console.log(react.render(4, 5))

// class React<U, T> {
//   name: U
//   render: (x: T, y: T) => T
// }

// let react = new React<string, number> ()

// react.render = function(x) { return x }

// interface Foo {
//   <T>(x: T, y: T): T
// }

// class React <U, Foo> {
//   name: U
//   foo: Foo
// }

// let react = new React<string, Foo>()
// react.name = 'a'
// react.foo = function<T>(x: T, y: T): T {
//   return x
// }
// react.foo = function(x, y) { return x + y }

// class Foo <T> {
//   add: (x: T, y: T) => T

//   constructor(add: (x: T, y: T) => T) {
//     this.add = add
//   }
// }

// let foo = new Foo<string>(
//   function(x, y) {
//     return x + y
//   }
// )

// foo.add = function(x, y) {
//   return x
// }

// foo.add("a", "b")

// const withProps = (target: Foo) => {
//   // target.prototype.props = function() {
//   //   console.log(0)
//   // }
//   console.log(target)
// }

// @withProps
// class Foo {
  
// }

// let foo = new Foo()

// function desc(target, nm) {
//   console.log(target) // 输出 [Function: Person]表示当前装饰的类
//   console.log(nm)
// }

// class Person {
//   @desc
//   name: string | undefined
//   age: number | 0

//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }

// interface Class {
//   new(...args: any[]): {}
// }

// function desc<T extends Class>(Target: T) {
//   console.log(Target)
//   return class extends Target {
//     gender = '男'
//     say() {
//       console.log(this.gender)
//     }
//   }
// }

// @desc
// class Person {
//   public name: string | undefined
//   public age: number | 0

//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   say() {
//     console.log(this.name, this.age)
//   }
// }

// let p = new Person('Felix', 20)
// console.log(p)
// p.say()

// function desc(target) {
//   return class extends target{
//     name = 'Felixlu'
//     age = 18
//     sayHell() {
//       console.log('我是重载后的', this.name)
//     }
//   }
// }

// @desc
// class Person {
//   public name: string | undefined
//   public age: number | 0

//   constructor(name: string, age: number) {
//     this.name
//     this.age
//   }

//   sayHell() {
//     console.log('hello word', this.name)
//   }
// }

// let p = new Person('a', 100)
// console.log(p)
// p.sayHell()

// function desc(str: string) {
//   return function(target: any) {
//     target.prototype.name = str
//   }
// }

// @desc('好程序员')
// class P {
//   say() {
//     console.log('说话')
//   }
// }

// let p = new P()
// console.log(p.name)

// function desc(prarams: string) {
//   return function(target: any, name: string, descriptor: {[propsName: string]: any}) {
//     const say = descriptor.value
//     descriptor.value = function(...args: Array<any>) {
//       say()
//       return args.map(v => String(v))
//     }
//   }
// }

// function propdesc(target: any, name: string) {
//   console.log(target)
//   target.print = function() {
//     console.log('print')
//   }
//   console.log(name)
// }

// function argsdesc(target: any, name: string, index: number) {
//   // console.log(target)
//   // console.log(name)
//   // console.log(index)
//   target[name]('a', 'b')
// }

// class Person {
//   // @propdesc
//   public name: string | undefined

//   // @propdesc
//   public age: number | 0

//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   gender: string

//   // @desc('hello')
//   say() {
//     console.log('说的方法')
//   }

//   print(@argsdesc str: string, @argsdesc str2: string) {
//     console.log(str, str2)
//   }
// }

// let p: any = new Person('a', 100)
// p.say()
// p.print()
// p.echo()

// console.log(p.say('a', 'b'))

// p.print('a', 'b')

function classdesc(target) {
  console.log('class:', target)
}

function propdesc(target, name) {
  console.log('prop: ', target, name)
}

function methoddesc(target, name, descriptor) {
  console.log('method: ', target, name, descriptor)
}

function argsdesc(target, name, index) {
  console.log('args:', target, name, index)
}

@classdesc
class Person {

  @propdesc
  name: string = 'hello'

  @methoddesc
  sayName(@argsdesc str: string): string {
    return str
  }
}