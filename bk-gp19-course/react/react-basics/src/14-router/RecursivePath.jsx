import React from 'react'
import {
  Route,
  useRouteMatch,
  useParams,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

export default function RecursivePath(props) {
  return (
    <div>
      <Switch>
        <Route path="/:id">
          <Person></Person>
        </Route>
        <Redirect from="/" to="/0"></Redirect>
      </Switch>
    </div>
  )
}

function Person() {
  let { url } = useRouteMatch()
  let { id } = useParams()
  let item = find(id)

  return (
    <>
      <h1>{item.name}的朋友：</h1>
      
      <ul>
        {
          item.friends.map(id => {
            return (
              <li
                key={id}
              >
                <Link to={`${url}/${id}`}>{find(id)['name']}</Link>
              </li>
            )
          })
        }
      </ul>

      <Route path={`${url}/:id`}>
        <Person></Person>
      </Route>
    </>
  )
}

const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
]

const find = id => PEEPS.find(item => item.id === ~~id)