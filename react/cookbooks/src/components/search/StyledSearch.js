import styled from 'styled-components'

const Container = styled.div `
  padding: .1rem .15rem;
  > div {
    display: flex;
    height: .4rem;
    border: solid 1px #ee742f;
    border-radius: .06rem;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    svg {
      width: .18rem;
      height: .18rem;
      margin-right: .06rem;
      fill: #ee742f;
    }
    span {
      color: #666;
    }
  }
`

export {
  Container
}