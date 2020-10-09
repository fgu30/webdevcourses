import React, { Component } from 'react'
import classNames from 'classnames/bind'

import styles from './style.css'
import { DivContainer } from './styledCss.js'

// const styles = {
//   fontSize: '50px',
//   color: 'red'
// }


let cx = classNames.bind(styles)

class ClassStyle extends Component {
  render() {
    // js逻辑
    let className = cx({
      font: false
    })
    return (
      <>
        <div className={className}>hello</div>
        <DivContainer>
          world
        </DivContainer>
      </>
    )
  }
}

export default ClassStyle