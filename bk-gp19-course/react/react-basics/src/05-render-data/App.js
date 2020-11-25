import React, { Component } from 'react';

const data = '<h1>hello</h1>'

const Home = () => {
  return (
    <div>home</div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{__html: data}}
        ></div>
        <label htmlFor="abc">abc <input type="text" id="abc"/></label>
        {true && <Home></Home>}
      </div>
    );
  }
}

export default App;