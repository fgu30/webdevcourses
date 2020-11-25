const {
  Map,
  List,
  Seq,
  fromJS,
  is,
  Set,
  Range
} = require('immutable')

function log(imm) {
  console.log(imm.toJS())
}

// const map = Map({x: 0, y: 1, z: 2})

// const result = map.flip().map(v => v.toUpperCase())
// console.log(result.join(','))

// const map1 = Map({
//   x: 0,
//   y: 1,
//   z: {
//     o: 230,
//     w: 10
//   }
// })

// const map2 = Map({
//   a: 100,
//   y: 200,
//   z: {
//     w: 300
//   }
// })

// const obj = {
//   y: 300
// }

// const map3 = map1.mergeDeep(map2, obj)
// console.log(map3)


// const list1 = List(['a', 'b', 'c'])
// const list2 = List(['d', 'f'])
// const arr = ['g', 'h']

// const list3 = list1.concat(list2, arr)
// log(list3)

// const obj = {x: 0, y: 1, z: 2}

// const mapObj = Map(obj)
// mapObj.map((value, key) => {
//   console.log(value)
// })

// const seq = Seq(obj).map((value, key) => {
//   console.log(value)
//   return 'www'
// })

// log(seq)

// const obj = {
//   x: 0,
//   y: [
//     {
//       z: {
//         a: 100
//       }
//     },
//     ['100', '200', {
//       w: 3000
//     }]
//   ]
// }

// Map({
//   x: 0,
//   y: List([
//     Map({
//       z: Map({
//         a: 100
//       })
//     })
//   ])
// })

// const result = fromJS(obj)
// console.log(result.get('y'))

// let obj = {
//   x: Map({a: 0}),
//   y: List(['a'])
// }

// console.log(obj)

// const deep = Map({ a: 1, b: 2, c: List([ 3, 4, 5 ]) })

// // console.log(deep.toObject())
// console.log(deep.toJS())

// const map1 = Map({a: 1, b: 2})

// const obj = {x: 0, y: 1}

// const map2 = Map({
//   ...obj,
//   c:3
// })

// console.log(map2.toJS())

// const list = List(['a', 'b', 'c'])
// const arr = [
//   'fff',
//   ...list,
//   'ggg'
// ]

// console.log(arr)


// const map = Map({
//   x: 0,
//   y: List(['a', Map({f: 900})]),
//   z: Map({
//     w: 100
//   })
// })

// let result = map.get('y').get(1).get('f')
// let result = map.getIn(['y', 1, 'f'])
// const result = map.setIn(['y', 1, 'f'], 9000)

// const result = map.update('x', (v) => {
//   return v + 101
// })
// const result = map.updateIn(['y', 1, 'f'], (v) => {
//   return v / 100
// })
// log(result)
// log(map)

// const obj1 = Map({ a: 1, b: 2, c: 3 })
// const obj2 = Map({ a: 1, b: 2, c: 3 })

// console.log(obj1 === obj2)
// console.log(obj1 == obj2)
// console.log(obj1.equals(obj2))

// const map1 = Map({ a: 1, b: 2, c: 3 })
// const map2 = Map({ a: 1, b: 2, c: 4 })
// const set = Set().add(map1)

// console.log(set.has(map2))

// const list1 = List(['a', 'b', Map({x: 0, y: 1})])

// const list2 = list1.updateIn([2], (v) => {
//   console.log(v)
// })

// list1.get(2).withMutations((v) => {
//   log(v)
// })

// list2 = list1.setIn([2, 'y'], 200)
// log(list2)

// let list = [1, 2, 3, 4, 5, 6, 7, 8]

// let result = list
//               .filter(v => {
//                 console.log(v)
//                 return v % 2 === 0
//               })
//               .map(v => {
//                 console.log(v)
//                 return v * v
//               })

// let result2 = Seq(list)
//               .filter(v => {
//                 console.log(v)
//                 return v % 2 === 0
//               })
//               .map(v => {
//                 console.log(v)
//                 return v * v
//               })


// console.log(result2.get(3))

const aRange = Range(1, Infinity)
  .skip(1000)
  .map(n => -n)
  .filter(n => n % 2 === 0)
  .take(2)
  .reduce((r, n) => r * n, 1);
  
console.log(aRange)