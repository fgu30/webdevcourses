import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Route,
  NavLink,
  Switch,
  withRouter,
  useLocation
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

const Home = withRouter((props) => (<div>Home</div>))


const Profile = (props) => {
  return (
    <div>Profile</div>
  )
}

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

@withRouter
class MyNavLink extends Component {
  state = {
    navlist: [
      {
        id: '001',
        name: 'home'
      },
      {
        id: '002',
        name: 'about'
      },
      {
        id: '003',
        name: 'dashbord'
      },
      {
        id: '004',
        name: 'profile'
      }
    ]
  }

  handleClick = (path) => {
    let history = this.props.history
    return (e) => {
      history.push('/' + path)
    }
  }

  render() {
    let pathname = this.props.location.pathname
    return (
      <>
        {
          this.state.navlist.map(value => {
            let {id, name} = value
            return (
              <li 
                key={id}
                onClick={this.handleClick(name)}
              >
                {pathname === '/'+name ? '>' : ''} {name}
              </li>
            )
          })
        }
      </>
    )
  }
}

class CustomLink extends Component {
  render() {
    return (
      <>
        <Router>
          <ul>
            <MyNavLink></MyNavLink>
          </ul>
          <Switch>
            <Route path="/about" render={(props)=><About {...props}></About>}></Route>
            <Route path="/dashbord" children={props => <DashBord {...props}></DashBord>}></Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
            <Route path="/"component={Home}></Route>
          </Switch>
          {/* <DashBord></DashBord> */}
        </Router>
      </>
    );
  }
}

export default CustomLink