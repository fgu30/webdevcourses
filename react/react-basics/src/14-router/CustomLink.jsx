import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Route,
  NavLink
} from 'react-router-dom'
import './style.css'

class About extends Component {
  render() {
    return (
      <div>About</div>
    )
  }

  componentDidMount() {
    console.log(this.props)
  }
}
const Home = (props) => (<div>Home</div>)

class DashBord extends Component {
  render() {
    return (
      <div>DashBord</div>
    )
  }

  componentDidMount() {
    console.log(this.props)
  }
}

class CustomLink extends Component {
  render() {
    return (
      <>
        <Router>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/dashbord">DashBord</NavLink></li>
          </ul>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" render={(props)=><About {...props}></About>}></Route>
          <Route path="/dashbord" children={props => <DashBord {...props}></DashBord>}></Route>
          {/* <DashBord></DashBord> */}
        </Router>
      </>
    );
  }
}

export default CustomLink