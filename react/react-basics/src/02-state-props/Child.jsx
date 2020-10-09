import React from 'react'

// export default class Child extends Component {
//   // 静态属性
//   // static defaultProps = {
//   //   title: 'default value'
//   // }

//   render() {
//     return (
//       <div>
//         child {this.props.title}
//       </div>
//     )
//   }
// }

// Child.defaultProps = {
//   title: 'default value'
// }

// 函数式组件/无状态组件
export default function Child(props) {
  return (
    <>
      <div>child {props.title}</div>
      {props.children}
    </>
  )
}

Child.defaultProps = {
  title: 'default value'
}