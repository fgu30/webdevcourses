import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import './style.css'
import 'animate.css'

class App extends Component {
  state = {
    show: true
  }

  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          appear={true}
          classNames={{
            appear: 'animate__animated',
            appearActive: 'animate__pulse',
            enter: 'animate__animated',
            enterActive: 'animate__rubberBand',
            exit: 'animate__animated',
            exitActive: 'animate__jello'
          }}
          mountOnEnter
          unmountOnExit
        >
          <div style={{fontSize: '50px'}}>hello</div>
        </CSSTransition>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default App