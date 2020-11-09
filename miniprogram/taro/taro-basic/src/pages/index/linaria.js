import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

const HelloWorld = styled(View) `
  font-size: ${props => props.size};
`

export {
  HelloWorld
}