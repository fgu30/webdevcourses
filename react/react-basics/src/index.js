// Browser app, Native app
import React from 'react'
import ReactDOM from 'react-dom'

// import App from './App'
// import App from './01-getting-started/Nest'
// import App from './01-getting-started/ClassStyle'
// import App from './02-state-props/DataMount'
// import App from './02-state-props/PropTypes'
// import App from './02-state-props/State'
// import App from './03-state-uplifting/Parent'
// import App from './04-controled-component/App'
// import App from './05-render-data/App'
// import App from './06-event/App'
// import App from './07-form/App'
// import App from './07-form/Select'
// import App from './07-form/MultiPick'
// import App from './07-form/NameForm'
// import App from './07-form/File'
// import App from './08-todolist/TodoList'
// import App from './09-lifetimes/App'
// import App from './10-context/App'
// import App from './10-context/couter/App'
import App from './11-HOC/App'

// const App = (props) => {
//   let { title } = props
//   return <div>hello world {title}</div>
// }

// 语法糖
// class App extends React.Component {
//   render() {
//     return (
//       <div>hello world {this.props.title}</div>
//     )
//   }
// }

// const app = new App()

// React 元素， React 组件
// React 元素：camel-case, React 组件：pascal-case
ReactDOM.render(
  <App msg="world"></App>,
  document.querySelector('#root')
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
// }, 5000)