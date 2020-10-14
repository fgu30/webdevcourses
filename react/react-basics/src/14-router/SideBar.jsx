import React from 'react'

import {
  Route,
  Switch,
  NavLink
} from 'react-router-dom'

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]

export default function SideBar() {
  return (
    <div>
      <div className="sidebar">
        <ul>
          {
            routes.map(({path}) => {
              return (
                <li key={path}>
                  <NavLink to={path}>
                    {path === '/' ? 'home' : path.slice(1)}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <Switch>
          {
            routes.map(({path, exact, sidebar}) => {
              return (
                <Route 
                  key={path}
                  path={path}
                  exact={exact}
                  children={sidebar}
                ></Route>
              )
            })
          }
        </Switch>
      </div>
      
      <div className="main">
        <Switch>
          {
            routes.map(({path, exact, main}) => {
              return (
                <Route 
                  key={path}
                  path={path}
                  exact={exact}
                  children={main}
                ></Route>
              )
            })
          }
        </Switch>
      </div>
    </div>
  )
}
