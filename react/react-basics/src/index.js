// Browser app, Native app
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import store from "./13-redux/02-redux/redux+react/store";
import store from "./13-redux/03-todolist/store/index";
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
// import App from './11-HOC/App'
// import App from './12-Portal/App'
// import App from './13-redux/01-self-redux/App'
// import App from './13-redux/02-redux/redux+react/App'
import App from "./13-redux/03-todolist/TodoList";
// import App from './14-router/App'
// import App from './14-router/UrlParameters'
// import App from './14-router/Nesting'
// import App from './14-router/CustomLink'
// import App from './14-router/Redirect'
// import App from './14-router/Auth'
// import App from './14-router/Params.jsx'
// import App from './14-router/Page404'
// import App from './14-router/SideBar'
// import App from './14-router/RouteConfig.jsx'
// import App from './14-router/RecursivePath'
// import App from './15-immutable/App'
// import App from './16-lazy/02-react-lazy/App'
// import App from './17-hooks/UseState'
// import App from './17-hooks/UseEffect'
// import App from './17-hooks/UseContext'
// import App from './17-hooks/UseReducer'
// import App from './17-hooks/UseCallback'
// import App from './17-hooks/UseMemo'
// import App from './17-hooks/Memoization.jsx'
// import App from './17-hooks/UseRef'
// import App from './17-hooks/CustomHooks.jsx'
// import App from './17-hooks/UseImperativeHandle.jsx'
// import App from './18-mobx/Mobx'
// import App from './19-transition-group/App'
// import App from './20-redux-saga/Saga'

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

// import store from './13-redux/03-todolist/store/'
// import store from './20-redux-saga/store'

// import './20-redux-saga/mock'

// import { BrowserRouter } from 'react-router-dom'
// function render() {
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
// }

// store.subscribe(render)

// render()

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
// }, 5000)
