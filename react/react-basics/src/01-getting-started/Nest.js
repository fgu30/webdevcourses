import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div>header</div>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>content</div>
    )
  }
}

export default class App extends React.Component {
  render() {
    // return (
    //   createElement(
    //     Fragment,
    //     null,
    //     createElement(
    //       Header
    //     ),
    //     createElement(
    //       Content
    //     )
    //   )
    // )
    return (
      <>
        <Header></Header>
        <Content></Content>
      </>
    )
  }
}