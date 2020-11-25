import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom'

const Home = () => (<div>Home</div>)
const About = () => (<div>About</div>)
const DashBord = () => (<div>DashBord</div>)

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashbord">DashBord</Link></li>
          </ul>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/dashbord" component={DashBord}></Route>
        </Router>
      </>
    );
  }
}

export default App;