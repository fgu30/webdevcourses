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

let foo = (...rest: any[]) => {
  console.log(rest)
}

foo(2, 3, 'a')